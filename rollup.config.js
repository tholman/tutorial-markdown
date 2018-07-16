import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

const config = {
  input: 'src/index.js',
  plugins: [
    eslint({exclude: []}),
    babel({
      exclude: 'node_modules/**',
    })
  ]
}

export default [
  {
    ...config,
    output: {
      format: 'umd',
      name: 'TutorialMarkdown',
      file: 'dist/tutorialMarkdown.umd.js',
      sourcemap: true
    }
  },
  // {
  //   ...config,
  //   output: {
  //     format: 'es',
  //     name: 'TutorialMarkdown',
  //     file: 'dist/tutorialMarkdown.m.js',
  //     sourcemap: true
  //   }
  // }
]