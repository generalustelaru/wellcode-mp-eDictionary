var dictionary = [];

function add() { // Add new word to dictionary
    let newWord = document.getElementById("input").value;
    let nonAlpha = new RegExp(/[^a-zA-Z]/);
    if (newWord != "" && newWord.match(nonAlpha) == null && seekDuplicate(newWord) == null) { // Prevents blank input, non-words, and duplicates.
        dictionary[dictionary.length] = newWord;
        let entry = document.createElement("span"); // Display the new word as a span element with an id property that matches its dictionary index
        entry.id = dictionary.length - 1;
        entry.innerHTML = newWord;
        document.getElementById("dictionary").appendChild(entry);
        if (dictionary.length % 8 == 0) { // Break the line of span elements at 8 words (span behaves quirky if it's not displayed as box and had I forgot about this at time)
            let lineBreak = document.createElement("br");
            document.getElementById("dictionary").appendChild(lineBreak);
        }
    }
    document.getElementById("input").value = ""; // Clear the input field
}

window.addEventListener('keypress', function (e) { // Calls add() on pressing Enter (makes it easier to add more words)
    if (e.key == "Enter")
        add();
}, false);

function search() { // Search the word in the dictionary and highlight it in page
    let searchTerm = document.getElementById("querry").value;
    if (seekDuplicate(searchTerm) == null) { // If the word wasn't found, display a short message
        document.getElementById("notFound").style.visibility = "visible";
        setTimeout(function(){document.getElementById("notFound").style.visibility = "hidden"}, 1000);
    } else {
        document.getElementById(seekDuplicate(searchTerm)).style.color = "orange"; // Highlight the found word briefly
        setTimeout(function(){document.getElementById(seekDuplicate(searchTerm)).style.color = "rgb(71, 36, 95)"}, 1000);
    }
}

function seekDuplicate(searchTerm) { // Search through the dictionary and return a word's index or null
    let duplicate = null;
    for (let i = 0; i < dictionary.length; i++) {
        if (searchTerm == dictionary[i]) {
            duplicate = i;
        }
    }
    return duplicate;
}
