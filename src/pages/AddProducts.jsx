import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const AddProducts = () => {
    const [name, setName] = useState("");
    const [seller, setSeller] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [countInStock, setcountInStock] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let errorMessage = "";

        if (name.length === 0) {
            errorMessage = "Please enter the value in shop name field";
        } else if (seller.length === 0) {
            errorMessage = "Please enter the value in seller name field";
        } else if (description.length === 0) {
            errorMessage = "Please enter the value in description field";
        } else if (price.length === 0) {
            errorMessage = "Price must be valid";
        } else if (countInStock.length === 0) {
            errorMessage = "countInStock must be valid";
        } else if (category.length === 0) {
            errorMessage = "category must be valid";
        }

        if (errorMessage) {
            toast.warn(errorMessage);
            return false; // Return false if there's an error
        }

        return true; // Return true if all validations pass
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let regObj = {
            id: nanoid(),
            name,
            seller,
            description,
            isInStock: true,
            gender: "male",
            category,
            state: "Rajasthan",
            district: "Jaipur",
            availableSizes: [
                37,
                38,
                39,
                40,
                41,
                42,
                43
            ],
            rating: 5,
            reviews: [
                {
                    username: "Errol Grabber",
                    userImage: "/src/assets/user profile photo 6.jpg",
                    location: "USA",
                    rating: 1,
                    date: "January 31, 2022",
                    reviewTitle: "I am not happy with this product...!!!",
                    reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero distinctio maxime quidem aperiam ut expedita voluptate similique, officia, maiores a minus fugit explicabo dolor iure quisquam in voluptatibus ipsa facilis aliquid. Labore nulla quibusdam adipisci eligendi eum accusamus repellat!"
                },
                {
                    username: "Kristofer Comi",
                    userImage: "/src/assets/user profile photo 7.jpg",
                    location: "Argentina",
                    rating: 5,
                    date: "January 31, 2022",
                    reviewTitle: "Excellent product...!!!",
                    reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero distinctio maxime quidem aperiam ut expedita voluptate similique, officia, maiores a minus fugit explicabo dolor iure quisquam in voluptatibus ipsa facilis aliquid. Labore nulla quibusdam adipisci eligendi eum accusamus repellat!"
                },
                {
                    username: "Luciano Haarman",
                    userImage: "/src/assets/user profile photo 2.jpg",
                    location: "Greece",
                    rating: 5,
                    date: "January 31, 2022",
                    reviewTitle: "I am very happy...!!!",
                    reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero distinctio maxime quidem aperiam ut expedita voluptate similique, officia, maiores a minus fugit explicabo dolor iure quisquam in voluptatibus ipsa facilis aliquid. Labore nulla quibusdam adipisci eligendi eum accusamus repellat!"
                }
            ],
            totalReviewCount: 2710,
            productionDate: "2022-10-31T09:00:00.594Z",
            price: {
                current: {
                    value: 110,
                    text: "$110.00"
                }
            },
            brandName: "Nike",
            productCode: 127493614,
            imageUrl: "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-1-black",
            additionalImageUrls: [
                "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-1-black",
                "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-2",
                "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-3",
                "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-4"
            ],
            shop: {
                id: 1,
                name: "Raj Shoes Shop"
            },
            otherVendorsData: [
                {
                    shop: {
                        id: 2,
                        name: "Akash Shoes Store"
                    },
                    price: {
                        current: {
                            value: 115,
                            text: "$115.00"
                        }
                    },
                    rating: 4.5,
                    reviews: [
                        {
                            username: "John Doe",
                            userImage: "/src/assets/user-profile.jpg",
                            location: "Canada",
                            rating: 4,
                            date: "February 15, 2024",
                            reviewTitle: "Great quality but a bit expensive",
                            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tellus eu libero congue interdum. Nullam ultricies, elit vel tempus sollicitudin, nisl odio vestibulum justo, sit amet pharetra mi lacus ac ipsum."
                        },
                        {
                            username: "Alice Smith",
                            userImage: "/src/assets/user-profile.jpg",
                            location: "United Kingdom",
                            rating: 5,
                            date: "February 12, 2024",
                            reviewTitle: "Best shoes ever!",
                            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tellus eu libero congue interdum. Nullam ultricies, elit vel tempus sollicitudin, nisl odio vestibulum justo, sit amet pharetra mi lacus ac ipsum."
                        }
                    ]
                },
                {
                    shop: {
                        id: 3,
                        name: "Fashion Footwear"
                    },
                    price: {
                        current: {
                            value: 105,
                            text: "$105.00"
                        }
                    },
                    rating: 4.2,
                    reviews: [
                        {
                            username: "Emily Brown",
                            userImage: "/src/assets/user-profile.jpg",
                            location: "Australia",
                            rating: 4,
                            date: "February 10, 2024",
                            reviewTitle: "Good shoes, but took a while to deliver",
                            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tellus eu libero congue interdum. Nullam ultricies, elit vel tempus sollicitudin, nisl odio vestibulum justo, sit amet pharetra mi lacus ac ipsum."
                        },
                        {
                            username: "David Wilson",
                            userImage: "/src/assets/user-profile.jpg",
                            location: "Germany",
                            rating: 4.5,
                            date: "February 8, 2024",
                            reviewTitle: "Comfortable and stylish",
                            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tellus eu libero congue interdum. Nullam ultricies, elit vel tempus sollicitudin, nisl odio vestibulum justo, sit amet pharetra mi lacus ac ipsum."
                        }
                    ]
                }
            ]
        };


        if (isValidate()) {
            fetch("http://localhost:8080/products", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(regObj),
            })
                .then((res) => {
                    console.log("Response: ", res)
                    toast.success("Shop Registration Successful");
                    navigate("/become-seller");
                })
                .catch((err) => {
                    toast.error("Failed: " + err.message);
                });
        }
    };
    return (
        <>
            <SectionTitle title="Add Products" path="Become a Seller | Add Products" />
            <div className="flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
                        <form className="px-5 py-7" onSubmit={handleSubmit}>
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Product Name
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={seller}
                                onChange={(e) => setSeller(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Description
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Price
                            </label>
                            <input
                                type="tel"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Count in Stock
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={countInStock}
                                onChange={(e) => setcountInStock(e.target.value)}
                                required={true}
                            />
                            <label className="font-semibold text-sm pb-1 block text-accent-content">
                                Category
                            </label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required={true}
                            />
                            <button
                                type="submit"
                                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Add Products</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                    {/* <div className="py-5 text-center">
                        <Link
                            to="/login"
                            className="btn btn-neutral text-white"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Already have an account? Please login.
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default AddProducts;