import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiUser, CiBoxList, CiDollar, CiClock1} from "react-icons/ci";
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
const uslugaHref: string = "/tech-support"

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
        icon: <CiClock1 size={100} className={`w-full`} />,
        title: "Оперативность",
        description: "Задачи решаются в срок, а не «по вдохновению»."
    },
    {
        icon: <CiDollar size={100} className={`w-full`} />,
        title: "Опыт и маркетинговый взгляд",
        description: "Мы видим сайт, как инструмент продаж."
    },
    {
        icon: <CiUser size={100} className={`w-full`} />,
        title: "Человеческий язык",
        description: "Объясняем без «техножаргона», работаем на результат."
    },
    {
        icon: <CiBoxList size={100} className={`w-full`} />,
        title: "Никакой самодеятельности",
        description: "Всегда согласовываем предложения, но без лишней волокиты."
    },
];

const orderList1 = [
    {
        title: "У Вас есть сайт, но:",
        description: [
            "- Его делали «знакомые», фрилансеры или непрофильные подрядчики",
            "- Обновления выходят «когда-нибудь» и «если повезёт»",
            "- Каждая мелочь превращается в эпопею с дедлайном «ну недели через три, может раньше»",
            "- Сайт выглядит устаревшим, неудобным или просто «никаким»",
            "- Разработчики не выходят на связь или общаются как с коллегой-программистом, а не как с заказчиком",
        ]
    }
];

const orderList2 = [
    {
        title: "Поддержка любых сайтов",
        description: "Работаем с любой платформой: Tilda, WordPress, Bitrix, самописные CMS и прочие звери."
    },
    {
        title: "Оперативные правки и улучшения",
        description: "Заменить баннер, поправить меню, доработать блок — быстро, не «в течение месяца». Обновления без простоев и потери позиций."
    },
    {
        title: "Интеграции и технические задачи",
        description: "Связка с 1С, CRM, онлайн-оплатой, сервисами доставки и прочими системами. Настройка аналитики, целей, событий и UTM-меток."
    },
    {
        title: "Конверсионный подход",
        description: "Мы не просто «чиним баги», а понимаем, зачем и для кого работает сайт. Продающий баннер — сделаем. Понятное УТП — подскажем. Страница слишком сложная — упростим."
    },
    {
        title: "Аналитика и СЕО",
        description: "Проверим, как сайт индексируется и загружается. Предложим улучшения по CЕО и удобству пользователя."
    }
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Техническая поддержка`}
                description={`Мы берём на себя всё, что связано с поддержкой и развитием Вашего сайта — от исправления ошибок до внедрения новых разделов, интеграций и повышения конверсии. Без «мы посмотрим», без двухнедельного молчания, без стиля «как сделали в 2012-м, так и будет».`}
                background={`WebDeveloping.mp4`}
            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Кому подходит`}
                    description={``}
                    disableNumber={true}
                    orderList={orderList1}
                />

                <OrderedList
                    name={`Что мы делаем`}
                    description={``}
                    orderList={orderList2}
                />

                <CasesListWrapper forcedInitialCategory={"Веб-разработка"} onlyHomePage={false} />

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