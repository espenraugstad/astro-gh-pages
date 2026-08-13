// ==UserScript==
// @name         Hide VG header
// @namespace    http://tampermonkey.net/
// @version      2026-08-13.1
// @description  try to take over the world!
// @author       You
// @match        https://www.vg.no/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://www.vg.no">the page VG</a>. You can <a href="https://github.com/espenraugstad/astro-gh-pages/raw/refs/heads/main/scripts/hide-vg-header.user.js
// @downloadURL  https://www.vg.no">the page VG</a>. You can <a href="https://github.com/espenraugstad/astro-gh-pages/raw/refs/heads/main/scripts/hide-vg-header.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("Hello VG console :D");
    const header = document.getElementById("header");
    header.style.display = "none";
})();