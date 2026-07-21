export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">

        <h1 className="text-2xl font-bold">
          TradeFlow Studio
        </h1>

        <div className="flex gap-4">

          <button className="px-5 py-2 rounded-full border">
            Examples
          </button>

          <button className="px-5 py-2 rounded-full bg-black text-white">
            Get Quote
          </button>

        </div>

      </nav>



      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">


          <div>

            <h2 className="text-6xl font-semibold leading-tight tracking-tight">
              Websites built for trade businesses.
            </h2>


            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              We create modern websites for plumbers, electricians,
              builders and service companies that help turn visitors
              into customers.
            </p>


            <div className="flex gap-4 mt-10">

              <button className="bg-black text-white px-8 py-4 rounded-full text-lg">
                Get Free Website Review
              </button>


              <button className="border px-8 py-4 rounded-full text-lg">
                View Examples
              </button>

            </div>


          </div>



          {/* Website Preview */}
          <div className="bg-gray-100 rounded-3xl p-8 shadow-xl">

            <div className="bg-white rounded-2xl overflow-hidden shadow">


              <div className="bg-black text-white p-6">

                <h3 className="text-2xl font-bold">
                  Smith Plumbing
                </h3>

                <p className="mt-2 text-gray-300">
                  Emergency plumbing & heating services
                </p>

              </div>


              <div className="p-6 space-y-4">

                <div className="bg-gray-100 rounded-xl p-4">
                  24/7 Emergency Call Outs
                </div>


                <div className="bg-gray-100 rounded-xl p-4">
                  Request A Quote
                </div>


                <div className="bg-gray-100 rounded-xl p-4">
                  Customer Reviews ★★★★★
                </div>


              </div>


            </div>

          </div>


        </div>

      </section>





      {/* Problems */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-semibold">
            Most trade businesses lose customers online.
          </h2>


          <div className="grid md:grid-cols-3 gap-8 mt-12">


            <Card
              title="Outdated Website"
              text="Old designs make businesses look less trustworthy."
            />


            <Card
              title="Poor Mobile Experience"
              text="Customers leave when websites are difficult to use."
            />


            <Card
              title="No Clear Enquiries"
              text="We build websites that make contacting you simple."
            />


          </div>


        </div>

      </section>





      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-8">


        <h2 className="text-4xl font-semibold">
          Everything your business website needs.
        </h2>



        <div className="grid md:grid-cols-2 gap-6 mt-12">


          <Feature text="Professional custom design" />

          <Feature text="Mobile-friendly layouts" />

          <Feature text="Quote request forms" />

          <Feature text="Google search optimisation" />

          <Feature text="Customer reviews section" />

          <Feature text="Hosting and updates" />


        </div>


      </section>





      {/* Portfolio */}
      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-8">


          <h2 className="text-4xl font-semibold">
            Example websites
          </h2>


          <div className="grid md:grid-cols-2 gap-8 mt-12">


            <Portfolio
              title="Smith Plumbing"
              type="Plumbing Website"
            />


            <Portfolio
              title="Elite Electrical"
              type="Electrician Website"
            />


          </div>


        </div>

      </section>





      {/* Pricing */}
      <section className="py-24 max-w-7xl mx-auto px-8">


        <h2 className="text-4xl font-semibold">
          Simple pricing
        </h2>


        <div className="grid md:grid-cols-3 gap-8 mt-12">


          <Price
            title="Starter"
            price="£799"
          />


          <Price
            title="Professional"
            price="£1,499"
          />


          <Price
            title="Support"
            price="£99/month"
          />


        </div>


      </section>





      {/* CTA */}
      <section className="bg-black text-white py-24 text-center">


        <h2 className="text-5xl font-semibold">
          Ready for a better website?
        </h2>


        <p className="mt-6 text-xl text-gray-300">
          Get your free website review today.
        </p>


        <button className="mt-10 bg-white text-black px-10 py-4 rounded-full">
          Contact TradeFlow
        </button>


      </section>


    </main>
  );
}





function Card({title,text}:{
  title:string;
  text:string;
}){

return(
<div className="bg-white rounded-2xl p-8 shadow">

<h3 className="text-xl font-semibold">
{title}
</h3>

<p className="mt-4 text-gray-600">
{text}
</p>

</div>
)

}




function Feature({text}:{
text:string;
}){

return(
<div className="border rounded-xl p-5 text-lg">
✓ {text}
</div>
)

}





function Portfolio({
title,
type
}:{
title:string;
type:string;
}){

return(
<div className="bg-white text-black rounded-3xl p-8">

<h3 className="text-2xl font-semibold">
{title}
</h3>

<p className="mt-3 text-gray-600">
{type}
</p>

<button className="mt-6 border px-5 py-2 rounded-full">
View Demo
</button>

</div>
)

}





function Price({
title,
price
}:{
title:string;
price:string;
}){

return(
<div className="border rounded-3xl p-8">

<h3 className="text-2xl font-semibold">
{title}
</h3>

<p className="text-4xl font-bold mt-4">
{price}
</p>

<button className="mt-8 bg-black text-white px-6 py-3 rounded-full">
Choose
</button>

</div>
)

}