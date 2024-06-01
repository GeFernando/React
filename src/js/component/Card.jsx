import React from "react"

const Card = ({ description }) => {
  return (
    <div className="card p-0">
      <img src="https://fakeimg.pl/500x325" className="primero" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title fw-bold">Card title</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  )
}
export default Card