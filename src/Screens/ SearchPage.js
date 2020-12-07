import React, { useState } from "react";

function SearchPage() {
  const [search, setSearch] = useState();
  const [restaurante, setRestaurante] = useState([]);

  const verificaRestaurante = () => {
    if (search === restaurante) {
      return alert("Restaurante existe");
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {verificaRestaurante}
      <input
        value={search}
        type="text"
        placeholder="Buscar"
        onChange={handleInput}
      />
      <button onClick={verificaRestaurante}>Buscar</button>
      <p>Busque Por Nomes De Restaurantes</p>
    </div>
  );
}

export default SearchPage;
