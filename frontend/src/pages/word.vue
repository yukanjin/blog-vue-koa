<template>
  <div class="article" style="background: #fff;overflow:hidden">
    <mavon-editor
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      v-model="article" />
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
