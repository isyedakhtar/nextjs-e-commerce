"use client";
import QuantityToAddToCart from "@/app/product/[product]/_components/productDetails/QuantityToAddToCart";
import Image from "next/image";
import { BiSolidOffer } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import {
  addOneItemToProductInShoppingCart,
  deleteProductInShoppingCart,
  subtractOneItemToProductInShoppingCart,
} from "@/redux/slices/ShoppingCart";
import { useDispatch } from "react-redux";
import { ShoppingCartProduct } from "@/utils/localStorage/interfaces";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  title: string;
  price: number;
  hasOffer: boolean;
  priceWithOffer: number;
  porcentageOfDiscount: string;
  hasFreeShipping: boolean;
  imgSrc: string;
  productId: number;
  quantity: number;
}
export default function ProductResumeCard(props: Props) {
  const {
    price,
    title,
    hasFreeShipping,
    hasOffer,
    porcentageOfDiscount,
    priceWithOffer,
    productId,
    imgSrc,
    quantity,
  } = props;
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [debounce, setDebounce] = useState<number>(1);

  useEffect(() => {
    const time = setTimeout(() => {}, 500);
    return () => clearTimeout(time);
  }, [debounce]);
  const totalPrice = price.toLocaleString("es-MX", {
    currency: "MXN",
    style: "currency",
  });
  const offerPrice = priceWithOffer.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  const handleDelete = (key: string, id: number) => {
    dispatch(deleteProductInShoppingCart({ key, productId: id }));
  };
  const handleAddItem = (key: string, product: ShoppingCartProduct) => {
    dispatch(
      addOneItemToProductInShoppingCart({
        key,
        productId: { productId, quantity: 1 },
      })
    );
  };
  const handleSubtractItem = (key: string, product: ShoppingCartProduct) => {
    dispatch(
      subtractOneItemToProductInShoppingCart({
        key,
        product: { productId, quantity: 1 },
      })
    );
  };
  const handleQuantityToAddCart = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filterValue = value.toString().replace(/[^0-9]g/, "");
    setProductQuantity(Number(filterValue));
  };
  return (
    <div
      className="
  flex 
  lg:min-w-[700px] 
  min-h-[140px]  
  items-center 
  justify-between 
  border-b-2
border-b-textGray
  flex-wrap
  gap-6
  pt-2
"
    >
      <div className="flex gap-2 flex-wrap ">
        <div className="flex gap-2 justify-start items-center flex-wrap lg:flex-nowrap  w-[300px]   lg:w-[380px]">
          <div>
            <Image src={imgSrc} alt={title} width={80} height={80} />
          </div>
          <div>
            <p className="font-medium" title={title}>
              {title.length > 75 ? title.substring(0, 38).concat("...") : title}
            </p>
            <button
              onClick={() => handleDelete("shoppingCart", productId)}
              className=" mr-4 text-base-color font-medium"
            >
              Eliminar
            </button>
            <button className=" mr-4 text-base-color font-medium">
              Comprar ahora
            </button>
          </div>
        </div>
        <QuantityToAddToCart
          handleOnChange={handleQuantityToAddCart}
          quantity={productQuantity}
          setQuantity={setProductQuantity}
          handleSubtractItem={handleSubtractItem}
          handleAddItem={handleAddItem}
          productId={productId}
          quantityInShoppingCart={quantity}
        />
      </div>
      <div className="relative flex  flex-col flex-wrap ">
        <div className=" flex gap-1 flex-col">
          {hasOffer && (
            <OfferAndFreeShipping
              discount="%20"
              hasFreeShipping
              totalPrice={totalPrice}
            />
          )}
        </div>
        <span className="self-start font-medium">
          {hasOffer ? offerPrice : totalPrice}
        </span>
      </div>
    </div>
  );
}
interface OfferAndFreeShippingProps {
  hasFreeShipping: boolean;
  totalPrice: string;
  discount: string;
}
function OfferAndFreeShipping(props: OfferAndFreeShippingProps) {
  const { hasFreeShipping, discount, totalPrice } = props;
  return (
    <>
      <div className=" flex gap-1">
        {hasFreeShipping && (
          <>
            <span className=" text-2xl text-science-blue-400   flex items-center sm:gap-2 gap-1">
              <FaShippingFast />
              <span className="text-xs">Envío gratis</span>
            </span>
          </>
        )}
        <span className=" text-2xl  text-red-600  ">
          <BiSolidOffer />
        </span>
      </div>
      <div className="flex gap-1">
        <span className="text-red-600 ">{discount}</span>
        <span className="line-through text-science-blue-300">{totalPrice}</span>
      </div>
    </>
  );
}
