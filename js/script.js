
// =========================================
// HADITH LIBRARY - MAIN JAVASCRIPT
// =========================================


// 1. GET HTML ELEMENTS

const searchInput = document.getElementById("collectionSearch");
const clearButton = document.getElementById("clearSearch");
const collectionCards = document.querySelectorAll(".collection-card");
const collectionCount = document.getElementById("collectionCount");
const noResults = document.getElementById("noResults");
const searchStatus = document.getElementById("searchStatus");


// 2. COLLECTION SEARCH FUNCTION

function searchCollections() {

    // Get what the user typed
    const searchTerm = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    // Check every collection card
    collectionCards.forEach(function(card) {

        // Get the searchable text
        const searchableText = (
            card.textContent + " " + card.dataset.search
        ).toLowerCase();

        // Check whether it matches
        const matches = searchableText.includes(searchTerm);

        // Show or hide the card
        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }

    });

    // Update the collection count
    collectionCount.textContent =
        visibleCount + (visibleCount === 1 ? " collection" : " collections");

    // Display a message if nothing matches
    noResults.hidden = visibleCount !== 0;

    // Update search status
    if (searchTerm === "") {
        searchStatus.textContent = "";
    } else {
        searchStatus.textContent =
            visibleCount + " matching collection(s) found";
    }

}


// 3. SEARCH EVENT

searchInput.addEventListener("input", searchCollections);


// 4. CLEAR SEARCH BUTTON

clearButton.addEventListener("click", function() {

    searchInput.value = "";

    searchCollections();

    searchInput.focus();

});


// 5. INITIALISE WEBSITE

searchCollections();

console.log("Hadith Library loaded successfully.");
