import React from "react";

export default function HoTroKhacHang() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Hỗ trợ khách hàng">
              Hỗ trợ khách hàng
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
                <strong itemProp="name">Hỗ trợ khách hàng</strong>
                <meta itemProp="position" content={2} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="page padding-top-40">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Hướng dẫn sử dụng</p>
                <a href="/huong-dan-su-dung" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Câu hỏi thường gặp</p>
                <a href="/cau-hoi-thuong-gap" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Gửi thông tin khiếu nại</p>
                <a href="/gui-thong-tin-khieu-nai" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Góp ý dịch vụ</p>
                <a href="/gop-y-dich-vu" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
