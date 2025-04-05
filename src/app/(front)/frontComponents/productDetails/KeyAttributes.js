"use client";
import Link from "next/link";
import React, { useState } from "react";
import { baseUrl } from "@/Http/helper";

const KeyAttributes = ({ productDetails }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="key_attributes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-between">
               
                  <h2 className="title-left">Key attributes</h2>
               
                {/* <h2 className="title-left"> Key attributes</h2> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h6>&nbsp;</h6>
              <div className="additional-information_right_side">
                <ul>
                  {productDetails?.material && (
                    <li> 
                      <span>Material</span> {productDetails.material}
                    </li>
                  )}
                  {productDetails?.model_name && (
                    <li>
                      
                      <span>Model Name</span> {productDetails.model_name}
                    </li>
                  )}

                  {productDetails?.model_number && (
                    <li>
                      
                      <span>Model Number</span> {productDetails.model_number}
                    </li>
                  )}
                  {productDetails?.manufacture_part_number && (
                    <li>
                      
                      <span>Manufacture Part Number</span>
                      {productDetails.manufacture_part_number}
                    </li>
                  )}
                  {productDetails?.safety_warning && (
                    <li>
                      
                      <span>Safety Warning</span>
                      {productDetails.safety_warning}
                    </li>
                  )}
                  {productDetails?.country_of_origin && (
                    <li>
                      
                      <span>Country of Origin</span>
                      {productDetails.country_of_origin}
                    </li>
                  )}
                  {productDetails?.manufacturer_details && (
                    <li>
                      
                      <span>Manufacturer Details</span>
                      {productDetails.manufacturer_details}
                    </li>
                  )}
                  {productDetails?.packer_details && (
                    <li>
                      
                      <span>Packer Details</span>
                      {productDetails.packer_details}
                    </li>
                  )}
                  {productDetails?.importer_details && (
                    <li>
                      
                      <span>Importer Details</span>
                      {productDetails.importer_details}
                    </li>
                  )}
                  {/* {productDetails.fulfillmentBy && ( 
            <li> <span>Fullfilment By</span> {productDetails.fulfillmentBy}  </li>
          )} */}
                  {productDetails?.shippingProvider && (
                    <li>
                      
                      <span>Shipping Provider </span>
                      {productDetails.shippingProvider}
                    </li>
                  )}
                  {productDetails?.packageLength && (
                    <li>
                      
                      <span>Package Length</span> {productDetails.packageLength}
                      cm
                    </li>
                  )}
                  {productDetails?.packageBreadth && (
                    <li>
                      
                      <span>Package Breadth</span>
                      {productDetails.packageBreadth} cm
                    </li>
                  )}
                  {productDetails?.packageHeight && (
                    <li>
                      
                      <span>Package Height </span>
                      {productDetails.packageHeight} cm
                    </li>
                  )}
                  {productDetails?.packageWeight && (
                    <li>
                      
                      <span>Package Weight </span>
                      {productDetails.packageWeight} Kg
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <h6>Other attributes</h6> */}

              <div className="additional-information">
                {productDetails?.dynamicFields.filter(
                  (item) => item.field_value && item.field_value.trim() !== ""
                ).length > 5 ? (
                  <div
                    className="text show-more-height"
                    style={{ height: `${showMore ? "auto" : ""}` }}
                  >
                    <ul>
                      {productDetails?.dynamicFields?.map((item, index) =>
                        item.field_value && item.field_value?.trim() !== "" ? (
                          <li key={index}>
                            <span>{item.field_name}</span> {item.field_value}
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {productDetails?.dynamicFields.filter(
                  (item) => item.field_value && item.field_value.trim() !== ""
                ).length > 5 ? (
                  <div
                    className="show-more"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show Less" : "Show more"}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* <div className="col-lg-6">
          <h6>&nbsp;</h6>
          <div className="additional-information_right_side">
            <ul>

            {productDetails && productDetails.keyAttributes.length>0? productDetails.keyAttributes.map((item, index)=>(
                  item.key_value !=""?(
                    <li key={index}>
                      <span>{item.key_attribute}</span> {item.key_value}
                  </li>
                  ):null
                  
                )):''}
               
            </ul>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default KeyAttributes;
