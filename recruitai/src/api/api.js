import axios from "axios";

const baseURL = "https://recruitai.herokuapp.com/api/"; // Link to api

const client = axios.create({
  baseURL: baseURL,
});

// Get and sort leaders
export const getPlayers = async () => {
  const response = await client.get("/players");
  console.log("players", response);

  return response.data.leaders;
};

// Post ??
export const putplayer = async (raw_submission, resultCallback) => {
  client
    .put("/players", raw_submission)
    .then((response) => {
      console.log("Submission response", response);
      resultCallback(true);
    })
    .catch((error) => {
      console.log("error", error);
      resultCallback(false);
    });
};

export default {
  getPlayers,
};
