const fetch = require("node-fetch");
const fs = require("fs");

const baseUrl = "https://www.cep.vd.ch";

const fetchArticles = (articlesCount) => {
  console.log(articlesCount);
  const urlParam = `/cep/api_med.xsp/outil?key=Art&max=${articlesCount}&v=479400`;
  const url = `${baseUrl}${urlParam}`;

  fetch(url)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.log);
};

const fetchUsers = (withToken) => {
  const baseUrl = "https://www.cep-dev.ch/apiv2/user";
  const urlParam = "?apitoken=f5e06c7dbf502cd885ec501579ef3f9094b3";
  const url = withToken ? `${baseUrl}${urlParam}` : baseUrl;

  fetch(url)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.log);
};

module.exports = { fetchArticles, fetchUsers };
