import React from "react";

export default function PhuongThucVanTaiKhac() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Phương thức vận tải khác">
              Phương thức vận tải khác
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
                <strong itemProp="name">Phương thức vận tải khác</strong>
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
                <p>Vận chuyển quốc tế</p>
                <a href="#" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ vận tải đường bay</p>
                <a href="#" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ vận tải đường sắt</p>
                <a href="#" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ vận tải đường thủy</p>
                <a href="#" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ vận tải hàng hóa giá trị cao</p>
                <a href="#" title="Chi tiết">
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
