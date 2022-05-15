import { FC } from "react";

import Container from "components/Container/Container";
import LocationPinner from "components/LocationPinner/LocationPinner";

const Home: FC = () => {
  return (
    <Container>
      <LocationPinner />
    </Container>
  );
};

export default Home;
