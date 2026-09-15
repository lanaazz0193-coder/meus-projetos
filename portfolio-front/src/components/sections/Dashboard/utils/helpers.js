/* ==========================================================================
   📦 PARTE 1: FUNÇÕES AUXILIARES (HELPERS)
   📝 Futuro arquivo: /dashboard/utils/helpers.js
   Objetivo: Funções que não renderizam HTML, apenas processam dados.
   ========================================================================== */

export function contarPorGenero(livros) {
  return livros.reduce((acc, l) => {
    const g = l.genero || "Sem gênero";
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});
}

export function livroMaisRecente(livros) {
  if (!livros.length) return null;
  return livros.reduce((a, b) =>
    new Date(b.created_at) > new Date(a.created_at) ? b : a
  );
}

export function formatarData(str) {
  if (!str) return "—";
  return new Date(str).toLocaleDateString("pt-BR");
}