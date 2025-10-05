import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Footer from './Footer.jsx';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', image: 'https://images.pexels.com/photos/8000621/pexels-photo-8000621.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Laptop Stand', image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Mechanical Keyboard', image: 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'USB-C Hub', image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, name: 'Webcam HD', image: 'https://images.pexels.com/photos/5721884/pexels-photo-5721884.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, name: 'Phone Charger', image: 'https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 7, name: 'Monitor 27"', image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 8, name: 'Mouse Pad XL', image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 9, name: 'Desk Lamp LED', image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 10, name: 'Cable Management', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const mockTestimonials = [
  'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
  'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
  'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
  'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
];

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white'
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 16px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px'
  },
  logo: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: '-0.5px'
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: '24px'
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'black',
    marginBottom: '12px'
  },
  description: {
    fontSize: '14px',
    color: '#374151',
    maxWidth: '672px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  searchContainer: {
    maxWidth: '672px',
    margin: '0 auto 48px',
    position: 'relative'
  },
  searchWrapper: {
    position: 'relative'
  },
  searchInput: {
    width: '100%',
    paddingLeft: '40px',
    paddingRight: '16px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '14px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: 'white',
    color: 'black'
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    marginTop: '4px',
    backgroundColor: 'white',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    maxHeight: '240px',
    overflowY: 'auto',
    zIndex: 10
  },
  dropdownItem: {
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'black',
    borderBottom: '1px solid #E5E7EB'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '16px',
    marginBottom: '64px'
  },
  productCard: {
    backgroundColor: 'white',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
    aspectRatio: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px'
  },
  productName: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginBottom: '8px'
  },
  productImage: {
    width: '100%',
    height: '96px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  testimonialsSection: {
    marginBottom: '48px'
  },
  testimonialsTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: '24px'
  },
  testimonialsGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px'
  },
  testimonialCard: {
    width: '128px',
    height: '192px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(mockProducts);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setFilteredProducts(mockProducts);
  };

  const handleProductSelect = (product) => {
    window.location.href = `/product/${product.id}`;
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  const handleProductClick = (product) => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.logo}>RedditRecs</h1>
        </div>

        <div style={styles.textCenter}>
          <h2 style={styles.title}>
            Discover Top-Rated Products from Reddit
          </h2>
          <p style={styles.description}>
            Find the best products recommended by real Reddit users. Our curated selection features items that have been discussed, reviewed, and approved by various Reddit communities.
          </p>
        </div>

        <div style={styles.searchContainer}>
          <div style={styles.searchWrapper}>
            <Search style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', width: '16px', height: '16px'}} />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              style={styles.searchInput}
            />
          </div>
          {isSearchFocused && filteredProducts.length > 0 && (
            <div style={styles.dropdown}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  style={styles.dropdownItem}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={styles.productsGrid}>
          {mockProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              style={styles.productCard}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <h3 style={styles.productName}>
                {product.name}
              </h3>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
            </div>
          ))}
        </div>

        <div style={styles.testimonialsSection}>
          <h2 style={styles.testimonialsTitle}>
            Fans of RedditRecs
          </h2>
          <div style={styles.testimonialsGrid}>
            {mockTestimonials.map((img, index) => (
              <div
                key={index}
                style={styles.testimonialCard}
              >
                <img
                  src={img}
                  alt={`Testimonial ${index + 1}`}
                  style={styles.testimonialImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
