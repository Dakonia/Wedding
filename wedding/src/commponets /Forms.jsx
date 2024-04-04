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
    console.log('Данные перед отправкой:', formData);
    try {
      await axios.post('http://localhost:8000/api/guests/', formData);
      alert('Данные успешно отправлены на сервер!');
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
            <select name="status" onChange={handleChange} required>
              <option value="">Выберите статус</option>
              <option value="Я приду">Я приду</option>
              <option value="Прийти не получится(">Прийти не получится(</option>
            </select>
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
                value="Белое вино"
                checked={formData.alcohol.includes('Белое вино')}
                onChange={handleChange}
              />
              Белое вино
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
          </div>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Forms;
