import React from "react";

export default function DangKi() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Đăng ký tài khoản">
              Đăng ký tài khoản
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
                <strong itemProp="name">Đăng ký tài khoản</strong>
                <meta itemProp="position" content={2} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container padding-top-40">
        <h1 className="title-head text-center">Đăng ký tài khoản</h1>
        <div className="row">
          <div className="col-lg-12">
            <div className="page-login">
              <div id="login">
                <div className="text-center">
                  <span>Nếu chưa có tài khoản vui lòng đăng ký tại đây</span>
                </div>
                <div className="social-login text-center margin-bottom-10 margin-top-15">
                  <a
                    href="javascript:void(0)"
                    className="social-login--facebook"
                    onclick="loginFacebook()"
                  >
                    <img
                      width="129px"
                      height="37px"
                      alt="facebook-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="social-login--google"
                    onclick="loginGoogle()"
                  >
                    <img
                      width="129px"
                      height="37px"
                      alt="google-login-button"
                      src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    />
                  </a>
                </div>
                <form
                  method="post"
                  action="/account/register"
                  id="customer_register"
                  acceptCharset="UTF-8"
                >
                  <input
                    name="FormType"
                    type="hidden"
                    defaultValue="customer_register"
                  />
                  <input name="utf8" type="hidden" defaultValue="true" />
                  <input
                    type="hidden"
                    id="Token-646bffd990ed4030b6fc17628c45783d"
                    name="Token"
                  />
                  <div className="form-signup"></div>
                  <div className="form-signup clearfix">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                        <div className="row">
                          <div className="col-md-12">
                            <fieldset className="form-group">
                              <label>Họ</label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                name="lastName"
                                id="lastName"
                                placeholder
                                required
                                data-validation-error-msg="Không được để trống"
                                data-validation="required"
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-12">
                            <fieldset className="form-group">
                              <label>Tên</label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                name="firstName"
                                id="firstName"
                                placeholder
                                required
                                data-validation-error-msg="Không được để trống"
                                data-validation="required"
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-12">
                            <fieldset className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control form-control-lg"
                                data-validation="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                data-validation-error-msg="Email sai định dạng"
                                name="email"
                                id="email"
                                placeholder
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-12">
                            <fieldset className="form-group">
                              <label>Mật khẩu</label>
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                name="password"
                                id="password"
                                placeholder
                                required
                                data-validation-error-msg="Không được để trống"
                                data-validation="required"
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div
                          className="col-xs-12 text-center"
                          style={{ marginTop: 15, padding: 0 }}
                        >
                          <button
                            type="submit"
                            value="Đăng ký"
                            className="btn btn-style btn-blues"
                          >
                            Đăng ký
                          </button>
                          <a
                            href="/account/login"
                            className="btn-link-style btn-register"
                            style={{
                              marginLeft: 20,
                              color: "#e85997",
                              textDecoration: "underline",
                            }}
                          >
                            Đăng nhập
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
