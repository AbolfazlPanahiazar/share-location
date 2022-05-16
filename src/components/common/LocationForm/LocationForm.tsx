import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

import { Create_Location, Update_Location } from "api";
import { TextInput, SelectInput, MapInput, ImageInput, Button } from "components/common";
import { Form } from "./locationForm.styles";
import { ILocation, LocationType } from "types";

interface ILocationFormProps {
  updatingLocation?: ILocation;
  isUpdating?: boolean;
}

export const LocationForm: FC<ILocationFormProps> = ({ isUpdating, updatingLocation }) => {
  const { register, watch, handleSubmit, setValue, reset } = useForm<ILocation>();

  useEffect(() => {
    if (isUpdating && updatingLocation?.title) {
      reset({
        ...updatingLocation
      });
    }
  }, []);

  const onSubmit: SubmitHandler<ILocation> = (data) => {
    if (isUpdating) {
      console.log("edit");
    } else {
      console.log("create");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput placeholder="Location Title:" {...register("title")} />
      <SelectInput placeholder="Location Type:" {...register("type")}>
        <option value={LocationType.HOME}>Home</option>
        <option value={LocationType.BUSINESS}>Business</option>
        <option value={LocationType.FAIR}>Fair</option>
      </SelectInput>
      <MapInput placeholder="Select your location:" locationType={LocationType.BUSINESS} />
      <ImageInput placeholder="Upload a photo:" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
