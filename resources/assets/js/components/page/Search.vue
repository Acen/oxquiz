<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <label for="question" class="el-form-item__label">What's the question?</label>
                <el-popover placement="bottom" :width="question_width">
                    <p>Hi there</p>
                    <el-input slot="reference" id="question" clearable placeholder="Something about cockroaches." v-model="question" :prefix-icon="loading"></el-input>
                </el-popover>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Search",
        data() {
            return {
                _question: '',
                question_width: 0,
            }
        },
        mounted(){
            this.question_width = document.getElementById('question').offsetWidth - 24;
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
            },
            loading() {
                if(this.question){
                    return 'el-icon-loading';
                }
            }
        },
        methods: {
            ...mapActions([
                'setQuestion',
            ]),
        }
    };
</script>

<style scoped>

</style>