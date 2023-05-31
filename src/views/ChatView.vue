<template>
    <div class="main">
        <div class="header">
            <ChatHeader/>
        </div>
        <div class="content">
        </div>
        <div class="footer">
            <ChatFooter/>
        </div>
    </div>
    
</template>


<script>
import ChatFooter from '../components/ChatFooter.vue';
import ChatHeader from '../components/ChatHeader.vue';
export default {
    data() {
        return {
            chat: null
        };
    },
    components: [
        ChatFooter,
        ChatHeader
    ],
    mounted() {
        this.chat = this.$route.query;
    },
    components: { ChatFooter, ChatHeader }
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