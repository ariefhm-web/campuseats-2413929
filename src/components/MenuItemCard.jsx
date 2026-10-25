function MenuItemCard({ item, onAdd }) {
  return (
    <article className="card menu-card">
      <div className="thumb" aria-hidden="true">{item.name.charAt(0)}</div>
      <p className="tag">{item.category}</p>
      <h3>{item.name}</h3>
      {item.description && <p className="muted">{item.description}</p>}
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button
        className="btn"
        disabled={item.available === false}
        onClick={() => onAdd(item)}
      >
        {item.available === false ? 'Sold out' : 'Add to cart'}
      </button>
    </article>
  )
}
 
export default MenuItemCard