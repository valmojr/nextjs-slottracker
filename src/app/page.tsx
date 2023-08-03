import Link from 'next/link';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
export default function Page() {
	return (
		<main className="">
			<Link href="/Main"><button className="flex flex-row flex-nowrap bg-[blurple]">
				<DiscordLogoIcon/>
				Main
				</button>
			</Link>
		</main>
	);
}
