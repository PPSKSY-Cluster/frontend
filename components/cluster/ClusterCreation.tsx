import { FormEvent, useLayoutEffect, useRef } from "react";
import axios from "node_modules/axios/index";

const ClusterCreation = () => {
  const formRef = useRef<HTMLFormElement>();
  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  useLayoutEffect(() => {
    if (nameRef?.current) {
      nameRef.current.focus();
    }
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/cresources/",
        {
          name: nameRef.current.value.trim(),
          description: descriptionRef.current.value.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjU1MTI1NTI3LCJ1c2VybmFtZSI6ImZvbyJ9.ZBDkby7NBxAW5jWtcwmo1BFFPPqHGUYkIxowqPgKMnQ",
          },
        }
      );
      response.status === 201 ? alert("Cluster succesfully created!") : alert("Uups! Something went wrong!");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">Neues Cluster erstellen</h2>
      <form onSubmit={onSubmit} ref={formRef}>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" ref={nameRef} required />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleInputPassword1">Beschreibung</label>
          <textarea className="form-control" ref={descriptionRef} required />
        </div>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button type="submit" className="btn btn-primary float-right">
            Erstellen
          </button>
        </div>
      </form>
    </div>
  );
};
export default ClusterCreation;
