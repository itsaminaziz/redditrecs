import React from 'react';

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: '32px 0'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '16px'
  },
  link: {
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'color 0.3s',
    border: 'none',
    background: 'none',
    color: 'white'
  },
  copyright: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#9CA3AF'
  }
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.linksContainer}>
          <button
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#D1D5DB'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            About
          </button>
          <button
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#D1D5DB'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Blog
          </button>
          <button
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#D1D5DB'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Top on Reddit Lists
          </button>
        </div>
        <div style={styles.copyright}>
          © 2025 RedditRecs
        </div>
      </div>
    </footer>
  );
}
