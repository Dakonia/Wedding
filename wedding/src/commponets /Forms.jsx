import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css'; // Импортируем файл стилей

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    alcohol: [],
    food: []
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          [name]: [...prevState[name], value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          [name]: prevState[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Преобразование массивов в строки
    const formDataToSend = {
      ...formData,
      alcohol: formData.alcohol.join(', '), 
      food: formData.food.join(', ') 
    };
    console.log('Данные перед отправкой:', formDataToSend);
    try {
      await axios.post('http://wedding-info.tw1.ru/api/guests/', formDataToSend);
      setShowModal(true);
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      alert('Произошла ошибка при отправке данных на сервер!');
    }
  };

  return (
    <div className="form-container">
      <h2>Пожалуйста, подтвердите свое присутствие</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя и Фамилия" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
  <p>Присутствие?</p>
  <div className="select-container">
    <label>
      <input
        type="radio"
        name="status"
        value="Я приду"
        checked={formData.status === 'Я приду'}
        onChange={handleChange}
        required
      />
      Я приду
    </label>
    <label>
      <input
        type="radio"
        name="status"
        value="Прийти не получится("
        checked={formData.status === 'Прийти не получится('}
        onChange={handleChange}
        required
      />
      Прийти не получится(
    </label>
  </div>
</div>
        <div className="input-field">
          <p>Предпочтения по напиткам:</p>
          <div className="select-container">
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Шампанское"
                checked={formData.alcohol.includes('Шампанское')}
                onChange={handleChange}
              />
              Шампанское
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Красное вино"
                checked={formData.alcohol.includes('Красное вино')}
                onChange={handleChange}
              />
              Красное вино 
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Белое вино"
                checked={formData.alcohol.includes('Белое вино')}
                onChange={handleChange}
              />
              Белое вино
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Коньяк"
                checked={formData.alcohol.includes('Коньяк')}
                onChange={handleChange}
              />
              Коньяк
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Водка"
                checked={formData.alcohol.includes('Водка')}
                onChange={handleChange}
              />
              Водка
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Виски"
                checked={formData.alcohol.includes('Виски')}
                onChange={handleChange}
              />
              Виски
            </label>
            <label>
              <input
                type="checkbox"
                name="alcohol"
                value="Я не пью алкоголь"
                checked={formData.alcohol.includes('Я не пью алкоголь')}
                onChange={handleChange}
              />
              Я не пью алкоголь
            </label>
          </div>
        </div>
        <div className="input-field">
          <p>Пожелание по еде:</p>
          <div className="select-container">
            <label>
              <input
                type="checkbox"
                name="food"
                value="Мясо"
                checked={formData.food.includes('Мясо')}
                onChange={handleChange}
              />
              Мясо
            </label>
            <label>
              <input
                type="checkbox"
                name="food"
                value="Рыба"
                checked={formData.food.includes('Рыба')}
                onChange={handleChange}
              />
              Рыба
            </label>
          </div>
        </div>
        <div className="container">
          <button type="submit" className="custom-button">Отправить</button>  
          </div>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Ваши данные отправлены</p> 
            <p>Ждем</p>
            <p>08.07.2024</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forms;