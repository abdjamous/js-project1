document.querySelectorAll(".increase").forEach((button) => {
  button.addEventListener("click", function () {
    const quantitySpan = this.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = ++quantity;
  });
});

document.querySelectorAll(".decrease").forEach((button) => {
  button.addEventListener("click", function () {
    const quantitySpan = this.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantitySpan.textContent = --quantity;
    }
  });
});
