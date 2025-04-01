import "./Testimonials.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import pencilimg from "/images/pencil.png";



function Testimonials(){

    const stories = [
        {
            id: 1,
            author: "Adam",
            comment: "My experience with Gurneer has been incredible. She has been tutoring me since Grade 11 to my first year of undergraduate. I have improved my math skills and gained new confidence. Gurneer is supportive, willing to help, punctual and very kind.",
        },
        {
            id: 2,
            author: "Noor",
            comment: "Gurneer is adept at explaining concepts in a way that makes learning easy, her explanations work for me every time!",
        },
        {
            id: 3,
            author: "Anureet",
            comment: "Gurneer is an exceptionally patient and understanding teacher. She made sure that concepts were well understood, and offered many approaches and insights in order to completely cover each topic until you're comfortable. She taught me Advanced functions and Calculus & vectors and I passed with a 98% in both!",
        }
    ]
    return<>
<section className="testimonials">
    <div className="testimonials__container">
            <h2 className="testimonials__title">Our Stories</h2>
            <img className="testimonials__img" src={pencilimg} alt="pencil image" />
            </div>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="testimonials-swiper"
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={story.id} className={`testimonial-card color-${index % 3}`}>
                        <p className="testimonial-text">"{story.comment}"</p>
                        <h3 className="testimonial-author">- {story.author}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </>
}
export default Testimonials;