import localFont from 'next/font/local';
// import { Inter } from 'next/font/google';
 
export const inter = localFont({ 
    src: '/fonts/Inter-VariableFont.ttf',
    variable: '--font-inter',
    display: 'swap',
});
 
export const roboto = localFont({
    src: '/fonts/Roboto-VariableFont.ttf',
    variable: '--font-roboto',
    display: 'swap',
});

export const lusitana = localFont({
    src: '/fonts/Lusitana-Regular.ttf',
    variable: '--font-lusitana',
    display: 'swap',
});