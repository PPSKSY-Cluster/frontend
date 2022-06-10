const ClusterCreation = () => {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3">Neues Cluster erstellen</h2>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleInputPassword1">Beschreibung</label>
          <textarea className="form-control" />
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
