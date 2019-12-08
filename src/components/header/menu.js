import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <ul>
    <li>
      <Link to="/">Início</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link to="/receitas">Receitas</Link>
    </li>
  </ul>
)

export default Menu
