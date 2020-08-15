<template>
  <div class="container-fluid">
    <Navigation />
    <div class="lg:container lg:mx-auto">
      <div class="flex flex-wrap">
        <div class="w-2/6 p-2 text-gray-700">
          <h5 class="text-lg font-bold mb-4">From</h5>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Business name
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="text"
              placeholder="Business name"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Email Address
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Phone Number
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Address
            </label>
            <input
              class="border border-gray-600 rounded-b w-full py-2 px-3"
              id="B_name"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div class="w-2/6 flex-none p-2">
          <div class="text-gray-700 text-center p-2"></div>
        </div>
        <div class="w-2/6 p-2 text-gray-700">
          <h5 class="text-lg font-bold mb-4">Bill To</h5>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Client Name
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="text"
              placeholder="Client Name"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Email Address
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Phone Number
            </label>
            <input
              class="border border-gray-600 w-full py-2 px-3"
              id="B_name"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-2">
            <label class="mb-2" for="address">
              Address
            </label>
            <input
              class="border border-gray-600 rounded-b w-full py-2 px-3"
              id="B_name"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap bg-blue">
        <div class="w-1/6 p-2">
          Add
        </div>
        <div class="w-2/6 p-2">
          Description
        </div>
        <div class="w-1/6 p-2">
          Rate
        </div>
        <div class="w-1/6 p-2">
          QTY
        </div>
        <div class="w-1/6 p-2">
          Amount
        </div>
      </div>
      <div class="flex flex-wrap border-b border-gray-500 border-l border-r">
        <div class="w-1/6 pl-2 pr-2">
          <p>x</p>
        </div>
        <div class="w-2/6 pl-2 pr-2">
          <input
            class="border-gray-600 w-full py-2"
            id="B_name"
            type="text"
            placeholder="Description"
          />
        </div>
        <div class="w-1/6 pl-2 pr-2">
          <input
            class="border-gray-600 w-full py-2"
            id="B_name"
            type="number"
            placeholder="0.00"
          />
        </div>
        <div class="w-1/6 pl-2 pr-2">
          <input
            class="border-gray-600 w-full py-2"
            id="B_name"
            type="number"
            placeholder="0.00"
          />
        </div>
        <div class="w-1/6 pl-2 pr-2">
          <input
            class="border-gray-600 w-full py-2"
            id="B_name"
            type="number"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
input {
  box-shadow: none;
  outline: none;
  color: black !important;
}
.bg-blue {
  background-color: #012a7a;
  color: white;
}
</style>
