import Link from 'next/link'
import React from 'react'

const Checkout = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto ">
    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold text-gray-600">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-bold text-gray-600">
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-bold text-gray-600">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label htmlFor="expiryDate" className="block text-sm font-bold text-gray-600">
            Expiry Date:
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YYYY"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="cvv" className="block text-sm font-bold text-gray-600">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>
   
      <Link href="/succes"
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
           
        Complete Purchase
      </Link>
   
    </form>
  </div>
  )
}

export default Checkout