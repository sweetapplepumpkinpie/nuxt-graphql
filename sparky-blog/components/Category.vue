<template>
  <div class="max-w-6xl mx-auto py-8">
    <h3 class="border border-gray-600 py-4 px-6 my-2 text-2xl font-medium">
      <span class="text-green-500 mr-4">Category: </span> {{ category.name }}
    </h3>
    <h3 class="text-2xl font-semibold mt-6">Posts</h3>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: Object, default: () => ({}) },
  },
}
</script>
