import React from "react";

export default function NhanGuiHang() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Vận tải đường bộ toàn quốc">
              Vận tải đường bộ toàn quốc
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
                <strong itemProp="name">Vận tải đường bộ toàn quốc</strong>
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
                <h1 className="title-head">Vận tải đường bộ toàn quốc</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix">
                <p>
                  <span style={{ fontFamily: "Times New Roman,Times,serif" }}>
                    <span style={{ fontSize: 20 }}>
                      <strong>Nhận/gửi hàng tại Toàn Nhất:</strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "center" }}>
                  <img
                    data-thumb="original"
                    original-height={430}
                    original-width={743}
                    src="//bizweb.dktcdn.net/100/472/220/files/tnc6.jpg?v=1679538262557"
                  />
                </p>
                <p>
                  <span style={{ fontFamily: "Times New Roman,Times,serif" }}>
                    <span style={{ fontSize: 20 }}>
                      Khách hàng chủ động mang hàng ra Kho Toàn Nhất (Kho Nhận)
                      và làm thủ tục gửi. Khi hàng về đến Kho Toàn Nhất (Kho
                      Phát) ở tỉnh đến, Toàn Nhất sẽ liên hệ với Người nhận đến
                      nhận hàng tại Kho phát.
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ fontFamily: "Times New Roman,Times,serif" }}>
                    <span style={{ fontSize: 20 }}>
                      Tự bố trí phương tiện mang hàng đến gửi và nhận tại hệ
                      thống của Toàn Nhất sẽ tiết kiệm tối đa chi phí cho khách
                      hàng.
                    </span>
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
