import React from "react"
import './main.css';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className='container-404'>
        <h1>¯\_(ツ)_/¯</h1>
        <p>Parece que não há nada por aqui</p>
        <p><a href="/">Página inicial</a></p>
      </div>
    )
  }
}

export default NotFoundPage


