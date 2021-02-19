<template>
  <div class="mx-auto max-w-6xl py-2 w-full">
    <form @submit.prevent="excuteSearch">
      <input
        v-model="text"
        type="text"
        class="w-full bg-gray-800 py-4"
        placeholder="Enter a something"
      />
      <p class="text-sm opacity-60 mt-2">Press Enter to search</p>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    query: { type: String },
  },
  data() {
    return {
      text: '',
    }
  },

  mounted() {
    this.text = this.query
  },
  methods: {
    excuteSearch(e) {
      if (this.text) {
        this.$router.push({ name: 'search', query: { text: this.text } })
      }
    },
  },
}
</script>
