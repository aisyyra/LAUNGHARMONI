import localFont from 'next/font/local'

// assign font variables
const Playfair_Display = localFont({
  src: [
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const Playfair_Display_SC = localFont({
  src: [
    {
      path: '../../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Playfair_Display_SC/PlayfairDisplaySC-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const Kapakana = localFont({ 
  src: '../../public/fonts/Kapakana/Kapakana.ttf' 
});

const Arapey = localFont({
  src: [
    {
      path: '../../public/fonts/Arapey/Arapey-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Arapey/Arapey-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
})

const Charm = localFont({
  src: [
    {
      path: '../../public/fonts/Charm/Charm-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Charm/Charm-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const PlusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const CourierPrime = localFont({
  src: [
    {
      path: '../../public/fonts/Courier_Prime/CourierPrime-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Courier_Prime/CourierPrime-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const DancingScript = localFont({
  src: [
    {
      path: '../../public/fonts/Dancing_Script/static/DancingScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Dancing_Script/static/DancingScript-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Dancing_Script/static/DancingScript-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Dancing_Script/static/DancingScript-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export { Playfair_Display, Playfair_Display_SC, Kapakana, Arapey, Charm, PlusJakartaSans, CourierPrime, DancingScript }