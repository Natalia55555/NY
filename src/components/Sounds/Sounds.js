

import useSound from 'use-sound';

import fanfareSfx from './sounds/ikson-first-snow.mp3';

const FanfareButton = () => {
  // const [play, { stop }] = useSound(fanfareSfx);
  const [play] = useSound(fanfareSfx);
  return  setTimeout(play, 500);
  // return (
   
  //   // <button  onClick={stop}>
  //   //   <span role="img" aria-label="trumpet">
  //   //     🎺
  //   //   </span>
  //   // </button>
  // );
};

export default FanfareButton;