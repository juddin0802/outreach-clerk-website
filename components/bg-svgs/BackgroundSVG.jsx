// components/BackgroundSVG.jsx
const BackgroundSVG = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 938 1185'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid slice'>
      <g opacity='0.5'>
        <g filter='url(#filter0_f_478_4455)'>
          <circle cx='491.5' cy='738.5' r='146.5' fill='#00FF84' />
        </g>
        <g opacity='0.5' filter='url(#filter1_f_478_4455)'>
          <circle cx='228.5' cy='259.5' r='146.5' fill='#F7700F' />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_478_4455'
          x='45'
          y='292'
          width='893'
          height='893'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='150'
            result='effect1_foregroundBlur_478_4455'
          />
        </filter>
        <filter
          id='filter1_f_478_4455'
          x='-218'
          y='-187'
          width='893'
          height='893'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='150'
            result='effect1_foregroundBlur_478_4455'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BackgroundSVG;
