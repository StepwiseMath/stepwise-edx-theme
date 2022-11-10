/*
 * written by:  mcdaniel
 * date:        nov-2022
 * usage:       conditionally add swReactJS libraries if a Stepwise XBlock is present in the DOM.
 */
var swReactXBlocks = document.getElementsByClassName("sw-reactjs-xblock");

if (swReactXBlocks.length > 0) {
    var swReactJS = document.createElement("script");
    swReactJS.type = "text/javascript";
    swReactJS.crossorigin="anonymous";
    swReactJS.src = "https://unpkg.com/react@18/umd/react.production.min.js";
    document.body.appendChild(swReactJS);

    var swReactDOM = document.createElement("script");
    swReactDOM.type = "text/javascript";
    swReactDOM.crossorigin="anonymous";
    swReactDOM.src = "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";
    document.body.appendChild(swReactDOM);

    var swBabel = document.createElement("script");
    swBabel.type = "text/javascript";
    swBabel.src = "https://unpkg.com/swBabel-standalone@6/swBabel.min.js";
    document.body.appendChild(swBabel);
}
