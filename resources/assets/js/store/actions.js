import * as api from '../api';
import throttle from 'lodash/throttle';

const submitQuestion = throttle(api.submitQuestion, 3000);
export const setQuestion = ({commit}, payload) => {
    commit('setQuestion', payload);
    if(payload.length > 3) {
        submitQuestion(payload, ( questions ) => {
            commit('loadQuestions', questions);
        })
    }
};