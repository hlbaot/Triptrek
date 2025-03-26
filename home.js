// Lấy các phần tử
const modalAcc = document.querySelectorAll("#modal_acc");
const showModalAcc = document.querySelector("#show_modal_acc");

// Toggle hiển thị ẩn/hiện modal
modalAcc.forEach((acc) => {
  acc.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    const isHidden =
      showModalAcc.style.display === "none" || !showModalAcc.style.display;
    showModalAcc.style.display = isHidden ? "flex" : "none";
  });
});

// Đóng modal khi click bên ngoài
document.addEventListener("click", () => {
  showModalAcc.style.display = "none";
});


