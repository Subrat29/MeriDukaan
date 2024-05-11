import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreElement from '../components/StoreElement'; // Assuming you have a StoreElement component
import { SectionTitle } from '../components';

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [selectedState, setSelectedState] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [minRating, setMinRating] = useState(0);

  const states = [
    {
      name: 'Haryana',
      districts: ['Gurugram', 'Faridabad', 'Panipat', 'Sonipat', 'Ambala', 'Hisar']
    },
    {
      name: 'Gujarat',
      districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar']
    },
    {
      name: 'Uttarakhand',
      districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital', 'Mussoorie']
    },
  ];

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/shops'); // Adjust the URL accordingly
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    // Filter stores based on selectedState, selectedDistrict, and minRating
    let filtered = stores.filter(store => {
      if (selectedState !== 'all' && store.state !== selectedState) {
        return false;
      }
      if (selectedDistrict !== 'all' && store.district !== selectedDistrict) {
        return false;
      }
      if (store.rating < minRating) {
        return false;
      }
      return true;
    });

    setFilteredStores(filtered);
  }, [stores, selectedState, selectedDistrict, minRating]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('all'); // Reset district filter when state changes
  };

  return (
    <div className="container mx-auto">
      <SectionTitle title="Stores" path="Home | Stores" />
      {/* Filter options */}
      <div className="flex flex-col my-4 md:flex-row gap-4 mb-4">
        <div className="flex-grow">
          <label htmlFor="stateSelect" className="block mb-2 font-semibold text-grey-350 text-xl">Select State:</label>
          <select id="stateSelect" onChange={handleStateChange} value={selectedState} className="w-full px-4 py-2 border rounded-md">
            <option value="all">All States</option>
            {states.map(state => (
              <option key={state.name} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className="flex-grow">
          <label htmlFor="districtSelect" className="block mb-2 font-semibold text-grey-350 text-xl">Select District:</label>
          <select id="districtSelect" onChange={(e) => setSelectedDistrict(e.target.value)} value={selectedDistrict} className="w-full px-4 py-2 border rounded-md">
            <option value="all">All Districts</option>
            {selectedState !== 'all' && states.find(state => state.name === selectedState)?.districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div className="flex-grow">
          <label htmlFor="minRatingInput" className="block mb-2 font-semibold text-grey-350 text-xl">Minimum Rating:</label>
          <input type="number" id="minRatingInput" value={minRating} onChange={(e) => setMinRating(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
        </div>
      </div>

      {/* Display filtered stores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStores.length > 0 ? (
          filteredStores.map(store => (
            <StoreElement key={store.id} store={store} />
          ))
        ) : (
          <p className="text-lg text-center">No stores found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Stores;
