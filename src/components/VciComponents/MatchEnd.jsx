import React, { useEffect, useState } from "react";
import { VciMatchEndStyled, VciModalMaskStyled } from "../../pages/Vci/style";

export default function MatchEnd(props) {
  const {
    setSwitchComponents,
    vciCashoutWsRes,
    setCashoutState,
    handleCashOut,
    setNewBalance,
    cashoutPayload,
    setMatchEnd,
  } = props;
  const [maskDOM, setMaskDOM] = useState(true);

  return (
    <>
      <VciModalMaskStyled className="vci-mask" showModal={true} />

      <VciMatchEndStyled className="match-end">
        <div className="gray-bgImage" />

        <div className="vci-content-box">
          <div className="close-tag" onClick={()=>{
            setSwitchComponents('placeBet')
          }}>
            <img
              src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/close.png`}
            />
          </div>
          <div className="vci-content">
            <div className="vci-title">Match Ended</div>
            <div className="vci-text">
              Click <span className="primary-text">OK</span> to return to the
              homepage.
            </div>
          </div>
          <div
            className="vci-btn"
            onClick={() => {
              // 以下為cashout fn
              // if (!vciCashoutWsRes) return;
              // setCashoutState(true);
              // handleCashOut(cashoutPayload);
              // setMatchEnd(true);
              // setNewBalance(true);
              setSwitchComponents('placeBet')
            }}
          >
            OK
          </div>
        </div>
      </VciMatchEndStyled>
    </>
  );
}
