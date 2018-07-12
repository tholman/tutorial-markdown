import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    name: 'TutorialMarkdown',
    file: 'dist/tutorialMarkdown.min.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    eslint({
      exclude: []
    }),
    babel({
      exclude: 'node_modules/**',
    })
  ]
};