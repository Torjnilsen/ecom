import Image from "next/image";
import logo from "../images/logo.png";
import cartIcon from "../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../type";
import { useEffect, useState } from "react";
import SearchProducts from "./SearchProducts";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productData, allProducts } = useSelector(
    (state: StateProps) => state.next
  );

  useEffect(() => {
    if (allProducts && allProducts.allProducts) {
      setFilteredProducts(allProducts.allProducts);
    }
  }, [allProducts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (allProducts && allProducts.allProducts) {
      const filtered = allProducts.allProducts.filter((item: StoreProduct) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allProducts]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search next_amazon_yt products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
          {searchQuery && (
            <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {filteredProducts.length > 0 ? (
                <>
                  {filteredProducts.map((item: StoreProduct) => (
                    <Link
                      key={item.id}
                      className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                      href={{
                        pathname: `/${item.id}`,
                        query: {
                          id: item.id,
                          category: item.tags,
                          description: item.description,
                          image: item.imageUrl,
                          discountedPrice: item.discountedPrice,
                          price: item.price,
                          title: item.title,
                        },
                      }}
                      onClick={() => setSearchQuery("")}
                    >
                      <SearchProducts key={item.id} item={item} />
                    </Link>
                  ))}
                </>
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing matches your search keywords. Please try again!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <Link href="/contact">
            <p>contact us here</p>
          </Link>
          <p className="text-white font-bold flex items-center">
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        <Link href={"/cart"} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg" />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
