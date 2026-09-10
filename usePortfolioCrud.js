import { useEffect, useState, useCallback } from "react";

const API_URL = "http://localhost:8000/api/projetos";

/**
 * Hook CRUD para os projetos exibidos no portfólio público.
 * Usa o mesmo endpoint /api/projetos.
 * A API retorna via ProjetoResource::collection: { data: [ { id, title, text, imageSrc, linkUrl, linkText, tech } ] }
 */
export function usePortfolioCrud() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [erro, setErro]         = useState(null);

  const recarregar = useCallback(async () => {
    setLoading(true);
    setErro(null);
    try {
      const res = await fetch(`${API_URL}?limit=100`);
      if (!res.ok) throw new Error("Não foi possível carregar os projetos.");
      const json = await res.json();
      // ProjetoResource::collection retorna { data: [] }
      const lista = Array.isArray(json) ? json : (json.data ?? []);
      setProjetos(lista);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { recarregar(); }, [recarregar]);

  /**
   * Cria (POST) ou atualiza (PUT) um projeto.
   * @param {{ titulo, descricao, imagem, link, tecnologias }} dados
   * @param {number|null} id
   */
  async function salvar(dados, id = null) {
    const url    = id ? `${API_URL}/${id}` : API_URL;
    const metodo = id ? "PUT" : "POST";

    // tecnologias: string CSV → serializa como JSON array
    const tecnologias = Array.isArray(dados.tecnologias)
      ? JSON.stringify(dados.tecnologias)
      : JSON.stringify(
          dados.tecnologias
            ? dados.tecnologias.split(",").map((t) => t.trim()).filter(Boolean)
            : []
        );

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...dados, tecnologias }),
      });

      if (!res.ok) {
        const corpo = await res.json().catch(() => ({}));
        const mensagem =
          corpo?.message ||
          Object.values(corpo?.errors ?? {}).flat()[0] ||
          "Erro ao salvar projeto.";
        return { ok: false, erro: mensagem };
      }

      recarregar();
      return { ok: true, erro: null };
    } catch {
      return { ok: false, erro: "Sem conexão com o servidor." };
    }
  }

  /**
   * Remove (DELETE) um projeto pelo id.
   */
  async function excluir(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      if (!res.ok) return { ok: false, erro: "Erro ao excluir projeto." };
      recarregar();
      return { ok: true, erro: null };
    } catch {
      return { ok: false, erro: "Sem conexão com o servidor." };
    }
  }

  return { projetos, loading, erro, salvar, excluir, recarregar };
}
