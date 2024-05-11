let regObj = {
    id: nanoid(),
    name,
    description,
    seller,
    state: "Rajasthan",
    district: "Jaipur",
    adress: "123 Main Street, Jaipur",
    phone: "+91 1234567890",
    email: "rajshoesshop@example.com",
    website: "www.rajshoesshop.com",
    openingHours: {
        Monday: "9:00 AM - 6:00 PM",
        Tuesday: "9:00 AM - 6:00 PM",
        Wednesday: "9:00 AM - 6:00 PM",
        Thursday: "9:00 AM - 6:00 PM",
        Friday: "9:00 AM - 6:00 PM",
        Saturday: "9:00 AM - 6:00 PM",
        Sunday: "Closed"
    },
    rating: 4.8,
    totalReviewCount: 102,
    products: [
        {
            id: 204525438,
            name: "Nike Air Force 1 '07 sneakers in white and black",
            category: "Shoes",
            price: {
                value: 110,
                currency: "USD",
                text: "$110.00"
            },
            imageUrl: "images.asos-media.com/products/nike-air-force-1-07-sneakers-in-white-and-black/204525438-1-black",
            rating: 5,
            reviews: [
                {
                    username: "Errol Grabber",
                    rating: 1,
                    reviewText: "I am not happy with this product...!!!",
                    date: "January 31, 2022"
                },
                {
                    username: "Kristofer Comi",
                    rating: 5,
                    reviewText: "Excellent product...!!!",
                    date: "January 31, 2022"
                },
                {
                    username: "Luciano Haarman",
                    rating: 5,
                    reviewText: "I am very happy...!!!",
                    date: "January 31, 2022"
                }
            ]
        },
        {
            id: 204525439,
            name: "Adidas Originals Superstar sneakers in white and gold",
            category: "Shoes",
            price: {
                value: 100,
                currency: "USD",
                text: "$100.00"
            },
            imageUrl: "images.asos-media.com/products/adidas-originals-superstar-sneakers-in-white-and-gold/204525439-1-gold",
            rating: 4.5,
            reviews: [
                {
                    username: "Maria Smith",
                    rating: 5,
                    reviewText: "Love these shoes! Very comfortable and stylish.",
                    date: "February 15, 2022"
                },
                {
                    username: "John Doe",
                    rating: 4,
                    reviewText: "Good quality but a bit pricey.",
                    date: "February 10, 2022"
                }
            ]
        }
    ]
};
