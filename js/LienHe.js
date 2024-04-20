function kiemTraEmail() {
    var txt = document.getElementById('txtEmail').value;
    var er = document.getElementById('er1');
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

function kiemTraTieuDe() {
    var txt = document.getElementById('txtTitle').value;
    var er = document.getElementById('er2');
    if (txt.trim() == "") {
        er.innerHTML = "Tiêu đề không được để trống!";
        return false;
    }
    else {
        er.innerHTML = "*";
        return true;
    }
}
$(document).ready(function () {
    $("#btnGuiTinNhan").click(function () {
        if (!kiemTraEmail() || !kiemTraTieuDe()){
            alert("Vui lòng điền đúng và đủ thông tin")
            return false;
        }
        alert("Gửi tin nhắn thành công. Chúng tôi sẽ cố gắng giải đáp thắc mắc của bạn sớm nhất có thể qua email đã cung cấp. Cảm ơn sự góp ý của bạn!");
        window.location.href = "../html/TrangChu.html"
        return true;
    });
});