const PetInfo = ({ pet }) => {
  return (
    <div className="pet-card">
      <h2>🐾 Мій домашній улюбленець</h2>
      <div className="pet-content">
        <img className="pet-photo" src={pet.photo} alt={pet.name} />
        <div className="pet-details">
          <h3>{pet.name}</h3>
          <p><strong>Тип:</strong> {pet.type}</p>
          <p><strong>Порода:</strong> {pet.breed}</p>
          <p><strong>Вік:</strong> {pet.age} роки</p>
          <p><strong>Колір:</strong> {pet.color}</p>
          <p><strong>Хобі:</strong> {pet.hobby}</p>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;