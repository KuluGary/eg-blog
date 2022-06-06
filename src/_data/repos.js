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

  const data = await axios
    .get(BASE_API + "users/KuluGary/repos")
    .then((res) => {
      const { data } = res;

      return data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 3)
        .map(async (repo) => {
          const url = BASE_API + "repos/" + repo.full_name + "/languages";
          const languages = await axios.get(url);

          if (Object.keys(languages).length > 0) return { ...repo, language: Object.keys(languages)[0] };

          return { ...repo, language: "" };
        });
    })
    .catch((err) => {
      getDefaultData();
    });

  return data;
};
