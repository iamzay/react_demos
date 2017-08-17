import React from "react";
import "./NewsItem.css";

const NewsItem=({item,rank})=>{
    let pattern=/https?:\/\/([\s\S]+?)\//i;
    let res=pattern.exec(item.url);
    let domain="";
    if(res!==null){
        domain=res[1];
    }
    let commentText="discuss";
    if(item.kids&&item.kids.length){
        commentText=`${item.kids.length} comments`;
    }

    return (
        <div className="newsItem">
            <div className="newsItem-rank">
                {rank?rank:1}
            </div>
            <div className="newsItem-vote">
                <img alt="vote" src="./grayarrow2x.gif" width="10"/>
            </div>
            <div className="newsItem-itemText">
                <a className="newsItem-titleLink" href={item.url}>{item.title}</a>
                <span className="newsItem-domain">({domain})</span>
                <div className="newsItem-subtext">
                    {item.score} points by {item.by} {item.time} | {commentText}
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
