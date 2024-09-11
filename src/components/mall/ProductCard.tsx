import type { ProductProps } from "@/types"
interface ProductCardProps {
    product:ProductProps
}
const ProductCard = ({product}:ProductCardProps) => {
    const {name,image,model,info}=product;
  return (
    <div
    className="product-card group"
    >
        <div product-card_content>
            {name}{model}
        </div>
    </div>
  )
}

export default ProductCard