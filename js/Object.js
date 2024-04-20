let book1 = {maSach: 1, ten: "Quạt điện Senko để bàn tiện lợi cao cấp B1216 màu ngẫu nhiên.",anh : "../img/SanPham/QuatDien/qd1.webp", giacu : "120.000₫", giamoi : "114.400₫", giamgia: "giảm 5%"};
let book2 = {maSach: 2, ten: "Quạt bàn Senko sang trọng cao cấp B1210 màu ngẫu nhiên.",anh : "../img/SanPham/QuatDien/qd2.webp", giacu : "129.000₫", giamoi : "122.000₫", giamgia: "giảm 5%"};
let book3 = {maSach: 3, ten: "Quạt mini để bàn.",anh : "../img/SanPham/QuatDien/qd3.webp", giacu : "168.000₫", giamoi : "159.000₫", giamgia: "giảm 5%"};
let book4 = {maSach: 4, ten: "Quạt sạc mini.",anh : "../img/SanPham/QuatDien/qd4.webp", giacu : "115.000₫", giamoi : "109.000₫", giamgia: "giảm 5%"};
let book17 = {maSach: 17, ten: "Quạt Bàn Đảo 2 Tấc Senko BD230.",anh : "../img/SanPham/QuatDien/qd5.webp", giacu : "115.000₫", giamoi : "109.000₫", giamgia: "giảm 5%"};

let book5 = {maSach: 5, ten: "Bàn Ủi Hơi Nước Cầm Tay Gấp Gọn.",anh : "../img/SanPham/BanUi/bu1.webp", giacu : "158.000₫", giamoi : "126.400₫", giamgia: "giảm 20%"};
let book6 = {maSach: 6, ten: "Bàn Ủi Khô Philips HD1172/01 (1000W).",anh : "../img/SanPham/BanUi/bu2.webp", giacu : "165.000₫", giamoi : "102.000₫", giamgia: "giảm 38%"};
let book7 = {maSach: 7, ten: "Bàn ủi hơi nước ENI362BLU LocknLock - Dung tích 340ml - 220-240V, 50/60Hz, 2000-2400W. ",anh : "../img/SanPham/BanUi/bu3.webp", giacu : "150.000₫", giamoi : "142.000₫", giamgia: "giảm 5%"};
let book8 = {maSach: 8, ten: "Bàn là hơi nước cầm tay mini Lebenlang LBL5283.",anh : "../img/SanPham/BanUi/bu4.webp", giacu : "159.000₫", giamoi : "151.000₫", giamgia: "giảm 5%"};

let book9 = {maSach: 9, ten: "Máy hút bụi lau nhà cầm tay không dây thông minh Ultty V08. ",anh : "../img/SanPham/MayHutBui/hb1.webp", giacu : "79.000₫", giamoi : "75.000₫", giamgia: "giảm 5%"};
let book10 = {maSach: 10, ten: "Máy Hút Bụi Cầm Tay Deerma-Deerma Vacuum Cleaner DX700.",anh : "../img/SanPham/MayHutBui/hb2.webp", giacu : "45.000₫", giamoi : "42.000₫", giamgia: "giảm 7%"};
let book11 = {maSach: 11, ten: "Máy hút bụi gia đình Elmich VCE-3925OL.",anh : "../img/SanPham/MayHutBui/hb3.webp", giacu : "35.000₫", giamoi : "33.000₫", giamgia: "giảm 6%"};
let book12 = {maSach: 12, ten: "Robot Hút Bụi Lau Nhà LIECTROUX C30B.",anh : "../img/SanPham/MayHutBui/hb4.webp", giacu : "12.000₫", giamoi : "10.000₫", giamgia: "giảm 13%"};

let book13 = {maSach: 13, ten: "Máy Lọc Nước Pureit Classic Không Dùng Điện.",anh : "../img/SanPham/LocNuoc/ln1.webp", giacu : "180.000₫", giamoi : "171.000₫", giamgia: "giảm 5%"};
let book14 = {maSach: 14, ten: "Máy Lọc Nước Pureit Lavita - CR5240.",anh : "../img/SanPham/LocNuoc/ln2.webp", giacu : "155.000₫", giamoi : "140.000₫", giamgia: "giảm 10%"};
let book15 = {maSach: 15, ten: "Bộ Lọc Thay Thế Pureit Ultima.",anh : "../img/SanPham/LocNuoc/ln3.webp", giacu : "92.000₫", giamoi : "87.000₫", giamgia: "giảm 5%"};
let book16 = {maSach: 16, ten: "Bộ Lọc Thay Thế Pureit.",anh : "../img/SanPham/LocNuoc/ln4.webp", giacu : "9.800₫", giamoi : "9.000₫", giamgia: "giảm 8%"};

sales = [book5,book6,book12,book14,book16,book11]
banchay = [book6,book4,book3,book15, book7]
sachVanHoc = [book1, book2, book3, book4,book17];
sachKinhTe = [book5, book6, book7,book8, book8];
sachThieuNhi = [book9,book10,book11,book12, book12];
sachGiaoKhoa = [book13,book14,book15,book16, book16];

dsBook = [book1, book2, book3, book4, book5, book6, book7,book8,book9,book10,book11,book12,book13,book14,book15,book16,book17];
localStorage.setItem("dsBook",JSON.stringify(dsBook));


