<template>
    <div class="main">
        <h1>Login</h1>
        <from @submin.prevent>
           
            <div class="input-box">
                <Input
                placeholder="email or username"
                v-model="name"/>
            </div>
            
            <div class="input-box">
                <Input
                placeholder="password"
                v-model="password"/>
            </div>

            <div class="but">
                <Button>Войти</Button>
            </div>
        </from>
        <Hr></Hr>
    </div>
</template>


<script> 
export default {
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        onInputName(event) {

        }
    }
}
</script>


<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-box {
    margin: 20px;
}
.but {
    width: 100%;
}
</style>