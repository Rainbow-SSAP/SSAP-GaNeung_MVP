import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { uploadImgState } from "../../../recoil/atoms/errand";

function ImgFile() {
  const [uploadImg, setUploadImg] = useRecoilState<File[]>(uploadImgState);
  const { control, setValue } = useFormContext();

  // 이미지 올리기
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files;
      console.log("업로드된 파일", files);

      const updatedPreviews: File[] = [];

      Array.from(files).forEach((file) => {
        const fileReader = new FileReader();

        // 파일 내용 읽기
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
          // 파일 내용 읽기
          if (e.target?.result) {
            const previewFile = new File([e.target.result], file.name, {
              type: file.type,
            });

            updatedPreviews.push(previewFile);

            if (updatedPreviews.length === files.length) {
              console.log("미리보기 업데이트", updatedPreviews);

              // 파일을 선택할 때마다 상태에 추가
              setUploadImg(updatedPreviews);
              // setValue("fileData", files);
            }
          }
        };

        fileReader.readAsArrayBuffer(file);
        console.log("previews state", uploadImg);
      });
    }
  };

  return (
    <ImgFileWrapper>
      <Controller
        control={control}
        name="files"
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <input
            type="file"
            accept="image/*"
            multiple
            onBlur={onBlur}
            name={name}
            ref={ref}
            onChange={(e) => {
              handleFileChange(e);
              onChange(e.target.files);
            }}
            style={{
              border: "solid 1px lightgray",
              borderRadius: "5px",
            }}
          />
        )}
      />
      <PreviewContainer>
        {uploadImg.map((preview, index) => (
          <PreviewWrapper key={index}>
            <img
              src={URL.createObjectURL(preview)} // File 객체를 URL.createObjectURL을 사용하여 표시
              alt={`Preview ${index}`}
              style={{ maxWidth: "100px" }}
            />
          </PreviewWrapper>
        ))}
      </PreviewContainer>
    </ImgFileWrapper>
  );
}

const ImgFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    display: block;
    width: 100%;
  }
  > input[type="file"]::file-selector-button {
    width: 100%;
    height: 30px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.color.grey50};
    border-radius: 4px;
    line-height: 1.15;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const PreviewWrapper = styled.div`
  position: relative;
  display: flex;

  > img {
    width: 50px;
    border: 1px solid ${({ theme }) => theme.color.grey50};
  }
`;
export default ImgFile;
