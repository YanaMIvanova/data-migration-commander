const { Command } = require("commander");
const { fetchArticles, fetchUsers } = require("./server");

const program = new Command();

program
  .version("0.0.1")
  .option("-c, --articles <count>", "how many articles to retrieve")
  .option("-u, --users", "fetch users");

program.parse(process.argv);

const options = program.opts();

if (options.articles) fetchArticles(options.articles);
if (options.users) fetchUsers(options.users);
