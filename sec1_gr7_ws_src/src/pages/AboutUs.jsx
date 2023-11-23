// AboutUs.js
import React from 'react';
import "./aboutus.css";

const AboutUs = ({reference}) => {
  return (
   <section id="aboutus" className="aboutus" ref={reference}> 
     <div>
      <h1>สมาชิกกลุ่ม</h1>
      <h3>นาย    ญาณกร จิตรธิรา รหัส 6587012 </h3>
      <h3>นางสาว กุลภรณ์ รัตนธรินทร์ รหัส 6587050 </h3>
      <h3>นาย    ณปภัช นภัสนันท์ รหัส 6587053 </h3>
      <h3>นางสาว พัชฎาภรณ์ กมลดี รหัส 6587061
 </h3>
     </div>
    </section> 
  );
};

export default AboutUs;
