import React from 'react';

export default function Hero({}) {
	const [startColor, setStartColor] = React.useState('rgba(11, 127, 171, 0)');
	const [endColor, setEndColor] = React.useState('rgba(11, 127, 171, 0.1)');
	return (
		<>
			<div
				className="h-56 lt-md:h-56 flex gt-sm:items-center justify-center"
				style={{
					background: `linear-gradient(0deg, ${startColor} 0%, ${endColor} 100%)`,
				}}
			>
				<div className="w-10/12 lt-md:w-11/12 lt-md:mt-5 text-center">
					<h1 className="text-3xl mb-2 lt-md:text-2xl font-semibold tracking-tight capitalize">
						Zeta Surveys
					</h1>
					<p className="text-2xl  lt-md:text-base font-semibold tracking-tight text-gray-600">
						Take one of our surveys!!
					</p>
					<p className="text-base mt-2 lt-md:text-sm font-semibold tracking-tight text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis
						recusandae numquam porro voluptates debitis enim sunt velit ut et
						accusantium assumenda quasi, excepturi pariatur esse magnam, rerum facilis
						harum!
					</p>
				</div>
			</div>
		</>
	);
}
