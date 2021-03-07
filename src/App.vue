<template>
    <router-view/>
</template>

<script>
  import {ref, provide} from 'vue'

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth
      const asideVisible = ref(width >= 500)
      provide('xxx', asideVisible)
    }
  }
</script>
