import React from "react";

export default function DichVuDongGoi() {
  return (
    <div>
      <div>
        <section className="bread-crumb">
          <div className="container">
            <div className="title-command-wrapper">
              <h2 className="title" title="Dịch vụ đóng gói đai, kiện">
                Dịch vụ đóng gói đai, kiện
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
                  <strong itemProp="name">Dịch vụ đóng gói đai, kiện</strong>
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
                  <h1 className="title-head">Dịch vụ đóng gói đai, kiện</h1>
                </div>
                <div className="content-page rte margin-bottom-40 clearfix">
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: 20 }}>
                      <span style={{ lineHeight: "107%" }}>
                        <span style={{ fontFamily: 'Calibri,"sans-serif"' }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span
                              style={{
                                fontFamily: '"Times New Roman","serif"',
                              }}
                            >
                              Đây
                            </span>
                          </span>
                          <span lang="VI">
                            <span style={{ lineHeight: "107%" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman","serif"',
                                }}
                              >
                                {" "}
                                là gói dịch vụ quan trọng trong vận chuyển hàng
                                hóa, đặc biệt là các loại hàng có yêu cầu điều
                                kiện bảo quản cao, dễ hư hỏng trong quá trình
                                vận chuyển.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
