import { FC } from "react";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

import { Get_Locations } from "api";
import Container from "components/Container/Container";
import LocationPinner from "components/LocationPinner/LocationPinner";

const Home: FC = () => {
  const { isLoading, data, error } = useQuery("location", Get_Locations);

  return (
    <Container>
      <>
        {isLoading && <ClipLoader color="#ffffff" />}
        {error && <div>Somthing went wrong!</div>}
        {data?.data?.length && <LocationPinner locations={data?.data || []} />}
      </>
    </Container>
  );
};

export default Home;
