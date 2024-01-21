// components/CardList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductObjectType } from '../App';
import { RootState } from '../reducers/cardsReducer';
import ListCard from './ListCard';
import './ProductList.scss'






const ProductList: React.FC = () => {
  
  const {data} = useSelector((state: RootState) => state.cards);

  return (
    <div className='containerStyle'>
      {data.map((item:ProductObjectType)=>
        <ListCard key={item.id} productDetails={item}/>
      )}
    </div>
);
};

export default ProductList;
