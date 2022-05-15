import { FC } from "react";

import { TextInput, SelectInput, MapInput, ImageInput } from "components/common";
import { Form } from "./locationForm.styles";
import { LocationType } from "types";

export const LocationForm: FC = () => {
  return (
    <Form>
      <TextInput placeholder="Location Title:" />
      <SelectInput placeholder="Location Type:">
        <option value={LocationType.HOME}>Home</option>
        <option value={LocationType.BUSINESS}>Business</option>
        <option value={LocationType.FAIR}>Fair</option>
      </SelectInput>
      <MapInput placeholder="Select your location:" locationType={LocationType.BUSINESS} />
      <ImageInput placeholder="Upload a photo:" />
    </Form>
  );
};
