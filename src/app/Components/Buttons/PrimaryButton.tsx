import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = ComponentProps<'button'> & {
	success?: boolean;
};

export default function PrimaryButton({
	success,
	className,
	...props
}: ButtonProps) {
	return <button className={twMerge('', className)} {...props} />;
}
