import HeroLogo from '../../assets/hero.jpg';

export default function Hero() {
  return (
    <section className='flex-center py-14 sm:py-20 md:py-24 lg:py-36 dark:bg-gray-950'>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='grid grid-cols-1 gap-y-6 content-center'>
          <h1
            data-aos='fade-up'
            className='text-2xl sm:text-3xl md:text-5xl font-bold'
          >
            Building Brands in the <br />
            <span className='text-main'>Digital Agency</span>
          </h1>
          <p
            data-aos='fade-up'
            data-aos-delay='300'
            className='max-w-xl text-[10px] sm:text-sm md:text-base'
          >
            Your partner in navigating the ever-evolving landscape of digital
            marketing. From conceptualization to execution, we craft tailored
            solutions that drive results and elevate your brand to new heights.
          </p>
          <button data-aos='fade-up' data-aos-delay='500'>
            Get Started
          </button>
        </div>{' '}
        <img
          data-aos='zoom-in'
          src={HeroLogo}
          alt='hero'
          className='max-h-[350px] object-cover ml-auto w-full lg:w-auto rounded-2xl'
        />
      </div>
    </section>
  );
}
