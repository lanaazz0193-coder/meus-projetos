/**
 * Arquivo de conexão centralizado com a API do backend (Laravel / Banco de dados).
 * Define a URL base, cabeçalhos padrão e métodos para requisições HTTP seguras.
 */

export const API_BASE_URL = (
  import.meta.env?.VITE_API_URL || "http://localhost:8000/api"
).replace(/\/+$/, "");

/**
 * Constrói a URL completa tratando barras e query params opcionais.
 * @param {string} endpoint 
 * @param {Record<string, any>} [params] 
 * @returns {string}
 */
function buildUrl(endpoint, params) {
  let url = endpoint.startsWith("http://") || endpoint.startsWith("https://")
    ? endpoint
    : `${API_BASE_URL}/${endpoint.replace(/^\/+/, "")}`;

  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes("?") ? "&" : "?") + queryString;
    }
  }

  return url;
}

/**
 * Executa requisição HTTP tratando cabeçalhos e respostas de erro.
 * @param {string} endpoint 
 * @param {RequestInit & { params?: Record<string, any> }} [config] 
 * @returns {Promise<any>}
 */
async function request(endpoint, config = {}) {
  const { params, headers, ...customConfig } = config;
  const url = buildUrl(endpoint, params);

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...headers,
  };

  try {
    const response = await fetch(url, {
      headers: defaultHeaders,
      ...customConfig,
    });

    // Trata respostas com status de sucesso sem conteúdo (ex: 204 No Content)
    if (response.status === 204) {
      return null;
    }

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMessage =
        data?.message ||
        (data?.errors ? Object.values(data.errors).flat()[0] : null) ||
        `Erro ${response.status}: Não foi possível completar a requisição.`;

      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    // Se for um erro HTTP já lançado acima, propaga diretamente
    if (error.status) {
      throw error;
    }

    // Se for falha de rede/conexão
    if (
      error.name === "TypeError" ||
      (error.message && (
        error.message.includes("fetch") ||
        error.message.includes("NetworkError") ||
        error.message.includes("Failed to fetch")
      ))
    ) {
      const connectionError = new Error(
        "Não foi possível conectar ao servidor. Verifique se o backend e o banco de dados estão ativos."
      );
      connectionError.isConnectionError = true;
      throw connectionError;
    }
    throw error;
  }
}

export const api = {
  baseURL: API_BASE_URL,
  get: (endpoint, config) => request(endpoint, { method: "GET", ...config }),
  post: (endpoint, body, config) =>
    request(endpoint, {
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...config,
    }),
  put: (endpoint, body, config) =>
    request(endpoint, {
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...config,
    }),
  delete: (endpoint, config) =>
    request(endpoint, { method: "DELETE", ...config }),
  request,
};

export default api;
