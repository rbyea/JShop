import React from "react";

const Footer = (props) => {
  return (
    <section className="footer py-5 bg-dark section-padding">
      <div className="container">
        <div className="row py-lg-4">
          <div className="col-lg-2 col-sm-6">
            <div className="footer-brand">
              <img
                className="img-fluid"
                src="https://askbootstrap.com/preview/jarda/img/logo.svg"
              />
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <h6 className="text-gray-900">PRODUCTS</h6>
            <ul>
              <li>
                <a href="#">Page Builder</a>
              </li>
              <li>
                <a href="#">UI Kit</a>
              </li>
              <li>
                <a href="#">Styleguide</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6">
            <h6 className="text-gray-900">SERVICES</h6>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Pagebuilder</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6">
            <h6 className="text-gray-900">CONNECT</h6>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Page Builder</a>
              </li>
              <li>
                <a href="#">UI Kit</a>
              </li>
              <li>
                <a href="#">Styleguide</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h6 className="text-gray-900">Subscribe to our Newsletter</h6>
            <form className="form-inline newsletter-form mb-1">
              <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <small>
              <a className="text-white-50" href="coupons.html">
                Register now to get updates on
                <span className="text-white">Offers and Coupons</span>
              </a>
            </small>
            <div className="app mt-4 pt-2">
              <h6 className="text-gray-900">DOWNLOAD APP</h6>
              <a href="#">
                <img
                  className="img-fluid"
                  src="https://askbootstrap.com/preview/jarda/img/google.png"
                />
              </a>
              <a href="#">
                <img
                  className="img-fluid"
                  src="https://askbootstrap.com/preview/jarda/img/apple.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
