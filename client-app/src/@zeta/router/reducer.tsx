// pageReducer.js
import { NOT_FOUND } from 'redux-first-router';

const components: any = {
	HOME: 'SurveyList',
	SURVEYS: 'SurveyList',
	SURVEY: 'Survey',
	QUESTION: 'Question',
	[NOT_FOUND]: 'NotFound',
};

export default (state = 'SURVEYS', action: any = {}) => components[action.type] || state;
