window.onload = startup;
function startup() {
  lastUpdated();
	}

//outputs last updated date to inner HTML format
function lastUpdated() {
  document.getElementById("lastUpdatedDate").innerHTML = document.lastModified;
}

//scripts to change backgrond color for article grid item in lab 6
function bkgVi() {
  //alert("yay");
  document.getElementById("chgbkg").style.backgroundColor = "red";
  document.getElementById("chgtxt").style.color = "black";
  //document.getElementsByClassName('item5').innerHTML = "red";
  //document.getElementsById('article').innerHTML = "red";
  //document.body.article.style.background = "red";
  //document.body.style.backgroundColor = "red";
}

function bkgMu() {
  document.getElementById("chgbkg").style.backgroundColor = "#83A1CD";
  document.getElementById("chgtxt").style.color = "black";
}

function bkgInv() {
  document.getElementById("chgbkg").style.backgroundColor = "black";
  document.getElementById("chgtxt").style.color = "white";

  //document.getElementsById("chgtxt").style.color = "white";
}

function bkgReset() {
  document.getElementById("chgbkg").style.backgroundColor = "#6AF2E5";
  document.getElementById("chgtxt").style.color = "black";
}