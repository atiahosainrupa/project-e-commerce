import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchProducts();
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 1000); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const fetchProducts = async () => {
    setLoading(true);
    setShowDropdown(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const data = await response.json();
      setResults(data.products || []);
    } catch (error) {
      console.error("Fetch error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (id) => {
    setShowDropdown(false);
    setSearchTerm('');
    navigate(`/shop/${id}`); 
  };

  return (
    <div className="relative w-full">
      <div className="bg-[#F1F1F1] flex items-center rounded-md w-full overflow-hidden h-[45px]">
        <input 
          type="text"
          placeholder="'I'm looking for..." 
          className='bg-transparent border-none outline-none px-5 w-full h-full text-sm text-gray-700'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        

           
      </div>
      {showDropdown && (searchTerm.trim() !== "") && (
        <div className="absolute top-full left-0 right-0 z-[999] mt-2 bg-white border border-gray-200 rounded-md shadow-2xl max-h-[400px] overflow-y-auto text-left">
          {loading ? (
            <div className="p-4 text-center text-gray-400 italic">Searching...</div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
              >
                <img src={product.thumbnail} alt={product.title} className="w-12 h-12 object-cover rounded shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 text-sm">{product.title}</span>
                  <span className="text-[#00a2ff] font-bold text-xs">${product.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 text-center text-red-500 font-bold bg-white">
               No product found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;