<template>
    <HeaderPage />
    <h1>Hello User update</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="Restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="Restaurant.contact" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
    name: 'UpdateResto',
    components: {
        HeaderPage
    },
    data() {
        return {
            Restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods:
    {
        async updateRestaurant() {

            const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
                name: this.Restaurant.name,
                address: this.Restaurant.address,
                contact: this.Restaurant.contact,
            });
            if (result.status == 200) {
                this.$router.push({ name: 'HomeMain' })
            }
            console.warn("result", result)
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result.data)
        this.Restaurant = result.data
    }
}
</script>