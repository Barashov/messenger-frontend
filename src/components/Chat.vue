<template>
<div class="messages">
    <Message v-for="message in messages" v-bind:message="message"/>
</div>
</template>


<script>
import Message from './Message.vue';


export default {
    props: ["messages"],
    components: { Message }
    // добавить  событие подгрузки сообщений (event listener)
}
</script>


<style scoped>
    .messages {
        width: 100%;
        max-height: 75vh;
        overflow-y: scroll;
    }
    /* исправить баг с прокруткой */
</style>