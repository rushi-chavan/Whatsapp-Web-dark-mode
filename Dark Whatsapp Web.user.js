// ==UserScript==
// @name         Whatsapp Web dark mode
// @namespace    https://www.twitter.com/Rushi__chavan
// @version      0.1
// @author       Rushikesh Chavan
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    //console.log(mutation);
      //main theme changer
      if(document.body.className != 'web dark') {
          document.body.className = 'web dark';
          //console.log("main theme changed");
      }
      //loading page color changer
      if (document.querySelector('#startup') != null) {
          if(document.querySelector('#startup').style.backgroundColor != "var(--background-default)") {
              document.querySelector('#startup').style.backgroundColor = "var(--background-default)";
              //console.log("Loading page background color changed");
          }
      }
      //login page color changer
      if (document.querySelector('.landing-window') != null) {
          //login modal color changer
          if(document.querySelector('.landing-window').style.backgroundColor != "var(--background-default-active)") {
              document.querySelector('.landing-window').style.backgroundColor = "var(--background-default-active)";
              //console.log("Login modal background color changed");
          }
          //QR code background changer
          if(document.querySelector('._1QMFu').style.padding != "10px") {
              document.querySelector('._1QMFu').style.backgroundColor = "white";
              //console.log("QR code background color changed");
              document.querySelector('._1QMFu').style.padding = "10px";
              //console.log("QR code padding changed");
          }
          //login window heading changer
          if(document.querySelector('.landing-title').style.color != "white") {
              document.querySelector('.landing-title').style.color = "white";
              //console.log("Login header text color changed");
          }
      }
  });
});
mutationObserver.observe(document.body, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
