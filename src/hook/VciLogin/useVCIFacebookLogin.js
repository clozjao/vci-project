import { useState, useEffect } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

const useVCIFacebookLogin = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     window.fbAsyncInit = function () {
//         // 初始化 Facebook SDK
//         window.FB.init({
//           appId: '1528035918057066',
//           cookie: true,
//           xfbml: true,
//           version: 'v20.0',
//         });
  
//         console.log('[fbAsyncInit] after window.FB.init');
//         window.FB.AppEvents.logPageView();
//       };
//     // 載入 Facebook SDK
//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {
//         return;
//       }
//       js = d.createElement(s);
//       js.id = id;
//       js.src = 'https://connect.facebook.net/en_US/sdk.js';
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, 'script', 'facebook-jssdk');

   
//   }, []);

  const loginFacebook = () => {
    setIsClicked(true);
  };

  return { facebookProfile, loginFacebook };
};

export default useVCIFacebookLogin;
