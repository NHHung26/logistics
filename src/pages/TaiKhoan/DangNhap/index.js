import React from "react";

export default function DangNhap() {
  return (
    <div>
      <section className="bread-crumb">
        <div className="container">
          <div className="title-command-wrapper">
            <h2 className="title" title="Đăng nhập tài khoản">
              Đăng nhập tài khoản
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
                <strong itemProp="name">Đăng nhập tài khoản</strong>
                <meta itemProp="position" content={2} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container padding-top-40 padding-bottom-30">
        <h1 className="title-head">
          <span>Đăng nhập tài khoản</span>
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="page-login margin-bottom-30">
              <div id="login">
                <span>Nếu bạn đã có tài khoản, đăng nhập tại đây.</span>
                <div className="social-login margin-top-15 margin-bottom-10">
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
                  action="/account/login"
                  id="customer_login"
                  acceptCharset="UTF-8"
                >
                  <input
                    name="FormType"
                    type="hidden"
                    defaultValue="customer_login"
                  />
                  <input name="utf8" type="hidden" defaultValue="true" />
                  <div className="form-signup"></div>
                  <div className="form-signup clearfix">
                    <fieldset className="form-group">
                      <label>Email: </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="customer_email"
                        placeholder="Email"
                        required
                        data-validation="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                        data-validation-error-msg="Email sai định dạng"
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Mật khẩu: </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        id="customer_password"
                        data-validation-error-msg="Không được để trống"
                        data-validation="required"
                        placeholder="Mật khẩu"
                      />
                    </fieldset>
                    <div className="pull-xs-left" style={{ marginTop: 15 }}>
                      <input
                        className="btn btn-style btn-blues"
                        type="submit"
                        defaultValue="Đăng nhập"
                      />
                      <a
                        href="/account/register"
                        className="btn-link-style btn-register"
                        style={{
                          marginLeft: 20,
                          color: "#e85997",
                          textDecoration: "underline",
                        }}
                      >
                        Đăng ký
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="recover-password" className="form-signup">
              <span>
                Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
                email.
              </span>
              <form
                method="post"
                action="/account/recover"
                id="recover_customer_password"
                acceptCharset="UTF-8"
              >
                <input
                  name="FormType"
                  type="hidden"
                  defaultValue="recover_customer_password"
                />
                <input name="utf8" type="hidden" defaultValue="true" />
                <div className="form-signup aaaaaaaa"></div>
                <div className="form-signup clearfix">
                  <fieldset className="form-group">
                    <label>Email: </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="Email"
                      id="recover-email"
                      placeholder="Email"
                      data-validation="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                      data-validation-error-msg="Email sai định dạng"
                    />
                  </fieldset>
                </div>
                <div className="action_bottom">
                  <input
                    className="btn btn-style btn-blues"
                    style={{ marginTop: 15 }}
                    type="submit"
                    defaultValue="Lấy lại mật khẩu"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
