import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../api';

const ItemForm = ({ fetchItems, selectedItem, setSelectedItem }) => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (selectedItem) {
      setFormData({ name: selectedItem.name, description: selectedItem.description });
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedItem) {
        await updateItem(selectedItem._id, formData);
      } else {
        await createItem(formData);
      }
      setFormData({ name: '', description: '' });
      fetchItems();
      setSelectedItem(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">{selectedItem ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ItemForm;
