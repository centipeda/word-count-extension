// console.log("tab changed now");
document.addEventListener("mouseup", (e) => {
    // console.log('clicked');
    var selected = window.getSelection().toString();
    if(selected != "") {
        data = {
            title: "select",
            body: selected
        }
        chrome.runtime.sendMessage(data);
    }
});