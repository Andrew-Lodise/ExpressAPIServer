//route imports
const apiRoutes = require('./routes/apiRoutes');
const Routes = require('./routes/Routes');

//express imports/setup
const express = require('express');
const app = express();

//ejs import/setup 
const layouts = require("express-ejs-layouts");
app.set('view engine', 'ejs');

// sets the port number for the server to run on
app.set('port', 3000);


//middlewear to read/parse the url as the body, in a non-nested format
app.use(
    express.urlencoded({
      extended: false,
    })
  );

//populates request.body with json formatted data
app.use(express.json());

//allows the use of layouts in ejs (have one layout.js file that is the skelatin of the other views)
app.use(layouts);

//servers static css.. imprvose loading of css? idk?
app.use(express.static("public"));

//logging
app.use('/', (req, res, next) => {
  if (req.url != "/favicon.ico"){
    console.log(req.method, req.url)
  next()
  }
})

// api routes
app.use('/api/', apiRoutes)

// frontend/view routes
app.use('/', Routes)


// listen for html requests
app.listen(app.get("port"), () => {
    console.log(`App is listening on port: ${app.get("port")}`)
});
