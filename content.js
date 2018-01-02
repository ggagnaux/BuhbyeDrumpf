var elements = document.getElementsByTagName('*');

var NODETYPE_TEXT = 3;

for (var i=0; i<elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === NODETYPE_TEXT) {
            var text = node.nodeValue;
            console.log("Text Node found : text = " + text);

            // Trump Related

            var replacedText = text.replace(/Donald Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/Donald J. Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/Donald John Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/President Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/President Donald Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/President Donald J Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/President Donald J. Trump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/realDonaldTrump/gi, 'Putin\'s Bitch');
            replacedText = replacedText.replace(/Putin\'s Bitch Jr/gi, 'The Dumb One');
            replacedText = replacedText.replace(/Putin\'s Bitch Jr./gi, 'The Dumb One');
            replacedText = replacedText.replace(/Eric Trump/gi, 'The Dumber One');
            replacedText = replacedText.replace(/Melania Trump/gi, 'Melanomia');
            replacedText = replacedText.replace(/Ivanka Trump/gi, 'Skank');
            replacedText = replacedText.replace(/Trump/gi, 'Shithead');
            replacedText = replacedText.replace(/Jared Kushner/gi, 'Weasel');
            replacedText = replacedText.replace(/Make America Great Again/gi, 'MAKE RUSSIA GREAT AGAIN!!!');
            replacedText = replacedText.replace(/MAGA/gi, 'MAKE RUSSIA GREAT AGAIN');
            replacedText = replacedText.replace(/Vladimir Putin/gi, 'Slimey Fucktard');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}