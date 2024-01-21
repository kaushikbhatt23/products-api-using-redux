import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './Components/ProductList';
import ProductDescription from './Components/ProductDescription';
import { fetchCardsRequest, fetchCardsSuccess, fetchCardsFailure } from './actions/cardActions';
import { RootState } from './reducers/cardsReducer';




export type ProductObjectType = {
  id:number,
  title:string,
  description:string,
  price:number,
  images:string[]
};





const App: React.FC = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCardsRequest());

      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        dispatch(fetchCardsSuccess(data.products));
      } catch (err) {
        dispatch(fetchCardsFailure('Error fetching data.'));
      }
    };

    fetchData();
  }, [dispatch]);



  return (
    <div>
      {loading?(
        <p>Loading....</p>
      ):(
        <div className='AppStyle'>
          <ProductList/>
          <ProductDescription/>
        </div>
      )}
    </div>
  );
};

export default App;
