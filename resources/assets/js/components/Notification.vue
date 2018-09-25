<template></template>

<script>
    import { Message } from 'element-ui';
    import { mapActions } from 'vuex';

    export default {
        name   : "Notification",
        props  : {
            notification: {
                type    : Object,
                required: true,
            }
        },
        methods: {
            ...mapActions([
                'dismissNotification',
            ]),
        },
        mounted() {
            Message({
                message: this.notification.message,
                type   : this.notification.type,
                onClose: this.dismissNotification(this.notification.id)
            });
        },
    };
</script>

<style scoped>

</style>