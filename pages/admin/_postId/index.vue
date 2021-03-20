<template>
    <div class="wrapp-post">
        <div class="container">
            <nuxt-link class="link_post" to="/admin">Come back admin page!</nuxt-link>

            <NewPostForm :postEdit="post" class="mt-5" @submit="onSubmit" />
        </div>
    </div>
</template>

<script>

import NewPostForm from '@/components/Admin/NewPostForm.vue'
import axios from 'axios'

export default {
    components: {
        NewPostForm
    }, 
    layout: 'admin',

asyncData (contex) {
     return axios.get(`https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`)
        .then((res) => {
            return {
                post: { ...res.data, id: contex.params.postId }
            }
        })
            .catch((error) => {
                console.log(error);
            })
},


    methods: {
        onSubmit (post) {
            console.log('Post Edditing!');
            console.log(post);
            this.$store.dispatch('editPost', post);
        }
    },



}
</script>


<style lang="scss">
    .wrapp-post {
        min-height: 650px;
    }


      .link_post {
  font-size: 23px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
}

</style>