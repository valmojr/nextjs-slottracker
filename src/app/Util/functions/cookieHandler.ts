import TokenHandler from './tokenHandler';

export default function CookieHandler(cookies: string, setSID?: Function) {
  let cookieArray = cookies.split(';');
  let connectSidValue = null;
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf('connect.sid=') === 0) {
      connectSidValue = cookie.substring('connect.sid='.length, cookie.length);
      if (setSID) {
        setSID(connectSidValue);
      }
      return TokenHandler(connectSidValue);
    }
  }
}
