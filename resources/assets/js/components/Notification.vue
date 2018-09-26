<template>
    <el-alert
        :title="notification.message"
        @close="dismiss()">
    </el-alert>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name   : "Notification",
        props  : {
            notification: {
                type    : Object,
                required: true,
            }
        },
        data() {
            return {
                timer: null,
            }
        },
        mounted(){
            this.timer = setTimeout(() => {
                this.dismiss();
            }, 8000);
        },
        methods: {
            dismiss(){
                clearTimeout(this.timer);
                this.dismissNotification(this.notification.id);
            },
            ...mapActions([
                'dismissNotification',
            ]),
        },
    };
</script>

<style scoped>

</style>