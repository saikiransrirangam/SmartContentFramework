export default function Card({
	children,
	onClick = null,
	margin = 'my-2',
	padding = 'p-4',
	className = '',
}: {
	children: any;
	onClick?: (e: any) => void | null;
	margin?: string;
	padding?: string;
	className?: string;
}) {
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - onClick
	 **-------------------------------------------------------------------------------------
	 */
	const handleClick = e => {
		if (onClick) {
			onClick(e);
		}
	};
	return (
		<div
			onClick={e => handleClick(e)}
			className={`relative bg-white border-0  rounded-lg capitalize custom-shadow w-full ${margin} ${padding} ${
				onClick ? 'cursor-pointer' : ''
			}`}
		>
			{children}
		</div>
	);
}
