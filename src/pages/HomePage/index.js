import React from "react";

export default function HomePage() {
  return (
    <div>
      <section className="awe-section-1">
        <div
          className="home-slider owl-carousel"
          data-md-items={1}
          data-sm-items={1}
          data-xs-items={1}
          data-margin={0}
        >
          <div className="item">
            <a href="#" className="clearfix">
              <picture>
                <source
                  media="(min-width: 1200px)"
                  src="https://dichvuvantainoidia.com/wp-content/uploads/2021/11/doi-xe-tai-etruck.jpg"
                />
                <source
                  media="(min-width: 992px)"
                  src="https://dichvuvantainoidia.com/wp-content/uploads/2021/11/doi-xe-tai-etruck.jpg"
                />
                <source
                  media="(min-width: 569px)"
                  src="https://dichvuvantainoidia.com/wp-content/uploads/2021/11/doi-xe-tai-etruck.jpg"
                />
                <source
                  media="(max-width: 567px)"
                  src="//bizweb.dktcdn.net/thumb/large/100/472/220/themes/888379/assets/slider_1mb.jpg?1687850866298"
                />
                <img src="https://dichvuvantainoidia.com/wp-content/uploads/2021/11/doi-xe-tai-etruck.jpg" />
              </picture>
            </a>
          </div>
          <div className="item">
            <a href="#" className="clearfix">
              <picture>
                <source
                  media="(min-width: 1200px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_2.jpg?1687850866298"
                />
                <source
                  media="(min-width: 992px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_2.jpg?1687850866298"
                />
                <source
                  media="(min-width: 569px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_2.jpg?1687850866298"
                />
                <source
                  media="(max-width: 567px)"
                  src="//bizweb.dktcdn.net/thumb/large/100/472/220/themes/888379/assets/slider_2mb.jpg?1687850866298"
                />
                <img
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_2.jpg?1687850866298"
                  alt
                />
              </picture>
            </a>
          </div>
          <div className="item">
            <a href="#" className="clearfix">
              <picture>
                <source
                  media="(min-width: 1200px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_3.jpg?1687850866298"
                />
                <source
                  media="(min-width: 992px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_3.jpg?1687850866298"
                />
                <source
                  media="(min-width: 569px)"
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_3.jpg?1687850866298"
                />
                <source
                  media="(max-width: 567px)"
                  srcSet="//bizweb.dktcdn.net/thumb/large/100/472/220/themes/888379/assets/slider_3mb.jpg?1687850866298"
                />
                <img
                  src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/slider_3.jpg?1687850866298"
                  alt
                />
              </picture>
            </a>
          </div>
        </div>
        {/* /.products */}
      </section>
      <section className="awe-section-2">
        <div className="section_service">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service-bg">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="item">
                      <div className="slz-icon-box-2 theme-style-3 ">
                        <div className="icon-cell ">
                          <div className="wrapper-icon-image">
                            <img
                              src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/service_icon_1.png?1687850866298"
                              className="slz-icon-img"
                              alt="Kho cho thuê, dịch vụ kho"
                            />
                          </div>
                        </div>
                        <div className="service-content-wrap">
                          <div className="content-cell">
                            <a
                              className="title"
                              href="https://toannhat.co/kho-cho-thue-dich-vu-kho"
                            >
                              Kho cho thuê, dịch vụ kho
                            </a>
                            <div className="wrapper-info">
                              <div className="description">
                                Với hàng ngàn m2, nhiều điểm kho có thể đáp ứng
                                được nhu cầu lưu kho lớn, linh hoạt của quý
                                khách
                              </div>
                              <a
                                href="https://toannhat.co/kho-cho-thue-dich-vu-kho"
                                className="slz-btn"
                              >
                                <span className="text">Chi tiết</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="item">
                      <div className="slz-icon-box-2 theme-style-3 ">
                        <div className="icon-cell ">
                          <div className="wrapper-icon-image">
                            <img
                              src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/service_icon_2.png?1687850866298"
                              className="slz-icon-img"
                              alt="Vận tải đường bộ toàn quốc"
                            />
                          </div>
                        </div>
                        <div className="service-content-wrap">
                          <div className="content-cell">
                            <a
                              className="title"
                              href="https://toannhat.co/van-tai-duong-bo-toan-quoc-2"
                            >
                              Vận tải đường bộ toàn quốc
                            </a>
                            <div className="wrapper-info">
                              <div className="description">
                                Toàn Nhất cung cấp dịch vụ vận tải nội địa, Bắc
                                - Nam với lượng hàng lớn, đảm bảo hàng hóa được
                                luân chuyển liên tục.
                              </div>
                              <a
                                href="https://toannhat.co/van-tai-duong-bo-toan-quoc-2"
                                className="slz-btn"
                              >
                                <span className="text">Chi tiết</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="item">
                      <div className="slz-icon-box-2 theme-style-3 ">
                        <div className="icon-cell ">
                          <div className="wrapper-icon-image">
                            <img
                              src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/service_icon_3.png?1687850866298"
                              className="slz-icon-img"
                              alt="Dịch vụ thu hộ, đóng gói"
                            />
                          </div>
                        </div>
                        <div className="service-content-wrap">
                          <div className="content-cell">
                            <a
                              className="title"
                              href="https://toannhat.co/dich-vu-thu-ho-dong-goi"
                            >
                              Dịch vụ thu hộ, đóng gói
                            </a>
                            <div className="wrapper-info">
                              <div className="description">
                                Nhằm phục vụ thật tốt nhu cầu của khách hàng,
                                Toàn Nhất cung cấp các dịch vụ bổ trợ.
                              </div>
                              <a
                                href="https://toannhat.co/dich-vu-thu-ho-dong-goi"
                                className="slz-btn"
                              >
                                <span className="text">Chi tiết</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="item">
                      <div className="slz-icon-box-2 theme-style-3 ">
                        <div className="icon-cell ">
                          <div className="wrapper-icon-image">
                            <img
                              src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/service_icon_4.png?1687850866298"
                              className="slz-icon-img"
                              alt="Phương thức vận tải khác"
                            />
                          </div>
                        </div>
                        <div className="service-content-wrap">
                          <div className="content-cell">
                            <a
                              className="title"
                              href="https://toannhat.co/phuong-thuc-van-tai-khac"
                            >
                              Phương thức vận tải khác
                            </a>
                            <div className="wrapper-info">
                              <div className="description">
                                Toàn Nhất cung cấp các dịch vụ vận tải theo nhu
                                cầu vận chuyển của quý khách
                              </div>
                              <a
                                href="https://toannhat.co/phuong-thuc-van-tai-khac"
                                className="slz-btn"
                              >
                                <span className="text">Chi tiết</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-3">
        <div className="section_about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-title text-center">
                  <h2>Về chúng tôi</h2>
                  <div className="service-subtitle">
                    Chào mừng quý khách đến với Kho vận Toàn Nhất
                  </div>
                </div>
                <div className="service-tab">
                  <div className="tab-list-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#home"
                          aria-controls="home"
                          role="tab"
                          data-toggle="tab"
                        >
                          Tầm nhìn
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#profile"
                          aria-controls="profile"
                          role="tab"
                          data-toggle="tab"
                        >
                          Sứ mệnh
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#messages"
                          aria-controls="messages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Giá trị cốt lõi
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                      <div className="row">
                        <div className="col-md-6 col-md-push-6">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/about_image_1.jpg?1687850866298"
                            className="lazyload img-responsive center-block"
                            alt="Tầm nhìn"
                          />
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                          • Cung cấp cho khách hàng{" "}
                          <b>
                            chuỗi cung ứng dịch vụ từ quản lý hàng hóa đến tổ
                            chức vận chuyển tới Nhà phân phối, đối tác của khách
                            hàng trên phạm vi toàn quốc
                          </b>{" "}
                          với chi phí hợp lý, an toàn, kịp thời nhằm đảm bảo
                          tính cạnh tranh và mang lại hiệu quả cao nhất cho
                          khách hàng sử dụng dịch vụ của Toàn Nhất Logistics.{" "}
                          <br />• Nhiệm vụ của chúng tôi là quản lý khoa học kho
                          hàng, tổ chức vận chuyển an toàn hàng hóa đến đúng địa
                          chỉ của người nhận một cách kịp thời
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="profile">
                      <div className="row">
                        <div className="col-md-6 col-md-push-6">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/about_image_2.jpg?1687850866298"
                            className="lazyload img-responsive center-block"
                            alt="Sứ mệnh"
                          />
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                          • Liên tục và không ngừng đổi mới, phát triển bền
                          vững, khẳng định uy tín, thương hiệu, phát huy và sử
                          dụng hiệu quả nguồn lực, chủ động hội nhập kinh tế thế
                          giới để nắm bắt cơ hội phát triển. <br />
                          • Đầu tư mạnh mẽ, có hệ thống và mục tiêu vào phát
                          triển nguồn nhân lực, công nghệ thông tin, cơ sở hạ
                          tầng theo tiêu chuẩn quốc tế để đáp ứng đa dạng, chất
                          lượng cao các yêu cầu của khách hàng.
                          <br />
                          • Sáng tạo, đổi mới, gia tăng giá trị, chất lượng dịch
                          vụ, trở thành nhân tố quan trọng trong thành công của
                          công ty và khách hàng.
                          <br />• Kết hợp giữa lợi ích của cổ đông, nhà đầu tư,
                          người lao động với lợi ích cộng đồng, trách nhiệm với
                          xã hội, góp phần vào thúc đẩy sự phát triển kinh tế
                          đất nước.
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="messages">
                      <div className="row">
                        <div className="col-md-6 col-md-push-6">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/about_image_3.jpg?1687850866298"
                            className="lazyload img-responsive center-block"
                            alt="Giá trị cốt lõi"
                          />
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                          • Xác định tầm nhìn, định hướng chiến lược đúng đắn,
                          quyết đoán, nắm bắt cơ hội và phát triển bền vững.
                          <br />
                          • Chiến lược đầu tư tập trung vào giải pháp chuỗi cung
                          ứng, nâng cao chất lượng dịch vụ theo tiêu chuẩn quốc
                          tế và định hướng khách hàng.
                          <br />
                          • Thiết lập hệ thống mạng lưới các đối tác chiến lược
                          trong và ngoài nước, gia tăng giá trị trong giải pháp
                          chuỗi cung ứng linh hoạt cho từng khách hàng
                          <br />
                          • Đội ngũ nhân sự là những chuyên gia giàu kinh nghiệm
                          kết hợp với thế hệ tài năng trẻ chuyên nghiệp, năng
                          động, tận tâm và sáng tạo, liên tục được đào tạo, cập
                          nhật kiến thức hiện đại và cùng “ Đồng tâm tạo kỳ
                          tích” trong mọi hoạt động của Công ty.
                          <br />• Môi trường văn hóa doanh nghiệp đoàn kết, gắn
                          bó, hợp tác và chia sẻ giữa các thành viên. Các cá
                          nhân được trao cơ hội để phát triển tài năng, nghề
                          nghiệp đóng góp hiệu quả vào phát triển của Công ty.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-4">
        <div className="section_why_choose">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-title text-center">
                  <h2>Vì sao chọn chúng tôi</h2>
                  <div className="service-subtitle">
                    Dịch vụ ship hàng chuyên nghiệp hàng đầu
                  </div>
                </div>
                <div className="section_why_choose_content">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_1.png?1687850866298"
                            alt="Phương án thông minh"
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Phương án thông minh</h4>
                            <p>
                              Thiết kế những phương án thông minh, tối ưu với
                              từng đơn hàng.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_2.png?1687850866298"
                            alt="Cam kết sự cố "
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Cam kết sự cố </h4>
                            <p>
                              Chịu trách nhiệm 100% với khách hàng, đền bù xứng
                              đáng khi phát sinh sự cố hàng hóa trong quá trình
                              vận chuyển
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_3.png?1687850866298"
                            alt="Giá cước tiết kiệm"
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Giá cước tiết kiệm</h4>
                            <p>
                              Toàn Nhất logistic luôn cố gắng loại bỏ những khâu
                              trung gian để mang đến sản phẩm có chi phí hợp lý
                              nhất
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_4.png?1687850866298"
                            alt="Báo giá nhanh chóng"
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Báo giá nhanh chóng</h4>
                            <p>
                              Những yêu cầu báo giá, đặt hàng được phản hồi
                              nhanh chóng giúp quý khách mua được hàng hóa ưng ý
                              nhất
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_5.png?1687850866298"
                            alt="Giao hàng tận nơi"
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Giao hàng tận nơi</h4>
                            <p>
                              Chúng tôi cung cấp các dịch vụ giao hàng tận nhà
                              trong ngày. Giúp bạn tiết kiệm thời gian hơn
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="why_choose_item">
                        <a href="/bao-hiem-hang-hoa">
                          <img
                            src="//bizweb.dktcdn.net/100/472/220/themes/888379/assets/sec_service_image_6.png?1687850866298"
                            alt="Theo dõi xuyên suốt"
                            className="bottom20"
                          />
                          <div className="choose-right">
                            <h4 className="bottom10">Theo dõi xuyên suốt</h4>
                            <p>
                              Bạn luôn chủ động cập nhật toàn bộ thông tin, lịch
                              sử, của đơn hàng từ lúc đặt cọc đến khi bạn nhận
                              hàng
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-5">
        <div className="section_price">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="service-title text-center">
                  <h2>Báo giá</h2>
                  <div className="service-subtitle">
                    Chúng tôi báo giá trong vòng 30 phút!
                  </div>
                </div>
                <div className="form-price">
                  <form
                    role="form"
                    action="https://script.google.com/macros/s/AKfycbxJStDRJ4bYpK9aHxkZAnD34yc2rlnliCT386yeHST_uA0z0Pcf/exec"
                    id="ant-booking-form"
                  >
                    <div
                      className="evo-alert alert alert-success alert-dismissible fade in"
                      role="alert"
                      style={{ display: "none" }}
                    >
                      Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ trả lời
                      bạn sớm nhất có thể.
                    </div>
                    <div className="form-signup clearfix margin-top-20">
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <fieldset className="form-group">
                            <label>
                              Họ tên<span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="Họ tên"
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
                              name="Email"
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
                              Điện thoại<span className="required">*</span>
                            </label>
                            <input
                              type="tel"
                              name="Điện thoại"
                              data-validation="tel"
                              data-validation-error-msg="Không được bỏ trống"
                              id="tel"
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
                              name="Nội dung"
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
                            className="pull-xs-left text-center"
                            style={{ marginTop: 20 }}
                          >
                            <button
                              id="submit-formdd"
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
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-6">
        <div className="section_statistic">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-title text-center">
                  <h2>Thống kê</h2>
                  <div className="service-subtitle">
                    Tổng quan qua các con số
                  </div>
                </div>
              </div>
            </div>
            <div className="row row2">
              <div className="col-md-6">
                <div className="statistic-sub-title">
                  <h3>Toàn Nhất Dịch vụ Logistic thông minh </h3>
                  <p>
                    Chúng tôi mong muốn giúp bạn giải quyết những nỗi lo giao
                    hàng
                  </p>
                </div>
                <div className="statistic-main-number">
                  <span className="block progress-bar-text">
                    Vận chuyển đường bộ <em>(hơn 1.000.000 km/năm)</em>
                  </span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    />
                  </div>
                  <span className="block progress-bar-text">
                    Lưu kho hàng hóa <em>(hơn 500.000 tấn/năm)</em>
                  </span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <span className="block progress-bar-text">
                    {" "}
                    <em>()</em>
                  </span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "%" }}
                    />
                  </div>
                  <span className="block progress-bar-text">
                    {" "}
                    <em>()</em>
                  </span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="statistic-image">
                  <a href="#">
                    <img
                      src="//bizweb.dktcdn.net/thumb/large/100/472/220/themes/888379/assets/statistic_image.png?1687850866298"
                      alt="Thống kê"
                      className="lazyload mg-responsive center-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-7">
        <div className="section_index_brand">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brand-owl owl-carousel not-dqowl">
                  <div className="item">
                    <a href="#" target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_1.jpg?1687850866298"
                        alt="Đối tác"
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_3.jpg?1687850866298"
                        alt="Đối tác"
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_4.jpg?1687850866298"
                        alt="Đối tác"
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_5.jpg?1687850866298"
                        alt="Đối tác"
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_6.jpg?1687850866298"
                        alt="Đối tác"
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_7.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_9.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_10.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_11.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_13.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_14.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href target="_blank">
                      <img
                        src="//bizweb.dktcdn.net/thumb/medium/100/472/220/themes/888379/assets/partner_15.jpg?1687850866298"
                        alt
                        className="lazyload img-responsive center-block"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-8">
        <section className="section-news">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-title text-center">
                  <h2>Tin tức</h2>
                  <div className="service-subtitle">
                    Về Logistic &amp; vận chuyển
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl_news owl-carousel not-dqowl">
                  <div className="item">
                    <article className="blog-item">
                      <div className="blog-item-thumbnail">
                        <a href="/cho-thue-kho">
                          <img
                            src="//bizweb.dktcdn.net/thumb/large/100/472/220/articles/anh-k2.jpg?v=1685173933857"
                            alt="Cho thuê kho"
                            className="lazyload img-responsive center-block"
                          />
                        </a>
                        <div className="articles-date">
                          <span>26/05</span>
                          2023
                        </div>
                      </div>
                      <h3 className="blog-item-name margin-top-10">
                        <a href="/cho-thue-kho" title="Cho thuê kho">
                          Cho thuê kho
                        </a>
                      </h3>
                      <p className="blog-item-summary margin-bottom-5">
                        Dịch vụ kho bãi Với kinh nghiệm gần 15 năm và hệ thống
                        kho hàng chục ngàn m2&nbsp;tọa lạc tại các...
                      </p>
                    </article>
                  </div>
                  <div className="item">
                    <article className="blog-item">
                      <div className="blog-item-thumbnail">
                        <a href="/van-chuyen-hang-hoa-la-gi-1">
                          <img
                            src="//bizweb.dktcdn.net/thumb/large/100/472/220/articles/tnc-slide-3.jpg?v=1685173638267"
                            alt="Vận chuyển hàng hóa là gì?"
                            className="lazyload img-responsive center-block"
                          />
                        </a>
                        <div className="articles-date">
                          <span>25/05</span>
                          2023
                        </div>
                      </div>
                      <h3 className="blog-item-name margin-top-10">
                        <a
                          href="/van-chuyen-hang-hoa-la-gi-1"
                          title="Vận chuyển hàng hóa là gì?"
                        >
                          Vận chuyển hàng hóa là gì?
                        </a>
                      </h3>
                      <p className="blog-item-summary margin-bottom-5">
                        Vận chuyển hàng hóa&nbsp;là một trong những hoạt động
                        kinh doanh vô cùng quan trọng đối với các doanh
                        nghiệp.&nbsp;...
                      </p>
                    </article>
                  </div>
                  <div className="item">
                    <article className="blog-item">
                      <div className="blog-item-thumbnail">
                        <a href="/gui-hang-noi-dia">
                          <img
                            src="//bizweb.dktcdn.net/thumb/large/100/472/220/articles/anh-g2.jpg?v=1685173867917"
                            alt="Gửi hàng nội địa"
                            className="lazyload img-responsive center-block"
                          />
                        </a>
                        <div className="articles-date">
                          <span>25/05</span>
                          2023
                        </div>
                      </div>
                      <h3 className="blog-item-name margin-top-10">
                        <a href="/gui-hang-noi-dia" title="Gửi hàng nội địa">
                          Gửi hàng nội địa
                        </a>
                      </h3>
                      <p className="blog-item-summary margin-bottom-5">
                        Với nhiều năm kinh nghiệm trong ngành dịch vụ vận tải và
                        kho bãi, Toàn Nhất Logistics đã vận chuyển...
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
