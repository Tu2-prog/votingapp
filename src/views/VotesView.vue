<template>
    <div class="content">
      <div class="counter-container">
        Total Votes: {{ this.overAllVotes }}
      </div>
        <NavBar/>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Number of votes</th>
              <!-- Add more columns as needed -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="element in elements" :key="element._id" :class="getRowColorClass(element)">
              <td>{{ element.title }}</td>
              <td>{{ element.location }}</td>
              <td>{{ element.no_votes }}</td>
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

.counter-container{
  text-align: center;
  font-size: 35px;
}

.red-row {
  background-color: #ffdddd; /* Adjust the color as needed */
}

.yellow-row {
  background-color: #ffffcc; /* Adjust the color as needed */
}

.green-row {
  background-color: #d4edda; /* Adjust the color as needed */
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import storageEndpoint from "../endpoints";
import VotingItems from '@/interfaces';

// Components
import NavBar from '@/components/NavBar.vue';

export default defineComponent ({
    name: 'VotesView',

    data() {
        return {
            elements:[] as VotingItems[],
            overAllVotes: 0,
        };
    },

    components : {
        NavBar
    },

    mounted() {
        axios
            .get(storageEndpoint + '/get')
            .then(response => (this.elements = response.data))
            .then(() => this.calculateOverallVotes())
    },
    methods: {
      calculateOverallVotes() {
      this.overAllVotes = this.elements.reduce((total, element) => {
        return total + element.no_votes;
      }, 0);
    },

    getRowColorClass(element: VotingItems) {
      const percentage = (element.no_votes / this.overAllVotes) * 100;

      switch (true){
        case percentage < 10:
          return 'red-row';
        case percentage >= 10 && percentage <= 50:
          return 'yellow-row';
        case percentage >= 50:
          return 'green-row';
      }
    },
    }
})
</script>