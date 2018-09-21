<template></template>
<script>
    import { mapActions } from 'vuex';

    export default {
        name: "User",
        props: {
            user: {
                type: Object,
                required: true,
            }
        },
        methods: {
            ...mapActions([
                'login',
            ]),
        },
        mounted() {
            this.login(this.user);
        }
    };
</script>