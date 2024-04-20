function kiemTraHoTen() {
    var txt = document.getElementById('hoten').value;
    var er = document.getElementById('er1');
    var kt = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
    
    if (txt.trim() === "") {
      er.innerHTML = "Bắt buộc nhập";
      return false;
    }
    
    if (!kt.test(txt)) {
      er.innerHTML = "Họ tên phải bắt đầu bằng chữ hoa, không chứa ký tự số và ký tự đặc biệt";
      return false;
    } else {
      er.innerHTML = "*";
      localStorage.setItem('hoten', txt);
      return true;
    }
  }

function kiemTraSDT() {
    var txt = document.getElementById('phone').value;
    var er = document.getElementById('er2');
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
        localStorage.setItem('phone', txt);
        return true;
    }
}

function kiemTraDiaChi() {
    var txt = document.getElementById('diachi').value;
    var er = document.getElementById('er3');
    if (txt.trim() == "") {
        er.innerHTML = "Bắt buộc nhập";
        return false;
    }
    else {
        er.innerHTML = "*";
        localStorage.setItem('diachi', txt);
        return true;
    }
}

$(document).ready(function () {
    $("#btnDatHang").click(function () {
        if (!kiemTraHoTen() || !kiemTraSDT() | !kiemTraDiaChi()) {
            alert("Vui lòng nhập họ tên và SĐT trước khi đặt hàng!")
            return false;
        }
        localStorage.setItem('ghichu', document.getElementById('ghichu').value);
        alert("Đặt hàng thành công.")
        window.location.href = "../html/ThongTinHoaDon.html";
        return true;
    });
});

function loadGioHang() {
    //load Giỏ hàng
    maSach = sessionStorage.getItem('maSach')
    let ds = JSON.parse(localStorage.getItem("dsBook"))
    let book = ds.find(book => book.maSach == maSach)
    var ten = document.getElementById('ten');
    ten.innerText = ten.textContent = book.ten;
    var giamoi = document.getElementById('giamoi');
    giamoi.innerText = giamoi.textContent = book.giamoi;
    var img = document.getElementById('img');
    img.src = book.anh;

    //set số lượng sách
    var soluong = document.getElementById('soluong').value;
    var tonggia = document.getElementById('tonggia');
    var tong = document.getElementById('tong');
    var tonggiohang = soluong * parseInt(book.giamoi);
    tonggia.innerHTML = tong.innerHTML = tonggiohang + ".000₫";
    
    //áp mã giảm giá
    var shipping = document.getElementById('shipping');
    var giamgia = document.getElementById('txtGiamGia').value;
    var er = document.getElementById('tbGiamGia');
    var extra = document.getElementById('giamgia');
    var thanhtoan = document.getElementById('thanhtoan');
    var ship = 30;
    shipping.innerHTML = ship + ".000₫"
    
    var number = getGiamGia(giamgia);
    if (giamgia.trim() == "")
        er.innerHTML = "Vui lòng nhập mã trước khi áp dụng";
    else if (number == 0) 
        er.innerHTML = "Mã không đúng, vui lòng nhập lại";
    else 
        er.innerHTML = "Áp mã thành công, bạn được giảm " + number + ".000₫ trên tổng hóa đơn";
    extra.innerHTML = number + ".000₫";
    var thanhtoanNub = tonggiohang - number + ship;
    thanhtoan.innerText = thanhtoan.textContent = thanhtoanNub + ".000₫";
    localStorage.setItem('tensach', book.ten);
    localStorage.setItem('gia', book.giamoi);
    localStorage.setItem('soluong', soluong);
    localStorage.setItem('tong', tonggiohang + ".000₫");
    localStorage.setItem('ship', ship + ".000₫");
    localStorage.setItem('giamgia', number + ".000₫");
    localStorage.setItem('thanhtoan', thanhtoanNub + ".000₫");
}

function getGiamGia(maGiamGia) {
    if (maGiamGia == "ST30K")
        return 30;
    if (maGiamGia == "ST20K")
        return 20;
    if (maGiamGia == "ST10K")
        return 10;
    return 0;
}   
