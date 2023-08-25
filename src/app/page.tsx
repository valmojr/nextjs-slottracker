import LoginHandler from './LoginHandler';
import LoadingFrame from './Util/Components/Loading';

export default function Page() {
  return (
    <>
      <LoadingFrame />
      <LoginHandler />
    </>
  );
}
