# SILEX Web

Landing page oficial de SILEX construida con Next.js App Router, TypeScript, Tailwind CSS y Framer Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages static export

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Export estático para GitHub Pages

```bash
npm run build
```

Para validar la variante de GitHub Pages con `basePath`:

```bash
GITHUB_PAGES=true npm run build
```

El sitio exporta a `out/` y el workflow de GitHub Actions despliega desde `main`.

## Qué funciona hoy

- Landing estática completa con App Router.
- Navbar responsive con menú mobile.
- Hero, servicios, dashboard, proceso, beneficios y CTA final.
- Animaciones suaves con Framer Motion.
- Formulario visual/client-side para diagnóstico.
- Responsive para desktop, tablet y teléfono.
- Deploy estático compatible con GitHub Pages.
- Branding base con isotipo, favicon y tipografía editorial.

## Limitaciones actuales

- El formulario no guarda datos todavía.
- No hay backend, autenticación ni panel administrativo.
- No hay analítica ni CMS.
- No existe integración con CRM o agenda.

## Próxima fase sugerida

- Conectar el formulario de diagnóstico con Firebase Firestore.
- Agregar flujo real de envío y seguimiento de leads.
- Incorporar analítica y eventos clave del funnel.

## Estructura

- `app/`: layout, página principal y metadata.
- `components/`: secciones reutilizables y UI base.
- `lib/constants.ts`: contenido centralizado para navegación, servicios, proceso y beneficios.
- `public/`: assets de marca para logo, isotipo y favicons.
