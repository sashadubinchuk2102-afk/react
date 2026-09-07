const BandInfo = ({ band }) => {
  return (
    <div className="band-card">
      <h2>🎸 Улюблений музичний гурт</h2>
      <h3>{band.name}</h3>
      <p><strong>Учасники:</strong> {band.members.join(', ')}</p>
      <h4>Альбоми:</h4>
      <div className="album-grid">
        {band.albums.map((album, index) => (
          <div key={index} className="album-item">
            <img src={album.cover} alt={album.name} />
            <p>{album.name} ({album.year})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandInfo;