/**
 * An action a user might take.
 * Practically calls the methods set in the other parts/libraries in their correct orders.
 */
import * as api from '../api';
import debounce from 'lodash/debounce';

const submitQuestion = debounce(api.submitQuestion, 500);
export const setQuestion = ( {commit, state}, payload, callback ) => {
    // Commit the question being queried for into the state.
    commit('setQuestion', payload);
    // Checks question has a minimum length.
    if ( payload.length >= 3 ) {
        // Calls the API to actually submit the.. thing..
        submitQuestion(payload, ( questions ) => {
            commit('loadQuestions', questions);
        });
    }
};

export const login = ( {commit, state}, payload, callback ) => {
    console.log(payload);
    commit('login', _.pick(payload, ['name', 'email', 'id']));
    // this.$router.push({path: 'search'});
};