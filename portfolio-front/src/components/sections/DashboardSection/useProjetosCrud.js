import { useState, useEffect, useCallback } from "react";

const API_URL = "http://localhost:8000/api/projetos";

/**
 * Hook centralizado para todas as operações CRUD de projetos.
 *
 * O backend usa ProjetoResource::collection, que retorna { data: [...] }.
 * Cada item tem: { id, title, text, imageSrc, linkUrl, linkText, tech }
 *
 * Para salvar/atualizar, enviamos os campos do modelo:
 *   titulo, descricao, imagem, link, tecnologias (JSON string)
 */
export function useProjetosCrud() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [erro, setErro]         = useState(null);

  const recarregar = useCallback(async () => {
    setLoading(true);
    setErro(null);
    try {
      // limit=100 para trazer todos (o controller tem default 3)
      const res = await fetch(`${API_URL}?limit=100`);
      if (!res.ok) throw new Error("Não foi possível carregar os projetos.");
      const json = await res.json();
      // Resource::collection envolve em { data: [] }
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
   * @param {object} dados — { titulo, descricao, imagem, link, tecnologias }
   * @param {number|null} id — se informado faz PUT; caso contrário POST
   */
  async function salvar(dados, id = null) {
    const url    = id ? `${API_URL}/${id}` : API_URL;
    const metodo = id ? "PUT" : "POST";

    // tecnologias: aceita string "tag1, tag2" ou array — salva como JSON no banco
    const tecnologias = Array.isArray(dados.tecnologias)
      ? JSON.stringify(dados.tecnologias)
      : JSON.stringify(
          dados.tecnologias
            ? dados.tecnologias.split(",").map((t) => t.trim()).filter(Boolean)
            : []
        );

    const payload = { ...dados, tecnologias };

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
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