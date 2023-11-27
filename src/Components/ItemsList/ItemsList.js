import "./ItemsListStyles.css";
import Item from './../Item/Item';

const items = [
  { id: 1, name: 'Sushi', description:'Finest Fish and Veggies', price: 22.99 },
  { id: 2, name: 'Schnitzel', description:'A german speciality!', price: 16.5 },
  { id: 3, name: 'Barbecue Burger', description:'American, raw, meaty', price: 12.99 },
  { id: 4, name: 'Green Bowl', description:'Healthy... and green...', price: 18.99 },
];

const ItemList = () => {
  return (
    <div className="items-list">
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;