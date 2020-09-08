const fetch = require("node-fetch");
const fs = require("fs");

const baseURL = "http://localhost:6000/usernames";

const fetchUsers = (usersCount) => {
  const urlParam = usersCount ? `/${usersCount}` : "";
  const URL = `${baseURL}${urlParam}`;

  fetch(URL)
    .then((res) => res.json())
    .catch(console.log);
};

const loadUsers = () => {
  fs.readFile("users.json", (err, data) => {
    if (err) throw err;

    const users = JSON.parse(data);
    const otherParams = {
      body: JSON.stringify(users),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(baseURL, otherParams)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      })
      .catch(console.log);
  });
};

module.exports = { fetchUsers, loadUsers };
