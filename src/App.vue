<script setup>
</script>

<template>
  <div class="q-mx-md q-my-md">
    <div class="flex q-gutter-md justify-center">
      <router-link :to="{name: 'search'}">search</router-link>
      <router-link :to="{name: 'trends'}">trends</router-link>
    </div>
    <div class="q-mt-sm">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
