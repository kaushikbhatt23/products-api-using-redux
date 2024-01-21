import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { RootState } from '../reducers/cardsReducer';
import './ProductDescription.scss'

const ProductDescription : React.FC = () => {


  const dispatch = useDispatch();

  const {selectedCard} = useSelector((state: RootState) => state.cards);

  return (
    <div>
      {selectedCard===null?(
        <p>Select a card....</p>
      ):(
        <div>
          <div>{selectedCard.title}</div>
          <img className='imageStyle' src={selectedCard.images[0]} alt={selectedCard.title}/>
        </div>
      )}
    </div>
  )
}

export default ProductDescription