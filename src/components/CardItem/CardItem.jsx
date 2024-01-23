import { useEffect, useState } from 'react'
import DetailCarModal from '../DetailCarModal/DetailCarModal'
import { removeFromLocalStorage, saveToLocalStorage } from '../../storage'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const CardItem = ({ id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }) => {

  const car = { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentCar, setCurrentCar] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])

  const handleShowModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleClickLearnMore = car => {
    setCurrentCar(car)
    setIsOpenModal(true)
  }

  const handleAddToFavorite = (currentCar) => {
    saveToLocalStorage(currentCar.id, currentCar)
    setIsFavorite(true)
  }

  const handleDelFromFavorite = (currentCar) => {
    removeFromLocalStorage(currentCar.id)
    setIsFavorite(false)
  }

  return (
    <>
      <li className="h-[426px] flex flex-col justify-between ">
        <div className="hover:scale-105 duration-100 relative">
          <img className='object-cover h-[268px] rounded-xl' src={img} alt={model} loading="lazy" />

          {!isFavorite ? <BsHeart onClick={() => handleAddToFavorite(car)} className='absolute top-3.5 right-3.5 cursor-pointer text-white' /> : <BsHeartFill onClick={() => handleDelFromFavorite(car)} className='absolute top-3.5 right-3.5 cursor-pointer text-white' />}

        </div>
        <div className="flex flex-col justify-between ">
          <div className="text-base flex justify-between">
            <p>{make} <span className='text-blue-700'>{model}, </span>{year}</p>
            <p>{rentalPrice}</p>
          </div>
          <div className="text-xs">
            <p className="text-left"> {(address?.split(',')[1])} |{address?.split(',')[2] || 'Ukraine'} | {rentalCompany}
              | {accessories[0]}</p>
            <p className="text-left">{type} | {model} | {id}
              | {functionalities[0]}</p>
          </div>
        </div>
        <button className="bg-blue-700 text-white w-[100%] hover:bg-blue-500 p-3" onClick={() => handleClickLearnMore(car)}>Learn more</button>
      </li>
      {isOpenModal ? <DetailCarModal handleCloseModal={handleCloseModal} {...car} /> : null}
    </>
  )
}

export default CardItem