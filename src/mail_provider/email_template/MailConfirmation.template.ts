export function createConfimationTemplate(
  email: string,
  confirmationLink: string,
): string {
  const template = `<!DOCTYPE html>
  <html lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title>Document</title>
      <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font" />
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font" />
  </head>
  
  
  <style>
      table, td, div, h1, p {font-family: Arial, sans-serif,Montserrat;}
      /* .template-container{
          background-color: #EAF0F3;
          padding-top: 172px;
          width: 100%;
          height: 100vh;
          
      } */
      /* .template-card{
          background-color: white;
          width: 900px;
          height: 900px;
          margin:0px auto;
          padding:40px;
          margin-right: 116px;
          margin-left: 116px;
      } */
      /* .innovaz-logo{
          padding-bottom: 48;
          background-color: white;
      } */
      .innovaz-logo img{
          display: block;
          margin: 0px auto;
      }
      /* .template-body2 h2{
          font-weight: 500px;
          text-align: center;
      }  */
      .template-body2 div{
          text-align: center;
      }
      
  </style>
  <body >
      <div class="template-container" style="  background-color: #EAF0F3;
      padding-top: 172px;
      padding-bottom: 172px;
      text-align: justify;
      width: 100%;
      height: 100vh;">
          <div class="template-card" style="        background-color: white;
          width: 580px;
          height: 300px;
          margin:0px auto;
          padding:40px;">
              <div class="innovaz-logo" style="        padding-bottom: 48;
              background-color: white;">
                  <img class="innovaz-logo innovaz-logo1" 
                      style=" display: block;
                              margin: 0px auto;" 
                      src="https://testnet.innovaz.io/_next/static/media/logo.aaf51287.png?auto=format&fit=max&w=3840" alt="">
                  <!-- <img class="innovaz-logo innovaz-logo2" src="./IZ_free-file 2.png" alt=""> -->
              </div>
              <div class="template-body2" style="        font-weight: 500px;
              text-align: center;">
                  <h2 style="color: var(--ticket-text, #292929);
                  text-align: center;
                  
                  /* Bold/2XL 24px|32px */
                  /* font-family: Montserrat; */
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 32px; /* 133.333% */">Welcome to FIT Classroom</h2>
                  <div class="template-qr" style=" text-align: center; margin:10px;"> <img style=" width:130px" src="cid:image1 " alt=""></div>
                  <div class="template-nft-id" style=" text-align: center;" >
                      <span style="color: var(--ticket-text, #292929);
  
                      /* Medium/SM 14px|20px */
                      /* font-family: Montserrat; */
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 20px; /* 142.857% */">Your Email:</span>
                      <span style="color: var(--innovation-z-organge, #FA8C16);
                      /* font-family: Montserrat; */
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 700;
                      line-height: 24px; /* 171.429% */">${email}</span>
                  </div> 

                  <div style=" text-align: center;"> 
                      <p style="color: var(--ticket-text, #292929);
                      text-align: center;

                      font-size: 15px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 20px; /* 142.857% */"> To complete your registration, please verify your account by clicking the button below.</p>
                  </div>
                  <div style="text-align: center; margin-top:10px; margin-bottom:30px" >
                      <a style="
                      text-decoration: none; 
                      backface-visibility: hidden;
                      background-color: #405cf5;
                      border-radius: 6px;
                      border-width: 0;
                      display:inline-block;
                      box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
                      box-sizing: border-box;
                      color: #fff;
                      height: 44px !important;
                      line-height: 1.15;
                      margin: 12px 0 0;
                      outline: none;
                      overflow: hidden;
                      padding: 0 25px;
                  
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 700;
                      line-height: 44px; /* 150% */"
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 700;
                      href=${confirmationLink}
                     >Verify your email</a>
                  </div>
                  <div class="template-body3" style="margin-top: 10px; margin-bottom: 10px;">
                      <div style="                        color: var(--light-secondary, #7F7F7F);
                      /* Medium/SM 14px|20px */
                      /* font-family: Montserrat; */
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 20px; /* 142.857% */">This is an automated message, please do not reply.</div>
                  </div>
                  <div style="color: #000;
                  text-align: center;
                  /* Regular/SM 14px|20px */
                  /* font-family: Montserrat; */
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  margin-bottom: 10px;
                  line-height: 20px; /* 142.857% */">Copyright © 2023</div>
              </div>
          </div>
      </div>
  </body>
  </html>
  `;
  return template;
}
