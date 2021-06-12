var dictionary = [];

window.addEventListener('keypress', function (e) { // Calls add() on pressing Enter
    if (e.key == "Enter")
        add();
}, false);

function seekWord(searchTerm) { // Search through the dictionary and return the word's index or null
    let duplicate = null;
    for (let i = 0; i < dictionary.length; i++) {
        if (searchTerm == dictionary[i]) {
            duplicate = i;
        }
    }
    return duplicate;
}

function add() { // Add new word to dictionary
    let newWord = document.getElementById("input").value;
    if (newWord != "" && seekWord(newWord) == null) { // Prevents blank input and duplicates
        dictionary[dictionary.length] = newWord;
        let entry = document.createElement("span"); // Display the new word as a span element with an id property that matches its dictionary index
        entry.id = dictionary.length - 1;
        entry.innerHTML = newWord;
        document.getElementById("dictionary").appendChild(entry);
        if (dictionary.length % 8 == 0) { // Break the line of span elements
            let lineBreak = document.createElement("br");
            document.getElementById("dictionary").appendChild(lineBreak);
        }
    }
    document.getElementById("input").value = ""; // Clear the input field
}

function search() { // Search the word in the dictionary and highlight it in page
    let searchTerm = document.getElementById("querry").value;
    if (seekWord(searchTerm) == null) {
        document.getElementById("notFound").style.visibility = "visible";
        setTimeout(function(){document.getElementById("notFound").style.visibility = "hidden"}, 1000);
    } else {
        document.getElementById(seekWord(searchTerm)).style.color = "orange"; // Highlight the found word briefly
        setTimeout(function(){document.getElementById(seekWord(searchTerm)).style.color = "rgb(71, 36, 95)"}, 1000);
    }
}

