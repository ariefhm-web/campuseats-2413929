import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'

function MenuList({ items, vendor }) {
  const { addToCart } = useCart()
  const { addViewed } = useRecentlyViewed()

  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={addToCart}
          onView={() => addViewed(item, vendor)}
        />
      ))}
    </div>
  )
}

export default MenuList