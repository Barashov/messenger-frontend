<template>
<div class="main">
    <ChatInput @newMessage="newMessage"/>
</div>

</template>


<script>
import ChatInput from './ChatInput.vue';

export default {
    components: { ChatInput },
    methods: {
        newMessage(text) {  
            this.$emit('newMessage', text)
        }
    }
}
</script>


<style scoped>
.main {
    width: 100%;
    height: 50px !important;
    background-color: blue;
    border-radius: 2vh;
    /* добавить нормальные скругления */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>