import { FC } from "react";
import { useDropzone } from "react-dropzone";

import { InputContainer, InputLabel, Section, SelectedImage } from "./imageInput.styles";

interface IImageInputProps {
  placeholder: string;
}

export const ImageInput: FC<IImageInputProps> = ({ placeholder }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/webp": [],
      "image/svg": [],
      "image/png": []
    }
  });

  return (
    <InputContainer>
      <InputLabel>{placeholder}</InputLabel>
      <Section>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {acceptedFiles.length > 0 ? (
            <SelectedImage src={URL.createObjectURL(acceptedFiles[0])} alt="Uploaded" />
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      </Section>
    </InputContainer>
  );
};
