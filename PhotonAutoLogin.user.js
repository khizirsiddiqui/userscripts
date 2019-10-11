// ==UserScript==
// @name         Photon AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Khizir Siddiqui
// @match        http://photon.bits-goa.ac.in/lms/login/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (localStorage.getItem("photon_username") === null){
        var username = prompt("Enter photon username");
        localStorage.setItem("photon_username", username);
    }
    else {
        console.log("username found: " + localStorage.getItem("photon_username"));
    }
    if (localStorage.getItem("photon_password") === null){
        var password = prompt("Enter photon password");
        localStorage.setItem("photon_password", password);
    }
    else {
        console.log("password found: " + localStorage.getItem("photon_password"));
    }
    const a_username = localStorage.getItem("photon_username");
    const a_password = localStorage.getItem("photon_password");
    document.getElementById("username").value = a_username;
    document.getElementById("password").value = a_password;
    document.getElementById("loginbtn").click();
})();