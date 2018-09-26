<template>
    <el-row>
        <el-col :span="8">
            <branding></branding>
            <branding-navigation></branding-navigation>
        </el-col>
        <el-col :span="16">
            <navigation></navigation>
        </el-col>
    </el-row>
</template>

<script>
    import Branding from './Heading/Branding.vue';
    import Navigation from './Heading/Navigation.vue';
    import BrandingNavigation from './Heading/BrandingNavigation';

    export default {
        name      : "Heading",
        components: {
            Branding,
            BrandingNavigation,
            Navigation
        },
    };
</script>

<style scoped>

</style>