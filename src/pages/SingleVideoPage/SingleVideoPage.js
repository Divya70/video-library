import { React } from "react";
import "./singlevideopage.css";
import { SingleVideoCom } from "../../components/SingleVideoCom/SingleVideoCom";
import { useAuth } from "../../Context/Auth-Context";
const SingleVideoPage = () => {
  const { authState } = useAuth();
  return (
    <>
      {authState.token === null ? (
        alert("You are not logged in")
      ) : (
        <SingleVideoCom />
      )}
    </>
  );
};

export { SingleVideoPage };
