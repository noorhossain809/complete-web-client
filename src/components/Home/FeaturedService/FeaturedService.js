import React from 'react';
import features from '../../../images/houseClean.jpg'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 mb-4 m-md-0">
                       <img className="img-fluid" src={features} alt=""/>
                    </div>
                    <div className="col-md-5 align-self-center mt-3">
                        <h5>We Clean Everything</h5>
                    <h1 style={{fontWeight:'400'}}>The <span style={{fontWeight:'600'}}>Best Cleanups</span></h1>
                       <h5 className="text-secondary my-5">Offering innovative solutions is our passion. We endeavor to attain a high customer satisfaction in our field and want to exceed your expectations.</h5>
                         <button className="btn btn-primary text-uppercase mt-5">Know more of our services</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;