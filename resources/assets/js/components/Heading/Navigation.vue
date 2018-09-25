<template>
    <el-menu mode="horizontal" :default-active="$route.name" :router="true">
        <el-menu-item index="search" route="/">Search</el-menu-item>
        <template v-if="user">
            <el-menu-item index="profile" route="/profile">Profile: {{ user.name }}</el-menu-item>
            <el-menu-item index="logout" @click="handleLogout">Logout</el-menu-item>
        </template>
        <template v-else>
            <el-menu-item index="login" route="/login">Login</el-menu-item>
            <el-menu-item index="register" route="/register">Register</el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "Navigation",
        computed: {
            ...mapState([
                'user',
            ]),
        },
        methods: {
            handleLogout() {
                this.logout().then(() => {
                    this.$router.push({name: 'search'});
                });
            },
            ...mapActions([
                'logout',
            ]),
        }
    };
</script>

<style scoped>
    .el-menu{
        float: right;
        border-bottom: none;
    }
</style>