<template>
  <NavBar/>
  <AddVote/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import AddVote from '@/components/AddVote.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    AddVote,
},
});
</script>
