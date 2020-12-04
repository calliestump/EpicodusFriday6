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
      if (exgRate == "AED") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.AED).toFixed(2)} United Arab Emirates Dirham`);
      } else if (exgRate == "ARS") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.ARS).toFixed(2)} Argentine Peso`);
      } else if (exgRate == "AUD") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.AUD).toFixed(2)} Australian Dollar`);
      } else if (exgRate == "BGN") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.BGN).toFixed(2)} Bulgarian Lev`);
      } else if (exgRate == "BRL") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.BRL).toFixed(2)} Brazilian Real`);
      } else if (exgRate == "BSD") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.BSD).toFixed(2)} Bahamian Dollar`);
      } else if (exgRate == "CAD") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.CAD).toFixed(2)} Canadian Dollar`);
      } else if (exgRate == "CHF") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.CHF).toFixed(2)} Swiss Franc`);    
      } else if (exgRate == "CLP") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.CLP).toFixed(2)} Chilean Peso`);    
      } else if (exgRate == "CNY") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.CNY).toFixed(2)} Chinese Yuan`);    
      } else if (exgRate == "COP") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.COP).toFixed(2)} Colombian Peso`);    
      } else if (exgRate == "CZK") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.CZK).toFixed(2)} Czech Koruna`);    
      } else if (exgRate == "RUB") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.RUB).toFixed(2)} Russian Ruble`);
      } else if (exgRate == "MYR") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.MYR).toFixed(2)} Malaysian Ringgit`);
      } else if (exgRate == "PEN") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.PEN).toFixed(2)} Peruvian Sol`);
      } else if (exgRate == "TRY") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.TRY).toFixed(2)} Turkish Lira`);
      } else if (exgRate == "NOK") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.NOK).toFixed(2)} Norwegian Krone`);
      } else if (exgRate == "SAR") {
        $(".convertedTotal").text(`${userAmount} United States Dollar = ${parseInt(userAmount * body.conversion_rates.SAR).toFixed(2)} Saudi Riyal`);    
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
  $("#usAmount, #exchangeTo").click(function() {
    $(".conversionResult").hide();
  });
});