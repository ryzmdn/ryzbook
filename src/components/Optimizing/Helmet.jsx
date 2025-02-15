import { Helmet } from "react-helmet";

export function HelmetHeader() {
  return (
    <Helmet>
      <meta
        name="description"
        content="RyzBook is a modern, beautifully designed space where users can share thoughts and messages. Built with React.js, Vite, TailwindCSS, and Firebase, featuring a Neumorphism aesthetic."
      />
      <meta name="application-name" content="RyzBook" />
      <meta name="author" content="Rizky Ramadhan" />
      <meta name="generator" content="React.js & TailwindCSS" />
      <meta
        name="keywords"
        content="RyzBook, Guestbook, React.js, Vite, TailwindCSS, Firebase, Neumorphism, UI Design, Web Development, Minimalist UI"
      />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="color-scheme" content="dark light" />
      <meta name="creator" content="Rizky Ramadhan" />
      <meta name="publisher" content="RyzBook" />
      <meta
        name="format-detection"
        content="telephone=no, address=no, email=no"
      />

      <link
        rel="shortcut icon"
        href="https://ryzbook.vercel.app/favicon.ico"
        type="image/x-icon"
      />
      <link rel="canonical" href="https://ryzbook.vercel.app" />
      <link
        rel="manifest"
        href="https://ryzbook.vercel.app/manifest.webmanifest"
      />

      <meta property="og:title" content="RyzBook | Share Your Message" />
      <meta
        property="og:description"
        content="A beautifully designed guestbook where users can leave messages. Built with React.js, TailwindCSS, and Firebase, featuring Neumorphism aesthetics."
      />
      <meta property="og:url" content="https://ryzbook.vercel.app" />
      <meta property="og:site_name" content="RyzBook" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://ryzbook.vercel.app/og-image.jpg"
      />
      <meta property="og:image:alt" content="RyzBook Preview" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RyzBook | Share Your Message" />
      <meta
        name="twitter:description"
        content="A beautifully designed guestbook where users can leave messages. Built with React.js, Vite, TailwindCSS, and Firebase, featuring Neumorphism aesthetics."
      />
      <meta
        name="twitter:image"
        content="https://ryzbook.vercel.app/og-image.jpg"
      />
      <meta name="twitter:site" content="@ryzmdn" />
      <meta name="twitter:creator" content="@ryzmdn" />

      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />
      <meta name="theme-color" content="#e4e4e7" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
}
