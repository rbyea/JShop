import React from "react";

const FavoritePage = (props) => {
  return (
    <div className="col-lg-9">
      <div className="d-flex align-item-center title mb-3">
        <h5 className="m-0 font-weight-normal">Favorite</h5>
        <div className="ml-auto d-flex align-items-center">
          <div className="dropdown ml-2">
            <button
              className="btn btn-sm btn-outline-light dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Release Date
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenu2"
            >
              <button className="dropdown-item" type="button">
                Relevance
              </button>
              <button className="dropdown-item" type="button">
                Alphabetical
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/1.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Pathway</h6>
                <p className="mb-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <div className="bg-primary d-inline-block text-center px-2 py-1 text-white">
                    -20%
                  </div>
                  <s className="text-white-50 mx-1">$34.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/2.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">AER Memories of Old</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <s className="text-white-50 mx-1">$60.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/3.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Stranger Things 3: The Game</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <span className="text-white">$676.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/4.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Stranger Things 3: The Game</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <div className="bg-danger d-inline-block text-center px-2 py-1 text-white">
                    -13%
                  </div>
                  <s className="text-white-50 mx-1">$87.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/5.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Pathway</h6>
                <p className="mb-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <div className="bg-primary d-inline-block text-center px-2 py-1 text-white">
                    -20%
                  </div>
                  <s className="text-white-50 mx-1">$34.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/6.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">AER Memories of Old</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <s className="text-white-50 mx-1">$60.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/7.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Stranger Things 3: The Game</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <span className="text-white">$676.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="osahan-card">
            <a href="store-single.html">
              <img className="img-fluid" src="img/list/8.jpg" alt />
              <div className="d-flex">
                <div className="bg-success col text-center p-1 text-white text-uppercase small">
                  <i className="feather-heart mr-1"></i> Favorite
                </div>
                <div className="bg-danger col text-center p-1 text-white text-uppercase small">
                  <i className="feather-trash mr-1"></i> Remove
                </div>
              </div>
              <div className="osahan-card-body mt-3">
                <h6 className="text-white mb-1">Stranger Things 3: The Game</h6>
                <p className="m-0 text-white-50">
                  Free Now - Jun 25 at 08:30 PM
                </p>
                <div className="price mt-3">
                  <div className="bg-danger d-inline-block text-center px-2 py-1 text-white">
                    -13%
                  </div>
                  <s className="text-white-50 mx-1">$87.99</s>
                  <span className="text-white">$27.99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <a href="#" className="btn btn-light btn-lg">
            Load More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
