import React from "react";

function Contact() {
  return (
    <div>
      {/*/breadcrumb-bg*/}
      <div class="breadcrumb-bg w3l-inner-page-breadcrumb py-5">
        <div class="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <h2 class="title pt-5">Contact Us</h2>
          <ul class="breadcrumbs-custom-path mt-3 text-center">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">
              <span class="fa fa-arrow-right mx-2" aria-hidden="true"></span>{" "}
              Contact{" "}
            </li>
          </ul>
        </div>
      </div>
      {/*//breadcrumb-bg*/}
      {/* contacts-5-grid */}
      <div class="w3l-contact-10 py-5" id="contact">
        <div class="form-41-mian py-md-5 py-3">
          <div class="container">
            <div class="heading">
              <h6 class="title-subhny mb-2">
                <span>Contact our team</span>
              </h6>
              <h3 class="title-w3l mb-2">Get in Touch with Us</h3>
              <p class="mb-5">
                If you have a question regarding our services, feel free to
                contact us using the form below.
              </p>
            </div>
            <div class="contacts-5-grid-main mb-5">
              <div class="contacts-5-grid mb-lg-5">
                <div class="map-content-5">
                  <section class="tab-content">
                    <div class="container">
                      <div class="d-grid grid-col-2">
                        <div class="contact-type">
                          <div class="address-grid">
                            <h6>Address</h6>
                            <p>
                              #302, 5th Floor, ALHK-2247 ek, Settlers Lane, New
                              York.
                            </p>
                            <span class="pos-icon">
                              <span class="fa fa-map"></span>
                            </span>
                          </div>
                          <div class="address-grid">
                            <h6>Email</h6>
                            <a href="mailto:mailone@example.com" class="link1">
                              mailone@example.com
                            </a>
                            <a href="mailto:mailtwo@example.com" class="link1">
                              mailtwo@example.com
                            </a>
                            <span class="pos-icon">
                              <span class="fa fa-envelope"></span>
                            </span>
                          </div>
                          <div class="address-grid">
                            <h6>Phone</h6>
                            <a href="tel:+12 324-016-695" class="link1">
                              +12 324-016-695
                            </a>
                            <a href="tel:+44 224-058-545" class="link1">
                              +44 224-058-545
                            </a>
                            <span class="pos-icon">
                              <span class="fa fa-headphones"></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div class="form-inner-cont pt-lg-5">
              <form
                action="https://sendmail.w3layouts.com/submitForm"
                method="post"
                class="signin-form"
              >
                <div class="form-grids">
                  <div class="form-input">
                    <input
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Enter your name *"
                      required=""
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="text"
                      name="w3lSubject"
                      id="w3lSubject"
                      placeholder="Enter subject "
                      required
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Enter your email *"
                      required
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="text"
                      name="w3lPhone"
                      id="w3lPhone"
                      placeholder="Enter your Phone Number *"
                      required
                    />
                  </div>
                </div>
                <div class="form-input">
                  <textarea
                    name="w3lMessage"
                    id="w3lMessage"
                    placeholder="Type your query here"
                    required=""
                  ></textarea>
                </div>
                <div class="text-right">
                  <button class="btn btn-style btn-effect">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* //contacts-5-grid */}
      </div>

      <div class="contacts-sub-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
