<template>
  <div class="max-w-6xl mx-auto py-8">
    <h3 class="font-medium text-2xl mb-4">Categories</h3>
    <div class="">
      <nuxt-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'categories-id', params: { id: category.id } }"
        tag="div"
        class="cursor-pointer my-4 border border-gray-800 px-4 py-2"
      >
        <p class="text-xl font-medium my-2">{{ category.name }}</p>
      </nuxt-link>
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
