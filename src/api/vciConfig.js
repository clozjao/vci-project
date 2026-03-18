const DEFAULT_HTTP_BASE_URL = "https://api.uni247.xyz/api/app-order/";
const DEFAULT_WS_BASE_URL = "wss://api.uni247.xyz/api/app-order/";

const ensureTrailingSlash = (value) => {
  if (!value) return value;
  return value.endsWith("/") ? value : `${value}/`;
};

export const VCI_HTTP_BASE_URL = ensureTrailingSlash(
  process.env.REACT_APP_VCI_API_BASE_URL || DEFAULT_HTTP_BASE_URL
);

export const VCI_WS_BASE_URL = ensureTrailingSlash(
  process.env.REACT_APP_VCI_WS_BASE_URL || DEFAULT_WS_BASE_URL
);

export const isVciMockMode = process.env.REACT_APP_VCI_MOCK === "true";
