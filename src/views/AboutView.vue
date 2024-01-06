<template>
    <NavBar/>
    <h1>Evoter</h1>
    <div class="content">
        On Evoter you can put events for voting and let the people decide if they also agree with your opinion. Evoter is a project that was initiated with the intention to provide a simplistic web interface for 
        people to vote for events they have visited and to see how popular these events really are. 
        <div class="row">
            <div class="column">
                I am a 21- year old university student who provides this simple web app for people to put up their favourite events, i.e gaming events or parties, for vote and have a world-wide comparison.
            </div>
            <div class="column">
                People always argue that their own favourite event is the best in the world. However, to ensure that the view on an issue is not influenced by subjective instances and therefore this app provides a place to openly display their
                opinion on the given events. The popularity of the <b>E</b>vents is up to the <b>voter</b>s  
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>

<style>
h1{
    text-align: center;
    font-size: 35px;
}
.content{
    text-align: center;
}

.column {
  float: left;
  width: 50%;
  margin-top: 20px;
}

.row:after {
  display: table;
  clear: both;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent ({
    name: 'AboutView',
    components : {
        NavBar,
        FooterComponent
    }
})
</script>