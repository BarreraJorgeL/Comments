import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'

createApp({
    methods:{
        data(){
            return{
                myData: 0
            }
        },
        async fetchData(){
            let URL = ''
            let data = await fetch(URL).then(res => res.json)
            console.log(data)
        }
    },
    components:{
        App
    },
    mounted(){
        this.fetchData()
    }
}).mount('#app')