import Link from "next/link";
import VideoBackground from "./VideoBackground";

const Welcome = () => {
    return (
        <section className="p-welcomeWrapper pb-welcomeWrapperBottom w-full">
            {/* Видео вынесено в клиентский компонент */}
            <VideoBackground />

            <div className="flex w-full px-welcomePadding gap-[6px] max-xl:gap-[3px] relative max-sm:flex-col">
                <div className="w-2/3 max-2xl:w-1/2 flex flex-col justify-between max-sm:w-full">
                    {/* Один h1 для SEO */}
                    <h1 className="text-mainZag font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]">
                        {/* Для xl и больше — версия с переносами */}
                        <span className="hidden xl:inline">
            Возьмём маркетинг <br/> и продажи <br/> на себя
        </span>

                        {/* Для sm–xl — версия в одну строку */}
                        <span className="hidden sm:inline xl:hidden">
            Возьмём маркетинг и продажи на себя
        </span>

                        {/* Для мобилок (sm:hidden) — меньший размер */}
                        <span className="sm:hidden text-[36px] mb-[35px] block leading-[50px]">
            Возьмём маркетинг и продажи на себя
        </span>
                    </h1>

                    {/* Один p для SEO и чистоты */}
                    <p className="text-welcomeColorDescr">
                        {/* Десктопная версия (многострочный текст) */}
                        <span className="hidden md:inline text-welcomeDescr">
            Чтобы вы сфокусировались на других важных задачах бизнеса.<br/>
            В нашей команде более 20 профильных специалистов. <br/>
            Наша цель — это результат
        </span>

                        {/* Мобильная версия (три абзаца, но внутри одного p) */}
                        <span className="md:hidden block text-[16px]">
            <span className="block mb-[10px]">
                Чтобы вы сфокусировались на других важных задачах бизнеса.
            </span>
            <span className="block mb-[10px]">
                В нашей команде более 20 профильных специалистов.
            </span>
            <span className="block mb-[10px]">
                Наша цель — это результат
            </span>
        </span>
                    </p>
                </div>


                <nav
                    className="w-1/2 max-2xl:w-1/2 max-sm:w-full p-welcomeLinkPadding pt-welcomeLinkPaddingTop max-sm:pl-0">
                    <ul className="flex flex-col gap-[10px] max-lg:gap-[7px]">
                        <li>
                            <Link
                                href="/usluga/website-creation"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-md:hidden max-sm:inline">
                                Создание сайтов
                            </Link>
                            <Link
                                href="/usluga/website-creation"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 md:hidden max-sm:hidden">
                                Cайты
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/usluga/context-ads"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-lg:hidden max-sm:inline">
                                Контекстная реклама
                            </Link>
                            <Link
                                href="/usluga/context-ads"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 lg:hidden max-sm:hidden">
                                Реклама
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/usluga/create-salesment"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-2xl:hidden">
                                Создание/развитие <br/> отделов продаж
                            </Link>
                            <Link
                                href="/usluga/create-salesment"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 2xl:hidden max-xl:hidden">
                                Развитие отделов продаж
                            </Link>
                            <Link
                                href="/usluga/create-salesment"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 xl:hidden max-md:hidden max-sm:inline">
                                Развитие продаж
                            </Link>
                            <Link
                                href="/usluga/create-salesment"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 md:hidden max-sm:hidden">
                                Продажи
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/usluga/"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300">
                                Видеосьемка
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/usluga/SMM"
                                className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300">
                                СММ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Welcome;
