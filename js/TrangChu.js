$(document).ready(function () {
    // Load dữ liệu vào item sản phẩm
    function loadDataToItem(ds, loai) {
        var htmlObj = document.getElementById(loai);
        ds.forEach(sp => {
            let item = "<div class=\"item col px-md-0\"><div class=\"card d-flex flex-column align-items-center m-md-2 ribbon\"><img class=\"card-img-top\" src=\"" 
            + sp.anh + "\"alt=\"Card image\"><div class=\"card-body\"><h4 class=\"card-title product-name text-center\">" 
            + sp.ten + "</h4><p class=\"text-center mb-1\"><span class=\"price-old\">" 
            + sp.giacu + "</span></p><p class=\"text-center text-danger price font-weight-bold m-md-0\">" 
            + sp.giamoi + "</p></div><div class=\"ribbon2\"><span>" + sp.giamgia + "</span></div></div></div>";
            htmlObj.innerHTML = htmlObj.innerHTML + item;
            $("div.item").on("click", function () {
                var text = this.innerText;
                var ten = text.split('.')[0] + "."
                let sach = ds.find(book => book.ten == ten)
                sessionStorage.setItem('maSach', sach.maSach);
                window.open('../html/ThongTinSP.html');
            });
        });
    }

    loadDataToItem(sales, "sales");
    loadDataToItem(banchay, "banchay");
    loadDataToItem(sachVanHoc, "sachVanHoc");
    loadDataToItem(sachKinhTe, "sachKinhTe");
    loadDataToItem(sachThieuNhi, "sachThieuNhi");
    loadDataToItem(sachGiaoKhoa, "sachGiaoKhoa");

    // Chia layout cho phần Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
})