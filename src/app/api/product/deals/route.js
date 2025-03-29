import { isEmpty, rand, responseFun, slugify } from "@/Http/helper";
import path from 'path'
import { productModel, productVariantModel } from "@/Http/Models/productModel";
 

export async function POST(req) {
    try {
       
        const url = new URL(req.url);
        const deal = url.searchParams.get('deal'); 

       
        const category = url.searchParams.get('category');
        const subcategory = url.searchParams.get('subcategory');
        const childcategory = url.searchParams.get('childcategory');

        const  filterBy ="";
        const  start_price = "";
        const  end_price = "";
        const  brand = [];
     


        let query = {};
         
        
        // fetch  product data
        const products = await productModel.find(); 
        // get variant data
         let productWithVariant = await Promise.all(
                    products.map(async (prod)=>{
                        let variantQuery = {
                            product_id: prod._id,
                            listingStatus: 1
                        }; 

                        if(start_price){
                            variantQuery.consumerSalePrice  = {...variantQuery.consumerSalePrice, $gte:start_price }
                        }
                        if(end_price){
                            variantQuery.consumerSalePrice = {...variantQuery.consumerSalePrice, $lte:end_price}
                        }
                        let variantQueryBuilder = await productVariantModel.find(variantQuery) 
                        if (filterBy) {
                            let sortOrder = filterBy === "ASC"? 1:-1;
                            variantQueryBuilder = variantQueryBuilder.sort({consumerSalePrice: sortOrder }).limit(1);
                        }
                        //  const variant =  variantQueryBuilder; 

                         if (!variantQueryBuilder.length) return null;
                        return {
                            ...prod.toObject(),
                            variant:variantQueryBuilder[0]
                        }
                    })
                 )

               productWithVariant = productWithVariant.filter((item)=> item != null)
         
       
        return responseFun(true, productWithVariant, 200);
          
      } catch (error) {
        console.log(error);
       return responseFun(false, {message:"An error occurred while fetching products"}, 500)
    }
}
