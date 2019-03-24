<template>
    <!-- Material form register -->
    <div class="col-6 offset-3">

        <div class="card">

            <h5 class="card-header info-color white-text text-center py-4">
                <strong>Sign up</strong>
            </h5>

            <!--Card content-->

            <div class="card-body px-lg-5 pt-0">

                <!-- Form -->
                <form class="text-center" style="color: #757575;" @submit.prevent="register()">

                    <div class="form-row">
                        <div class="col">
                            <!-- First name -->
                            <div class="md-form">
                                <input
                                    v-model="firstname"
                                    type="text"
                                    id="materialRegisterFormFirstName"
                                    class="form-control"
                                    placeholder="First Name">
                                <label for="materialRegisterFormFirstName"></label>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Last name -->
                            <div class="md-form">
                                <input
                                    v-model="lastname"
                                    type="text"
                                    id="materialRegisterFormLastName"
                                    class="form-control"
                                    placeholder="Last name">
                                <label for="materialRegisterFormLastName"></label>
                            </div>
                        </div>
                    </div>

                    <!-- E-mail -->
                    <div class="md-form mt-0">
                        <input
                            v-model="email"
                            type="email"
                            id="materialRegisterFormEmail"
                            class="form-control"
                            placeholder="E-mail">
                        <label for="materialRegisterFormEmail"></label>
                    </div>

                    <!-- Password -->
                    <div class="md-form">
                        <input
                            v-model="password"
                            type="password"
                            id="materialRegisterFormPassword"
                            class="form-control"
                            aria-describedby="materialRegisterFormPasswordHelpBlock"
                            placeholder="Password">
                        <label for="materialRegisterFormPassword"></label>
                        <small
                            id="materialRegisterFormPasswordHelpBlock"
                            class="form-text text-muted mb-4">
                            At least 8 characters and 1 digit
                        </small>
                    </div>

                    <!-- Sign up button -->
                    <button
                        class=
                        "btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                        type="submit">
                        Sign Up
                    </button>

                    <!-- Social register -->
                    <p>or sign up with:</p>

                    <a type="button" class="btn-floating btn-fb btn-sm">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a type="button" class="btn-floating btn-tw btn-sm">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a type="button" class="btn-floating btn-li btn-sm">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a type="button" class="btn-floating btn-git btn-sm">
                        <i class="fab fa-github"></i>
                    </a>

                    <hr>


                </form>
                <!-- Form -->

            </div>

        </div>
    </div>
    <!-- Material form register -->
</template>


<script>
import Axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Register',
  data() {
    return {
      firstname: '',
      lastname: '',
      fullname: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      const NewUser = {
        name: `${this.firstname} ${this.lastname}`,
        email: this.email,
        password: this.password,
      };
      Axios
        .post('http://localhost:3000/users', NewUser)
        .then(() => {
          swal('Register Success', '', 'success');
          this.$router.push('/login');
        })
        .catch((err) => {
          if (err.message === 'Request failed with status code 400') {
            swal('Email has been registred', '', 'error');
          }
        });
    },
  },
};
</script>


<style scoped>
.card {
    margin-top: 8%;
}
</style>
