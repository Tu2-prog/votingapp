<template>
  <div>
    <v-app-bar color="white accent-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Evoter</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute clipped>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" @click="handleNavigation(item)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Token validation pop-up -->
    <v-dialog v-model="tokenDialog" max-width="500">
      <v-card>
        <v-card-title>Enter Token</v-card-title>
        <v-card-text>
          <v-text-field v-model="token" label="Token" type="password"></v-text-field>
          <v-alert v-if="showTokenError" type="error" dismissible @input="showTokenError = false">
            Incorrect token. Please try again.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="validateToken">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

interface NavigationItem {
  title: string;
  icon: string;
  link: string;
}

export default defineComponent({
  name: 'NavBar',
  data: () => ({
    drawer: false,
    tokenDialog: false,
    token: '',
    showTokenError: false,
    items: [
      { title: 'Home', icon: 'mdi-home', link: '/' },
      { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard' },
      { title: 'Votes', icon: 'mdi-chart-areaspline', link: '/votes' },
      { title: 'About', icon: 'mdi-help-box', link: '/about' },
      { title: 'Admin', icon: 'mdi-lock', link: '/admin' },
    ],
  }),
  methods: {
    handleNavigation(item: NavigationItem) {
      if (item.link === '/admin') {
        this.showTokenDialog();
      } else {
        this.$router.push(item.link);
      }
    },
    showTokenDialog() {
      this.token = '';
      this.tokenDialog = true;
    },
    validateToken() {
      const correctToken = process.env.TOKEN;
      if (this.token === correctToken) {
        this.$router.push('/admin');
      } else {
        this.showTokenError = true;
      }
    },
  },
});
</script>
