import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const Slider = ({  }) => {
  const listImg = ["Aca", "joda", "hala", "jaja"];
  const [selectImg, setSelectImg] = useState(0);
  const [hover, setHover] = useState(true);

  const inextImg = () => {
    return selectImg === listImg.length - 1 ? setSelectImg(0) : setSelectImg(selectImg + 1)
  };

  const previousImg = () => {
    return selectImg === 0 ? setSelectImg(listImg.length - 1) : setSelectImg(selectImg - 1)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      hover ? inextImg() : null;
    }, 3000);
    return () => clearInterval(interval);
  }, [selectImg, hover]);

  return (
    <div
      onMouseLeave={() => { setHover(true) }}
      onMouseEnter={() => { setHover(false) }}>
      <div>
        {listImg[selectImg]}
      </div>
      <div>
        <button onClick={() => { inextImg() }}>+</button>
        <button onClick={() => { previousImg() }}>-</button>
      </div>
    </div>
  );
};

export default Slider;