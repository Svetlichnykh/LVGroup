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

const caseHref = "/lamark-context"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const LamarkContext = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={`Ламарк-Центр: 164 лида по 269₽`}
                    logo={`LamarkContextLogo.png`}
                    tags={tagsList}
                    descriptions={[
                        "Ламарк-Центр — автосервис с историей, работающий в Хабаровске более 20 лет. Компания оказывает широкий спектр услуг по ремонту и обслуживанию автомобилей и ориентируется на стабильный поток клиентов, а не разовые заезды.",
                        "С контекстной рекламой клиент пришёл к нам ещё в 2019 году — после работы с подрядчиком, который брал дополнительную плату за каждый ключевой запрос. При этом отчёты сводились к стандартной статистике Яндекса: «люди дольше сидят на сайте», «растёт вовлечённость» — без реальных заявок и звонков.",
                        "Задача - получать реальные обращения и звонки из контекстной рекламы, а не «красивые отчёты», и выстроить рекламу, которая масштабируется вместе с автосервисом."
                    ]}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={`LamarkContextPicture1.jpg`}
                    />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Полная переработка контекстной рекламы. Мы не работаем с подходом “платим за ключи”, мы делаем все необходимое для получение лучшего результата. Не 150 общих запросов, а сотни и тысячи детализированных ключей, отражающих реальные проблемы клиентов. Примеры логики запросов: конкретные виды ремонта, марки и модели автомобилей, типовые поломки и симптомы, сезонные услуги.",
                            "Масштабная семантика. За годы сотрудничества была собрана большая, живая семантика автосервиса — ориентировочно 3 000 ключевых запросов, которые дают: низкую цену лида, высокую релевантность, стабильный поток звонков.",
                            "Отдельные номера под контекст. Для точного анализа эффективности: выделили 2 отдельных телефонных номера именно под контекстную рекламу, исключили смешение источников, получили прозрачную аналитику по звонкам.",
                            "Усиление сайта под рекламу. Так как сайт мы делали сами, доработки внедрялись быстро и системно: подключили обратный звонок, внедрили квиз для сбора заявок, использовали calltracking для отслеживания всех обращений.",
                            "Долгосрочная оптимизация. Мы не «настроили и ушли». Реклама постоянно дорабатывается: добавляются новые запросы, отключаются неэффективные связки, корректируются объявления и ставки, учитывается сезонность услуг."
                        ]}
                    />
                    <CustomerPhoto
                        full={true}
                        photo={`LamarkContextPicture2.jpg`}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Реальные заявки и звонки, а не «время на сайте».",
                            "Цена лида 269 ₽ — отличный показатель для автосервиса. В Хабаровске (кроме не интересных нам запросов «замены масла») Ламарк-Центр занимает исключительно первые позиции и с ним очень тяжело конкурировать.",
                            "Высокий CTR за счёт точных и детализированных запросов.",
                            "Полная прозрачность: видно, откуда приходит каждый клиент.",
                            "Стабильный результат на протяжении многих лет сотрудничества."
                        ]}
                    />
                    <CustomerChain
                        align={`horizontal`}
                        chainList={[
                            "12 121 показов",
                            "763 кликов",
                            "43 094 руб. расход",
                            "56.48 руб. цена клика",
                            "269 руб. цена цели"
                        ]}
                    />
                    <CustomerStats statsList={[
                        {
                            name: "CTR",
                            value: "5.82",
                            description: "%",
                        },
                        {
                            name: "Всего конверсий",
                            value: "164",
                            description: "",
                        },
                        {
                            name: "Цена лида",
                            value: "269",
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

export default LamarkContext;