const INGREDENTS = [
  {'type': 'lettuce', 'count': 1, 'price': 3 },
  {'type': 'bacon', 'count': 1, 'price': 3 },
  {'type': 'cheese', 'count': 0, 'price': 3 },
  {'type': 'meat', 'count': 1, 'price': 3 },
]
const BurgerBuilder = () => {

  return (
    <div class="flex justify-center mt-20">
      <div>
        <div className="bg-[#DA7331] w-80 md:w-96 h-16 rounded-t-[30px] mb-2"></div>
        {
          <p className="text-2xl font-bold text-center">No Ingredients Added</p>
        }
        <div className="bg-[#DA7331] w-80 md:w-96 h-16 rounded-b-[50px] mt-2"></div>
      </div>
    </div>
  )
}

export default BurgerBuilder;