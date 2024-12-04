import { useState, useEffect } from "react";
import { VciPlaceBetStyled } from "../../pages/Vci/style";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { apiVciCreateOrder, apiVciGetEmid } from "../../api/vciAPI";
import { useQuery } from "@tanstack/react-query";
import VciModal from "../../components/VciComponents/VciModal";
import { useSelector } from "react-redux";
import CloseRemind from "./CloseRemind";

export default function PlaceBet(props) {
  const {
    setCredit, // 設置credit數
    credit,
    setBetTeam, // 設置選擇的球隊
    setIncreaseState, // recharge api的enable控制
    increaseError,
    switchComponents, // 頁面狀態
    setTimeLeftState, // get-recharge api enabled參數
    timeLeftData, // get-recharge api
    timeLeftError,
    timeLeftLoading,
    timeLeftFetching,
    curBalance, // modal 顯示先前及當前餘額
    prevBalance,
    setPlaceBetDataState, // 過場動畫 根據create-order/ api決定過場動畫
    setAnimationDOMstate, // 過場動畫的dom狀態
    setBatteryState, // 充值電池顯示
    batteryState,
    actionData,
  } = props;

  const vciPriceWsRes = useSelector((state) => state.vciReducer.WSdata);

  const {
    data: emidData,
    error: emidError,
    isLoading: emidLoading,
    isFetching: emidFetching,
  } = useQuery({
    queryKey: ["vci", "emid", switchComponents],
    queryFn: () => apiVciGetEmid().then((res) => res.data),
    staleTime: Infinity,
    enabled: true,
    retry: false,
  });

  const [homePrice, setHomePrice] = useState(0);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayPrice, setAwayPrice] = useState(0);
  const [awayTeam, setAwayTeam] = useState("");
  const [placeBetState, setPlaceBetState] = useState(false);

  // 偵測team-icon 是否加載完畢
  const [homeIconState, setHomeIconState] = useState(false);
  const [awayIconState, setAwayIconState] = useState(false);

  // 中場關盤提示
  const [closeRemindState, setCloseRemindState] = useState(false);
  const closeRemindDOM = document.querySelector(".close-remind");

  // 下注初始值
  let initPlaceBet = {
    event_id: "",
    market_id: "",
    product_id: "",
    backlay: "",
    price: "",
    quantity: "",
  };
  const [placeBetData, setPlaceBetData] = useState(initPlaceBet);

  const handlePlaceBet = (payload) => {
    setPlaceBetData(payload);
  };

  useEffect(() => {
    if (placeBetData.event_id === "") return;
    setPlaceBetState(true);
  }, [placeBetData]);

  useEffect(() => {
    if (!emidData) return;
    if (emidData?.products.length === 0) return;

    setHomeTeam(emidData?.products[1]?.name);
    setAwayTeam(emidData?.products[0]?.name);

    setHomePrice(+emidData?.products[1]?.bo);
    setAwayPrice(+emidData?.products[0]?.bo);
  }, [emidData]);

  useEffect(() => {
    if (!vciPriceWsRes) return;
    if (vciPriceWsRes?.type == "odds") {
      setHomePrice(+vciPriceWsRes?.resp.ps[1].bo);
      setAwayPrice(+vciPriceWsRes?.resp.ps[0].bo);
    }
    if (vciPriceWsRes?.type == "match") {
      setHomePrice(0);
      setAwayPrice(0);
    }
  }, [vciPriceWsRes]);

  useEffect(() => {
    let timer;
    if (vciPriceWsRes?.resp?.s === "suspended") {
      setCloseRemindState(true);
    }
    if (vciPriceWsRes?.resp?.s === "open") {
      closeRemindDOM?.classList?.add("close");
      timer = setTimeout(() => {
        setCloseRemindState(false);
      }, 400);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [vciPriceWsRes?.resp?.s]);

  // 下單
  const { data, error, isFetching, isLoading } = useQuery({
    queryKey: ["vci-order", placeBetData, placeBetState],
    queryFn: () => apiVciCreateOrder(placeBetData).then((res) => res.data),
    staleTime: 10,
    retry: false,
    enabled: placeBetState,
  });

  useEffect(() => {
    if (!data) return;
    setPlaceBetDataState(data);
  }, [data]);

  const creditArr = [100, 200, 500];

  // 剩餘次數
  const [curCount, setCurCount] = useState(0);

  // 根據timeLeft api 設置剩餘次數state 且data 或error 成功回來時將enabled設置為false
  useEffect(() => {
    if (!!timeLeftData) {
      setTimeLeftState(false);
      setCurCount(timeLeftData?.time_left);
    }
    if (!!timeLeftError) {
      setTimeLeftState(false);
      setCurCount(0);
    }
  }, [timeLeftData, timeLeftFetching, timeLeftLoading, timeLeftError]);

  // 控制modal出現
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <VciModal
        mode={"charge"}
        prevPrice={prevBalance}
        curPrice={curBalance}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <VciPlaceBetStyled className="place-bet">
        {closeRemindState && <CloseRemind className="close-remind" />}
        <div className="credit-area">
          <div className="credit-word">Credit</div>
          <div className="credit-group">
            {creditArr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`credit ${credit === item ? "active" : ""}`}
                  onClick={() => {
                    setCredit(item);
                  }}
                >
                  {`${item}`}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bet-group">
          <div
            className="bet-block home"
            onClick={(e) => {
              if (actionData?.action === "cashout") return;
              if (homePrice == 0) return;
              e.stopPropagation();
              setBetTeam("Home");
              const payload = {
                ...initPlaceBet,
                event_id: emidData?.event.event_id,
                market_id: emidData?.market.market_id,
                product_id: emidData?.products[1].id,
                backlay: "b",
                price: homePrice.toString(),
                quantity: credit.toString(),
              };
              handlePlaceBet(payload);
              setAnimationDOMstate(true);
            }}
          >
            <div className="bet-content home">
              <div className={`bet-btn ${homePrice == 0 ? "zero-price" : ""}`}>
                <img
                  className={`team-icon ${
                    homeIconState ? "loaded" : "loading"
                  }`}
                  onLoad={() => {
                    setHomeIconState(true);
                  }}
                  src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/teamIcon/${homeTeam}.svg`}
                />
              </div>
              <div className="bet-text-num">
                <div className="bet-title">Home</div>
                <div
                  className={`bet-num ${
                    homePrice > emidData?.products[1]?.bo ? "positive" : ""
                  } ${
                    homePrice < emidData?.products[1]?.bo ? "negative" : ""
                  } `}
                >
                  {homePrice === 0 ? (
                    <span className="zero-loader home" />
                  ) : (
                    <>
                      <div className="bet-num-span">
                        <span className="num">{homePrice}</span>
                        <span className="arrow-span">
                          {homePrice > emidData?.products[1]?.bo && (
                            <IoMdArrowDropup />
                          )}
                          {homePrice < emidData?.products[1]?.bo && (
                            <IoMdArrowDropdown />
                          )}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="bet-block away"
            onClick={(e) => {
              if (actionData?.action === "cashout") return;
              if (awayPrice == 0) return;
              e.stopPropagation();
              setBetTeam("Away");
              const payload = {
                ...initPlaceBet,
                event_id: emidData?.event.event_id,
                market_id: emidData?.market.market_id,
                product_id: emidData?.products[0].id,
                backlay: "b",
                price: awayPrice.toString(),
                quantity: credit.toString(),
              };
              handlePlaceBet(payload);
              setAnimationDOMstate(true);
            }}
          >
            <div className="bet-content away">
              <div className={`bet-btn ${awayPrice == 0 ? "zero-price" : ""}`}>
                <img
                  className={`team-icon ${
                    awayIconState ? "loaded" : "loading"
                  }`}
                  onLoad={() => {
                    setAwayIconState(true);
                  }}
                  src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/teamIcon/${awayTeam}.svg`}
                />
              </div>
              <div className="bet-text-num">
                <div className="bet-title ">Away</div>
                <div
                  className={`bet-num ${
                    awayPrice > emidData?.products[0]?.bo ? "positive" : ""
                  } ${
                    awayPrice < emidData?.products[0]?.bo ? "negative" : ""
                  } `}
                >
                  {awayPrice === 0 ? (
                    <span className="zero-loader away" />
                  ) : (
                    <>
                      <div className="bet-num-span">
                        <span className="num">{awayPrice}</span>
                        <span className="arrow-span">
                          {awayPrice > emidData?.products[0]?.bo && (
                            <IoMdArrowDropup />
                          )}
                          {awayPrice < emidData?.products[0]?.bo && (
                            <IoMdArrowDropdown className="arrow" />
                          )}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recharge-area">
          <div className="recharge-title">
            <span className="text">Balance Battery</span>
            {curCount == 0 && (
              <span className="zero-count-text">Fully recharged tomorrow</span>
            )}
          </div>
          <div className="battery-area">
            {[...Array(5)].map((_, index) => (
              <div
                className={`battery-box ${
                  timeLeftError || increaseError ? "active" : ""
                } ${index < curCount ? "" : "active"}`}
                key={index}
                id={`${index}_battery-box`}
              ></div>
            ))}
          </div>
          <div className="charge-btn-area">
            <div
              className={`charge-btn ${curCount === 0 ? "zero-count" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (timeLeftError) return;
                if (batteryState === -1) return;
                if (curCount === 0) return;
                if (showModal) return;
                setIncreaseState(true);
                document
                  .getElementById(`${batteryState - 1}_battery-box`)
                  .classList.add("active");
                setBatteryState(batteryState - 1);
                setShowModal(true);
              }}
            >
              <img
                className="charge-icon"
                src={`https://sprodm.uni247.xyz/images-v3/VciPwa/chargeIcon20.svg`}
              />
              <span className="btn-text">Charge</span>
              <span className="btn-text">{`（${curCount}/5）`}</span>
            </div>
          </div>
        </div>
      </VciPlaceBetStyled>
    </>
  );
}
