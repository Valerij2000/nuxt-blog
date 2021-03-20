<template>
  <div>
    <div class="wrapp-mail" v-if="token">
      <section class="mail-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">



              <b-card no-body v-for="(userMail, index) in mailesUsers" :key="index" class="mt-4 mb-5">
                <b-tabs pills card vertical>
                  <b-tab title="Name User" active
                    ><b-card-text class="name">{{ userMail.name }}</b-card-text></b-tab
                  >
                  <b-tab title="Email User"
                    ><b-card-text ><a target="https://mail.ru/" href="https://mail.ru/" class="email">{{ userMail.email }}</a></b-card-text></b-tab
                  >
                  <b-tab title="Content"
                    ><b-card-text class="text">{{ userMail.text }}</b-card-text></b-tab
                  >
                </b-tabs>
              </b-card>

              

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            token: null,
           mailesUsers: [],
        }
    },


    created() {
      axios.get('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/mailes.json')  
        .then((res) => {
            let mailArray = []
            Object.keys(res.data).forEach(key => {
                const mail = res.data[key]
                mailArray.unshift({...mail, id: key})
            })
            this.mailesUsers = mailArray;
            console.log(...mailArray);
        })
            .catch((error) => {
                console.log(error);
            })
    },


    mounted() {
         this.token = this.$store.getters.getToken;
    },

   


    
};
</script>

<style lang="scss">
.wrapp-mail {
  min-height: 400px;


.mail-section {
    margin-top: 100px;
}


.name {
    font-weight: 800;
    font-size: 23px;
}

.email {
    font-weight: 800;
    font-size: 23px;
    text-decoration: underline;
    color: rgb(139, 67, 221);
}

.text {
    font-size: 19px;
}



}




</style>