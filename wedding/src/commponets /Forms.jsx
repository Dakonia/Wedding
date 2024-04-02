import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css'; // Импортируем файл стилей

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    alcohol: [],
    food: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAlcoholChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prevState => ({
        ...prevState,
        alcohol: [...prevState.alcohol, value]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        alcohol: prevState.alcohol.filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = {
      ...formData,
      alcohol: formData.alcohol.join(', ') // Преобразование массива в строку
    };
    console.log('Данные перед отправкой:', formDataToSend);
    try {
      await axios.post('http://localhost:8000/api/guests/', formDataToSend);
      alert('Данные успешно отправлены на сервер!');
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      alert('Произошла ошибка при отправке данных на сервер!');
    }
  };

  return (
    <div className="form-container"> {/* Добавляем класс для стилей */}
      <h2>Пожалуйста, подтвердите свое присутствие</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field"> {/* Добавляем класс для стилей */}
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
        <div>
          <p>Присутствие?</p>
          <label>
            <input type="radio" name="status" value="Я приду" onChange={handleChange} />
            Я приду
          </label>
          <label>
            <input type="radio" name="status" value="Прийти не получится(" onChange={handleChange} />
            Прийти не получится(
          </label>
        </div>
        <div>
          <p>Предпочтения по напиткам:</p>
          <label>
            <input type="checkbox" name="alcohol" value="Шампанское" onChange={handleAlcoholChange} />
            Шампанское
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Белое вино" onChange={handleAlcoholChange} />
            Белое вино
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Красное вино" onChange={handleAlcoholChange} />
            Красное вино
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Коньяк" onChange={handleAlcoholChange} />
            Коньяк
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Водка" onChange={handleAlcoholChange} />
            Водка
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Виски" onChange={handleAlcoholChange} />
            Виски
          </label>
          <label>
            <input type="checkbox" name="alcohol" value="Я не пью алкоголь" onChange={handleAlcoholChange} />
            Я не пью алкоголь
          </label>
          
        </div>
        <div>
          <p>Пожелание по еде:</p>
          <select name="food" value={formData.food} onChange={handleChange}>
            <option value="">Выберите</option>
            <option value="Мясо">Мясо</option>
            {/* Добавьте остальные варианты выбора по еде */}
          </select>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Forms;
