<template>
    <el-row>
        <el-col :span="8">
            <branding></branding>
        </el-col>
        <el-col :span="16">
            <navigation></navigation>
        </el-col>
    </el-row>
</template>

<script>
    import Branding from './Heading/Branding.vue';
    import Navigation from './Heading/Navigation.vue';

    export default {
        name: "Heading",
        components: {
            Branding,
            Navigation
        },
    };
</script>

<style scoped>

</style>