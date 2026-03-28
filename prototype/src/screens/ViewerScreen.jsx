import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmbroideryPreview from '../components/EmbroideryPreview';
import { mockFiles } from '../data/mockData';

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);
const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92z" />
  </svg>
);
const ViewerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);
const OrderIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </svg>
);
const ZoomInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM13 10h-3v3H8v-3H5V8h3V5h2v3h3v2z" />
  </svg>
);
const ZoomOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-3-5h6v2H6.5V9z" />
  </svg>
);
const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </svg>
);
const ThreadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeDasharray="3 2" />
  </svg>
);
const JumpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 10h-2v5h2v-5zm3 0h-2v5h2v-5zm8.5 7H4v2h14v-2zm0-17H4v2h14V0zm-5 10h-2v5h2v-5zM12 1L4 8h16L12 1z" />
  </svg>
);
const ColorChangeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z" />
  </svg>
);

const threadNames = {
  '#D81B60': 'Rosa Escuro', '#FF4081': 'Rosa Claro', '#FFFFFF': 'Branco',
  '#4CAF50': 'Verde Médio', '#2E7D32': 'Verde Escuro', '#FFF176': 'Amarelo Suave',
  '#1565C0': 'Azul Escuro', '#1E88E5': 'Azul Médio', '#42A5F5': 'Azul Claro',
  '#FFD600': 'Amarelo Vivo', '#880E4F': 'Bordô', '#1A237E': 'Azul Marinho',
  '#3F51B5': 'Índigo', '#90CAF9': 'Azul Bebê', '#FFA726': 'Laranja',
  '#B71C1C': 'Vermelho Escuro', '#F44336': 'Vermelho', '#F9A825': 'Amarelo Ouro',
  '#F57F17': 'Âmbar', '#E91E63': 'Pink', '#FCE4EC': 'Rosa Suave',
  '#212121': 'Preto', '#424242': 'Cinza Escuro', '#BDBDBD': 'Cinza',
};

function getThreadName(hex) {
  return threadNames[hex] || hex;
}

function getStepTypeColor(type) {
  return type === 'color_change' ? '#D81B60' : '#30C48D';
}

export default function ViewerScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('viewer'); // 'viewer' | 'order'
  const [zoom, setZoom] = useState(1);
  const [activeStep, setActiveStep] = useState(null);

  const file = mockFiles.find((f) => f.id === id);
  if (!file) return <div style={{ color: 'white', padding: 20 }}>Arquivo não encontrado</div>;

  const stitchSteps = file.stitchOrder || [];
  const totalJumps = stitchSteps.reduce((s, st) => s + (st.jumpCount || 0), 0);
  const colorChanges = stitchSteps.filter((st) => st.type === 'color_change').length;

  return (
    <>
      {/* App Bar */}
      <div className="viewer-appbar">
        <button className="back-btn" onClick={() => navigate('/')}>
          <BackIcon />
        </button>
        <div className="viewer-title-block">
          <div className="viewer-filename">{file.name}</div>
          <span className={`format-badge format-${file.format} viewer-format-badge`}>{file.format}</span>
        </div>
        <button className="icon-btn">
          <ShareIcon />
        </button>
      </div>

      {/* Toggle Switch */}
      <div className="toggle-container">
        <button
          className={`toggle-option ${viewMode === 'viewer' ? 'active' : ''}`}
          onClick={() => setViewMode('viewer')}
        >
          <ViewerIcon />
          Visualizador
        </button>
        <button
          className={`toggle-option ${viewMode === 'order' ? 'active' : ''}`}
          onClick={() => setViewMode('order')}
        >
          <OrderIcon />
          Ordem de Bordado
        </button>
      </div>

      {/* Content area */}
      <div className="viewer-scroll">
        {viewMode === 'viewer' ? (
          <>
            {/* Embroidery canvas */}
            <div className="canvas-wrapper" style={{ margin: '0 20px 12px' }}>
              <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center', transition: 'transform 0.2s' }}>
                <EmbroideryPreview file={file} size={310} />
              </div>
              <div className="canvas-controls">
                <button className="canvas-ctrl-btn" onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}>
                  <ZoomInIcon />
                </button>
                <button className="canvas-ctrl-btn" onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}>
                  <ZoomOutIcon />
                </button>
                <button className="canvas-ctrl-btn" onClick={() => setZoom(1)}>
                  <ResetIcon />
                </button>
              </div>
            </div>

            {/* Info grid */}
            <div className="info-panel" style={{ margin: '0 20px 12px' }}>
              <div className="info-panel-header">Informações do Bordado</div>
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-item-label">Total de Pontos</div>
                  <div className="info-item-value">
                    {file.stitches.toLocaleString()}
                    <span className="info-item-unit"> pts</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">Trocas de Cor</div>
                  <div className="info-item-value">
                    {colorChanges}
                    <span className="info-item-unit"> cores</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">Largura</div>
                  <div className="info-item-value">
                    {file.width}
                    <span className="info-item-unit"> mm</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">Altura</div>
                  <div className="info-item-value">
                    {file.height}
                    <span className="info-item-unit"> mm</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">Saltos</div>
                  <div className="info-item-value">
                    {totalJumps}
                    <span className="info-item-unit"> saltos</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-label">Tamanho</div>
                  <div className="info-item-value">
                    {file.size}
                  </div>
                </div>
              </div>
            </div>

            {/* Thread colors */}
            <div className="colors-panel" style={{ margin: '0 20px 20px' }}>
              <div className="info-panel-header">Paleta de Cores</div>
              <div className="color-thread-list">
                {file.colorList.map((color, i) => {
                  const stitchStep = stitchSteps.filter((s) => s.color === color)[0];
                  const stitches = stitchStep ? stitchStep.stitches : Math.floor(file.stitches / file.colorList.length);
                  const pct = Math.round((stitches / file.stitches) * 100);
                  return (
                    <div key={i} className="color-thread-item">
                      <div className="thread-swatch" style={{ backgroundColor: color }} />
                      <div className="thread-info">
                        <div className="thread-name">{getThreadName(color)}</div>
                        <div className="thread-hex">{color} · {pct}%</div>
                      </div>
                      <div style={{ width: 60 }}>
                        <div className="thread-bar-wrap">
                          <div
                            className="thread-bar"
                            style={{ width: `${pct}%`, backgroundColor: color, minWidth: 4 }}
                          />
                        </div>
                        <div style={{ fontSize: 10, color: 'var(--fg-muted)', textAlign: 'right', marginTop: 2 }}>
                          {stitches.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          /* Stitch order view */
          <div style={{ padding: '8px 0 20px' }}>
            {/* Summary */}
            <div style={{
              margin: '0 20px 16px',
              background: 'var(--surface-raised)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 14,
              padding: '14px 16px',
              display: 'flex',
              gap: 16,
            }}>
              <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>{stitchSteps.length}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Operações</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#D81B60' }}>{colorChanges}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Trocas Cor</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#30C48D' }}>{totalJumps}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>Saltos</div>
              </div>
            </div>

            <div className="stitch-order-list">
              {stitchSteps.map((step, i) => {
                const isColorChange = step.type === 'color_change';
                const isActive = activeStep === i;
                return (
                  <div
                    key={i}
                    className="stitch-step"
                    onClick={() => setActiveStep(isActive ? null : i)}
                  >
                    <div className="step-line-col">
                      <div
                        className="step-dot"
                        style={{ backgroundColor: isColorChange ? '#D81B60' : '#383843', border: `2px solid ${isColorChange ? '#D81B60' : '#2F3040'}` }}
                      >
                        {step.step}
                      </div>
                      {i < stitchSteps.length - 1 && <div className="step-connector" />}
                    </div>
                    <div
                      className={`step-content ${isColorChange ? 'color-change-step' : ''}`}
                      style={{
                        borderColor: isActive ? 'var(--brand-secondary)' : 'var(--border-subtle)',
                        background: isActive ? 'rgba(216,27,96,0.08)' : 'var(--surface-raised)',
                      }}
                    >
                      <div className="step-type-label" style={{ color: isColorChange ? '#D81B60' : '#30C48D' }}>
                        {isColorChange ? (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <ColorChangeIcon /> TROCA DE COR
                          </span>
                        ) : (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <ThreadIcon /> COSTURA
                          </span>
                        )}
                      </div>
                      <div className="step-desc">{step.label}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                        <div
                          className="step-color-chip"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '2px 8px' }}
                        >
                          <div className="step-color-dot" style={{ backgroundColor: step.color, width: 10, height: 10, borderRadius: '50%' }} />
                          <span style={{ fontSize: 11, color: 'var(--fg-muted)', fontFamily: 'monospace' }}>
                            {getThreadName(step.color)}
                          </span>
                        </div>
                      </div>
                      <div className="step-stats">
                        <div className="step-stat">
                          <ThreadIcon />
                          {step.stitches.toLocaleString()} pontos
                        </div>
                        {step.jumpCount > 0 && (
                          <div className="step-stat">
                            <JumpIcon />
                            {step.jumpCount} saltos
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
