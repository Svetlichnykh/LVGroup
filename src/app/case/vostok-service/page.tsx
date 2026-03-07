import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import casesList from '../../../app/cases.json'
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";

const caseHref = "/vostok-service"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const VostokService = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"Восток-Сервис: 184 конверсии по 179₽"}
                    logo={`VostokServiceLogo.png`}
                    tags={tagsList}
                    descriptions={[
                        "Восток-Сервис — федеральная компания, специализирующаяся на продаже спецодежды, обуви и средств индивидуальной защиты для бизнеса и розницы.",
                        "К нам клиент обратился после смены нескольких подрядчиков по контекстной рекламе. Основные проблемы — некачественные креативы, ошибки в настройке мастер-конверсий, слабый контроль рекламных кампаний и отсутствие фокуса на реально продающих товарах."
                    ]}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={`VostokServicePicture1.jpg`}
                    />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Фокус на ключевых товарах. Мы не стали рекламировать весь ассортимент. Совместно с заказчиком выделили приоритетные товарные категории, которые дают наибольший оборот и стабильный спрос.",
                            "Корректная настройка конверсий. Полностью переработали логику целей: клики по телефону, отправка форм, клики по email, покупки с сайта. Без «мусорных» и промежуточных действий, которые искажают аналитику.",
                            "Контроль визуала и креативов. Исключили появление в рекламе сторонних брендов и конкурентов. Использовали только релевантные изображения товаров с сайта клиента, что особенно важно для крупного бренда.",
                            "Глубокая работа с семантикой. Постоянно расширяли и оптимизировали запросы: усиливали самые конверсионные направления, отключали неэффективные группы, адаптировали рекламу под сезонность товаров.",
                            "Работа в связке с заказчиком. Генеральный директор компании хорошо разбирается в Яндекс.Директе, поэтому работа шла строго по ТЗ, с постоянными правками и аналитикой. Это позволило быстро выходить на результат без «догадок» и тестов вслепую."
                        ]}
                    />
                    <CustomerPhoto
                        full={true}
                        photo={`VostokServicePicture2.jpg`}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Получен стабильный и окупаемый поток заявок",
                            "Очень низкая цена лида для ниши спецодежды",
                            "Реклама полностью под контролем — без «левых» товаров и брендов",
                            "Четкая аналитика, понятная как маркетологу, так и руководству"
                        ]}
                    />
                    <CustomerChain
                        align={`horizontal`}
                        chainList={[
                            "59 351 показов",
                            "2 202 кликов",
                            "32 992 руб. расход",
                            "14.98 руб. цена клика,",
                            "179.3 руб. цена цели",
                        ]}
                    />
                    <CustomerStats statsList={[
                            {
                                name: "CTR",
                                value: "3.71",
                                description: "%",
                            },
                            {
                                name: "Всего конверсий",
                                value: "184",
                                description: "",
                            },
                            {
                                name: "Цена лида",
                                value: "179",
                                description: "руб",
                            }
                            ]}
                    />
                    <FooterTags
                        tags={tagsList}
                    />
                    </div>
                <Order/>
            </div>
        </main>
    );
};

export default VostokService;