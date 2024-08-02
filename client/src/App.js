import React, { useState, useEffect } from 'react';
import { fetchItems } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadItems = async () => {
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>CRUD Application</h1>
      <ItemForm fetchItems={loadItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <ItemList items={items} fetchItems={loadItems} setSelectedItem={setSelectedItem} />
    </div>
  );
};

export default App;
