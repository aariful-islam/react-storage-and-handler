import add from "../../utilities/export";


const Shoes = () => {
    const n=10;
   const  m=20;
    const res=add(n,m);
  
    return (
        <div>
            <h3>Total :{res}</h3>
           
           
        </div>
    );
};

export default Shoes;