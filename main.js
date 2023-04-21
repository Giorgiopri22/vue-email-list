const {createApp} = Vue

createApp({
    data() {
      return {
          emails: []
      }
    },
    created() {
      this.generateEmail()
    },
methods: {
    generateEmail(){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => {
              console.log(res.data.response)
            
              const email = res.data.response
              this.emails.push(email)
              if (this.emails.length < 10){
                  this.generateEmail()
              }
          } )
      },
    }
  }).mount('#app')