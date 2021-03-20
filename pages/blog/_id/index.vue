<template>
  <div>
    <section class="post-section mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <Post :post="post" />
            <NewComments :postId="$route.params.id" />
            <Comments :comments="comments" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Post from '@/components/Blog/Post.vue'
import NewComments from '@/components/Comments/NewComments.vue'
import Comments from '@/components/Comments/Comments.vue'
import axios from 'axios'

export default {

   components: {
        Post, NewComments, Comments
    },

  data() {
    return {
     
    }
  },

   
    head () {
    let title = this.post.title,
      descr = this.post.descr,
      img = `site.com/${this.post.img}`,
      type = 'article';
      

  return {
    title: title,
    meta: [
      { hid: 'og:title', name: 'og:title', content:  title },
      { hid: 'description', name: 'description', content:  descr },
      { hid: 'og:description', name: 'og:description', content:  descr },
      { hid: 'og:type', name: 'og:type', content:  type },
      { hid: 'og:img', name: 'og:img', content:  img },
    ]
  }
},

    async asyncData(contex) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts/${contex.params.id}.json`),
        axios.get(`https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/comments.json`)
      ])
      
      let commentsArray = [],
        commentsArrayRes = [];

        Object.keys(comments.data).forEach(key => {
          commentsArray.push(comments.data[key]);
        })

        for (let i=0; i<commentsArray.length; i++) {
          if (commentsArray[i].postId === contex.params.id && commentsArray[i].publish === true) {
            commentsArrayRes.push(commentsArray[i]);
          }
        }

      // let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === contex.params.id) && comments.publish) 
      return {
        post: post.data,
        comments: commentsArrayRes
      }
    }, 


};
</script>


<style lang="scss" scoped>
   
</style>