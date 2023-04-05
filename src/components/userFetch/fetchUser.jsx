import { useState, useEffect } from "react";
import UserMap from "./UserMap";

const BASE_URL = "https://randomuser.me/api/";

const FetchUser = () => {
  const [userDetails, setuserDetails] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const handleRefresh = () => {
    setRefresh(false);
  };

  useEffect(() => {
    const abortController = new AbortController();

    if (refresh) {
      async function fetchData() {
        try {
          const res = await fetch(BASE_URL, { signal: abortController.signal });
          const data = await res.json();

          setuserDetails(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }

    return () => {
      abortController.abort();
      setRefresh(true);
    };
  }, [refresh]);

  return (
    <>
      {userDetails && <UserMap userDetails={userDetails} handleRefresh={handleRefresh} />}
    </>
  );
};

export default FetchUser;
