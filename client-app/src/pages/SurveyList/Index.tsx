import { useState } from 'react';
import { push } from 'redux-first-router';

import Card from '@zeta/core/components/Card/Index';
import CodeBlock from '@zeta/core/components/Code/Index';

export default function SurveyList({}: {}) {
	const [surveys, setSurveys] = useState([
		{
			id: '1',
			title: 'Democat or Republican',
			description: '',
		},
		{
			id: '2',
			title: 'Democat or Republican',
			description: '',
		},
		{
			id: '3',
			title: 'Democat or Republican',
			description: '',
		},
	]);
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - onNavigate
	 **-------------------------------------------------------------------------------------
	 */
	const onNavigate = selectedPackage => {
		const id = selectedPackage.id;
		push(`/surveys/${id}`);
	};

	return (
		<>
			<div className="grid gap-5 mb-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 lt-md:grid-cols-1">
				{surveys.map(item => {
					return (
						<Card onClick={e => onNavigate(item)} key={item.id}>
							<div className="flex items-center justify-between w-full">
								<div className="relative w-8/12 pr-4">
									<h3 className="text-lg font-semibold leading-6">
										{item.title}
									</h3>
									<div className="mt-4 text-base ">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Curabitur velit justo,
									</div>
								</div>
								<div className="flex justify-end w-4/12">
									<svg
										width="80"
										height="80"
										viewBox="0 0 80 80"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 12C0 5.37258 5.37258 0 12 0H68C74.6274 0 80 5.37258 80 12V68C80 74.6274 74.6274 80 68 80H12C5.37258 80 0 74.6274 0 68V12Z"
											fill="#222B56"
											fillOpacity="0.55"
										/>
									</svg>
								</div>
							</div>
						</Card>
					);
				})}
			</div>
			<CodeBlock code="GET /v1/surveys" />
		</>
	);
}
