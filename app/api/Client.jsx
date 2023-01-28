import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.18.172:19000/api",
});

apiClient.get("/listing").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});

export default apiClient;
