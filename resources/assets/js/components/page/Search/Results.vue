<template>
    <div>
        <p v-if="questionsCount < 1"></p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Results",
        computed: {
            ...mapGetters([
                'questionsCount'
            ])
        }
    };
</script>

<style scoped>

</style>