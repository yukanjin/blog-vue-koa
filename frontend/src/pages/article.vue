<template>
  <div class="article">
    {{article}}
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
export default {
  data() {
    return {}
  },
  computed: {
    article () {
      return this.$store.state.article;
    }
  }
}
</script>
