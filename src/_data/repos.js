const axios = require("axios");
const dataJson = require("../assets/repos.json");
require("dotenv").config();

const BASE_API = "https://api.github.com/";

function getDefaultData() {
  const { defaultData } = dataJson;

  return defaultData
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map((repo) => {
      const languages = dataJson[repo.full_name];

      return { ...repo, language: Object.keys(languages)[0] };
    });
}

module.exports = async function () {
  if (process.env.NODE_ENV === "development") {
    return getDefaultData();
  }

  const response = await axios
    .get(BASE_API + "users/KuluGary/repos", {
      auth: {
        username: process.env.GITHUB_ID,
        password: process.env.GITHUB_SECRET,
      },
    })
    .catch((err) => console.error(err));

  if (response.data) return response.data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);

  return getDefaultData();
};
