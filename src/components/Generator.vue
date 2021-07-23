<!--  // @ts-nocheck-->
<template>
  <label for="api-input">Clubhouse API Key</label>
  <input v-model="apiKey" id="api-input" type="text" >
  <br>
  <br>
  <label for="weeks-input">Stories from how many weeks ago</label>
  <input v-model="weeks" id="weeks-input" type="number" >
  <br>
  <br>
  <label for="emojis">Random Emojis</label>
  <input v-model="showEmojis" id="emojis" type="checkbox">
  <br>
  <br>
  <button @click="listProjects">Get Teams</button>
  <br>
  <br>
  <div v-if="projects">
    Generate report for:
    <button v-for="project in projects" @click="getStories(project.id)">
      {{project.name}}
    </button>
  </div>
  <br>
  <br>
  <h3 v-if="showWait">Please wait...</h3>
  <div v-if="stories">
    <div v-for="categories in stories">
      {{getEmoji()}} {{categories.name}} {{getEmoji()}}
      <ul>
        <li v-for="story in categories.stories">
          {{story.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import {getProjects, getStories} from "../fetchData";
export default defineComponent({
  name: 'Generator',
  props: {
  },
  data() {
    return {
      apiKey: '',
      weeks: 2,
      projects: null,
      stories: null,
      showEmojis: false,
      showWait: false,
    }
  },
  methods: {
    async listProjects() {
      this.showWait = true
      this.projects = await getProjects(this.apiKey);
      this.showWait = false
    },
    async getStories(projectId) {
      this.showWait = true
      this.stories = await getStories(this.apiKey, projectId, this.weeks)
      this.showWait = false
    },
    getEmoji() {
      if (!this.showEmojis) return
      const emotes = ['👨‍💻','👩‍💻','🧑‍💻',' 🛠','🔧','🚀','🦉']
      return emotes[Math.floor(Math.random() * emotes.length)];
    }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
