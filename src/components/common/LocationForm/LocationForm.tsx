import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { LatLng } from "leaflet";
import { toast } from "react-toastify";

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
  const { handleSubmit, reset, setValue, watch } = useForm<ILocation>({
    defaultValues: {
      title: "",
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
      toast.success("New location Added");
      navigate("/");
    },
    onError: (e) => {
      toast.error("Something went wrong");
    }
  });

  const { mutate: editLocation } = useMutation(Update_Location, {
    onSuccess: () => {
      toast.success("Location Updated");
      navigate("/");
    },
    onError: (e) => {
      toast.error("Something went wrong");
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
    if (!data.title || !data.type || !data.lat || !data.long || !data.logo) {
      toast.error("Make sure all inputs are filled.");
      return;
    }
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
