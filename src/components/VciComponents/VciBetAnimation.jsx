import { useState, useEffect } from "react";
import { VciBetAnimationStyled } from "../../pages/Vci/style";

export default function VciBetAnimation(props) {
  const {
    betTeam,
    setSwitchComponents,
    data,
    setAnimationDOMstate,
    animationDOMstate,
    switchComponents,
  } = props;

  const animationDOM = document.querySelector(".bet-animation-area");
  const leftAnimationDOM = document.querySelector(".animation-left-area");
  const rightAnimationDOM = document.querySelector(".animation-right-area");

  // 等data回來 先切換頁面至result

  useEffect(() => {
    if (!data) return;
    if (!animationDOM) return;
    const timeoutId = setTimeout(() => {
      setSwitchComponents("results");
      animationDOM.classList.remove("start");
      animationDOM.classList.add("end");
      leftAnimationDOM.classList.remove("start");
      rightAnimationDOM.classList.remove("start");
    }, 1700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [data, animationDOM]);

  // 再將animationDOM移除

  useEffect(() => {
    if (!switchComponents) return;
    if (switchComponents === "results") {
      const timeoutId = setTimeout(() => {
        setAnimationDOMstate(false);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [switchComponents]);

  useEffect(() => {
    if (!animationDOM) return;

    const timeoutId = setTimeout(() => {
      animationDOM.classList.add("start");
      leftAnimationDOM.classList.add("start");
      rightAnimationDOM.classList.add("start");
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationDOM]);

  return (
    <>
      {animationDOMstate && (
        <VciBetAnimationStyled className="bet-animation-area">
          <div className={`animation-left-area ${betTeam} `}>{betTeam}</div>
          <div className={`animation-right-area ${betTeam} `}></div>
        </VciBetAnimationStyled>
      )}
    </>
  );
}
