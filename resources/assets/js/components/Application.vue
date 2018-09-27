<template>
    <el-container>
        <el-header>
            <heading></heading>
        </el-header>
        <el-container>
            <el-header v-if="hasNotifications">
                <el-row type="flex" justify="center">
                    <el-col :span="12">
                        <template v-for="notification in notifications">
                            <notification :notification="notification"></notification>
                        </template>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Heading from './Heading';
    import Notification from './Notification';
    import { mapState, mapGetters } from 'vuex';

    export default {
        name      : "Application",
        components: {
            Heading,
            Notification,
        },
        computed  : {
            ...mapState([
                'notifications',
            ]),
            ...mapGetters([
                'hasNotifications',
            ])
        }
    };
</script>

<style scoped>
    .el-container{
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .el-header{
        height:20px;
    }
</style>