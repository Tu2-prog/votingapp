<template>
  <NavBar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'DashBoard',

  components: {
    NavBar,
},
});
</script>