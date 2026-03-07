import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";

const caseHref = "/nordmen"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const technologiesList = [
    {
        logo: "Wordpress.png",
        name: "Wordpress",
    },
    {
        logo: "yclients.png",
        name: "Yclients",
    },
]

const Nordmen = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`Имиджевый сайт барбершопа NORDMEN`}
                    logo={"NordmenLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "NORDMEN — сеть барбершопов премиум-сегмента в Хабаровске, ориентированная на высокий уровень сервиса, атмосферу и удобство для клиентов.",
                        "Ранее команда работала по франшизе TOPGUN, но после выхода из франшизы у бренда отсутствовал собственный сайт, при том что потребность в нём была критичной: онлайн-запись, акции, имидж и контроль коммуникации с клиентами.",
                        "Задача: создать современный имиджевый сайт барбершопа с удобной онлайн-записью через Yclients, который будет соответствовать премиум-сегменту и станет полноценной цифровой точкой контакта с клиентами."
                    ]}
                    technologies={technologiesList}
                    blackBackground={true}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerVideo video={"NordmenVideo"} />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Сайт с нуля под новый бренд. Разработали сайт nordmen27.ru, исходя из нового фирменного стиля компании.",
                            "Контент в едином стиле. Организовали профессиональную фотосъёмку двух салонов: интерьеры, мастера за работой, атмосфера. Весь контент на сайте — живой, фирменный и визуально цельный.",
                            "Удобная структура сайта. Реализовали ключевые разделы: главная страница с видеоподложкой, услуги и прайс, галерея работ и фото каждого мастера, блог с акциями, контакты с картой, адресами и режимом работы.",
                            "Онлайн-запись без лишних шагов. Интегрировали онлайн-запись через сервис Yclients, чтобы клиент мог записаться к мастеру прямо с сайта — быстро и удобно.",
                            "Подключили сервис сбора отзывов со всех площадок. 1200+ отзывов – сильное социальное доказательство и увеличение конверсии сайта.",
                            "CMS WordPress. Сайт реализован на WordPress — для удобства управления, простоты обновлений и возможности масштабирования в будущем."
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Полноценный сайт премиум-бренда. NORDMEN получил собственный имиджевый сайт, соответствующий уровню сервиса и ожиданиям целевой аудитории.",
                            "Удобная онлайн-запись для клиентов. Онлайн-запись через Yclients стала естественной частью сайта и упростила путь клиента от просмотра до визита.",
                            "Единый визуальный образ бренда. Фотосъёмка и дизайн объединили сайт, салоны и мастеров в одну целостную визуальную систему.",
                            "Положительная обратная связь от заказчика. Оба соучредителя отметили профессиональный подход, скорость работы и качество результата."
                        ]}
                    />
                    <CustomerReview
                        name={"Игорь Власов"}
                        text={[
                            "Заказали ребятам сайт, долго выбирали компанию по разработке, но сделали свой выбор именно на Lv Group. Подход профессиональный, чувствуется опыт нажитый годами. Борис очень активный и нацеленный на результат. Итог нас полностью устраивает. Будем сотрудничать и дальше. Спасибо"
                        ]}
                        photo={"NordmenPhoto.jpg"}
                        rank={"Соучредитель"}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default Nordmen