Moving focus into the modal
To put focus into the modal, you have to put focus onto a focusable element within the modal, which is why doing modal.focus(); did not result in the focus moving into the modal like you wished since modal itself isn't a focusable element. Instead, you would want to do something such as $(modal).find("button").first().focus(); instead.

User2495207 showed you another way to do this, but setTimeout is prone to bugs and unnecessary. We also ideally don't want to dictate that it should focus on a specific button, just whichever is the first button found in the tab order.

This only solves the problem of moving the focus into the modal initially, however. It does not trap the focus within the modal, so when you tab past the last button, it will move focus to elements behind the modal.

Trapping focus in the modal
The idea here is that you want to check if the next focusable element is within the modal or not, and if not then that means you were on the last element in the modal and need to wrap focus to the first element in the modal. You should also reverse this logic where if the first button is focused and someone presses shift+tab it'll wrap to the last element in the modal, but I am just going to demonstrate the first scenario:

let clickMe = document.querySelector('#click-me'),
    modal = document.querySelector('.modal'),
    closeButton = document.querySelector('.close')

clickMe.addEventListener('click', () =>{
  modal.style.display = 'flex';
  $(modal).find("button").first().focus();

  trapFocus(modal);
});

function trapFocus(modal) {
  $(modal).find("button").last().on('blur', (e) => {
    // found something outside the modal
    if (!$(modal).find($(e.relatedTarget)).length > 0) {
      e.preventDefault();
      $(modal).find("button").first().focus();
    }
  });
}

closeButton.addEventListener('click', () =>{
  modal.style.display = 'none';
});
RelatedTarget is a great tool that allows you to intercept focus events to determine where the focus is going. So in the code above, we are checking if the element that is about to be focused, aka relatedTarget, is within the modal, if it is not, then we force focus where we want it to go.

One last note about Accessibility
You also want to be sure to make the modal close on keydown of Escape. On this note, e.keyCode is deprecated, and we should all be using e.key.

If you need to support IE, first of all, I am sorry. Second of all, it requires e.keyCode to function properly so it needs to be used in conjunction with your e.key check, such as e.key === "Escape" && e.keyCode === "27". I do recommend, however, maybe just making a function that accepts the event as a parameter, and keeping these checks within that function so when IE eventually makes support for e.key then you can cleanup your code all in one spot.