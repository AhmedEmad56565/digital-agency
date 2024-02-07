import { FaArrowRight } from 'react-icons/fa';

type BlogItemProps = {
  item: {
    name: string;
    text: string;
    img: string;
  };
  i: number;
};

export default function BlogPost({ item, i }: BlogItemProps) {
  return (
    <div data-aos='fade-up' data-aos-delay={i * 300} className='group'>
      <div className='overflow-hidden sm:h-[420px] rounded-md'>
        <img
          src={item.img}
          alt={item.name}
          className='w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300'
        />
      </div>

      <div className='py-2 px-3 md:py-4 md:px-6 bg-white dark:bg-gray-950 flex flex-col md:gap-3 gap-1 w-[90%] mx-auto -translate-y-1/2 rounded-md'>
        <h4 className='md:text-2xl font-semibold'>{item.name}</h4>
        <p className='text-[11px]/4 md:text-sm/6 text-gray-500'>{item.text}</p>
        <FaArrowRight className='self-end -translate-x-4 group-hover:text-main group-hover:translate-x-0 transition-transform duration-300' />
      </div>
    </div>
  );
}
