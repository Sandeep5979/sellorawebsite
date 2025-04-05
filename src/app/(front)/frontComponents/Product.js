'use client';
import { baseUrl, getOffPrecentage, main_thumb_img_path } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'; 
import Image from 'next/image';
import ListingLoaderSkeleton from '@/app/skeleton_loader/listingLoader';
import { useCart } from '@/app/contaxtData/cartContaxt';
import { fileBasePath } from '@/Http/urlHelper';

const Product = ({products, prductProccess}) => {
  
 
  const {user} = useCart()
  
    if(prductProccess){
      return(
        <div className='row'> 
          {Array.from({length:12},(_,i)=>(
            <ListingLoaderSkeleton key={i}/>
          ))} 
        </div>
      )
    } 
  return (
    <>
       {products && products.length > 0 ? (
          products.map((product, index) => (
        <div className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12"  key={index}>
          <div className="single-shopping-card-one deals-of-day">
            <div className="image-and-action-area-wrapper">
              
              <Link href={`${baseUrl}/product-details/${product.slug}?pId=${product._id}&vId=${product.variant?._id}`}> 
                   
               <div className="w-full flex justify-center items-center" style={{ minHeight: '200px' }}>
                    <Image
                      src={`${fileBasePath}${main_thumb_img_path}${product.main_image}`}
                      alt="Product Image"
                      loading="lazy"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
              </Link>
              <div className="action-share-option">
                <div className="single-action openuptip message-show-action">
                  
                  <i className="fa-light fa-heart" />
                </div>
                <div className="single-action openuptip cta-quickview product-details-popup-btn">
                  
                  <i className="fa-regular fa-eye" />
                </div>
              </div>
            </div>
            <div className="body-content">
              <div className="start-area-rating"> 

              <i className={`fa-star${product.avgRating >0 && product.avgRating < 1?"-half-alt fa-solid selected":""}  ${product.avgRating >=1?"fa-solid selected":"fa-light"}`} />
                              <i className={`fa-star${product.avgRating >1 && product.avgRating < 2?"-half-alt fa-solid selected":""} ${product.avgRating >=2?"fa-solid selected":"fa-light"}`} />
                              <i className={`fa-star${product.avgRating >2 && product.avgRating < 3?"-half-alt fa-solid selected":""} ${product.avgRating >=3?"fa-solid selected":"fa-light"}`} />
                              <i className={`fa-star${product.avgRating >3 && product.avgRating < 4?"-half-alt fa-solid selected":""} ${product.avgRating >=4?"fa-solid selected":"fa-light"}`} /> 
                              <i className={`fa-star${product.avgRating >4 && product.avgRating < 5?"-half-alt fa-solid selected":""} ${product.avgRating >=5?"fa-solid selected":"fa-light"}`} />  
              
              </div>
              <Link href={`${baseUrl}/product-details/${product.slug}?pId=${product._id}&vId=${product.variant?._id}`}>
                <h4 className="title">{product?.product_name ? product.product_name :''} </h4>
              </Link>
              
              {user?.role_consumer_business == "Business" ?( 
                <>
                <div className="price-area"> 
                  <span className="current">${product.variant && product.variant.businessSalePrice}</span>
                  <div className="previous">${product.variant && product.variant.msrp}</div>
                </div>
                <div className="min-off">
                  Min. {product.variant? getOffPrecentage(product.variant.msrp, product.variant.businessSalePrice).toFixed(2):0}% <span>Off</span>
                </div>

                </>):(
                  // else consumer type user
                <>
                <div className="price-area"> 
                  <span className="current">${product.variant && product.variant.consumerSalePrice}</span>
                  <div className="previous">${product.variant && product.variant.msrp}</div>
                </div>
                <div className="min-off">
                  Min. {product.variant? getOffPrecentage(product.variant.msrp, product.variant.consumerSalePrice).toFixed(2):0}% <span>Off</span>
                </div>
                </>
              )}
              
              <div className="cart-counter-action">
                
                <Link
                  href="#"
                  className="rts-btn btn-primary radious-sm with-icon"
                >
                  <div className="btn-text"> Add To Cart </div>
                  <div className="arrow-icon"> 
                    <i className="fa-regular fa-cart-shopping" />
                  </div>
                  <div className="arrow-icon"> 
                    <i className="fa-regular fa-cart-shopping" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
         ))
        ) : (
          <div className="col-12">No products found</div>
        )}
    </>
  )
}

export default Product