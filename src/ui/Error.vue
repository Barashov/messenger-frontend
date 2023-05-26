<template>
<div>
    <p><slot></slot></p>
</div>
</template>


<script>
export default {
    name: 'Error'
}
</script>


<style scoped>
div {
    height: 20px
}
p {
    color: rgb(219, 25, 25);
}
</style>