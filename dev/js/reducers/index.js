import {combineReducers} from 'redux';
import sectionsReducer from './reducer-sections.js';
import votingsReducer from './reducer-votings.js';
import newVoteReducer from './reducer-new-vote.js';

const allReducers = combineReducers({
    sections: sectionsReducer,
    votings: votingsReducer,
    newVote: newVoteReducer
});

export default allReducers;