<template>
    <div>
        <p> {{ printMessage }}</p>
    </div>
</template>


<script>
export default {
   
   props: {
       printMessage: {
           type: String,
           required: true
       },
   },

    
}
</script>


<style lang="scss" scoped>
    p {
        text-align: center;
        color: rgb(41, 228, 150);
        font-weight: 800;
    }
</style>