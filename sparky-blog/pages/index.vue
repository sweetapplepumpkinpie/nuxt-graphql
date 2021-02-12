<template>
  <div>
    <Search />
    <Categories />
    <Posts :posts="posts" />
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'

import Categories from '~/components/Categories'
import Posts from '~/components/Posts'
import Search from '~/components/Search'
export default {
  components: {
    Search,
    Categories,
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
