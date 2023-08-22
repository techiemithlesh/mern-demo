import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const testimonialsData = [
        {
            id:1,
            name: "John Doe",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
        
        {
            id:2,
            name: "John Doe",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
        {
            id:3,
            name: "John Doe",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
        {
            id:4,
            name: "John Doe",
            Image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
        {
            id:5,
            name: "John Doe",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
        {
            id:6,
            name: "John Doe",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }, 
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    return (
        <section className="bg-gray-100 py-8 px-5 md:px-10" id="testimonial">
            <div className="container mx-auto pb-4">
                <h2 className="text-3xl font-semibold text-center mb-2">Customer Testimonials</h2>
                <p className="text-sm text-center text-gray-700 mb-6">
                    Discover the quality work we deliver. Our satisfied clients speak to our commitment.
                      Let's create something amazing together!
                </p>
                <Slider {...settings}>
                    {
                    testimonialsData.map((testimonial, index) => (
                        <div key={index}>
                            <Testimonial name={
                                    testimonial.name
                                }
                                review={
                                    testimonial.review
                                }
                                image ={testimonial.image}
                                />
                        </div>
                    ))
                } </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
