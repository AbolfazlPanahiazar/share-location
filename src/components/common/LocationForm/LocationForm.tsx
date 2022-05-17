import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { LatLng } from "leaflet";

import { Create_Location, Update_Location } from "api";
import { TextInput, SelectInput, MapInput, ImageInput, Button } from "components/common";
import { Form } from "./locationForm.styles";
import { ILocation, LocationType } from "types";

interface ILocationFormProps {
  updatingLocation?: ILocation;
  isUpdating?: boolean;
}

export const LocationForm: FC<ILocationFormProps> = ({ isUpdating, updatingLocation }) => {
  const navigate = useNavigate();
  const { handleSubmit, reset, setValue, getValues, watch } = useForm<ILocation>({
    defaultValues: {
      type: LocationType.HOME
    }
  });

  const title = watch("title");
  const type = watch("type");
  const lat = +watch("lat");
  const long = +watch("long");
  const logo = watch("logo");

  const { mutate: createLocation } = useMutation(Create_Location, {
    onSuccess: () => {
      navigate("/");
    },
    onError: (e) => {
      // toast error
      console.log(e);
    }
  });

  const { mutate: editLocation } = useMutation(Update_Location, {
    onSuccess: () => {
      navigate("/");
    },
    onError: (e) => {
      // toast error
      console.log(e);
    }
  });

  useEffect(() => {
    if (isUpdating && updatingLocation?.title) {
      reset({
        ...updatingLocation
      });
    }
  }, [updatingLocation]);

  const onSubmit: SubmitHandler<ILocation> = (data) => {
    // validate data
    if (isUpdating) {
      editLocation({ ...data });
    } else {
      createLocation({ ...data });
    }
  };

  const handleSelectLocation = (selectedLocation: LatLng) => {
    console.log(selectedLocation);

    setValue("lat", selectedLocation.lat);
    setValue("long", selectedLocation.lng);
  };

  const handleSelectLogo = (selectedLogo: string) => {
    setValue("logo", selectedLogo);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Location Title:"
        value={title}
        onChange={(e) => setValue("title", e.target.value)}
      />
      <SelectInput
        placeholder="Location Type:"
        value={type}
        defaultValue={LocationType.HOME}
        onChange={(e) => setValue("type", e.target.value as LocationType)}>
        <option value={LocationType.HOME}>Home</option>
        <option value={LocationType.BUSINESS}>Business</option>
        <option value={LocationType.FAIR}>Fair</option>
      </SelectInput>
      <MapInput
        placeholder="Select your location:"
        locationType={LocationType.HOME}
        handleSelectLocation={handleSelectLocation}
        position={new LatLng(lat || 0, long || 0)}
      />
      <ImageInput
        placeholder="Upload a photo:"
        handleSelectLogo={handleSelectLogo}
        imageUrl={logo}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
