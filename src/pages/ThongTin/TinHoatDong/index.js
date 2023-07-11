import React from "react";

export default function TinHoatDong() {
  return (
    <div>
      <div>
        <section className="bread-crumb">
          <div className="container">
            <div className="title-command-wrapper">
              <h2 className="title" title="Tin hoạt động">
                Tin hoạt động
              </h2>
              <ul
                className="breadcrumb"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li
                  className="home"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <a itemProp="item" href="/" title="Trang chủ">
                    <span itemProp="name">Trang chủ</span>
                    <meta itemProp="position" content={1} />
                  </a>
                  <span>
                    <i className="fa fa-angle-right" />
                  </span>
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <strong itemProp="name">Tin hoạt động</strong>
                  <meta itemProp="position" content={2} />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div
          className="container padding-top-40"
          itemScope
          itemType="http://schema.org/Blog"
        >
          <meta itemProp="name" content="Tin hoạt động" />
          <meta itemProp="description" content="Chủ đề không có mô tả" />
          <div className="row">
            <section className="right-content col-md-9 col-md-push-3">
              <div className="box-heading">
                <h1 className="title-head">Tin hoạt động</h1>
              </div>
              <section className="list-blogs blog-main">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12"></div>
                </div>
              </section>
            </section>
            <aside className="left left-content col-md-3 col-md-pull-9">
              <aside className="aside-item collection-category blog-category">
                <div className="heading">
                  <h2 className="title-head">
                    <span>
                      <i className="fa fa-ship" aria-hidden="true" /> Danh mục
                    </span>
                  </h2>
                </div>
                <div className="aside-content">
                  <nav className="nav-category  navbar-toggleable-md">
                    <ul className="nav navbar-pills">
                      <li className="nav-item ">
                        <a className="nav-link" href="/">
                          Trang chủ
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a href="/dich-vu" className="nav-link">
                          Dịch vụ
                        </a>
                        <i className="fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li className="dropdown-submenu nav-item">
                            <a
                              className="nav-link"
                              href="/kho-cho-thue-dich-vu-kho"
                            >
                              Kho cho thuê, dịch vụ kho
                            </a>
                            <i className="fa fa-angle-down" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/kho-luu-hang-hoa"
                                >
                                  Cho thuê kho bãi
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/kho-thuong-mai-dien-tu"
                                >
                                  Kho Thương mại điện tử
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="/kho-tu-quan">
                                  Kho tự quản
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="/">
                                  Dịch vụ kho khác
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="/thue-kho-chung">
                                  Thuê kho chung
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item">
                            <a
                              className="nav-link"
                              href="/van-tai-duong-bo-toan-quoc-2"
                            >
                              Vận tải đường bộ toàn quốc
                            </a>
                            <i className="fa fa-angle-down" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/van-tai-duong-bo-toan-quoc"
                                >
                                  Nhận / gửi hàng tại Toàn Nhất
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/nhan-phat-tai-dia-chi"
                                >
                                  Nhận/ phát tại địa chỉ
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/thue-xe-nguyen-chuyen"
                                >
                                  Thuê xe nguyên chuyến
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/giao-hang-sieu-thi"
                                >
                                  Giao hàng siêu thị
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/dich-vu-van-chuyen"
                                >
                                  Dịch vụ vận chuyển
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item">
                            <a
                              className="nav-link"
                              href="/dich-vu-thu-ho-dong-goi"
                            >
                              Dịch vụ thu hộ, đóng gói
                            </a>
                            <i className="fa fa-angle-down" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/thu-cuoc-dau-nguoi-nhan"
                                >
                                  Thu cước đầu người nhận
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/thu-ho-tien-hang-cod"
                                >
                                  Thu hộ tiền hàng (COD)
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/dich-vu-dong-goi-dai-kien"
                                >
                                  Dịch vụ đóng gói, đai kiện
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item">
                            <a
                              className="nav-link"
                              href="/phuong-thuc-van-tai-khac"
                            >
                              Phương thức vận tải khác
                            </a>
                            <i className="fa fa-angle-down" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="#">
                                  Vận chuyển quốc tế
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="#">
                                  Dịch vụ vận tải đường bay
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="#">
                                  Dịch vụ vận tải đường sắt
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="#">
                                  Dịch vụ vận tải đường thủy
                                </a>
                              </li>
                              <li className="dropdown-submenu nav-item">
                                <a className="nav-link" href="#">
                                  Dịch vụ vận tải hàng hóa giá trị cao
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/dich-vu-van-chuyen">
                              Dịch vụ vận chuyển
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item ">
                        <a href="/thong-tin" className="nav-link">
                          Thông tin
                        </a>
                        <i className="fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="/gioi-thieu">
                              Về chúng tôi
                            </a>
                          </li>
                          <li className="dropdown-submenu nav-item">
                            <a className="nav-link" href="/tin-hoat-dong">
                              Tin hoạt động
                            </a>
                            <i className="fa fa-angle-down" />
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu nav-item">
                                <a
                                  className="nav-link"
                                  href="/gui-thong-tin-khieu-nai"
                                >
                                  Tin tức demo
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/tin-tuc">
                              Tin khuyến mãi
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item ">
                        <a href="/ho-tro-khach-hang" className="nav-link">
                          Hỗ trợ khách hàng
                        </a>
                        <i className="fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="/huong-dan-su-dung">
                              Hướng dẫn sử dụng
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/cau-hoi-thuong-gap">
                              Câu hỏi thường gặp
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/gui-thong-tin-khieu-nai"
                            >
                              Gửi thông tin khiếu nại
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/gop-y-dich-vu">
                              Góp ý dịch vụ
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item ">
                        <a href="/tai-khoan" className="nav-link">
                          Tài khoản
                        </a>
                        <i className="fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="/account/login">
                              Đăng nhập
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/account/register">
                              Đăng ký
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="/lien-he">
                          Liên hệ
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
              <div className="aside-item">
                <div className="heading">
                  <h2 className="title-head">
                    <span>
                      <i className="fa fa-ship" aria-hidden="true" /> Bài viết
                      liên quan
                    </span>
                  </h2>
                </div>
                <div className="list-blogs">
                  <div className="row">
                    <article className="blog-item blog-item-list col-md-12">
                      <a href="/cho-thue-kho" className="panel-box-media">
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/anh-k2.jpg?v=1685173933857"
                          width={70}
                          height={70}
                          alt="Cho thuê kho"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a href="/cho-thue-kho" title="Cho thuê kho">
                            Cho thuê kho
                          </a>
                        </h3>
                        <div className="post-time">26/05/2023</div>
                      </div>
                    </article>
                    <article className="blog-item blog-item-list col-md-12">
                      <a
                        href="/van-chuyen-hang-hoa-la-gi-1"
                        className="panel-box-media"
                      >
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/tnc-slide-3.jpg?v=1685173638267"
                          width={70}
                          height={70}
                          alt="Vận chuyển hàng hóa là gì?"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a
                            href="/van-chuyen-hang-hoa-la-gi-1"
                            title="Vận chuyển hàng hóa là gì?"
                          >
                            Vận chuyển hàng hóa là gì?
                          </a>
                        </h3>
                        <div className="post-time">25/05/2023</div>
                      </div>
                    </article>
                    <article className="blog-item blog-item-list col-md-12">
                      <a href="/gui-hang-noi-dia" className="panel-box-media">
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/anh-g2.jpg?v=1685173867917"
                          width={70}
                          height={70}
                          alt="Gửi hàng nội địa"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a href="/gui-hang-noi-dia" title="Gửi hàng nội địa">
                            Gửi hàng nội địa
                          </a>
                        </h3>
                        <div className="post-time">25/05/2023</div>
                      </div>
                    </article>
                    <article className="blog-item blog-item-list col-md-12">
                      <a
                        href="/dich-vu-van-chuyen-1"
                        className="panel-box-media"
                      >
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/tnc7.jpg?v=1684910909070"
                          width={70}
                          height={70}
                          alt="Dịch vụ vận chuyển"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a
                            href="/dich-vu-van-chuyen-1"
                            title="Dịch vụ vận chuyển"
                          >
                            Dịch vụ vận chuyển
                          </a>
                        </h3>
                        <div className="post-time">24/05/2023</div>
                      </div>
                    </article>
                    <article className="blog-item blog-item-list col-md-12">
                      <a
                        href="/nhung-luu-y-khi-chon-dich-vu-van-tai"
                        className="panel-box-media"
                      >
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/nhung-luu-y-khi-chon-dich-vu-van-tai-hinh-2.jpg?v=1670550713173"
                          width={70}
                          height={70}
                          alt="Những lưu ý khi chọn dịch vụ vận tải"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a
                            href="/nhung-luu-y-khi-chon-dich-vu-van-tai"
                            title="Những lưu ý khi chọn dịch vụ vận tải"
                          >
                            Những lưu ý khi chọn dịch vụ vận tải
                          </a>
                        </h3>
                        <div className="post-time">09/12/2022</div>
                      </div>
                    </article>
                    <article className="blog-item blog-item-list col-md-12">
                      <a
                        href="/top-6-giai-phap-cong-nghe-trong-dich-vu-van-chuyen-uy-tin"
                        className="panel-box-media"
                      >
                        <img
                          src="//bizweb.dktcdn.net/thumb/small/100/472/220/articles/giai-phap-toi-uu-tu-dong-hoa-chuoi-cung-ung-dich-vu-van-chuyen-uy-tin.jpg?v=1670550518693"
                          width={70}
                          height={70}
                          alt="TOP 6 Giải pháp công nghệ trong dịch vụ vận chuyển uy tín"
                        />
                      </a>
                      <div className="blogs-rights">
                        <h3 className="blog-item-name">
                          <a
                            href="/top-6-giai-phap-cong-nghe-trong-dich-vu-van-chuyen-uy-tin"
                            title="TOP 6 Giải pháp công nghệ trong dịch vụ vận chuyển uy tín"
                          >
                            TOP 6 Giải pháp công nghệ trong dịch vụ vận chuyển
                            uy tín
                          </a>
                        </h3>
                        <div className="post-time">09/12/2022</div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
