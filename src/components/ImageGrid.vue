<script setup>

const props = defineProps({
  images: Array
})


</script>


<template>

  <div class="flex q-gutter-md">
    <q-card v-for="image in images" :key="image.id">
      <q-card-section>
        <q-img :src="image.url" :height="image.height" :width="image.width"/>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-center">
          <strong>{{ image.title }}</strong>
        </div>
      </q-card-section>
    </q-card>
  </div>

</template>
