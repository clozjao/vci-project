import styled from "styled-components";

export const VciStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px 12px 16px;
  background-color: #131228;
  width: 100%;
  height: calc(100% - 71px);
  overflow-x: hidden;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    padding: 0;
    height: unset;
    margin-bottom: 66px;
  }
  .vci-main-area {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    @media (min-width: 600px) {
      padding: 8px 0 8px 16px;
      position: relative;
      max-width: 410px;
      height: unset;
      margin-bottom: 0;
      width: 60%;
      height: calc(100% + 72px);
    }

    .balance-area {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
      padding: 8px 16px;
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 0.12);
      gap: 8px;
      .text {
        font-size: 20px;
        font-family: "Roboto";
        color: #00929b;
        font-weight: 600;
      }
      .num {
        font-size: 24px;
        font-weight: 800;
        font-style: italic;
        color: #68f6ff;
        line-height: 1;
      }
    }
  }
`;

export const VciLiveWrapper = styled.div`
  /* height:${({ iframeBodyHeight }) => `${iframeBodyHeight}px`}; */
  height: 300px;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 8px;
  @media (min-width: 600px) {
    height: 279px;
    margin-bottom: 16px;
  }
  .opening-video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    z-index: 2;
    background: rgba(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    &.close{
      animation: closeVideo 0.4s linear forwards;
    }
    @keyframes closeVideo {
      0%{
        height: 300px;
      }
      100%{
        height: 0;
      }
    }
    @media (min-width: 600px) {
      height: 279px;
    }
  }
  .half-video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    z-index: 1;
    background: rgba(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: closeVideo 0.4s linear forwards;
    &.open{
      animation: openVideo 0.4s linear forwards;
    }
    @keyframes openVideo {
      0%{
        height: 0;
      }
      100%{
        height: 300px;
      }
    }
    @keyframes closeVideo {
      0%{
        height: 300px;
      }
      100%{
        height: 0;
      }
    }
    @media (min-width: 600px) {
      height: 279px;
    }
  }
  iframe {
    transition: 0.4s;
    height: 100%;
    width: 100%;
    border-width: 0;
    background: #000;
  }
`;

export const VciPlaceBetStyled = styled.div`
  position: relative;
  @media (min-width: 600px) {
    width: calc(100% - 410px);
    padding: 8px 16px;
    overflow-x: hidden;
  }

  .credit-area {
    color: #00929b;
    margin-bottom: 8px;

    .credit-word {
      font-size: 24px;
      font-style: italic;
      font-family: "Roboto";
      font-weight: 600;
      line-height: 1;
      margin-bottom: 8px;
      letter-spacing: 0.18px;
      @media (min-width: 600px) {
        margin-bottom: 16px;
      }
    }
    .credit-group {
      font-family: "Roboto";
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 16px;
      .credit {
        flex: 1;
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 24px;
        text-align: center;
        background-color: rgba(18, 18, 18, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.12);
        line-height: 1.5;
        &.active {
          color: #68f6ff;
          border: 1px solid #68f6ff;
          background: #000;
          box-shadow: -2px -2px 6px 0px rgba(255, 255, 255, 0.5),
            2px 2px 6px 0px rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .bet-group {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    position: relative;
    height: 110px;
    @media (min-width: 600px) {
      margin-bottom: 20px;
    }
    .bet-block {
      flex: 1;
      padding: 14px 16px;
      border-radius: 2px;
      font-family: "Roboto";
      font-weight: 800;
      font-style: italic;
      position: absolute;
      width: 63%;
      cursor: pointer;
      user-select: none;
      .bet-content {
        transform: skewX(15deg);
        display: flex;
        flex-direction: column;
        gap: 8px;
        &.away {
          align-items: end;
          margin-right: 16px;
        }
        &.home {
          margin-left: 16px;
        }
        .bet-text-num {
          display: flex;
          align-items: center;
          gap: 14px;
          .bet-title {
            font-size: 20px;
            line-height: 1.2;
            font-style: normal;
          }
          .bet-num {
            font-size: 24px;
            display: flex;
            justify-content: start;
            align-items: center;
            width: 70px;

            .bet-num-span {
              line-height: 1;
              display: flex;
              align-items: center;
              width: 100%;
              justify-content: center;
              .arrow-span {
                height: 24px;
              }
            }
            &.positive {
              color: #3aff66;
            }
            &.negative {
              color: #f94a5f;
            }
            .zero-loader {
              height: 24px;
              position: relative;
              background-repeat: no-repeat;
              background-size: 8px 24px;
              width: 70px;
              background-position: 0px, 12px center, 24px center, 36px center,
                48px center, 60px center, 68px center;
              &.home {
                background-image: var(--home-blight-bg), var(--home-blight-bg),
                  var(--home-blight-bg), var(--home-dark-bg),
                  var(--home-dark-bg), var(--home-dark-bg);
                animation: spikeUpHome 0.4s linear infinite alternate;
              }
              &.away {
                background-image: var(--away-blight-bg), var(--away-blight-bg),
                  var(--away-blight-bg), var(--away-dark-bg),
                  var(--away-dark-bg), var(--away-dark-bg);
                animation: spikeUpAway 0.4s linear infinite alternate;
              }
            }
            @keyframes spikeUpHome {
              // 0 16 33 50 66 83 100
              0% {
                background-image: var(--home-blight-bg), var(--home-blight-bg),
                  var(--home-blight-bg), var(--home-dark-bg),
                  var(--home-dark-bg), var(--home-dark-bg);
              }
              33% {
                background-image: var(--home-dark-bg), var(--home-blight-bg),
                  var(--home-blight-bg), var(--home-blight-bg),
                  var(--home-dark-bg), var(--home-dark-bg);
              }
              66% {
                background-image: var(--home-dark-bg), var(--home-dark-bg),
                  var(--home-blight-bg), var(--home-blight-bg),
                  var(--home-blight-bg), var(--home-dark-bg);
              }
              100% {
                background-image: var(--home-dark-bg), var(--home-dark-bg),
                  var(--home-dark-bg), var(--home-blight-bg),
                  var(--home-blight-bg), var(--home-blight-bg);
              }
            }
            @keyframes spikeUpAway {
              // 0 16 33 50 66 83 100
              0% {
                background-image: var(--away-blight-bg), var(--away-blight-bg),
                  var(--away-blight-bg), var(--away-dark-bg),
                  var(--away-dark-bg), var(--away-dark-bg);
              }
              33% {
                background-image: var(--away-dark-bg), var(--away-blight-bg),
                  var(--away-blight-bg), var(--away-blight-bg),
                  var(--away-dark-bg), var(--away-dark-bg);
              }

              66% {
                background-image: var(--away-dark-bg), var(--away-dark-bg),
                  var(--away-blight-bg), var(--away-blight-bg),
                  var(--away-blight-bg), var(--away-dark-bg);
              }
              100% {
                background-image: var(--away-dark-bg), var(--away-dark-bg),
                  var(--away-dark-bg), var(--away-blight-bg),
                  var(--away-blight-bg), var(--away-blight-bg);
              }
            }
          }
        }
        .bet-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          background-color: #000;

          &.zero-price {
            background-color: rgba(255, 255, 255, 0.08);
            opacity: 0.5;
            cursor: auto;
          }
          .team-icon {
            width: 100%;
            height: 100%;

            &.loading {
              display: none;
            }
            &.loaded {
              display: block;
            }
          }
        }
      }
      &.away {
        background: linear-gradient(
          0deg,
          rgba(249, 212, 128, 0.26) 0%,
          rgba(249, 212, 128, 0.08) 97.2%
        );
        border: 2px solid #f9d480;
        color: #f9d480;
        right: -35px;
        align-items: end;
        transform: skewX(-15deg);
        box-shadow: -2px -2px 6px 0px rgba(255, 255, 255, 0.5),
          2px 2px 6px 0px rgba(255, 255, 255, 0.5);
      }
      &.home {
        background: linear-gradient(
          0deg,
          rgba(193, 55, 242, 0.26) 0%,
          rgba(74, 1, 100, 0.23) 97.2%
        );
        border: 2px solid #ce49fe;
        color: #ce49fe;
        left: -35px;
        top: 10px;
        transform: skewX(-15deg);
        box-shadow: 0px 4px 4px 0px rgba(149, 2, 202, 0.46) inset,
          -2px -2px 6px 0px rgba(149, 2, 202, 0.46),
          2px 2px 6px 0px rgba(149, 2, 202, 0.46);
      }
    }
  }

  .recharge-area {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid #68f6ff;
    padding: 16px;
    .recharge-title {
      display: flex;
      align-items: center;
      justify-content: start;
      font-size: 20px;
      font-family: "Roboto";
      font-weight: 600;
      line-height: 1.2;
      color: #68f6ff;
      gap: 16px;
      text-shadow: -2px -2px 6px rgba(2, 190, 202, 0.46),
        2px 2px 6px rgba(2, 190, 202, 0.46);
      letter-spacing: 0.15px;
      margin-bottom: 16px;
      .zero-count-text {
        color: #00a3ae;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.1px;
        text-shadow: none;
      }
    }
    .battery-area {
      width: 100%;
      justify-content: center;
      display: flex;
      gap: 8px;
      padding-inline: 16px;
      border: 2px solid #00929b;
      box-shadow: -2px -2px 6px 0px rgba(2, 190, 202, 0.46),
        2px 2px 6px 0px rgba(2, 190, 202, 0.46);
      margin-bottom: 16px;

      .battery-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 23px;
        flex: 1;
        background-color: #68f6ff;
        box-shadow: 0px 4px 4px 0px #02beca inset,
          -2px -2px 6px 0px rgba(2, 190, 202, 0.46),
          2px 2px 6px 0px rgba(2, 190, 202, 0.46);

        &.active {
          background-color: #131228;
          border: 1px rgb(2, 190, 202) solid;
          opacity: 0.5;
          animation: fadeOutIcon 1s linear 0s;
          animation-fill-mode: forwards;
          @keyframes fadeOutIcon {
            0% {
              background-color: #68f6ff;
            }
            100% {
              background-color: "#131228";
            }
          }
        }
        .balance-icon {
          width: 60px;
        }
        .hint-icon {
          width: 60px;
          opacity: 0;
        }
      }
    }
    .charge-btn {
      padding: 8px 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 20px;
      border: 1px solid #68f6ff;
      background: rgba(255, 255, 255, 0.08);
      font-size: 16px;
      line-height: 1.5;
      font-family: "Roboto";
      color: #68f6ff;
      &.zero-count {
        filter: grayscale(100%);
        border: none;
      }
    }
  }
`;

export const VciBetResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  @media (min-width: 600px) {
    width: calc(100% - 410px);
    padding: 8px 16px;
  }
  .team-profit {
    padding: 16px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "Roboto";
    font-weight: 600;
    font-style: italic;
    .team-area {
      font-size: 24px;
      font-style: italic;
      line-height: 1;
      letter-spacing: 0.18px;
      color: #68f6ff;
      height: 25px;
    }
    .expect-text {
      color: #00929b;
      font-size: 20px;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: 0.15px;
      height: 25px;
    }
    .expect-num {
      font-size: 34px;
      font-weight: 500;
      line-height: 36px;
      &.positive {
        color: #3aff66;
      }
      &.negative {
        color: #f94a5f;
      }
    }
  }

  .open-modal {
    padding: 8px 16px;
    text-align: center;
    border-radius: 20px;
    background: #68f6ff;
    color: #00929b;
    cursor: pointer;
    &.disabled {
      background-color: rgba(255, 255, 255, 0.8);
      cursor: auto;
      color: #121212;
    }
  }
  .logo-box {
    width: 100%;
    height: 178px;
    background: url("https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/blueIcon.svg")
      no-repeat center center;
    background-size: 140px;
  }
`;

export const VciModalMaskStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: 0.4s;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
  animation: ${({ showModal }) => (showModal ? "showMask" : "hideMask")} 500ms
    ease-in-out forwards;

  @keyframes hideMask {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes showMask {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const VciModalStyle = styled.div`
  z-index: 2;
  position: fixed;
  left: -100%;
  top: calc(50% - 95px);
  width: 100%;
  height: 305px;
  background-color: rgba(18, 18, 18, 0.65);
  backdrop-filter: blur(10px);
  padding-block: 8px;
  transition: 0.4s;
  @media (min-width: 600px) {
    top: calc(50% - 152.5px);
  }
  &.show {
    animation: ${({ showModal }) => (showModal ? "showModal" : "hideModal")}
      500ms ease-in-out forwards;
  }

  @keyframes showModal {
    0% {
      left: -100%;
    }
    100% {
      left: 0%;
    }
  }

  @keyframes hideModal {
    0% {
      left: 0%;
    }
    100% {
      left: -100%;
    }
  }

  .gray-filter {
    top: 0;
    background-image: url("https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/chargeIcon.png");
    background-repeat: no-repeat;
    background-size: 140px 128px;
    background-position: -10% 45%;
    padding-block: 8px;
    position: absolute;
    filter: grayscale(100%);
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    @media (min-width: 600px) {
      background-position: 10% 45%;
    }
  }
  .modal {
    font-family: "Roboto";
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-block: 1px solid #00929b;
    padding: 40px;
    gap: 16px;
    align-items: end;
    justify-content: center;
    font-weight: 500;
    .price-area {
      font-size: 24px;
      font-style: italic;
      line-height: 24px;
      .cur-price {
        color: #68f6ff;
      }
      .prev-price {
        color: #fff;
      }
    }

    .title-area {
      .charge-title {
        font-size: 48px;
        color: #f9d480;
        line-height: 56px;
      }
      .result-title {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: 0.15px;
      }
    }
    .content-row1 {
      .charge-row1 {
        height: 54px;
        font-size: 34px;
        font-style: italic;
        line-height: 36px;
        color: #fff;
      }
    }
    .content-row2 {
      .result-row2 {
        font-size: 24px;
        font-style: italic;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0.18px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const VciLoginPopupStyled = styled.div`
  color: #fff;
  position: fixed;
  bottom: -500px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100vw;
  height: 480px;
  border-radius: 20px 20px 0 0;
  border-inline: 1px solid #68f6ff;
  border-top: 1px solid #68f6ff;
  background-color: rgba(18, 18, 18, 0.65);
  backdrop-filter: blur(10px);
  transition: 0.4s;
  font-family: "Roboto";
  padding: 40px 16px;
  &.show {
    bottom: 0px;
  }
  .pin {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: relative;
    top: -43px;
    background-color: #68f6ff;
  }
  .close-tag {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .tab-icon {
    width: 60px;
  }
  .tab-text {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.15px;
  }
  .MuiFormGroup-root {
    width: 100%;
    flex-direction: row;
    justify-content: end;
    .MuiFormControlLabel-root {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .login-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    .login-pill {
      width: 100%;
      padding: 16px;
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.5px;
      user-select: none;
      cursor: pointer;
    }
  }
`;
export const VciBetAnimationStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(19, 18, 40, 0.6);
  display: flex;
  gap: 16px;
  padding: 10px 47px 0 16px;
  @media (min-width: 600px) {
    padding: 10px 37px 0 16px;
  }

  @keyframes betThrough {
    0% {
      background-color: rgba(19, 18, 40, 0.6);
    }
    100% {
      background-color: rgba(19, 18, 40, 1);
    }
  }
  @keyframes betThroughEnd {
    0% {
      background-color: rgba(19, 18, 40, 1);
    }
    100% {
      background-color: rgba(19, 18, 40, 0);
    }
  }
  &.start {
    animation: betThrough 500ms linear forwards;
  }
  &.end {
    animation: betThroughEnd 1000ms linear forwards;
  }
  .animation-left-area {
    position: relative;
    width: 64%;
    height: 100%;
    overflow: hidden;
    top: calc(-100% - 10px);
    font-family: "Roboto";
    font-size: 48px;
    font-style: italic;
    font-weight: 500;
    line-height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.Away {
      color: #f9d480;
      position: relative;
      background: linear-gradient(
        0deg,
        rgba(249, 212, 128, 0.26) 0%,
        rgba(249, 212, 128, 0.08) 97.2%
      );
    }
    &.Away::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(249, 212, 128, 0.26) 0%,
        rgba(249, 212, 128, 0.08) 97.2%
      );
      clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
    }
    &.Home {
      color: #ce49fe;
      position: relative;
      background: linear-gradient(
        0deg,
        rgba(193, 55, 242, 0.26) 0%,
        rgba(74, 1, 100, 0.23) 97.2%
      );
    }
    &.Home::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(193, 55, 242, 0.26) 0%,
        rgba(74, 1, 100, 0.23) 97.2%
      );
      clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
    }
    @media (min-width: 600px) {
      width: 34.5%;
    }
    &.start {
      animation: left-start 500ms ease-in-out forwards;
    }
    @keyframes left-start {
      0% {
        top: calc(-100% - 10px);
      }
      100% {
        top: 0;
      }
    }
  }
  .animation-right-area {
    position: relative;
    bottom: -100%;
    width: calc(36% - 16px);
    height: 100%;
    @media (min-width: 600px) {
      width: 65.5%;
    }

    &.Away {
      background: linear-gradient(
        0deg,
        rgba(249, 212, 128, 0.26) 0%,
        rgba(249, 212, 128, 0.08) 97.2%
      );
    }
    &.Home {
      background: linear-gradient(
        0deg,
        rgba(193, 55, 242, 0.26) 0%,
        rgba(74, 1, 100, 0.23) 97.2%
      );
    }
    &.start {
      animation: right-start 500ms ease-in-out forwards;
    }
    @keyframes right-start {
      0% {
        bottom: -100%;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;
export const VciMatchEndStyled = styled.div`
  width: 360px;
  height: 300px;
  padding: 7px 0;
  border-radius: 16px;
  border: 1px solid #68f6ff;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 180px);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(50px);
  transition: 0.4s;
  z-index: 3;
  opacity: 0;
  animation: "showMatchEnd" 500ms ease-in-out forwards;

  @keyframes showMatchEnd {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .gray-bgImage {
    background-image: url("https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/chargeIcon.png");
    background-repeat: no-repeat;
    background-size: 230px 212px;
    background-position: center center;
    opacity: 0.15;
    position: absolute;
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    top: 0;
  }
  .vci-content-box {
    font-family: "Roboto";
    border-block: 1px solid #00929b;
    box-shadow: 0px 0px #02beca inset, -2px -2px 6px 0px rgba(2, 190, 202, 0.46),
      2px 2px 6px 0px rgba(2, 190, 202, 0.46);
    position: relative;
    padding: 9px 24px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    height: 100%;
    justify-content: center;
    .close-tag {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 9px;
      right: 16px;
      line-height: 100%;
      user-select: none;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .vci-content {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .vci-title {
        color: #68f6ff;
        font-size: 34px;
        font-style: italic;
        font-weight: 500;
        line-height: 36px;
      }
      .vci-text {
        color: #fafafa;
        font-family: "Lexend";
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        .primary-text {
          color: #68f6ff;
        }
      }
    }
    .vci-btn {
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      background: #68f6ff;
      border-radius: 20px;
      user-select: none;
      cursor: pointer;
      color: #00929b;
      font-weight: 500;
    }
  }
`;
export const VciCloseRemindStyled = styled.div`
  position: absolute;
  top: 0;
  height: 200px;
  width: 100vw;
  left: -16px;
  background-color: rgba(18, 18, 18, 0.65);
  backdrop-filter: blur(10px);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity:1;
  .text {
    letter-spacing:0.18px;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    color: #68f6ff;
    text-shadow: -2px -2px 6px rgba(2, 190, 202, 0.46),
      2px 2px 6px rgba(2, 190, 202, 0.46);
    user-select:none;
  }
  &.close{
    animation: closeRemind 0.4s linear forwards;
  }
  @keyframes closeRemind {
    0%{
      opacity:1;
    }
    100%{
      opacity:0;
    }
  }
`;
