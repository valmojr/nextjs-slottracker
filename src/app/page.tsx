import Link from 'next/link';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
export default function Page() {
	return (
		<main className="">
			<Link href="/Main"><button className="flex flex-row flex-nowrap bg-red-400">
				<DiscordLogoIcon/>
				Main
				</button>
			</Link>
		</main>
	);
}
