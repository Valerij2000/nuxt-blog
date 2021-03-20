<template>
  <div class="wrapper">
    <Header/>
    <!-- В модуле Nuxt происходит динамическая отрисовка страницы (аналог модуля router-view) -->
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/system/Header.vue'
import Footer from '@/components/system/Footer.vue'

export default {
  components: {
    Header, Footer
  },
}
</script>

<style lang="scss">


</style>
