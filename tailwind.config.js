const { Component } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
      'hero-img':'url{".components/public/food.png"}'
      },
    },
  },
  plugins: [],
}