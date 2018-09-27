<template>
    <el-menu mode="horizontal" :default-active="$route.name" :router="true">
        <el-menu-item index="about" route="/about">About</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "BrandingNavigation",
    };
</script>

<style scoped>
    .el-menu {
        display:       inline-block;
        border-bottom: none;
    }
</style>