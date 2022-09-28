import React from 'react'
import "./Stock.css";
export default function Stockupdate() {
  return (
    <div>

            <br />


            <center>
                <h1 className="text-5xl font-extrabold text-white ">Update Stock Item</h1>
            </center>
            <br />
            <br />



            <form className="frame">
                <div className="mb-6">
                    <div>
                        <label for="Item Name" className="block mb-2 text-sm font-medium text-white ">Item
                            Name</label>
                        <input type="text" id="iname"
                            className="border-gray-900 from-gray-900 text-blue-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="I phone" required="" />
                    </div>
                    <br />
                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-white ">Suplier ID</label>
                        <input type="text" id="supid"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="2011" required="" />
                    </div>
                    <br />

                    <div>
                        <label for="company" className="block mb-2 text-sm font-medium text-white ">Unit price</label>
                        <input type="text" id="Unitprice"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$100" required="" />
                    </div>
                    <br />

                    <div>
                        <label for="company" className="block mb-2 text-sm font-medium text-white ">Item type</label>
                        <input type="text" id="Itemtype"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Phone" required="" />
                    </div>
                    <br />

                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-white ">Brand name</label>
                        <input type="text" id="bname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Apple" required="" />
                    </div>
                    <br />




                    <div>
                        <label for="visitors" className="block mb-2 text-sm font-medium text-white ">Item Quantity </label>
                        <input type="number" id="qty"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="2" required="" />
                    </div>
                    <br />


                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white" for="multiple_files">Item Image </label>
                            <input
                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="itemimg" type="file" multiple="" />
                        </div>

                    </div>

                    <button type="submit"
                        className="text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Update Details</button>
                </div>
            </form>

        </div>

  )
}