import { FC } from "react";
import React from "react";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import UserAPI from "api/user";
import Router from "next/router";

const Options: FC = () => {
  const onDeleteClick = async () => {
    try {
      const response = await UserAPI.delete(localStorage.getItem("userId"));
      response.status !== 200
        ? alert("User successfully deleted!")
        : alert("Uups! Something went wrong!");
    } catch (error) {
      console.log(error);
    }
    //logout
    localStorage.clear();
    Router.push("/");
  };

  return (
    <>
      <div className="container-fluid p-4">
        <h2 className="mb-3"> {localStorage.getItem("username")}</h2>
        <a
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#userDeletion"
        >
          Account löschen
        </a>
      </div>
      <ConfirmDialog
        id={"userDeletion"}
        accept={{ caption: "Löschen", onClick: onDeleteClick }}
        title={"User Löschen"}
        text={"Möchten Sie diesen Account wirklich löschen?"}
      />
    </>
  );
};
export default Options;
