import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/Slices/ProductSlices';
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider'
import Products from '../Products/Products'
import { Link } from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}, []);
  const dispatch = useDispatch()
  const data = useSelector((state) => state.product.data?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  // console.log(data)
  const [showCarts, setShowCarts] = useState(false)
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleMouseEnter = (id) => {
    setShowCarts((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleMouseExit = (id) => {
    setShowCarts((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='max-w-[1500px] mx-auto p-3'>
      <div className='breadcrumbs'>
        <div className='w-full mb-5 text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
          <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Shop</h1>
          <span>
            Home <span><i className="ri-arrow-left-s-line"></i></span>Shop{' '}

          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {currentProducts && currentProducts.map((item, index) => (
          <div key={index} className='categories-cards rounded-lg'>
            <Link to={`/SingleProducts/${item._id}`} className='card'>
              <div onMouseEnter={() => handleMouseEnter(item._id)} onMouseLeave={() => handleMouseExit(item._id)} className='categories-imgs'>
                {item.image.map((imgs, key) => (
                  <img key={key} src={imgs} alt="" />
                ))}
                <div className='product-details'>
                  <span>{item.ProductName}</span>
                  <div className={`mb-5 absolute hover ${showCarts[item._id] ? 'right-0' : 'right-[-92px]'} top-[-30px]`}>
                    <ul className='flex w-full items-end justify-end '>
                      <li className='px-2 bg-gray-800 py-2'>
                        <Link href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                          <i className="ri-handbag-fill text-white"></i>
                        </Link>
                      </li>
                      <li className='px-2 bg-gray-800 py-2'>
                        <Link href="#" title="Add To Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                          <i className="ri-heart-fill text-white "></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='tag'>
                  {item.tag}
                </div>
              </div>

            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Shop