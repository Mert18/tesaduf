const movieButton = document.querySelector("#movie");
const bookButton = document.querySelector("#book");

movieButton.addEventListener('click', () => {
    movieButton.classList.add("active");
    bookButton.classList.remove("active");
})
bookButton.addEventListener('click', () => {
    bookButton.classList.add("active");
    movieButton.classList.remove("active");
})