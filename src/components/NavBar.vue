<template>
    <v-app-bar
      color="white accent-4"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Evoter</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" absolute clipped>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'NavBar',
  data: () => ({
    drawer: false,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/about'},
          { title: 'Photos', icon: 'mdi-image', link: '/about' },
          { title: 'About', icon: 'mdi-help-box', link: '/about' },
        ]
  }),
})
</script>