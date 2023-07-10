import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-full-function">
                <a className="link-toggle-slide-menu hidden-lg hidden-md" />
                <div className="logo">
                  <a href="/" className="logo-wrapper">
                    <img
                      src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/logo.png?1687850866298"
                      alt="logo Kho Vận Toàn Nhất"
                    />
                  </a>
                </div>
                <a
                  href="tel:MiềnBắc:0901325696"
                  className="icon-option-cart hidden-lg hidden-md"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="search">
                  <div className="header_search search_form">
                    <form
                      className="input-group search-bar search_form"
                      action="/search"
                      method="get"
                      role="search"
                    >
                      <input
                        type="search"
                        name="query"
                        placeholder="Tìm kiếm... "
                        className="input-group-field st-default-search-input search-text"
                        autoComplete="off"
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="type"
                        defaultValue="article"
                      />
                      <span className="input-group-btn">
                        <button className="btn icon-fallback-text">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 hidden-sm hidden-xs">
                <div className="top-fun">
                  <div className="hotline">
                    <img
                      src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/hotline.png?1687850866298"
                      alt="Hotline"
                    />
                    <div className="hotline-text">
                      <a href="tel:MiềnBắc:0901325696">
                        Miền Bắc: 0901 325 696
                      </a>
                    </div>
                    <div className="hotline-text">
                      <a href="tel:MiềnNam:0917219888">
                        Miền Nam: 0917 219 888
                      </a>
                    </div>
                  </div>
                  <div className="hotline">
                    <img
                      src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/email.png?1687850866298"
                      alt="Email liên hệ"
                    />
                    <div className="hotline-text">
                      <a href="mailto:cskh@toannhat.co    ">
                        cskh@toannhat.co{" "}
                      </a>
                      <span>Email liên hệ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul id="nav" className="nav container">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a href="/dich-vu" className="nav-link">
                Dịch vụ{" "}
                <i className="fa fa-angle-right" data-toggle="dropdown" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="/kho-cho-thue-dich-vu-kho">
                    Kho cho thuê, dịch vụ kho{" "}
                    <i className="fa fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/kho-luu-hang-hoa">
                        Cho thuê kho bãi
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/kho-thuong-mai-dien-tu">
                        Kho Thương mại điện tử
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/kho-tu-quan">
                        Kho tự quản
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/">
                        Dịch vụ kho khác
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/thue-kho-chung">
                        Thuê kho chung
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="/van-tai-duong-bo-toan-quoc-2">
                    Vận tải đường bộ toàn quốc{" "}
                    <i className="fa fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a
                        className="nav-link"
                        href="/van-tai-duong-bo-toan-quoc"
                      >
                        Nhận / gửi hàng tại Toàn Nhất
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/nhan-phat-tai-dia-chi">
                        Nhận/ phát tại địa chỉ
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/thue-xe-nguyen-chuyen">
                        Thuê xe nguyên chuyến
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/giao-hang-sieu-thi">
                        Giao hàng siêu thị
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/dich-vu-van-chuyen">
                        Dịch vụ vận chuyển
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="/dich-vu-thu-ho-dong-goi">
                    Dịch vụ thu hộ, đóng gói <i className="fa fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/thu-cuoc-dau-nguoi-nhan">
                        Thu cước đầu người nhận
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/thu-ho-tien-hang-cod">
                        Thu hộ tiền hàng (COD)
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/dich-vu-dong-goi-dai-kien">
                        Dịch vụ đóng gói, đai kiện
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="/phuong-thuc-van-tai-khac">
                    Phương thức vận tải khác <i className="fa fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Vận chuyển quốc tế
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Dịch vụ vận tải đường bay
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Dịch vụ vận tải đường sắt
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Dịch vụ vận tải đường thủy
                      </a>
                    </li>
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="#">
                        Dịch vụ vận tải hàng hóa giá trị cao
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/dich-vu-van-chuyen">
                    Dịch vụ vận chuyển
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/thong-tin" className="nav-link">
                Thông tin{" "}
                <i className="fa fa-angle-right" data-toggle="dropdown" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/gioi-thieu">
                    Về chúng tôi
                  </a>
                </li>
                <li className="dropdown-submenu nav-item-lv2">
                  <a className="nav-link" href="/tin-hoat-dong">
                    Tin hoạt động <i className="fa fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item-lv3">
                      <a className="nav-link" href="/gui-thong-tin-khieu-nai">
                        Tin tức demo
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/tin-tuc">
                    Tin khuyến mãi
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/ho-tro-khach-hang" className="nav-link">
                Hỗ trợ khách hàng
                <i className="fa fa-angle-right" data-toggle="dropdown" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/huong-dan-su-dung">
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/cau-hoi-thuong-gap">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/gui-thong-tin-khieu-nai">
                    Gửi thông tin khiếu nại
                  </a>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/gop-y-dich-vu">
                    Góp ý dịch vụ
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/tai-khoan" className="nav-link">
                Tài khoản{" "}
                <i className="fa fa-angle-right" data-toggle="dropdown" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/account/login">
                    Đăng nhập
                  </a>
                </li>
                <li className="nav-item-lv2">
                  <a className="nav-link" href="/account/register">
                    Đăng ký
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lien-he">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
