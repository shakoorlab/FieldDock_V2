import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader()],
});
