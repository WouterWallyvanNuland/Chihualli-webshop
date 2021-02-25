import { Component, OnInit } from '@angular/core';
import express from 'express'; 
import { Request, Response } from "express";
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

@Component({
  selector: 'app-mail-server',
  templateUrl: './mail-server.component.html',
  styleUrls: ['./mail-server.component.scss']
})
export class MailServerComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    this.sendMail();
  }
  
  sendMail() {
    // create a new Express application instance 
  const app = new express();
  //configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let message = 'hello-world';
  let user = req.body;
  if (res.send(message)) {
    console.log('email sent');
  } else {
    console.log(' some thing went lost in translation');
  }
  });
}




}
