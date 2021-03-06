<template>
    <div>导航栏</div>
    <router-link to='/'>1</router-link>
    |
    <router-link to='/xx'>2</router-link>
    <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
