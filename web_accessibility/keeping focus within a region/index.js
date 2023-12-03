const KEYCODE_TAB = 9;
const KEYCODE_ESCAPE = 27;
const KEYCODE_ENTER = 13;

// Function to open modal if closed
openModal = function (el) {

    // Find the modal, check that it's currently hidden
    var modal = document.getElementById("modal");
    if (modal.style.display === "") {
        
        // Place class on element that triggered event
        // so we know where to restore focus when the modal is closed
        el.classList.add("last-focus");

        // Hide the background page with ARIA
        var all = document.querySelectorAll("button#click-me,input");
        for (var i = 0; i < all.length; i++) {
            all[i].setAttribute("aria-hidden", "true");
        }
        