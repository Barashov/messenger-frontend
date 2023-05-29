<template>
    <div v-on:click="onClick" class="main">
        <div class="img">
            <img src="../../public/favicon.ico" alt="hello"/>
        </div>
        
        <div>
            <h3>{{ chat.name }}</h3>
        </div>
    </div>

</template>

<script>
export default {
    props: ["chat"],
    methods: {
        onClick() {
            console.log(this.chat.id)
        }
    }
}
</script>

<style scoped>  
.main {
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
}
.main:hover {
    background-color: rgb(200, 200, 200);
    border-radius: 10px
}
.img {
    margin-right: 10px;
    margin-left: 5px;
}
</style>