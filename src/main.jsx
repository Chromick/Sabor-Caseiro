import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Clock3, Heart, MessageCircle, Phone, Sparkles } from 'lucide-react';
import './styles.css';

const wa = 'https://wa.me/5521976676527';

const groups = [
  {
    id: 'doces', title: 'Um carinho em forma de doce', label: 'Doces', intro: 'Aquele final feliz para qualquer dia.',
    items: [
      { name: 'Bolo de pote', detail: 'Brigadeiro · Prestígio · Ninho', price: 'R$ 10,00', icon: '🍰' },
      { name: 'Pudim', detail: 'Cremoso, caseiro e feito com carinho', price: 'R$ 12,00', icon: '🍮' },
      { name: 'Tortas', detail: 'Maracujá · Limão · Sensação', price: 'R$ 10,00', note: 'cada', icon: '🥧' },
    ],
  },
  {
    id: 'panquecas', title: 'Panquecas & inhoques', label: 'Panquecas e inhoques', intro: 'Receitas caprichadas, prontas para sua mesa.',
    items: [
      { name: 'Panqueca à bolonhesa', detail: 'Carne moída, mussarela e presunto', fresh: 'R$ 20,00', frozen: 'R$ 15,00', icon: '🥞' },
      { name: 'Panqueca de frango com requeijão', detail: 'Frango, molho branco e mussarela', fresh: 'R$ 20,00', frozen: 'R$ 15,00', icon: '🥞' },
      { name: 'Inhoque à bolonhesa', detail: 'Massa leve com molho à bolonhesa', fresh: 'R$ 30,00', frozen: 'R$ 25,00', icon: '🍝' },
      { name: 'Inhoque de frango com requeijão', detail: 'Frango, molho branco e queijo', fresh: 'R$ 25,00', frozen: 'R$ 20,00', icon: '🍝' },
    ],
  },
  {
    id: 'lasanhas', title: 'Feitas para compartilhar', label: 'Lasanhas', intro: 'Camadas generosas, sabor de comida de casa.',
    items: [
      { name: 'Lasanha à bolonhesa', detail: 'Carne moída, mussarela e presunto', fresh: 'R$ 30,00', frozen: 'R$ 25,00', icon: '🍲' },
      { name: 'Lasanha de frango com requeijão', detail: 'Frango, mussarela e molho branco', fresh: 'R$ 25,00', frozen: 'R$ 20,00', icon: '🍲' },
      { name: 'Lasanha Toscana', detail: 'Linguiça calabresa, bacon e mussarela', fresh: 'R$ 25,00', frozen: 'R$ 20,00', icon: '🍲' },
      { name: 'Lasanha de fraldinha', detail: 'Fraldinha, mussarela, presunto e cream cheese', fresh: 'R$ 40,00', frozen: 'R$ 35,00', icon: '🍲' },
    ],
  },
];

const combos = [
  {
    name: 'Combo Lasanha à Bolonhesa + Coca-Cola 350ml',
    items: 'Lasanha à bolonhesa + Coca-Cola 350ml',
    originalPrice: 'R$ 45,99',
    price: 'R$ 42,90',
    icon: '🍝',
  },
  {
    name: 'Combo Inhoque de Frango + Bolo de Ninho',
    items: 'Inhoque de frango + bolo de Ninho',
    originalPrice: 'R$ 45,99',
    price: 'R$ 42,90',
    icon: '🍰',
  },
  {
    name: 'Combo Lasanha Toscana + Pudim + Coca-Cola',
    items: 'Lasanha Toscana + pudim + Coca-Cola',
    originalPrice: 'R$ 58,99',
    price: 'R$ 54,90',
    icon: '🍲',
  },
];

function Header() {
  return <header className="topbar"><a className="brand" href="#inicio" aria-label="M.A Sabor Caseiro, início"><span className="brand-mark">M<span>♥</span>A</span><span className="brand-name">SABOR CASEIRO</span></a><a className="top-order" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Pedir agora</a></header>;
}

function MenuItem({ item }) {
  return <article className="menu-item"><div className="dish-icon" aria-hidden="true">{item.icon}</div><div className="item-content"><div className="item-heading"><h3>{item.name}</h3>{item.price && <span className="price-pill">{item.price}{item.note ? ` ${item.note}` : ''}</span>}</div><p>{item.detail}</p>{item.fresh && <div className="price-options"><span><b>{item.fresh}</b> <small>pronta</small></span><i></i><span><b>{item.frozen}</b> <small>congelada</small></span></div>}</div><a className="item-order" href={`${wa}?text=${encodeURIComponent(`Olá! Gostaria de pedir ${item.name}.`)}`} target="_blank" rel="noreferrer" aria-label={`Pedir ${item.name}`}><ArrowUpRight size={18} /></a></article>;
}

function ComboCard({ combo }) {
  const message = encodeURIComponent(`Olá! Gostaria de pedir o ${combo.name}.`);

  return <article className="combo-card"><div className="combo-card-top"><span className="combo-icon" aria-hidden="true">{combo.icon}</span><span className="combo-label">COMBO ESPECIAL</span></div><h3>{combo.name}</h3><p className="combo-items">{combo.items}</p><div className="combo-pricing"><span className="combo-original">De {combo.originalPrice}</span><span className="combo-price">{combo.price}</span></div><a className="combo-order" href={`${wa}?text=${message}`} target="_blank" rel="noreferrer">Pedir este combo <ArrowUpRight size={17} /></a></article>;
}

function App() {
  return <><Header /><main id="inicio">
    <section className="hero"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14} /> FEITO COM AMOR, PRA VOCÊ</span><h1>O sabor de casa,<br /><em>feito com carinho.</em></h1><p>Receitas que aquecem o coração e deixam o dia mais gostoso. Escolha o seu favorito.</p><a href="#cardapio" className="hero-cta">Ver cardápio <span>↓</span></a><div className="hero-meta"><span><Clock3 size={15} /> Feito na hora</span><span><Heart size={15} /> Sabor caseiro</span></div></div><div className="hero-art"><div className="sun-disc"></div><div className="hero-food">🍝</div><div className="art-caption"><span>DA NOSSA COZINHA</span><b>com amor ♡</b></div><div className="orbit orbit-one">♡</div><div className="orbit orbit-two">✳</div></div><div className="hero-bottom">M.A <span>·</span> SABOR CASEIRO <span>·</span> DESDE SEMPRE</div></section>
    <section className="menu-wrap" id="cardapio"><div className="section-intro"><span className="eyebrow dark">NOSSO CARDÁPIO</span><h2>Escolha seu momento<br /><em>favorito.</em></h2><p>Feito com ingredientes gostosos e aquele tempero de casa.</p></div><nav className="category-nav" aria-label="Categorias do cardápio"><a href="#combos">Combos<span>↘</span></a>{groups.map(g => <a key={g.id} href={`#${g.id}`}>{g.label}<span>↘</span></a>)}</nav>
      <section className="combos-section" id="combos"><div className="group-heading"><div><span className="group-number">OFERTAS ESPECIAIS</span><h2>Combos para aproveitar</h2><p>Uma combinação gostosa por um preço especial.</p></div><span className="group-stamp">OFERTA</span></div><div className="combos-grid">{combos.map(combo => <ComboCard key={combo.name} combo={combo} />)}</div></section>
      {groups.map((group, index) => <section className={`menu-section section-${group.id}`} id={group.id} key={group.id}><div className="group-heading"><div><span className="group-number">0{index + 1} / CARDÁPIO</span><h2>{group.title}</h2><p>{group.intro}</p></div><span className="group-stamp">{group.label}</span></div><div className="items-grid">{group.items.map(item => <MenuItem key={item.name} item={item} />)}</div></section>)}
      <aside className="sides-note"><span className="note-heart">♡</span><p>Todos os pratos acompanham <strong>arroz no pote de 200ml e batata palha.</strong></p><span className="note-heart">♡</span></aside>
    </section>
    <section className="contact"><div className="contact-inner"><span className="eyebrow">VAI UM PEDIDO AÍ?</span><h2>Seu próximo prato<br /><em>favorito está aqui.</em></h2><p>Chama a gente no WhatsApp. Vai ser um prazer cozinhar pra você!</p><a className="contact-button" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Fazer pedido pelo WhatsApp <ArrowUpRight size={17} /></a><div className="contact-phone"><Phone size={15} /> (21) 97667-6527</div></div><div className="contact-decoration">♡</div></section>
  </main><footer><a className="footer-brand" href="#inicio">M.A <span>SABOR CASEIRO</span></a><span>Comida boa faz dias melhores.</span><a href={wa} target="_blank" rel="noreferrer">Fale com a gente ↗</a></footer><a className="mobile-whatsapp" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Pedir pelo WhatsApp</a></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
