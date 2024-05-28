import React from 'react'

export default function HeroSection() {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img className='w-full' src="https://i0.wp.com/www.tulip-center.com/wp-content/uploads/2018/11/Shoulder-massage.jpg?resize=1140%2C758&ssl=1" />
    <div class="absolute inset-0 bg-black opacity-70"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to <span className='text-5xl font-extrabold text-[#c8a876]'> Zhidock Therapy</span> </h1>
    <p class="text-2xl font-bold text-gray-300 mb-8">We have amazing services that await you.</p>
    <p class="text-lg font-italic text-gray-300 mb-8">Feel Your Healing......</p>
    <a href="#" class="bg-brown text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
  </div>
</div>

  )
}
