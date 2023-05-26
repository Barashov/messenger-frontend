<template>
    <button type="button"><slot></slot></button>
</template>


<script>
export default {
    name: 'Button',
}
</script>


<style scoped>
button {
    padding: 8px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 20px
}
</style>