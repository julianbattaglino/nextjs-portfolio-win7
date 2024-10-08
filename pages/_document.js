import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

                {/* Open Graph meta tags */}
                <meta property="og:locale" content="es" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta property="og:description"
                    content="Julian Battaglino, Front End Developer - Portfolio personal" />
                <meta property="og:url" content="https://www.julianbattaglino.com.ar" />
                <meta property="og:site_name" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta property="og:image" content="/julian-battaglino-pic.webp" />

                {/* Twitter meta tags */}
                <meta name="twitter:title" content="Juli4n B4tt4glin0 | Portfolio" />
                <meta name="twitter:description"
                    content="Julian Battaglino, Front End Developer - Portfolio personal" />
                <meta name="twitter:image" content="/julian-battaglino-pic.webp" />
                <meta property="twitter:url" content="https://www.julianbattaglino.com.ar" />

                <meta name="google-site-verification" content="B6v1kmJBHceOOGToEXrLdWYYTqe_WIMgaD2R9swZ4eY" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}