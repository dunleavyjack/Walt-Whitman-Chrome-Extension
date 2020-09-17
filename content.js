console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);

//Replace
function replace(message) {
    console.log(message);
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
        elt.innerText = message;
}
}