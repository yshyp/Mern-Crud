import React from 'react';
import { deleteItem } from '../api';

const ItemList = ({ items, fetchItems, setSelectedItem }) => {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => setSelectedItem(item)}>Edit</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
