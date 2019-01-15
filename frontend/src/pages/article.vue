<template>
  <div class="article">
    <mavon-editor
      style="overflow:hidden"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      :value="article" />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
export default {
  components: {
    mavonEditor
  },
  computed: {
    article () {
      return this.$store.state.article
    }
  }
}
</script>

<style scoped>
  .article {
    overflow: hidden;
  }
</style>
