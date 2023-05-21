<template>
    
    <div class="main">
        <form @submit.prevent>
            <h1>Регистрация</h1>
            <Input
                placeholder="имя"
                v-model="username"
                @input="onInputUsername"
                @change="onChangeUsername"/>
            <br>
            <Input placeholder="пароль" v-model="password"></Input>
            <br>
            <Button>зарегестрироваться</Button>

        </form>
    </div>

</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            username_error: '',
            password_error: ''
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
        justify-content: center;
    }
</style>

