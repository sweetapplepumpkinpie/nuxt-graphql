<template>
  <div>
    <Categories />
  </div>
</template>

<script>
import Categories from '~/components/Categories'

export default {
  components: {
    Categories,
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style></style>
