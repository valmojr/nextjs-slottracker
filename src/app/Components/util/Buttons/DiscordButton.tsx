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
        'flex flex-row flex-nowrap rounded-xl bg-Blurple w-48 h-14 items-center justify-center data-[success=true]:bg-Green data-[success=false]:bg-Red',
        className,
      )}
      {...props}
    />
  );
}
