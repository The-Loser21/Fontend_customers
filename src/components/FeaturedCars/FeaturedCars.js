// import React from 'react'
// import fc1 from '../assets/fc1.png';
// import fc2 from '../assets/fc2.png';
// import fc3 from '../assets/fc3.png';
// import fc4 from '../assets/fc4.png';
// import fc5 from '../assets/fc5.png';
// import fc7 from '../assets/fc7.png';
// import fc8 from '../assets/fc8.png';
// import './FeaturedCars.style.css';
// import Box from '@mui/material/Box';


// export const FeaturedCars = () => {
//     const cars = [{ title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc1 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2024", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc2 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc3 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc3 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc3 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc3 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc4 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc5 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc7 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc7 },
//     { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc8 }]

//     const FeaturedCar = ({ car }) => {
//         return (
//             <Box >
//                 <div class="featured-car">
//                     <div class="featured-car__box">
//                         <div class="featured-car__img">
//                             <img src={car.image} />
//                         </div>
//                         <div class="featured-car__info">
//                             <p>
//                                 {car.year}
//                                 <span class="featured-car__mi-span"> 3100 mi</span>
//                                 <span class="featured-car__hp-span"> 240HP</span>
//                                 automatic
//                             </p>
//                         </div>
//                     </div>
//                     <div class="featured-car__txt">
//                         <h2><a href="#">{car.model}</a></h2>
//                         <h3>   {car.prize}</h3>
//                         <p>
//                             {car.pretitle}
//                         </p>
//                     </div>
//                 </div>
//             </Box>

//         )

//     }
//     return (
//         <section id="featured-cars" class="featured-cars">
//             <div class="featured-cars__container">
//                 <div class="featured-cars__header">
//                     <h2>Checkout <span>the</span> featured cars</h2>
//                     <p>featured cars</p>
//                 </div>
//                 <div class="featured-cars__content">
//                     <Box sx={{ width: 1 }}>
//                         <Box className="feature-car__grid" display="grid" gap={2}>
//                             {cars.map((car) => (
//                                 <FeaturedCar car={car} />
//                             ))}
//                         </Box>
//                     </Box>
//                 </div>
//             </div>

//         </section>
//     )
// }



// Import thêm hook useEffect và useRef
import React, { useState, useRef } from 'react';
import fc1 from '../assets/fc1.png';
import fc2 from '../assets/fc2.png';
import fc3 from '../assets/fc3.png';
import fc4 from '../assets/fc4.png';
import fc5 from '../assets/fc5.png';
import fc7 from '../assets/fc7.png';
import fc8 from '../assets/fc8.png';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChiTiet from '../DesignCar/ChiTiet';

export const FeaturedCars = () => {
    const cars = [
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc1 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2024", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc2 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc3 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc4 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc5 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc7 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
    ];

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cars.length / itemsPerPage);

    // Tạo tham chiếu đến phần tử container để cuộn lên đầu
    const containerRef = useRef(null);

    const currentCars = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Cuộn lên đầu
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Cuộn lên đầu
        }
    };

    const FeaturedCar = ({ car }) => {
        return (
            <Box className="featured-car">
                <div className="featured-car__box">
                    <div className="featured-car__img">
                        <img src={car.image} alt={car.title} />
                    </div>
                    <div className="featured-car__info">
                        <p>{car.year} <span className="featured-car__mi-span">3100 mi</span> <span className="featured-car__hp-span">240HP</span> automatic</p>
                    </div>
                </div>
                <div className="featured-car__txt">
                    <h2><a href="#">{car.title}</a></h2>
                    <h3>{car.prize}</h3>
                    <p>{car.pretitle}</p>
                </div>
            </Box>
        );
    };

    return (
        <section id="featured-cars" className="featured-cars" ref={containerRef}>
            <div className="featured-cars__container">
                <div className="featured-cars__header">
                    <h2>Checkout <span>the</span> featured cars</h2>
                    <p>featured cars</p>
                </div>
                <div className="featured-cars__content">
                    <Box sx={{ width: 1, padding: '0 100px' }}>
                        <Box className="featured-car__grid" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                            {currentCars.map((car, index) => (
                                <FeaturedCar key={index} car={car} />
                            ))}
                        </Box>
                    </Box>
                    <Box
                        className="pagination-buttons"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                    >
                        <Button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginRight: '8px',
                                padding: '4px 12px',
                            }}
                        >
                            Previous
                        </Button>
                        <span style={{ margin: '0 16px' }}>Page {currentPage} of {totalPages}</span>
                        <Button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginLeft: '8px',
                                padding: '4px 12px',
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    );
};
