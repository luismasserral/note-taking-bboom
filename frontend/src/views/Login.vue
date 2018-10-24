<template>
  <div class="login">
    <h1 class="login__title ta-center">Note App - BBoom</h1>
    <el-form
      class="login__form"
      label-position="top"
      ref="loginForm"
      v-bind:model="form"
      v-bind:rules="rules"
    >
      <el-form-item
        label="Email"
        prop="email"
      >
        <el-input
          autocomplete="off"
          class="login__form-input"
          placeholder="Enter your email"
          v-model="form.email"
          v-on:keyup.enter.native="login"
        >
          <i
            class="el-input__icon material-icons"
            slot="prefix"
          >
            alternate_email
          </i>
        </el-input>
      </el-form-item>
      <el-form-item
        label="Password"
        prop="password"
      >
        <el-input
          autocomplete="off"
          class="login__form-input"
          placeholder="Enter your password"
          type="password"
          v-model="form.password"
          v-on:keyup.enter.native="login"
        >
          <i
            class="el-input__icon material-icons"
            slot="prefix"
          >
            dialpad
          </i>
        </el-input>
      </el-form-item>
      <el-button
        class="login__form-submit"
        type="primary"
        v-bind:disabled="loading"
        v-loading="loading"
        v-on:click="login"
      >
        Login
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'You must enter the email',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'The email address must be a valid email',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'You must enter the password',
            trigger: 'blur',
          },
        ],
      },
      loading: false,
    };
  },
  methods: {
    async login() {
      const vm = this;

      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          vm.loading = true;

          await vm.$store.dispatch('auth/login', {
            email: vm.form.email,
            password: vm.form.password,
          });

          vm.loading = false;

          if (vm.$store.getters['auth/isLoggedIn']) {
            vm.$router.push({
              name: 'notes',
            });
          } else {
            this.$message.error('Wrong email or password');
          }
        }
      });
    },
  },
};
</script>
