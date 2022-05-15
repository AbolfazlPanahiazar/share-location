import { FC } from "react";
import { useQuery } from "react-query";

import { Get_Locations } from "api";
import Container from "components/Container/Container";
import LocationPinner from "components/LocationPinner/LocationPinner";

const Home: FC = () => {
  const { isLoading, data, error } = useQuery("location", Get_Locations);

  return (
    <Container>
      <>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error!</div>}
        {data && <LocationPinner locations={data?.data || []} />}
      </>
    </Container>
  );
};

export default Home;
