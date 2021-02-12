<template>
  <div class="py-8">
    <h3 class="font-medium text-2xl mb-4">Posts</h3>
    <div class="">
      <nuxt-link
        v-for="post in posts"
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
export default {
  props: {
    posts: { type: Array },
  },
}
</script>
