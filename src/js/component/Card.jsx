import React from "react"

const Card = () => {
    return(
        <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
    <img src="https://fakeimg.pl/500x325" class="primero" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut justo id.</p>
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="https://fakeimg.pl/500x325" class="segundo" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut justo id.</p>
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="https://fakeimg.pl/500x325" class="tercero" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut justo id.</p>
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="https://fakeimg.pl/500x325" class="cuarto" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
</div>
    )
}
export default Card