import { Click, Segment, Github, Drop, Int } from '../assets';

const data = [
  {
    avatar: Click,
    name: 'click svg',
  },
  {
    avatar: Segment,
    name: 'segment svg',
  },
  {
    avatar: Github,
    name: 'github svg',
  },
  {
    avatar: Drop,
    name: 'drop svg',
  },
  {
    avatar: Int,
    name: 'int svg',
  },
];

export default function View() {
  return (
    <section className='py-10 sm:py-12 dark:bg-gray-900'>
      <div className='container max-w-[90%] sm:max-w-[70%] mx-auto'>
        <h3
          data-aos='fade-up'
          className='text-center text-[14px] sm:text-sm md:text-base'
        >
          Powering next-gen companies
        </h3>
        <div className='flex-between justify-center py-8 flex-wrap gap-4 sm:gap-5'>
          {data.map((item, i) => (
            <img
              data-aos='fade-up'
              data-aos-delay={i * 200}
              key={item.name}
              src={item.avatar}
              alt={item.name}
              className='w-24 md:w-auto'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
