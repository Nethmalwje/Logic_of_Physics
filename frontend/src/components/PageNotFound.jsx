import React from "react";
export default function () {
  return (
    <div>
      <div class="flex justify-center items-center h-screen bg-gray-200">
        <div class="text-center">
          <h1 class="text-4xl font-medium">404</h1>
          <p class="text-xl font-medium m-6">
            Sorry, the page you're looking for can't be found.
          </p>
          <a
            href="/"
            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
