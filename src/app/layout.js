import "../index.scss";
import ClientLayout from "./ClientLayout";

const BaseCSS = ({ css = "*{box-sizing:border-box}body{margin:0}" }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

export const metadata = {
  title: 'Maquillajes embarazadas Medellín | Croko',
  description: 'Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín',
  keywords: 'Maquillaje embarazadas, maquillaje prenatal, maquillaje barriga, maquillaje barriguita, maquillaje estomago, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal Medellín, maquillaje para embarazadas, maquillaje de embarazo, belly painting en Medellín',
  openGraph: {
    url: 'https://www.maquillajeembarazadas.com',
    type: 'website',
    title: 'Maquillajes embarazadas Medellín | Croko',
    description: 'Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maquillajes embarazadas Medellín | Croko',
    description: 'Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="mdx-docs" />
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" />
        <BaseCSS />
      </head>
      <body className="try">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}