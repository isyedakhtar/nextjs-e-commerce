import AddAddress from "@/app/delivery-address/_components/addAddress/AddAddress";
import { Button } from "@/components/components/Button";
import Modal from "@/modals/modal/Modal";
import React from "react";
import { FaTruck } from "react-icons/fa";
interface Props {
  handleAddressModal: () => void;
  isAddAddress: boolean;
}
export default function EmptyAddress(props: Props) {
  const { handleAddressModal, isAddAddress } = props;
  return (
    <section className="w-full max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
      <p className="text-2xl text-center font-light text-[#71717a]">
        It looks like you don't have a shipping address yet.{" "}
      </p>
      <p className="text-xl text-center font-light text-[#71717a]">
        Add a new shipping address.
      </p>
      <div className="flex justify-center mb-4">
        <span className="text-4xl  text-[#71717a]">
          <FaTruck />
        </span>
      </div>
      <Button onClick={handleAddressModal} className="m-auto">
        Add Address
      </Button>
      {isAddAddress && (
        <Modal className="flex justify-center items-center">
          <AddAddress handleCloseModal={handleAddressModal} />
        </Modal>
      )}
    </section>
  );
}
