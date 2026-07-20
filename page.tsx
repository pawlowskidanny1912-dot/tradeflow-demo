"use client";

import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      {!sent ? (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-8 w-full max-w-xl">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Plumbing Enquiry
            </h1>

            <p className="mt-3 text-slate-300">
              Tell us about your issue and we'll collect the details needed
              to arrange your appointment.
            </p>
          </div>


          <label className="text-white font-medium">
            What service do you need?
          </label>

          <select className="bg-slate-800 text-white border border-slate-600 p-3 rounded-xl w-full mt-2">
            <option>Boiler repair</option>
            <option>Leak repair</option>
            <option>Heating problem</option>
            <option>Radiator issue</option>
            <option>Bathroom plumbing</option>
            <option>Other</option>
          </select>


          <label className="text-white font-medium block mt-5">
            Postcode
          </label>

          <input
            className="bg-slate-800 text-white border border-slate-600 p-3 rounded-xl w-full mt-2"
            placeholder="Example: BT60 1AA"
          />


          <label className="text-white font-medium block mt-5">
            What is the problem?
          </label>

          <textarea
            className="bg-slate-800 text-white border border-slate-600 p-3 rounded-xl w-full mt-2 h-32"
            placeholder="Please describe what is happening..."
          />


          <label className="text-white font-medium block mt-5">
            How urgent is this?
          </label>

          <select className="bg-slate-800 text-white border border-slate-600 p-3 rounded-xl w-full mt-2">
            <option>Emergency</option>
            <option>Needs attention soon</option>
            <option>General enquiry</option>
          </select>


          <label className="text-white font-medium block mt-5">
            Your contact details
          </label>

          <input
            className="bg-slate-800 text-white border border-slate-600 p-3 rounded-xl w-full mt-2"
            placeholder="Name and phone number"
          />


          <button
            onClick={() => setSent(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-xl w-full mt-8 transition"
          >
            Submit Enquiry
          </button>


          <p className="text-slate-400 text-sm text-center mt-5">
            Your information will be used to arrange your service.
          </p>

        </div>

      ) : (

        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-10 max-w-xl text-center">

          <h1 className="text-3xl font-bold text-white">
            Enquiry Submitted
          </h1>

          <p className="text-slate-300 mt-4">
            Thank you. A member of the team will contact you shortly.
          </p>

          <button
            onClick={() => setSent(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 mt-8"
          >
            New Enquiry
          </button>

        </div>

      )}

    </main>
  );
}