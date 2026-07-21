function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} Parth Patel · designed & engineered by me.</p>
        <a
          href="https://github.com/ParthPatel00/portfoliowebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          SOURCE ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
