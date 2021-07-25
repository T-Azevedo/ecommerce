import React, {useState, useEffect} from 'react';
import {Container} from './style';
import Cart from '../../assets/cart.png';

import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {

  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() =>{

    api.get('').then(
      response => {

        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index:number) => {
    let push: any = [...cart, cart.push(data[index])];
    setCart(push);
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  
  return (

    <Container>

      <div className="nav">

        <div>
          <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1520087/draw_svg20210507-22909-s47uov.svg.png" alt="guitar logo" width="200px" height="auto" />
        </div>

        <div className="cart">
          <img src={Cart} alt="shop" width="50px" height="auto" />
          <span>({cart.length}) - Itens</span> 
        </div>

      </div>

      <section>
        {data.map( (prod, index) =>(

          <div className="product-content" key={prod.id}>

            <img src={prod.photo} alt="iphone" width="200" height="auto"/>
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={()=> handleCart(index)}>Adicionar ao carrinho</button>


          </div>

        ))}
        
      </section>
    </Container>
  );
}

  export default Home;
