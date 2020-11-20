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
  $("form#exchange").submit(function(event) {
    event.preventDefault();
    const userAmount = $("#usAmount").val();
    const exgRate = $("#exchangeTo").val();
    clear();

    $(".amountVAL").append(userAmount);
    $(".exgVAL").append(exgRate);

    let promise = Exchange.getUSD(exgRate);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".convertedTotal").text(`${exgRate} is ${body.conversion_rates.exgRate}`);
      //let amount = parseInt($("#usAmount").val())
    });

  });
});