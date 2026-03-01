import React from 'react';
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import Order from "@/components/order/Order";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import {CiBookmarkCheck, CiBoxList, CiCalendar, CiDiscount1, CiGrid32, CiMonitor} from "react-icons/ci";
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
const uslugaHref: string = "/website-creation"

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
        icon: <CiMonitor size={100} className={`w-full`} />,
        title: "Современный и адаптивный сайт",
        description: "Используем на сайтах эффективные сервисы: квизы, формы обратной связи, сервисы для глубокой аналитики, калькуляторы стоимости. Пишем чистый и валидный код."
    },
    {
        icon: <CiGrid32 size={100} className={`w-full`} />,
        title: "Экспертность в дизайне и создании контента",
        description: "Проводим съёмки, создаем иллюстрации, напишем тексты, исходя из современных и актуальных трендов."
    },
    {
        icon: <CiBookmarkCheck size={100} className={`w-full`} />,
        title: "Помощь и обучение работе с сайтом",
        description: "Поможем с CMS, научим обновлять контент сайта, поможем продлить сертификат SSL, сменить хостинг или домен сайта и многое другое."
    },
    {
        icon: <CiBoxList size={100} className={`w-full`} />,
        title: "Доступ к статистике и отчетам сайта",
        description: "Предоставляем постоянный доступ к онлайн статистике, регулярно отчитываемся о выполненных работах по сайту."
    },
    { icon:
            <CiDiscount1 size={100} className={`w-full`} />,
        title: "Скидки",
        description: "Предоставляем скидки на сопутствующие услуги для максимально эффективного онлайн-продвижения компании."
    },
    {
        icon: <CiCalendar size={100} className={`w-full`} />,
        title: "Дальнейшее развитие после запуска",
        description: "Разработаем дальнейшую стратегию продвижения, подберем самые эффективные инструменты, исходя из нашего опыта и анализа."
    },
];

const orderList = [
    {
        title: "Аналитика и проектирование сайта",
        description: "Определяем цели и задачи проекта, изучаем бизнес-процессы. Планируем архитектуру сайта и составляем техническое задание."
    },
    {
        title: "Разработка дизайна сайта и адаптация",
        description: "Разработка макетов дизайна сайта в четырех форм-факторах (desktop, laptop, tablet, phone) с учетом сценариев поведения пользователей."
    },
    {
        title: "Верстка, программирование и тестирование сайта",
        description: "Пишем чистый валидный оптимизированный код, понятный для третьих лиц. Тестируем все элементы и функционал сайта повторяя пользовательские сценарии."
    },
    {
        title: "Наполнение и релиз сайта в интернете",
        description: "Интегрируем товарные категории (1C, R-keeper, IIko, Excel) или наполняем сайт вручную. Подбираем лаконичный домен, размещаем на скоростном хостинге."
    },
    {
        title: "Дальнейшее развитие и продвижение сайта",
        description: "Ввод в эксплуатацию, подключение сервисов аналитики, определение путей продвижения: Контекстная реклама, СЕО-продвижение, таргетированная реклама. А также занимаемся поддержкой сайта."
    }
];

const WebsiteCreation = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Создание сайтов`}
                description={`Каждый наш сайт – это инструмент привлечения клиентов для бизнеса. Разработаем понятную структуру и визуал под вашу целевую аудиторию. Внимательно отнесемся ко всем пожеланиям и предложим наилучшие передовые решения в области веб-дизайна.`}
                background={`WebDeveloping.mp4`}
            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Как мы работаем`}
                    description={`От вашей идеи до пошагового плана реализации совместного и успешного проекта.`}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Веб-разработка"} onlyHomePage={false} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />



                <Order/>

            </div>

        </main>
    );
};

export default WebsiteCreation;