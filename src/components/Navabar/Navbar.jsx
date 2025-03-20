import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { useCart } from "../../context/CartContext";
import { CategoryContext } from "../../context/CategoryContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categories } = useContext(CategoryContext);
  const { cart } = useCart(); // Access cart from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the mobile menu


  const getLinkClass = (path) =>
    location.pathname === path
      ? "border-b-2 border-orange-500 pb-1"
      : "pb-1";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white flex justify-between py-5 sm:px-10 px-2 font-light z-50 border-b-2 text-base border-gray-500 shadow-[0px_0px_3px_0px_black]">
      <ul className="flex  items-center sm:gap-3 gap-2" >
        <li className="font-bold text-xl -mt-1 hidden sm:block">
          <Link to="/">Shopi</Link>
        </li>
        {[{ id: 'all', name: 'All', slug: '/' }, ...categories].map((category) => (
          <li key={category.id}>
            <Link to={category.slug === '/' ? '/' : `/${category.slug}`} className={getLinkClass(category.slug === '/' ? '/' : `/${category.slug}`)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="lg:flex hidden items-center gap-3">
        <li>Akshay Palekar</li>
        <li onClick={() => navigate('/myorders')} className="cursor-pointer">My Orders</li>
        <li>My Account</li>
        <li className="flex">
          <FontAwesomeIcon icon={faCartShopping} className="mr-2 mt-1" aria-label="Cart" />
          <h2>{cart.reduce((total, item) => total + item.quantity, 0)}</h2>
        </li>
      </ul>
      <ul className="lg:hidden relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <FontAwesomeIcon icon={faCircleUser} className="text-2xl cursor-pointer" />
        </button>
        {isMenuOpen && (
        <div className="inline-block w-64 h-44 top-6 absolute bg-white border shadow-2xl border-neutral-400 rounded-lg right-2 p-2 fade-enter-done">
          <ul className="flex flex-col px-5 h-full w-full justify-around">
          <li>Akshay Palekar</li>
          <li onClick={() => navigate('/myorders')} className="cursor-pointer">My Orders</li>
          <li>My Account</li>
          <li className="flex">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2 mt-1" aria-label="Cart" />
            <h2>{cart.reduce((total, item) => total + item.quantity, 0)}</h2>
          </li> 
          </ul>
        </div>
        )}
      </ul>
    </nav>
  )
}
export default Navbar;
