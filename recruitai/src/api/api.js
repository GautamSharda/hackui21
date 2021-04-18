import axios from "axios";

const baseURL = "localhost:8000/"; // Link to api

const client = axios.create({
  baseURL: baseURL,
});

// Get and sort leaders
export const getPlayers = async () => {
  const response = await client.get("/players");
  console.log("players", response);

  return response.data;
};

export const getComparison = async (name) => {
  const response = await client.get("/comparison/"+name)

  return response.data;
}

// Post ??

export default {
  getPlayers,
};
