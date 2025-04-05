'use client';
import Link from 'next/link'
import React, {useEffect, useState } from 'react'
import Product from '../../../frontComponents/Product';
import DepartmentFilter from '../../../frontComponents/component/departmentFilter';
import BrandFilter from '../../../frontComponents/component/brandFilter';
import PriceFilter from '../../../frontComponents/component/priceFilter';
import CustomerReviewFilter from '../../../frontComponents/component/customerReviewFilter';
import HeaderFilter from '../../../frontComponents/component/headerFilter';
import { useParams } from 'next/navigation';
import { baseUrl, formatSlugToName } from '@/Http/helper';


function page() {

  
      const params = useParams();
     
      const [category, setCategory] = useState('');
      const [subcategory, setSubcategory] = useState('');
      const [childcategory, setChildcategory] = useState('');
      const [products, setProducts] = useState([]);
    
      const [prductProccess, setPrductProccess] = useState(false)
    
      const fetchProduct = async (category, subcategory, childcategory) => {
        try {
          setPrductProccess(true)
          const url = new URL(`${baseUrl}/api/product`);
          const queryParams = {
            category,
            subcategory,
            childcategory,
          };
    
          Object.keys(queryParams).forEach((key) => {
            if (queryParams[key]) {
              url.searchParams.append(key, queryParams[key]);
            }
          });
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
    
        useEffect(() => {
          if (params.category) {
            setCategory(params.category); 
          }
          if (params.subcategory) {
            setSubcategory(params.subcategory);
          }
          if (params.childcategory) {
            setChildcategory(params.childcategory);
          }
    
        }, [params]);
      
        useEffect(() => {
          if (category) {
            fetchProduct(category, subcategory, childcategory);
          }
        }, [category, subcategory, childcategory]); 
    
     
  
  return (
    <>
  {/* rts navigation bar area start */}
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
         
            <Link href={`/product/${category}`}><i className="fa-regular fa-chevron-right" />{formatSlugToName(category)}</Link>
                      {subcategory && (<Link href=""> <i className="fa-regular fa-chevron-right" />{formatSlugToName(subcategory)}</Link>)}
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
           

        <DepartmentFilter></DepartmentFilter>
        <PriceFilter></PriceFilter>
        <CustomerReviewFilter></CustomerReviewFilter>
        <BrandFilter></BrandFilter>

          </div>
        </div>

        <div className="col-xl-10 col-lg-12">
        
          <HeaderFilter></HeaderFilter>

          <div className="row g-4">
          <Product products={products || []} prductProccess={prductProccess}/>
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