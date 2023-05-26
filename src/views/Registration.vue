<script setup>
const callback = (response) => {
    console.log(response)
}
</script>

<template>
    
    <div class="main">
        
        <form @submit.prevent>
            <h1>Регистрация</h1>

            <div class="input-box">
                <Input
                placeholder="имя"
                v-model="username"
                @input="onInputUsername"
                @change="onChangeUsername"/>
                <Error>{{ username_error }}</Error>
            </div>

            <div class="input-box">
                <Input placeholder="пароль" v-model="password"></Input>
                <Error>{{ password_error }}</Error>
            </div>

            <div>
                <Button>зарегестрироваться</Button>
            </div>
            
            
        </form>
        
        <GoogleLogin :callback="callback"/>
        
        <Hr></Hr>

        
    </div>

</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: 'dfd',
            username_error: 'username is already used',
            password_error: 'dfdf'
        }
    },
    methods: {
        onInputUsername(event) {

        },
        onInputPassword(event) {

        },
        onChangeUsername(event) {

        }
    }
}
</script>

<style scoped>
    .main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .input-box {
        margin-bottom: 10px;
        height: 50px
    }
</style>

