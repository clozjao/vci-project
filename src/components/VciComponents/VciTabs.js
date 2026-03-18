import { useState, useEffect } from 'react';
import { VciModalMaskStyled, VciLoginPopupStyled } from '../../pages/Vci/style';
import useVCIGoogleLogin from '../../hook/VciLogin/useVCIGoogleLogin';

export default function Tabs() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [maskDOM, setMaskDOM] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // google

  const { loginGoogle, googleProfile } = useVCIGoogleLogin();

  useEffect(() => {
    console.log('googleProfile', googleProfile);
  }, [googleProfile]);

  useEffect(() => {
    if (!maskDOM) return;
    if (!showModal) {
      const timeoutId = setTimeout(() => {
        setMaskDOM(false);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showModal]);

  return (
    <>
      {maskDOM ? (
        <VciModalMaskStyled
          className={`vci-mask  `}
          showModal={showModal}
          onClick={(e) => {
            e.stopPropagation();
            setPopupOpen(!popupOpen);
            setShowModal(!showModal);
            console.log('tabs mask clicked');
          }}
        />
      ) : (
        ''
      )}
      <VciLoginPopupStyled className={`${popupOpen ? 'show' : ''}`}>
        <span className="pin" />
        <div
          className="close-tag"
          onClick={(e) => {
            e.stopPropagation();
            setPopupOpen(false);
            setShowModal(!showModal);
          }}
        >
          <img
            src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/close.png`}
          />
        </div>
        <img
          className="tab-icon"
          src={`https://sprodm.uni247.xyz/images-v3/favicon/android-chrome-192x192.png`}
        />
        {googleProfile ? (
          <div className="tab-text">Log in successfully!</div>
        ) : (
          <div className="tab-text">Log in to keep your play history</div>
        )}
        <div className="login-group">
          {googleProfile ? (
            <div
              className="login-pill google"
              onClick={(e) => {
                e.stopPropagation();
                location.href = '/';
              }}
            >
              Log out
            </div>
          ) : (
            <div
              className="login-pill google"
              onClick={(e) => {
                e.stopPropagation();
                loginGoogle();
              }}
            >
              <img
                src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/google.svg`}
              />
            </div>
          )}
        </div>
      </VciLoginPopupStyled>
      <div className="vci-tabs">
        <div className="game tab">
          <img
            src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/gameTab.svg`}
          />
        </div>
        <div
          className="user tab"
          onClick={(e) => {
            e.stopPropagation();
            setPopupOpen(true);
            setMaskDOM(true);
            setShowModal(true);
          }}
        >
          <img
            src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/userTab.png`}
          />
        </div>
      </div>
    </>
  );
}
