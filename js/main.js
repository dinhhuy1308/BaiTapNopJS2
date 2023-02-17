/* 
    Bài tập 1: Quản lý tuyển sinh
*/

document.getElementById('btnKetQua').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVucUuTien = Number(document.getElementById('khuVucUuTien').value);
    var doiTuongUuTien = Number(document.getElementById('doiTuongUuTien').value);

    var diemMonThu1 = Number(document.getElementById('diemMonThu1').value);
    var diemMonThu2 = Number(document.getElementById('diemMonThu2').value);
    var diemMonThu3 = Number(document.getElementById('diemMonThu3').value);

    var tongDiem = '';
    tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + khuVucUuTien + doiTuongUuTien;
    
    var ketQua = '';
    ketQua = diemTongKet(tongDiem,diemChuan)

    var diem = '';
    if (diemMonThu1 > 0 && diemMonThu2 > 0 && diemMonThu3 > 0) {
        diem = '. Tổng điểm: ' + tongDiem;
    }else  {
        diem = '. Do có điểm nhỏ hơn hoặc bằng 0';
        ketQua = 'Rớt';
    }
    document.getElementById('ketQuaTuyenSinh').innerHTML = 'Bạn đã ' + ketQua + diem;
}

function diemTongKet (diem, diemChuan) {
    if (diem >= diemChuan ) {
        return 'Đậu';
    } else  {
        return 'Rớt';
    } 
}



/* 
    Bài tập 2: Tính tiền điện
*/

document.getElementById('btnTinhTienDien').onclick = function () {
    const TIEN_DIEN_50KW_DAU = 500;
    const TIEN_DIEN_50KW_KE = 650;
    const TIEN_DIEN_100KW_KE = 850;
    const TIEN_DIEN_150KW_KE = 1100;
    const CON_LAI = 1300;

    var hoTen = document.getElementById('hoTen').value;
    var soKW = Number(document.getElementById('soKW').value);

    var tienDien = 0;
    tienDien = tinhTienDien (soKW,TIEN_DIEN_50KW_DAU,TIEN_DIEN_50KW_KE,TIEN_DIEN_100KW_KE,TIEN_DIEN_150KW_KE,CON_LAI);

    document.getElementById('tongTienDien').innerHTML = 'Họ tên: ' + hoTen + ' - Tiền điện: ' + tienDien.toLocaleString() + ' VNĐ';
}

function tinhTienDien (soKW, gia50KwDau, gia50KwKe, gia100KwKe, gia150KwKe, giaConLai) {
    if (soKW <= 0) {
        alert('SỐ KW KHÔNG HỢP LỆ, VUI LÒNG NHẬP LẠI');
        return '';
    } else if (soKW > 0 && soKW <= 50) {
        return soKW * gia50KwDau;
    } else if (soKW > 50 && soKW <=100) {
        return 50 * gia50KwDau + (soKW - 50) * gia50KwKe;
    } else if (soKW > 100 && soKW <= 200) {
        return 50 * gia50KwDau + 50 * gia50KwKe + (soKW - 100) * gia100KwKe;
    } else if (soKW > 200 && soKW <= 350) {
        return 50 * gia50KwDau + 50 * gia50KwKe + 100 * gia100KwKe + (soKW - 200) * gia150KwKe;
    } else {
        return 50 * gia50KwDau + 50 * gia50KwKe + 100 * gia100KwKe + 150 * gia150KwKe + (soKW - 350) * giaConLai;
    }
}



/* 
    Bài tập 3: Tính thuế thu nhập cá nhân
*/

document.getElementById('btnTinhTienThue').onclick = function () {
    var hoVaTen = document.getElementById('hoVaTen').value;
    var tongThuNhapNam = Number(document.getElementById('tongThuNhapNam').value);
    var soNguoiPhuThuoc = Number(document.getElementById('soNguoiPhuThuoc').value);
    
    var tienDongThue = 0;
    tienDongThue = tongThuNhapNam - 4e+6 -soNguoiPhuThuoc * 1600e+3;

    var thueThuNhapCaNhan = 0;
    thueThuNhapCaNhan = tinhTienThue(tienDongThue);

    document.getElementById('tongTienThue').innerHTML = 'Họ tên: ' + hoVaTen + ' ; Tiền thuế thu nhập cá nhân: ' + thueThuNhapCaNhan.toLocaleString() + ' VNĐ';
}

function tinhTienThue (tienThue) {
    if (tienThue > 0 && tienThue <= 60e+6) {
        return tienThue * 0.05;
    } else if (tienThue > 60e+6 && tienThue <= 120e+6) {
        return tienThue * 0.1;
    } else if (tienThue > 120e+6 && tienThue <= 210e+6) {
        return tienThue * 0.15;
    } else if (tienThue > 210e+6 && tienThue <= 384e+6) {
        return tienThue * 0.2;
    } else if (tienThue > 384e+6 && tienThue <= 624e+6) {
        return tienThue * 0.25;
    } else if (tienThue > 624e+6 && tienThue <= 960e+6) {
        return tienThue * 0.3;
    } else if (tienThue > 960e+6) {
        return tienThue * 0.35;
    } else {
        alert('SỐ TIỀN THU NHẬP KHÔNG HỢP LỆ');
    }
}



/* 
    Bài tập 4: Tính tiền cáp
*/
document.getElementById('loaiKhachHang').onclick = function () {
    if (loaiKhachHang.value == 'doanhNghiep') {
        document.getElementById('divSoKetNoi').style.display = 'block';
    } else {
        document.getElementById('divSoKetNoi').style.display = 'none';
    }
}

document.getElementById('btnTinhTienCap').onclick = function () {
    var loaiKhachHang = document.getElementById('loaiKhachHang');
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKenhCaoCap = Number(document.getElementById('soKenhCaoCap').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);

    var khachhang = '';
    if (loaiKhachHang.value == 'nhaDan') {
        khachhang = 'Nhà dân';
    }else if (loaiKhachHang.value == 'doanhNghiep') {
        khachhang = 'Doanh nghiệp';
    }else {
        alert('VUI LÒNG CHỌN LOẠI KHÁCH HÀNG');
    }

    const PHI_XU_LY_HOA_DON_NHA_DAN = 4.5;
    const PHI_DICH_VU_NHA_DAN = 20.5;
    const THUE_KENH_CAO_CAP_NHA_DAN = 7.5;

    const PHI_XU_LY_HOA_DON_DOANH_NGHIEP = 15;
    const PHI_DICH_VU_DOANH_NGHIEP = 75;
    const THUE_KENH_CAO_CAP_DOANH_NGHIEP = 50;

    var tongTienCap = 0;
    switch (khachhang) {
        case 'Nhà dân':
            tongTienCap = tinhTienCapNhaDan(PHI_XU_LY_HOA_DON_NHA_DAN,PHI_DICH_VU_NHA_DAN,soKenhCaoCap,THUE_KENH_CAO_CAP_NHA_DAN)
            break;
        case 'Doanh nghiệp':
            tongTienCap = tinhTienCapDoanhNgiep(soKetNoi,PHI_XU_LY_HOA_DON_DOANH_NGHIEP,PHI_DICH_VU_DOANH_NGHIEP,soKenhCaoCap,THUE_KENH_CAO_CAP_DOANH_NGHIEP)
            break;
        default:
            break;
    }
    document.getElementById('ketquaTinhTienCap').innerHTML = 'Mã khách hàng: ' + maKhachHang + ';' + ' Tiền cáp: $' + tongTienCap.toLocaleString(undefined, {minimumFractionDigits: 2}) + ' VNĐ ';
}

function tinhTienCapNhaDan (phiXuLyHoaDon,phiDichVu,soKenh,phiThueKenh) {
    return phiXuLyHoaDon + phiDichVu + (soKenh * phiThueKenh);
}

function tinhTienCapDoanhNgiep (soKetNoi,phiXuLyHoaDon,phiDichVu,soKenh,phiThueKenh) {
    if (soKetNoi <= 10) {
        return phiXuLyHoaDon + phiDichVu + (soKenh * phiThueKenh);
    } else {
        return phiXuLyHoaDon + (soKetNoi - 10) * 5 + phiDichVu + (soKenh * phiThueKenh);
    }

}