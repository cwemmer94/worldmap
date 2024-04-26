var app = angular.module("myApp", []);
app.controller('Request Data', function ($scope, $http) {
$scope.loadDoc = function () {
    

var xhr = new XMLHttpRequest();
function loadDoc(country) {
    
    xhr.onload = function() {
    let obj = JSON.parse(this.responseText);
    let income = `Income Level: ${obj[1][0].incomeLevel.value}`;
    let regionName = `Region Name: ${obj[1][0].region.value}`;
    let capitalCity = `Capital City: ${obj[1][0].capitalCity}`;
    let countryName = `Country Name: ${obj[1][0].name}`;
    let regionId = `Region ID: ${obj[1][0].region.id}`;
    let countryCode = `Country Code: ${obj[1][0].iso2Code}`;
    let theString = `Country Name: ${countryName}, Income Level: ${income}`;
    console.log(theString);
    document.getElementById("countryName").innerHTML = countryName;
    document.getElementById("income").innerHTML = income;
    document.getElementById("capitalCity").innerHTML = capitalCity;
    document.getElementById("regionName").innerHTML = regionName;
    document.getElementById("regionId").innerHTML = regionId;
    document.getElementById("countryCode").innerHTML = countryCode;
    }
    xhr.open("GET", `https://api.worldbank.org/v2/country/${country}/?format=json`);
    xhr.send();
    }
}});