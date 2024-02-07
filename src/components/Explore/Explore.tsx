import {
  FaCameraRetro,
  FaRegAddressBook,
  FaRegListAlt,
  FaFileInvoice,
} from 'react-icons/fa';

const data = [
  {
    icon: <FaCameraRetro size={30} />,
    name: 'App Development',
    text: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
  },
  {
    icon: <FaRegAddressBook size={30} />,
    name: 'Web Designing',
    text: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
  },
  {
    icon: <FaRegListAlt size={30} />,
    name: 'Graphic Designing',
    text: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
  },
  {
    icon: <FaFileInvoice size={30} />,
    name: 'Digital Marketing',
    text: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
  },
];

export default function Explore() {
  return (
    <section className='bg-gray-100 py-12 dark:bg-black'>
      <div className='container'>
        <div className='text-center'>
          <h2
            data-aos='fade-up'
            className='text-2xl capitalize text-main font-bold mb-3'
          >
            explore our services
          </h2>
          <p data-aos='fade-up' data-aos-delay='300'>
            We are self-service data analytics software that lets you create
            visually.
          </p>
        </div>

        <div className='grid grid-cols-auto-fill gap-x-8 gap-y-12 py-14'>
          {data.map((item, i) => (
            <div
              data-aos='fade-up'
              data-aos-delay={i * 300}
              key={item.name}
              className='space-y-5'
            >
              <div className='text-main'>{item.icon}</div>
              <h4 className='text-lg font-semibold'>{item.name}</h4>
              <p className='text-gray-600'>{item.text}</p>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <button
            data-aos='fade-up'
            data-aos-delay={300}
            className='capitalize'
          >
            learn more
          </button>
        </div>
      </div>
    </section>
  );
}
