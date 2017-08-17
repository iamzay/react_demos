import React from "react";
import NewsHeader from "./NewsHeader.js";
import NewsItem from "./NewsItem.js";
import data from "./items.json";
import "./NewsList.css";

const NewsList=()=>{
    return (
        <div className="newsList">
            <NewsHeader />
            {data.map((item,index)=>
                <NewsItem key={item.id} item={item} rank={index+1}/>
             )}
            <div className="newsList-more">
                More
            </div>
        </div>
    )
}

export default NewsList;
