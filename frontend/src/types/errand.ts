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

export interface Category {
  value: string;
  text: string;
  detailedItems?: Category[];
}
