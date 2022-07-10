import Router from "next/router";

export const openCluster = () => {
  const job = localStorage.getItem("afterSignIn");
  if (job !== "") {
    const clusterJob = /cluster:(.*)/.exec(job);
    if (clusterJob) {
      const id = clusterJob[1];
      localStorage.setItem("afterSignIn", "");
      return Router.push(`/cluster/${id}`);
    }
  }
  Router.push("/cluster");
};

export const openReservation = () => {};
