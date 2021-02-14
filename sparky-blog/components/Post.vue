<template>
  <div class="max-w-6xl mx-auto py-8">
    <h3 class="my-2 text-2xl font-medium">{{ post.title }}</h3>
    <article
      id="content"
      class="opacity-80 l"
      v-html="$md.render(post.content || '')"
    ></article>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object },
  },
}
</script>
