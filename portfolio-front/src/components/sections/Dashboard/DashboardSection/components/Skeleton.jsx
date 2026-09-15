/* ==========================================================================
   📦 PARTE 2: COMPONENTE SKELETON
   📝 Futuro arquivo: /dashboard/components/Skeleton.jsx (Ou na pasta global /ui)
   Objetivo: Componente visual de carregamento genérico.
   ========================================================================== */

export default function Skeleton({ height = "1rem", width = "60%" }) {
  return (
    <span
      className="skeleton-block"
      style={{ height, width }}
      aria-hidden="true"
    />
  );
}