import React from 'react';
import emailjs from "emailjs.com";
// import emailjs from '@emailjs/browser';

export default function Register() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_nlcg4oq', 'template_4bdueel', e.target, 'TodtX9pFFUvwnQfDw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
return(
    <div>




    </div>
)




}




