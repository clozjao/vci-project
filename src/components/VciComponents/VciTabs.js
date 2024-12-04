import { useState, useEffect } from 'react';
import { VciModalMaskStyled, VciLoginPopupStyled } from '../../pages/Vci/style';
import useVCIGoogleLogin from '../../hook/VciLogin/useVCIGoogleLogin';
// import FacebookLogin from '@greatsumini/react-facebook-login';
// import AppleSignin from "react-apple-signin-auth";
// mui
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MuiSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    width: '20px',
    height: '20px',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        borderRadius: 50,
        backgroundColor: theme.palette.mode === 'dark' ? '#FAFAFA' : '#68F6FF',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function Tabs() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [maskDOM, setMaskDOM] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // google

  const { loginGoogle, googleProfile } = useVCIGoogleLogin();

  useEffect(() => {
    console.log('googleProfile', googleProfile);
  }, [googleProfile]);

  // facebook
  // const [facebookProfile, setFacebookProfile] = useState(null);

  // useEffect(() => {
  //   console.log('facebookProfile', facebookProfile);
  // }, [facebookProfile]);

  // apple
  // const [appleProfile, setAppleProfile] = useState(null);

  // useEffect(() => {
  //   console.log("appleProfile", appleProfile);
  // }, [appleProfile]);

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
        {/* <FormGroup>
          <FormControlLabel
            control={<MuiSwitch sx={{ m: 1 }} defaultChecked />}
            label="Remember me"
          />
        </FormGroup> */}
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
          {/* <FacebookLogin
            version="v20.0"
            appId="1528035918057066"
            onSuccess={(response) => {
              console.log('fb Login Success!', response);
            }}
            onFail={(error) => {
              console.log('fb Login Failed!', error);
            }}
            onProfileSuccess={(response) => {
              setFacebookProfile(response.data);
            }}
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                className="login-pill facebook"
              >
                <img
                  src={` https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/facebook.png`}
                />
                Continue with Facebook
              </div>
            )}
          ></FacebookLogin> */}
          {/* <AppleSignin
            authOptions={{
              clientId: "xyz.uni247.vci",
              scope: "email name",
              redirectURI: "https://vci.uni247.xyz",
              state: "state",
              nonce: "nonce",
              usePopup: true,
            }}
            onSuccess={(response) => {
              setAppleProfile(response);
            }}
            onError={(error) => console.error("apple", error)}
            render={(props) => (
              <div {...props} className="login-pill apple">
                <img
                  src={`https://storage.googleapis.com/uni247-js-bucket-global/images-v3/VciPwa/apple.png`}
                />
              </div>
            )}
          /> */}
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
