import React from "react";

function Youtube() {
  return (
    <a href="#" className="block">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ouncVBiye_M?si=_74Hl7YSiOgpz1tm"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        reiciendis sequi ipsam incidunt.
      </p>
    </a>
  );
}

export default Youtube;
