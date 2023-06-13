export default function Link({
	to = '',
	text,
	showIcon = true,
	onClick = null,
	className = '',
	textSize = 'text-base',
}) {
	return (
		<>
			{onClick && (
				<>
					<a
						className={`${textSize} font-semibold cursor-pointer ${className}`}
						onClick={onClick}
					>
						{showIcon && (
							<>
								<svg
									className="inline-block mr-2 -mt-1"
									width="8"
									height="12"
									viewBox="0 0 8 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M6.335 12L7.75 10.5855L3.0805 5.998L7.75 1.4145L6.335 0L0.25 5.998L6.335 12Z" />
								</svg>
							</>
						)}
						{text}
					</a>
				</>
			)}
			{!onClick && (
				<>
					<Link
						className={`${textSize} font-semibold ${className}`}
						to={to}
						text={text}
					/>
				</>
			)}
		</>
	);
}
