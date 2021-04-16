import React from 'react';

const BlogPost = (props) => {
    const {img} = props.blog;
    
    return (
         <div className="col-md-3 mb-5">
            <div className="p-3">
                     <img src={img} alt=""/>
            </div>
        </div>
        
    );
};

export default BlogPost;