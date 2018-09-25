<template>
    <el-container>
        <el-header><heading></heading></el-header>
        <el-container>
            <el-header>
                <template v-for="notification in notifications">
                    <notification :notification="notification"></notification>
                </template>
            </el-header>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Heading from './heading';
    import Notification from './notification';
    import { mapState } from 'vuex';

    export default {
        name: "Application",
        components: {
            Heading,
            Notification,
        },
        computed: {
            ...mapState([
                'notifications',
            ]),
        }
    };
</script>

<style scoped>

</style>