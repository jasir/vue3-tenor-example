<script setup>
import { computed, onMounted } from 'vue'
import { watchDebounced, useStorage } from '@vueuse/core'
import { useStore } from 'vuex'
import ImageGrid from '../components/ImageGrid.vue'
import { APIKEY } from '../config.js'

const store = useStore()

/// data

const editedSearch = useStorage('my-key', '', undefined, { mergeDefaults: true })

/// methods

const fetchData = async (editedSearch) => {
  const url = `https://g.tenor.com/v1/search?key=${APIKEY}&q=${editedSearch.value}`
  store.dispatch('search/fetchData', url)
}

/// computed

const images = computed(() => store.state.search.images)

/// hooks

onMounted(async () => {
  await fetchData(editedSearch)
})

/// uses

watchDebounced(editedSearch, async () => {
  await fetchData(editedSearch)
}, { debounce: 300 })


</script>


<template>
  <div>
    <div class="text-h4">Search...</div>

    <q-input filled dense placeholder="search pictures..." v-model="editedSearch"></q-input>

    <q-separator class="q-my-sm" horizontal></q-separator>

    <image-grid :images="images"></image-grid>
  </div>
</template>
