<template>
  <div class="bg-gray-900 text-gray-100 min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-0">
      <NavBar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar,
  },
}
</script>

<style></style>
