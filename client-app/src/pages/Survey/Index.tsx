import { push } from 'redux-first-router';

import BreadCrumbs from '@zeta/core/components/Breadcrumbs/Index';
import Button from '@zeta/core/components/Buttons/Button';
import Card from '@zeta/core/components/Card/Index';
import CodeBlock from '@zeta/core/components/Code/Index';

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
];
export default function Survey({}: {}) {
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
		push('/surveys/1/question/1');
	};
	return (
		<>
			<div style={{ background: '#FDFDFD', minHeight: '100vh' }}>
				<div className="flex pt-10 pb-10 mx-auto max-w-7xl lt-md:px-4 lg:px-8 lt-md:pt-10">
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
									<div className="grid w-full grid-cols-2 mb-5 lt-md:grid-cols-1">
										<div className="w-full lt-md:mb-5">
											<h1 className="text-2xl font-semibold capitalize">
												Democrat Or Republican
											</h1>
											<h2 className="text-2xl font-semibold capitalize lt-md:hidden"></h2>
										</div>
										<div>
											<div className="flex items-center justify-end w-full lt-md:justify-between">
												<h2 className="text-2xl font-semibold capitalize gt-sm:hidden"></h2>
												<div className="flex flex-col items-end gap-y-2">
													<div className="text-right w-28 justify-self-end">
														<Button
															text={'Start Survey'}
															showIcon={false}
															handleClick={goToQuestion}
														/>
													</div>
												</div>
											</div>
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
								</Card>
							</div>
						</div>
						<CodeBlock code="GET /v1/survey/:ID" />

						{/* CTAs */}
						<div className="flex-col hidden w-4/12 mx-auto mt-10 lt-md:flex lt-md:w-full gap-y-5">
							<Button text={'Continue'} showIcon={true} handleClick={goToQuestion} />
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
