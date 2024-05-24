import { useState } from "react"
const INGREDENTS = [
  {'type': 'lettuce', 'count': 0, 'price': 3 },
  {'type': 'bacon', 'count': 0, 'price': 2 },
  {'type': 'cheese', 'count': 0, 'price': 11 },
  {'type': 'meat', 'count': 0, 'price': 20 },
]

function ingredent(type) {
  if (type === 'lettuce')
    return <div className="bg-[#59A935] w-80 md:w-96 h-8 rounded-[30px] mb-2"></div>
  else if (type === 'bacon')
    return <div className="bg-[#C04823] w-80 md:w-96 h-6 mb-2"></div>
  else if (type === 'cheese')
    return <div className="bg-[#E5C614] w-80 md:w-96 h-6 rounded-[30px] mb-2"></div>
  else if (type === 'meat')
    return <div className="bg-[#7A3307] w-80 md:w-96 h-12 rounded-[30px] mb-2"></div>
}

function displayIngredent(ingredents) {
  let arr = [];
  ingredents.map( i => {
    for (let j = 0; j < i.count; j++) {
      arr.push(ingredent(i.type))
    }
    return i
  })

  const data = arr.length != 0 ? arr : <p className="text-2xl font-bold text-center">No Ingredients Added</p>;

  return <div>{data}</div>
}

function IngredientButton({disabled, children, updateIngredent, ingredents, type}) {
  const dynamicClasses = "py-2 px-6 " + ( disabled ? "bg-[#ac9a80] text-[#cccccc]" : "bg-[#8f5e1e] text-white hover:bg-[#99703F]");

  return(
    <button type="button" disabled={disabled} className={dynamicClasses} onClick={() => updateIngredent(type, children)}>{children}</button>
  )
}

const BurgerBuilder = () => {
  const [ingredents, setIngredents] = useState(INGREDENTS);
  const [price, setPrice] = useState(3.00);

  function updateIngredent(type, children) {
    let arr = [...ingredents]
    let updatedPrice = 0;
    const index = arr.findIndex(i => i.type == type );

    if (children == 'Less') { 
      arr[index].count -= 1 
      updatedPrice = price - arr[index].price;
    }
    else {
      arr[index].count += 1;
      updatedPrice = price + arr[index].price;
    }
    setIngredents(arr);
    setPrice(updatedPrice);
  }

  return (
    <div>
      <div className="flex justify-center mt-20 mb-20">
        <div>
          <div className="bg-[#DA7331] w-80 md:w-96 h-16 rounded-t-[30px] mb-2"></div>
          {
            displayIngredent(ingredents)
          }
          <div className="bg-[#DA7331] w-80 md:w-96 h-16 rounded-b-[50px] mt-2"></div>
        </div>
      </div>

      <div className="bg-[#CF8F2E] p-5 flex text-center flex-col justify-center">
          <div>Current Price: {price}$ </div>
          <div className="flex justify-center mt-5">
            <div>
              {
                ingredents.map( i => {
                  return ( 
                    <div className="grid grid-cols-3 gap-4 my-2 w-80 text-start">
                      <div className="me-2 self-center font-bold me-8">{i.type.toUpperCase()}</div>
                      <div className="me-2"><IngredientButton ingredents={ingredents} disabled={i.count == 0} updateIngredent={updateIngredent} type={i.type} >Less</IngredientButton></div>
                      <div><button type="button"><IngredientButton ingredents={ingredents} updateIngredent={updateIngredent} type={i.type}>More</IngredientButton></button></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div>
            <button type="button" className={"py-5 px-10 " + (price == 3 ? "bg-[#c7c6c6] text-[#888]" : "hover:bg-[#A0DB42] bg-[#dad735] text-[#966909]")} disabled={price == 3}>SIGN UP TO ORDER</button>
          </div>
      </div>
    </div>
  )
}

export default BurgerBuilder;