import { FC } from "react";

import Container from "components/Container/Container";

interface ILocationPageProps {
  isUpdating?: boolean;
}

const Location: FC<ILocationPageProps> = ({ isUpdating }) => {
  return <Container>location page</Container>;
};

export default Location;
