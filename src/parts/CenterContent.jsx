import React from "react";
import './content.css'
const Content=()=>{
    return(
        <div className="quote-container grid grid-cols-1">
        <h1 className="font-normal font-serif leading-relaxed text-4xl mb-6"> New Arrivals</h1>
        <p className="quote italic font-normal font-serif leading-relaxed" >Track work across the enterprise through an open, collaborative platform.Link issues across Jira and ingest data from other software development tools, so your IT support andoperations teams have richer contextual information to rapidly respond to requests, incidents, and changes.Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
        <a href="./signup" className="font-normal font-serif fancy-button font-bold text-lg lg:text-2xl uppercase px-6 lg:px-8 py-3 lg:py-4 mt-6 lg:mt-8">||&nbsp;&nbsp;Discover&nbsp;&nbsp;||</a>

      </div>
    )

}
export default Content;