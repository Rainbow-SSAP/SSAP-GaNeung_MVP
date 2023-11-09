import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import usePreviousValue from "./usePreviousValue";

// 바텀 시트 훅
const useBottomSheet = (isOpenExternal, setIsOpenExternal) => {
  const [isOpen, setIsOpen] = useState(isOpenExternal); // 바텀 시트 열려있는지 여부
  const controls = useAnimation(); // Framer Motion 훅
  const prevIsOpen = usePreviousValue(isOpen);

  useEffect(() => {
    // 외부에서 받은 바텀 시트 상태 반영
    setIsOpen(isOpenExternal);
  }, [isOpenExternal]);

  const onDragEnd = (info) => {
    // 드래그 했을 때 y축이 20보다 크고 y축으로의 움직임이 없는 상태에서 y축으로 45보다 더 많이 드래그 했을 경우 바텀 시트 닫가
    const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      // 바텀 시트 닫치면 애니메이션 hidden 처리함
      controls.start("hidden");
      setIsOpenExternal(false);
    } else {
      // 바텀 시트 열리면 애니메이션 visible 처리함
      controls.start("visible");
      setIsOpenExternal(true);
    }
  };

  useEffect(() => {
    // 바텀 시트 열림 닫힘 상태에 따라 애니메이션 처리
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

export default useBottomSheet;
