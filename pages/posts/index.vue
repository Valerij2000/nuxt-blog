<template>
  <div>
    <section class="form-page-section mt-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 offset-xl-3">
              <div class="mb-3">
                <label class="form-label"
                  >Post id</label
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Post id"
                  v-model="postId"
                />
              </div>
                <button @click="loadPost()" type="button" class="btn btn-outline-primary">Get Post</button>
                
                <span class="error ml-3">{{ error }}</span>

              
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>

import axios from 'axios'


export default {
    data() {
        return {
            postsLoaded: [],
            postId: '',
            error: '',
        }
    },

    mounted() {
      this.postsLoaded = this.$store.getters.getPostsLoaded;
    },

    methods: {
        loadPost () {

          if (this.postId === '') {
            this.error = 'Not be Blank!';
          } else {
            console.log(this.postsLoaded[this.postId].id);
            console.log(this.postsLoaded[this.postId]);
            this.$router.push(`/blog/${this.postsLoaded[this.postId].id}`);
          }

          
         

          
            
        },
    },


};
</script>



<style lang="scss" scoped>


.form-page-section {
  min-height: 73vh;
}

label {
  color: grey;
}


.error {
  color: red;
  margin-top: 20px;
}

</style>