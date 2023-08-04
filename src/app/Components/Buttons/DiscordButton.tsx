import { ButtonProps } from './PrimaryButton';
import { twMerge } from 'tailwind-merge';

export default function DiscordButton({
	success,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			data-success={success}
			className={twMerge(
				'flex flex-row flex-nowrap rounded-xl bg-[#5865F2] w-48 h-14 items-center justify-center data-[success=true]:bg-emerald-500',
				className
			)}
			{...props}
		/>
	);
}
