import { useState, useEffect } from 'react';
import { VciModalStyle, VciModalMaskStyled } from '../../pages/Vci/style';
import { numFormat } from '../../utils/format';

export default function VciModal({
  mode,
  success = true,
  prevPrice,
  curPrice,
  showModal,
  setShowModal,
  setSwitchComponents,
  resultModalClose,
  walletData,
  newBalance,
}) {
  const [prevState, setPrevState] = useState(0);
  const [curState, setCurState] = useState(0);

  useEffect(() => {
    setPrevState(prevPrice);
  }, [prevPrice]);

  useEffect(() => {
    setCurState(curPrice);
    if (newBalance && !!walletData) {
      setCurState(curPrice);
    }
  }, [curPrice, newBalance, JSON.stringify(walletData)]);

  const [title, setTitle] = useState(<></>);
  const [row1, setRow1] = useState(<></>);
  const [row2, setRow2] = useState(<></>);

  const successTitle = 'Congratulations, you win the bet!';
  const successString = 'Balance added';
  const failTitle = 'This bet is closed successfully.';
  const failString = 'Balance changed';

  const priceJSX = () => {
    return (
      <div className="price-area">
        <span className="prev-price">
          {`$ ${numFormat(Number(prevState).toFixed(0))}`}
        </span>
        <span className="cur-price">
          {` > $ ${numFormat(Number(curState).toFixed(0))}`}
        </span>
      </div>
    );
  };

  useEffect(() => {
    if (!mode) return;
    if (mode === 'charge') {
      setTitle(<div className="charge-title">＋10000</div>);
      setRow1(<div className="charge-row1">{successString}</div>);
      setRow2(priceJSX());
    }
    if (mode === 'result' && !!success) {
      setTitle(<div className="result-title">{successTitle}</div>);
      setRow1(priceJSX());
      setRow2(<div className="result-row2">{successString}</div>);
    }
    if (mode === 'result' && !success) {
      setTitle(<div className="result-title">{failTitle}</div>);
      setRow1(priceJSX());
      setRow2(<div className="result-row2">{failString}</div>);
    }
  }, [mode, success, prevPrice, curPrice]);

  // 倒數後關閉
  const modalDOM = document.querySelector('.vci-modal');

  const [maskDOM, setMaskDOM] = useState(false);

  useEffect(() => {
    modalDOM?.classList.add('show');
    if (!modalDOM) return;
    if (showModal) {
      setMaskDOM(true);

      const timeoutId = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        modalDOM.classList.remove('show');
        setMaskDOM(false);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showModal]);

  useEffect(() => {
    if (mode !== 'result') return;
    if (!modalDOM) return;

    if (showModal) {
      setMaskDOM(true);

      const timeoutId = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        modalDOM.classList.remove('show');
        setMaskDOM(false);
        if (resultModalClose) {
          setSwitchComponents('placeBet');
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [mode, showModal]);

  return (
    <>
      {maskDOM ? (
        <VciModalMaskStyled
          className={`vci-mask  `}
          showModal={showModal}
          onClick={(e) => {
            e.stopPropagation();
            setMaskDOM(false);
            setShowModal(false);
          }}
        />
      ) : (
        ''
      )}
      <VciModalStyle className={`vci-modal `} showModal={showModal}>
        <div className="gray-filter"></div>
        <div className="modal">
          <div className="title-area">{title}</div>
          <div className="content-row1">{row1}</div>
          <div className="content-row2">{row2}</div>
        </div>
      </VciModalStyle>
    </>
  );
}
