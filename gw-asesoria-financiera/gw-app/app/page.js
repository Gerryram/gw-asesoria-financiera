'use client'
import { useState } from 'react'

const NAVY = '#1a2040'
const MAROON = '#8B2635'
const GOLD = '#C9963A'

const products = [
  { id:1, emoji:'📊', title:'Presupuesto Fronterizo', subtitle:'Plantilla bimoneda MXN/USD', price:'$149', tag:'⭐ Lanzar primero', color:'#8B2635', desc:'Controla tus gastos en pesos y dólares con calculadora de tipo de cambio integrada.', format:'Google Sheets', audiencia:'Trabajadores maquiladora 25-45a' },
  { id:2, emoji:'🏦', title:'Del IMSS al AFORE', subtitle:'Entiende tu pensión', price:'$199', tag:'💼 Alta demanda', color:'#1a2040', desc:'Sabe exactamente cuánto tendrás al retiro y qué hacer hoy para mejorar esa cifra.', format:'Ebook + Calculadora', audiencia:'Empleados formales 30-50a' },
  { id:3, emoji:'🏠', title:'INFONAVIT sin arruinarte', subtitle:'Guía paso a paso', price:'$299', tag:'🔥 Más buscado', color:'#C9963A', desc:'Toma la decisión de vivienda más importante con números reales y sin gastos ocultos.', format:'PDF + Checklist', audiencia:'Familias TJ/Rosarito/Tecate' },
  { id:4, emoji:'💱', title:'Dinero en la Frontera', subtitle:'Domina el tipo de cambio', price:'$399', tag:'💡 ROI inmediato', color:'#1E7B4D', desc:'Maximiza cada dólar. Ahorra 5-10% en conversiones anuales. Se recupera en la primera semana.', format:'Mini-curso video', audiencia:'Ingresos en USD/MXN' },
  { id:5, emoji:'🧾', title:'Freelancer Binacional', subtitle:'Factura en USD sin miedo al SAT', price:'$699', tag:'📋 Especializado', color:'#7C3AED', desc:'Opera legalmente, optimiza impuestos y deja de vivir con miedo al SAT.', format:'Guía PDF + Comunidad', audiencia:'Freelancers digitales' },
  { id:6, emoji:'🎯', title:'Fondo de Emergencia 90 Días', subtitle:'Reto de ahorro desde cero', price:'$199', tag:'🚀 Más popular', color:'#0369A1', desc:'Tu primer colchón de 3 meses en 90 días con microacciones diarias y comunidad.', format:'Reto + Comunidad', audiencia:'Jóvenes 20-35a' },
  { id:7, emoji:'🛍', title:'Compra en San Diego', subtitle:'Sin quebrarte', price:'$149', tag:'✈️ Fronterizo', color:'#B45309', desc:'Cruza con presupuesto definido, sabe los límites de aduana y regresa sin sorpresas.', format:'Guía Digital + Checklist', audiencia:'Familias que cruzan' },
  { id:8, emoji:'🏪', title:'Tu Primer Negocio Formal', subtitle:'Kit financiero completo', price:'$499', tag:'💼 Emprendedores', color:'#065F46', desc:'Separa finanzas del negocio, lleva control real y sabe si estás ganando o perdiendo.', format:'Kit Digital 4 herramientas', audiencia:'Emprendedores 25-40a' },
  { id:9, emoji:'📈', title:'Invierte desde $500', subtitle:'Tu primera inversión en México', price:'$249', tag:'📊 Tendencia', color:'#1D4ED8', desc:'Haz tu primera inversión en menos de una semana. GBM+, CETES, Nu Invest — sin confusión.', format:'Ebook + Tutorial', audiencia:'Millennials y Gen Z' },
  { id:10, emoji:'💳', title:'Deudas Cero', subtitle:'Plan de libertad financiera', price:'$299', tag:'❤️ Alto impacto', color:'#9D174D', desc:'Un plan con fecha exacta de libertad financiera y estrategia de negociación con bancos.', format:'Guía + Calculadora', audiencia:'Adultos 30-50a con deudas' },
]

const oportunidades = [
  { emoji:'💼', title:'Talleres B2B Maquiladoras', ingreso:'$5K-$15K/sesión' },
  { emoji:'🎓', title:'Curso Insignia Premium', ingreso:'$1.5K-$2.5K/alumno' },
  { emoji:'📱', title:'App Móvil Presupuesto', ingreso:'$49/mes × usuarios' },
  { emoji:'🤝', title:'Red de Afiliados', ingreso:'20-30% comisión' },
  { emoji:'🎙', title:'Podcast "El Peso y el Dólar"', ingreso:'$3K-$10K/ep patrocinado' },
  { emoji:'🌎', title:'Expansión Regional', ingreso:'5× mercado disponible' },
]

const roadmap = [
  { num:1, color:'#8B2635', title:'Fundación', weeks:'Sem 1-4', tasks:['Registrar en SAT (RESICO)','Identidad visual y redes sociales','Lanzar Presupuesto Fronterizo','Configurar MercadoPago + entrega auto','10 posts + 5 videos TikTok'] },
  { num:2, color:'#C9963A', title:'Validación', weeks:'Sem 5-8', tasks:['Lanzar productos #2 y #3','Iniciar Facebook Ads $500/sem','TikTok diario — 1 video por día','Recopilar primeros testimonios','Email marketing automatizado'] },
  { num:3, color:'#2563EB', title:'Expansión', weeks:'Sem 9-12', tasks:['Lanzar INFONAVIT y San Diego','Programa de referidos 10%','Ads $2,000 MXN/mes','Webinars gratuitos cada quincena','Alianzas con contadores locales'] },
  { num:4, color:'#1E7B4D', title:'Escala', weeks:'Mes 4-6', tasks:['Catálogo completo 10 productos','Automatización Make.com','Membresía $99 MXN/mes','Bundles y paquetes especiales','Influencers TJ/BC 5K-50K seguidores'] },
  { num:5, color:'#7C3AED', title:'Consolidación', weeks:'Mes 7-12', tasks:['Expansión a Mexicali/Ensenada','Curso premium $1,500-$2,500','Talleres B2B maquiladoras','Podcast semanal','Meta: 500+ clientes, $150K-$200K/mes'] },
]

const finanzas = [
  { period:'Mes 1', min:2, max:4, pct:8 },
  { period:'Mes 2', min:6, max:12, pct:20 },
  { period:'Mes 3', min:15, max:30, pct:38 },
  { period:'Mes 6', min:40, max:80, pct:65 },
  { period:'Mes 12', min:90, max:200, pct:100 },
]

export default function App() {
  const [tab, setTab] = useState('home')
  const [selected, setSelected] = useState(null)
  const [phaseOpen, setPhaseOpen] = useState(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
        body{font-family:'DM Sans',sans-serif;background:#0f1220;min-height:100vh;}
        ::-webkit-scrollbar{width:0;}
        .app{max-width:430px;margin:0 auto;min-height:100vh;background:#0f1220;position:relative;display:flex;flex-direction:column;}
        .screen{flex:1;overflow-y:auto;padding-bottom:80px;}

        /* Status bar */
        .statusbar{height:44px;background:#0f1220;display:flex;align-items:center;justify-content:space-between;padding:0 22px;position:sticky;top:0;z-index:50;}
        .statusbar-time{color:#fff;font-size:15px;font-weight:600;}
        .statusbar-icons{display:flex;gap:6px;align-items:center;}
        .statusbar-icons svg{opacity:.9;}

        /* Bottom nav */
        .bottomnav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(15,18,32,0.97);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.07);display:flex;padding:8px 0 20px;z-index:100;}
        .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:4px 0;transition:all .2s;}
        .nav-icon{font-size:22px;transition:transform .2s;}
        .nav-item.active .nav-icon{transform:scale(1.15);}
        .nav-label{font-size:10px;font-weight:600;letter-spacing:.5px;transition:color .2s;}
        .nav-item.active .nav-label{color:#C9963A;}
        .nav-item:not(.active) .nav-label{color:rgba(255,255,255,0.35);}

        /* Cards */
        .card{border-radius:18px;overflow:hidden;}
        .glass{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.09);}

        /* Product grid */
        .prod-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px 16px;}
        .prod-card{border-radius:16px;padding:16px;cursor:pointer;transition:all .25s;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.07);}
        .prod-card:active{transform:scale(0.97);}
        .prod-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;}
        .prod-emoji{font-size:28px;margin-bottom:10px;display:block;}
        .prod-price{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#fff;line-height:1;}
        .prod-title{font-size:12px;font-weight:600;color:rgba(255,255,255,0.9);margin-top:4px;line-height:1.3;}
        .prod-badge{display:inline-block;font-size:9px;font-weight:700;letter-spacing:.5px;padding:2px 8px;border-radius:100px;margin-top:7px;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);}

        /* Detail modal */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;display:flex;align-items:flex-end;justify-content:center;max-width:430px;left:50%;transform:translateX(-50%);}
        .modal{background:#171b30;border-radius:28px 28px 0 0;width:100%;padding:28px 24px 48px;max-height:88vh;overflow-y:auto;}
        .modal-handle{width:40px;height:4px;background:rgba(255,255,255,0.15);border-radius:2px;margin:0 auto 20px;}
        .modal-emoji{font-size:48px;text-align:center;margin-bottom:14px;}
        .modal-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:1px;padding:4px 12px;border-radius:100px;margin-bottom:10px;}
        .modal-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:4px;}
        .modal-sub{font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:16px;}
        .modal-desc{font-size:14px;color:rgba(255,255,255,0.75);line-height:1.7;margin-bottom:20px;}
        .modal-row{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;}
        .modal-chip{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 14px;font-size:12px;color:rgba(255,255,255,0.7);}
        .modal-chip strong{display:block;font-size:10px;color:rgba(255,255,255,0.4);font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;}
        .btn-buy{width:100%;padding:16px;border-radius:14px;border:none;font-family:'DM Sans',sans-serif;font-size:16px;font-weight:700;color:#fff;cursor:pointer;margin-top:8px;transition:opacity .2s;}
        .btn-buy:active{opacity:.85;}

        /* Section headers */
        .sec-head{padding:24px 16px 14px;}
        .sec-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#C9963A;margin-bottom:6px;}
        .sec-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;line-height:1.2;}
        .sec-sub{font-size:13px;color:rgba(255,255,255,0.45);margin-top:5px;line-height:1.5;}

        /* Phase items */
        .phase-item{margin:0 16px 12px;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.07);}
        .phase-header{display:flex;align-items:center;gap:14px;padding:16px;cursor:pointer;background:rgba(255,255,255,0.04);}
        .phase-dot{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0;}
        .phase-info{flex:1;}
        .phase-name{font-size:14px;font-weight:700;color:#fff;}
        .phase-weeks{font-size:11px;color:#C9963A;font-weight:600;margin-top:2px;}
        .phase-arrow{font-size:18px;color:rgba(255,255,255,0.3);transition:transform .25s;}
        .phase-arrow.open{transform:rotate(90deg);}
        .phase-tasks{background:rgba(0,0,0,0.2);padding:4px 16px 12px 16px;}
        .phase-task{display:flex;gap:8px;align-items:flex-start;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:13px;color:rgba(255,255,255,0.65);line-height:1.5;}
        .phase-task:last-child{border-bottom:none;}
        .phase-task::before{content:'→';color:#C9963A;flex-shrink:0;margin-top:1px;}

        /* Opp cards */
        .opp-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px 16px;}
        .opp-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:18px 14px;transition:all .2s;}
        .opp-card:active{transform:scale(0.97);background:rgba(255,255,255,0.07);}
        .opp-emoji{font-size:26px;margin-bottom:10px;}
        .opp-title{font-size:12px;font-weight:700;color:#fff;margin-bottom:6px;line-height:1.3;}
        .opp-val{font-size:11px;font-weight:600;color:#C9963A;}

        /* Finance bars */
        .fin-list{padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;}
        .fin-row{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:16px;}
        .fin-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;}
        .fin-period{font-size:12px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:.5px;text-transform:uppercase;}
        .fin-amount{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#fff;}
        .fin-bar-bg{height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;}
        .fin-bar-fill{height:100%;border-radius:3px;transition:width 1s ease;}

        /* Home screen */
        .hero-banner{margin:16px;border-radius:22px;padding:28px 24px;background:linear-gradient(135deg,#1a2040 0%,#2a1530 100%);position:relative;overflow:hidden;}
        .hero-banner::after{content:'';position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;background:rgba(139,38,53,0.2);}
        .hero-banner::before{content:'';position:absolute;bottom:-30px;left:-20px;width:120px;height:120px;border-radius:50%;background:rgba(201,150,58,0.08);}
        .hero-greeting{font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:4px;}
        .hero-name{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#fff;line-height:1.2;margin-bottom:12px;position:relative;z-index:1;}
        .hero-name span{color:#C9963A;}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(201,150,58,0.15);border:1px solid rgba(201,150,58,0.3);border-radius:100px;padding:5px 14px;font-size:11px;font-weight:600;color:#C9963A;}
        .hero-dot{width:6px;height:6px;border-radius:50%;background:#C9963A;animation:blink 2s infinite;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}

        .quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 16px 20px;}
        .quick-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:14px 10px;text-align:center;cursor:pointer;transition:all .2s;}
        .quick-item:active{transform:scale(0.95);}
        .quick-emoji{font-size:22px;margin-bottom:6px;}
        .quick-label{font-size:10px;font-weight:600;color:rgba(255,255,255,0.55);line-height:1.3;}

        .stat-strip{display:flex;gap:10px;padding:0 16px 20px;overflow-x:auto;}
        .stat-pill{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:14px 18px;flex-shrink:0;min-width:130px;}
        .stat-val{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;}
        .stat-lbl{font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;}

        .featured-scroll{display:flex;gap:12px;padding:0 16px 20px;overflow-x:auto;}
        .feat-card{flex-shrink:0;width:200px;border-radius:16px;padding:18px;cursor:pointer;transition:all .2s;border:1px solid rgba(255,255,255,0.08);}
        .feat-card:active{transform:scale(0.97);}
        .feat-emoji{font-size:30px;margin-bottom:12px;}
        .feat-price{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;}
        .feat-title{font-size:12px;font-weight:600;color:rgba(255,255,255,0.8);margin-top:4px;line-height:1.3;}
      `}</style>

      <div className="app">
        {/* Status bar */}
        <div className="statusbar">
          <span className="statusbar-time">9:41</span>
          <div className="statusbar-icons">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="white"><rect x="0" y="3" width="3" height="9" rx="1" opacity=".4"/><rect x="4.5" y="2" width="3" height="10" rx="1" opacity=".6"/><rect x="9" y="0" width="3" height="12" rx="1" opacity=".8"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 2.4C10.5 2.4 12.7 3.5 14.2 5.2L15.5 3.9C13.6 1.8 11 0.5 8 0.5C5 0.5 2.4 1.8 0.5 3.9L1.8 5.2C3.3 3.5 5.5 2.4 8 2.4Z" opacity=".4"/><path d="M8 5.2C9.8 5.2 11.4 6 12.5 7.2L13.8 5.9C12.3 4.4 10.3 3.4 8 3.4C5.7 3.4 3.7 4.4 2.2 5.9L3.5 7.2C4.6 6 6.2 5.2 8 5.2Z" opacity=".7"/><circle cx="8" cy="10" r="1.8"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="white"><rect x="0" y="1" width="22" height="10" rx="3" stroke="white" strokeWidth="1.2" fill="none" opacity=".5"/><rect x="1.5" y="2.5" width="17" height="7" rx="2" fill="white"/><rect x="22.5" y="3.5" width="2" height="5" rx="1" fill="white" opacity=".5"/></svg>
          </div>
        </div>

        {/* Screens */}
        <div className="screen">

          {tab === 'home' && <HomeScreen setTab={setTab} setSelected={setSelected} />}
          {tab === 'productos' && <ProductosScreen setSelected={setSelected} />}
          {tab === 'plan' && <PlanScreen phaseOpen={phaseOpen} setPhaseOpen={setPhaseOpen} />}
          {tab === 'negocio' && <NegocioScreen />}
          {tab === 'perfil' && <PerfilScreen />}

        </div>

        {/* Bottom nav */}
        <nav className="bottomnav">
          {[
            { id:'home', emoji:'🏠', label:'Inicio' },
            { id:'productos', emoji:'📦', label:'Productos' },
            { id:'plan', emoji:'🗺', label:'Ruta' },
            { id:'negocio', emoji:'💼', label:'Negocio' },
            { id:'perfil', emoji:'👤', label:'Perfil' },
          ].map(n => (
            <div key={n.id} className={`nav-item ${tab===n.id?'active':''}`} onClick={() => setTab(n.id)}>
              <div className="nav-icon">{n.emoji}</div>
              <div className="nav-label">{n.label}</div>
            </div>
          ))}
        </nav>
      </div>

      {/* Product detail modal */}
      {selected && (
        <div style={{position:'fixed',inset:0,zIndex:300,display:'flex',alignItems:'flex-end',justifyContent:'center',background:'rgba(0,0,0,0.8)',maxWidth:430,left:'50%',transform:'translateX(-50%)'}}>
          <div className="modal" style={{maxWidth:430,width:'100%'}}>
            <div className="modal-handle"/>
            <div className="modal-emoji">{selected.emoji}</div>
            <div style={{textAlign:'center',marginBottom:20}}>
              <div className="modal-tag" style={{background:selected.color+'25',color:selected.color}}>{selected.tag}</div>
              <div className="modal-title">{selected.title}</div>
              <div className="modal-sub">{selected.subtitle}</div>
            </div>
            <div className="modal-desc">{selected.desc}</div>
            <div className="modal-row">
              <div className="modal-chip"><strong>Formato</strong>{selected.format}</div>
              <div className="modal-chip"><strong>Para quién</strong>{selected.audiencia}</div>
              <div className="modal-chip"><strong>Precio</strong>{selected.price} MXN</div>
            </div>
            <button className="btn-buy" style={{background:selected.color}} onClick={() => setSelected(null)}>
              Obtener por {selected.price} MXN →
            </button>
            <button onClick={() => setSelected(null)} style={{width:'100%',marginTop:10,padding:12,background:'transparent',border:'1px solid rgba(255,255,255,0.1)',borderRadius:12,color:'rgba(255,255,255,0.5)',fontSize:14,cursor:'pointer',fontFamily:'DM Sans,sans-serif'}}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function HomeScreen({ setTab, setSelected }) {
  const featured = products.filter(p => [1,3,6,10].includes(p.id))
  return (
    <>
      <div className="hero-banner">
        <div className="hero-greeting">Bienvenido a</div>
        <div className="hero-name">GW Asesoría<br/><span>Financiera</span></div>
        <div className="hero-badge"><span className="hero-dot"/> Tijuana · Baja California</div>
      </div>

      <div className="sec-head" style={{paddingTop:8,paddingBottom:10}}>
        <div className="sec-tag">Acceso rápido</div>
      </div>
      <div className="quick-grid">
        {[
          {emoji:'📊',label:'Presupuesto\nBimoneda',tab:'productos'},
          {emoji:'🏠',label:'Guía\nINFONAVIT',tab:'productos'},
          {emoji:'💱',label:'Tipo de\nCambio',tab:'productos'},
          {emoji:'🗺',label:'Ruta\nCrítica',tab:'plan'},
          {emoji:'💼',label:'Oportunidades\nde Negocio',tab:'negocio'},
          {emoji:'📈',label:'Proyección\nFinanciera',tab:'negocio'},
        ].map((q,i) => (
          <div key={i} className="quick-item" onClick={() => setTab(q.tab)}>
            <div className="quick-emoji">{q.emoji}</div>
            <div className="quick-label">{q.label}</div>
          </div>
        ))}
      </div>

      <div className="sec-head" style={{paddingBottom:10}}>
        <div className="sec-tag">Métricas clave</div>
        <div className="sec-title">Potencial del negocio</div>
      </div>
      <div className="stat-strip">
        {[
          {val:'10',lbl:'Productos digitales'},
          {val:'$200K+',lbl:'Ingreso anual MXN'},
          {val:'80%+',lbl:'Margen neto'},
          {val:'500+',lbl:'Clientes meta'},
        ].map((s,i) => (
          <div key={i} className="stat-pill">
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="sec-head" style={{paddingBottom:10}}>
        <div className="sec-tag">Destacados</div>
        <div className="sec-title">Productos más populares</div>
      </div>
      <div className="featured-scroll">
        {featured.map(p => (
          <div key={p.id} className="feat-card" style={{background:p.color+'18',borderColor:p.color+'30'}} onClick={() => setSelected(p)}>
            <div className="feat-emoji">{p.emoji}</div>
            <div className="feat-price">{p.price}</div>
            <div className="feat-title">{p.title}</div>
            <div style={{marginTop:8,fontSize:10,color:p.color,fontWeight:700}}>{p.tag}</div>
          </div>
        ))}
      </div>

      <div style={{margin:'8px 16px 0',background:'rgba(201,150,58,0.08)',border:'1px solid rgba(201,150,58,0.2)',borderRadius:16,padding:'18px 20px'}}>
        <div style={{fontSize:11,fontWeight:700,color:'#C9963A',letterSpacing:1,textTransform:'uppercase',marginBottom:6}}>Inversión inicial</div>
        <div style={{fontSize:22,fontWeight:700,fontFamily:'Playfair Display,serif',color:'#fff',marginBottom:4}}>$5,000–$8,000 MXN</div>
        <div style={{fontSize:12,color:'rgba(255,255,255,0.5)',lineHeight:1.6}}>Recuperación estimada en el mes 2–3. Margen neto superior al 80% desde el primer producto.</div>
      </div>
      <div style={{height:16}}/>
    </>
  )
}

function ProductosScreen({ setSelected }) {
  const [filter, setFilter] = useState('todos')
  const cats = [{id:'todos',label:'Todos'},{id:'basico',label:'$149-$199'},{id:'medio',label:'$299-$499'},{id:'premium',label:'$699+'}]
  const filtered = products.filter(p => {
    if(filter==='todos') return true
    const n = parseInt(p.price.replace('$',''))
    if(filter==='basico') return n <= 199
    if(filter==='medio') return n >= 299 && n <= 499
    if(filter==='premium') return n >= 699
    return true
  })
  return (
    <>
      <div className="sec-head">
        <div className="sec-tag">Catálogo completo</div>
        <div className="sec-title">10 productos digitales</div>
        <div className="sec-sub">Educación financiera para el contexto fronterizo</div>
      </div>
      <div style={{display:'flex',gap:8,padding:'0 16px 20px',overflowX:'auto'}}>
        {cats.map(c => (
          <button key={c.id} onClick={() => setFilter(c.id)} style={{flexShrink:0,padding:'7px 16px',borderRadius:100,border:'none',fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:600,cursor:'pointer',transition:'all .2s',background:filter===c.id?'#8B2635':'rgba(255,255,255,0.07)',color:filter===c.id?'#fff':'rgba(255,255,255,0.5)'}}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="prod-grid">
        {filtered.map(p => (
          <div key={p.id} className="prod-card" style={{background:p.color+'12'}} onClick={() => setSelected(p)}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:p.color,borderRadius:'16px 16px 0 0'}}/>
            <span className="prod-emoji">{p.emoji}</span>
            <div className="prod-price">{p.price}</div>
            <div className="prod-title">{p.title}</div>
            <div className="prod-badge">{p.tag}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function PlanScreen({ phaseOpen, setPhaseOpen }) {
  return (
    <>
      <div className="sec-head">
        <div className="sec-tag">Ruta crítica</div>
        <div className="sec-title">De cero a $200K/año<br/>en 5 fases</div>
        <div className="sec-sub">Plan de implementación a 12 meses</div>
      </div>

      <div style={{padding:'0 16px 16px'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
          {roadmap.map((r,i) => (
            <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
              <div style={{width:28,height:28,borderRadius:'50%',background:r.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#fff',position:'relative',zIndex:1}}>
                {r.num}
              </div>
              {i < roadmap.length-1 && <div style={{position:'absolute',height:2,background:`linear-gradient(90deg,${r.color},${roadmap[i+1].color})`,width:'calc(20% - 28px)',marginLeft:'28px'}}/>}
              <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.4)',textAlign:'center',lineHeight:1.2}}>{r.title}</div>
            </div>
          ))}
        </div>
      </div>

      {roadmap.map((r,i) => (
        <div key={i} className="phase-item">
          <div className="phase-header" onClick={() => setPhaseOpen(phaseOpen===i?null:i)}>
            <div className="phase-dot" style={{background:r.color}}>{r.num}</div>
            <div className="phase-info">
              <div className="phase-name">{r.title}</div>
              <div className="phase-weeks">{r.weeks}</div>
            </div>
            <div className={`phase-arrow ${phaseOpen===i?'open':''}`}>›</div>
          </div>
          {phaseOpen===i && (
            <div className="phase-tasks">
              {r.tasks.map((t,j) => (
                <div key={j} className="phase-task">{t}</div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div style={{margin:'8px 16px 0',background:'rgba(26,32,64,0.6)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:16,padding:'18px 20px'}}>
        <div style={{fontSize:11,fontWeight:700,color:'#C9963A',letterSpacing:1,textTransform:'uppercase',marginBottom:10}}>Acción inmediata esta semana</div>
        {['Registrar en SAT bajo régimen RESICO','Abrir @gwasesoriafinanciera en redes','Crear la Plantilla Presupuesto Fronterizo','Configurar MercadoPago + entrega auto'].map((t,i) => (
          <div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',padding:'7px 0',borderBottom:i<3?'1px solid rgba(255,255,255,0.04)':'none'}}>
            <div style={{width:20,height:20,borderRadius:50,background:'rgba(139,38,53,0.3)',border:'1px solid #8B2635',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:700,color:'#8B2635',flexShrink:0,marginTop:1}}>{i+1}</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.5}}>{t}</div>
          </div>
        ))}
      </div>
      <div style={{height:16}}/>
    </>
  )
}

function NegocioScreen() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-tag">Oportunidades de negocio</div>
        <div className="sec-title">Más allá de los<br/>productos digitales</div>
        <div className="sec-sub">GW Asesoría tiene múltiples palancas de crecimiento</div>
      </div>
      <div className="opp-grid">
        {oportunidades.map((o,i) => (
          <div key={i} className="opp-card">
            <div className="opp-emoji">{o.emoji}</div>
            <div className="opp-title">{o.title}</div>
            <div className="opp-val">{o.ingreso}</div>
          </div>
        ))}
      </div>

      <div className="sec-head" style={{paddingTop:8}}>
        <div className="sec-tag">Proyección financiera</div>
        <div className="sec-title">Crecimiento mes a mes</div>
        <div className="sec-sub">Escenario conservador</div>
      </div>
      <div className="fin-list">
        {finanzas.map((f,i) => (
          <div key={i} className="fin-row">
            <div className="fin-top">
              <div className="fin-period">{f.period}</div>
              <div className="fin-amount">${f.min}K–${f.max}K <span style={{fontSize:13,fontWeight:400,fontFamily:'DM Sans,sans-serif',color:'rgba(255,255,255,0.4)'}}>MXN</span></div>
            </div>
            <div className="fin-bar-bg">
              <div className="fin-bar-fill" style={{width:`${f.pct}%`,background:i===4?'#C9963A':'#8B2635'}}/>
            </div>
          </div>
        ))}
      </div>

      <div style={{margin:'8px 16px 16px',background:'rgba(30,123,77,0.1)',border:'1px solid rgba(30,123,77,0.25)',borderRadius:16,padding:'18px 20px'}}>
        <div style={{fontSize:11,fontWeight:700,color:'#34D399',letterSpacing:1,textTransform:'uppercase',marginBottom:6}}>Estrategia de marketing</div>
        {[
          ['📘 Facebook/Instagram Ads','$1,500–$3,000/mes'],
          ['🎵 TikTok Orgánico','$0 — solo tiempo'],
          ['💬 WhatsApp Business','$299/mes API'],
          ['🔍 Google Ads + SEO','$1,000–$2,000/mes'],
          ['📧 Email Marketing','$200/mes plataforma'],
          ['🤝 Programa Referidos','$0 costo base'],
        ].map(([canal,costo],i) => (
          <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:i<5?'1px solid rgba(255,255,255,0.04)':'none'}}>
            <div style={{fontSize:13,color:'rgba(255,255,255,0.7)'}}>{canal}</div>
            <div style={{fontSize:11,fontWeight:600,color:'#C9963A'}}>{costo}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function PerfilScreen() {
  return (
    <>
      <div className="sec-head">
        <div className="sec-tag">Mi perfil</div>
        <div className="sec-title">GW Asesoría<br/>Financiera</div>
      </div>
      <div style={{padding:'0 16px 16px'}}>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,padding:24,marginBottom:16,textAlign:'center'}}>
          <div style={{width:72,height:72,borderRadius:'50%',background:'linear-gradient(135deg,#8B2635,#1a2040)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px',fontSize:28,fontFamily:'Playfair Display,serif',fontWeight:900,color:'#C9963A'}}>GW</div>
          <div style={{fontSize:18,fontWeight:700,color:'#fff',fontFamily:'Playfair Display,serif',marginBottom:4}}>GW Asesoría Financiera</div>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>Tijuana, Baja California · México</div>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(201,150,58,0.12)',border:'1px solid rgba(201,150,58,0.25)',borderRadius:100,padding:'5px 14px',marginTop:12,fontSize:11,fontWeight:600,color:'#C9963A'}}>
            ● Plan activo: Lanzamiento
          </div>
        </div>

        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,overflow:'hidden',marginBottom:16}}>
          {[
            {emoji:'📦',label:'Productos disponibles',val:'10 productos'},
            {emoji:'🗺',label:'Fase actual',val:'Fase 1 — Fundación'},
            {emoji:'💰',label:'Meta ingresos mes 12',val:'$90K–$200K MXN'},
            {emoji:'👥',label:'Audiencia objetivo',val:'Clase media y baja TJ'},
            {emoji:'📍',label:'Mercado principal',val:'Tijuana, BC · Frontera'},
          ].map((item,i) => (
            <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px 18px',borderBottom:i<4?'1px solid rgba(255,255,255,0.05)':'none'}}>
              <div style={{fontSize:20,width:32,textAlign:'center'}}>{item.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',marginBottom:2}}>{item.label}</div>
                <div style={{fontSize:14,fontWeight:600,color:'#fff'}}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{background:'rgba(139,38,53,0.1)',border:'1px solid rgba(139,38,53,0.25)',borderRadius:16,padding:'18px 20px',marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:'#8B2635',letterSpacing:1,textTransform:'uppercase',marginBottom:8}}>Próximos pasos urgentes</div>
          {['Crear plantilla "Presupuesto Fronterizo" esta semana','Registrar @gwasesoriafinanciera en redes sociales','Configurar MercadoPago para recibir pagos'].map((t,i) => (
            <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',padding:'6px 0',fontSize:13,color:'rgba(255,255,255,0.7)',lineHeight:1.5}}>
              <div style={{width:16,height:16,borderRadius:4,border:'1.5px solid #8B2635',flexShrink:0,marginTop:2}}/>
              {t}
            </div>
          ))}
        </div>

        <div style={{textAlign:'center',padding:'10px 0 4px'}}>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.25)'}}>GW Asesoría Financiera v1.0 · Mayo 2026</div>
          <div style={{fontSize:11,color:'rgba(255,255,255,0.15)',marginTop:4}}>Desarrollado con Claude AI · Tijuana MX</div>
        </div>
      </div>
    </>
  )
}
