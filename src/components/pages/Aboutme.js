import React from 'react';
const profile = require('../../image/profile .png');

export default function Aboutme(){
    return(
        <div class="aboutme">
        <img src={profile} alt="shiba" width='150' align='left' />
        
        <h1>About Me</h1>
        <p id='introduction'>
        My name is Kaye and I am a UoT Boot Camp student, currently studing
        coding lanuage of HTML, CSS and JavaScript. 
        I found this course very interesting because I have a sense of achivement when I successfully structure and decrorating 
        a page by getting the result immediately. I used to work as a graphic designer. With equipting web developing skills, 
        I can turn myself into an UI designer in the near future.
        </p>
      </div>
    );
}