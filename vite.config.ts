import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import {fileURLToPath, URL} from 'url';
import {viteStaticCopy} from 'vite-plugin-static-copy'

// Copy css file into chunk component js files
const transformCssPlugin = () => {
  return {
    name: 'transform-js',
    transform(src,id){
      if(id.indexOf('plugin-vue')===-1 && id.indexOf('.vue') !==-1 && id.indexOf('e&type=style') === -1){
        const splitId = id.split('/');
        const name = splitId[splitId.length-1].split('.')[0];
        const component = name.slice(0,1).toUpperCase() + name.slice(1); 
        return {
          code: `////import "../../../${component}.vue_vue_type_style_index_0_scoped_true_lang.css";\n${src}`
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, `src/index.ts`),
      name: "VueLibSandbox",
      fileName: (format) => `vue-lib-sandbox.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        preserveModules: true,
        entryFileNames: ({name: fileName}) => {
          return `${fileName}.vue.js`
        },
        globals: {
          vue: "Vue",
        },
      },
    },
    target: 'esnext',
    cssCodeSplit: true,
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: './package.json', dest: './'
        }
      ]
    },
    ),
    transformCssPlugin(),
  ],
})


