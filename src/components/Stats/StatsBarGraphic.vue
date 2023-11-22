<script setup>
import { useStatsStore } from "../../stores/stats";
import { ref, onMounted, computed, watch } from "vue";
import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxLegend,
  DxExport,
  DxLabel,
  DxTooltip,
  DxValueAxis,
} from "devextreme-vue/chart";

const { material: propMaterial } = defineProps(["material"]);
const stats = useStatsStore();
const statsData = ref({});
const loading = ref(false);

const material = ref(propMaterial || []);

const fetchData = async () => {
  try {
    loading.value = true;
    statsData.value = await stats.getStatsByMaterialType(material.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

//methods to update action click in button filter
const updateMaterial = (value) => {
  material.value = material.value === value ? null : value;
  fetchData();
};

const resetFilter = () => {
  material.value = propMaterial || [];
  fetchData();
};

onMounted(() => {
  fetchData(); // Fetch data on component mount
});

const dataSource = computed(() => {
  return Object.entries(statsData.value.data?.sumByMaterialType || {}).map(
    ([year, data]) => ({
      year: year,
      interno: data.interno,
      externo: data.externo,
    })
  );
});

const customizeTooltip = (pointInfo) => {
  return {
    html: `<div><div class='tooltip-header'>${pointInfo.argumentText}</div><div class='tooltip-body'><div class='series-name'><span class='top-series-name'>${pointInfo.points[0].seriesName}</span>: </div><div class='value-text'><span class='top-series-value'>${pointInfo.points[0].valueText}</span>Lb </div><div class='series-name'><span class='bottom-series-name'>${pointInfo.points[1].seriesName}</span>: </div><div class='value-text'><span class='bottom-series-value'>${pointInfo.points[1].valueText}</span>Lb </div></div></div>`,
  };
};

// console.log(dataSource);
</script>
<template>
  <div class="col-lg-6">
    <div class="card mb-4">
      <div class="card-header">
        <p class="card-title">Reciclaje por tipo de material</p>
      </div>
      <div class="card-body">
        <!--MATERIAL-->
        <button
          class="btn btn-primary"
          @click="resetFilter()"
          style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
        >
          Todos
        </button>
        <button
          class="btn btn-primary"
          :class="{ active: material === '1' }"
          @click="updateMaterial('1')"
        >
          Lata
        </button>

        <button
          class="btn btn-primary"
          :class="{ active: material === '2' }"
          @click="updateMaterial('2')"
        >
          Botella
        </button>

        <button
          class="btn btn-primary"
          :class="{ active: material === '3' }"
          @click="updateMaterial('3')"
        >
          Papel
        </button>

        <button
          class="btn btn-primary"
          :class="{ active: material === '4' }"
          @click="updateMaterial('4')"
        >
          Hierro
        </button>

        <button
          class="btn btn-primary"
          :class="{ active: material === '5' }"
          @click="updateMaterial('5')"
          style="
            border-right: solid 1px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          "
        >
          Cartón
        </button>
        <DxChart id="chart" :data-source="dataSource" palette="Soft" title="">
          <DxCommonSeriesSettings
            :ignore-empty-points="true"
            argument-field="year"
            type="bar"
          />
          <DxSeries value-field="interno" name="Interno" color="#0CA554" />
          <DxSeries value-field="externo" name="Externo" color="#0D6EFD" />
          <DxArgumentAxis>
            <DxLabel overlapping-behavior="stagger" />
          </DxArgumentAxis>
          <DxTooltip
            :enabled="true"
            :shared="true"
            :customize-tooltip="customizeTooltip"
          />

          <DxLegend vertical-alignment="bottom" horizontal-alignment="center" />
          <DxExport :enabled="true" />
        </DxChart>
      </div>
    </div>
  </div>
</template>
