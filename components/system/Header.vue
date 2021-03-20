<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
  
    <nuxt-link to="/" class="navbar-brand">Nuxt.js-Blog</nuxt-link> 


    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
        <nuxt-link v-if="token" to="/admin" class="nav-link">Admin</nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="postId" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="button" @click="loadPost()">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item><nuxt-link to="/admin/auth">Log in Admin</nuxt-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>

export default {
    name: 'Header',


    data () {
      return {
        postsLoaded: [],
        token: null,
        postId: null,
      }
    },

    mounted() {
      this.token = this.$store.getters.getToken;
      this.postsLoaded = this.$store.getters.getPostsLoaded;
    },

     methods: {
        loadPost () {
            this.$router.push(`/blog/${this.postsLoaded[this.postId].id}`);
            this.postId = '';
        },

    },



}






</script>


<style lang="scss">

.nav-link {

  .nuxt-link-exact-active {
    color: blue;
  }


}



.bg-light {
    background-color: #faf8f800!important;
}

.header-section {
  background-color: #1e2225;
  min-height: 50px;

  .nav-link {
    color: wheat;
    &:hover {
      color: white;
    }
  }
  

}


.navbar-brand {
  color: white;
  font-weight: 700;
  &:hover {
    color: #6c757d;
  }
}


</style>