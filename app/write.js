const yargs = require("yargs");
const noteFuncs = require("./test");
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    noteFuncs.addNote("./app/jsonData.json", argv);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler(argv) {
    noteFuncs.removeNote("./app/jsonData.json", argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    noteFuncs.listNotes("./app/jsonData.json");
  },
});

debugger;
// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  },
});

yargs.parse();
