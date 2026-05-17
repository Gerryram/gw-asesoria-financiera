# GW Asesoría Financiera — App Mockup

App móvil de educación financiera para Tijuana, Baja California.

## Deploy a Vercel (3 pasos)

### Opción 1: GitHub + Vercel (recomendado)
1. Sube esta carpeta a tu repo de GitHub (ej: `gerryram/gw-asesoria`)
2. Ve a vercel.com → "Add New Project"
3. Conecta el repo → Deploy automático ✓

### Opción 2: Vercel CLI
```bash
npm install -g vercel
cd gw-asesoria-financiera
npm install
vercel --prod
```

## Stack
- Next.js 14 (App Router)
- React 18
- CSS-in-JS (sin dependencias extra)
- Fuentes: Playfair Display + DM Sans (Google Fonts)

## Estructura
```
app/
  layout.js    → HTML root
  page.js      → App completa (5 pantallas)
vercel.json    → Config de deploy
```

## Pantallas
- 🏠 **Inicio** — Hero, accesos rápidos, métricas, productos destacados
- 📦 **Productos** — 10 tarjetas con filtro por precio, modal de detalle
- 🗺 **Ruta Crítica** — 5 fases expandibles con tareas específicas
- 💼 **Negocio** — Oportunidades, proyección financiera, marketing mix
- 👤 **Perfil** — Resumen del negocio y próximos pasos

