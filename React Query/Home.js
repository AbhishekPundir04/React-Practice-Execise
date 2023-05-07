import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
const Home = (props) => {
  const {
    data: catData,
    isLoading,
    error,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Sorry, there was an error</h1>;
  }
  return (
    <div>
      <h1>
        This is Home <p>{catData?.fact}</p>
      </h1>
      <button onClick={refetch}>Update</button>
    </div>
  );
};

export default Home;
