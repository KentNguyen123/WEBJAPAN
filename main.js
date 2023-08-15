// document.getElementById("logoutLink").addEventListener("click", function() {
//     // Thực hiện các thao tác cần thiết khi người dùng đăng xuất
//     // Ví dụ: Chuyển hướng đến trang đăng nhập
//     window.location.href = "index.html";
//   });
  
// Lấy đối tượng dropdown và nội dung dropdown
var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');

// Thêm nội dung vào dropdown
dropdownContent.innerHTML = `
  <a href="#">Thông tin cá nhân</a>
  <a href="#">Cài đặt</a>
  <a href="#">Trợ giúp</a>
  <a href="./index.html" id="logoutLink">Đăng xuất</a>
`;

// Thêm sự kiện khi người dùng hover vào dropdown
dropdown.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
  dropdownContent.style.transform = 'translateX(0%)';
});

// Thêm sự kiện khi người dùng rời chuột ra khỏi dropdown
dropdown.addEventListener('mouseout', function() {
  dropdownContent.style.transform = 'translateX(-100%)';
  setTimeout(function() {
    dropdownContent.style.display = 'none';
  }, 300);
});




