import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiGps, CiMicrophoneOn, CiEdit, CiCircleCheck} from "react-icons/ci";
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
const uslugaHref: string = "/remoted-call-center"

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
        icon: <CiGps size={100} className={`w-full`} />,
        title: "Опытные операторы",
        description: "Звонки делают не стажёры, а люди с опытом живых продаж. Разговор ведётся осознанно, с гибкостью и пониманием задач."
    },
    {
        icon: <CiMicrophoneOn size={100} className={`w-full`} />,
        title: "Живое общение, а не \"робозвонки\"",
        description: "Мы не читаем скрипты с листа. Мы адаптируемся под собеседника, слышим его и реагируем."
    },
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "Правильные скрипты",
        description: "Пишем сценарии общения под Ваш бизнес и ЦА. Согласуем с Вами и дадим рекомендации как усилить эффективность."
    },
    {
        icon: <CiCircleCheck size={100} className={`w-full`} />,
        title: "Фокус на результате, а не на объёмах",
        description: "Цель — не «отзвонить тысячу», а вытащить максимум пользы из каждой базы."
    }
];

const orderList = [
    {
        title: "Опросы и исследования",
        description: [
            "- Изучаем удовлетворенность, причины выбора или отказа",
            "- Получаем реальные отзывы о продукте, сервисе, заведении",
            "- Готовим отчёты и рекомендации",
        ]
    },
    {
        title: "Первичный холодный обзвон",
        description: [
            "- Презентация продукта или услуги по согласованному скрипту",
            "- Кейсы, интервью, закулисье",
            "- Выявление интереса и ЛПРов, передача контактов для дальнейшей работы",
        ]
    },
    {
        title: "Обзвон по действующей базе",
        description: [
            "- Возврат клиентов",
            "- Информирование об акциях и спецпредложениях",
            "- Реактивация «спящих» контактов",
        ]
    },
    {
        title: "Передача заинтересованных контактов",
        description: [
            "- Не просто «отчёт по звонкам», а передача контактов реальных ЛПРов и заинтересованных клиентов",
            "- Вы получаете «теплые» лиды, готовые к диалогу с Вашим менеджером",
        ]
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Удалённый Колл-центр`}
                description={`Живые звонки, которые действительно работают. Проводим прозвоны базы клиентов за Вас — профессионально, внятно, заинтересованно. Помогаем выявить лояльность, презентовать акцию, вернуть клиента или передать заинтересованного ЛПРа Вашему менеджеру. Всё чётко, с выверенными скриптами и живыми голосами — никакого «роботизированного сервиса».`}
                background={`CreatingCallCenter.mp4`}

            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что мы делаем`}
                    description={``}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Call-центр"} onlyHomePage={false} />

                <OwnFeatures
                    title={`Почему это работает`}
                    featuresList={featuresList}
                />

                <Order />

            </div>

        </main>
    );
};

export default TechnicalSupport;