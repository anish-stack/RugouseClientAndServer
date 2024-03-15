import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCarts, setShowCarts] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://www.api.rughouzz.in/api/v1/Products/${category}`);
                setProducts(response.data.data); // Assuming the response data is an array of products
            } catch (error) {
                setError(error.message);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

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

    return (
        <div className="max-w-[1600px] mx-auto p-3">
            <div className='breadcrumbs'>
                <div className='w-full mb-5 text-center text-pretty mt-3 bg-[#F0F0F0] min-h-40 px-5 py-5'>
                    <h1 className='text-xl mt-5 mb-2 md:text-4xl'>Categories Of  {category}</h1>
                    <span>
                        Home <span><i className="ri-arrow-left-s-line"></i></span>Categories{' '}<span><i className="ri-arrow-left-s-line"></i></span>
                        {category}
                    </span>
                </div>
            </div>


            {loading && <p>Loading...</p>}
            {error && (
                <div className="text-center">
                    {error.includes('404') ? (
                        <div className="w-full flex items-center justify-center flex-col text-center">

                            <img src="https://i.ibb.co/NnhBWC8/image.png" alt="No products found" />
                        </div>
                    ) : (
                        <p>Error: {error}</p>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <Link to={`/SingleProducts/${product._id}`} className="categories-cards rounded-lg" key={product._id}>
                        <div
                            onMouseEnter={() => handleMouseEnter(product._id)}
                            onMouseLeave={() => handleMouseExit(product._id)}
                            className="categories-imgs card"
                        >
                            {product.image.map((imgs, key) => (
                                <img key={key} src={imgs} alt="" />
                            ))}
                            <div className="product-details">
                                <span>{product.ProductName}</span>
                                <div
                                    className={`mb-5 absolute hover ${showCarts[product._id] ? 'right-0' : 'right-[-92px]'}  top-[-30px]`}
                                >
                                    <ul className="flex w-full products-end justify-end ">
                                        <li className="px-2 bg-gray-800 py-2">
                                            <Link href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                <i className="ri-handbag-fill text-white"></i>
                                            </Link>
                                        </li>
                                        <li className="px-2 bg-gray-800 py-2">
                                            <Link
                                                href="#"
                                                title="Add To Wishlist"
                                                data-bs-toggle="modal"
                                                data-bs-target="#liton_wishlist_modal"
                                            >
                                                <i className="ri-heart-fill text-white "></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tag">{product.tag}</div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
