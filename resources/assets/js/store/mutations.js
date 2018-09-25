/**
 * Mutations - storing a property into the Vue Store.
 */
export default {
    setQuestion( state, question ) {
        state.question = question;
    },
    loadQuestions( state, questions ) {
        state.questions = questions;
    },
    LOGIN( state, user ) {
        state.user = {
            id  : user.id,
            name: user.name,
        };
    },
    LOGOUT( state ) {
        state.user = null;
    },
    ADD_NOTIFICATION( state, uniqueId, message, type ) {
        state.notifications.push({
            id     : uniqueId,
            message: message,
            type   : type,
        });
    },
    REMOVE_NOTIFICATION( state, index ) {
        state.notifications.splice(index, 1);
    },
};