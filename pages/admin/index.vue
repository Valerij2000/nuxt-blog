<template>
  <div>
    <section class="home-page-section">
      <div class="container mt-5 ">
        
        <hr v-if="token">
          <nuxt-link v-if="token" class="link_post" to="/admin/new-post">New Post!</nuxt-link>
          <br>
          <nuxt-link v-if="token" class="link_post" to="/admin/comments">Comments Edit!</nuxt-link>
          <br>
          <nuxt-link v-if="token" class="link_post" to="/admin/mailes">Mailes Users!</nuxt-link>
          <br>

          <a v-if="token" class="logout" @click="logoutUser">Logout User!</a>
          <nuxt-link v-else class="link_post" to="/admin/auth">Log in!</nuxt-link>

        <hr>

           <Search :value="search" placeholder="Find you are post" @search="search = $event"/>

          <PostsList :admin=true :posts="notesFilter" class="mt-5"/>  

         
      </div>
    </section>
  </div>
</template>

<script>


import PostsList from '@/components/Blog/PostsList.vue'
import Search from '@/components/Blog/Search.vue'

export default {

    components: {
     PostsList, Search
  },

    layout: 'admin',

    data() {
      return {
        search: '',
        token: null,
      }
    },
    
 computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    },


     notesFilter () {
		  let arr = this.postsLoaded,
		  	search = this.search
				if (!search) return arr;
				// Small
			search = search.trim().toLowerCase();
			// Filter
			arr = arr.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			})
			// Error
			return arr;
	  },


  },

  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/admin/auth')
        })
    },
  },

  mounted() {
    this.token = this.$store.getters.getToken;
  },


}
</script>


<style lang="scss" scoped> 

  .home-page-section {
    min-height: 75vh;
  }



  .link_post {
  font-size: 23px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
}

.logout {
  font-size: 23px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 70px;
  cursor: pointer;
}

</style>