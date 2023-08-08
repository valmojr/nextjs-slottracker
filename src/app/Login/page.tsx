'use client';
import DiscordLogoIcon from '../../../public/discord_logo_white.png';
import Link from 'next/link';
import DiscordButton from '../Components/util/Buttons/DiscordButton';
import Image from 'next/image';

export default function LoginPage() {
  const isLogged = undefined;

  return (
    <>
      <div className="bg-DarkLightest w-screen h-screen" />
      <div className="flex flex-row items-center justify-center bg-DarkDarkest w-screen h-28">
        <Link href="/Main">
          <DiscordButton className="" success={isLogged}>
            <Image src={DiscordLogoIcon} alt={'Discord Logo'} height={28} />
          </DiscordButton>
        </Link>
      </div>
    </>
  );
}
