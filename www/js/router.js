//document.addEventListener('deviceready', onDeviceReady, false);

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
        path: '/index/',
        url: 'index.html',
        on: {
            pageInit: function (e, page) {
              $.getscript('js/index.js')
                           
            },
        }
      },
      {
        path: '/memorias/',
        url: 'memorias.html',
        on: {
            pageInit: function (e, page) {
              $.getscript('js/memorias.js')
       
            },
        }        
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main',{url:'/index/'});
