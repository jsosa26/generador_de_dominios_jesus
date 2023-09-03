/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

var domains = [];

for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var k = 0; k < noun.length; k++) {
      var domain = pronoun[i] + adj[j] + noun[k] + '.com';
      domains.push(domain);
    }
  }
}

console.log(domains);