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
    login( state, user ) {
        state.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }
};