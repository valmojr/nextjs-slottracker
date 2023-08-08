import BottomButton from './BottomButton';
import {
  CheckCircledIcon,
  ListBulletIcon,
  PlusCircledIcon,
  PersonIcon,
  ExitIcon,
} from '@radix-ui/react-icons';

export default function BottonMenuFrame(props: any) {
  return (
    <div className="fixed bottom-0 left-0 w-screen h-16 flex flex-row items-center justify-center gap-3 bg-DarkDarken">
      <h1></h1>
      <BottomButton icon={<CheckCircledIcon />} />
      <BottomButton icon={<ListBulletIcon />} />
      <BottomButton icon={<PlusCircledIcon />} backgroundColor="#57F287" />
      <BottomButton icon={<PersonIcon />} />
      <BottomButton icon={<ExitIcon />} backgroundColor="#ED4245" />
    </div>
  );
}
