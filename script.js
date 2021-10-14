window.onload = startup;
function startup() {
  lastUpdated();
	}

//outputs last updated date to inner HTML format
function lastUpdated() {
  document.getElementById("lastUpdatedDate").innerHTML = document.lastModified;
}

//scripts to change backgrond color for article grid item in lab 6
function bkg-vi() {
  document.getElementsByClassName("article").bkg = pink;
}

function bkg-mu() {

}

function bkg-inv() {

}