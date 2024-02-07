import React from "react";
import { AddressDb } from "@/services/address/interfaces/Address";
import { Button } from "@/components/components/Button";
interface Props extends AddressDb {
  addressSelected?: (id: string) => void;
  deleteAddress?: (id: string) => void;
  editAddressId: (id: string) => void;
  addressIdSelected: string;
}
export default function AddressCard(props: Props) {
  const {
    name,
    email,
    lastName,
    city,
    colony,
    phoneNumber,
    deliveryAddressId,
    neighborReference,
    state,
    zipCode,
    addressSelected,
    editAddressId,
    addressIdSelected,
    deleteAddress,
  } = props;

  return (
    <div
      className={`bg-white p-6 rounded-md shadow-md  ${
        addressIdSelected === deliveryAddressId
          ? "border-[#fbbf24] border-4"
          : "border-[#cbd5e1] border"
      } `}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Name:</p>
          <p className="break-words ">{name}</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p className="break-words">{email}</p>
        </div>
        <div>
          <p className="font-semibold">Last Name:</p>
          <p className="break-words">{lastName}</p>
        </div>
        <div>
          <p className="font-semibold">City:</p>
          <p className="break-words">{city}</p>
        </div>
        <div>
          <p className="font-semibold">Colony:</p>
          <p className="break-words">{colony}</p>
        </div>
        <div>
          <p className="font-semibold">Phone Number:</p>
          <p className="break-words">{phoneNumber}</p>
        </div>

        <div>
          <p className="font-semibold">Neighbour Reference:</p>
          <p className="break-words">{neighborReference}</p>
        </div>
        <div>
          <p className="font-semibold">State:</p>
          <p className="break-words">{state}</p>
        </div>
        <div>
          <p className="font-semibold">Zip Code:</p>
          <p className="break-words">{zipCode}</p>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap items-center">
        {addressSelected && (
          <Button
            onClick={() => {
              addressSelected(deliveryAddressId);
            }}
            className=" mt-3 p-2 sm:p-4"
          >
            Select this shipping address
          </Button>
        )}
        {deleteAddress && (
          <Button
            onClick={() => {
              deleteAddress(deliveryAddressId);
            }}
            className=" mt-3 p-2 sm:p-4 bg-red-500"
          >
            Eliminate
          </Button>
        )}
        <Button
          onClick={() => {
            editAddressId(deliveryAddressId);
          }}
          className=" mt-3 p-2 sm:p-4 bg-[#ca8a04] "
        >
          Edit Address
        </Button>
      </div>
    </div>
  );
}
