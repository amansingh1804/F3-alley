import React from 'react';
import './BaskinMenu.css';

export function BaskinMenu() {
  return (
    <div className="baskin-menu-container">
      <div className="baskin-grid">
        
        {/* Top Left: All New Indulgent Desserts */}
        <section className="baskin-section indulgent-section">
          <div className="new-badge">NEW</div>
          <h2 className="baskin-section-title pink-text">All New Indulgent Desserts</h2>
          
          <div className="indulgent-grid">
            <div className="menu-item">
              <h3>Tiramisu Cheesecake<br/>Sundae</h3>
              <p>Velvety Tiramisu Cheesecake served with Biscoff™ ice cream topped with butterscotch sauce & biscuit crumble.</p>
              <span className="price">₹250</span>
            </div>
            
            <div className="menu-item">
              <h3>Chocolate Muffin Sundae</h3>
              <p>Decadent Double Chocolate Muffin served with the iconic Mississippi Mud ice cream topped with hot fudge, almond bits & choco chips.</p>
              <span className="price">₹340</span>
            </div>

            <div className="menu-item">
              <h3>Blueberry Muffin<br/>Sundae</h3>
              <p>Centre-filled Blueberry Crumble Muffin paired with Blueberry Cheesecake Gelato topped with blueberry sauce & wheat crispies.</p>
              <span className="price">₹325</span>
            </div>

            <div className="menu-item">
              <h3>Walnut Brownie Sundae</h3>
              <p>Oh-so-fudgy Walnut Brownie paired with Cookies 'N Cream ice cream topped with hot fudge & cookie crumble.</p>
              <span className="price">₹275</span>
            </div>

            <div className="menu-item">
              <h3>Dubai Chocolate<br/>Gelato Sundae</h3>
              <p>Dubai Chocolate Gelato topped with fudgy chocolate sauce, crispy pistachio & chocolate chips.</p>
              <span className="price">₹210</span>
            </div>
          </div>
        </section>

        {/* Top Right: Kids & Gelato */}
        <div className="right-column-top">
          <section className="baskin-section kids-section">
            <h2 className="baskin-section-title pink-text">Kids Special Sundaes</h2>
            
            <div className="menu-item">
              <h3>Fairytale Sundaes</h3>
              <p className="subtitle">Princess | Knight | Mermaid | Unicorn</p>
              <p>Your favourites scoop turned into a magical sundae with our fairytale toppers.</p>
              <div className="price-row">
                <div>
                  <small>(Basic Scoop)</small>
                  <span className="price">₹155</span>
                </div>
                <div>
                  <small>(Regular Scoop)</small>
                  <span className="price">₹195</span>
                </div>
              </div>
            </div>

            <div className="menu-item">
              <h3>Vanilla Splish Splash<br/>Cotton Candy Shooting Star</h3>
              <p>Also available in other flavours.</p>
            </div>

            <div className="menu-item">
              <h3>Lollipop Sundaes</h3>
              <p>More fun, more yum! This sundae comes with your favourite ice cream, lollipop, crunchy wafer roll, colourful sprinkles and more...</p>
              <div className="price-row">
                <div>
                  <small>(Basic Scoop)</small>
                  <span className="price">₹115</span>
                </div>
                <div>
                  <small>(Regular Scoop)</small>
                  <span className="price">₹155</span>
                </div>
              </div>
            </div>

            <div className="menu-item">
              <h3>Very Berry Strawberry -<br/>Alphonso Mango</h3>
              <p>Also available in other flavours.</p>
            </div>
          </section>

          <section className="baskin-section gelato-section">
            <h2 className="baskin-section-title pink-text">Italian Gelato Sundaes</h2>
            
            <div className="menu-item">
              <h3>Berry Me in Cheesecake</h3>
              <p>Blueberry Cheesecake Gelato, paired with a blueberry compote and NY style cheesecake cubes.</p>
            </div>

            <div className="menu-item">
              <h3>Cotton Candy Wonderland</h3>
              <p>Italian Cotton Candy Burst Gelato with strawberry compote, colourful Gems, wafer roll & more.</p>
            </div>

            <div className="menu-item">
              <h3>Chocolate & Roasted Hazelnut</h3>
              <p>Italian Chocolate & Roasted Hazelnut Gelato drizzled with chocolate & caramelised hazelnuts.</p>
              <span className="price">₹205</span>
            </div>
          </section>
        </div>

        {/* Bottom Row */}
        <div className="bottom-row-grid">
          
          <section className="baskin-section iconic-section">
            <h2 className="baskin-section-title pink-text">Iconic Chocolate</h2>
            <div className="iconic-grid">
              <div className="menu-item">
                <h3>Mississippi Mud -<br/>Croissant Cone Sundae</h3>
                <p>Flaky, buttery Croissant with Mississippi Mud ice cream, topped with chocolate syrup & chocolate chips.</p>
                <div className="price-row align-center">
                  <span className="price">₹205</span>
                  <span className="tag-pill">1st time in India</span>
                </div>
              </div>

              <div className="menu-item">
                <h3>Chocolate Lovers -<br/>Waffle Sundae</h3>
                <p>Toasty Waffle served with Dutch Chocolate ice cream, gooey brownie chunks, chocolate chips, butterscotch & chocolate sauce.</p>
                <span className="price">₹325</span>
              </div>

              <div className="menu-item">
                <h3>Chocolate - Choco Lava<br/>Cake Dessert</h3>
                <p>Warm, gooey Lava Cake with molten chocolate in the core served with a scoop of Chocolate ice cream & toppings.</p>
                <span className="price">₹195</span>
              </div>

              <div className="menu-item">
                <h3>Vanilla - Sizzling Brownie<br/>Dessert</h3>
                <p>Gooey Brownie, topped with Vanilla ice cream, almond crunch, drizzled with chocolate sauce.</p>
                <span className="price">₹220</span>
              </div>

              <div className="menu-item">
                <h3>Vanilla Affair -<br/>Brownie Dessert</h3>
                <p>Brownie with Vanilla ice cream, topped with hot fudge or butterscotch sauce.</p>
                <span className="price">₹195</span>
              </div>
            </div>
          </section>

          <section className="baskin-section classics-section">
            <h2 className="baskin-section-title pink-text">Popular Classics & Nuts</h2>
            
            <div className="menu-item">
              <h3>Iranian Pista Kulfi Sundae</h3>
              <p>Classic malai kulfi with a layer of vanilla ice cream and Iranian pistachio slivers, topped with rose drizzle and creamy condensed milk.</p>
              <span className="price">₹200</span>
            </div>

            <div className="menu-item">
              <h3>Golden Ferrero Sundae</h3>
              <p>Irresistible Gold Medal Ribbon ice cream crowned with chocolate sauce, Ferrero Rocher crumble, whipped cream and a cherry on top.</p>
              <span className="price">₹205</span>
            </div>

            <div className="menu-item">
              <h3>Nutty Professor</h3>
              <p>Roasted Californian Almond ice cream with nuts, almonds, cashews and raisins topped with hot fudge sauce and a swirl of whipped cream.</p>
              <span className="price">₹240</span>
            </div>
          </section>

          <section className="baskin-section fruity-section">
            <h2 className="baskin-section-title pink-text">Fruity Summer Specials</h2>
            
            <div className="menu-item">
              <h3>Mango & Cream - Gelato Sundae</h3>
              <p>Italian Mango & Cream Gelato with mango compote, angel cake cubes, decadent sauces.</p>
              <span className="price">₹205</span>
            </div>

            <div className="menu-item">
              <h3>Vanilla with Mango Sauce -<br/>Cheesecake Dessert</h3>
              <p>Baked Cheesecake with Vanilla ice cream & mango topping.</p>
              <span className="price">₹300</span>
            </div>

            <div className="menu-item">
              <h3>Banana 'N Strawberry -<br/>Fruit Cream Sundae</h3>
              <p>Banana 'N Strawberry ice cream layered with a blend of fruits & fruit toppings.</p>
              <span className="price">₹210</span>
            </div>
          </section>

          <section className="baskin-section myo-section">
            <h2 className="baskin-section-title pink-text">Make Your Own Sundae</h2>
            <div className="myo-start">
              <span className="tag-pill-pink">Starting at ₹99</span>
            </div>

            <ul className="myo-steps">
              <li>
                <div className="step-num">Step 1</div>
                <div>Pick your scoop</div>
              </li>
              <li>
                <div className="step-num">Step 2</div>
                <div>Drizzle a sauce</div>
              </li>
              <li>
                <div className="step-num">Step 3</div>
                <div>Add a topping</div>
              </li>
            </ul>

            <div className="myo-footer">
              <p>Whipped cream & cherry on us!</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
