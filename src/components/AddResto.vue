<template>
    <HeaderPage />
    <h1>Hello add</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name"/>
        <input type="text" name="address" placeholder="Enter address" v-model="Restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter contact" v-model="Restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default{
    name:'AddResto',
    components:{
        HeaderPage
    },
    data()
    {
        return{
            Restaurant :{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async addRestaurant()
        {
            console.warn(this.Restaurant)
            const result =await axios.post("http://localhost:3000/restaurant",{
                name:this.Restaurant.name,
                address:this.Restaurant.address,
                contact:this.Restaurant.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'HomeMain'})
            }
            console.warn("result",result)
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>