// 심부름 요청 데이터 타입
export interface ErrandFormData {
  category: string; // 심부름 항목
  detailedItem: string; // 상세 항목
  title: string; // 제목
  roadAddress: string; // 도로명 주소
  jibunAddress: string; // 지번 주소
  detailedAddress: string; // 상세 주소
  description: string; // 요청 내용
  preferredGender: string; // 선호 성별
  immediateExecutionStatus: boolean; // 일시
  startTime: string; // 시작 시간
  endTime: string; // 종료 시간
  estimatedTime: string; // 예상 소요 시간
  fee: string; // 비용
  auctionStatus: boolean; // 경매 진행 여부
  auctionStartTime: string; // 경매 시작 시간
  auctionEndTime: string; // 경매 종료 시간
  termsAgreed: boolean; // 약관동의여부
  files: FileList; // 이미지 파일 (여러개 처리)
}

// 심부름 내역 타입
export type ErrandsData = {
  content: ErrandItemProps[];
};

export interface ErrandItemProps {
  taskId: string;
  fileData?: string; // 썸네일 이미지 URL
  district: string; // 동 이름
  title: string; // 제목
  fee: number; // 심부름비
  startTime?: string; // 심부름 시작 시간
  auctionEndTime?: string; // 경매 마감 시간
  isLiked?: boolean; // 찜하기
}
