<template>
<div class="main">
    <div class="search">
        <Input 
            placeholder="search"
            v-model="search"/>
            
    </div>
    <div class="chats">
        <ChatPreView v-for="chat of chats" v-bind:chat="chat"/>
    </div>
</div>
</template>


<script>
import ChatPreView from '../components/ChatPreView.vue'
export default {
    data() {
        return {
            search: null,
            resources: []
        };
    },
    components: [ChatPreView],
    computed: {
        chats() {
            if (this.search) {
                return this.resources.filter(chat => {
                    return this.search
                        .toLowerCase()
                        .split(" ")
                        .every(v => chat.name.toLowerCase().includes(v));
                })
            }
            else {
                return this.resources
            }
        }
    },

    mounted() {
        const chats = [{ id: 0, name: "ps", "created_by": 3, "image": null },
                        {id: 1, name: 'ok'}];
        this.resources = chats;
    },
    components: { ChatPreView }
}
</script>


<style scoped>
.main {
    display: flex;
    flex-direction: column;
    
    margin: 10px;
}
.chats {
    width: 100%;
    
}
.search {
    align-self: center;
}
</style>