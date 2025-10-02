const decanter = require("decanter")
const path = require('path');

const dir = path.resolve(__dirname, "styles")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    ...decanter.theme
  },
  plugins: [
    ...decanter.plugins,
    require(`${dir}/centered.tsx`)(),
  ],
}
