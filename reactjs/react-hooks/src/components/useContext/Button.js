import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme({
      background: 'red',
      text: 'white'
    })} style={{ background: theme.background, color: theme.text }}>
      Themed Button
    </button>
  )
}

export default Button