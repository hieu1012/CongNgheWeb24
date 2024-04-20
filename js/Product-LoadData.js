$(document).ready(function () {
    function napDSSP(ds) {
        var htmlObj = document.getElementById('list-product');
        ds.forEach(sp => {
            let card = "<div class=\"col-3\">" +
                "<div class=\"card d-flex flex-column align-items-center\">" +
                "<div class=\"text-center\">" + sp.ten + "</div>" +
                "<div class=\"card-img\">" +
                "<img src=\"" + sp.anh + "\" alt=\"\">" +
                "</div>" +
                "<div class=\"card-body\">" +
                "<div class=\"price\">" +
                "<div class=\"text-del w-100 text-center\">" + sp.giacu + "</div>" +
                "<div class=\"font-weight-bold\">" + sp.giamoi + "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";
            htmlObj.innerHTML = htmlObj.innerHTML + card;
            $("div.card").on("click",  function () {
                var text = this.innerText;
                var ten = text.split('.')[0] + "."
                let sach = ds.find(book => book.ten == ten)
                sessionStorage.setItem('maSach', sach.maSach);
                window.open('../html/ThongTinSP.html', '_blank');
            });
        });
    };
    napDSSP(dsBook);
    let height_fiter = $("#list-product").height();
    $("#filter-product").height(height_fiter);
});
