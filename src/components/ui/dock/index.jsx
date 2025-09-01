import Icon from "@/utils/getIcon";
import Link from "next/link";

export default function Dock() {
  return (
    <div className='dock'>
      <nav className='dock__nav'>
        <ul className='dock__list'>
          <li className='dock__item'>
            <Link className='dock__link' href='/'>
              <Icon.home className='dock__icon' size={22} />
            </Link>
          </li>
          <li className='dock__item'>
            <Link className='dock__link' href='/search'>
              <Icon.search className='dock__icon' size={22} />
            </Link>
          </li>
          <li className='dock__item'>
            <Link className='dock__link' href='/calendar'>
              <Icon.calendar className='dock__icon' size={22} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
