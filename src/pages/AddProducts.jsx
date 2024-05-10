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
            price,
            countInStock,
            category
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