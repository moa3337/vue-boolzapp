const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contacts: contacts,

            activeContact: 3,

            newMessage: {
                date: '15:30',
                message: "",
                status: "sent",
            },
        };
    },

    methods: {
        sendMessage() {
            this.contacts[this.activeContact].messages.push({
                ...this.newMessage
            });

            setTimeout(() => {
                this.contacts[this.activeContact].messages.push({
                    date: '15:30',
                    message: "ok",
                    status: "recived",
                });
            }, 1000);
        },
    },

});
app.mount('#app');