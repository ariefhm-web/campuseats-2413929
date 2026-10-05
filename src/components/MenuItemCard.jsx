function MenuItemCard({ name, description, price, available }) {
  const item = {
    name: name ?? 'Nasi Lemak Special',
    description: description ?? 'Coconut rice with sambal, egg and cucumber',
    price: price ?? 7.5,
    available: available ?? true,
  }

  return (
    <article className="menu-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard
