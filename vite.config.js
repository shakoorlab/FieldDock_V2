import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import svgLoader from "vite-svg-loader";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
