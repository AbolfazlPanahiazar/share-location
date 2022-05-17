import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Get_Location } from "api";
import { ILocation } from "types";
import Container from "components/Container/Container";
import { LocationForm } from "components/common";

interface ILocationPageProps {
  isUpdating?: boolean;
}

const Location: FC<ILocationPageProps> = ({ isUpdating }) => {
  const { locationId } = useParams();
  const [updatingLocation, setUpdatingLocation] = useState<ILocation>();

  const { isLoading } = useQuery("location", () => Get_Location(locationId ? +locationId : 1), {
    enabled: isUpdating,
    onSuccess: (res) => {
      console.log(res);
      setUpdatingLocation(res.data);
    }
  });

  return (
    <Container>
      <LocationForm isUpdating={isUpdating} updatingLocation={updatingLocation} />
    </Container>
  );
};

export default Location;
