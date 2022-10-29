import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Mexico Pizza" price="537" />
            <PizzaBlock title="Vegan Pizza" price="250" />
            <PizzaBlock title="Mega Chess Pizza" price="800" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
            <PizzaBlock title="Meat pack Pizza" price="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
