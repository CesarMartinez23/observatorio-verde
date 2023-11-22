<script setup>
import { ref, onMounted, computed } from "vue";
import { useStatsStore } from "../../stores/stats";
import DxPieChart, {
  DxSmallValuesGrouping,
  DxLegend,
  DxSeries,
  DxFormat,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";

const customizeLabel = (pointInfo) => {
  return `${pointInfo.argumentText}: ${pointInfo.valueText} Lb`;
};

const statsStore = useStatsStore();
const totals = ref({});
const period = ref("");

const fetchByPeriod = async () => {
  try {
    const response = await statsStore.getTotalsByPeriod(period.value);
    totals.value = response.data.sum_by_year_and_range;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchByPeriod();
});

const dataSource = computed(() => {
  return Object.entries(totals.value || {}).map(([year, data]) => ({
    year: year,
    total_weight: data.total_weight,
  }));
});

const updatePeriod = (value) => {
  period.value = value;
  fetchByPeriod();
};

const buttonText = computed(() => {
  switch (period.value) {
    case "1":
      return "Enero-Junio";
    case "2":
      return "Julio-Diciembre";
    default:
      return "Todos";
  }
});
</script>

<template>
  <div class="col-lg-6">
    <div class="card mb-4">
      <div class="card-header">
        <p class="card-title">Reciclaje por período</p>
      </div>
      <div class="card-body">
        <!--RANGO-->
        <button
          class="btn btn-primary"
          style="
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          "
          @click="updatePeriod('')"
        >
          Todos
        </button>

        <button
          class="btn btn-primary"
          style="
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          "
          @click="updatePeriod('1')"
          :class="{ active: period === '1' }"
        >
          Enero-Junio
        </button>

        <button
          class="btn btn-primary"
          style="
            border-right: solid 1px;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          "
          @click="updatePeriod('2')"
          :class="{ active: period === '2' }"
        >
          Julio-Diciembre
        </button>

        <DxPieChart
          id="pie"
          :data-source="dataSource"
          type="doughnut"
          :title="buttonText"
          palette="Soft Pastel"
        >
          <DxSeries argument-field="year" value-field="total_weight">
            <DxLabel
              :visible="true"
              :customize-text="customizeLabel"
              format="fixedPoint"
            >
              <DxConnector :visible="true" :width="3" />
            </DxLabel>
          </DxSeries>
          <DxExport :enabled="true" />
          <DxLegend horizontal-alignment="center" vertical-alignment="bottom" />
        </DxPieChart>
      </div>
    </div>
  </div>
</template>
