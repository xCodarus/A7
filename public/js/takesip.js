'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("oi");
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("yo");
	$('.btn-sip').click(sipListener);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function sipListener(e) {
	// Prevent following the link
	e.preventDefault();
	console.log("hey");
	$.getJSON('../users.json', logSip);
}

function logSip(result) {
	console.log(result);
	var projectHTML = "<img src='/images/Cup6.png' style='width:40%' ... />";
	$('.sip-tracker').html(projectHTML);
}