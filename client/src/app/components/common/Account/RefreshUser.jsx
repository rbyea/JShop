import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getCurrentUser } from "../../../store/usersSlice";
// import InputField from "../../ui/Form/InputField";

const RefreshUser = (props) => {
  // const { userId } = useParams();
  // const currentUser = useSelector(getCurrentUser(userId));

  return (
    <div className="col-lg-9">
      <div className="d-flex align-item-center title mb-3">
        <h5 className="m-0 font-weight-normal">Настройки</h5>
      </div>
      <div className="p-4 bg-dark">
        <div className="row gutter-1">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput2">Last Name</label>
              <input
                id="exampleInput2"
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput3">Company</label>
              <input
                id="exampleInput3"
                type="text"
                className="form-control"
                placeholder="Company"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInput4">Street</label>
              <input
                id="exampleInput4"
                type="text"
                className="form-control"
                placeholder="Street"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInput5">Zip</label>
              <input
                id="exampleInput5"
                type="text"
                className="form-control"
                placeholder="Zip"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput6">Telephone</label>
              <input
                id="exampleInput6"
                type="text"
                className="form-control"
                placeholder="Telephone"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput7">Email</label>
              <input
                id="exampleInput7"
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="row gutter-1">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="exampleInput8">Old Password</label>
              <input
                id="exampleInput8"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput9">New Password</label>
              <input
                id="exampleInput9"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInput10">Retype New Password</label>
              <input
                id="exampleInput10"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-4">
        <a href="#" className="btn btn-link">
          Cencel
        </a>
        <a href="#" className="btn btn-light">
          Save Changes
        </a>
      </div>
    </div>
  );
};

export default RefreshUser;
