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
    //const usdRate = 1;
    let exgRate = $("#exchangeTo").val();
    clear();
    let promise = Exchange.getConversion(exgRate);
    promise.then(function(resolvedResponse) {
      const body = JSON.parse(resolvedResponse);
      const canadian = body.conversion_rates.CAD;
      const ruble = body.conversion_rates.RUB;
      const ringgit = body.conversion_rates.MYR;
      const sol = body.conversion_rates.PEN;
      const lira = body.conversion_rates.TRY;
      if (exgRate == "CAD") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is $${parseInt(userAmount * canadian).toFixed()}`);
      } else if (exgRate == "RUB") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is ₽${parseInt(userAmount * ruble).toFixed()}`);
      } else if (exgRate == "MYR") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is RM${parseInt(userAmount * ringgit).toFixed()}`);
      } else if (exgRate == "PEN") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is S/${parseInt(userAmount * sol).toFixed()}`);
      } else if (exgRate == "TRY") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is ₺${parseInt(userAmount * lira).toFixed()}`);
      } else if (exgRate == "none") {
        $(".convertedTotal").text(`$${userAmount} in ${exgRate} is ₺${parseInt(userAmount * lira).toFixed()}`);
      }   
    }, 
    function(rejectedResponse) {
      $(".error").text(`Oh no! Something went wrong. Here's what we're getting: ${rejectedResponse}`);
      console.log("Oh no, an error!");
      console.log(rejectedResponse);
    });
  });
});