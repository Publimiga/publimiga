export function Footer() {
  return (
    <footer className="mx-auto flex max-w-content flex-col items-center gap-3 border-t border-border px-4 py-6 text-caption text-ink md:flex-row md:justify-between md:px-0">
      <span>© 2026 publimiga</span>
      <span className="text-ink-faint">desenhado por publimiga e desenvolvido por <a target="_blank" href="https://lucaschicoski.piperdeploy.com.br/" className="hover:underline">Lucas Chicoski</a></span>
      <a href="#top" className="hover:underline">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}
