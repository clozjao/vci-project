import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
// import './utils/i18n';
import store from './reducers';
import cloudImg from './themes/cloudImg';
import GlobalStyle from './themes/GlobalStyle';
import localImg from './themes/localImg';
import theme from './themes/theme';
import { WIDGET_MODE } from './utils/env';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

// Create a client
const queryClient = new QueryClient();

const themeImg = WIDGET_MODE === 'on' ? cloudImg : localImg;

let root = ReactDOM.createRoot(document.getElementById('sport-root'));

root.render(
  <Provider store={store}>
    {/* Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={themeImg}>
          <GlobalStyle />
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
);

window.CRIC = function () {
  // (window.CRIC.q = window.CRIC.q || []).push(arguments);
  // if (typeof arguments[0].token === 'string') {
  //   // localStorage.setItem('access_token', arguments[0].token);
  //   CRIC.unmount();
  //   setTimeout(() => {
  //     CRIC.init();
  //   }, 100);
  // }
};

// if (root) {
window.CRIC.unmount = () => root.unmount();
// } else {
// }

window.CRIC.init = () => {
  // console.log('root', root)
  if (!root?._internalRoot) {
    root = ReactDOM.createRoot(document.getElementById('sport-root'));
  }
  root.render(
    <Provider store={store}>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={themeImg}>
            <GlobalStyle />
            <I18nextProvider i18n={i18n}>
              <GoogleOAuthProvider clientId="547792569780-87skjjeks1jq1tup8jqp9qrvfsk7hcrs.apps.googleusercontent.com">
                <App />
              </GoogleOAuthProvider>
            </I18nextProvider>
          </ThemeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};
