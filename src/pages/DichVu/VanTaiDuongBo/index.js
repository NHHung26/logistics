import React from "react";

export default function VanTaiDuongBo() {
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
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Nhận / gửi hàng tại Toàn Nhất</p>
                <a href="/van-tai-duong-bo-toan-quoc" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Nhận/ phát tại địa chỉ</p>
                <a href="/nhan-phat-tai-dia-chi" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Thuê xe nguyên chuyến</p>
                <a href="/thue-xe-nguyen-chuyen" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Giao hàng siêu thị</p>
                <a href="/giao-hang-sieu-thi" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ vận chuyển</p>
                <a href="/dich-vu-van-chuyen" title="Chi tiết">
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
