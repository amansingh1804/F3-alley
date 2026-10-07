import React from 'react';
import './BaskinMenu.css';

export function BaskinMenu() {
  return (
    <div className="baskin-menu-vertical">
      
      {/* Top Banner */}
      <div className="baskin-banner">
        <div className="new-badge-large">NEW</div>
        <div className="banner-content">
          <h1 className="banner-title pink-text">
            <span>All New</span><br/>
            Indulgent<br/>
            Desserts
          </h1>
          <p className="banner-subtitle">
            A delightful range of rich, creamy<br/>
            and irresistible desserts crafted<br/>
            for every sweet craving.
          </p>
        </div>
      </div>

      {/* Indulgent Desserts */}
      <section className="vertical-section section-indulgent">
        <h2 className="section-heading pink-text">All New Indulgent Desserts</h2>
        <p className="section-subheading">Rich flavours. Irresistible creations. Pure indulgence.</p>
        
        <div className="items-grid-3">
          <div className="menu-item center-align">
            <h3>Tiramisu Cheesecake Sundae</h3>
            <p>Velvety Tiramisu Cheesecake served with Biscoff™ ice cream topped with butterscotch sauce & biscuit crumble.</p>
            <span className="price">₹250</span>
          </div>
          <div className="menu-item center-align">
            <h3>Blueberry Muffin Sundae</h3>
            <p>Centre-filled Blueberry Crumble Muffin paired with Blueberry Cheesecake Gelato topped with blueberry sauce & wheat crispies.</p>
            <span className="price">₹325</span>
          </div>
          <div className="menu-item center-align">
            <h3>Chocolate Muffin Sundae</h3>
            <p>Decadent Double Chocolate Muffin served with the iconic Mississippi Mud ice cream topped with hot fudge, almond bits & choco chips.</p>
            <span className="price">₹340</span>
          </div>
        </div>
        
        <div className="items-grid-2">
          <div className="menu-item center-align">
            <h3>Walnut Brownie Sundae</h3>
            <p>Oh-so-fudgy Walnut Brownie paired with Cookies 'N Cream ice cream topped with hot fudge & cookie crumble.</p>
            <span className="price">₹275</span>
          </div>
          <div className="menu-item center-align">
            <h3>Dubai Chocolate Gelato Sundae</h3>
            <p>Dubai Chocolate Gelato topped with fudgy chocolate sauce, crispy pistachio & chocolate chips.</p>
            <span className="price">₹210</span>
          </div>
        </div>
      </section>

      {/* Kids Special Sundaes */}
      <section className="vertical-section section-kids">
        <h2 className="section-heading pink-text">Kids Special Sundaes</h2>
        <p className="section-subheading">Little scoops. Big smiles.</p>
        
        <div className="kids-content">
          <div className="kids-list">
            <div className="menu-item">
              <h3>Fairytale Sundaes</h3>
              <p className="subtitle">Princess | Knight | Mermaid | Unicorn</p>
              <p>Your favourites scoop turned into a magical sundae with our fairytale toppers.</p>
              <div className="price-row">
                <div><small>(Basic Scoop)</small><span className="price">₹155</span></div>
                <div><small>(Regular Scoop)</small><span className="price">₹195</span></div>
              </div>
            </div>

            <div className="menu-item">
              <h3>Vanilla Splish Splash Cotton Candy Shooting Star</h3>
              <p>Also available in other flavours.</p>
            </div>

            <div className="menu-item">
              <h3>Lollipop Sundaes</h3>
              <p>More fun, more yum! This sundae comes with your favourite ice cream, lollipop, crunchy wafer roll, colourful sprinkles and more...</p>
              <div className="price-row">
                <div><small>(Basic Scoop)</small><span className="price">₹115</span></div>
                <div><small>(Regular Scoop)</small><span className="price">₹155</span></div>
              </div>
            </div>

            <div className="menu-item">
              <h3>Very Berry Strawberry - Alphonso Mango</h3>
              <p>Also available in other flavours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Italian Gelato Sundaes */}
      <section className="vertical-section section-gelato">
        <h2 className="section-heading pink-text">Italian Gelato Sundaes</h2>
        <p className="section-subheading">Authentic Italian scoops. Extraordinary combinations.</p>
        
        <div className="items-grid-3">
          <div className="menu-item center-align">
            <h3>Berry Me in Cheesecake</h3>
            <p>Blueberry Cheesecake Gelato, paired with a blueberry compote and NY style cheesecake cubes.</p>
            <span className="price">₹205</span>
          </div>
          <div className="menu-item center-align">
            <h3>Cotton Candy Wonderland</h3>
            <p>Italian Cotton Candy Burst Gelato with strawberry compote, colourful Gems, wafer roll & more.</p>
            <span className="price">₹205</span>
          </div>
          <div className="menu-item center-align">
            <h3>Chocolate & Roasted Hazelnut</h3>
            <p>Italian Chocolate & Roasted Hazelnut Gelato drizzled with Nutella & caramelised hazelnuts.</p>
            <span className="price">₹205</span>
          </div>
        </div>
      </section>

      {/* Iconic Chocolate */}
      <section className="vertical-section section-iconic">
        <h2 className="section-heading pink-text">Iconic Chocolate</h2>
        <p className="section-subheading">A celebration of chocolate in every bite.</p>
        
        <div className="items-grid-4">
          <div className="menu-item center-align">
            <h3>Mississippi Mud -<br/>Croissant Cone Sundae</h3>
            <p>Flaky, buttery Croissant with Mississippi Mud ice cream, topped with chocolate syrup & chocolate chips.</p>
            <div className="price-row justify-center">
              <span className="price">₹205</span>
              <span className="tag-pill">1st time in India</span>
            </div>
          </div>
          <div className="menu-item center-align">
            <h3>Chocolate - Choco Lava<br/>Cake Dessert</h3>
            <p>Warm, gooey Lava Cake with molten chocolate in the core served with a scoop of Chocolate ice cream & toppings.</p>
            <span className="price">₹195</span>
          </div>
          <div className="menu-item center-align">
            <h3>Vanilla Affair -<br/>Brownie Dessert</h3>
            <p>Brownie with Vanilla ice cream, topped with hot fudge or butterscotch sauce.</p>
            <span className="price">₹195</span>
          </div>
          <div className="menu-item center-align">
            <h3>Chocolate Lovers -<br/>Waffle Sundae</h3>
            <p>Toasty Waffle served with Dutch Chocolate ice cream, gooey brownie chunks, chocolate chips, butterscotch & chocolate sauce.</p>
            <span className="price">₹325</span>
          </div>
        </div>
      </section>

      {/* Popular Classics & Nuts */}
      <section className="vertical-section section-classics">
        <h2 className="section-heading pink-text">Popular Classics & Nuts</h2>
        <p className="section-subheading">Classic flavours. Timeless favourites.</p>
        
        <div className="items-grid-4">
          <div className="menu-item center-align">
            <h3>Iranian Pista Kulfi Sundae</h3>
            <p>Classic malai kulfi with a layer of vanilla ice cream and Iranian pistachio slivers, topped with rose drizzle and creamy condensed milk.</p>
            <span className="price">₹200</span>
          </div>
          <div className="menu-item center-align">
            <h3>Golden Ferrero Sundae</h3>
            <p>Irresistible Gold Medal Ribbon ice cream crowned with chocolate sauce, Ferrero Rocher crumble, whipped cream and cherry on top.</p>
            <span className="price">₹205</span>
          </div>
          <div className="menu-item center-align">
            <h3>Nutty Professor</h3>
            <p>Roasted Californian Almond ice cream with nuts, almonds, cashews and raisins topped with hot fudge sauce and a swirl of whipped cream.</p>
            <span className="price">₹240</span>
          </div>
          <div className="menu-item center-align">
            <h3>Butterscotch Ribbon -<br/>Hot Fudgy Cookie Dessert</h3>
            <p>Warm, fudgy chocolate chip cookie topped with Butterscotch Ribbon ice cream, warm chocolate sauce and almond crunch.</p>
            <span className="price">₹220</span>
          </div>
        </div>
      </section>

      {/* Fruity Summer Specials */}
      <section className="vertical-section section-fruity">
        <h2 className="section-heading pink-text">Fruity Summer Specials</h2>
        <p className="section-subheading">Fresh fruits. Cool scoops. Perfect summer vibes.</p>
        
        <div className="items-grid-3">
          <div className="menu-item center-align">
            <h3>Mango & Cream - Gelato Sundae</h3>
            <p>Italian Mango & Cream Gelato with mango compote, angel cake cubes, decadent sauces.</p>
            <span className="price">₹205</span>
          </div>
          <div className="menu-item center-align">
            <h3>Vanilla with Mango Sauce -<br/>Cheesecake Dessert</h3>
            <p>Baked Cheesecake with Vanilla ice cream & mango topping.</p>
            <span className="price">₹300</span>
          </div>
          <div className="menu-item center-align">
            <h3>Banana 'N Strawberry -<br/>Fruit Cream Sundae</h3>
            <p>Banana 'N Strawberry ice cream layered with a blend of fruits & fruit toppings.</p>
            <span className="price">₹210</span>
          </div>
        </div>
      </section>

      {/* Make Your Own Sundae */}
      <section className="vertical-section section-myo">
        <h2 className="section-heading pink-text">Make Your Own Sundae</h2>
        <p className="section-subheading">Create it. Top it. Love it.</p>
        
        <div className="myo-content">
          <div className="myo-start">
            <span className="tag-pill-pink">Starting at ₹99</span>
          </div>

          <div className="myo-steps-horizontal">
            <div className="step-item">
              <div className="step-num">Step 1</div>
              <div className="step-text">Pick your scoop</div>
            </div>
            <div className="step-item">
              <div className="step-num">Step 2</div>
              <div className="step-text">Drizzle a sauce</div>
            </div>
            <div className="step-item">
              <div className="step-num">Step 3</div>
              <div className="step-text">Add a topping</div>
            </div>
          </div>
          
          <div className="myo-footer">
            <p>Whipped cream & cherry on us!</p>
          </div>
        </div>
      </section>

    </div>
  );
}
