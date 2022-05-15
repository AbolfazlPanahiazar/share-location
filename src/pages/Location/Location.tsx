import { FC } from "react";

import Container from "components/Container/Container";
import { LocationForm } from "components/common";

interface ILocationPageProps {
  isUpdating?: boolean;
}

const Location: FC<ILocationPageProps> = ({ isUpdating }) => {
  return (
    <Container>
      <LocationForm />
    </Container>
  );
};

export default Location;
