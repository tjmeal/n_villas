"use client";
import Image from "next/image";
import React from "react";
import {useEffect} from "react";
const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
      <>
        <section className="footer d-none d-xl-block">
          <div className="container-fluid footer-container">
            <div className="row">
              <div className="offset-xl-1 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Image
                        src="/images/logo2.svg"
                        alt="logo"
                        height={35}
                        width={129}
                    />
                  </div>
                  <div className="footer-address">
                    <p>
                      Ikarias 2, Markopoulo Oropu <br /> Greece PC 19015
                    </p>
                    <p className="contact-number mb-0">
                      <a href="tel:+306947484950">(+30) 6947484950</a>
                    </p>
                    <p className="contact-email mb-0">
                      <a href="mailto:info@grondas.com">info@grondas.com</a>
                    </p>
                  </div>
                  <div className="footer-social">
                    {/* <ul className="list-unstyled list-inline">
                    {socialMediaData.map((media) => (
                      <li
                        key={media.id}
                        className="list-inline-item"
                      >
                        <Link href={media.path}>{media.icon}</Link>
                      </li>
                    ))}
                  </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-2">
                {/* <div className="footer-widget">
                <h5>Pages</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/"
                      className="footer-link"
                    >
                      Home Page 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/homepage2"
                      className="footer-link"
                    >
                      Home Page 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="footer-link"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="footer-link"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/search"
                      className="footer-link"
                    >
                      Search
                    </Link>
                  </li>
                </ul>
              </div> */}
              </div>
              <div className="col-xl-2">
                {/* <div className="footer-widget">
                <h5>Company Details</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/property"
                      className="footer-link"
                    >
                      Listing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/1"
                      className="footer-link"
                    >
                      Property Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/agent"
                      className="footer-link"
                    >
                      Agent List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/agent/1"
                      className="footer-link"
                    >
                      Agent Profile
                    </Link>
                  </li>
                </ul>
              </div> */}
              </div>
              <div className="col-xl-2">
                {/* <div className="footer-widget">
                <h5>Other Pages</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/blogs"
                      className="footer-link"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs/10-Delightful-Dining-Room-Decor-Trends-for-Spring"
                      className="footer-link"
                    >
                      Blog-single
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="footer-link"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/license"
                      className="footer-link"
                    >
                      License
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/not-Found"
                      className="footer-link"
                    >
                      404 Page
                    </Link>
                  </li>
                </ul>
              </div> */}
              </div>
              <div className="col-xl-2">
                {/* <div className="footer-widget">
                <h5>Others</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#login"
                      role="button"
                      className="footer-link"
                    >
                      Log In
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#otp"
                      role="button"
                      className="footer-link"
                    >
                      Enter OTP
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#newPassword"
                      role="button"
                      className="footer-link"
                    >
                      New password
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#resetPassword"
                      role="button"
                      className="footer-link"
                    >
                      Reset password
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#createAccount"
                      role="button"
                      className="footer-link"
                    >
                      Create Account
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
            {/* <div className="row">
            <div className="offset-1 col-11">
              <p className="footer-copyright">RealStatic Limited © {new Date().getFullYear()}</p>
            </div>
          </div> */}
          </div>
        </section>
        {/*For Tablet */}
        <section className="footer d-none d-sm-block d-xl-none">
          <div className="container-fluid footer-container">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Image
                        src="/images/logo2.svg"
                        alt="logo"
                        height={35}
                        width={129}
                    />
                  </div>
                  <div className="footer-address">
                    <p>
                      Ikarias 2, Markopoulo Oropu <br /> Greece PC 19015
                    </p>
                    <p className="contact-number mb-0">
                      <a href="tel:+306947484950">(+30) 6947484950</a>
                    </p>
                    <p className="contact-email mb-0">
                      <a href="mailto:info@grondas.com">info@grondas.com</a>
                    </p>
                  </div>
                  {/* <div className="footer-social">
                  <ul className="list-unstyled list-inline">
                    {socialMediaData.map((media) => (
                      <li
                        key={media.id}
                        className="list-inline-item"
                      >
                        <Link href={media.path}>{media.icon}</Link>
                      </li>
                    ))}
                  </ul>
                  <p className="footer-copyright">RealStatic Limited © {new Date().getFullYear()}</p>
                </div> */}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row row-cols-2 gutter-5">
                  <div className="col">
                    {/* <div className="footer-widget">
                    <h5>Pages</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/"
                          className="footer-link"
                        >
                          Home Page 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/homepage2"
                          className="footer-link"
                        >
                          Home Page 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="footer-link"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="footer-link"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/search"
                          className="footer-link"
                        >
                          Search
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                  <div className="col">
                    {/* <div className="footer-widget">
                    <h5>Company Details</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/property"
                          className="footer-link"
                        >
                          Listing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/property/1"
                          className="footer-link"
                        >
                          Property Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/agent"
                          className="footer-link"
                        >
                          Agent List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/agent/1"
                          className="footer-link"
                        >
                          Agent Profile
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                  <div className="col">
                    {/* <div className="footer-widget">
                    <h5>Other Pages</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/blogs"
                          className="footer-link"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blogs/10-Delightful-Dining-Room-Decor-Trends-for-Spring"
                          className="footer-link"
                        >
                          Blog-single
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          className="footer-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/license"
                          className="footer-link"
                        >
                          License
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/not-found"
                          className="footer-link"
                        >
                          404 Page
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                  <div className="col">
                    {/* <div className="footer-widget">
                    <h5>Others</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#login"
                          role="button"
                          className="footer-link"
                        >
                          Log In
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#otp"
                          role="button"
                          className="footer-link"
                        >
                          Enter OTP
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#newPassword"
                          role="button"
                          className="footer-link"
                        >
                          New password
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#resetPassword"
                          role="button"
                          className="footer-link"
                        >
                          Reset password
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#createAccount"
                          role="button"
                          className="footer-link"
                        >
                          Create Account
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*For Mobile */}
        <section className="footer d-block d-sm-none ">
          <div className="container-fluid footer-container">
            <div className="row gutter-5">
              <div className="col-12">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Image
                        src="/images/logo2.svg"
                        alt="logo"
                        height={35}
                        width={129}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>Pages </h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/"
                          className="footer-link"
                        >
                          Home Page 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/homepage2"
                          className="footer-link"
                        >
                          Home Page 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="footer-link"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="footer-link"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/search"
                          className="footer-link"
                        >
                          Search
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Company Details</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/property"
                          className="footer-link"
                        >
                          Listing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/property/1"
                          className="footer-link"
                        >
                          Property Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/agent"
                          className="footer-link"
                        >
                          Agent List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/agent/1"
                          className="footer-link"
                        >
                          Agent Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Other Pagess</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/blogs"
                          className="footer-link"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blogs/10-Delightful-Dining-Room-Decor-Trends-for-Spring"
                          className="footer-link"
                        >
                          Blog-single
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          className="footer-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/license"
                          className="footer-link"
                        >
                          License
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/not-found"
                          className="footer-link"
                        >
                          404 Page
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Others</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#login"
                          role="button"
                          className="footer-link"
                        >
                          Log In
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#otp"
                          role="button"
                          className="footer-link"
                        >
                          Enter OTP
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#newPassword"
                          role="button"
                          className="footer-link"
                        >
                          New password
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#resetPassword"
                          role="button"
                          className="footer-link"
                        >
                          Reset password
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          href="#createAccount"
                          role="button"
                          className="footer-link"
                        >
                          Create Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
              <div className="col-12">
                <div className="footer-widget">
                  <div className="footer-address">
                    <p>
                      Ikarias 2, Markopoulo Oropu <br /> Greece PC 19015
                    </p>
                    <p className="contact-number mb-0">
                      <a href="tel:+306947484950">(+30) 6947484950</a>
                    </p>
                    <p className="contact-email mb-0">
                      <a href="mailto:info@grondas.com">info@grondas.com</a>
                    </p>
                  </div>
                  <div className="footer-social">
                    {/* <ul className="list-unstyled list-inline">
                    {socialMediaData.map((media) => (
                      <li
                        key={media.id}
                        className="list-inline-item"
                      >
                        <a href={media.path}>{media.icon}</a>
                      </li>
                    ))}
                  </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="footer-copyright">RealStatic Limited © {new Date().getFullYear()}</p>
        </section>
      </>
  );
};

export default Footer;
