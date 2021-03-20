<template>
   <no-ssr>
        <div class="wrapp-comments">
        <div class="container">
            <nuxt-link class="link_post" to="/admin">Come back admin page!</nuxt-link>

            <div class="row">
                <div class="col-xl-12 mt-5">

                    <CommentTable :comments="comments" :thead="['Name', 'Text', 'Status']" />

                </div>
            </div>

        </div>
    </div>
   </no-ssr>
</template>

<script>

import NewPostForm from '@/components/Admin/NewPostForm.vue'
import CommentTable from '@/components/Admin/CommentTable.vue'
import axios from 'axios'


export default {


    components: {
        NewPostForm, CommentTable
    }, 
    layout: 'admin',

    data() {
        return {
            comments: []
            }
    },

    created() {
      axios.get('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/comments.json')  
        .then((res) => {
            let commentsArray = []
            Object.keys(res.data).forEach(key => {
                const comment = res.data[key]
                commentsArray.push({...comment, id: key})
            })
            this.comments = commentsArray;
            console.log(commentsArray);
        })
            .catch((error) => {
                console.log(error);
            })
    },


    methods: {
       
    },



}
</script>


<style lang="scss">
    .wrapp-comments {
        min-height: 650px;
    }


      .link_post {
  font-size: 23px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
}



</style>