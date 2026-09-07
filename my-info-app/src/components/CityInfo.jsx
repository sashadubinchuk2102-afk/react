const CityInfo = ({ city }) => {
  return (
    <div className="city-card">
      <h2>🏙️ Моє місто</h2>
      <p><strong>Назва:</strong> {city.name}</p>
      <p><strong>Країна:</strong> {city.country}</p>
      <p><strong>Рік заснування:</strong> {city.founded}</p>
      <div className="city-images">
        {city.landmarks.map((item, index) => (
          <div key={index} className="city-image-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityInfo;