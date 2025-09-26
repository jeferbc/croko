import Document, { Html, Head, Main, NextScript } from 'next/document'

const BaseCSS = ({ css = '*{box-sizing:border-box}body{margin:0}'}) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

const CriticalCSS = () =>
  <style
    dangerouslySetInnerHTML={{
      __html: `
        .wedding.header{position:relative;overflow:hidden;min-height:100vh}
        .wedding-content{position:relative;z-index:2}
        .wedding.bg{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center}
        .center-text{text-align:center}
        .main-title h2{font-size:2.5rem;font-weight:600;margin-bottom:1rem}
        .gradient-text{background:linear-gradient(45deg,#fff,#f8f9fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .header-sub-text{color:#fff;font-size:1.1rem;line-height:1.6;margin-bottom:2rem}
        .girl{position:absolute;bottom:0;left:0;max-width:40%;z-index:1}
        .girl img{width:100%;height:auto;object-fit:contain}
        .decore{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
        .btn-white{background:#fff;color:#333;border:2px solid #fff;padding:12px 30px;border-radius:25px;font-weight:600;text-decoration:none;display:inline-block;transition:all 0.3s ease}
        .btn-white:hover{background:transparent;color:#fff}
        @media(max-width:768px){.main-title h2{font-size:1.8rem}.girl{max-width:60%}.header-sub-text{font-size:1rem}}
      `
    }}
  />

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name='generator' content='mdx-docs' />
          
          {/* DNS prefetch and preconnect for critical resources */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//ik.imagekit.io" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
          
          {/* Preload critical hero image */}
          <link rel="preload" as="image" href="https://ik.imagekit.io/ge17f66b4ma/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924&tr=f-webp,q-80" />
          
          {/* Font optimization with display=swap */}
          <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap" rel="stylesheet" />
          
          <BaseCSS />
          <CriticalCSS />
        </Head>
        <body className="try">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}   