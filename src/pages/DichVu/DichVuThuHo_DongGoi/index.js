import React from "react";

export default function DichVuThuHo() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Dịch vụ thu hộ, đóng gói">
              Dịch vụ thu hộ, đóng gói
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
                <strong itemProp="name">Dịch vụ thu hộ, đóng gói</strong>
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
                <p>Thu cước đầu người nhận</p>
                <a href="/thu-cuoc-dau-nguoi-nhan" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Thu hộ tiền hàng (COD)</p>
                <a href="/thu-ho-tien-hang-cod" title="Chi tiết">
                  Chi tiết <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="service-create">
                <p>Dịch vụ đóng gói, đai kiện</p>
                <a href="/dich-vu-dong-goi-dai-kien" title="Chi tiết">
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
