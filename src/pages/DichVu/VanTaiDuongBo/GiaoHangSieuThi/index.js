import React from "react";

export default function GiaoHangSieuThi() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Giao hàng siêu thị">
              Giao hàng siêu thị
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
                <strong itemProp="name">Giao hàng siêu thị</strong>
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
                <h1 className="title-head">Giao hàng siêu thị</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix">
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: 18 }}>
                    <span style={{ lineHeight: "107%" }}>
                      <span style={{ fontFamily: 'Calibri,"sans-serif"' }}>
                        <span lang="VI">
                          <span style={{ lineHeight: "107%" }}>
                            <span
                              style={{
                                fontFamily: '"Times New Roman","serif"',
                              }}
                            >
                              Là việc Toàn Nhất thực hiện giao hàng tại hệ thống
                              Siêu thị (kênh hiện đại). Trong đó, đảm bảo các
                              yêu cầu về điều kiện giao hàng chặt chẽ như: phân
                              loại hàng giao theo yêu cầu của Siêu thị khi xếp
                              lên Pallet, đối kiểm và việc xuất trình, ký duyệt
                              chứng từ, hoàn đầy đủ chứng từ theo đúng cam kết
                              của Khách hàng với Siêu thị.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: 18 }}>
                    <span style={{ lineHeight: "107%" }}>
                      <span style={{ fontFamily: 'Calibri,"sans-serif"' }}>
                        <span lang="VI">
                          <span style={{ lineHeight: "107%" }}>
                            <span
                              style={{
                                fontFamily: '"Times New Roman","serif"',
                              }}
                            >
                              Là một nhà cung cấp dịch vụ chuyên nghiệp, Toàn
                              Nhất luôn đáp ứng tốt nhu cầu của khách hàng trong
                              nhiều năm qua khi giao hàng vào hệ thống Siêu thị
                              trên toàn quốc.
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
