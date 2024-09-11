import React from "react";

function About() {
  return (
    <div>
      {/* //header */}
      {/*/breadcrumb-bg*/}
      <div class="breadcrumb-bg w3l-inner-page-breadcrumb py-5">
        <div class="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <h2 class="title pt-5">About</h2>
          <ul class="breadcrumbs-custom-path mt-3 text-center">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">
              <span class="fa fa-arrow-right mx-2" aria-hidden="true"></span>{" "}
              About{" "}
            </li>
          </ul>
        </div>
      </div>
      {/*//breadcrumb-bg*/}

      {/* //w3l-inner-page-breadcrumb*/}
      <section class="w3l-about-ab" id="about">
        <div class="midd-w3 py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
              <div class="col-lg-6 pl-lg-5 align-self">
                <h6 class="title-subhny mb-2">
                  <span>Our History</span>
                </h6>
                <h3 class="title-w3l mb-4">Industries 1990-2019</h3>
                <p class="">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Learn more about
                  our work! Lorem ipsum viverra feugiat.consectetur adipisicing
                  dolor et amet.
                </p>
                <p class="mt-4">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Learn more about
                  our work.
                </p>
                <a
                  href="about.html"
                  class="btn btn-style btn-primary mt-lg-5 mt-4"
                >
                  Read More
                </a>
              </div>
              <div class="col-lg-6 left-wthree-img mt-lg-0 mt-5 pl-lg-5">
                <img
                  src="assets/images/g6.jpg"
                  alt=""
                  class="img-fluid radius-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /w3l-content-2*/}
      <section class="w3l-specification-6 py-5">
        {/* /specification-6*/}
        <div class="specification-6-mian py-lg-5 py-md-4">
          <div class="container">
            <div class="align-counter-6-inf-cols row">
              <div class="counter-6-inf-left col-lg-6">
                <h3 class="title-w3l two">
                  We stay current with the latest applications and building
                  technologies
                </h3>
              </div>
              <div class="counter-6-inf-right col-lg-6">
                <div class="specification">
                  <div class="specification-icon">
                    <span class="fa fa-linode"></span>
                  </div>
                  <div class="specification-info">
                    <h6>
                      <a href="blog-single.html">
                        Basic and Industrial Chemicals
                      </a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, Ea consequuntur illum facere
                      aperiam sequi optio adipisicing elit.
                    </p>
                  </div>
                </div>
                <div class="specification">
                  <div class="specification-icon">
                    <span class="fa fa-tint"></span>
                  </div>
                  <div class="specification-info">
                    <h6>
                      <a href="blog-single.html">Oil and Gas Engineering</a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, Ea consequuntur illum facere
                      aperiam sequi optio elit.
                    </p>
                  </div>
                </div>
                <div class="specification">
                  <div class="specification-icon">
                    <span class="fa fa-binoculars"></span>
                  </div>
                  <div class="specification-info">
                    <h6>
                      <a href="blog-single.html">Petrolium Refinery</a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, Ea consequuntur illum facere
                      aperiam sequi optio adipisicing elit.
                    </p>
                  </div>
                </div>
                <div class="specification last-one">
                  <div class="specification-icon">
                    <span class="fa fa-podcast"></span>
                  </div>
                  <div class="specification-info">
                    <h6>
                      <a href="blog-single.html">
                        Construction and Engineering
                      </a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, Ea consequuntur illum facere
                      aperiam sequi optio consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* middle */}
      <div class="w3l-middle py-5">
        <div class="container py-lg-5 py-md-4">
          <div class="row no-gutters">
            <div class="welcome-left pr-lg-5">
              <h6 class="title-subhny two mb-2">
                <span>More Info</span>
              </h6>
              <h3 class="title-w3l two mb-4">
                We Believe In Building Long Lasting Our Business Relationships.
              </h3>
              <p class="pr-lg-5">
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio adipisicing.Lorem ipsum dolor sit amet,Ea
                consequuntur illum facere aperiam sequi optio adipisicing.{" "}
              </p>
              <div class="buttons mt-md-5 mt-4">
                <a class="btn btn-style btn-white mr-3" href="about.html">
                  Read More{" "}
                  <span
                    class="fa fa-angle-double-right ml-2"
                    aria-hidden="true"
                  ></span>
                </a>
                <a class="btn btn-style btn-primary" href="about.html">
                  {" "}
                  Get a quote{" "}
                  <span
                    class="fa fa-angle-double-right ml-2"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
            <div class="welcome-left-frm pr-lg-5 mt-lg-0 mt-5">
              <div class="w3request-form">
                <form action="" method="post">
                  <h4 class="title-w3l">
                    Request a <span>Quote</span>
                  </h4>
                  <p class="frm-p mt-3">
                    Fill all information details to consult with us to get
                    sevices from us{" "}
                  </p>

                  <div class="form-style-w3ls mt-4">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      required="required"
                    />

                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      required=""
                    />

                    <input
                      type="text"
                      name="Phone"
                      placeholder="Phone Number"
                      required=""
                    />

                    <button class="btn btn-style btn-primary w-100 mt-3">
                      Get a Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //middle */}
      {/*/team-sec*/}
      <section class="w3l-team-main" id="team">
        <div class="team py-5">
          <div class="container py-lg-5">
            <div class="row team-row">
              <div class="col-lg-6 team-wrap">
                <div class="title-content text-left">
                  <h6 class="title-subhny mb-2">
                    <span>Skilled Team</span>
                  </h6>
                  <h3 class="title-w3l mb-4">Our Team</h3>
                  <p>
                    Lorem ipsum dolor sit amet, Ea consequuntur illum facere
                    aperiam sequi optio consectetur.Pellen tesque libero ut
                    justo, ultrices in ligula. Semper at tempufddfel. Learn more
                    about our work,Ea consequuntur illum facere aperiam sequi
                    optio consectetur
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-6 team-wrap mb-lg-5 mb-4 mt-lg-0 mt-5">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team4.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Thomas Smith
                  </a>
                  <p>Industrial Engineer</p>
                </div>
              </div>
              <div class="col-lg-3 col-6 team-wrap mb-lg-5 mb-4 mt-lg-0 mt-5">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team3.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Vincent Smith
                  </a>
                  <p>Senior Engineer</p>
                </div>
              </div>
              <div class="col-lg-3 col-6 team-wrap mt-lg-0 mt-4">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team1.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Luke jacobs
                  </a>
                  <p>Industrial Engineer</p>
                </div>
              </div>
              {/* end team member */}

              <div class="col-lg-3 col-6 team-wrap mt-lg-0 mt-4">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team3.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Claire olson
                  </a>
                  <p>Senior Engineer</p>
                </div>
              </div>
              {/* end team member */}

              <div class="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                <div class="team-member last text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team2.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Phillip hunt
                  </a>
                  <p>Industrial Engineer</p>
                </div>
              </div>
              {/* end team member */}

              <div class="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                <div class="team-member last text-center">
                  <div class="team-img">
                    <img
                      src="assets/images/team4.jpg"
                      alt=""
                      class="radius-image"
                    />
                    <div class="overlay-team">
                      <div class="team-details text-center">
                        <div class="socials mt-20">
                          <a href="#url">
                            <span class="fa fa-facebook-f"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-twitter"></span>
                          </a>
                          <a href="#url">
                            <span class="fa fa-instagram"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#url" class="team-title">
                    Sara grant
                  </a>
                  <p>Senior Engineer </p>
                </div>
              </div>
              {/* end team member */}
            </div>
          </div>
        </div>
      </section>
      {/*//team-sec*/}
    </div>
  );
}

export default About;
