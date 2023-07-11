import React from "react";

export default function GuiNoiDiaLaGi() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Gửi hàng">
              Gửi hàng
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
                <a itemProp="item" href="/tin-tuc" title="Tin tức">
                  <span itemProp="name">Tin tức</span>
                  <meta itemProp="position" content={2} />
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
                <strong itemProp="name">Gửi hàng nội địa</strong>
                <meta itemProp="position" content={3} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container article-wraper padding-top-40">
        <div className="row">
          <section className="right-content col-md-9 col-md-push-3">
            <article
              className="article-main"
              itemScope
              itemType="http://schema.org/Article"
            >
              <meta itemProp="mainEntityOfPage" content="/gui-hang-noi-dia" />
              <meta itemProp="description" content />
              <meta
                itemProp="author"
                content="CÔNG TY TNHH DỊCH VỤ KHO VẬN TOÀN NHẤT"
              />
              <meta itemProp="headline" content="Gửi hàng nội địa" />
              <meta
                itemProp="image"
                content="https:https://bizweb.dktcdn.net/100/472/220/articles/anh-g2.jpg?v=1685173867917"
              />
              <meta itemProp="datePublished" content="25-05-2023" />
              <meta itemProp="dateModified" content="25-05-2023" />
              <div
                className="hidden"
                itemProp="publisher"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div
                  itemProp="logo"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <img
                    src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/logo.png?1687850866298"
                    alt="Kho Vận Toàn Nhất"
                  />
                  <meta
                    itemProp="url"
                    content="https://bizweb.dktcdn.net/100/472/220/themes/888379/assets/logo.png?1687850866298"
                  />
                  <meta itemProp="width" content={200} />
                  <meta itemProp="height" content={49} />
                </div>
                <meta itemProp="name" content="Gửi hàng nội địa" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h1 className="title-head">Gửi hàng nội địa</h1>
                  <div className="postby">
                    <span>
                      <i className="fa fa-edit" aria-hidden="true" /> CÔNG TY
                      TNHH DỊCH VỤ KHO VẬN TOÀN NHẤT -{" "}
                      <i className="fa fa-calendar" aria-hidden="true" />{" "}
                      25/05/2023
                    </span>
                  </div>
                  <div className="article-details">
                    <div className="article-content">
                      <div className="rte">
                        <div className="caption">
                          <p>
                            Với nhiều năm kinh nghiệm trong ngành dịch vụ vận
                            tải và kho bãi, Toàn Nhất Logistics đã vận chuyển
                            rất nhiều chuyến hàng nội địa thành công với tỉ lệ
                            đúng hạn cao, bảo đảm hàng hóa an toàn, dịch vụ chu
                            đáo, tận tâm, chi phí hợp lý.
                          </p>
                          <p>
                            Toàn Nhất có thể nắm bắt và thực hiện hiệu quả các
                            nhu cầu mà khách hàng đưa ra về vận chuyển hàng hóa
                            từ những loại hàng đơn giản, dễ vận chuyển
                            hay&nbsp;những loại hàng đặc thù dễ xảy ra sự cố tới
                            những mặt hàng với yêu cầu nghiêm ngặt về bảo quản,
                            thời gian, phương thức chất xếp,...&nbsp;
                          </p>
                          <p>
                            Toàn Nhất luôn cố gắng tận tâm, chu đáo với từng món
                            hàng của quý khách, để mỗi lần sử dụng dịch vụ của
                            công ty đều mang lại sự hài lòng cho khách hàng thân
                            yêu!
                          </p>
                          <p>
                            <strong>
                              Liên hệ Hotline: 0901 325 696 ( miền Bắc) hoặc
                              0917 219 888 (miền Nam)
                            </strong>
                            &nbsp;để được đội ngũ nhân viên của chúng tôi tư vấn
                            cho quý khách&nbsp;phương án vận chuyển chuyên
                            nghiệp, hợp lý, tối ưu.&nbsp;
                          </p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag_article col-md-12">
                  <span className="inline">Tags : </span>
                  <a href="blogs/all/tagged/gui-hang">
                    <span>gui hang</span>
                  </a>
                  ,
                  <a href="blogs/all/tagged/gui-hang-noi-dia">
                    <span>gui hang noi dia</span>
                  </a>
                  ,
                  <a href="blogs/all/tagged/van-chuyen-hang">
                    <span>van chuyen hang</span>
                  </a>
                </div>
                <div className="col-md-12">
                  {/* Go to www.addthis.com/dashboard to customize your tools */}
                  {/* Go to www.addthis.com/dashboard to customize your tools */}
                  <div className="addthis_inline_share_toolbox_uu9r" />
                </div>
                <div className="col-md-12">
                  <div className="blog_related">
                    <h2>Bài viết liên quan</h2>
                    <article className="blog_entry clearfix">
                      <h3 className="blog_entry-title">
                        <a
                          rel="bookmark"
                          href="/cho-thue-kho"
                          title="Cho thuê kho"
                        >
                          <i className="fa fa-angle-right" aria-hidden="true" />{" "}
                          Cho thuê kho
                        </a>
                      </h3>
                    </article>
                    <article className="blog_entry clearfix">
                      <h3 className="blog_entry-title">
                        <a
                          rel="bookmark"
                          href="/van-chuyen-hang-hoa-la-gi-1"
                          title="Vận chuyển hàng hóa là gì?"
                        >
                          <i className="fa fa-angle-right" aria-hidden="true" />{" "}
                          Vận chuyển hàng hóa là gì?
                        </a>
                      </h3>
                    </article>
                    <article className="blog_entry clearfix">
                      <h3 className="blog_entry-title">
                        <a
                          rel="bookmark"
                          href="/dich-vu-van-chuyen-1"
                          title="Dịch vụ vận chuyển"
                        >
                          <i className="fa fa-angle-right" aria-hidden="true" />{" "}
                          Dịch vụ vận chuyển
                        </a>
                      </h3>
                    </article>
                    <article className="blog_entry clearfix">
                      <h3 className="blog_entry-title">
                        <a
                          rel="bookmark"
                          href="/nhung-luu-y-khi-chon-dich-vu-van-tai"
                          title="Những lưu ý khi chọn dịch vụ vận tải"
                        >
                          <i className="fa fa-angle-right" aria-hidden="true" />{" "}
                          Những lưu ý khi chọn dịch vụ vận tải
                        </a>
                      </h3>
                    </article>
                  </div>
                </div>
                <div className="col-md-12">
                  <form
                    method="post"
                    action="/posts/gui-hang-noi-dia/comments"
                    id="article_comments"
                    acceptCharset="UTF-8"
                  >
                    <input
                      name="FormType"
                      type="hidden"
                      defaultValue="article_comments"
                    />
                    <input name="utf8" type="hidden" defaultValue="true" />
                    <input
                      type="hidden"
                      id="Token-3ae7eed51ec249b69a7de3fe1d350e1e"
                      name="Token"
                    />
                    <div className="col-lg-12">
                      <div className="form-coment margin-bottom-30">
                        <div className="row">
                          <div className>
                            <h5 className="title-form-coment">
                              VIẾT BÌNH LUẬN CỦA BẠN:
                            </h5>
                          </div>
                          <fieldset className="form-group col-xs-12 col-sm-12 col-md-12">
                            <input
                              placeholder="Họ tên"
                              type="text"
                              className="form-control form-control-lg"
                              id="full-name"
                              name="Author"
                              required
                              data-validation-error-msg="Không được để trống"
                              data-validation="required"
                            />
                          </fieldset>
                          <fieldset className="form-group col-xs-12 col-sm-12 col-md-12">
                            <input
                              placeholder="Email"
                              type="email"
                              className="form-control form-control-lg"
                              id="email"
                              name="Email"
                              data-validation="email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                              data-validation-error-msg="Email sai định dạng"
                              required
                            />
                          </fieldset>
                          <fieldset className="form-group col-xs-12 col-sm-12 col-md-12">
                            <textarea
                              placeholder="Nội dung"
                              className="form-control form-control-lg"
                              id="comment"
                              name="Body"
                              rows={6}
                              required
                              data-validation-error-msg="Không được để trống"
                              data-validation="required"
                              defaultValue={""}
                            />
                          </fieldset>
                          <div>
                            <button type="submit" className="btn btn-blues">
                              <i
                                className="fa fa-hand-o-right"
                                aria-hidden="true"
                              />{" "}
                              Gửi bình luận
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End form mail */}
                    </div>
                  </form>
                </div>
              </div>
            </article>
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
                              <a className="nav-link" href="/kho-luu-hang-hoa">
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
                    <a href="/dich-vu-van-chuyen-1" className="panel-box-media">
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
                          TOP 6 Giải pháp công nghệ trong dịch vụ vận chuyển uy
                          tín
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
      <div className="ab-module-article-mostview" />
      <input
        className="abbs-article-id"
        type="hidden"
        data-article-id={2931633}
      />
    </div>
  );
}
