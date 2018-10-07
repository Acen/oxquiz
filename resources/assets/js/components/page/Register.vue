<template>
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-form>
                <el-form-item :error="getError('name')">
                    <label for="name">Display Name</label>
                    <el-input id="name" v-model="registration.name" placeholder="Foreplay" required></el-input>
                </el-form-item>
                <el-form-item :error="getError('email')">
                    <label for="email">Email
                        <small>- Used to login</small>
                    </label>
                    <el-input id="email"
                              v-model="registration.email"
                              placeholder="email@example.com"
                              required></el-input>
                </el-form-item>
                <el-form-item :error="getError('password')">
                    <label for="password">Password</label>
                    <el-input id="password" v-model="registration.password" type="password" required></el-input>
                </el-form-item>
                <el-form-item :error="getError('password_confirmation')">
                    <label for="password-repeat"></label>
                    <el-input id="password-repeat"
                              v-model="registration.password_confirmation"
                              type="password"
                              required></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="submit"
                               @click="submit()"
                               :span="24"
                               :loading="registration.saving">Register
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import { mapActions } from 'vuex';
    import Registration from '../../models/Registration';

    export default {
        name    : "Register",
        data() {
            return {
                registration: new Registration(),
            };
        },
        methods : {
            getError(key){
                if(this.registration.errors[key]){
                    if(_.isArray(this.registration.errors[key])){
                        return _.first(this.registration.errors[key]);
                    }else{
                        return this.registration.errors[key];
                    }
                }
            },
            submit() {
                this.registration.save()
                    .then(() => {
                        // Login User
                        this.login(this.registration)
                            .then(() => {
                                // Redirect back to home.
                                this.$router.push({name: 'search'});
                            });
                    })
                    .catch(( error ) => {
                        console.error('registration.save', error);
                    });
            },
            ...mapActions([
                'login',
            ]),
        },
    };
</script>