import React from "react";

export default function HuongDanSuDung() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Hướng dẫn sử dụng">
              Hướng dẫn sử dụng
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
                <strong itemProp="name">Hướng dẫn sử dụng</strong>
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
                <h1 className="title-head">Hướng dẫn sử dụng</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
