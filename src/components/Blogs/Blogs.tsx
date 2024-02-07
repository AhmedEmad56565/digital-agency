import { Blog_1, Blog_2, Blog_3 } from '../../assets/blogs';
import BlogPost from './BlogPost';

const data = [
  {
    name: 'Realtime analytics',
    img: Blog_1,
    text: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.',
  },
  {
    name: 'Best offers',
    img: Blog_2,
    text: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.',
  },
  {
    name: 'Great teamwork',
    img: Blog_3,
    text: '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.',
  },
];

export default function Blogs() {
  return (
    <section className='bg-gray-300 pt-10 pb-14 dark:bg-gray-900'>
      <div className='container'>
        <h2
          data-aos='fade-up'
          className='text-2xl sm:text-3xl font-semibold capitalize border-l-8 border-main pl-3 py-2'
        >
          our blogs
        </h2>

        <div className='grid grid-cols-blos-xs sm:grid-cols-blogs gap-x-8 mt-10'>
          {data.map((item, i) => (
            <BlogPost key={item.name} item={item} i={i} />
          ))}
        </div>
        <div className='text-center'>
          <button data-aos='fade-up'>view all posts</button>
        </div>
      </div>
    </section>
  );
}
