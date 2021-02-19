<template>
  <div>
    <Posts :posts="posts" />
  </div>
</template>

<script>
import Posts from '~/components/Posts'
import postsQuery from '~/apollo/queries/post/posts'

export default {
  components: {
    Posts,
  },
  data() {
    return {
      posts: [],
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
    },
  },
}
</script>

<style></style>
