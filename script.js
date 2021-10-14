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
  //document.getElementsByClassName('item5').innerHTML = "red";
  //document.getElementsById('article').innerHTML = "red";
  //document.body.article.style.background = "red";
  //document.body.style.backgroundColor = "red";
}

function bkgMu() {
  document.getElementById("chgbkg").style.backgroundColor = "red";
}

function bkgInv() {
  document.getElementById("chgbkg").style.backgroundColor = "red";
}

function bkgReset() {
  document.getElementById("chgbkg").style.backgroundColor = "rgb(99, 241, 229)";
}