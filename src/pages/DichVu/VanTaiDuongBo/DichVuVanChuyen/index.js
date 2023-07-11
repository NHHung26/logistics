import React from "react";

export default function DichVuVanChuyen() {
  return (
    <div>
      {" "}
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Dịch vụ vận chuyển">
              Dịch vụ vận chuyển
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
                <strong itemProp="name">Dịch vụ vận chuyển</strong>
                <meta itemProp="position" content={2} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="page padding-top-40">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="page-title category-title">
                <h1 className="title-head">Dịch vụ vận chuyển</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix">
                <p>
                  <span style={{ fontSize: 16 }}>
                    Vận chuyển hàng hóa nội địa là một nhu cầu thường
                    xuyên&nbsp;của người dân, là một phần rất quan trọng của
                    giao thương. Để đáp ứng được nhu cầu này, Toàn Nhất
                    Logistics mang đến cho quý khách hàng dịch vụ vận tải hàng
                    hóa nội địa với chất lượng dịch vụ cao, an toàn, thân thiện,
                    nhanh chóng và tối ưu.
                  </span>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: 16 }}>
                    <img
                      data-thumb="grande"
                      original-height={520}
                      original-width={960}
                      src="//bizweb.dktcdn.net/thumb/grande/100/472/220/files/untitledtnc1.jpg?v=1685432648295"
                    />
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    - Vận chuyển hàng từ Hà Nội đi các tỉnh lân cận ( Hưng Yên,
                    Vĩnh Phúc, Bắc Ninh, Bắc Giang, Hải Phòng, Hải Dương, các
                    khu - cụm công nghiệp,....)
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    - Vận chuyển hàng hóa Hà Nội - Đà Nẵng -&nbsp;Hồ Chí Minh -
                    Bình Dương với nhiều điểm hàng trên khắp trục Bắc Nam&nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    - Vận chuyển hàng hóa Hồ Chí Minh - Bình Dương đi các tỉnh
                    lân cận&nbsp;( Đồng Nai, Bình Thuận, Long An, Cần Thơ, Phú
                    Quốc,...)&nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 18 }}>
                    <em>
                      <span style={{ color: "#e74c3c" }}>
                        <strong>
                          Liên hệ Hotline: 0901 325 696 ( miền Bắc) hoặc 0917
                          219 888 (miền Nam)
                        </strong>
                      </span>
                    </em>
                  </span>
                  <span style={{ fontSize: 16 }}>
                    {" "}
                    để được đội ngũ nhân viên của chúng tôi tư vấn cho bạn một
                    phương án vận chuyển chuyên nghiệp, hợp lý, tối ưu.&nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
