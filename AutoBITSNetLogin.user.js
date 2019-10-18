// ==UserScript==
// @name         AutoBITSNet Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campnet.bits-goa.ac.in:8090/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (localStorage.getItem("ldap_username") === null){
        var username = prompt("Enter photon username");
        localStorage.setItem("ldap_username", username);
    }
    else {
        console.log("username found: " + localStorage.getItem("photon_username"));
    }
    if (localStorage.getItem("ldap_password") === null){
        var password = prompt("Enter photon password");
        localStorage.setItem("ldap_password", password);
    }
    else {
        console.log("password found: " + localStorage.getItem("photon_password"));
    }
    const a_username = localStorage.getItem("ldap_username");
    const a_password = localStorage.getItem("ldap_password");
    document.getElementById("username").value = a_username;
    document.getElementById("password").value = a_password;
    document.getElementById("loginbutton").click();
})();
