/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "puedes"];
  let ext = [".com", ".net", ".us", ".io"];

  pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
      noun.forEach(sustantivo => {
        console.log(
          `${sustantivo == "puedes" ? `${pronombre}${adjetivo}pued.es` : ""}`
        );
        ext.forEach(extension => {
          console.log(`
        ${
          sustantivo == "puedes" &&
          (extension == ".com" ||
            extension == ".net" ||
            extension == ".us" ||
            extension == ".io")
            ? ""
            : `${pronombre}${adjetivo}${sustantivo}${extension}`
        }
        `);
        });
      });
    });
  });
};
