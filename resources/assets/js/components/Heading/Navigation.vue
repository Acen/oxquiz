<template>
    <el-menu mode="horizontal" :default-active="$route.name" :router="true">
        <el-menu-item index="search" route="/">Search</el-menu-item>
        <el-menu-item index="create" route="/create">Create</el-menu-item>
    </el-menu>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Navigation",
        computed: mapState([
            'page',
        ]),
    };
</script>

<style scoped>
    .el-menu{
        float: right;
        border-bottom: none;
    }
</style>