<template>
  <form v-on:submit.prevent="doSearch()">
      <input type="text" v-model="query" placeholder="Search" />
  </form>
</template>

<script>
export default {
  name: "search",
  props: ['images'],
  data() {
      return {
          query: ""
      }
  },
  methods: {
      doSearch() {
          let apiKey = "<your API key here>";
          this.axios.get("https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + this.query + "&limit=25&offset=0&rating=G&lang=en").then((response) => {
            console.log(response.data);

            this.$emit('update:images', response.data.data.map(image => image.images.downsized_medium.url));
        });
      }
  }
}
</script>

<style>

</style>
