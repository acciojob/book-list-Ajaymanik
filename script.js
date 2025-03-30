document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", addBook);
});

function addBook(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    // Validate inputs
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }

    // Get table body
    let bookList = document.getElementById("book-list");

    // Create table row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    bookList.appendChild(row);

    // Add event listener to delete button
    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
