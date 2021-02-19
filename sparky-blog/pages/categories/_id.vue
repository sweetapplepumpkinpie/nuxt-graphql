<template>
  <div>
    <CategoryCoponent :category="category" />
    <div class="max-w-6xl mx-auto">
      <nuxt-link
        v-for="post in category.posts"
        :key="post.slug"
        :to="{ name: 'posts-id', params: { id: post.slug } }"
        tag="div"
        class="cursor-pointer my-4 border border-gray-800 px-4 py-2"
      >
        <p class="text-xl font-medium my-2">{{ post.title }}</p>
        <p class="line-clamp-2 opacity-80">{{ post.content }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import categoryByIdQuery from '~/apollo/queries/category/category'
import CategoryCoponent from '~/components/Category'
export default {
  components: {
    CategoryCoponent,
  },
  data() {
    return {
      category: {},
    }
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryByIdQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
}
</script>

<style></style>
