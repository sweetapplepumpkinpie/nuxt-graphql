<template>
  <div>
    <PostComponent v-if="post" :post="post" />
  </div>
</template>

<script>
import postByIdQuery from '~/apollo/queries/post/post'
import PostComponent from '~/components/Post'
export default {
  components: {
    PostComponent,
  },
  data() {
    return {
      post: {},
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: postByIdQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
}
</script>

<style></style>
