import { connect } from 'react-redux';

import Hero from '@zeta/core/components/Hero/Index';

import { pages } from './pages';

function App({ page }) {
	const Page = pages[page];
	return (
		<div>
			<Hero />
			<div className="flex pb-10 mx-auto max-w-7xl lt-md:px-4 lg:px-8">
				<main className="w-full pr-4 lt-md:w-full">
					<Page />
				</main>
			</div>
		</div>
	);
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
