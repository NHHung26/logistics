import React from "react";

export default function ThuCuoc() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Thu cước đầu người nhận">
              Thu cước đầu người nhận
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
                <strong itemProp="name">Thu cước đầu người nhận</strong>
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
                <h1 className="title-head">Thu cước đầu người nhận</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: 20 }}>
                    <span style={{ lineHeight: "107%" }}>
                      <span style={{ fontFamily: 'Calibri,"sans-serif"' }}>
                        <span lang="VI">
                          <span style={{ lineHeight: "107%" }}>
                            <span
                              style={{
                                fontFamily: '"Times New Roman","serif"',
                              }}
                            >
                              Là dịch vụ mà Toàn Nhất sẽ thực hiện thu cước dịch
                              vụ phát sinh ngay khi giao hàng cho người nhận.
                              Đây là dịch vụ Người gửi đã thỏa thuận với Người
                              nhận thanh toán và ủy thác cho Toàn Nhất việc thu
                              cước phí vận chuyển.
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
  );
}
