<template>
  <div class="py-8">
    <h3 class="font-medium text-2xl mb-4">Categories</h3>
    <div class="flex flex-wrap">
      <p
        v-for="category in categories"
        :key="category.name"
        class="mx-2 border border-gray-800 px-2 py-1"
      >
        {{ category.name }}
      </p>
    </div>
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
}
</script>
