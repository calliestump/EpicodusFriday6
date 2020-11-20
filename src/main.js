import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchange from "./currency.js";

function clear() {
  $("#usAmount").val("");
  $("#exchangeTo").val("");
}

$(document).ready(function() {
  $("#exchange").submit(function(event) {
    event.preventDefault();
    const userAmount = $("#usAmount").val();
    const exgRate = $("#exchangeTo").val();
    //Number(exgRate);
    //const exgRate = document.getElementById("exchangeTo");
    //const finalRate = exgRate.value;
    $(".amountVAL").append(userAmount);
    $(".exgVAL").append(exgRate);
    clear();
    let promise = Exchange.getUSD(exgRate);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".convertedTotal").text(`Your conversion for ${exgRate} is ${parseInt(userAmount * body.conversion_rates.CAD).toFixed()} ${exgRate}`);
      //let amount = parseInt($("#usAmount").val())
    });
  });
});