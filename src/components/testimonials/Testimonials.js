import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    
  return (
    <section id="testimonials" className="_newsletter-area section-padding-100-0 testimonialsMainWrapper">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="_newsletter-text mb-100 text-center">
                        <h2>See what our customers are saying</h2>


                        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://www.tutorialspoint.com/bootstrap/images/64.jpg" className="my-3 d-inline-block img-thumbnail-ns" alt='' />
                                <div className="carousel-caption position-relative d-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://www.tutorialspoint.com/bootstrap/images/64.jpg" className="my-3 d-inline-block img-thumbnail-ns" alt='' />
                                <div className="carousel-caption position-relative d-block">
                                    <h5>Second slide label</h5>
                                    <p>__Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src="https://www.tutorialspoint.com/bootstrap/images/64.jpg" className="my-3 d-inline-block img-thumbnail-ns" alt='' />
                                <div className="carousel-caption position-relative d-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials