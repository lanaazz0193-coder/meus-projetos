import { useState, useEffect, useCallback } from "react";
import { projetoService } from "../../../services/projetoService";

/**
 * Hook centralizado para todas as operações CRUD de projetos.
 * Utiliza o projetoService integrado com o banco de dados.
 */
export function useProjetosCrud() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [erro, setErro]         = useState(null);

  const recarregar = useCallback(async () => {
    setLoading(true);
    setErro(null);
    try {
      const lista = await projetoService.getProjetos({ limit: 100 });
      setProjetos(lista);
    } catch (err) {
      setErro(err.message || "Não foi possível carregar os projetos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    recarregar();
  }, [recarregar]);

  /**
   * Cria (POST) ou atualiza (PUT) um projeto.
   * @param {object} dados — { titulo, descricao, imagem, link, tecnologias }
   * @param {number|null} id — se informado faz PUT; caso contrário POST
   */
  async function salvar(dados, id = null) {
    try {
      if (id) {
        await projetoService.updateProjeto(id, dados);
      } else {
        await projetoService.createProjeto(dados);
      }
      recarregar();
      return { ok: true, erro: null };
    } catch (err) {
      return {
        ok: false,
        erro: err.message || "Erro ao salvar projeto no banco de dados.",
      };
    }
  }

  /**
   * Remove (DELETE) um projeto pelo id.
   */
  async function excluir(id) {
    try {
      await projetoService.deleteProjeto(id);
      recarregar();
      return { ok: true, erro: null };
    } catch (err) {
      return {
        ok: false,
        erro: err.message || "Erro ao excluir projeto do banco de dados.",
      };
    }
  }

  return { projetos, loading, erro, salvar, excluir, recarregar };
}

export default useProjetosCrud;