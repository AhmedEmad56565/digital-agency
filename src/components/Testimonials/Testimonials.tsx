import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: 'David Calathan - Director of Design Operations, New York',
    text: 'The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 1,
    name: 'David Calathan - Director of Design Operations, New York',
    text: 'The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 1,
    name: 'Smith - Director of Operations, New York',
    text: 'The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.',
    img: 'https://picsum.photos/103/103',
  },
];

export default function Testimonials() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='slider-container py-16 dark:bg-black'>
      <div className='container' data-aos='fade-up' data-aos-delay='500'>
        <Slider {...settings}>
          {testimonialData.map((item) => (
            <div key={item.id}>
              <div className='grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 sm:max-w-[80%] mx-auto bg-gray-200 dark:bg-gray-900 p-4 rounded-lg'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full rounded-sm'
                />
                <div className='flex flex-col justify-center gap-5'>
                  <h2 className='text-xl md:text-2xl font-semibold'>
                    {item.name}
                  </h2>
                  <p className='md:max-w-[80%] font-thin'>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
