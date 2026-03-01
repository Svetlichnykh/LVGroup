import React from 'react';
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
    return (
        <footer className={``}>
            <nav className={`2xl:h-[160px] 2xl:flex 2xl:items-stretch 2xl:justify-between bg-background px-servicePadding max-2xl:py-servicePadding`}>
                {/* Навигация */}
                <ul className={`flex items-stretch justify-start flex-wrap 2xl:mx-footerNavMarginXL max-2xl:m-footerNavMarginMaxl max-sm:justify-around`}>
                    {/* ссылки */}
                    {[
                        { href: '/', label: 'Главная' },
                        { href: '/cases', label: 'Проекты' },
                        { href: '/usluga/create-salesment', label: 'Продажи' },
                        { href: '/usluga/context-ads', label: 'Контекстная реклама' },
                        { href: '/usluga/SMM', label: 'СММ' },
                        { href: '/usluga/website-creation', label: 'Веб-разработка' }
                    ].map(({ href, label }) => (
                        <li key={href} className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                            <Link
                                href={href}
                                className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Социальные сети */}
                <ul className={`flex items-stretch justify-start 2xl:mx-footerNavMarginXL max-2xl:mt-footerSocialMarginTopMaxXL max-2xl:m-footerSocialMarginMaxXL max-sm:justify-around`}>
                    {/* YouTube */}
                    <li className={`flex`}>
                        <Link
                            aria-label={"Ссылка на ютуб"}
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/@Group_LV"
                            target="_blank"
                            className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}
                        >
                            {/* svg иконка */}
                            {/* ... */}
                        </Link>
                    </li>
                    {/* Telegram */}
                    <li className={`flex`}>
                        <Link
                            aria-label={"Ссылка на телеграм"}
                            rel="noopener noreferrer"
                            href="https://t.me/tvoi_dvigatel"
                            target="_blank"
                            className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}
                        >
                            {/* svg иконка */}
                            {/* ... */}
                        </Link>
                    </li>
                    {/* WhatsApp */}
                    <li className={`flex`}>
                        <Link
                            aria-label={"Ссылка на WhatsApp"}
                            rel="noopener noreferrer"
                            href="https://wa.me/79242040030"
                            target="_blank"
                            className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}
                        >
                            {/* svg иконка */}
                            {/* ... */}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Блок с копирайтом и юридической информацией */}
            <div className="bg-background px-servicePadding py-6 border-t border-borderColor text-xs text-muted-foreground flex flex-col items-center text-center gap-2 sm:text-sm sm:flex-row sm:justify-between sm:items-start">
                <p className="text-center sm:text-left">
                    © 2025 LV GROUP <br className="sm:hidden" />
                    ИП Леонов Борис Сергеевич, ОГРНИП 321272400043890
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-4  sm:mt-0">
                    <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-200 underline p-2 ">
                        Политика конфиденциальности
                    </Link>
                    <Link href="/personal-consent" className="hover:text-foreground transition-colors duration-200 underline p-2">
                        Согласие на обработку персональных данных
                    </Link>
                </div>
            </div>

            <Script src="https://www.google.com/recaptcha/api.js" defer={true} />
        </footer>
    );
};

export default Footer;