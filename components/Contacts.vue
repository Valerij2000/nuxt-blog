<template>
  <div>
    <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 mb-5">

                    <!-- Message -->

                  <Message  :printMessage="printMessage"  />
                  

                    <!-- End Message -->
                    
                    <form action="" @submit.prevent="onSubmit" class="contact-form col-xl-6 offset-xl-3 mb-5">
                        <!-- User Name -->
                         <InputsControls placeholder="User Name" type="text" v-model="user.name" />

                        <!-- Email -->
                        <InputsControls placeholder="Email" type="email" v-model="user.email" />

                        
                        <!-- Text -->
                        <TextareaControls placeholder="Text" v-model="user.text" />

                        <!-- Buttons -->

                       <ButtonControls />

                        <!-- Error -->

                        <span style="color: red;" class="mt-3">{{ error }}</span>

                    </form>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>


<script>






export default {

    data() {
        return {
            printMessage: '',
            user: {
                name: '',
                email: '',
                text: ''
            },
            error: '',
        }
    },

    methods: {
        onSubmit () {

            if (this.user.name === '' || this.user.email === '' || this.user.text === '') {
                this.error = 'Not be blank!';
                this.printMessage = '';
            } else {
                this.printMessage = 'Submited!';
                this.getTimeOut();

                this.$store.dispatch('addMail', {
                    name: this.user.name,
                    email: this.user.email,
                    text: this.user.text
                })

                this.error = '';
                this.user.name = '';
                this.user.email = '';
                this.user.text = '';


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

};
</script>




<style lang="scss" scoped>

    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>