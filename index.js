const { Command } = require("commander");
const { fetchUsers, loadUsers } = require("./server");

const program = new Command();

program
  .version("0.0.1")
  .option("-c, --users-count <count>", "the names count to retrieve")
  .option("-l, --load-users", "load users to the database")
  .parse();

program.usersCount ? fetchUsers(program.usersCount) : fetchUsers();
program.loadUsers && loadUsers();
