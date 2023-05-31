<template>
    <div class="main">
        <input type="text" v-on:keyup.enter="newMessage" v-model="text">
        <button v-on:click="newMessage">></button>
    </div>
</template>


<script> 
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        newMessage() {
            if (this.text != '') {
                this.$emit('newMessage', this.text)
            } 

            this.text = ''
        }
    }
}
</script>


<style scoped>
.main {
    position: relative;
    max-height: 80%;
    max-width: 99%;
    /* background-color: aqua; */
}
input {
    height: 100%;
    width: 95%;
    box-sizing: border-box;
    border-radius: 7px 0 0 7px;
    border: 1px solid black;
    font-size: 120%
}
button {
    height: 100%;
    width: 10%;
    border-radius: 0 7px 7px 0;
    border: 1px solid black;
    background-color: white;
}
button:hover {
    background-color: rgb(200, 197, 197);
}

    
</style>