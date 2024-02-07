import React from "react";
import { AddressDb } from "@/services/address/interfaces/Address";

export default function AddressCardReadOnly({
  address,
}: {
  address: AddressDb;
}) {
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
  } = address;

  return (
    <div
      className={`bg-white sm:p-6 p-1 rounded-md shadow-md border-[#cbd5e1] border
      overflow-hidden`}
    >
      <div className="grid grid-cols-2 sm:gap-4 gap-1">
        <div>
          <p className="font-semibold">Name:</p>
          <p className="break-words">{name}</p>
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
          <p className="font-semibold">Neighbor Reference:</p>
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
    </div>
  );
}
