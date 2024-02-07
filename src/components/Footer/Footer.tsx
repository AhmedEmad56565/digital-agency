import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const data = [
  {
    name: 'Company',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    name: 'Help',
    links: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    name: 'Resources',
    links: ['Free Ebooks', 'How To Blog', 'Subscribe TCJ', 'Contact Us'],
  },
];

export default function Footer() {
  return (
    <footer className='dark:bg-black'>
      <div className='container py-12 grid grid-cols-auto-fill gap-x-8 gap-y-12'>
        <div>
          <h2 className='text-3xl font-bold mb-2'>Digital Agency</h2>
          <p className='text-gray-600 text-sm mb-6'>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>
          <div className='flex-center gap-4'>
            <a href='#'>
              <FaInstagram
                size={25}
                className='hover:text-main transition-colors duration-200'
              />
            </a>

            <a href='#'>
              <FaFacebook
                size={25}
                className='hover:text-main transition-colors duration-200'
              />
            </a>

            <a href='#'>
              <FaLinkedin
                size={25}
                className='hover:text-main transition-colors duration-200'
              />
            </a>
          </div>
        </div>

        {data.map((item) => (
          <div key={item.name}>
            <h4 className='text-xl font-semibold mb-3'>{item.name}</h4>
            <ul className='flex flex-col gap-2'>
              {item.links.map((link) => (
                <li
                  key={link}
                  className='text-gray-400 hover:text-main hover:pl-2 transition-all duration-300'
                >
                  <a href='#'>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
