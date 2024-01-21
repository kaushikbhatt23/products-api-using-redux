import React, { Component } from 'react';
import './ListCard.scss';
import { ProductObjectType } from '../App';
import { useDispatch } from 'react-redux';
import { deleteCard , setCard } from '../actions/cardActions';


interface CardProps {
  productDetails: ProductObjectType;
}


const ListCard : React.FC<CardProps> = (props) => {


  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(props.productDetails.id));
  };

  const handleButtonClick = () => {
    dispatch(setCard(props.productDetails));
  };

  const { title, description } = props.productDetails;
  return (
    <div className='cardStyle'>
      <h3>{title}</h3>
      <hr className='lineStyle' />
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleButtonClick}>Select</button>
    </div>
  );
}

export default ListCard