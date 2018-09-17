/**
 * Mutations storing a property returning from something to be saved into the Vue Store.
 */
export default {
    setQuestion(state, question){
        state.question = question;
    },
    loadQuestions(state, questions){
        state.questions = questions;
    },
};