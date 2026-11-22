function MenuItemCard({ item, onAdd, onView }) {
  return (
    <article
      className="card menu-card"
      onClick={onView}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onView()
        }
      }}
    >
      <div className="thumb" aria-hidden="true">
        {item.name.charAt(0)}
      </div>

      <p className="tag">{item.category}</p>

      <h3 className="menu-item-name">{item.name}</h3>

      {item.description && (
        <p className="muted">{item.description}</p>
      )}

      <p className="price">RM {item.price.toFixed(2)}</p>

      <button
        type="button"
        className="btn"
        disabled={item.available === false}
        onClick={(event) => {
          event.stopPropagation()
          onAdd(item)
        }}
      >
        {item.available === false ? 'Sold out' : 'Add to cart'}
      </button>
    </article>
  )
}

export default MenuItemCard