import { api } from "./api";

/**
 * Normaliza os dados de um projeto vindo do banco de dados (seja via ProjetoResource ou direto do Model).
 * Trata variações de nomenclatura:
 *   - title / titulo
 *   - text / descricao
 *   - imageSrc / imagem
 *   - linkUrl / link
 *   - tech / tecnologias
 *
 * @param {Record<string, any>} item
 * @returns {{
 *   id: number|string,
 *   title: string,
 *   text: string,
 *   imageSrc: string,
 *   linkUrl: string,
 *   linkText: string,
 *   tech: string[],
 *   raw: Record<string, any>
 * }}
 */
export function normalizeProjeto(item) {
  if (!item) return null;

  let techList = [];
  const rawTech = item.tech ?? item.tecnologias;

  if (Array.isArray(rawTech)) {
    techList = rawTech;
  } else if (typeof rawTech === "string") {
    const trimmed = rawTech.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        techList = Array.isArray(parsed) ? parsed : [String(parsed)];
      } catch {
        techList = trimmed
          .replace(/[\[\]"]/g, "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    } else if (trimmed) {
      techList = trimmed
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }

  return {
    id: item.id,
    title: item.title ?? item.titulo ?? "Projeto sem título",
    text: item.text ?? item.descricao ?? "",
    imageSrc: item.imageSrc ?? item.imagem ?? "",
    linkUrl: item.linkUrl ?? item.link ?? "#",
    linkText: item.linkText ?? "Detalhes",
    tech: techList,
    raw: item,
  };
}

/**
 * Prepara o payload para envio ao backend Laravel.
 * Garante que tecnologias seja serializado como JSON array.
 */
function preparePayload(dados) {
  const rawTech = dados.tecnologias ?? dados.tech;
  let techArray = [];

  if (Array.isArray(rawTech)) {
    techArray = rawTech;
  } else if (typeof rawTech === "string") {
    const trimmed = rawTech.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        techArray = Array.isArray(parsed) ? parsed : [String(parsed)];
      } catch {
        techArray = trimmed
          .replace(/[\[\]"]/g, "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      }
    } else if (trimmed) {
      techArray = trimmed
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }

  return {
    titulo: dados.titulo ?? dados.title,
    descricao: dados.descricao ?? dados.text,
    imagem: dados.imagem ?? dados.imageSrc,
    link: dados.link ?? dados.linkUrl,
    tecnologias: JSON.stringify(techArray),
  };
}

/**
 * Service de projetos: centraliza chamadas e regras de negócio para o banco de dados.
 */
export const projetoService = {
  /**
   * Obtém a lista de projetos do banco de dados.
   * Por padrão envia limit=100 para trazer todos os projetos.
   * @param {{ limit?: number, [key: string]: any }} [params]
   * @returns {Promise<Array<ReturnType<typeof normalizeProjeto>>>}
   */
  async getProjetos(params = { limit: 100 }) {
    const response = await api.get("projetos", { params });
    // ProjetoResource::collection envolve os dados em { data: [...] }
    const lista = Array.isArray(response)
      ? response
      : response?.data ?? [];

    return lista.map(normalizeProjeto).filter(Boolean);
  },

  /**
   * Obtém um projeto específico por ID.
   * @param {number|string} id
   */
  async getProjetoById(id) {
    const response = await api.get(`projetos/${id}`);
    const data = response?.data ?? response;
    return normalizeProjeto(data);
  },

  /**
   * Cadastra um novo projeto no banco de dados.
   * @param {Record<string, any>} dados
   */
  async createProjeto(dados) {
    const payload = preparePayload(dados);
    const response = await api.post("projetos", payload);
    return normalizeProjeto(response);
  },

  /**
   * Atualiza um projeto existente no banco de dados.
   * @param {number|string} id
   * @param {Record<string, any>} dados
   */
  async updateProjeto(id, dados) {
    const payload = preparePayload(dados);
    const response = await api.put(`projetos/${id}`, payload);
    return normalizeProjeto(response);
  },

  /**
   * Remove um projeto do banco de dados.
   * @param {number|string} id
   */
  async deleteProjeto(id) {
    return await api.delete(`projetos/${id}`);
  },
};

export default projetoService;
