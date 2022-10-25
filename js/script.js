const { createApp }  = Vue

createApp({
    data(){
        return {
            message : "hello Vue",
            name: "",
            image: "https://th.bing.com/th/id/OIP.Tzqd3R0yIdjmESakBWCPgAHaFj?pid=ImgDet&rs=1"
        }
    }
}).mount('#app')