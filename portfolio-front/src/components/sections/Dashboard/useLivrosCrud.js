import { useEffect, useState, useCallback } from "react";

const API_URL = "http://localhost:8000/api/livros";

/**
 * Hook centralizado para todas as operações CRUD de livros.
 * Retorna: { livros, loading, erro, salvar, excluir, recarregar }
 */
export function useLivrosCrud() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const recarregar = useCallback(() => {
    setLoading(true);
    setErro(null);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Não foi possível carregar os livros.");
        return res.json();
      })
      .then(setLivros)
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    recarregar();
  }, [recarregar]);

  /**
   * Cria (POST) ou atualiza (PUT) um livro.
   * @param {object} dados  — campos do livro
   * @param {number|null} id — se informado, faz PUT; caso contrário, POST
   * @returns {Promise<{ ok: boolean, erro: string|null }>}
   */
  async function salvar(dados, id = null) {
    const url = id ? `${API_URL}/${id}` : API_URL;
    const metodo = id ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dados),
      });

      if (!res.ok) {
        const corpo = await res.json().catch(() => ({}));
        const mensagem =
          corpo?.message ||
          Object.values(corpo?.errors ?? {}).flat()[0] ||
          "Erro ao salvar livro.";
        return { ok: false, erro: mensagem };
      }

      recarregar();
      return { ok: true, erro: null };
    } catch {
      return { ok: false, erro: "Sem conexão com o servidor." };
    }
  }

  /**
   * Remove (DELETE) um livro pelo id.
   * @returns {Promise<{ ok: boolean, erro: string|null }>}
   */
  async function excluir(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });

      if (!res.ok) return { ok: false, erro: "Erro ao excluir livro." };
      recarregar();
      return { ok: true, erro: null };
    } catch {
      return { ok: false, erro: "Sem conexão com o servidor." };
    }
  }

  return { livros, loading, erro, salvar, excluir, recarregar };
}
