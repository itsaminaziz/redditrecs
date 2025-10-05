import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from './Footer.jsx';

const mockComments = [
  { id: 1, user: 'user123', text: 'This product changed my life! Highly recommend to everyone looking for quality.', upvotes: 234 },
  { id: 2, user: 'redditor456', text: 'Best purchase I made this year. Worth every penny and more.', upvotes: 189 },
  { id: 3, user: 'techfan789', text: 'Amazing quality and fast shipping. Will definitely buy again!', upvotes: 156 },
  { id: 4, user: 'shopper101', text: 'Exceeded my expectations in every way possible.', upvotes: 142 },
  { id: 5, user: 'buyer555', text: 'Great value for money. Very satisfied with this purchase.', upvotes: 128 },
  { id: 6, user: 'consumer999', text: 'Solid build quality and excellent customer service.', upvotes: 95 },
];

const mockDetailedProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling with Premium Sound Quality',
    price: '$399',
    likes: 87,
    neutral: 8,
    dislikes: 5,
    image: 'https://images.pexels.com/photos/8000621/pexels-photo-8000621.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Bose QuietComfort 45',
    description: 'World-class noise cancellation and premium comfort',
    price: '$329',
    likes: 82,
    neutral: 12,
    dislikes: 6,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Apple AirPods Max',
    description: 'Computational audio for breakthrough listening',
    price: '$549',
    likes: 75,
    neutral: 15,
    dislikes: 10,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Sennheiser Momentum 4',
    description: 'Exceptional sound quality meets superior comfort',
    price: '$379',
    likes: 79,
    neutral: 11,
    dislikes: 10,
    image: 'https://images.pexels.com/photos/8000621/pexels-photo-8000621.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Jabra Elite 85h',
    description: 'Premium sound with SmartSound technology',
    price: '$299',
    likes: 73,
    neutral: 14,
    dislikes: 13,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

const mockFaqs = [
  { q: 'How are products ranked on RedditRecs?', a: 'Products are ranked based on Reddit community discussions, upvotes, and genuine user reviews across various subreddits.' },
  { q: 'Are the prices shown current?', a: 'Prices are updated regularly but may vary. We recommend checking the retailer for the most current pricing.' },
  { q: 'How often is the data updated?', a: 'Our algorithm scans Reddit daily to ensure the most up-to-date recommendations and user sentiment.' },
  { q: 'Can I submit a product for review?', a: 'Products are automatically discovered through Reddit discussions. Active Reddit discussions lead to inclusion.' },
  { q: 'What do the progress bars represent?', a: 'The bars show positive sentiment (thumbs up), neutral sentiment (smiley), and negative sentiment (thumbs down) from Reddit users.' },
];

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white'
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '24px 16px'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  },
  logo: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: '-0.5px'
  },
  searchBox: {
    width: '384px',
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
  textCenter: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  pageTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'black',
    marginBottom: '8px'
  },
  pageDescription: {
    fontSize: '14px',
    color: '#374151',
    maxWidth: '768px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  commentsSection: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'black',
    marginBottom: '16px'
  },
  commentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  commentCard: {
    backgroundColor: '#F9FAFB',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    padding: '12px'
  },
  commentContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  upvotes: {
    fontSize: '12px',
    color: '#6B7280',
    fontWeight: '500'
  },
  commentUser: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'black',
    marginBottom: '4px'
  },
  commentText: {
    fontSize: '12px',
    color: '#374151'
  },
  button: {
    marginTop: '12px',
    fontSize: '12px',
    color: 'black',
    border: '1px solid #D1D5DB',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  modal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '4px',
    maxWidth: '768px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '24px'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  modalTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'black'
  },
  closeButton: {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  },
  productsPanel: {
    backgroundColor: '#F9FAFB',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    padding: '24px',
    marginBottom: '32px',
    minHeight: '100vh'
  },
  filterRow: {
    marginBottom: '16px'
  },
  filterLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
    marginRight: '12px'
  },
  filterSelect: {
    fontSize: '14px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    padding: '6px 12px',
    backgroundColor: 'white',
    color: 'black',
    outline: 'none'
  },
  cardsRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px'
  },
  productCard: {
    flex: 1,
    backgroundColor: 'white',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    padding: '16px',
    position: 'relative'
  },
  rank: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#6B7280'
  },
  productImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px'
  },
  productImage: {
    width: '128px',
    height: '128px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  productName: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'black',
    marginBottom: '4px',
    textAlign: 'center'
  },
  productDescription: {
    fontSize: '12px',
    color: '#374151',
    marginBottom: '12px',
    textAlign: 'center'
  },
  progressSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '12px'
  },
  progressRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    marginBottom: '4px'
  },
  progressBar: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: '9999px',
    height: '6px'
  },
  progressFill: {
    height: '6px',
    borderRadius: '9999px'
  },
  buttonRow: {
    display: 'flex',
    gap: '8px'
  },
  primaryButton: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    fontSize: '12px',
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    fontSize: '12px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #D1D5DB',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  navButton: {
    padding: '8px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'white'
  },
  dots: {
    display: 'flex',
    gap: '4px'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  },
  disclaimer: {
    fontSize: '12px',
    color: '#6B7280',
    textAlign: 'center'
  },
  faqSection: {
    marginBottom: '48px'
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  faqItem: {
    border: '1px solid #D1D5DB',
    borderRadius: '4px'
  },
  faqButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    textAlign: 'left',
    border: 'none',
    background: 'none',
    cursor: 'pointer'
  },
  faqQuestion: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'black'
  },
  faqAnswer: {
    padding: '0 12px 12px',
    fontSize: '12px',
    color: '#374151',
    borderTop: '1px solid #E5E7EB',
    paddingTop: '8px'
  }
};

export default function ProductDetail() {
  const [showAllComments, setShowAllComments] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [priceFilter, setPriceFilter] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, mockDetailedProducts.length - itemsPerPage);

  const visibleProducts = mockDetailedProducts.slice(currentIndex, currentIndex + itemsPerPage);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.headerRow}>
          <h1 style={styles.logo}>RedditRecs</h1>

          <div style={styles.searchBox}>
            <Search style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', width: '16px', height: '16px'}} />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        <div style={styles.textCenter}>
          <h2 style={styles.pageTitle}>Top Wireless Headphones</h2>
          <p style={styles.pageDescription}>
            Discover the best wireless headphones as recommended by Reddit communities. These products have been thoroughly discussed and reviewed by real users.
          </p>
        </div>

        <div style={styles.commentsSection}>
          <h3 style={styles.sectionTitle}>What Reddit Users Say</h3>
          <div style={styles.commentsList}>
            {mockComments.slice(0, showAllComments ? mockComments.length : 3).map((comment) => (
              <div key={comment.id} style={styles.commentCard}>
                <div style={styles.commentContent}>
                  <div style={styles.upvotes}>↑ {comment.upvotes}</div>
                  <div>
                    <div style={styles.commentUser}>u/{comment.user}</div>
                    <p style={styles.commentText}>{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!showAllComments && (
            <button
              onClick={() => setShowAllComments(true)}
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Show More Comments
            </button>
          )}
        </div>

        {showAllComments && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>All Comments</h3>
                <button
                  onClick={() => setShowAllComments(false)}
                  style={styles.closeButton}
                  onMouseEnter={(e) => e.target.style.color = '#6B7280'}
                  onMouseLeave={(e) => e.target.style.color = 'black'}
                >
                  ×
                </button>
              </div>
              <div style={styles.commentsList}>
                {mockComments.map((comment) => (
                  <div key={comment.id} style={styles.commentCard}>
                    <div style={styles.commentContent}>
                      <div style={styles.upvotes}>↑ {comment.upvotes}</div>
                      <div>
                        <div style={styles.commentUser}>u/{comment.user}</div>
                        <p style={styles.commentText}>{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div style={styles.productsPanel}>
          <h3 style={styles.sectionTitle}>Top Models</h3>

          <div style={styles.filterRow}>
            <label style={styles.filterLabel}>Filter by Price:</label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              style={styles.filterSelect}
            >
              <option value="all">All Prices</option>
              <option value="under300">Under $300</option>
              <option value="300to400">$300 - $400</option>
              <option value="over400">Over $400</option>
            </select>
          </div>

          <div>
            <div style={styles.cardsRow}>
              {visibleProducts.map((product, idx) => (
                <div key={product.id} style={styles.productCard}>
                  <div style={styles.rank}>
                    #{currentIndex + idx + 1}
                  </div>

                  <div style={styles.productImageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={styles.productImage}
                    />
                  </div>

                  <h4 style={styles.productName}>{product.name}</h4>
                  <p style={styles.productDescription}>{product.description}</p>

                  <div style={styles.progressSection}>
                    <div>
                      <div style={styles.progressRow}>
                        <span>👍 Positive</span>
                        <span>{product.likes}%</span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={{...styles.progressFill, width: `${product.likes}%`, backgroundColor: 'black'}}></div>
                      </div>
                    </div>

                    <div>
                      <div style={styles.progressRow}>
                        <span>😊 Neutral</span>
                        <span>{product.neutral}%</span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={{...styles.progressFill, width: `${product.neutral}%`, backgroundColor: '#6B7280'}}></div>
                      </div>
                    </div>

                    <div>
                      <div style={styles.progressRow}>
                        <span>👎 Negative</span>
                        <span>{product.dislikes}%</span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={{...styles.progressFill, width: `${product.dislikes}%`, backgroundColor: '#9CA3AF'}}></div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.buttonRow}>
                    <button
                      style={styles.primaryButton}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#1F2937'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
                    >
                      {product.price}
                    </button>
                    <button
                      style={styles.secondaryButton}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                      View Analytics
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.navigation}>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{...styles.navButton, opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'}}
                onMouseEnter={(e) => {if (currentIndex !== 0) e.target.style.backgroundColor = '#F3F4F6'}}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <ChevronLeft style={{width: '16px', height: '16px'}} />
              </button>

              <div style={styles.dots}>
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <div
                    key={idx}
                    style={{...styles.dot, backgroundColor: idx === currentIndex ? 'black' : '#D1D5DB'}}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                style={{...styles.navButton, opacity: currentIndex >= maxIndex ? 0.3 : 1, cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer'}}
                onMouseEnter={(e) => {if (currentIndex < maxIndex) e.target.style.backgroundColor = '#F3F4F6'}}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <ChevronRight style={{width: '16px', height: '16px'}} />
              </button>
            </div>
          </div>

          <p style={styles.disclaimer}>
            All products are ranked based on authentic Reddit community discussions and user reviews
          </p>
        </div>

        <div style={styles.faqSection}>
          <h3 style={styles.sectionTitle}>Frequently Asked Questions</h3>
          <div style={styles.faqList}>
            {mockFaqs.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={styles.faqButton}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={styles.faqQuestion}>{faq.q}</span>
                  {expandedFaq === index ? (
                    <ChevronUp style={{width: '16px', height: '16px', color: '#6B7280'}} />
                  ) : (
                    <ChevronDown style={{width: '16px', height: '16px', color: '#6B7280'}} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div style={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
