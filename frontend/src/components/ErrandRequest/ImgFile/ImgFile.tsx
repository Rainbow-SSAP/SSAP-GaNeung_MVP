import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { uploadImgState } from "../../../recoil/atoms/errandState";
import ErrorMessage from "../../@common/Error/ErrorMessage";

function ImgFile() {
  const [uploadImg, setUploadImg] = useRecoilState<File[]>(uploadImgState);
  const { control } = useFormContext();

  // 유효성 검사
  const validateFiles = (fileList) => {
    // fileList가 undefined이거나 비어있는 경우, 유효성 검사를 통과
    if (!fileList || fileList.length === 0) {
      return true;
    }

    if (!fileList || fileList.length > 0) {
      // 파일 개수 검사
      if (fileList.length > 5) {
        return "최대 5개의 파일만 업로드할 수 있습니다.";
      }

      // 파일 확장자 및 용량 검사
      for (const file of fileList) {
        if (!file.type.includes("jpeg") && !file.type.includes("png")) {
          return "JPG 또는 PNG 파일만 업로드할 수 있습니다.";
        }
        if (file.size > 5 * 1024 * 1024) {
          // 5MB
          return "파일 크기는 5MB를 초과할 수 없습니다.";
        }
      }
    }
    return true;
  };

  const handleFileChange = (files: FileList) => {
    const fileList = Array.from(files);
    const validationMessage = validateFiles(fileList);

    if (validationMessage === true) {
      setUploadImg(fileList); // 선택한 이미지 파일 저장
    } else {
      alert(validationMessage); // 유효성 검사에 실패한 경우 경고 메시지 표시
    }
    console.log("선택한 이미지 파일: ", uploadImg);
  };

  return (
    <ImgFileWrapper>
      <Controller
        control={control}
        name="files"
        rules={{ validate: validateFiles }}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <input
            type="file"
            accept="image/jpeg, image/png"
            multiple
            onBlur={onBlur}
            name={name}
            ref={ref}
            onChange={(e) => {
              if (e.target.files) {
                handleFileChange(e.target.files);
                onChange(e.target.files);
              }
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
  > div {
    width: 100%;
  }
  input {
    display: block;
    width: 100%;
  }
  input[type="file"]::file-selector-button {
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
  gap: 1.4rem;
  margin-top: 10px;
`;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 120px;
  max-height: 120px;
  overflow: hidden;

  > img {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grey50};
  }
`;
export default ImgFile;
