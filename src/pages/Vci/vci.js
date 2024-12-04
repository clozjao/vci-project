import { useState, useEffect } from "react";
import { VciStyled, VciLiveWrapper } from "./style";
import { numFormat } from "../../utils/format";
import PlaceBet from "../../components/VciComponents/PlaceBet";
import Results from "../../components/VciComponents/Results";
import { useQuery } from "@tanstack/react-query";
import {
  apiGetVciUserWallet,
  apiVciIncreaseBallance,
  apiGetVciRechargeTimeLeft,
  apiVciGetEmid,
  apiGetVciAction,
} from "../../api/vciAPI";
import useListenerLmtHeightV3 from "./getIframeHeight";
import VciBetAnimation from "../../components/VciComponents/VciBetAnimation";
import { apiVciPriceUpdate } from "../../api/vciPriceWS";
import { useSelector } from "react-redux";

export default function Vci() {
  // const queryClient = useQueryClient();

  const vciPriceWsRes = useSelector((state) => state.vciReducer.WSdata);

  const { iframeBodyHeight } = useListenerLmtHeightV3();

  apiVciPriceUpdate(null, true);

  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    if (iframeBodyHeight > 260 && iframeBodyHeight !== iframeHeight) {
      setIframeHeight(iframeBodyHeight);
    }
  }, [iframeBodyHeight]);

  const defaultHeight = 330;

  // 切換頁面
  const [switchComponents, setSwitchComponents] = useState(null);
  const [newBalance, setNewBalance] = useState(false);

  // 開場影片
  const [openingState, setOpeningState] = useState(true);
  const openingVideoDOM = document.querySelector(".opening-video");

  // 中場關盤影片
  const halfVideoDOM = document.querySelector(".half-video");

  useEffect(() => {
    if (vciPriceWsRes?.resp?.s === "suspended") {
      halfVideoDOM.classList.add("open")
    }
    if(vciPriceWsRes?.resp?.s === "open"){
      halfVideoDOM.classList.remove("open")
    }
  }, [vciPriceWsRes?.resp?.s]);

  // 偵測使用者動作
  const [actionPayload, setActionPayload] = useState(null);

  // 取得第一次進入頁面emid 給直播用
  const {
    data: emidData,
    error: emidError,
    isLoading: emidLoading,
    isFetching: emidFetching,
  } = useQuery({
    queryKey: ["vci", "emid"],
    queryFn: () => apiVciGetEmid().then((res) => res.data),
    staleTime: Infinity,
    enabled: true,
    retry: false,
  });

  const iframeDOM = document.getElementById("vci-live");

  useEffect(() => {
    if (!!emidData) {
      iframeDOM.src = `https://lmtloader.ckex.xyz/v3-new-lmt-bk-language/preview.html?matchId=${emidData?.event.event_id}&language=en&bal=0&autoplay&mute=1`;
      iframeDOM.style.backgroundColor = "transparent";

      setActionPayload({
        event_id: emidData?.event.event_id,
        market_id: emidData?.market.market_id,
      });
    }
  }, [emidData]);

  // 偵測User現在可以做什麼事情
  const {
    data: actionData,
    error: actionError,
    isFetching: actionFetching,
    isLoading: actionLoading,
  } = useQuery({
    queryKey: ["vci-action", actionPayload, switchComponents],
    queryFn: () => apiGetVciAction(actionPayload).then((res) => res.data),
    retry: false,
    enabled: !!actionPayload,
    staleTime: Infinity,
  });

  useEffect(() => {
    let timer;

    if (!!iframeHeight) {
      openingVideoDOM?.classList.add("close");
      timer = setTimeout(() => {
        setOpeningState(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [iframeHeight]);

  const [credit, setCredit] = useState(100);
  const [betTeam, setBetTeam] = useState(null);
  const [curBalance, setCurBalance] = useState(0);
  const [increaseState, setIncreaseState] = useState(false);
  const [cashoutState, setCashoutState] = useState(false);

  // 因應過場動畫需要放置於父元素 設立一個placeBetDataState
  const [placeBetDataState, setPlaceBetDataState] = useState(null);
  // 過場動畫
  const [animationDOMstate, setAnimationDOMstate] = useState(false);

  // 更新錢包餘額
  const {
    data: increaseData,
    error: increaseError,
    isFetching: increaseFetching,
    isLoading: increaseLoading,
  } = useQuery({
    queryKey: ["vci", "increase"],
    queryFn: () => apiVciIncreaseBallance().then((res) => res.data),
    staleTime: 10,
    enabled: increaseState,
    retry: false,
  });

  // 錢包餘額 此api 僅用於剛進入app時首次得到餘額及下注後的餘額 newBalance為boolean
  const {
    data: walletData,
    error: walletError,
    isFetching: walletFetching,
    isLoading: walletLoading,
  } = useQuery({
    queryKey: ["vciWallet", switchComponents, newBalance],
    queryFn: () => apiGetVciUserWallet().then((res) => res.data),
    staleTime: 1000,
    enabled: true,
    retry: false,
  });

  const balance = walletData?.balance;
  const balanceValue = curBalance
    ? `${numFormat(Number(curBalance).toFixed(0))}`
    : `0`;

  // 錢包Api 第一次及下注完更新
  useEffect(() => {
    if (!!walletData) {
      setCurBalance(() => balance);
    }
  }, [walletFetching, walletLoading, walletData]);

  // 充值Api 於充值時更新
  useEffect(() => {
    if (!!increaseData) {
      setCurBalance(() => increaseData?.balance);
      setIncreaseState(false);
    }
  }, [increaseData, increaseError, increaseFetching, increaseLoading]);

  // 儲存前一次的餘額
  const [prevBalance, setPrevBalance] = useState(null);

  useEffect(() => {
    setPrevBalance(() => curBalance);
  }, [curBalance]);

  // 電池style
  const [batteryState, setBatteryState] = useState(5);

  // 允許充值的state
  const [timeLeftState, setTimeLeftState] = useState(true);

  useEffect(() => {
    if (!increaseData) return;
    if (!!increaseFetching) return;
    setTimeLeftState(true);
  }, [increaseFetching, increaseData]);

  // 充值次數
  const {
    data: timeLeftData,
    error: timeLeftError,
    isFetching: timeLeftFetching,
    isLoading: timeLeftLoading,
  } = useQuery({
    queryKey: ["vci", "timeLeft", batteryState],
    queryFn: () => apiGetVciRechargeTimeLeft().then((res) => res.data),
    staleTime: 1000,
    enabled: batteryState > -1 && timeLeftState,
    retry: false,
  });

  return (
    <VciStyled className="vci">
      <div className="vci-main-area">
        {!!betTeam && (
          <VciBetAnimation
            setAnimationDOMstate={setAnimationDOMstate}
            animationDOMstate={animationDOMstate}
            betTeam={betTeam}
            data={placeBetDataState}
            switchComponents={switchComponents}
            setSwitchComponents={setSwitchComponents}
          />
        )}
        <VciLiveWrapper
          className={`live `}
          iframeBodyHeight={
            iframeBodyHeight === 0 ? defaultHeight : iframeBodyHeight
          }
        >
          {openingState && (
            <video autoPlay muted loop playsInline className="opening-video">
              <source
                src="https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/openingV3.mp4"
                type="video/mp4"
              />
            </video>
          )}
            <video autoPlay muted loop playsInline className="half-video">
              <source
                src="https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/middleVideo.mp4"
                type="video/mp4"
              />
            </video>
          <iframe id={"vci-live"} src={``} allow="autoplay" muted />
        </VciLiveWrapper>
        <div className="balance-area">
          <div className="text">{`Balance `}</div>
          <div className="num">{`$ ${balanceValue}`}</div>
        </div>
      </div>
      {switchComponents === "results" || actionData?.action === "cashout" ? (
        <Results
          setSwitchComponents={setSwitchComponents}
          betTeam={betTeam}
          setNewBalance={setNewBalance}
          setBetTeam={setBetTeam}
          newBalance={newBalance}
          setCashoutState={setCashoutState}
          cashoutState={cashoutState}
          curBalance={curBalance}
          prevBalance={prevBalance}
          walletData={walletData}
          walletFetching={walletFetching}
        />
      ) : (
        <PlaceBet
          actionData={actionData}
          setCredit={setCredit}
          credit={credit}
          switchComponents={switchComponents}
          setBetTeam={setBetTeam}
          setIncreaseState={setIncreaseState}
          increaseError={increaseError}
          timeLeftData={timeLeftData}
          timeLeftError={timeLeftError}
          timeLeftFetching={timeLeftFetching}
          timeLeftLoading={timeLeftLoading}
          curBalance={curBalance}
          prevBalance={prevBalance}
          setPlaceBetDataState={setPlaceBetDataState}
          setAnimationDOMstate={setAnimationDOMstate}
          setBatteryState={setBatteryState}
          batteryState={batteryState}
          setTimeLeftState={setTimeLeftState}
        />
      )}
    </VciStyled>
  );
}
