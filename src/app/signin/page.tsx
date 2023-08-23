'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function SignInPage() {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    let cookies = document.cookie;

    let cookieArray = cookies.split(';');
    let connectSidValue = null;
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf('connect.sid=') === 0) {
        connectSidValue = cookie.substring(
          'connect.sid='.length,
          cookie.length,
        );
        setToken(connectSidValue);
        break;
      }
    }
  }, []);

  return (
    <>
      <h2>Token: {token ? token : 'nada'}</h2>
    </>
  );
}
