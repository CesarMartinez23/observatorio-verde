import api from "../lib/axios"

export default {
  getAllProjects() {
    return api.get("/projects/")
  },
}