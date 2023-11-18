<script setup>
import StatsTable from "../components/Stats/StatsTable.vue";
import StatsGrahics from "../components/Stats/StatsGrahics.vue";
import GeneralStats from "../components/Stats/GeneralStats.vue";
import { ref } from "vue";

// default values for properties (filters in url)
const perPage = 10;
const page = 1;
const selectedType = ref(null);
const selectedMaterial = ref(null);
const selectedRange = ref(null);
const selectedYear = ref(null);
</script>

<template>
  <section class="custom-container">
    <div class="container">
      <GeneralStats />
      <StatsGrahics />
      <StatsTable
        :per-page="perPage"
        :page="page"
        :type="selectedType"
        :material="selectedMaterial"
        :range="selectedRange"
        :year="selectedYear"
      />
    </div>
  </section>
</template>
