'use client';
import Link from 'next/link'
import DepartmentFilter from '../../frontComponents/component/departmentFilter';
import PriceFilter from '../../frontComponents/component/priceFilter';
import CustomerReviewFilter from '../../frontComponents/component/customerReviewFilter';
import BrandFilter from '../../frontComponents/component/brandFilter';
import HeaderFilter from '../../frontComponents/component/headerFilter';
import Product from '../../frontComponents/Product';
import { useCategory } from '@/app/contaxtData/CategoryProvider';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/Http/helper';
 

function page() {
 

    
     const [products, setProducts] = useState([]); 
     const [prductProccess, setPrductProccess] = useState(false)

     const fetchProduct = async () => {
       try {
         setPrductProccess(true)
         const url = new URL(`${baseUrl}/api/product/deals?deal=${'hot-deals'}`);  
         const response = await fetch(url,{method:"POST"});
         setPrductProccess(false)
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
   
         const data = await response.json();
        
         setProducts(data.data);
   
       } catch (error) {
         console.error('Error fetching products:', error);
         return [];
       }
     } 

     useEffect(()=>{
        fetchProduct()
     },[])

  return (
    <>
  {/* rts navigation bar area start */}
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            <Link href="/">Hot Deals</Link>
            {/* <i className="fa-regular fa-chevron-right" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts navigation bar area end */}
  <div className="section-seperator">
    <div className="container">
      <hr className="section-seperator" />
    </div>
  </div>
  {/* shop[ grid sidebar wrapper */}
  <div className="shop-grid-sidebar-area rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-lg-12 rts-sticky-column-item">
          <div className="sidebar-filter-main theiaStickySidebar"> 
        {/* <DepartmentFilter />  */}
        <PriceFilter />
        {/* <CustomerReviewFilter /> */}
        <CustomerReviewFilter />
        <BrandFilter />

          </div>
        </div>

        <div className="col-xl-10 col-lg-12">
        
          <HeaderFilter /> 

          <div className="row g-4">
            <Product products={products} prductProccess={prductProccess}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* shop[ grid sidebar wrapper end */}
</>

  )
}
export default page