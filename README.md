# Strongform Physical Therapy & Performance

A website for a physical therapy practice, covering running rehabilitation, strength athletes, and return to sport. It brings the practice's services, approach, and contact options into one site, with Cliniko booking embedded on the contact page.

## Implementation

The application is in [`strongform-pt/`](strongform-pt). It uses React 18, React Router 6, Vite 5, and plain CSS.

[App.jsx](strongform-pt/src/App.jsx) defines the page routes and shared navigation. The home page is composed from individual sections, while each service has its own page. Copy and images are maintained in the repository.

[ContactPage.jsx](strongform-pt/src/pages/ContactPage.jsx) embeds the practice's Cliniko booking page and listens for its resize messages. Booking is handled by Cliniko. This app has no backend or database.

## Local development

With Node.js and npm installed, run these commands from the repository root:

```sh
cd strongform-pt
npm ci
npm run dev
```

The development server uses `http://localhost:3000`. No environment variables are required.

```sh
npm run build
npm run preview
```

The build output is `strongform-pt/dist/`. A static host needs to serve `index.html` for application routes so direct visits to paths such as `/services/running-rehab` work.

## Current scope

The pages, navigation, and booking embed are implemented. The separate contact form currently logs its values and displays a confirmation; it does not send a message. Automated tests are not included.
