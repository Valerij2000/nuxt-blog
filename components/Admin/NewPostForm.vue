<template>
    <div>
       <section class="new-post-section">
           <div class="container">
               <div class="row">
                   <div class="col-xl-6 offset-xl-3">

                       <form action="" @submit.prevent>

                          

                       <InputsControls placeholder="Enter post title" v-model="post.title" />
                       <InputsControls placeholder="Enter post description" v-model="post.descr" />
                       <InputsControls placeholder="Enter post image" v-model="post.img" />
                       <TextareaControls placeholder="Enter post content" v-model="post.content" />

                        <!-- Buttons -->

                        <div class="controls">
                            <button class="btn-danger" @click="cancel">Cancel!</button>
                            <button class="btn-success" @click="onSubmit">Save!</button>
                            <span class="error ml-3"> {{ error }} </span>
                        </div>

                         <label for="" class="print_mes mt-3"> {{ printMessage }} </label>

                        


                       </form>


                   

                   </div>
               </div>
           </div>
       </section>
    </div>
</template>


<script>
export default {

    props: {
          postEdit: {
              type: Object,
              required: false    
          },
    },

    data() {
        return {
            error: '',
            printMessage: '',
            post: this.postEdit ? { ...this.postEdit } : {
                title: '',
                descr: '',  
                img: '',
                content: '', 
            },
        }
    },


    methods: {
        cancel () {
            this.$router.push('/admin/')
        },

        onSubmit () {
            
            if (this.post.title === '' || this.post.descr === '' || this.post.img === '' || this.post.content === '') {
                this.error = 'Can not be blank!';
            } else {
                this.error = '';
                this.printMessage = 'Edditing post!';
                this.getTimeOut();
                this.$emit('submit', this.post);
            }

           
        },

        getTimeOut () {
            setTimeout(() => {
                this.printMessage = '';
            }, 2500);
        },

    },


}
</script>


<style lang="scss">
    .print_mes {
        color: rgb(35, 203, 233);
        font-weight: 800;
    } 

    .error {
        color: red;
    }

</style>