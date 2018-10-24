<template>
  <div id="app">
    <el-container v-if="isLoggedIn">
      <el-main>
        <el-button
          class="logout"
          type="primary"
          v-on:click="logout"
        >
          Close session
        </el-button>
        <router-view/>
      </el-main>
    </el-container>
    <router-view v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
