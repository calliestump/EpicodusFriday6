import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchange from "./currency.js";
$(".conversionResult").hide();
function clear() {
  $("#usAmount").val("");
  $("#exchangeTo").val("");
}

$(document).ready(function() {
  $("#exchange").submit(function(event) {
    event.preventDefault();
    $(".conversionResult").show();
    let userAmount = $("#usAmount").val();
    let exgRate = $("#exchangeTo").val();
    clear();
    let promise = Exchange.getConversion(exgRate);
    promise.then(function(resolvedResponse) {
      const body = JSON.parse(resolvedResponse);
      if (exgRate == "CAD") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is $${parseInt(userAmount * body.conversion_rates.CAD).toFixed(2)}`);
      } else if (exgRate == "RUB") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is ₽${parseInt(userAmount * body.conversion_rates.RUB).toFixed(2)}`);
      } else if (exgRate == "MYR") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is RM/${parseInt(userAmount * body.conversion_rates.MYR).toFixed(2)}`);
      } else if (exgRate == "PEN") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is S/${parseInt(userAmount * body.conversion_rates.PEN).toFixed(2)}`);
      } else if (exgRate == "TRY") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is ₺${parseInt(userAmount * body.conversion_rates.TRY).toFixed(2)}`);
      } else if (exgRate == "none") {
        $(".convertedTotal").text("Please select a valid conversion.");
      }     
    }, 
    function(rejectedResponse) {
      $(".error").text(`Oh no! Something went wrong. Here's what we're getting: ${rejectedResponse}`);
      console.log("Oh no, an error!");
      console.log(rejectedResponse);
    });
  });
});