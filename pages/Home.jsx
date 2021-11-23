import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas} from '../redux/actions/pizzas'




function Home() {
   const dispatch = useDispatch()
   const items = useSelector(({pizzas}) => pizzas.items);
   const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
   const { category, sortBy } = useSelector(({filters}) => filters);

   console.log(category, sortBy);

   
  React.useEffect(() => {
     
    dispatch(fetchPizzas())
  }, [])

   const onSelectCategory = index => {
      dispatch(setCategory(index));
   }

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onClickItem={onSelectCategory}
               items={[
                  'Мясные',
                  'Вегетарианская',
                  'Гриль',
                  'Острые',
                  'Закрытые',]}
            />
            <SortPopup
               items={[
                  {name: 'популярности', type: 'popular'},
                  {name: 'цене', type: 'price'},
                  {name: 'алфавиту', type: 'alphabet'}]} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
         { isLoaded ?
            items.map((obj) => (<PizzaBlock isLoading={true} key={obj.id} {...obj}/>))
            : Array(10).fill(<PizzaLoadingBlock/>)
         }
         {Array(10).fill(<PizzaLoadingBlock/>)}

             
          
            
         </div>
      </div>
   )
}

export default Home
