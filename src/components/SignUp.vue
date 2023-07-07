<template>
    <img class="logo" src="../assets/resto-logo.jpg" />
    <h1> Sign Up</h1>

    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="text" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/LoginPage">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue';
export default {
    name: 'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            let result =await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name
            });

            console.warn(result);
            if(result.status==201)
            {
                alert("sign-up done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
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

<style>

</style>