import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useGoogleLogin } from '@react-oauth/google';

const useVCIGoogleLogin = () => {
  const [user, setUser] = useState(null);

  const [googleProfile, setGoogleProfile] = useState(null);

  const loginGoogle = () => {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      client_id:
        '547792569780-87skjjeks1jq1tup8jqp9qrvfsk7hcrs.apps.googleusercontent.com', // 更換成自己的資訊
      redirect_uri: `${
        location.href.includes('localhost')
          ? 'http://localhost:3008/'
          : 'https://vci.uni247.xyz/'
      }`, // 更換成自己的資訊
      response_type: 'token',
      scope: 'profile',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  };

  useEffect(() => {
    if (location.hash.includes('state')) {
      const paramsPart = location.hash.split('/?')[0];
      const table = {};
      paramsPart.split('&').forEach((pair) => {
        const [key, value] = pair.split('=');
        table[key] = value;
      });
      setUser(table);
    }
  }, [JSON.stringify(location.hash)]);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setGoogleProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return { googleProfile, loginGoogle };
};

export default useVCIGoogleLogin;
