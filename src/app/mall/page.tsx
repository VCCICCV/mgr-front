// import {ProductDetail} from "@/components/mall";
import { ProductCard } from "@/components";
import {fetchProduct} from "@/utils";
const Home = async () => {
    const allProducts = await fetchProduct();
    console.log(allProducts);
    const isDataEmpty = !Array.isArray(allProducts) || allProducts.length === 0;
    return (
        <main className="h-screen flex items-center justify-center">
            
            {/* <ProductDetail /> */}
            <div>
            ProductDetail
            </div>

            {/* {
                !isDataEmpty ?(
                    <section>
                        <div className="home_product-wrapper">
                            {allProducts?.map((product) => (
                                <ProductCard product={product}/>
                            ))}
                        </div>
                    </section>
                ):(
                    <div className="home_error-container">
                        <h2 className="text-black text-xl">
                            出错啦
                        </h2>
                    </div>
                )
            } */}
        </main>
    )
}

export default Home