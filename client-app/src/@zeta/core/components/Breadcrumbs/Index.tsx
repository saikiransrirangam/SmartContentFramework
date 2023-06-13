export default function BreadCrumbs({ pages, handlenBreadcrumbClick }) {
	/*
	 **-------------------------------------------------------------------------------------
	 ** FN NAME - onBreadcrumbClick
	 **-------------------------------------------------------------------------------------
	 */
	const onBreadcrumbClick = page => {
		handlenBreadcrumbClick(page);
	};
	return (
		<nav className="flex lt-md:justify-center" aria-label="Breadcrumb">
			<ol
				role="list"
				className="flex items-center space-x-4 lt-md:mt-10 lt-md:text-xs lt-md:space-x-0"
			>
				{pages.map((page, idx) => (
					<li key={page.name} className={`${page.show ? 'block' : 'hidden'}`}>
						<div className="flex items-center">
							{idx > 0 && (
								<svg
									className="h-5 w-5 flex-shrink-0 text-gray-300"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
								</svg>
							)}

							<a
								onClick={() => {
									if (page.key === 'checkout') return;
									onBreadcrumbClick(page);
								}}
								className="ml-4 text-sm lt-md:text-xs whitespace-nowrap font-medium hover:text-gray-700 lt-md:ml-1 cursor-pointer capitalize"
								aria-current={page.current ? 'page' : undefined}
							>
								{page.name}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
