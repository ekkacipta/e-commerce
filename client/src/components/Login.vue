<template>

    <div class="col-6 offset-3">
        <!-- Material form login -->
        <div class="card">

        <h5 class="card-header info-color white-text text-center py-4">
            <strong>Sign in</strong>
        </h5>

        <!--Card content-->
        <div class="card-body px-lg-5 pt-0">

            <!-- Form -->
            <form class="text-center" style="color: #757575;" @submit.prevent="login()">

            <!-- Email -->
            <div class="md-form">
                <input
                    v-model="email"
                    type="email"
                    id="materialLoginFormEmail"
                    class="form-control"
                    placeholder="E-mail">
                <label for="materialLoginFormEmail"></label>
            </div>

            <!-- Password -->
            <div class="md-form">
                <input
                    v-model="password"
                    type="password"
                    id="materialLoginFormPassword"
                    class="form-control"
                    placeholder="Password">
                <label for="materialLoginFormPassword"></label>
            </div>

            <div class="d-flex justify-content-around">
                <div>
                <!-- Remember me -->
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="materialLoginFormRemember">
                    <label
                        class="form-check-label"
                        for="materialLoginFormRemember">
                        Remember me
                    </label>
                </div>
                </div>
                <div>
                <!-- Forgot password -->
                <a href="">Forgot password?</a>
                </div>
            </div>

            <!-- Sign in button -->
            <button
                class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit">
                Sign in
            </button>

            <!-- Register -->
            <p>Not a member?
                <router-link to="/register">Register</router-link>
            </p>

            <!-- Social login -->
            <p>or sign in with:</p>
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

            </form>
            <!-- Form -->

        </div>

        </div>
        <!-- Material form login -->
    </div>
</template>

<script>
import Axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const LoginUser = {
        email: this.email,
        password: this.password,
      };

      Axios
        .post('http://localhost:3000/users/login', LoginUser)
        .then(() => {
          swal('Login Successfull', '', 'success');
          this.$router.push('/');
        })
        .catch(() => {
          swal('Invalid Username/Password', '', 'error');
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
