<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <h1 class="text-center mt-5">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">

h1 {
   text-shadow: 1px 1px 2px black, 0 0 1em #6c757d; /* Параметры тени */
}

</style>