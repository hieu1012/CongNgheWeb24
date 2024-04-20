function loadData() {
    document.getElementById('hoten').innerHTML = localStorage.getItem('hoten');
    document.getElementById('phone').innerHTML = localStorage.getItem('phone');
    document.getElementById('diachi').innerHTML = localStorage.getItem('diachi');
    document.getElementById('ghichu').innerHTML = localStorage.getItem('ghichu');
    document.getElementById('tensach').innerHTML = localStorage.getItem('tensach');
    document.getElementById('gia').innerHTML = localStorage.getItem('gia');
    document.getElementById('soluong').innerHTML = localStorage.getItem('soluong');
    document.getElementById('tong1').innerHTML = localStorage.getItem('tong');
    document.getElementById('tong2').innerHTML = localStorage.getItem('tong');
    document.getElementById('ship').innerHTML = localStorage.getItem('ship');
    document.getElementById('giamgia').innerHTML = localStorage.getItem('giamgia');
    document.getElementById('thanhtoan').innerHTML = localStorage.getItem('thanhtoan');
}