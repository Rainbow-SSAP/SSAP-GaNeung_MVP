import React, { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

function ImgFile() {
  const [previews, setPreviews] = useState<File[]>([]);
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
              setPreviews((prevPreviews) => [...prevPreviews, previewFile]);
              // setValue("fileData", files);
            }
          }
        };

        fileReader.readAsArrayBuffer(file);
        console.log("previews state", previews);
      });
    }
  };

  return (
    <ImgFileWrapper>
      <PreviewContainer>
        {previews.map((preview, index) => (
          <PreviewWrapper key={index}>
            <img
              src={URL.createObjectURL(preview)} // File 객체를 URL.createObjectURL을 사용하여 표시
              alt={`Preview ${index}`}
              style={{ maxWidth: "100px" }}
            />
          </PreviewWrapper>
        ))}
      </PreviewContainer>

      <Controller
        control={control}
        name="fileData"
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
    </ImgFileWrapper>
  );
}

const ImgFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PreviewWrapper = styled.div`
  position: relative;
  // 스타일링 추가
`;
export default ImgFile;
