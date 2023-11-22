<script setup>
import { useStatsStore } from "../../stores/stats";
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  material: {
    type: String,
    default: "",
    required: true,
  },
  color: {
    type: String,
    default: "",
    required: true,
  },
  icon: {
    type: String,
    default: "",
    required: true,
  },
});

const stats = useStatsStore();

const totalWeight = ref({});

const fetchData = async () => {
  try {
    totalWeight.value = await stats.getStatsByMaterialType(props.material);
    // console.log(totalWeight.value.data.sumByMaterialType);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData(); // Fetch data on component mount
});

const roundTwoDecimals = (number) => {
  return Math.round(number * 100) / 100;
};

const getSumFromAllYears = computed(() => {
  if (!totalWeight.value?.data?.sumByMaterialType) return 0;

  const yearsKeys = Object.keys(totalWeight.value?.data?.sumByMaterialType);

  if (!yearsKeys.length) return 0;

  return roundTwoDecimals(
    yearsKeys.reduce((acc, year) => {
      return (
        acc +
        (+totalWeight.value?.data?.sumByMaterialType[year]?.interno +
          +totalWeight.value?.data?.sumByMaterialType[year]?.externo)
      );
    }, 0)
  );
});
</script>

<template>
  <div class="card-container">
    <img
      :src="icon"
      style="
        width: 7rem;
        opacity: 0.4;
        filter: alpha(opacity=40);
        aspect-ratio: 1/1;
        object-fit: contain;
      "
    />
    <div>
      <h1
        class="stat"
        :style="{
          color,
        }"
      >
        {{ getSumFromAllYears }} Lb
      </h1>
      <p class="content-description pDetail">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.pDetail {
  color: #000;
}

.stat {
  font-size: 2.5rem;
  text-wrap: nowrap;
}

* {
  box-sizing: border-box;
}

.card-container {
  flex: 1;
  padding: 1.5rem;
  border: 0.1rem solid #ddd;
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
