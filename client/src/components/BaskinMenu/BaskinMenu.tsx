import React from 'react';
import { baskinMenuData } from './data';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../Reveal';

const colors = {
  primaryPink: '#D91B72',
  secondaryPink: '#E83B86',
  cream: '#FFF7E6',
  warmBeige: '#F3E5C8',
  lightBeige: '#FAF1DD',
  darkBrown: '#3A241D',
  nearBlack: '#241B18',
  white: '#FFFFFF'
};

const ProductCard = ({ product, index, large = false }: { product: any, index: number, large?: boolean }) => {
  return (
    <Reveal delay={(index % 4) * 50} className={`flex flex-col ${large ? 'md:col-span-2' : ''}`}>
      {product.image && (
        <div className="relative w-full aspect-[4/3] flex items-end justify-center mb-5">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 origin-bottom" 
            style={{ padding: large ? '1rem' : '2rem', filter: 'drop-shadow(0 10px 15px rgba(58,36,29,0.15))' }}
          />
        </div>
      )}
      <h3 className="font-serif text-2xl md:text-[28px] leading-tight mb-2" style={{ color: colors.darkBrown }}>{product.name}</h3>
      <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: colors.nearBlack, opacity: 0.85, fontFamily: 'var(--sans)' }}>
        {product.description}
      </p>
      <div className="font-bold text-xl mt-auto" style={{ color: colors.primaryPink, fontFamily: 'var(--sans)' }}>
        {product.price}
      </div>
    </Reveal>
  );
};

const RowProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <Reveal delay={(index % 4) * 50} className="flex flex-row items-center gap-6">
      {product.image && (
        <div className="relative shrink-0 w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="relative z-10 w-full h-full object-contain hover:scale-[1.03] transition-transform duration-700" 
            style={{ filter: 'drop-shadow(0 8px 12px rgba(58,36,29,0.1))' }}
          />
        </div>
      )}
      <div className="flex flex-col">
        <h4 className="font-bold text-lg md:text-xl leading-snug mb-1" style={{ color: colors.darkBrown, fontFamily: 'var(--sans)' }}>{product.name}</h4>
        {product.badge && <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 w-max" style={{ backgroundColor: colors.primaryPink, color: colors.white }}>{product.badge}</span>}
        <p className="text-[13px] leading-relaxed mb-2" style={{ color: colors.nearBlack, opacity: 0.85, fontFamily: 'var(--sans)' }}>
          {product.description}
        </p>
        <span className="font-bold text-base" style={{ color: colors.primaryPink, fontFamily: 'var(--sans)' }}>{product.price}</span>
      </div>
    </Reveal>
  );
};

export const BaskinMenu = () => {
  return (
    <div className="baskin-menu-container w-full" style={{ backgroundColor: colors.cream, fontFamily: 'var(--sans)' }}>
      {/* SECTION 1: All New Indulgent Desserts */}
      <section className="container mx-auto px-6 py-24 md:py-32 border-b border-[#ebdaca]">
        <Reveal>
          <h2 className="text-4xl md:text-[5vw] leading-[1.1] text-center mb-16 md:mb-24" style={{ color: colors.primaryPink, fontFamily: 'var(--serif)' }}>
            All New Indulgent Desserts
          </h2>
        </Reveal>
        
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          <div className="md:col-span-5 md:col-start-2">
             <ProductCard product={baskinMenuData.newDesserts[0]} index={0} large />
          </div>
          <div className="md:col-span-4 md:mt-32">
             <ProductCard product={baskinMenuData.newDesserts[1]} index={1} />
          </div>
          <div className="md:col-span-4 md:col-start-1 md:mt-12">
             <ProductCard product={baskinMenuData.newDesserts[2]} index={2} />
          </div>
          <div className="md:col-span-4">
             <ProductCard product={baskinMenuData.newDesserts[3]} index={3} />
          </div>
          <div className="md:col-span-4 md:mt-24">
             <ProductCard product={baskinMenuData.newDesserts[4]} index={4} />
          </div>
        </div>
      </section>

      {/* SECTION 2: Kids Special Sundaes */}
      <section className="container mx-auto px-6 py-20 md:py-28 border-b border-[#ebdaca]">
        <Reveal>
          <h2 className="text-4xl md:text-[4vw] leading-[1.1] text-center mb-16" style={{ color: colors.primaryPink, fontFamily: 'var(--serif)' }}>
            Kids Special Sundaes
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto">
          {/* Fairytale */}
          <Reveal className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/2 flex flex-col justify-center">
               <h3 className="font-serif text-3xl mb-2" style={{ color: colors.primaryPink }}>Fairytale Sundaes</h3>
               <h4 className="font-bold text-xl mb-3" style={{ color: colors.darkBrown }}>{baskinMenuData.kidsSundaes.fairytale.flavours}</h4>
               <p className="text-sm leading-relaxed mb-4" style={{ color: colors.nearBlack }}>{baskinMenuData.kidsSundaes.fairytale.description}</p>
               <div className="flex gap-4 items-baseline mb-4">
                 <span className="text-xs uppercase font-bold" style={{ color: colors.primaryPink }}>(Small Scoop) <br/><span className="text-xl">₹155</span></span>
                 <span className="text-xs uppercase font-bold" style={{ color: colors.primaryPink }}>(Regular Scoop) <br/><span className="text-xl">₹195</span></span>
               </div>
               <div className="text-sm font-bold leading-relaxed mb-2" style={{ color: colors.darkBrown }}>
                 {baskinMenuData.kidsSundaes.fairytale.options.map((opt, i) => <div key={i}>{opt}</div>)}
               </div>
               <p className="text-xs italic" style={{ color: colors.nearBlack }}>{baskinMenuData.kidsSundaes.fairytale.note}</p>
             </div>
             <div className="w-full md:w-1/2 relative flex justify-center">
               <img src={baskinMenuData.kidsSundaes.fairytale.image} alt="Fairytale Sundaes" className="relative z-10 w-full max-w-[320px] object-contain hover:scale-105 transition-transform duration-500" />
             </div>
          </Reveal>
          
          {/* Lollipop */}
          <Reveal delay={100} className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/2 flex flex-col justify-center">
               <h3 className="font-serif text-3xl mb-2" style={{ color: colors.primaryPink }}>Lollipop Sundaes</h3>
               <p className="text-sm leading-relaxed mb-4" style={{ color: colors.nearBlack }}>{baskinMenuData.kidsSundaes.lollipop.description}</p>
               <div className="flex gap-4 items-baseline mb-4">
                 <span className="text-xs uppercase font-bold" style={{ color: colors.primaryPink }}>(Small Scoop) <br/><span className="text-xl">₹115</span></span>
                 <span className="text-xs uppercase font-bold" style={{ color: colors.primaryPink }}>(Regular Scoop) <br/><span className="text-xl">₹155</span></span>
               </div>
               <div className="text-sm font-bold leading-relaxed mb-2" style={{ color: colors.darkBrown }}>
                 {baskinMenuData.kidsSundaes.lollipop.options.map((opt, i) => <div key={i}>{opt}</div>)}
               </div>
               <p className="text-xs italic" style={{ color: colors.nearBlack }}>{baskinMenuData.kidsSundaes.lollipop.note}</p>
             </div>
             <div className="w-full md:w-1/2 relative flex justify-center">
               <img src={baskinMenuData.kidsSundaes.lollipop.image} alt="Lollipop Sundaes" className="relative z-10 w-full max-w-[320px] object-contain hover:scale-105 transition-transform duration-500" />
             </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: Italian Gelato Sundaes */}
      <section className="container mx-auto px-6 py-24 md:py-32 border-b border-[#ebdaca]">
        <Reveal>
          <h2 className="text-4xl md:text-[4vw] leading-[1.1] text-center mb-16" style={{ color: colors.primaryPink, fontFamily: 'var(--serif)' }}>
            Italian Gelato Sundaes
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {baskinMenuData.italianGelato.map((gelato, index) => (
             <ProductCard key={index} product={gelato} index={index} />
          ))}
        </div>
      </section>

      {/* SECTION 4: More Desserts. More Reasons to Indulge! */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-4xl md:text-[4vw] leading-[1.1] text-center mb-16 md:mb-24" style={{ color: colors.primaryPink, fontFamily: 'var(--serif)' }}>
            More Desserts. More Reasons to Indulge!
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          
          {/* Column 1: Iconic Chocolate */}
          <div className="flex flex-col">
            <Reveal><h3 className="text-3xl font-serif text-center mb-12" style={{ color: colors.primaryPink }}>Iconic Chocolate</h3></Reveal>
            <div className="flex flex-col gap-10 md:pr-4 md:border-r border-[#ebdaca]">
               {baskinMenuData.iconicChocolate.map((dish, i) => <RowProductCard key={i} product={dish} index={i} />)}
            </div>
          </div>
          
          {/* Column 2: Popular Classics */}
          <div className="flex flex-col">
            <Reveal><h3 className="text-3xl font-serif text-center mb-12" style={{ color: colors.primaryPink }}>Popular Classics & Nuts</h3></Reveal>
            <div className="flex flex-col gap-10 md:pr-4 lg:border-r border-[#ebdaca]">
               {baskinMenuData.popularClassics.map((dish, i) => <RowProductCard key={i} product={dish} index={i} />)}
            </div>
          </div>
          
          {/* Column 3: Fruity Summer Specials */}
          <div className="flex flex-col h-full rounded-[2rem] p-6 lg:-mx-6 lg:px-10 py-10" style={{ backgroundColor: colors.lightBeige }}>
            <Reveal><h3 className="text-3xl font-serif text-center mb-12" style={{ color: colors.primaryPink }}>Fruity Summer Specials</h3></Reveal>
            <div className="flex flex-col gap-10 h-full">
               {baskinMenuData.fruitySummer.map((dish, i) => (
                 <Reveal key={i} delay={(i % 3) * 50} className="flex flex-col text-center items-center">
                    <h4 className="font-bold text-lg leading-snug mb-2" style={{ color: colors.darkBrown, fontFamily: 'var(--sans)' }}>{dish.name}</h4>
                    <p className="text-[13px] leading-relaxed mb-3 max-w-[280px]" style={{ color: colors.nearBlack, opacity: 0.85, fontFamily: 'var(--sans)' }}>
                      {dish.description}
                    </p>
                    <span className="font-bold text-base mb-6" style={{ color: colors.primaryPink, fontFamily: 'var(--sans)' }}>{dish.price}</span>
                    {dish.image && (
                      <div className="relative w-full aspect-[4/3] flex justify-center max-w-[250px]">
                        <img src={dish.image} alt={dish.name} className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                 </Reveal>
               ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 5: Make Your Own Sundae */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <Reveal className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center border border-[#ebdaca]" style={{ backgroundColor: colors.white }}>
           <div className="w-full md:w-5/12 aspect-square relative bg-[#f9f1e1] flex items-center justify-center p-8">
             <div className="absolute inset-0 rounded-full scale-[0.8] bg-[#f0e3c9]"></div>
             <img src="/images/baskin-robbins/media_1791278352100.png" alt="Make Your Own Sundae" className="relative z-10 w-full h-full object-contain" />
           </div>
           <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col items-center md:items-start text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: colors.primaryPink }}>Make Your Own Sundae</h2>
             <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-8" style={{ backgroundColor: colors.primaryPink }}>Starting at ₹99</span>
             
             <div className="flex flex-col gap-4 mb-8">
               <div className="flex gap-4 items-center">
                 <span className="font-bold w-16" style={{ color: colors.darkBrown }}>Step 1:</span>
                 <span style={{ color: colors.nearBlack }}>Pick your scoop</span>
               </div>
               <div className="flex gap-4 items-center">
                 <span className="font-bold w-16" style={{ color: colors.darkBrown }}>Step 2:</span>
                 <span style={{ color: colors.nearBlack }}>Drizzle a sauce</span>
               </div>
               <div className="flex gap-4 items-center">
                 <span className="font-bold w-16" style={{ color: colors.darkBrown }}>Step 3:</span>
                 <span style={{ color: colors.nearBlack }}>Add a topping</span>
               </div>
             </div>
             
             <p className="font-bold text-lg" style={{ color: colors.primaryPink }}>Whipped cream & cherry on us!</p>
           </div>
        </Reveal>
        
        <div className="text-center mt-12">
          <p className="text-[10px] uppercase tracking-widest opacity-40">Images are for representation purposes only.</p>
        </div>
      </section>
    </div>
  );
};
