import React, { useState } from 'react';
import { Sparkles, IceCream, Star, Flame, Sun, Wand2, Cookie } from 'lucide-react';
import './BaskinMenu.css';

interface StandardItem {
  name: string;
  price: string;
  tag?: string;
}

export function BaskinMenu() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'indulgent', label: 'Indulgent Desserts' },
    { id: 'kids', label: 'Kids Special' },
    { id: 'gelato', label: 'Italian Gelato' },
    { id: 'chocolate', label: 'Iconic Chocolate' },
    { id: 'classics', label: 'Classics & Nuts' },
    { id: 'fruity', label: 'Fruity Specials' },
    { id: 'diy', label: 'Make Your Own' },
  ];

  const indulgentItems: StandardItem[] = [
    { name: 'Tiramisu Cheesecake Sundae', price: '₹350', tag: 'Chef Special' },
    { name: 'Chocolate Muffin Sundae', price: '₹340' },
    { name: 'Blueberry Muffin Sundae', price: '₹325' },
    { name: 'Walnut Brownie Sundae', price: '₹275', tag: 'Bestseller' },
    { name: 'Dubai Chocolate Gelato Sundae', price: '₹210', tag: 'Trending' },
  ];

  const gelatoItems: StandardItem[] = [
    { name: 'Berry Me in Cheesecake', price: '₹205', tag: 'Popular' },
    { name: 'Cotton Candy Wonderland', price: '₹205' },
    { name: 'Chocolate & Roasted Hazelnut', price: '₹205', tag: 'Rich Flavour' },
  ];

  const chocolateItems: StandardItem[] = [
    { name: 'Mississippi Mud – Croissant Cone Sundae', price: '₹205', tag: 'Iconic' },
    { name: 'Chocolate – Choco Lava Cake Dessert', price: '₹195', tag: 'Hot Favorite' },
    { name: 'Vanilla Affair – Brownie Dessert', price: '₹195' },
    { name: 'Chocolate Lovers – Waffle Sundae', price: '₹325', tag: 'Indulgent' },
    { name: 'Vanilla – Sizzling Brownie Dessert', price: '₹220', tag: 'Sizzling' },
  ];

  const classicsItems: StandardItem[] = [
    { name: 'Iranian Pista Kulfi Sundae', price: '₹200', tag: 'Authentic' },
    { name: 'Golden Ferrero Sundae', price: '₹205', tag: 'Nutty Delight' },
    { name: 'Nutty Professor', price: '₹240' },
    { name: 'Butterscotch Ribbon – Hot Fudgy Cookie Dessert', price: '₹220' },
    { name: 'Biscoff® – Cheesecake Dessert', price: '₹300', tag: 'Premium' },
  ];

  const fruityItems: StandardItem[] = [
    { name: 'Mango & Cream – Gelato Sundae', price: '₹205', tag: 'Summer Special' },
    { name: 'Vanilla with Mango Sauce – Cheesecake Dessert', price: '₹300' },
    { name: 'Banana ’N Strawberry – Fruit Cream Sundae', price: '₹210', tag: 'Fresh Fruit' },
  ];

  const renderStandardGrid = (items: StandardItem[]) => (
    <div className="menu-grid">
      {items.map((item, index) => (
        <div className="menu-card" key={index}>
          <div className="card-top">
            <h3 className="item-name">{item.name}</h3>
            {item.tag && <span className="item-tag">{item.tag}</span>}
          </div>
          <div className="card-bottom">
            <span className="item-badge-veg">100% Veg</span>
            <span className="item-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="baskin-menu-container">
      {/* Header */}
      <div className="baskin-header">
        <span className="brand-badge">Baskin Robbins</span>
        <h1>Delicious Sundaes & Desserts</h1>
        <p>Explore our wide selection of creamy sundaes, gelato treats, and iconic desserts.</p>
        <div className="baskin-order-links">
          <a
            href="https://www.swiggy.com/menu/1104729?source=sharing"
            target="_blank"
            rel="noreferrer"
            className="order-btn swiggy-btn"
          >
            Order on Swiggy
          </a>
          <a
            href="https://zomato.onelink.me/xqzv/eabwr52e"
            target="_blank"
            rel="noreferrer"
            className="order-btn zomato-btn"
          >
            Order on Zomato
          </a>
        </div>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="baskin-nav">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`baskin-nav-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 1. All New Indulgent Desserts */}
      {(activeTab === 'all' || activeTab === 'indulgent') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Sparkles className="section-icon" size={22} />
            <h2>All New Indulgent Desserts</h2>
          </div>
          {renderStandardGrid(indulgentItems)}
        </section>
      )}

      {/* 2. Kids Special Sundaes */}
      {(activeTab === 'all' || activeTab === 'kids') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <IceCream className="section-icon" size={22} />
            <h2>Kids Special Sundaes</h2>
          </div>
          <div className="menu-grid">
            {/* Fairytale Sundaes */}
            <div className="menu-card kids-card">
              <div className="kids-header-title">
                <div>
                  <h3 className="kids-item-title">Fairytale Sundaes</h3>
                  <div className="kids-variants">
                    Themes: <strong>Princess, Knight, Mermaid, Unicorn</strong>
                  </div>
                </div>
                <div className="kids-prices">
                  <div className="price-option">
                    <span className="label">Small</span>
                    <span className="val">₹155</span>
                  </div>
                  <div className="price-option">
                    <span className="label">Regular</span>
                    <span className="val">₹195</span>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#886071', marginBottom: '6px' }}>
                Additional Available Flavours:
              </div>
              <div className="kids-flavours-list">
                {['Vanilla', 'Splish Splash', 'Cotton Candy', 'Shooting Star'].map((f, i) => (
                  <span className="flavour-pill" key={i}>{f}</span>
                ))}
              </div>
            </div>

            {/* Lollipop Sundaes */}
            <div className="menu-card kids-card">
              <div className="kids-header-title">
                <div>
                  <h3 className="kids-item-title">Lollipop Sundaes</h3>
                  <div className="kids-variants">
                    Flavours: <strong>Very Berry Strawberry, Alphonso Mango</strong>
                  </div>
                </div>
                <div className="kids-prices">
                  <div className="price-option">
                    <span className="label">Small</span>
                    <span className="val">₹115</span>
                  </div>
                  <div className="price-option">
                    <span className="label">Regular</span>
                    <span className="val">₹155</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Italian Gelato Sundaes */}
      {(activeTab === 'all' || activeTab === 'gelato') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Star className="section-icon" size={22} />
            <h2>Italian Gelato Sundaes</h2>
          </div>
          {renderStandardGrid(gelatoItems)}
        </section>
      )}

      {/* 4. Iconic Chocolate */}
      {(activeTab === 'all' || activeTab === 'chocolate') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Flame className="section-icon" size={22} />
            <h2>Iconic Chocolate</h2>
          </div>
          {renderStandardGrid(chocolateItems)}
        </section>
      )}

      {/* 5. Popular Classics & Nuts */}
      {(activeTab === 'all' || activeTab === 'classics') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Cookie className="section-icon" size={22} />
            <h2>Popular Classics & Nuts</h2>
          </div>
          {renderStandardGrid(classicsItems)}
        </section>
      )}

      {/* 6. Fruity Summer Specials */}
      {(activeTab === 'all' || activeTab === 'fruity') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Sun className="section-icon" size={22} />
            <h2>Fruity Summer Specials</h2>
          </div>
          {renderStandardGrid(fruityItems)}
        </section>
      )}

      {/* 7. Make Your Own Sundae */}
      {(activeTab === 'all' || activeTab === 'diy') && (
        <section className="baskin-section">
          <div className="baskin-section-title">
            <Wand2 className="section-icon" size={22} />
            <h2>Make Your Own Sundae</h2>
          </div>
          <div className="diy-card">
            <div className="diy-info">
              <h3>Custom Ice Cream Creation</h3>
              <p>Pick your favorite scoop, select rich toppings, syrups, waffle bits, and fresh nuts to craft your dream sundae.</p>
            </div>
            <div className="diy-price-tag">
              Starting at ₹99
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
