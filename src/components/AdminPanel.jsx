import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F9FAFB'
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    padding: '16px 24px',
    marginBottom: '24px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    borderBottom: '1px solid #D1D5DB'
  },
  tab: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    position: 'relative'
  },
  activeTab: {
    borderBottom: '2px solid black',
    color: 'black'
  },
  inactiveTab: {
    color: '#6B7280'
  },
  content: {
    backgroundColor: 'white',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    padding: '24px'
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  contentTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'black'
  },
  addButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  placeholder: {
    fontSize: '14px',
    color: '#6B7280'
  }
};

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>RedditRecs Admin Panel</h1>
      </div>

      <div style={styles.wrapper}>
        <div style={styles.tabs}>
          <button
            onClick={() => setActiveTab('products')}
            style={{
              ...styles.tab,
              ...(activeTab === 'products' ? styles.activeTab : styles.inactiveTab)
            }}
            onMouseEnter={(e) => {if (activeTab !== 'products') e.target.style.color = 'black'}}
            onMouseLeave={(e) => {if (activeTab !== 'products') e.target.style.color = '#6B7280'}}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            style={{
              ...styles.tab,
              ...(activeTab === 'categories' ? styles.activeTab : styles.inactiveTab)
            }}
            onMouseEnter={(e) => {if (activeTab !== 'categories') e.target.style.color = 'black'}}
            onMouseLeave={(e) => {if (activeTab !== 'categories') e.target.style.color = '#6B7280'}}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            style={{
              ...styles.tab,
              ...(activeTab === 'comments' ? styles.activeTab : styles.inactiveTab)
            }}
            onMouseEnter={(e) => {if (activeTab !== 'comments') e.target.style.color = 'black'}}
            onMouseLeave={(e) => {if (activeTab !== 'comments') e.target.style.color = '#6B7280'}}
          >
            Comments
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            style={{
              ...styles.tab,
              ...(activeTab === 'testimonials' ? styles.activeTab : styles.inactiveTab)
            }}
            onMouseEnter={(e) => {if (activeTab !== 'testimonials') e.target.style.color = 'black'}}
            onMouseLeave={(e) => {if (activeTab !== 'testimonials') e.target.style.color = '#6B7280'}}
          >
            Testimonials
          </button>
        </div>

        <div style={styles.content}>
          {activeTab === 'products' && (
            <div>
              <div style={styles.contentHeader}>
                <h2 style={styles.contentTitle}>Manage Products</h2>
                <button
                  style={styles.addButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1F2937'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
                >
                  Add New Product
                </button>
              </div>
              <div style={styles.placeholder}>
                Product management interface - Add database integration here
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div>
              <div style={styles.contentHeader}>
                <h2 style={styles.contentTitle}>Manage Categories</h2>
                <button
                  style={styles.addButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1F2937'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
                >
                  Add New Category
                </button>
              </div>
              <div style={styles.placeholder}>
                Category management interface - Add database integration here
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div>
              <div style={styles.contentHeader}>
                <h2 style={styles.contentTitle}>Manage Comments</h2>
                <button
                  style={styles.addButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1F2937'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
                >
                  Add New Comment
                </button>
              </div>
              <div style={styles.placeholder}>
                Comment management interface - Add database integration here
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <div style={styles.contentHeader}>
                <h2 style={styles.contentTitle}>Manage Testimonials</h2>
                <button
                  style={styles.addButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1F2937'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
                >
                  Add New Testimonial
                </button>
              </div>
              <div style={styles.placeholder}>
                Testimonial management interface - Add database integration here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
