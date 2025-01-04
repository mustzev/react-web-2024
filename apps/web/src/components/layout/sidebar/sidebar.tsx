import './sidebar.css'

const sidebarItems = [{
  label: 'home',
  link: '/',
}, {
  label: 'test',
  link: '/test',
}]

export function Sidebar() {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, i) => (
        <a href={item.link} key={i}>
          {item.label}
        </a>
      ))}
    </div>
  )
}
