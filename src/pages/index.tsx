import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";
 
 
interface Props {
  productData: ProductProps;
}
 
 
 
 
export default function Home({ productData }: Props) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto ">
        <Banner />
        <div className="relative md:-mt20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}
 
 
export const getServerSideProps = async () => {
  const res = await fetch("https://api.noroff.dev/api/v1/online-shop");
  const productData = await res.json()
  return { props: { productData } };
}