export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { brand, name, price, alcoholContent, id } = keg;
  return {
    type: 'ADD_KEG',
    brand: brand,
    name: name,
    price: price,
    alcoholContent: alcoholContent,
    id: id
  }
}