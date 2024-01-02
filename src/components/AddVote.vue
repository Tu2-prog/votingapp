<template>
  <h1 style="text-align: center;">Evoter</h1>
  <div class="text-box">
    Here you can add events that seemed amazing to you and are worth to be the No. 1 event in this world.
  </div>
  <div class="form">
    <v-sheet width="400px" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="title"
          :rules="rules"
          label="Title"
        ></v-text-field>
        <v-select
          :items="items"
          density="compact"
          label="Compact"
        ></v-select>
        <v-btn type="submit" block class="mt-2">Add Event</v-btn>
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

  .text-box{
    text-align: center;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AddVote',

    data: () => ({
      title: '',
      rules: [
        (value: string | null) => {
          if (value) return true;
          return 'You must enter a first name.';
        },
      ],
      items: ['Germany', 'United States']
    }),
  });
</script>
