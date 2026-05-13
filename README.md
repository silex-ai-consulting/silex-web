# SILEX Web

Landing page oficial de SILEX construida con Next.js App Router, TypeScript, Tailwind CSS y Framer Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

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

## Estructura

- `app/`: layout, página principal y API route básica para contacto.
- `components/`: secciones reutilizables y UI base.
- `lib/constants.ts`: contenido centralizado para navegación, servicios, proceso y beneficios.

## Notas

- El formulario del diagnóstico envía a `POST /api/contact`.
- La API route está preparada para conectar más adelante con CRM, email o agenda externa.
