import React from "react";

export default function ThueXeNguyenChuyen() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Thuê xe nguyên chuyến">
              Thuê xe nguyên chuyến
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
                <strong itemProp="name">Thuê xe nguyên chuyến</strong>
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
                <h1 className="title-head">Thuê xe nguyên chuyến</h1>
              </div>
              <div className="content-page rte margin-bottom-40 clearfix">
                <p style={{ textAlign: "right" }}>&nbsp;</p>
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
                              Là dịch vụ Khách hàng thỏa thuận thuê để chở lô
                              hàng của mình trên một hoặc nhiều chuyến xe mà
                              không thực hiện ghép thêm hàng của người gửi khác.
                              Đối với gói dịch vụ này, khách hàng có thể&nbsp;
                              niêm phong thùng xe hoặc tự tổ chức chất xếp hàng
                              hóa nhằm đảm bảo yêu cầu riêng biệt của mình.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "center" }}>
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
                              <img
                                data-thumb="original"
                                original-height={496}
                                original-width={747}
                                src="//bizweb.dktcdn.net/100/472/220/files/tnc9.jpg?v=1679538293777"
                                style={{ width: 600, height: 398 }}
                              />
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
                              Dịch vụ thuê xe nguyên chuyến đáp ứng nhu cầu về
                              hàng hóa với số lượng lớn, sự an toàn của hàng hóa
                              có giá trị cao, thời gian lấy hàng theo yêu cầu
                              của người gửi. Giải quyết được nhu cầu về thời
                              gian, sự an toàn, cũng như cá nhân hóa chuyến hàng
                              của người gửi. Đảm bảo chất lượng hàng hóa, dịch
                              vụ vận tải thích hợp với mong muốn của quý khách.
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
