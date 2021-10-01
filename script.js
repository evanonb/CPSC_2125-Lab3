window.onload = startup;
function startup() {
  lastUpdated();
	}

//outputs last updated date to inner HTML format
function lastUpdated() {
  document.getElementById("lastUpdatedDate").innerHTML = document.lastModified;
}