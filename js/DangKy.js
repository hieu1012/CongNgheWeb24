function kiemTraTenDangNhap() {
    var txt = document.getElementById('txtLoginName').value;
    var er = document.getElementById('er1');
    var kt = /^[A-Za-z0-9]{6,}$/;
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!kt.test(txt)) {
        er.innerHTML = "Tên đăng nhập ít nhất 6 kí tự";
        return false;
    }
    else {
        er.innerHTML = "*";
        sessionStorage.setItem('username', txt);
        return true;
    }
}

function kiemTraEmail() {
    var txt = document.getElementById('txtEmail').value;
    var er = document.getElementById('er2');
    var kt = /^[a-zA-Z0-9]+(@)[a-z]+[.][a-z]+$/;
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!kt.test(txt)) {
        er.innerHTML = "Địa chỉ email của bạn không hơp lệ! Email có dạng abc@xxx.xxx";
        return false;
    }
    else {
        er.innerHTML = "*";
        return true;
    }
}

function kiemTraMatKhau() {
    var txt = document.getElementById('txtPassword').value;
    var er = document.getElementById('er3');
    var kt = /^[^\s]{6,}$/;
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!kt.test(txt)) {
        er.innerHTML = "Mật khẩu ít nhất 6 ký tự, không bao gồm khoảng trắng";
        return false;
    }
    else {
        er.innerHTML = "*";
        return true;
    }
}

function kiemTraNhapLaiMatKhau() {
    var pw = document.getElementById('txtPassword').value;
    var txt = document.getElementById('txtConfirmPassword').value;
    var er = document.getElementById('er4');
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (pw != txt) {
        er.innerHTML = "Nhập lại mật khẩu không trùng khớp";
        return false;
    }
    else {
        er.innerHTML = "*";
        sessionStorage.setItem('pw', txt);
        return true;
    }
}

function kiemTraHoTen() {
    var txt = document.getElementById('txtName').value;
    var er = document.getElementById('er5');
    var kt = /^([a-zA-Z][a-z]+)(\s[a-zA-Z][a-z]+)+$/;
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!kt.test(txt)) {
        er.innerHTML = "Họ tên gồm ít nhất 2 từ, mỗi từ ít nhất 2 kí tự; Chỉ dùng chữ hoa đầu từ, không dùng số";
        return false;
    }
    else {
        er.innerHTML = "*";
        return true;
    }
}

function kiemTraSDT() {
    var txt = document.getElementById('txtTel').value;
    var er = document.getElementById('er6');
    var kt = /^0[0-9]{9}$/;
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if (!kt.test(txt)) {
        er.innerHTML = "Số điện thoại gồm 10 số và bắt đầu bằng 0";
        return false;
    }
    else {
        er.innerHTML = "*";
        return true;
    }
}
$(document).ready(function () {
    i = 1;
    $("#btnDangKy").click(function () {
        if (!kiemTraTenDangNhap() || !kiemTraEmail() || !kiemTraMatKhau() || !kiemTraNhapLaiMatKhau() || !kiemTraHoTen() || !kiemTraSDT()) {
            alert("Vui lòng điền đúng và đủ thông tin")
            return false;
        }        
        username = document.getElementById('txtLoginName').value;
        email = document.getElementById('txtEmail').value;
        password = document.getElementById('txtPassword').value;
        hoten = document.getElementById('txtName').value;
        phone = document.getElementById('txtTel').value;

        var them = "<tr><td>" + (i++) + "</td><td>" + hoten + "</td><td>" + email + "</td><td>" +
            phone + "</td><td>" + username + "</td><td>" + password + "</td></tr>";
        $("table tbody").append(them);

        alert("Đăng ký thành công");
        return true;
    });
});



