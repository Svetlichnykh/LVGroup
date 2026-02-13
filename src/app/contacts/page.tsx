'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { CiAirportSign1, CiBullhorn, CiUser } from "react-icons/ci";
import {useTheme} from "next-themes";
import Order from "@/components/order/Order";

const Page = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <main className={`relative max-w-full w-full`}>
            <section className="bg-cover bg-no-repeat">

                <div className="video-background">
                    <video autoPlay muted loop playsInline id="myVideo" className={theme == 'dark' ? '' : 'invert'}>
                        <source src={`/ContactsBackground.mp4`} type="video/mp4"/>
                        <track
                            default
                            kind="captions"/>
                    </video>
                </div>

                <div className={`bg-transparent relative p-ContactsHatPadding`}>
                    <div className={`sm:flex sm:items-start sm:justify-between max-lg:flex-wrap `}>
                        <div
                            className={`max-md:hidden font-railway text-ContactsHatTitle mr-ContactsHatMargin leading-[1] w-2/3 flex items-end justify-stretch max-xl:w-1/2 max-sm:w-full`}>
                            Контакты <br/> LVGroup
                        </div>
                        <div
                            className={`md:hidden text-ContactsHatTitle mr-ContactsHatMargin leading-[1] w-2/3 flex items-end justify-stretch max-xl:w-1/2 max-sm:w-full`}>
                            Контакты LVGroup
                        </div>
                        <div
                            className={`shrink-0 flex flex-flow items-start justify-start leading-[1.2] w-1/3 max-xl:w-1/2 max-sm:w-full pl-ContactsLinkPaddingLeft mt-ContactsLinksMarginTop text-ContactsLinkTextSize`}>
                            <Link href={"tel:+7 (4212) 93-03-01"}> +7 (4212) 93-03-01 </Link>
                            <Link href={"tel:+7 (924) 204-00-30"} className={"mt-[20px] mb-[30px] max-2xl:mb-[20px]"}> +7 (924) 204-00-30 </Link>
                            <div className={`mt-[8px]`}>
                                <div
                                    className={`whitespace-pre-wrap w-ContactsUroInfWidth mb-ContactsUroInfMarginBottom mt-ContactsUroInfMarginTop`}>
                                    <div className={`mb-[10px] text-[calc(14px + var(--responsive)*10)]`}>
                                        г. Хабаровск
                                    </div>
                                    <div>
                                        ул. Карла-Маркса д.166, оф. 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-transparent flex items-start justify-start flex-wrap relative gap-0 ml-[-1px] mb-[-1px]`}>
                    <div
                        className={`shrink-0 ${theme == "dark" ? "bg-[rgba(4,8,10,.3)]" : "bg-[rgba(184,184,184,.3)]"} ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight ${theme == "dark" ? "hover:bg-[rgb(4,8,10)]" : "hover:bg-[#d1d1d1]"}`}>
                        <div
                            className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`w-full h-4/5 flex justify-center items-center`}>
                                <CiAirportSign1 size={100} className={`w-1/3 h-1/3`}/>
                            </div>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-2/5 font-railway`}>
                                Работаем с клиентами по всему миру
                            </div>
                        </div>
                    </div>
                    <div
                        className={`shrink-0 ${theme == "dark" ? "bg-[rgba(4,8,10,.3)]" : "bg-[rgba(184,184,184,.3)]"} ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight  ${theme == "dark" ? "hover:bg-[rgb(4,8,10)]" : "hover:bg-[#d1d1d1]"}`}>
                        <div
                            className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`w-full h-4/5 flex justify-center items-center`}>
                                <CiBullhorn size={100} className={`w-1/3 h-1/3`}/>
                            </div>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-2/5 font-railway`}>
                                Всегда открыты к новым предложениям и сотрудничеству
                            </div>
                        </div>
                    </div>
                    <div
                        className={`shrink-0 ${theme == "dark" ? "bg-[rgba(4,8,10,.3)]" : "bg-[rgba(184,184,184,.3)]"} ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight  ${theme == "dark" ? "hover:bg-[rgb(4,8,10)]" : "hover:bg-[#d1d1d1]"}`}>
                        <div
                            className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`w-full h-4/5 flex justify-center items-center`}>
                                <CiUser size={100} className={`w-1/3 h-1/3`}/>
                            </div>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-2/5 font-railway`}>
                                Рассматриваем как сотрудников в штат, так и работу на удалёнке
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Order />
        </main>
    );
};

export default Page;