<template>
  <div>
    <section class="search-section mt-3 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="wrapper__search">
              <!-- Search -->
              <div class="search">
                <div class="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
              <!-- Search input -->
              <input type="text" :placeholder="placeholder" v-model="search" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return { search: this.value };
  },
  watch: {
    search(val) {
      console.log(val)
      this.$emit("search", val);
    },
  },
};
</script>

<style scoped lang="scss">

/* Search */
.wrapper__search {
  position: relative;
}
.search {
  top: 25px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  color: #909399;
  font-size: 16px;
  min-width: 100%;
  height: auto;
  margin-top: 25px;
}
</style>


