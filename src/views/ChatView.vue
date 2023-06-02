<template>
    <div class="main">
        <div class="header">
            <ChatHeader/>
        </div>
        <div class="content">
            <Chat :messages="messages"/>
        </div>
        <div class="footer">
            <ChatFooter @newMessage="newMessage"/>
        </div>
    </div>
    
</template>


<script>
import ChatFooter from '../components/ChatFooter.vue';
import ChatHeader from '../components/ChatHeader.vue';
import Chat from '../components/Chat.vue';
export default {
    data() {
        return {
            chat: null,
            messages: []
        };
    },
    mounted() {
        this.chat = this.$route.query;
        this.messages = [
            {id: 1, text: "hello", sent_by: {id: 1, username: 'alex'}, created_at: '22:00'},
            {id: 2, text: 'ddddddddddddddddddddddd ddddddddddddddddddddddddd ddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddd'}
        ]
    },
    components: { ChatFooter, ChatHeader, Chat },
    methods: {
        // сделать подгрузку новых сообщений
        newMessage(text) {
            const message = {text: text}
            this.messages.push(message)
        }
    }
}
</script>


<style scoped>
@media (min-width: 768px) {
    .main {
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: auto;
    }

}

@media (max-width: 768px) {
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .content {
        flex: auto;
    }
    
}
</style>