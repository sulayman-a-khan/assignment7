import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#1f2937',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '12px',
      fontSize: '14px',
      zIndex: 9999,
      boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      animation: 'slideIn 0.2s ease',
    }}>
      <span style={{
        width: '8px', height: '8px', borderRadius: '50%',
        background: type === 'success' ? '#4ade80' : '#f87171',
        flexShrink: 0,
      }} />
      {message}
    </div>
  );
};

export default Toast;
