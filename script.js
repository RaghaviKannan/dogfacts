 function fact(){
    var data = fetch("https://dogapi.dog/api/facts");
    var fact=document.getElementById("fact");
    fact.setAttribute("class","card");
    fact.style.marginTop="50px"
    data.then(d=>{return d.json()}).then(res=>{
        fact.innerHTML=res.facts
    })
}


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}