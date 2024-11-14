export const ERROR_MESSAGES = {
  INVALID_INPUT: "입력값이 유효하지 않습니다.",
  INVALID_PATH: "요청 경로가 유효하지 않습니다.",
  INVALID_PASSWORD: "비밀번호가 틀렸습니다.",
  INPUT_OVER_LENGTH: "입력값이 8자를 넘겼습니다.",
  NETWORK_ERROR: "네트워크 오류가 발생했습니다.",
  DUPLICATE_ID: "중복된 아이디입니다.",
  UNKNOWN_ERROR: "알 수 없는 오류가 발생했습니다.",
  NO_TOKEN: "토큰 정보가 없습니다.",
  INVALID_TOKEN: "토큰이 유효하지 않습니다.",
  NO_USERNUMBER: "user number가 없습니다.",
};

export const SIGNUP_ERROR_MESSAGES: Record<string, string> = {
  "400-00": ERROR_MESSAGES.INVALID_INPUT,
  "400-01": ERROR_MESSAGES.INPUT_OVER_LENGTH,
  "404": ERROR_MESSAGES.NETWORK_ERROR,
  "409-00": ERROR_MESSAGES.DUPLICATE_ID,
};

export const LOGIN_ERROR_MESSAGES: Record<string, string> = {
  "400-01": ERROR_MESSAGES.INVALID_INPUT,
  "400-02": ERROR_MESSAGES.INVALID_INPUT,

  "403-01": ERROR_MESSAGES.INVALID_PASSWORD,
  "404-00": ERROR_MESSAGES.INVALID_PATH,
};

export const SEARCH_HOBBY_ERROR_MESSAGES: Record<string, string> = {
  "401-00": ERROR_MESSAGES.NO_TOKEN,
  "403-00": ERROR_MESSAGES.INVALID_TOKEN,
  "404-00": ERROR_MESSAGES.INVALID_PATH,
  "404-01": ERROR_MESSAGES.NO_USERNUMBER,
};

export const CHANGE_INFO_ERROR_MESSAGES: Record<string, string> = {
  "400-00": ERROR_MESSAGES.INPUT_OVER_LENGTH,
  "401-00": ERROR_MESSAGES.NO_TOKEN,
  "403-00": ERROR_MESSAGES.INVALID_TOKEN,
  "404-00": ERROR_MESSAGES.INVALID_PATH,
};
