<template>
    <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong><a href="https://github.com/Tu2-prog" target="_blank">Tu2-prog</a></strong>
      </v-col>
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    name: "FooterComponent"
})
</script>