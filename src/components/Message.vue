<template>
<div class="main">
    <div class="author-message message" v-if="isAuthor">
        {{ message.text }}
    </div>

    <div class="message" v-else>
        <!-- image, username, datetime ссылка на автора -->

    </div>

    
</div>

</template>

<script> 
export default {
    props: ['message'],
    methods: {
        isAuthor() {
            // message.user.id == this.$store.auth.user_id
            return true
        }
    }
}
</script>


<style scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: min-content !important;
    
}
.message {
    max-width: 45%;
    height: min-content;
    background-color: white;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    
}

.author-message {
    align-self: flex-end;
    background: linear-gradient(to bottom right, blue, pink)
}





</style>