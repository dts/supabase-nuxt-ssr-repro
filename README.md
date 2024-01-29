# Nuxt 3 + Supabase Hydration Mismatch Repro

This is a bug reproduction repo for this issue:
https://github.com/nuxt-modules/supabase/issues/329

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Reproduction

Go to /erroring, sign in, and click the button to trigger SSR error.

See useSSRAwareUser() for a composable that gets around the issue.
