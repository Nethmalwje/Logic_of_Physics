import React from "react";
function Quiz() {
  return (
    <div class="grid grid-cols-6 gap-2  mt-10 mx-auto rounded-lg w-3/4">
      <div class="... bg-slate-400 rounded-md">
        01
        <div className="info">
          <h3>Queston 1</h3>
          <p> className="marks">allocated marks -2 </p>
        </div>
      </div>

      <div class=" col-span-4  ...">
        <article className="overflow-hidden rounded-md shadow-lg transition hover:shadow-lg">
          <div className="bg-white p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>
            <p className="mt-5 line-clamp-3 text-sm/relaxed text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover mt-9"
            />
          </div>

          <div className="answers "></div>
        </article>
      </div>

      <div class="  col-span-1 ... bg-slate-400 rounded-md">03</div>
    </div>
  );
}

export default Quiz;
