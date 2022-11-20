import React from 'react';

const github = require('../../image/github.png');
const linkedin = require('../../image/linkedin.png');
const twitter = require('../../image/twitter.png');

const gitHubObj = 
{
    name:'gitHub',
    image: github,
    url: 'https://github.com/Kayexie'
}

const linkedInObj =
{
    name:'linkedin',
    image: linkedin,
    url: '#linkedIn'
}

const twitterObj =
{
    name:'twitter',
    image: twitter,
    url: '#twitter'
}

export default function Footer() {
    return(
        <div class="conatainer-footer">
            <div class="logo">
                <a target='_blank' rel='noreferrer' href={gitHubObj.url}>
                     <img src={gitHubObj.image} alt="gitHub" width="30"/> 
                </a>
            </div>
            <div class="logo">
                <a target='_blank' rel='noreferrer' href={linkedInObj.url}>
                     <img src={linkedInObj.image}  alt="gitHub" width="30"/> 
                </a>
            </div>
            <div class="logo">
                <a target='_blank' rel='noreferrer' href={twitterObj.url}>
                     <img src={twitterObj.image}  alt="gitHub" width="30"/> 
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
