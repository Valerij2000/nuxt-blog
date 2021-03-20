<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(th, index) in thead" :key="index" > {{ th }} </th>
                </tr>
            </thead>


            <tbody>
                <tr v-for="(comment, index) in comments" :key="index"> 
                    <td> {{ comment.name }} </td>
                    <td> {{ comment.text }} </td>
                    <td class="status-success" v-if="comment.publish"> Published</td>
                    <td class="status-fail" v-else>Hiden</td>
                </tr>
            </tbody>




        </table>
         
    </div>
</template> 


<script>
export default {
    props: {
        thead: {
            type: Array,
            required: true 
        },
        comments: {
            type: Array,
            required: true
        },
    },

}
</script>


<style lang="scss">
    .status-success {
        color: green;
        font-weight: 800;
    }


    .status-fail {
        color: red;
        font-weight: 800;
    }

    
</style>