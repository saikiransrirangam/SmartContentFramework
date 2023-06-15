import { connect } from 'react-redux';
import Survey from './pages/Survey/Index';
import Hero from '@zeta/core/components/Hero/Index';
import SurveyList from './pages/SurveyList/Index';
import Question from './pages/Question/Index';
import { pages } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App({ page }) {
  const Page = pages[page];
  return (
    <Router>
      <div>
        <Hero />
        <div className="flex pb-10 mx-auto max-w-7xl lt-md:px-4 lg:px-8">
          <main className="w-full pr-4 lt-md:w-full">
            <Routes>
              <Route path="/" element={<SurveyList />} />
              <Route path="/surveys/:id" element={<Survey />} />
              <Route path="/surveys/:surveyid/questions/:queid" element={<Question />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    page: state.page, // Assuming `page` is the correct key in your Redux store
  };
};
export default connect(mapStateToProps)(App);