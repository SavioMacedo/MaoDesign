export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-time">9:41</span>
      <div className="status-icons">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
          <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.4" />
          <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.6" />
          <rect x="9" y="0.5" width="3" height="11.5" rx="1" opacity="0.8" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <path d="M8 3C10.4 3 12.5 4.1 13.9 5.8L15.3 4.4C13.5 2.3 11 1 8 1C5 1 2.5 2.3 0.7 4.4L2.1 5.8C3.5 4.1 5.6 3 8 3Z" />
          <path d="M8 6C9.5 6 10.9 6.7 11.8 7.8L13.2 6.4C11.9 4.9 10 4 8 4C6 4 4.1 4.9 2.8 6.4L4.2 7.8C5.1 6.7 6.5 6 8 6Z" />
          <circle cx="8" cy="10" r="2" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" strokeOpacity="0.35" />
          <rect x="2" y="2" width="16" height="8" rx="2" fill="white" />
          <path d="M23 4.5V7.5C23.8 7.2 24 6.7 24 6C24 5.3 23.8 4.8 23 4.5Z" fill="white" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
