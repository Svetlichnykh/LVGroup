'use client'

import React from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";

interface CustomerReviewProps {
    photo?: string;
    name: string;
    rank?: string | string[];
    text: string | string[] ;
}

const CustomerReview = ({photo, name, rank, text}: CustomerReviewProps) => {

    const { theme } = useTheme();

    return (
        <div
            className={`w-full flex flex-col gap-[25px] mt-[45px] max-lg:gap-[20px]  max-md:justify-end max-lg:mt-[20px] items-start`}>
            <h2 className={`text-customerClientSize text-mainColor`}>Отзыв клиента</h2>
            <div className={`h-[1px] bg-foreground w-full`}></div>
            <div className={`w-full flex max-lg:gap-[20px] max-lg:mt-[10px] max-md:gap-0 max-md:flex-col`}>
                <div className={`flex w-2/6 max-md:w-full flex-col justify-between pt-3 max-md:order-2 max-md:pt-2`}>
                    <Image className={`rotate-180 max-md:hidden ${theme == 'dark' ? 'invert' : ''}`} src={'/arrows.png'} alt={`arrows`} width={50} height={50} />
                    <div className={`w-full flex justify-start max-md:justify-end`}>
                        <div className={`flex gap-[10px]`}>
                            {photo ? (
                                <Image className={`rounded-[50%] max-md:w-[60px] max-md:h-[60px]`} src={`/${photo}`} alt={`фото нашего клиента`} width={75} height={75} />
                            ) : (
                                <Image className={`rounded-[50%] max-md:w-[60px] max-md:h-[60px] ${theme == 'dark' ? 'invert' : ''}`}
                                       src={`/NoCustomerPhoto.jpg`}
                                       alt={`фото клиента`}
                                       width={75} height={75}/>
                            )}
                            <div className={`flex flex-col justify-center`}>
                                <p className={`mb-[5px] text-[14px]`}>{name}</p>
                                <p className={`text-[12px] text-gray-500`}>
                                    {Array.isArray(rank) ? (
                                        rank.map((subItem, subIndex) => <span key={subIndex}>{subItem} <br/></span>)
                                    ) : (
                                    <span>{rank}</span>
                                    )}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex w-4/6 max-md:w-full`}>
                    <p className={`w-full text-[22px] max-xl:text-[18px] max-sm:text-[16px] max-md:w-full mb-[25px] max-md:mb-0 flex flex-col gap-2`}>{
                        Array.isArray(text) ? (
                            text.map((subItem, subIndex) => <span key={subIndex}>{subItem} <br/></span>)
                        ) : (
                            <span>{text}</span>
                        )
                    }</p>
                </div>
            </div>
            <div className={`h-[5px] w-full`}></div>
        </div>
    );
};

export default CustomerReview;