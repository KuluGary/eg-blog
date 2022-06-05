const axios = require("axios");
const dataJson = require("../assets/repos.json");
require("dotenv").config();

const BASE_API = "https://api.github.com/";

module.exports = async function () {
  if (process.env.NODE_ENV === "development") {
    const { defaultData } = dataJson;
    return defaultData
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => {
        const languages = dataJson[repo.full_name];

        return { ...repo, language: Object.keys(languages)[0] };
      });
  }

  const { data } = await axios.get(BASE_API + "users/KuluGary/repos");
  return data
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map(async (repo) => {
      const { data: languages } = axios.get(BASE_API + "repos/KuluGary/" + repo.full_name);

      return { ...repo, language: Object.keys(languages)[0] };
    });
};
