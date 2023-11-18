import api from "../lib/axios"

export default {
  //endpoint to show all projects
  getAllProjects() {
    return api.get("/projects/")
  },

  //endpoint to get project by ID
  getProjectById(id) {
    return api.get(`/projects/${id}`)
  },

  //endpoint to get all stats
  getStats(perPage, page, type, material, range, year) {
    return api.get(`/stats/?per_page=${perPage}&page=${page}&type__in=${type}&material_type__in=${material}&range__in=${range}&year__icontains=${year}`)
  },
}
