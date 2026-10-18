import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

const Clock = ({
  morningColor = '#FFD700',
  dayColor = '#87CEEB',
  eveningColor = '#2C2C2C',
  showDate = true,
  fontFamily = 'Arial, sans-serif',
  fontSize = '48px',
  fontColor = '#FFFFFF',
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();

  // Визначаємо частину дня та колір фону
  let bgColor;
  if (hours >= 6 && hours < 12) {
    bgColor = morningColor; // ранок
  } else if (hours >= 12 && hours < 18) {
    bgColor = dayColor; // день
  } else {
    bgColor = eveningColor; // вечір/ніч
  }

  // Форматування часу
  const formatTime = (date) => {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Форматування дати
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="clock-container" style={{ backgroundColor: bgColor }}>
      <div
        className="clock-time"
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: fontColor,
        }}
      >
        {formatTime(time)}
      </div>
      {showDate && (
        <div
          className="clock-date"
          style={{
            fontFamily: fontFamily,
            fontSize: '18px',
            color: fontColor,
          }}
        >
          {formatDate(time)}
        </div>
      )}
    </div>
  );
};

Clock.propTypes = {
  morningColor: PropTypes.string,
  dayColor: PropTypes.string,
  eveningColor: PropTypes.string,
  showDate: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Clock;