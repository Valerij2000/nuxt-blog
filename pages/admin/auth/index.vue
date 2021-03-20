<template>
    <div>
        <section class="auth-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3 mt-5">
                        <form action="" @submit.prevent="onSubmit">


                            <InputsControls v-model="user.email" type="email" placeholder="Enter Login" />
                            <InputsControls v-model="user.password" type="password" placeholder="Enter Password" />

                            <!-- Buttons -->    
                           
                            <button class="btn btn-secondary">Submit!</button>
                            <span> {{ notFound }} </span>
                           


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
            notFound: '',
            user: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        onSubmit () {

            this.$store.dispatch('authUser', this.user)
                .then((res) => {
                    this.$router.push('/admin');
                    console.log('Auth user!');
                    // Reset
                    this.user.email = '';
                    this.user.password = '';
                })
                    .catch((error) => {
                        console.log(error);
                        this.notFound = 'Not found Admin!';
                    })
        },
    },

    
}
</script>


<style lang="scss" scoped>
    
    .auth-section {
        min-height: 750px;
    }

    .btn-secondary {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    span {
        color: red;
        margin-left: 20px;
    }

</style>