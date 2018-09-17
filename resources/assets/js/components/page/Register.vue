<template>
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-form>
                <el-form-item>
                    <label for="username">Username</label>
                    <el-input id="username" v-model="username" placeholder="Foreplay" required></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="email">Email</label>
                    <el-input id="email" v-model="email" placeholder="email@example.com" required></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="password">Password</label>
                    <el-input id="password" v-model="password" type="password" required></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="password-repeat"></label>
                    <el-input id="password-repeat" v-model="password_repeat" type="password" required></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="submit" @click="registerUser()" :span="24" :loading="loading">Register</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name   : "Register",
        data() {
            return {
                'username'       : '',
                'email'          : '',
                'password'       : '',
                'password_repeat': '',
                loading: false,
            };
        },
        methods: {
            registerUser() {
                this.loading = true;
                if(this.passwordFilled){
                    // cont
                }else {
                    // this.loading = false;
                }
            },
            ...mapActions([
                'register',
            ])
        },
        computed: {
            passwordFilled(){
                return this.password.length && (this.password === this.password_repeat);
            }
        },
    };
</script>

<style scoped>

</style>