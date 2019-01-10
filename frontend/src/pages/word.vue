<template>
  <div class="article" style="background: #fff;">
    <div v-html="article"></div>
  </div>
</template>

<script>
export default {
  computed: {
    article () {
      return this.$store.state.article
    }
  }
}
</script>
