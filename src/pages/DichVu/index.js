import React from "react";

export default function DichVu() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Dịch vụ">
              Dịch vụ
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
                <strong itemProp="name">Dịch vụ</strong>
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
                <p>Kho cho thuê, dịch vụ kho</p>
                <a href="/kho-cho-thue-dich-vu-kho" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Vận tải đường bộ toàn quốc</p>
                <a href="/van-tai-duong-bo-toan-quoc-2" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ thu hộ, đóng gói</p>
                <a href="/dich-vu-thu-ho-dong-goi" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Phương thức vận tải khác</p>
                <a href="/phuong-thuc-van-tai-khac" title="Chi tiết">
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
