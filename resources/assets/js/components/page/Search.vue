<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <label for="question" class="el-form-item__label">What's the question?</label>
                <el-input id="question" clearable placeholder="Something about cockroachs." v-model="question"></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    // const submitQuestion = _.debounce();
    export default {
        name: "Search",
        data() {
            return {
                _question: '',
            }
        },
        computed: {
            question: {
                set(value) {
                    this.setQuestion(value);
                    this._question = value;
                },
                get() {
                    return this._question;
                }
            }
        },
        methods: mapActions([
            'setQuestion',
        ])
    };
</script>

<style scoped>

</style>