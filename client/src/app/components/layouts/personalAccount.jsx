import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getCurrentUserId } from "../../store/usersSlice";
import UserPage from "../common/Account/UserPage";
import ArticlePage from "../common/Account/ArticlePage";
import RefreshUser from "../common/Account/RefreshUser";
import FavoritePage from "../common/Account/FavoritePage";
import CreateGame from "../common/Account/CreateGame";

const PersonalAccount = (props) => {
  const { userId, edit } = useParams();
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <>
      {userId === currentUserId ? (
        <section className="py-5 account-page">
          <div className="container">
            <div className="row">
              <ArticlePage />
              {edit === "edit" ? (
                userId === currentUserId ? (
                  <RefreshUser />
                ) : (
                  <Redirect to={`/account/${currentUserId}`} />
                )
              ) : edit === "favorite" ? (
                <FavoritePage />
              ) : edit === "create-game" ? (
                <CreateGame />
              ) : (
                <div className="col-lg-9">
                  <UserPage />
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PersonalAccount;
