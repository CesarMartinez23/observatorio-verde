import { ref, onMounted } from "vue"
import { defineStore } from "pinia"
import apiService from "../services/apiService"


export const useProjectsStore = defineStore("projects", () => {

  const projects = ref([])

  onMounted(async () => {

    const data = await apiService.getAllProjects()
    projects.value = data.data
  })

  return {
    projects,
  }

})