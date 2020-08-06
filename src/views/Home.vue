<template>
  <div class="home">
    <div class="bg-image pt-5">
      <div
        class="rounded overflow-hidden shadow-lg border border-gray-400 card"
      >
        <Navigation />
        <div class="mt-4">
          <form class="container mx-auto px-10">
            <div class="flex flex-wrap mb-4 justify-between">
              <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-2">
                <label class="text-gray-700 text-left"
                  >Who is this invoice from?</label
                >
                <textarea
                  type="text"
                  id="username"
                  class="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                  name=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-2">
                <textarea
                  placeholder="Where is this invoice going to?"
                  type="text"
                  id="username"
                  class="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                  name=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div class="flex mb-4 flex-wrap mb-4 justify-around">
              <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-2">
                <label class="text-gray-700 text-left">Date</label>
                <input
                  type="date"
                  id="username"
                  class="border border-gray-500 rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-2"></div>
              <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>
<style lang="scss" scoped>
.bg-image {
  background: url("../assets/images/invoice-img.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .card {
    width: 80%;
    min-height: 94vh;
    background: rgb(255, 255, 255);
    margin: auto;
  }
}
</style>
