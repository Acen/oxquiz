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

export const login = ( {commit}, user ) => {
    commit('LOGIN', _.pick(user, ['name', 'id']));
};

export const logout = ( {commit} ) => {
    api.logoutUser()
       .then(() => {
           commit('LOGOUT');
           commit('ADD_NOTIFICATION', {
               id     : _.uniqueId(),
               message: 'Logged out successfully.',
               type   : 'info',
           });
        })
        .catch((error) => {
            commit('ADD_NOTIFICATION', {
                id     : _.uniqueId(),
                message: 'Log out failed. Please refresh and try again.',
                type   : 'error',
            });
            console.error(error);
        });

};

export const dismissNotification = ( {commit, state}, id ) => {
    const notificationIndex = _.findIndex(state.notifications, ( n ) => {
        return n.id === id;
    });
    commit('REMOVE_NOTIFICATION', notificationIndex);
};