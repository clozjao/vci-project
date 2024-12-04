import React, { useState, useEffect } from "react";
import VciModal from "./VciModal";
import { VciBetResultStyled } from "../../pages/Vci/style";
import { numFormat } from "../../utils/format";

import { apiVciCashoutUpdate } from "../../api/vciCashoutWS";
import { apiVciCashoutHandle } from "../../api/vciAPI";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import MatchEnd from "./MatchEnd";

export default function Results(props) {
  const {
    betTeam,
    setSwitchComponents,
    setNewBalance,
    cashoutState,
    setCashoutState,
    curBalance,
    prevBalance,
    newBalance,
    walletData,
    walletFetching,
    setBetTeam,
  } = props;
  const { WSdata } = useSelector((state) => state.vciReducer);

  const [matchEndDOM , setMetchEndDOM] = useState(false);

  useEffect(()=>{
    if(WSdata?.type === "settle"){
      setMetchEndDOM(true)
    }
  },[WSdata])

  const [showModal, setShowModal] = useState(false);
  const [profitPositive, setProfitPositive] = useState(true);

  const { vciCashoutWsRes } = apiVciCashoutUpdate(null, true);

  const [cashoutProfit, setCashoutProfit] = useState(0);

  const [cashoutPayload, setCashoutPayload] = useState(null);

  const [cashoutPayloadState, setCashoutPayloadState] = useState(null);

  const [resultModalClose, setResultModalClose] = useState(false);

  const [matchEnd, setMatchEnd] = useState(false);

  useEffect(() => {
    if (!vciCashoutWsRes) return;
    
    setCashoutProfit(vciCashoutWsRes.resp.cp);
    setCashoutPayload({
      event_id: vciCashoutWsRes?.resp.e,
      market_id: vciCashoutWsRes?.resp.m,
      amount: vciCashoutWsRes.resp.ca,
    });

    if (vciCashoutWsRes.resp.cp < 0) {
      setProfitPositive(false);
    }
    if (vciCashoutWsRes.resp.cp >= 0) {
      setProfitPositive(true);
    }
  }, [JSON.stringify(vciCashoutWsRes)]);

  const handleCashOut = (cashoutPayload) => {
    console.log('handleCashOut')
    setCashoutPayloadState(cashoutPayload);
  };


  const { data, error, isFetching, isLoading } = useQuery({
    queryKey: ["vci", "cashout", cashoutPayloadState],
    queryFn: () =>
      apiVciCashoutHandle(cashoutPayloadState).then((res) => res.data),
    staleTime: Infinity,
    retry: false,
    enabled: cashoutState && !!cashoutPayloadState,
  });

  // useEffect(()=>{
  //   // 若後端沒有做自動結算 則使用此fn
  //   if(!!data && matchEnd){
  //     setSwitchComponents('placeBet')
  //   }
  // },[matchEnd , data])


  useEffect(() => {
    if (data) {
      setCashoutState(false);
    }
    if (error) {
      setCashoutState(false);
    }
  }, [data, error, isLoading, isFetching]);

  useEffect(() => {
    if (!newBalance) return;
    if (!walletData) return;
    if (walletFetching) return;
    setShowModal(true);
    setNewBalance(false);
  }, [newBalance, walletData]);

  useEffect(() => {
    return () => {
      setBetTeam("");
    };
  }, []);
  return (
    <>
      <VciModal
        mode={"result"}
        success={profitPositive}
        prevPrice={prevBalance}
        curPrice={curBalance}
        showModal={showModal}
        setShowModal={setShowModal}
        setSwitchComponents={setSwitchComponents}
        resultModalClose={resultModalClose}
        newBalance={newBalance}
        walletData={walletData}
      />
      {matchEndDOM && (
        <MatchEnd
          setSwitchComponents={setSwitchComponents}
          // vciCashoutWsRes={vciCashoutWsRes}
          // setCashoutState={setCashoutState}
          // handleCashOut={handleCashOut}
          // setNewBalance={setNewBalance}
          // cashoutPayload={cashoutPayload}
          // setMatchEnd={setMatchEnd}
        />
      )}
      <VciBetResultStyled className="bet-result">
        <div className="team-profit">
          <div className={`team-area ${betTeam == "Away" ? "away" : ""}`}>
            Away
          </div>

          <div className="expect-text">Expect Profit</div>
          <div
            className={`expect-num ${profitPositive ? "positive" : "negative"}`}
          >
            {` ${numFormat(Number(cashoutProfit).toFixed(2))}`}
          </div>
        </div>
        <div
          className={`open-modal ${!vciCashoutWsRes ? "disabled" : ""} ${
            betTeam == "Away" ? "away" : ""
          } `}
          onClick={() => {
            if (!vciCashoutWsRes) return;
            setCashoutState(true);
            handleCashOut(cashoutPayload);
            setResultModalClose(true);
            setNewBalance(true);
          }}
        >
          Close the bet
        </div>
        <div className="logo-box" />
      </VciBetResultStyled>
    </>
  );
}
