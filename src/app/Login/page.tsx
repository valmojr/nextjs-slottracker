'use client';
import DiscordLogoIcon from '../../../public/discord_logo_white.png';
import DiscordButton from '../Components/util/Buttons/DiscordButton';
import Image from 'next/image';

export default function LoginPage() {
  const isLogged = undefined;

  return (
    <div className="flex max-h-screen h-screen flex-col items-center justify-end p-0 overflow-hidden">
      <div className="bg-DarkLightest w-screen h-screen" />
      <div className="flex flex-row items-center justify-center bg-DarkDarkest w-screen h-28">
        <a href={`${process.env.BACKEND_URL?.toString()}/api/auth/login`}>
          <DiscordButton className="" success={isLogged}>
            <Image src={DiscordLogoIcon} alt={'Discord Logo'} height={28} />
          </DiscordButton>
        </a>
      </div>
    </div>
  );
}
