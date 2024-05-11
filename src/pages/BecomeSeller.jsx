import React from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../components'

function BecomeSeller() {
    return (
        <>
                <SectionTitle title="Become a Seller" path="Home | Become a Seller" />
            <div className="flex justify-center items-center">
                <div className="join join-vertical p-3 flex m-3 gap-4">
                    <Link
                        to="/add-shops"
                        className="btn btn-neutral text-white hover:bg-blue-300">
                        Add Shops
                    </Link>
                    <Link
                        to="/add-products"
                        className="btn btn-neutral text-white hover:bg-blue-300">
                        Add Products
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BecomeSeller
