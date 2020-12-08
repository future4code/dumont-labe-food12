import React, { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState();
  const [restaurante, setRestaurante] = useState([]);

  const verificaRestaurante = () => {
    if (search === restaurante) {
      return <p>Restaurante existe</p>;
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {restaurante &&
        restaurante.filter(() => {
          return handleInput;
        })}
      {verificaRestaurante}
      <input value={search} type="text" placeholder="Buscar" />
      <button onClick={handleInput}>Buscar</button>
      <p>Busque Por Nomes De Restaurantes</p>
    </div>
  );
}

export default SearchBar;
