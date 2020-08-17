<template>
  <div class="container-fluid">
    <Navigation />
    <div class="lg:container lg:mx-auto container-block">
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
              v-model="businessName"
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
              v-model="businessEmail"
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
              v-model="businessPhone"
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
              v-model="businessAddress"
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
              v-model="clientName"
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
              v-model="clientEmail"
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
              v-model="clientPhone"
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
              v-model="clientAddress"
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

      <div id="display">
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
              v-model="description"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="rate"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="qty"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="amount"
            />
          </div>
        </div>
      </div>

      <div class="btn">
        <button
          @click="addItems"
          class="btn-success rounded border pt-2 pb-2 pr-5 pl-5"
        >
          Add item +
        </button>
      </div>

      <div class="flex flex-wrap mt-4 mb-4 text-gray-700">
        <div class="w-2/6 pl-2 pr-2">
          <h1 class="font-bold">Notes</h1>
          <textarea
            class="border rounded border-gray-600 w-full py-2 px-3"
            placeholder="Add a note"
            name=""
            id=""
            cols="5"
            rows="3"
            v-model="note"
          >
          </textarea>
        </div>
        <div class="w-1/6 pl-2 pr-2"></div>
      </div>

      <div class="flex flex-wrap mt-4 mb-4 text-gray-700">
        <div class="w-2/6 pl-2 pr-2">
          <h1 class="font-bold">Terms & Conditions</h1>
          <textarea
            class="border rounded border-gray-600 w-full py-2 px-3"
            placeholder="Terms & Conditions"
            name=""
            id=""
            cols="5"
            rows="3"
            v-model="condition"
          >
          </textarea>
        </div>
        <div class="w-2/6 pl-2 pr-2"></div>
        <div class="w-2/6 pl-2 pr-2">
          <div class="sub text-right font-bold">
            <span class="mr-10">SubTotal</span>
            <span class="">$2000.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-btn-500 text-right pb-4 pt-4">
      <button
        class="bg-white mr-4 text-btn-blue font-semibold py-2 px-8 border border-blue-500 rounded shadow"
        @click="sendInvoice"
      >
        Generate invoice
      </button>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import { fire } from "../firebase";
export default {
  data() {
    return {
      businessName: "",
      businessEmail: "",
      businessPhone: "",
      businessAddress: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientAddress: "",
      description: "",
      rate: "",
      qty: "",
      amount: "",
      condition: "",
      note: ""
    };
  },
  components: {
    Navigation
  },
  methods: {
    addItems() {
      const addNextItem = document.getElementById("display");
      addNextItem.innerHTML += `
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
              v-model="description"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="rate"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="qty"
            />
          </div>
          <div class="w-1/6 pl-2 pr-2">
            <input
              class="border-gray-600 w-full py-2"
              id="B_name"
              type="number"
              placeholder="0.00"
              v-model="amount"
            />
          </div>
        </div>
      `;
    },
    sendInvoice() {
      const createInvoice = {
        businessName: this.businessName,
        businessEmail: this.businessEmail,
        businessPhone: this.businessPhone,
        businessAddress: this.businessAddress,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        clientAddress: this.clientAddress,
        description: this.description,
        rate: this.rate,
        qty: this.qty,
        amount: this.amount,
        condition: this.condition,
        note: this.note
      };
      fire
        .database()
        .ref("messages")
        .push(createInvoice);
      this.businessName = "";
      this.businessEmail = "";
      this.businessPhone = "";
      this.businessAddress = "";
      this.clientName = "";
      this.clientEmail = "";
      this.clientPhone = "";
      this.clientAddress = "";
      this.description = "";
      this.rate = "";
      this.qty = "";
      this.amount = "";
      this.condition = "";
      this.note = "";
      console.log(createInvoice);
    }
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 100vh !important;
}
input {
  box-shadow: none;
  outline: none;
  color: black !important;
}
.bg-blue {
  background-color: #012a7a;
  color: white;
}
.btn-success {
  background-color: green;
}
.bg-btn-500 {
  background-color: #012a7a;
  min-height: 10vh;
}
.text-btn-blue {
  color: #012a7a;
}
</style>
