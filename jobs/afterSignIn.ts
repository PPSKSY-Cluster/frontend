import Router from "next/router";

export const openJob = () => {
  const job = localStorage.getItem("afterSignIn");
  if (job !== "") {
    const clusterJob = /cluster:(.*)/.exec(job);
    if (clusterJob) {
      const id = clusterJob[1];
      localStorage.setItem("afterSignIn", "");
      return Router.push(`/cluster/${id}`);
    }
    const reservationJob = /reservation:(.*)/.exec(job);
    if (reservationJob) {
      const id = reservationJob[1];
      localStorage.setItem("afterSignIn", "");
      return Router.push(`/reservations/${id}`);
    }
  }
  Router.push("/cluster");
};
