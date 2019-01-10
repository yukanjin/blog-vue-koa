<template>
  <div class="article">
    <mavon-editor v-model="content" @save="save" />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'

export default {
  components: {
    mavonEditor
  },
  data () {
    return {
      content: ''
    }
  },
  mounted () {
  },
  methods: {
    save (value, rader) {
      // value values markdown string, rader values html string without style
      this.$store.commit('setArticle', rader)
    }
  }
}
</script>
