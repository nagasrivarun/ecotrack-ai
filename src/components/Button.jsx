import { Link } from 'react-router-dom'

export default function Button({ children, to, onClick, className = '', type = 'button' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300'
  const style = 'bg-accent text-slate-950 shadow-lg shadow-accent/20 hover:bg-lime-400'

  if (to) {
    const internal = !/^https?:\/\//.test(to)
    if (internal) {
      return (
        <Link to={to} className={`${base} ${style} ${className}`}>
          {children}
        </Link>
      )
    }

    return (
      <a href={to} target="_blank" rel="noreferrer" className={`${base} ${style} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  )
}
