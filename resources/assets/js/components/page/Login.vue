<template>
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-form>
                <el-form-item>
                    <label for="email">Email</label>
                    <el-input id="email" v-model="email" type="email" placeholder="email@example.com"></el-input>
                </el-form-item>
                <el-form-item>
                    <label for="password">Password</label>
                    <el-input id="password" v-model="password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>Login</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                'email': '',
                'password': '',
            };
        },
    };
</script>

<style scoped>

</style>