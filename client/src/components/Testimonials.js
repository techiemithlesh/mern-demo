import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial";


const Testimonials = ({darkMode}) => {
    const testimonialsData = [
        {
            id:1,
            name: "Mohit",
            image: 'https://digitallybird.com/assets/img/team/mohit_mourya.jpg',
            review: "Wow, I'm truly amazed by the outstanding web development services I received. From the very start, it was evident that this team was dedicated to excellence."
        }, 
        
        {
            id:2,
            name: "Rishabh Kumar",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            review: "I highly recommend their web development services to anyone seeking professionalism, reliability, and exceptional results. Thank you for an incredible job"
        }, 
        {
            id:3,
            name: "Dev Pandey",
            image: 'https://digitallybird.com/assets/img/team/devender_kumar_panday.jpg',
            review: "My website was not only delivered on time but also exceeded my expectations in terms of design and performance."
        }, 
        {
            id:4,
            name: "Bilal",
            Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU',
            review: "Their attention to detail was exceptional, and it was evident that they genuinely cared about delivering a high-quality product."
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
        <section className={`py-8 px-5 md:px-10 ${darkMode? 'bg-black' : 'bg-gray-100'}`} id="testimonial">
            <div className="container mx-auto pb-4">
                <h2 className={`text-3xl font-semibold text-center my-3 ${darkMode ? 'text-white' : 'text-black'}`}>Customer Testimonials</h2>
                <p className="font-semibold text-sm text-blue-600 hover:underline cursor-pointer text-center mt-2 mb-6">
                    Discover the quality work we deliver. Our satisfied clients speak to our commitment.
                      Let's create something amazing together!
                </p>
                <Slider {...settings} darkMode={darkMode}>
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
