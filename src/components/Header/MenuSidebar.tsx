import { menuList } from '../../helpers/constants';
import { BiSolidUserCircle } from 'react-icons/bi';

type sidebarProps = {
  showSidebar: boolean;
  onClose: () => void;
};

export default function MenuSidebar({ showSidebar, onClose }: sidebarProps) {
  return (
    <aside
      className={
        !showSidebar
          ? 'fixed top-0 -left-full w-full h-screen z-50 transition-all duration-500'
          : 'fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500'
      }
    >
      <div
        className={
          !showSidebar
            ? 'fixed top-0 -left-full w-full h-screen bg-black/90 z-50 transition-all duration-200 dark:bg-slate-800/90'
            : 'fixed top-0 left-0 w-full h-screen bg-black/90 z-50 transition-all duration-200 dark:bg-slate-800/90'
        }
        onClick={() => onClose()}
      />

      <div className='absolute top-0 left-0 w-2/3 md:w-1/2 h-screen bg-white pt-16 px-8 z-[100] dark:bg-gray-900'>
        <div className='flex items-center gap-2'>
          <BiSolidUserCircle size={60} />
          <div className='text-sm capitalize'>
            <h3>hello user</h3>
            <p className='text-slate-500'>Premium user</p>
          </div>
        </div>
        <ul className='mt-12 grid grid-cols-1 gap-8'>
          {menuList.map((list) => (
            <li
              key={list.name}
              className='text-xl capitalize transition-all duration-300 hover:text-main hover:pl-5'
              onClick={() => onClose()}
            >
              <a href='#'>{list.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
