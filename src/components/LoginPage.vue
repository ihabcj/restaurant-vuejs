<template>
    <img class="logo" src="../assets/resto-logo.jpg" />
    <h1>Login</h1>

    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="text" v-model="password" placeholder="Enter Password" />
        <button v-on:click="LoginPage">Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async LoginPage() 
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            console.warn(result)
            if(result.status==200 && result.data.length>0)
            {
                alert("Login done");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeMain'})
            }
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HomeMain'})
        }
    }    
}
</script>

<style></style>