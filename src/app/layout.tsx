import { ThemeProvider } from 'next-themes';
import {Corporation, WithContext} from 'schema-dts'
import localFont from 'next/font/local';
import './globals.css';
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import BurgerHeader from "@/widgets/burger-header/Burger-header";
import ThemeSwitcher from "./ThemeSwitcher";
import { Suspense } from 'react';
import Script from 'next/script';
import YandexMetrika from "@/lib/YandexMetrika";
import CookieConsentComponent from "@/widgets/CookieConsent/CookieConsent";
const raleway = localFont({
    src: [
        {
            path: '../../public/fonts/raleway-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/raleway-700.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-raleway',
    display: 'swap',
});

const roboto = localFont({
    src: [
        {
            path: '../../public/fonts/roboto-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/roboto-700.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata = {
    title: 'LV GROUP — продажи, сайты, реклама под ключ',
    description: 'LV GROUP помогает бизнесу расти: аудит и развитие отделов продаж, создание сайтов, СЕО и контекстная реклама, СММ и дизайн. Команда, которая делает результат!.',
    applicationName: 'LV Group',
    authors: [{ name: 'Продвигаем бизнес — от маркетинга до продаж' }],
    creator: 'Boris (bsleonov@gmail.com)',
    publisher: 'LV Group',
    keywords: [
        'аудит отдела продаж', 'создание сайтов', 'контекстная реклама',
        'СММ продвижение', 'СЕО продвижение', 'маркетинговое сопровождение',
        'фирменный стиль', 'фотосессии', 'видеосъемка', 'Колл-центр под ключ'
    ],
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL('https://grouplv.ru'),
    openGraph: {
        title: 'LV Group - команда, которая делает результат!',
        description: 'Отделы продаж, создание сайтов, контекстная реклама, дизайн, СММ.',
        url: 'https://grouplv.ru',
        siteName: 'LV Group',
        images: [
            {
                url: 'https://opengraph.b-cdn.net/production/images/4b778b81-5173-45ae-8a48-cec9a566e529.jpg?token=FI-tZi6fkA4LbV_D4i1GOR8Nbf_JcWFOvff_kB9XfWM&height=1200&width=1200&expires=33281589971',
                width: 1200,
                height: 1200,
                alt: 'LV Group - команда, которая делает результат!',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LV Group - команда, которая делает результат!',
        description: 'Отделы продаж, создание сайтов, контекстная реклама, дизайн, СММ.',
        site: '@lvgroup',
        images: [
            'https://opengraph.b-cdn.net/production/images/4b778b81-5173-45ae-8a48-cec9a566e529.jpg?token=FI-tZi6fkA4LbV_D4i1GOR8Nbf_JcWFOvff_kB9XfWM&height=1200&width=1200&expires=33281589971',
        ],
    },
    viewport: 'width=device-width, initial-scale=1',
    category: 'Бизнес',
};

const jsonLd: WithContext<Corporation> = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'LV Group',
    alternateName: "ЛВ Групп",
    url: "https://grouplv.ru/",
    logo: "https://grouplv.ru/LVGROUP_logo.svg",
    sameAs: [
        "https://grouplv.ru/",
        "https://www.youtube.com/@Group_LV"
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+7 (4212) 93-03-01",
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: ["en","Russian"],
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <html lang="ru" suppressHydrationWarning>
            <head />
            <body
                className={`${raleway.variable} ${roboto.variable} antialiased`}
            >
            <Script id="metrika-counter" strategy="afterInteractive">
                {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(101600589, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
                }
            </Script>
            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-5B22PCRL13"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5B22PCRL13');
          `}
            </Script>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />

            <Suspense fallback={<></>}>
                <YandexMetrika />
            </Suspense>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <ThemeSwitcher/>
                <Header />
                <BurgerHeader />
                <main className={`flex flex-col items-center`}>
                    {children}
                </main>
                <Footer/>
                <CookieConsentComponent />
            </ThemeProvider>
            </body>
            </html>
        </>
    );
}
