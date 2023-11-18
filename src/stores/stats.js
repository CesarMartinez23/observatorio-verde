import { ref, onMounted } from "vue"
import { defineStore } from "pinia"
import apiService from "../services/apiService"


export const useStatsStore = defineStore("stats", () => {

  //get stats
  async function getStatsByFilter(perPage, page, type, material, range, year) {
    return await apiService.getStats(perPage, page, type, material, range, year)
  }

  return {
    getStatsByFilter
  }

})