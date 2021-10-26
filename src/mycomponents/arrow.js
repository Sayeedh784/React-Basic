import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Alertme=(a)=>{
  alert(a)
}

const Arrow = () => {
  return ( 
    <button onClick={Alertme.bind(this,"Submitted Done")} className="btn btn-success">submit</button>
   );
}
 
export default Arrow;