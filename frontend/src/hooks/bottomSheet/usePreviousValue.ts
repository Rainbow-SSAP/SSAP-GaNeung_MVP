import { useEffect, useRef } from "react";

// 바텀 시트 열림 닫침 상태 관리 훅
// ex)
// 바텀 시트가 열려있을 때 닫힘 처리를 하기 위해 이전 상태 값을 참조해서 적용시킴
const usePreviousValue = (value) => {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
};

export default usePreviousValue;
