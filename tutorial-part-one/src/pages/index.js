import React from "react"
import Link from "gatsby-link";

export default () => 
<div style = {{ color: `tomato` }}>
    <h1>'Hello world!</h1>
    <p> What a world</p>  
    <img src = "https://source.unsplash.com/random/400x200" alt = "" />
    <br />
    <div>
        <Link to ="/page-2">Link</Link>
    </div>
    <div>
        <Link to ="/page-3">Page 3 </Link>
    </div>
    <div>
        <Link to ="/counter/">Counter</Link>
    </div>
</div>

// Tutorial Steps taken
/* 

1) Added style to Div
2) Added h1 tags and p tags
3) Added image
4) Imported Link to add links

*/