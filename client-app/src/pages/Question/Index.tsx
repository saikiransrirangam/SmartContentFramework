import { push } from 'redux-first-router';

import BreadCrumbs from '@zeta/core/components/Breadcrumbs/Index';
import Button from '@zeta/core/components/Buttons/Button';
import SecondaryButton from '@zeta/core/components/Buttons/SecondaryButton';
import Card from '@zeta/core/components/Card/Index';
import CodeBlock from '@zeta/core/components/Code/Index';
import Loader from '@zeta/core/components/Loader';

const breadcrumbs = [
	{
		key: 'surveys-list',
		name: 'Survey List',
		href: ``,
		current: false,
		show: true,
	},
	{
		key: 'survey',
		name: 'Survey',
		href: ``,
		current: true,
		show: true,
	},
	{
		key: 'question',
		name: 'Question 1',
		href: ``,
		current: true,
		show: true,
	},
];
export default function Question({}: {}) {
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - handlenBreadcrumbClick
	 **-------------------------------------------------------------------------------------
	 */
	const handlenBreadcrumbClick = page => {};
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - goToQuestion
	 **-------------------------------------------------------------------------------------
	 */
	const goToQuestion = () => {
		const questionId = Math.floor(Math.random() * 10);
		push(`/surveys/1/question/${questionId}`);
	};
	return (
		<>
			<Loader />
			<div style={{ background: '#FDFDFD', minHeight: '100vh' }}>
				<div className="relative flex pb-10 mx-auto max-w-7xl lt-md:px-4 lg:px-8">
					<main className="w-full">
						<div></div>
						<div className="flex justify-center">
							<BreadCrumbs
								pages={breadcrumbs}
								handlenBreadcrumbClick={page => handlenBreadcrumbClick(page)}
							/>
						</div>

						{/* Main Body  */}
						<div className="flex w-full gap-x-5 lt-md:flex-wrap">
							{/* Title Description Area */}
							<div className="w-full">
								{/* Description Panel */}
								<Card padding="p-6" margin="my-5">
									{/* Title/Price */}
									<div className="w-full">
										<div className="w-full lt-md:mb-5">
											<h1 className="text-2xl font-semibold capitalize">
												Do you like trump?
											</h1>
										</div>
									</div>
									<div
										id="description-panel-header"
										className="flex justify-between mb-4"
									>
										<h2 className="text-lg font-semibold">Description</h2>
									</div>
									<div className="overflow-scroll-y">
										<p className="px-4 text-base">
											Lorem, ipsum dolor sit amet consectetur adipisicing
											elit. Quia in fugit nostrum at maiores ad praesentium,
											laudantium magni obcaecati modi laborum tempore
											voluptates veritatis quod fuga omnis labore aspernatur
											veniam.
										</p>
									</div>
									<div className="flex justify-center w-full mt-5 gap-x-5">
										<Button
											text={'Yes'}
											showIcon={false}
											handleClick={goToQuestion}
										/>
										<SecondaryButton
											text={'No'}
											showIcon={false}
											handleClick={goToQuestion}
										/>
									</div>
								</Card>
							</div>
						</div>
						<div className="flex flex-col gap-y-10">
							<CodeBlock code="GET /v1/survey/:ID/questions/:QUESTION_ID" />
							<div className="flex flex-col gap-y-2">
								<h3 className="text-base">On selection call this end point</h3>
								<CodeBlock code="POST /v1/survey/:ID/selection/decision" />
								<CodeBlock
									code="POST Body: {
											selection: number | string | Boolean;
											questionId: number;
											surveyId: string;
									}"
								/>
								<h3 className="text-base">Response</h3>
								<CodeBlock code="POST Body: Next Question ID (Number) OR Null (if there are no more questions)" />
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
