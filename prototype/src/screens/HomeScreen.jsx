import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmbroideryPreview from '../components/EmbroideryPreview';
import { mockFiles } from '../data/mockData';

const FORMATS = ['Todos', 'PES', 'JEF', 'XXX', 'DST', 'HUS', 'PEC'];

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
  </svg>
);
const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.47.47 0 00-.59.22L2.74 8.87a.49.49 0 00.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);
const AddIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);
const NeedleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2L12 18M10 4L14 4M9 7L15 7M10 10L14 10" />
    <ellipse cx="12" cy="20" rx="2" ry="1.5" fill="white" stroke="none" />
  </svg>
);
const ThreadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeDasharray="3 2" />
  </svg>
);
const RulerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h3v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h1v8z" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);
const MoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

function FileThumbnail({ file }) {
  return (
    <div className="file-thumb">
      <EmbroideryPreview file={file} size={56} />
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [activeFormat, setActiveFormat] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = mockFiles.filter((f) => {
    const matchFormat = activeFormat === 'Todos' || f.format === activeFormat;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.format.toLowerCase().includes(search.toLowerCase());
    return matchFormat && matchSearch;
  });

  const totalStitches = mockFiles.reduce((s, f) => s + f.stitches, 0);
  const totalFiles = mockFiles.length;
  const totalFormats = new Set(mockFiles.map((f) => f.format)).size;

  return (
    <>
      {/* App Bar */}
      <div className="app-bar">
        <div className="app-bar-row">
          <div className="app-logo">
            <div className="app-logo-icon">
              <NeedleIcon />
            </div>
            <span className="app-title">MaoDesign</span>
          </div>
          <div className="app-bar-actions">
            <button className="icon-btn">
              <MoreIcon />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="search-bar" style={{ marginTop: 12 }}>
          <SearchIcon />
          <input
            placeholder="Buscar bordados..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="screen">
        {/* Stats banner */}
        <div style={{ padding: '16px 20px 0' }}>
          <div className="stats-banner">
            <div className="stat-column">
              <div className="stat-value">{totalFiles}</div>
              <div className="stat-label">Arquivos</div>
            </div>
            <div className="stat-column">
              <div className="stat-value">{totalFormats}</div>
              <div className="stat-label">Formatos</div>
            </div>
            <div className="stat-column">
              <div className="stat-value">{(totalStitches / 1000).toFixed(0)}K</div>
              <div className="stat-label">Pontos</div>
            </div>
          </div>
        </div>

        {/* Format filters */}
        <div className="section-header" style={{ paddingBottom: 8 }}>
          <span className="section-title">Meus Bordados</span>
          <span className="section-action">Importar</span>
        </div>
        <div className="filter-pills">
          {FORMATS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${activeFormat === f ? 'active' : ''}`}
              onClick={() => setActiveFormat(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* File list */}
        <div className="file-list">
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--fg-muted)', fontSize: 14 }}>
              Nenhum arquivo encontrado
            </div>
          )}
          {filtered.map((file) => (
            <div
              key={file.id}
              className="file-card"
              onClick={() => navigate(`/viewer/${file.id}`)}
            >
              <FileThumbnail file={file} />
              <div className="file-info">
                <div className="file-name">{file.name}</div>
                <div className="file-meta">
                  <span className={`format-badge format-${file.format}`}>{file.format}</span>
                  <span className="file-size">{file.size}</span>
                </div>
                <div className="file-stats">
                  <div className="stat-item">
                    <ThreadIcon />
                    {file.stitches.toLocaleString()} pontos
                  </div>
                  <div className="stat-item">
                    <RulerIcon />
                    {file.width}×{file.height}mm
                  </div>
                </div>
                <div className="color-swatches">
                  {file.colorList.map((c, i) => (
                    <div key={i} className="color-swatch" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
              <ChevronRight />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {[
          { icon: <HomeIcon />, label: 'Início', active: true },
          { icon: <FolderIcon />, label: 'Arquivos', active: false },
          { icon: <StarIcon />, label: 'Favoritos', active: false },
          { icon: <SettingsIcon />, label: 'Config', active: false },
        ].map((item, i) => (
          <button
            key={i}
            className={`nav-item ${item.active ? 'active' : ''}`}
            onClick={() => {}}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
            {item.active && <div className="nav-dot" />}
          </button>
        ))}
      </div>

      {/* FAB */}
      <button className="fab" style={{ position: 'fixed', bottom: 88, right: 'calc(50% - 175px)' }}>
        <AddIcon />
      </button>
    </>
  );
}
