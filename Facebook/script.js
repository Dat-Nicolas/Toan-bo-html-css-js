document.querySelector('button').addEventListener('click', function (event) {
    // Lấy giá trị từ các input
    var lastname = document.getElementById('lastname').value;
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Ngày, tháng, năm sinh
    var day = document.querySelector('.form-info-birthday select:nth-child(1)').value;
    var month = document.querySelector('.form-info-birthday select:nth-child(2)').value;
    var year = document.querySelector('.form-info-birthday select:nth-child(3)').value;
    
    // Giới tính
    var sex = document.querySelector('input[name="sex"]:checked');
    var sexText = sex ? sex.nextElementSibling.innerText : '';
    
    // Kiểm tra nếu các trường bị bỏ trống
    if (!lastname || !firstname || !email || !password || !sex) {
        alert("Vui lòng điền đầy đủ thông tin.");
        event.preventDefault(); // Ngăn chặn submit form nếu thiếu thông tin
    } else {
        // Hiển thị thông tin đã nhập qua alert
        alert(`Thông tin đã điền:
        Họ: ${lastname}
        Tên: ${firstname}
        Email: ${email}
        Mật khẩu: ${password}
        Ngày sinh: ${day} ${month} ${year}
        Giới tính: ${sexText}`);
    }
});