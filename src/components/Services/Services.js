
// import React, { useState } from 'react';
// import './Services.style.css';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
// import CloseIcon from '@mui/icons-material/Close';
// import Button from '@mui/material/Button';
// import SvgIcon from '@mui/material/SvgIcon';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';

// export const Services = () => {
//   const initialServices = [
//     {
//       name: 'Wuling Bingo 2024',
//       img: 'https://storage.googleapis.com/a1aa/image/OeTyu1RHdpVlKCdUn5CfafoTI9xDxzclqIn9pN21J5LnQDunA.jpg',
//       options: ['333 km - 399 triệu'],
//       icon: DirectionsCarIcon,
//     },
//     {
//       name: 'Audi A4 2021',
//       img: 'https://storage.googleapis.com/a1aa/image/enf4XXV2z2vVJ0efSppMTxCqtye0R3Ubt1weXbLh6AUwFaw9E.jpg',
//       options: ['40 TFSI Advanced - ...'],
//       icon: LocalShippingIcon,
//     },
//     {
//       name: 'Audi A7 2022',
//       img: 'https://storage.googleapis.com/a1aa/image/VNiyw1B5l2JnGplTg9AlXVuIPsef0QSkGfJ3NocWp51sQDunA.jpg',
//       options: ['55 TFSI quattro - 2 tỷ...'],
//       icon: LocalCarWashIcon,
//     },
//     {
//       name: 'Wuling Hongguang Mini EV 2023',
//       img: 'https://storage.googleapis.com/a1aa/image/sT2RIksaCK46BtAEPoFvrqFkKreeSPwTuBYSjaYlrZVUoB3TA.jpg',
//       options: ['undefined'],
//       icon: DirectionsCarIcon,
//     },
//   ];

//   const [services, setServices] = useState(initialServices);
//   const [openModal, setOpenModal] = useState(false);
//   const [newCar, setNewCar] = useState({ brand: '', name: '' });
//   const [currentIndex, setCurrentIndex] = useState(null); // Track current index for modal

//   const removeService = (index) => {
//     const updatedServices = [...services];
//     updatedServices[index] = null;
//     setServices(updatedServices);
//   };

//   const restoreService = (index) => {
//     setCurrentIndex(index); // Store the index of the placeholder
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setCurrentIndex(null); // Clear the current index after closing modal
//   };

//   const handleAddCar = () => {
//     if (currentIndex === null) return; // Ensure index is valid before proceeding

//     const newService = {
//       name: `${newCar.brand} ${newCar.name}`,
//       img: 'https://via.placeholder.com/150',
//       options: ['Chưa có thông tin'],
//       icon: DirectionsCarIcon,
//     };
//     const updatedServices = [...services];
//     updatedServices[currentIndex] = newService; // Use the stored index to update the correct service
//     setServices(updatedServices);
//     setOpenModal(false);
//     setNewCar({ brand: '', name: '' });
//   };

//   const Service = ({ service, index }) => (
//     <div className="single-service-item">
//       <div className="service-image-container">
//         <img src={service.img} alt={service.name} className="service-image" />
// <button
//   className="close-button"
//   onClick={() => removeService(index)}
// >
//   <SvgIcon component={CloseIcon} />
// </button>
//       </div>
//       <h3 className="service-name">{service.name}</h3>
//       <div className="service-options">
//         <select className="service-select">
//           {service.options.map((option, idx) => (
//             <option key={idx}>{option}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );

//   const Placeholder = ({ index }) => (
//     <div className="single-service-item placeholder">
//       <Button
//         variant="outlined"
//         color="primary"
//         onClick={() => restoreService(index)}
//       >
//         Thêm
//       </Button>
//     </div>
//   );

//   return (
//     <section id="service" className="service-section">
//       <div className="service-container">
//         <div className="service-header">
//           <h2 className="service-title">
//             So Sánh Xe{' '}
//             <span className="service-subtitle">
//               (Bạn chỉ được phép chọn 4 xe cùng một lúc)
//             </span>
//           </h2>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={() => setServices(Array(4).fill(null))}
//           >
//             Xóa Tất Cả
//           </Button>
//         </div>
//         <div className="service-content">
//           {services.map((service, index) =>
//             service ? (
//               <Service service={service} index={index} key={index} />
//             ) : (
//               <Placeholder index={index} key={index} />
//             )
//           )}
//         </div>
//         <div className="service-footer">
//           <Button variant="contained" color="primary">
//             So Sánh
//           </Button>
//         </div>
//       </div>

//       {/* Modal for adding new car */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>Thêm so sánh xe</DialogTitle>
//         <DialogContent>
//           <div className="modal-field">
//             <label htmlFor="brand">Hãng xe:</label>
//             <TextField
//               id="brand"
//               value={newCar.brand}
//               onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
//               fullWidth
//             />
//           </div>
//           <div className="modal-field">
//             <label htmlFor="name">Tên xe:</label>
//             <TextField
//               id="name"
//               value={newCar.name}
//               onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
//               fullWidth
//             />
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="secondary">
//             Hủy
//           </Button>
//           <Button onClick={handleAddCar} color="primary">
//             Thêm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </section>
//   );
// };


import React, { useState } from 'react';
import './Services.style.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export const Services = () => {
  const initialServices = [
    {
      name: 'Wuling Bingo 2024',
      img: 'https://storage.googleapis.com/a1aa/image/OeTyu1RHdpVlKCdUn5CfafoTI9xDxzclqIn9pN21J5LnQDunA.jpg',
      options: ['333 km - 399 triệu'],
      icon: DirectionsCarIcon,
    },
    {
      name: 'Audi A4 2021',
      img: 'https://storage.googleapis.com/a1aa/image/enf4XXV2z2vVJ0efSppMTxCqtye0R3Ubt1weXbLh6AUwFaw9E.jpg',
      options: ['40 TFSI Advanced - ...'],
      icon: LocalShippingIcon,
    },
    {
      name: 'Audi A7 2022',
      img: 'https://storage.googleapis.com/a1aa/image/VNiyw1B5l2JnGplTg9AlXVuIPsef0QSkGfJ3NocWp51sQDunA.jpg',
      options: ['55 TFSI quattro - 2 tỷ...'],
      icon: LocalCarWashIcon,
    },
    {
      name: 'Wuling Hongguang Mini EV 2023',
      img: 'https://storage.googleapis.com/a1aa/image/sT2RIksaCK46BtAEPoFvrqFkKreeSPwTuBYSjaYlrZVUoB3TA.jpg',
      options: ['undefined'],
      icon: DirectionsCarIcon,
    },
  ];

  const [services, setServices] = useState(initialServices);
  const [openModal, setOpenModal] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [newCar, setNewCar] = useState({ brand: '', name: '' });
  const [currentIndex, setCurrentIndex] = useState(null); // Track current index for modal

  const removeService = (index) => {
    const updatedServices = [...services];
    updatedServices[index] = null;
    setServices(updatedServices);
  };

  const restoreService = (index) => {
    setCurrentIndex(index); // Store the index of the placeholder
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentIndex(null); // Clear the current index after closing modal
  };

  const handleAddCar = () => {
    if (currentIndex === null) return; // Ensure index is valid before proceeding

    const newService = {
      name: `${newCar.brand} ${newCar.name}`,
      img: 'https://via.placeholder.com/150',
      options: ['Chưa có thông tin'],
      icon: DirectionsCarIcon,
    };
    const updatedServices = [...services];
    updatedServices[currentIndex] = newService; // Use the stored index to update the correct service
    setServices(updatedServices);
    setOpenModal(false);
    setNewCar({ brand: '', name: '' });
  };

  const renderComparisonTable = () => {
    const validServices = services.filter((service) => service !== null);

    if (validServices.length === 0) return null;

    const keys = ['name', 'options']; // Các trường cần so sánh

    return (
      <div className="comparison-table-container">
        <h3>Bảng So Sánh</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Thuộc tính</th>
              {validServices.map((service, idx) => (
                <th key={idx}>{service.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((key) => (
              <tr key={key}>
                <td>{key === 'options' ? 'Tùy chọn' : 'Tên xe'}</td>
                {validServices.map((service, idx) => (
                  <td key={idx}>
                    {key === 'options'
                      ? service[key]?.join(', ') || ''
                      : service[key] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const Service = ({ service, index }) => (
    <div className="single-service-item">
      <div className="service-image-container">
        <img src={service.img} alt={service.name} className="service-image" />
        <button className="close-button" onClick={() => removeService(index)}>
          <SvgIcon component={CloseIcon} />
        </button>
      </div>
      <h3 className="service-name">{service.name}</h3>
      <div className="service-options">
        <select className="service-select">
          {service.options.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const Placeholder = ({ index }) => (
    <div className="single-service-item placeholder">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => restoreService(index)}
      >
        Thêm
      </Button>
    </div>
  );

  return (
    <section id="service" className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2 className="service-title">
            So Sánh Xe{' '}
            <span className="service-subtitle">
              (Bạn chỉ được phép chọn 4 xe cùng một lúc)
            </span>
          </h2>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setServices(Array(4).fill(null))}
          >
            Xóa Tất Cả
          </Button>
        </div>
        <div className="service-content">
          {services.map((service, index) =>
            service ? (
              <Service service={service} index={index} key={index} />
            ) : (
              <Placeholder index={index} key={index} />
            )
          )}
        </div>
        <div className="service-footer">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowComparison(true)}
          >
            So Sánh
          </Button>
        </div>
        {showComparison && renderComparisonTable()}
      </div>

      {/* Modal for adding new car */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Thêm so sánh xe</DialogTitle>
        <DialogContent>
          <div className="modal-field">
            <label htmlFor="brand">Hãng xe:</label>
            <TextField
              id="brand"
              value={newCar.brand}
              onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
              fullWidth
            />
          </div>
          <div className="modal-field">
            <label htmlFor="name">Tên xe:</label>
            <TextField
              id="name"
              value={newCar.name}
              onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Hủy
          </Button>
          <Button onClick={handleAddCar} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};
