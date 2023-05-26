<template>
<input 
    type="text"
    v-model="value"
    :placeholder="placeholder"
    @input="name=$event"
    @change="name=$event">
</template>

<script>
export default {
    name: 'Input',
    props: ['placeholder'],
    data() {
        return {
            value: ''
        }
    }
}
</script>


<style scoped>
input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin: 0;
}
</style>
