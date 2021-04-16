import React from 'react';

 import BlogPost from '../BlogPost/BlogPost';

import apron from '../../../images/testimonial-1.jpg'
import cleaning from '../../../images/testimonial-2.jpg'
import cleaningStuff from '../../../images/testimonial-3.jpg'
import testimonial from '../../../images/testimonial-4.jpg'

const blogData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        title: 'Tyrese Gibson',
        img : apron
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : cleaning
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : cleaningStuff
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : testimonial
    }
]

const Blogs = () => {
    return (
        <section className="testimonials mt-5">
            <div className="container">
                <div className="section-header">
                      <h5 style={{color:'#5FC7C7'}} className="text-uppercase"></h5>
                      <h1 style={{fontWeight:'450'}}>What's Our Customer <br/> Says </h1>
                </div>
                <div className="row mt-5">
                        {
                            blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                        }
                </div>
                <div className="text-center mb-5">
                <h4>Tyrese Gibson</h4>
                <h6>Clarion Hotel - Manager</h6>
                <h5 style={{fontWeight:'450'}} className="text-secondary">Black mark ac lectus nec leo euismod ultrices. Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit amet risus. Pellentesque ac lectus nec leo euismod ultrices.<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit amet risus.</h5>
                </div>
            </div>
        </section>
       
    );
};

export default Blogs;