const express = require('express');
const https = require("https");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/signup.html');
  });
  
  app.post("/", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    var data={
      members:[
        {
          email_adress:email,
          status:"subscribed",
          merge_fields: {
            FNAME: fName,
            LNAME: lName
          }
        }
      ]
    }


    var jsonData = JSON.stringify(data);
    const apiKey = "1c1c0a5869170ea3827204ba74d3d8bd-us12";
    const list_id = "6f0f619a88";
    const url = "https://us12.api.mailchimp.com/3.0/lists/" + list_id

    const options ={
    method: "POST",
    auth: "GGuerraR:" + apiKey
    }
    const name = fName;
    var mailRequest= https.request(url, options, (response) => {
      if(response.statusCode === 200) {
        console.log("hola")
        response.on("data", (data) => {
            var jsonResp = JSON.parse(data);
            console.log(jsonResp);
            if(jsonResp["error_count"] === 0) {
              res.sendFile(__dirname +"/success.html", {name:name});
                
            } else {
                res.render(__dirname + "/failure.html", {name:name});
                console.log(jsonResp.errors[0]["error_code"]);
                console.log(jsonResp.errors[0]["error"]);
            }
        }).on("error", (e) => {
            res.render(__dirname + "/failure.html", {name:name});
        });
    } else {
        res.render(__dirname + "/success.html", {name:name});
    }
    });
    mailRequest.write(jsonData);
    mailRequest.end();
  });

  app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
  res.redirect("/");
});

    app.listen(3000, (err) =>{
        console.log("listening on port:3000");
        });