var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'EVA',

    id: "com.eva",
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/memorias/',
        url: 'memorias.html',
      },
    ],
    // ... other parameters
  });