<template>
  <div class="content">
    <NavBar/>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Location</th>
          <th>Vote</th>
          <!-- Add more columns as needed -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="element in elements" :key="element._id">
          <td>{{ element.title }}</td>
          <td>{{ element.location }}</td>
          <td> 
            <v-btn elevated color="#d44d4d" class="delete-btn" @click="deleteItem(element._id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.content{
  flex: 1;
    /* Add additional styling for your content */
  overflow-y: auto; /* Enables vertical scrolling if content exceeds viewport height */
  padding: 20px; /* Adjust as needed */
}

.delete-btn{
  margin-left: 10px;
}

@media only screen and (max-width: 405px) and (min-width: 375px) {
  .delete-btn{
    margin-left: 0px;
    margin-top: 10px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import storageEndpoint from "../endpoints";
import VotingItems from '@/interfaces';
// Components
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'AdminView',

  data() {
    return {
      elements: [] as VotingItems[],
    };
  },

  components: {
    NavBar,
  },

  mounted(){
    axios
      .get(storageEndpoint + "/get")
      .then(response => (this.elements = response.data))
  },

  methods: {
    deleteItem(elementId: number){
      axios.delete(storageEndpoint + "/delete/" + elementId);
      location.reload();
    },
  }
});
</script>
