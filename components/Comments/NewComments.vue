<template>
  <div>
    <section class="contact-section  mb-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <hr>
                    <h2 class="text-center">New Comment!</h2>
                    <hr>

                    <Message  :printMessage="printMessage"  />

                    <form action="" @submit.prevent="onSubmit" class="comment-form mt-4">

                        <!-- User Name -->
                      <InputsControls value="Name" placeholder="User Name" type="name" v-model="comment.name" />

                        <!-- Text -->
                        <TextareaControls value="Text" placeholder="Text" v-model="comment.text"/>

  
                        <!-- Button -->
                        <ButtonControls />


                        <!-- Error -->

                        <span style="color: red;" class="mt-3">{{ error }}</span>

                    </form>
                </div>
            </div>

             <AddComment :addComment="addComment" />
             
        </div>
    </section>
  </div>
</template>


<script>





export default {

    props: {
        postId: {
            type: String,
            required: true
        },

    },


    data() {
        return {
            printMessage: '',
            addComment: [],
             comment: {
                name: '',
                text: ''
            },
            error: '',
        }
    },

    methods: {
         onSubmit () {

              if (this.comment.name === '' || this.comment.text === '') {
                this.error = 'Not be blank!';
                this.printMessage = '';
                return false;
            } else {
                this.$store.dispatch('addComment', {
                 postId: this.postId,
                 publish: true,
                 ...this.comment
             })
                .then(() => {
                this.printMessage = 'Submited!';
                this.getTimeOut();


                this.addComment.unshift({
                    name: this.comment.name,
                    text: this.comment.text
                });
                this.error = '';
                this.comment.name = '';
                this.comment.text = '';
           
                })
                    .catch((error) => {
                        console.log(error);
                    })

            }

             
           
        },

        getTimeOut () {

             setTimeout(() => {
                   this.printMessage = 'Write to us again...';
            }, 2000);

            setTimeout(() => {
                   this.printMessage = null;
            }, 8000);
        },


    },
    
}
</script>


<style lang="scss" scoped>




    .comment-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>