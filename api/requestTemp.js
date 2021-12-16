const axios = require("axios");

const key = "9c0d742d628a3ead3ec77645d6e1fa85";
const local = "Rio de Janeiro";

export default async function get() {
  const { data } = await axios.get(
    `http://api.weatherstack.com/current?access_key=${key}&query=${local}`
  );
  return data;
}
