import { useEffect, useState } from "react";
import Main from "components/main/Main";
import { useRouter } from "next/router";
import ClusterForm from "components/cluster/ClusterForm";
import { ICluster } from "types/Cluster";
import ClusterAPI from "api/cluster";
import { setDefaultHeader, validateAccessToken } from "api/API";

const ClusterSinglePage = () => {
  const [currentItem, setCurrentItem] = useState<ICluster>({
    name: "",
    nodes: 0,
    description: "",
    operatingSystem: "",
    type: 0,
  });
  const router = useRouter();
  useEffect(() => {
    async function onStart() {
      if (router.isReady) {
        let { id } = router.query;
        id = Array.isArray(id) ? id[0] : id;
        const token = await validateAccessToken();
        if (!token) {
          return localStorage.setItem("afterSignIn", `cluster:${id}`);
        }
        setDefaultHeader("Authorization", token);
        ClusterAPI.getById(id).then((response) => {
          setCurrentItem(response.data);
        });
      }
    }
    onStart();
  }, [router.isReady]);

  const onSubmit = async (updatedItem: ICluster) => {
    try {
      const response = await ClusterAPI.update(updatedItem);
      if (response.status === 200) {
        setCurrentItem(response.data);
      } else {
        alert("Uups! Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <ClusterForm
        title={""}
        currentItem={currentItem}
        action={{ title: "Änderungen speichern", onSubmit }}
      />
    </Main>
  );
};
export default ClusterSinglePage;
