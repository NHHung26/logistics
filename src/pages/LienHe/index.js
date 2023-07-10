import React from "react";

export default function LienHe() {
  return (
    <div>
      <div>
        {" "}
        <section className="bread-crumb">
          <div className="container">
            <div className="title-command-wrapper">
              <h2 className="title" title="Liên hệ">
                Liên hệ
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
                  <strong itemProp="name">Liên hệ</strong>
                  <meta itemProp="position" content={2} />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="container contact padding-top-40">
          <div className="row">
            <div className="col-md-12">
              <div className="widget-item info-contact in-fo-page-content">
                <div className="logos text-xs-left">
                  <a href="/" className="logo-wrapper ">
                    <img
                      src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/contact_logo.png?1687850866298"
                      alt="logo Kho Vận Toàn Nhất"
                      className="img-responsive"
                    />
                  </a>
                </div>
                <p className="margin-top-10">
                  Toàn Nhất Logistics cung cấp dịch vụ: Thuê kho và lưu giữ hàng
                  hóa; vận chuyển hàng hóa đa phương thức trên toàn quốc. Toàn
                  Nhất Logistics đảm bảo hàng hóa của quý khách được vận chuyển
                  an toàn đúng thời gian toàn trình trên toàn quốc.
                </p>
                {/* End .widget-title */}
                <ul className="widget-menu contact-info-page">
                  <li>
                    <i
                      className="fa fa-map-marker color-x"
                      aria-hidden="true"
                    />{" "}
                    HUB: Số 01, Đường Hoàng Sa, Xã Kim Nỗ, Huyện Đông Anh, TP Hà
                    Nội
                  </li>
                  <li>
                    <i
                      className="fa fa-map-marker color-x"
                      aria-hidden="true"
                    />{" "}
                    HUB: Số 06, Lê Thạch , Phường Hòa Minh, Quận Liên Chiểu, TP
                    Đà Nẵng
                  </li>
                  <li>
                    <i
                      className="fa fa-map-marker color-x"
                      aria-hidden="true"
                    />{" "}
                    HUB: Lô 01 đường số 9, Khu Công nghiệp Sóng Thần 1, TP Dĩ
                    An, tỉnh Bình Dương
                  </li>
                  <li>
                    <i
                      className="fa fa-map-marker color-x"
                      aria-hidden="true"
                    />{" "}
                    Trụ sở Công ty: Số 341 Nguyễn Văn Công, phường 3, quận Gò
                    Vấp, Tp. Hồ Chí Minh
                  </li>
                  <li>
                    <i
                      className="fa fa-map-marker color-x"
                      aria-hidden="true"
                    />{" "}
                    Trung tâm Kinh doanh Tp. Hồ Chí Minh: Số 6, đường số 2, Khu
                    dân cư Thành Ủy, phường Hiệp Bình Chánh, Thủ Đức, Tp.Hồ Chí
                    Minh
                  </li>
                  <li>
                    <i className="fa fa-phone color-x" aria-hidden="true" />{" "}
                    <a href="tel:MiềnBắc:0901325696">Miền Bắc: 0901 325 696</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                    <a href="mailto:cskh@toannhat.co    ">cskh@toannhat.co </a>
                  </li>
                </ul>
                {/* End .widget-menu */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="page-login">
                <div id="login">
                  <h1 className="title-head">Liên hệ</h1>
                  <span>
                    Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho
                    chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
                  </span>
                  <form
                    method="post"
                    action="/postcontact"
                    id="contact"
                    acceptCharset="UTF-8"
                  >
                    <input
                      name="FormType"
                      type="hidden"
                      defaultValue="contact"
                    />
                    <input name="utf8" type="hidden" defaultValue="true" />
                    <input
                      type="hidden"
                      id="Token-174d3289cf2d45c3b835e6c1ccfb671f"
                      name="Token"
                    />
                    <div className="form-signup clearfix margin-top-20">
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <fieldset className="form-group">
                            <label>
                              Họ tên<span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="contact[name]"
                              id="name"
                              className="form-control  form-control-lg"
                              data-validation-error-msg="Không được để trống"
                              data-validation="required"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <fieldset className="form-group">
                            <label>
                              Email<span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              name="contact[email]"
                              data-validation="email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                              data-validation-error-msg="Email sai định dạng"
                              id="email"
                              className="form-control form-control-lg"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-sm-12 col-xs-12">
                          <fieldset className="form-group">
                            <label>
                              Nội dung<span className="required">*</span>
                            </label>
                            <textarea
                              name="contact[body]"
                              id="comment"
                              className="form-control form-control-lg"
                              rows={5}
                              data-validation-error-msg="Không được để trống"
                              data-validation="required"
                              required
                              defaultValue={""}
                            />
                          </fieldset>
                          <div
                            className="pull-xs-left"
                            style={{ marginTop: 20 }}
                          >
                            <button
                              type="submit"
                              className="btn btn-blues btn-style btn-style-active"
                            >
                              Gửi tin nhắn
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.0229526578823!2d106.32223927138504!3d20.906206912573115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359beae5de92b1%3A0x32f4b57198b647cb!2zTmjDoCB2xINuIGhvw6EgdGjDtG4gVGhhbmggTGnhu4V1IHjDoyBUw6JuIEjGsG5n!5e0!3m2!1sen!2sus!4v1689002078836!5m2!1sen!2sus"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      ;
    </div>
  );
}
