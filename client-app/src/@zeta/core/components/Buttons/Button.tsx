export default function Button({
	showIcon,
	handleClick = () => {},
	text,
	className = '',
	buttonType = 'button',
	disabled = false,
}: {
	showIcon: boolean;
	handleClick?: () => void;
	className?: string;
	text: string;
	buttonType?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}) {
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - onClick
	 **-------------------------------------------------------------------------------------
	 */
	const onClick = () => {
		handleClick();
	};
	return (
		<>
			<button
				type={buttonType}
				className={`rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
				onClick={() => onClick()}
			>
				{text}
				{showIcon && (
					<>
						<svg
							className="inline-block -mt-0.5 ml-2"
							width="16"
							height="12"
							viewBox="0 0 16 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10.1026 11.6559C10.1026 11.6559 13.8534 7.9017 15.3151 6.4392C15.4368 6.31753 15.4976 6.15753 15.4976 5.99753C15.4976 5.83753 15.4368 5.67837 15.3151 5.55587C13.8543 4.0942 10.1026 0.340868 10.1026 0.340868C9.9826 0.220034 9.82427 0.160034 9.66593 0.160034C9.5051 0.160034 9.3451 0.221701 9.2226 0.344201C8.97843 0.587534 8.97677 0.982534 9.21927 1.2242L13.3676 5.37253H1.12427C0.779268 5.37253 0.499268 5.65253 0.499268 5.99753C0.499268 6.34253 0.779268 6.62253 1.12427 6.62253H13.3676L9.21843 10.7717C8.9776 11.0125 8.9801 11.4067 9.22343 11.65C9.34677 11.7734 9.5076 11.835 9.6676 11.835C9.82593 11.835 9.9826 11.775 10.1026 11.6559Z" />
						</svg>
					</>
				)}
			</button>
		</>
	);
}
