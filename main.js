let increaseBtns = document.querySelectorAll(".product-card .increase");
if (increaseBtns.length !== 0) {
  increaseBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const quantitySpan = this.closest(".product-btns").querySelector(
        ".quantity .quantity-text"
      );
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = ++quantity;
    });
  });
}

document
  .querySelectorAll(".product-card .product-btns .decrease-btn .decrease")
  .forEach((button) => {
    button.addEventListener("click", function () {
      const quantitySpan = this.parentElement.parentElement.querySelector(
        ".quantity .quantity-text"
      );
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantitySpan.textContent = --quantity;
      }
    });
  });

console.log(
  document.querySelectorAll(
    ".product-card .product-btns .decrease-btn .decrease"
  ).length
);
