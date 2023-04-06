import { useState, useEffect } from "react";
import loadingImage from "../../assets/loading.gif";
import UserMap from "./UserMap";


const BASE_URL = "https://randomuser.me/api/";

const FetchUser = () => {
  const [userDetails, setuserDetails] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [buttonDisable, setbuttonDisable] = useState(false)

  const handleRefresh = () => {
    setRefresh(false);
    setbuttonDisable(true)
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(BASE_URL, { signal: abortController.signal });
        const data = await res.json();
        setuserDetails(data);
        setLoading(false); 
        setbuttonDisable(false);
        console.log(data);
      } 
      catch (error) {
        console.error(error);
        setLoading(true);
        setbuttonDisable(true)
      }
    }

    if (refresh) {
      fetchData();
    }

    return () => {
      abortController.abort();
      setRefresh(true);
    };
  }, [refresh]);

  return (
    <>
      {isLoading ? (
        <img src={loadingImage} alt="loading...." id="loading-image" />
      ) : (
        <UserMap userDetails={userDetails} handleRefresh={handleRefresh} buttonDisable={buttonDisable} />
      )}
    </>
  );
};

export default FetchUser;
