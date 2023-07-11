import React from "react";

export default function ThuHoTienHang() {
  return (
    <div>
      <div>
        <section className="bread-crumb">
          <div className="container">
            <div className="title-command-wrapper">
              <h2 className="title" title="Thu hộ tiền hàng (COD)">
                Thu hộ tiền hàng (COD)
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
                  <strong itemProp="name">Thu hộ tiền hàng (COD)</strong>
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
                  <h1 className="title-head">Thu hộ tiền hàng (COD)</h1>
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
                                Là dịch vụ mà Toàn Nhất sẽ thực hiện thu hộ số
                                tiền mà người nhận phải trả cho Người gửi (người
                                bán hàng) ngay khi giao hàng cho người nhận. Đây
                                là dịch vụ Người gửi đã thỏa thuận với Người
                                nhận số tiền mua hàng và ủy thác cho Toàn Nhất
                                việc thu hộ số tiền hàng này. Toàn Nhất có trách
                                nhiệm hoàn trả lại người gửi số tiền hàng sau
                                khi trừ đi cước vận chuyển và phí thu hộ.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ lineHeight: "107%" }}>
                        <span style={{ fontFamily: 'Calibri,"sans-serif"' }}>
                          <span lang="VI" style={{ fontSize: "13.0pt" }}>
                            <span style={{ lineHeight: "107%" }}>
                              <span
                                style={{
                                  fontFamily: '"Times New Roman","serif"',
                                }}
                              >
                                <span style={{ fontSize: 18 }}>
                                  Dịch vụ COD (thu hộ tiền hàng) giúp khách hàng
                                  có nhiều chọn lựa hơn về phương thức thanh
                                  toán, thuận tiện trong việc kinh doanh dịch vụ
                                  của mình mà không ph
                                </span>
                                ải lo lắng đến vấn đề thu tiền hàng khi bán hàng
                                cho người mua ở xa.
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
      ;
    </div>
  );
}
