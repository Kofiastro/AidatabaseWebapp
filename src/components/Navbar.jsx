import Star from '../assets/Star.svg'
import Card from '../assets/Card.svg'
import Search from '../assets/search.svg'

const Navbar = () => {
  return (

    <div className='relative '>
      <nav className="mx-auto fixed bg-white top-0 right-0 left-0 px-[40px] py-[20px] items-baseline flex justify-between shadow-md ">
      {/* Logo */}
      <div className="flex space-x-2 items-center">
      <img className='h-[16.99px] w-[16.99px]' src={Star} alt="Star logo" />
      <h1 className='text-base'>KeyMap</h1>
      </div>
      {/* titlePage */}
      <div>
      <h1 className='font-light text-base'>NewProject</h1>
      </div>
      {/* Card */}
      <div className="flex space-x-2 items-center">
        <img className='h-[20px] w-[20px]' src={Search} alt="options icon" />
        <img className="bg-purple-400 rounded-full h-[30px] w-[30px]" src={Card} alt="Cardicon" />
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar