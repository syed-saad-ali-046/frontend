import React from "react";

function CardPaymentModal({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex items-center mt-10">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="flex-shrink font-bold mx-4 text-gray-500">Enter Your Card Info</span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              
              {/* Card form */}
              <div className="w-full">
              <div className="mb-4 relative">
  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
    Card Number
  </label>
  <input
    type="text"
    id="cardNumber"
    name="cardNumber"
    placeholder="XXXX XXXX XXXX XXXX"
    className="mt-1 focus:ring-zinc-500 focus:border-zinc-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md pl-12" // Added pl-12 for padding left
  />
  {/* Visa Logo */}
  <img
    src="data:image/png;base64,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"
    alt="Visa"
    className="absolute top-0 right-0 mt-2 mr-12 w-8 h-8"
  />
  {/* Mastercard Logo */}
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX////rABv3nhv/XwDqAAD3mgD2lgD3oBz/YQD/XQDrABr2ohz/WgDrABP3nRPpABz/+/frAAr+9fX+Zgb5khf61db73d797t70lZn6y5n4SQ38dg35jhb6Twv9cQv9bQr85uf+8uf5vnvyfoP6wYP60dP96NP4pjnxKhb4q0nzNRP6hxP83b72QRD7fhD7z6HyhIjwY2n5tmntQUr0mp72rK/tOELxdXv71a35yMruRE34rE3sKDXwaG73tLbvWmH5s2H5unLsGSmWLkStAAADmUlEQVR4nO3baVvaQBSGYcimoSRArAhdlCWmtZu0LmjtYv3/P6oDKmoNciA2kwzP/ZErH3ivM5lJJnMqFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmiHrt7e12LxJc2uzvJMlOv/nf/9OzaZ+MT52Z0/FJe+6lO2eDA2/mYHC2k+P/XNH5WKVqBbXqjVrQUj+Mz1MuTQau57qhNRO66odBkvt/XkLUCZzWLNydWstpdR4O2GZXpbFSuF7YLeqAjYaOkxLvJqTjDO8yNgfp8W5DxoXM2Hki35TjdG4u7T6V7zpjV2uWNNtXC/JN61jdV5cm1oJ804wbBbsfR06wKN91xlEl9sLFAdW0U6wyfnck+aZDte5uSAJOynihO9ZMr9ES5msEvm974ohWX3e0az3ZCJ0G3LRt338pjRi6hYgoD1idBCxfxKglDlizr/m+JY4Y6l8Zf4gDVuv2bcRNaUIrfKc74E/xLNp4u2nPIu6+kEZ0/+gN+Ese8MNdQNuufxRX0fukM2C0+EHmVu1+QBVRfCtans5b8bd0IVRj9EFA29+Tj9NLfQH3xWO0+v5hCVUR38iLqO8RVT6PNur/BFTzqbiI+ubT8xWnmfJMNkcZSqiKuCUv4oGegO0Md+G0iOKHN8vTs0M1kg/SV2kJ/dfihG6sJaF8LWykBVQRxQktV0fALEtFORaMjnyQfp5TwyWGqY4tjWwzaRlmU/kgraaXcPJwKublHzDrWjFNWOj1YtX3pgfDVP5Y4+b/WHOceaJRCb/IEx7mnjDrer/sZJr/mj9e+dXwXsJdecL8NzO+PkfCPfmO1DfjE14anzD/Gpp/H5o/l5q/Hpr/TGP+c6n57xZr8H5o/ju++fs05u+1rcF+qfl73uZ/t1ji21NaEcvw7alymuX74RIl1Hcew/xvwBleg0vyHX8NzmLkdJ6mmfT1nW/L50xUEuf/AjyzynkMf6tE59oqUWD62UTzz5euwRlhNVCvxOe8a75vi4eou1GAIXpjibP6vvisvlecs/qVyZaGaKQGzqjSLWW/hbRnprGtLk02RD0zxWvUO17Q91Rbqu9J4wo/XzSS967FT2QMi9q7pkTHtXn9h8Gj/sNwXv+hdVjUfFP7w+BxD2lrmNpDGoePe0jDuGA9a2l6v4ZHd33AR8MFfcDubRuwexGfFWSFl1iul1spUy83AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIX+AuVXZYqsmvNcAAAAAElFTkSuQmCC"
    alt="Mastercard"
    className="absolute top-0 right-0 mt-1 mr-2 w-10 h-10 "
  />
  
</div>

                {/* Add more input fields for card information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      placeholder="MM/YY"
                      className="mt-1 focus:ring-zinc-500 focus:border-zinc-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                      className="mt-1 focus:ring-zinc-500 focus:border-zinc-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>   
                </div>
                <div className="mt-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Enter Email"
                    className="mt-1 focus:ring-zinc-500 focus:border-zinc-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country or Region
                  </label>
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    placeholder="Country"
                    className="mt-1 focus:ring-zinc-500 focus:border-zinc-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-zinc-800 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPaymentModal;
