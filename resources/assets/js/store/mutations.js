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
    ADD_NOTIFICATION( state, notification ) {
        state.notifications.push({
            id     : notification.id,
            message: notification.message,
            type   : notification.type,
        });
    },
    REMOVE_NOTIFICATION( state, index ) {
        state.notifications.splice(index, 1);
    },
};