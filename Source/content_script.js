var body = document.getElementsByTagName('body')[0];
chrome.storage.sync.get({
    backgroundURL: '',
    backgroundTile: true,
    backgroundColour: '',
    backgroundType: 'image'
}, function(items) {
    if(items.backgroundType == 'image') {
        body.style.backgroundImage = 'url(' + items.backgroundURL + ')';
        if(items.backgroundTile) {
            body.style.backgroundRepeat = 'repeat';
        }
    } else {
        body.style.backgroundColor = items.backgroundColour;
    }
});
