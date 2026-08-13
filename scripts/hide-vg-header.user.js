// ==UserScript==
// @name         Hide VG header
// @namespace    http://tampermonkey.net/
// @version      2026-08-13
// @description  try to take over the world!
// @author       You
// @match        https://www.vg.no/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("Hello VG console :D");
    const header = document.getElementById("header");
    header.style.display = "none";
})();