<template>
  <div class="form">
    <v-sheet width="400px" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="accessCode"
          :rules="rules"
          label="Access Code"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style>
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AuthForm',

    data: () => ({
      accessCode: '',
      rules: [
        (value: string | null) => {
          if (value) return true;
          return 'You must enter a first name.';
        },
      ],
    }),
  });
</script>