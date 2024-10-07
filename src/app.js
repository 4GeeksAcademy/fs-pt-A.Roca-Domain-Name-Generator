/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".org", ".es", ".ar"];

for (let i of pronoun) {
  for (let x of adj) {
    for (let j of noun) {
      for (let k of domain) {
        document.write(`<p>${i}${x}${j}${k}</p><hr>`);
        console.log(`${i}${x}${j}${k}`);
      }
    }
  }
}
