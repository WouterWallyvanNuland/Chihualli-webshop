import { Component, OnInit } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-mail-server',
  templateUrl: './mail-server.component.html',
  styleUrls: ['./mail-server.component.scss']
})
export class MailServerComponent implements OnInit {
  // https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
  constructor() { }
  
  ngOnInit(): void {
  }

  sendMailToWally() {
    const transporter = nodemailer.createTransport( 
      `smtps://<username>%40gmail.com:<password>@smtp.gmail.com` 
    ); 
  
    const mailOptions = { 
      from : 'from_test@gmail.com', 
      to : 'to_test@gmail.com', 
      subject : 'Hello', 
      text: 'Hello from node.js' 
    }; 
  
    transporter.sendMail( mailOptions, (error, info) => { 
      if (error) { 
        return console.log(`error: ${error}`); 
      } 
      console.log(`Message Sent ${info.response}`); 
    }); 
  }

  
  



}
