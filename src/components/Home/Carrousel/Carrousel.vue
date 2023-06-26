
<script setup>
import CarrouselItem from "./CarrouselItem.vue";
import items from "./items.json"
</script>

<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      
      <CarrouselItem
        v-for="item in items"
        :key="item.id"
        :item = "item"
      />

    </div>
  </div>
</template>