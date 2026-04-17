import parsed from "./parser";

console.log(parsed);
console.log("TYPE IS");

console.log(typeof parsed);


function getParsedData() {
  return fetch(parsed.toString())
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

const result = getParsedData();
console.log(result);
