<script setup>
import CardByMaterial from "./CardByMaterial.vue";
</script>

<template>
  <div class="row">
    <CardByMaterial
      title="Lata"
      material="1"
      color="#0ca554"
      icon="img/stats/can.png"
    />

    <CardByMaterial
      title="Botella"
      material="2"
      color="#337ab7"
      icon="img/stats/bottle.png"
    />

    <CardByMaterial
      title="Papel"
      material="3"
      color="#ffc107"
      icon="img/stats/paper.png"
    />

    <CardByMaterial
      title="Hierro"
      material="4"
      color="#dc3545"
      icon="img/stats/beam.png"
    />

    <CardByMaterial
      title="Cartón"
      material="5"
      color="#0d6efd"
      icon="img/stats/open-box.png"
    />
  </div>
</template>

<style scoped>
.row {
  margin: 0 0 2rem 0;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
}

/* .row::after {
  content: "";
  clear: both;
  display: table;
} */
</style>
