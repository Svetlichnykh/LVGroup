import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiBoxList, CiSquareCheck, CiUser, CiRoute} from "react-icons/ci";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";
import type { Metadata } from 'next'

// Импорт сырого JSON и задание типов
import uslugiListRaw from '../../../app/uslugi.json'

interface Usluga {
    title: string
    href: string
    description: string
    "SEO-title"?: string
    "SEO-description"?: string
    "SEO-keywords"?: string
}

interface UslugaGroup {
    trigger: string
    values: Usluga[]
}

const uslugiList = uslugiListRaw as UslugaGroup[]

// Текущий путь услуги для этой страницы
const uslugaHref: string = "/creating-call-center"

// Находим услугу по href
const currentUsluga = uslugiList
    .flatMap(group => group.values)
    .find(item => item.href === "/usluga" + uslugaHref)

export const metadata: Metadata = {
    title: currentUsluga?.["SEO-title"] ?? currentUsluga?.title ?? "LV GROUP",
    description: currentUsluga?.["SEO-description"] ?? currentUsluga?.description ?? "",
    // Превратим CSV-строку ключевых слов в массив (Metadata принимает string | string[])
    keywords: currentUsluga?.["SEO-keywords"]
        ? currentUsluga["SEO-keywords"].split(",").map(k => k.trim())
        : undefined,
}
const featuresList = [
    {
        icon: <CiBoxList size={100} className={`w-full`} />,
        title: "Покажем, как действовать",
        description: "Мы дадим и поможем внедрить проверенные на практике инструменты продаж."
    },
    {
        icon: <CiSquareCheck size={100} className={`w-full`} />,
        title: "Поможем выполнить поставленный результат",
        description: "Проведем аудит, устраним \"зоны роста\", обучим персонал, а также дадим гарантии."
    },
    {
        icon: <CiUser size={100} className={`w-full`} />,
        title: "Мы знаем, как определить ваших конкурентов",
        description: "Не важно какая сфера бизнеса - все разработанные инструменты дадут результат и сделают вас №1 в своей нише."
    },
    {
        icon: <CiRoute size={100} className={`w-full`} />,
        title: "Дальнейшее сопровождение",
        description: "Оперативно подключимся к решению новых задач и открытию новых направлений бизнеса."
    }
];

const orderList = [
    {
        title: "Встреча и планирование реализации проекта",
        description: ""
    },
    {
        title: "Проведение вводного аудита",
        description: ""
    },
    {
        title: "Создание и согласование плана по реализации проекта",
        description: ""
    },
    {
        title: "Разработка/доработка всех регламентов и документов колл-центра",
        description: ""
    },
    {
        title: "Набор/добор команды при необходимости, контроль внедрения всех инструментов в компании заказчика",
        description: ""
    },
    {
        title: "Выполнение поставленного денежного показателя, как итог успешной реализации проекта",
        description: ""
    },
    {
        title: "Дальнейшая помощь заказчику в новых проектах, аудитах колл-центра и дополнительных обучениях",
        description: ""
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Создание и развитие колл-центра`}
                description={`LV Group – это не просто хорошие бизнес-тренеры, HR-ы или "продажники" - работая с нами, Вы получаете все необходимые услуги в одном месте от нашей команды.`}
                background={`CreatingCallCenter.mp4`}

            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Как мы работаем`}
                    description={`От вашей идеи до пошагового плана реализации совместного и успешного проекта.`}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Call-центр"} onlyHomePage={false} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />

                <Order />

            </div>

        </main>
    );
};

export default TechnicalSupport;