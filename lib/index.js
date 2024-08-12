export const foo = () => {
  // https://github.com/pmndrs/zustand/blob/a56e76db5261291dcf9a88573dac58f67edb93db/rollup.config.js#L67-L70
  console.log(import.meta.env ? import.meta.env.MODE : undefined);

  // this could be any "define" which is used in app mode but not in lib mode.
  console.log(process.env.TEST);
};
