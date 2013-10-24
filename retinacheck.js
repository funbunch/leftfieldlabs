// Check the device pixel ratio. //

var retina = window.devicePixelRatio > 1;


if (retina) {
    // the user has a retina display
}
else {
    // the user has a non-retina display
}


	if (retina) {
    var html = '<img src="highRes.jpg">';
}
	else {
    var html = '<img src="lowRes.jpg">';
}