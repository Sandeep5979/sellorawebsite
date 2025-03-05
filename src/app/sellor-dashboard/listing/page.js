"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../../../../public/front/loader.css' 
import $ from 'jquery'
import ListingFilter from './listingFilter';
import Listing from './listing';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppContext } from '@/app/contaxtData/contextData';
import VariantEditModel from './variantEditModel';
import { Suspense } from "react";

const page = () => { 

  const ListingPage = ()=>{
    
  const {globalData, setGlobalData} = useContext(AppContext)
  const queryParam = useSearchParams()
  const pageSize = queryParam.get('size') || 10
  const currentPage = queryParam.get('page') || 1
  const router = useRouter();
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState(null)
  const [openModel, setOpenModel] = useState(false)
  const [productVariant, setProductVariant] = useState(null)
  const [refreshList, setRefreshList] = useState(1)
  const [thresholdData, setThresholdData] = useState([
    { 
      unit: 0,
      discount: 0,
    } 
  ])

  const [filterData, setFilterData] = useState({
    category:"",
    brand:"",
    condition:"",
    listing_quantity:"",
    min_price:0,
    max_price:"",
    variants:""
  })

  function updateFilterData(e){
    const {name, value} = e.target
    setFilterData((preData)=>({
      ...preData,
      [name]:value
    }))
  }

  const [searchText, setSearchText] = useState({search:'',searchBy:'title'})
  function updateSearchTaxt(e){
    const {name, value} = e.target
    setSearchText((preData)=>({
      ...preData,
      [name]:value
    }))
  }
  useEffect(()=>{
    if(globalData.sellor){ 
    $('.loaderouter').css('display',"flex") 
      fetch(`${baseUrl}api/sellor/product/product-listing?seller_id=${globalData.sellor._id}&page=${currentPage}&pageSize=${pageSize}`,{
        method:"GET", 
    }).then((response)=>{
        if(!response.ok){
            $('.loaderouter').css('display',"none") 
            throw new Error("Network Error")
        }
        return response.json();
    }).then((res)=>{ 
        if(res.status){
          setProductList(res.data.list)
          setPagination(res.data.pagination)
        } 
        $('.loaderouter').css('display',"none") 
    })
  }
  },[globalData.sellor, currentPage, pageSize,refreshList])


  useEffect(()=>{
    // control search time
    const timeoutId = setTimeout(() => {
      searchProduct()
    }, 300); 
    return ()=> clearTimeout(timeoutId)
  },[searchText.search, searchText.searchBy])

  function searchProduct(){
    if(globalData.sellor){ 
          fetch(`${baseUrl}api/sellor/product/product-listing?seller_id=${globalData.sellor?._id}&page=${currentPage}&pageSize=${pageSize}&searchText=${searchText.search}&searchBy=${searchText.searchBy}`,{
              method:"GET", 
          }).then((response)=>{
              if(!response.ok){ 
                  throw new Error("Network Error")
              }
              return response.json();
          }).then((res)=>{ 
              if(res.status){
                setProductList(res.data.list)
                setPagination(res.data.pagination)
              }  
          })
      }
  }


  function paginationFun(page, size, e){
    e.preventDefault();
    let link = `${baseUrl}sellor-dashboard/listing?size=${size}&page=${page}`
    router.push(link); 
  }
  function changeListSize(e){
    const { name, value } = e.target
    let link = `${baseUrl}sellor-dashboard/listing?size=${value}&page=${currentPage}`
    router.push(link);
    
  }

  function editVariant(e, product){
    e.preventDefault()
    setOpenModel(true)
    product.opration = "edit"
    setProductVariant(product);
    if(product.tresholdData && product.tresholdData.length){ 
      setThresholdData(product.tresholdData);
    }
  }

  function copyVariant(e, product){
    e.preventDefault()
    setOpenModel(true)
    product.opration = "copy"  
    setProductVariant(product); 
    if(product.tresholdData && product.tresholdData.length){ 
      setThresholdData(product.tresholdData);
    }
  }

  function closeVariantModal(){
    setOpenModel(false) 
  }

  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
  <ToastContainer 
                            position="top-center"
                            autoClose={3000} 
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        /> 
                   {/* loader start */} 
                   <div className="loaderouter"><div className="loader"></div></div> 
                    {/* loader end */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Manage All Listing</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href="#">
                  <img src={`${baseUrl}front/assets/images/hand_shaking.png`} />
                  Help
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-video" />
                  Learn How to do Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="search_outer">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder={`Search your product by ${searchText.searchBy}`}
                    className="search-int form-control"
                    name='search'
                    value={searchText.search}
                    onChange={(e)=>updateSearchTaxt(e)}
                  />
                  
                  <Link href="#">
                    <i className="fa fa-search" />
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className="nice-select"
              name='searchBy'
               value={searchText.searchBy}
                    onChange={(e)=>updateSearchTaxt(e)}>
                <option value={"SKU"}>SKU</option>
                <option value={"title"}>Product Title</option>
                {/* <option>SIN</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right_button">
            <ul>
              <li>
                <Link href="/sellor-dashboard/add-catalog">Add Single Listing</Link>
              </li>
              <li>
                <Link href="/sellor-dashboard/add-catalog">Add Listing in Bulk</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped"
          style={{ marginTop: 20 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={10}>
                <div className="table_menu">
                  <ul>
                    <li>
                      <Link href="#" className="active">
                        All
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Drafts(0) </Link>
                    </li>
                    <li>
                      <Link href="#">Errors(0) </Link>
                    </li>
                    <li>
                      <Link href="#">Processing(0) </Link>
                    </li>
                    <li>
                      <Link href="#">Published(3) </Link>
                    </li>
                    <li>
                      <Link href="#">Unpublished(0)</Link>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
            <ListingFilter seller={globalData.sellor}/>
            <tr className="winner__table">
              <th width={110}>
                <div className="che">
                  <p>
                    <input type="checkbox" id="status" name="" />
                    <label htmlFor="status">Status</label>
                  </p>
                </div>
              </th>
              <th width={330}>Product Detail</th>
              <th width={250}>SKU and SIN </th>
              <th width={150}>Variants</th>
              <th width={150}>Price</th>
              <th>
                Estimated fees <span className="per_nuit">per unit sold</span>
              </th>
              <th>Stock</th>
              <th>Fulfillment</th>
              <th>Listing Quality</th>
              <th>Action</th>
              <th />
            </tr>
          </thead>
           <Listing productList={productList} editVariant={editVariant} refreshList={refreshList} setRefreshList={setRefreshList}
              copyVariant={copyVariant}
          />
        </table>
      </div>
      <div className="fixed-table-pagination">
        <div className="row">
          <div className="col-lg-8"> </div>
          <div className="col-lg-4">
            <div className="pull-right pagination d-flex">
              <div className="result">
                <select className='nice-select' name="size" 
                value={pagination?pagination.pageSize:10}
                onChange={(e)=>changeListSize(e)}>
                  <option value={20}>20 results per page</option>
                  <option value={10}>10 results per page</option>
                </select>
              </div>
              {pagination && pagination.totalPages>1 ?(
                  <ul className="pagination">
                  <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50":""}`}>
                    <Link href="#" onClick={(e)=>{
                      if(pagination.page > 1){ 
                        paginationFun((pagination.page-1),  pagination.pageSize, e)
                      } 
                    }
                      }>
                      <i className="fa-solid fa-arrow-left" />
                    </Link>
                  </li>
                  {/* {Array.from({length:pagination.totalPages},(_,i)=>{
                     if (Math.abs(pagination.page - (i + 1)) <= 3) {
                        return (
                          <li className="page-number" key={i}>
                            <Link href="#"> {i + 1}</Link>
                          </li>
                        )
                      }
                    return null
                  })} */}

            {Array.from({length:pagination.totalPages}, (_, i)=>{
                if (Math.abs(pagination.page - (i + 1)) <= 3) {
                  return ( 
                    <li className={`page-number current  ${i} ${pagination.page== (i+1)?'active':''}`} key={i} >
                        <a   href="#"  onClick={(e)=>paginationFun((i+1),  pagination.pageSize, e)}>
                          {i + 1} 
                        </a>
                    </li> 
                  );
                } 
                return null; 
               })} 
                  
                  <li className={`page-next ${pagination.page == pagination.totalPages? "pointer-events-none opacity-50":""}`}>
                    <Link href="#" onClick={(e)=>paginationFun((parseInt(pagination.page)+1), pagination.pageSize,e)}>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </li>
                  </ul>
              ):null}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <VariantEditModel openModel={openModel}  closeVariantModal={closeVariantModal} productVariant={productVariant} 
  refreshList={refreshList} setRefreshList={setRefreshList}
  thresholdData={thresholdData}
  setThresholdData = {setThresholdData}
  />
</>

  )
}
return (
  <Suspense fallback={<div>Loading...</div>}> 
    <ListingPage />
</Suspense>
)
}

export default page