function VendorCard() {
  const vendor = {
    name: 'Kak Ani Nasi Lemak',
    location: 'Mahallah Uthman Cafeteria',
    openHours: '8:00 AM – 10:00 PM',
    isOpen: true,
  }

  return (
    <article className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>
      <div>
        <h3>{vendor.name}</h3>
        <p>{vendor.location}</p>
        <p>{vendor.openHours}</p>
      </div>
      <span className={vendor.isOpen ? 'status open' : 'status closed'}>
        {vendor.isOpen ? 'Open now' : 'Closed'}
      </span>
    </article>
  )
}

export default VendorCard
