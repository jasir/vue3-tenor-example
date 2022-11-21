<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ImageGrid from '../components/ImageGrid.vue'
import { APIKEY } from '../config.js'

const store = useStore()

/// methods

const fetchData = async () => {
  const url = `https://g.tenor.com/v1/trending?key=${APIKEY}&q=trendy`
  store.dispatch('trends/fetchData', url)
}

/// computed

const images = computed(() => store.state.trends.images)

/// hooks

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <div>
    <div class="text-h4">Trends...</div>

    <q-separator class="q-my-sm" horizontal></q-separator>

    <image-grid :images="images"></image-grid>
  </div>
</template>
