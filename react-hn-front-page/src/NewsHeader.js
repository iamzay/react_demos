import React from "react";
import "./NewsHeader.css";

const NewsHeader=()=>{
    let navLinks = [
        {
            name: 'new',
            url: 'newest'
        },
        {
            name: 'comments',
            url: 'newcomments'
        },
        {
            name: 'show',
            url: 'show'
        },
        {
            name: 'ask',
            url: 'ask'
        },
        {
            name: 'jobs',
            url: 'jobs'
        },
        {
            name: 'submit',
            url: 'submit'
        }
    ]
    return (
        <div className="newsHeader">
            <div className="newsHeader-logo">
                <a href="https://www.ycombinator.com"><img alt="logo" src="./y18.gif"/></a>
            </div>
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
            </div>
            <div className="newsHeader-nav">
                {navLinks.map(navLink=>
                    <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
                        {navLink.name}
                    </a>
                 )}
            </div>
            <div className="newsHeader-login">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
            </div>
        </div>

    )
}

export default NewsHeader;
