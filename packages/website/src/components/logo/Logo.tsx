import { VFC } from 'react'
import { Link } from 'react-router-dom'
import src from './logo.png'

const Logo: VFC = () => (
  <Link to={'/'}>
    <img src={src} alt={''} />
  </Link>
)

export { Logo }
