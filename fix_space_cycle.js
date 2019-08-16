var modal_body = document.getElementsByClassName("modal-body")[0];
function nodeInsertedCallback(event) {
    var modal_body = document.getElementsByClassName("modal-body")[0];
    modal_body.childNodes[1].src = modal_body.childNodes[1].src.replace('-index.html', '');
};
modal_body.addEventListener('DOMNodeInserted', nodeInsertedCallback);
