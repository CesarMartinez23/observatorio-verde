<script setup>
import { ref, onMounted, defineProps, computed, watch } from "vue";
import { useStatsStore } from "../../stores/stats";

const {
  perPage: propPerPage,
  page: propPage,
  type: propType,
  material: propMaterial,
  range: propRange,
  year: propYear,
} = defineProps(["perPage", "page", "type", "material", "range", "year"]);

const stats = useStatsStore();
const statsData = ref({});
const loading = ref(false);

// initialize local
const perPage = ref(propPerPage || 10);
const page = ref(propPage || 1);
const type = ref(propType || []);
const material = ref(propMaterial || []);
const range = ref(propRange || []);
const year = ref(propYear || []);

const fetchData = async () => {
  try {
    loading.value = true;
    statsData.value = await stats.getStatsByFilter(
      perPage.value,
      page.value,
      type.value,
      material.value,
      range.value,
      year.value
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};
const resetFilters = () => {
  perPage.value = propPerPage || 10;
  page.value = propPage || 1;
  type.value = propType || [];
  material.value = propMaterial || [];
  range.value = propRange || [];
  year.value = propYear || [];
  fetchData();
};

//methods to update action click in button filter
const updateMaterial = (value) => {
  material.value = material.value === value ? null : value;
};
const updateRange = (value) => {
  range.value = range.value === value ? null : value;
};
const updateType = (value) => {
  type.value = type.value === value ? null : value;
};

const updateYear = (value) => {
  year.value = year.value === value ? null : value;
};

//to change page
const changePage = async (url) => {
  try {
    if (url) {
      await fetchData(url);
      updatePageFromUrl(url);
    }
  } catch (error) {
    console.error("Error changing page:", error);
  }
};

const changePageNumber = (pageNumber) => {
  page.value = pageNumber;
  fetchData();
};

const updatePageFromUrl = (url) => {
  const match = url.match(/page=(\d+)/);
  if (match) {
    page.value = parseInt(match[1], 10);
  }
};

const totalPages = computed(() => {
  const data = statsData.value["data"];
  return data ? Math.ceil((data.count || 0) / perPage.value) : 0;
});

watch(statsData, (newValue) => {
  const data = newValue["data"];
  totalPages.value = data ? Math.ceil((data.count || 0) / perPage.value) : 0;
});
watch([type, material, range, year], () => {
  fetchData();
});

// Generate an array of page numbers for the paginator
const pageButtons = computed(() => {
  const buttons = [];
  for (let i = 1; i <= totalPages.value; i++) {
    buttons.push(i);
  }
  return buttons;
});

onMounted(() => {
  fetchData(); // Fetch data on component mount
});
</script>

<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h1 class="card-title">Estadísticas de Reciclaje</h1>
          <br />
        </div>
        <div
          class="btn-toolbar d-none d-md-block"
          role="toolbar"
          aria-label="Toolbar with buttons"
        >
          <!--button @click="fetchData">Aplicar Filtro</button-->
          <button @click="resetFilters" class="btnClear">Borrar Filtros</button>
          <label>
            <select v-model="perPage">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>
        </div>
      </div>

      <div class="right-aligned-content"></div>

      <!--Start filters-->
      <div class="row" style="margin-left: 1rem;">
        <div class="col-lg-3">
          <!--MATERIAL-->
          <p class="filter-title">Material</p>
          <button
            class="btn btn-primary"
            :class="{ active: material === '1' }"
            @click="updateMaterial('1')"
            style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
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
        </div>
        <div class="col-lg-3">
          <!--RANGO-->
          <p class="filter-title">Período</p>
          <button
            class="btn btn-primary"
            :class="{ active: range === '1' }"
            @click="updateRange('1')"
            style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
          >
            Enero-Junio
          </button>

          <button
            class="btn btn-primary"
            :class="{ active: range === '2' }"
            @click="updateRange('2')"
            style="
              border-right: solid 1px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            "
          >
            Julio-Diciembre
          </button>
        </div>
        <div class="col-lg-3">
          <!--TIPO-->
          <p class="filter-title">Tipo de recolección</p>
          <button
            class="btn btn-primary"
            :class="{ active: type === '1' }"
            @click="updateType('1')"
            style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
          >
            Interno
          </button>

          <button
            class="btn btn-primary"
            :class="{ active: type === '2' }"
            @click="updateType('2')"
            style="
              border-right: solid 1px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            "
          >
            Externo
          </button>
        </div>
        <div class="col-lg-2">
          <!--YEAR-->
          <p class="filter-title">Año</p>
          <button
            class="btn btn-primary"
            :class="{ active: year === '2021' }"
            @click="updateYear('2021')"
            style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
          >
            2021
          </button>
          <button
            class="btn btn-primary"
            :class="{ active: year === '2022' }"
            @click="updateYear('2022')"
          >
            2022
          </button>
          <button
            class="btn btn-primary"
            :class="{ active: year === '2023' }"
            @click="updateYear('2023')"
            style="
              border-right: solid 1px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            "
          >
            2023
          </button>
        </div>
      </div>
      <!--end filters-->
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!--start table-->
      <table class="table flex-wrap">
        <thead>
          <th>Tipo de material</th>
          <th>Rango</th>
          <th>Tipo</th>
          <th>Peso</th>
          <th>Año</th>
        </thead>
        <tbody>
          <tr v-for="stat in statsData['data']?.results" :key="stat.id">
            <td>{{ stat.material_type.name }}</td>
            <td>{{ stat.range.description }}</td>
            <td>{{ stat.type.name }}</td>
            <td>{{ stat.weight }} Lb.</td>
            <td>{{ stat.year }}</td>
          </tr>
        </tbody>
      </table>
      <!--end table-->
    </div>
    <div class="card-footer">
      <!-- Paginator -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center flex-wrap">
          <li
            class="page-item"
            :class="{ disabled: !statsData['data']?.previous }"
          >
            <a
              class="page-link"
              @click.prevent="changePage(statsData['data']?.previous)"
              >Anterior</a
            >
          </li>
          <li
            v-for="pageNumber in pageButtons"
            :key="pageNumber"
            class="page-item"
            :class="{ active: pageNumber === page }"
          >
            <a
              class="page-link"
              @click.prevent="changePageNumber(pageNumber)"
              >{{ pageNumber }}</a
            >
          </li>

          <li class="page-item" :class="{ disabled: !statsData['data']?.next }">
            <a
              class="page-link"
              @click.prevent="changePage(statsData['data']?.next)"
              >Siguiente</a
            >
          </li>
        </ul>
      </nav>
      <!--end paginator-->
    </div>
  </div>
</template>

<style>
.pagination > li > a {
  background-color: white;
  color: #000;
  cursor: pointer;
  font-family: var(--font);
  font-size: var(--paragraph);
}

.pagination > li > a:focus,
.pagination > li > a:hover,
.pagination > li > span:focus,
.pagination > li > span:hover {
  color: #0ca554;
  background-color: #eee;
  border-color: #ddd;
  cursor: pointer;
}

.pagination > .active > a {
  color: white;
  background-color: #0ca554;
  border: solid 1px #0ca554;
}

.pagination > .active > a:hover {
  background-color: #0ca554;
  border: solid 1px #0ca554;
  color: #fff;
  cursor: pointer;
}

.form-check-input:checked {
  background-color: #0ca554;
  border-color: #0ca554;
}
table {
  margin-top: 3rem;
}
table > thead {
  background-color: #0ca554;
  color: #fff;
}

.btn.active {
  background-color: #888888;
  color: #fff;
  border-color: #888888;
}
.btn {
  background-color: #fff;
  border-color: #b1b7c1;
  color: #b1b7c1;
  border-radius: none;
  font-family: var(--font);
  font-size: 1.2rem;
  border-radius: 0;
  border-right: none;
}
.btn:hover,
.btn:checked {
  background-color: #666;
  color: #fff;
  border-color: #666;
}
.filter-title {
  text-align: left;
}
select {
  font-size: var(--paragraph);
}
option:checked,
option:hover {
  background-color: #0ca554;
  color: #fff;
}
.btnClear {
  margin-right: 10px;
}
.card-title {
  font-family: var(--font);
  font-size: var(--text);
  text-align: left;
}
.col-lg-3 {
  text-align: left;
}
.col-lg-2 {
  text-align: left;
}
</style>
