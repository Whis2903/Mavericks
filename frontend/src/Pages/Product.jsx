import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
export const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  console.log(productId);
  const productIdNumber = Number(productId);

  const product= all_product.find((e)=>e.id===productIdNumber);
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/> 
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
