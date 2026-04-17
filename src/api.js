"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = __importDefault(require("./parser"));
console.log(parser_1.default);
console.log("TYPE IS");
console.log(typeof parser_1.default);
function getParsedData() {
    return fetch(parser_1.default.toString())
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        return data;
    });
}
const result = getParsedData();
console.log(result);
