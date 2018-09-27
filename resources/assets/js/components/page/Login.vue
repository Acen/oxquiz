<template>
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-form>
                <el-form-item>
                    <label for="email">Email</label>
                    <el-input id="email" v-model="user.email" type="email" placeholder="email@example.com"></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="password">Password</label>
                    <el-input id="password" v-model="user.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submit()" :loading="user.saving">Login</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import Login from '../../models/Login';
    import { mapActions } from 'vuex';

    export default {
        name: "Login",
        data() {
            return {
                user: new Login(),
            };
        },
        methods: {
            submit() {
                this.user.save()
                    .then(() => {
                        // Login User
                        this.login(this.user)
                            .then(() => {
                                // Redirect back to home.
                                this.$router.push({name: 'search'});
                            });
                    })
                    .catch(( error ) => {
                        console.error('login.save', error);
                    });
            },
            ...mapActions([
                'login',
            ]),
        }
    };
</script>

<style scoped>

</style>