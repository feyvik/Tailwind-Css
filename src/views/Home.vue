<template>
  <div class="home">
    <Navigation />

    <div>
      <div
        class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ..."
      >
        Test
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>
