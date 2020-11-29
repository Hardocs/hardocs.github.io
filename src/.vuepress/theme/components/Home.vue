<template>
  <main class="home min-h-screen" aria-labelledby="main-title">
    <div class="header m-auto text-center py-4">
      <img class="m-auto py-4" :src="$withBase('/hardocs-banner.png')" alt="big_logo" />
      <h1 class="text-4xl w-4/5 m-auto font-bold">{{title}}</h1>
      <p class="py-12">{{subtitle}}</p>
    </div>
    <!-- <Content class="theme-default-content custom"/> -->
    <!-- <p>{{items}}</p> -->
    <div
      class="grid md:grid-flow-col grid-flow-row md:grid-cols-2 grid-rows-2 gap-3 py-4"
    >
      <div v-for="i in items" class="">
        <!-- <div class="text-center"v-if="i.level == 1">
        <h1>{{i.title}}</h1>
        <h3>{{i.description}}</h3>
      </div>-->
        <div
          style="cursor: pointer; background-color: white"
          class="p-4 h-full border-primary rounded-lg w-full shadow-lg bg-white p-6 rounded-lg duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          v-if="i.level == 2 && i.title"
        >
          <router-link :to="i.relativePath">
            <h2 class="border-0">{{ i.title }}</h2>
            <p style="color:#121212;" class="">{{ i.description }}</p>
          </router-link>
        </div>
        <div v-else></div>
      </div>
    </div>
  </main>
</template>

<script>
import jsonContents from "../../contents.data.json";

export default {
  // components: { NavLink },
  data() {
    return {
      items: jsonContents.contents,
      title: "Enabling friendly documentation workflow \n for non code projects",
      subtitle: "Local first desktop app to edit metadata easily, create, store and organize documents locally and on the cloud"
    };
  },
  computed: {
    // data () {
    //   return  jsonContents.content;
    // },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>
<style scoped>
h1,h2,h3,h4{
  font-weight: 300 !important;
  text-decoration: none !important;
  border:none !important;
}

</style>


