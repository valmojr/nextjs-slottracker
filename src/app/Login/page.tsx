import DiscordLogoIcon from '../../../public/discord_logo_white.png';
import Link from 'next/link';
import DiscordButton from '../Components/Buttons/DiscordButton';
import Image from 'next/image';

export default function LoginPage() {
	const isLogged = false;

	return (
		<div>
			<div className="h-screen w-screen bg-slate-400" />
			<section className="flex flex-row items-center justify-center bg-slate-800 w-screen h-28">
				<Link href="/Main">
					<DiscordButton className="" success={isLogged}>
						<Image
							src={DiscordLogoIcon}
							alt={'Discord Logo'}
							height={28}
						/>
					</DiscordButton>
				</Link>
			</section>
		</div>
	);
}
