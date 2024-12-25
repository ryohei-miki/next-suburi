const list = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' },
]

export default function first() {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>ID: {item.id}</span>
            <span>
              Name: {item.name} {item.id === 1 && <span>✅</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
