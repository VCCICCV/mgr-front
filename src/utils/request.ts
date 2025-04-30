// src/utils/request.ts
type RequestConfig = Omit<RequestInit, "body"> & {
  data?: Record<string, any>;
  params?: Record<string, any>;
};

type RequestState = {
  refreshTokenPromise: Promise<boolean> | null;
  errorMsgStack: string[];
};

const requestState: RequestState = {
  refreshTokenPromise: null,
  errorMsgStack: [],
};

// 请求拦截器
async function requestInterceptor(config: RequestConfig) {
  const token = localStorage.get("token");
  const headers = new Headers(config.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (config.data && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return {
    ...config,
    headers,
  };
}

// 响应拦截器
async function responseInterceptor<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "请求失败");
  }

  const data = await response.json();

  // 处理自定义业务错误
  if (data.code !== "0000") {
    throw new Error(data.message);
  }

  return data.data;
}

// 封装fetch请求
export async function customFetch<T>(
  url: string,
  config: RequestConfig
): Promise<T> {
  try {
    // 处理查询参数
    const query = new URLSearchParams(config.params).toString();
    const finalUrl = query ? `${url}?${query}` : url;

    // 执行请求拦截
    const processedConfig = await requestInterceptor(config);

    const response = await fetch(finalUrl, {
      ...processedConfig,
      body: processedConfig.data
        ? JSON.stringify(processedConfig.data)
        : undefined,
    });

    return await responseInterceptor<T>(response);
  } catch (error) {
    // 统一错误处理
    if (error instanceof Error) {
      if (error.message.includes("token expired")) {
        return handleTokenRefresh(error, url, config);
      }
      showError(error.message);
    }
    throw error;
  }
}

// Token刷新处理
async function handleTokenRefresh(
  error: Error,
  url: string,
  config: RequestConfig
) {
  if (!requestState.refreshTokenPromise) {
    requestState.refreshTokenPromise = refreshTokenFlow();
  }

  const success = await requestState.refreshTokenPromise;
  requestState.refreshTokenPromise = null;

  if (success) {
    return customFetch(url, config); // 重试原请求
  }
  throw error;
}
