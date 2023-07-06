import preprocessor from 'svelte-preprocess';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocessor({
    scss: {
      prependData: "@import './src/global.styles.scss';",
    },
  }),
};
