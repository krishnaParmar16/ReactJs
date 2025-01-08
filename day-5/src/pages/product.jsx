import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import "../App.css"
function Product() {
    const [state,setState]=useState(0);
    const check=()=>{
       setState(state+1)
        Swal.fire({
          title: "Add to cart successfully!",
          icon: "success",
          draggable: true
          
        });
        
    }
  const [arr, setarr] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setarr(res.products)
        console.log(res.products);
      })
      .catch((err) => console.log(err));

    
  }, []);

  return (
    <>
      {
        arr==null? 
        
        (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )
        : <div className=" w-[100%] h-[auto] flex justify-evenly flex-wrap">
        {
          arr.map((el) => {
            return (
              <>
                <div className="main h-[455px] w-[23%]  mt-[20px] mb-[20px]">
                  <div className="h-[43%] w-[100%] flex justify-center items-center" >
                  <img src={el.images[0]} alt="image" className="h-[90%] w-[70%]"  />
                  </div>
                  <h1 className="text-[17px] font-semibold mt-[2%] ml-[5%]">{el.title}</h1>
                  <p className="text-[14px] mt-[1%] ml-[5%] w-[95%]">{el.description}</p>
                  <p className="text-[16px] mt-[1%] ml-[5%] w-[85%] font-bold">${el.price} <span className="ml-[10px] text-[#01b001]">{el.discountPercentage}% Off</span></p>
                  <p className="text-[16px] mt-[1%] ml-[5%] w-[85%]"><i class="fa-solid fa-star text-[#e4c304]" ></i> ({el.rating})</p>
                  <button onClick={check} className="h-[40px] mt-[5%] w-[40%] ml-[5%]">Add to cart</button>
                </div>
              </>
            );
          })
        }
      </div>
      }
    </>
  );
}
export default Product;
