const fs = require("fs");
// Add Note
function addNote(filePath, value) {
  // Get Data
  let objectData = loadData(filePath);
  // Check Duplication
  let check = true;
  for (let i = 0; i < objectData.length; i++) {
    if (objectData[i].title === value.title) {
      check = false;
      break;
    }
  }
  if (check) {
    // Add It
    objectData.push({
      title: value.title,
      body: value.body,
    });
    const jsonData = JSON.stringify(objectData);

    fs.writeFileSync(filePath, jsonData);
  }
}
function removeNote(filePath, value) {
  // Get Data
  let data = loadData(filePath);
  // Filter It
  const removeArr = data.filter((item) => item.title !== value);
  fs.writeFileSync(filePath, JSON.stringify(removeArr));
  console.log("%c fff", "color:red");
}
function listNotes(filePath) {
  console.log(loadData(filePath));
}
// Get Data
function loadData(filePath) {
  try {
    const bufferData = fs.readFileSync(filePath);
    const objectData = JSON.parse(bufferData.toString());
    return objectData;
  } catch (error) {
    return [];
  }
}
module.exports = { addNote, removeNote, listNotes };
