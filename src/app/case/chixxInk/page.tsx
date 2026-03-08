import React from 'react';
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import Order from "@/components/order/Order";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import casesList from '../../../app/cases.json'

const caseHref = "/chixxInk"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const ChixxInk = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"Контекстная и таргетированная реклама для ChixxInk"}
                    logo={"ChixxInkLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "ChixxInk.ru – это интернет-магазин, который торгует оборудованием для перманентного макияжа по всей России. От машинок до пигментов и картриджей.",
                        "К нам клиент обратился с задачей – обеспечить стабильный поток клиентов с помощью контекстной рекламы Google, Яндекс, а также таргетированной рекламы в Instagram (начинали работу еще во времена доступности данных сервисов)."
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerVideo
                        video={"ChixxInk-1"}
                    />
                    <CustomerText
                        title={"Подготовка к рекламной компании"}
                        defaultText={[
                            "На старте работ мы проанализировали сайт заказчика, переработали весь контент – оформили баннера на главной странице сайта с акциями и отсняли недостающий контент. Помимо этого, сделали два видеоролика для запуска новой марки машинок для перманентного макияжа.",
                            "Подключили сервисы «квиз», а также обратный звонок для увеличения конверсии входящего клиентского потока на сайте.",
                            "Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 300-500 рублей."
                        ]}
                    />
                    <CustomerVideo
                        video={"ChixxInk-2"}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Подробно прописанные запросы для каждой группы товаров дали отличный результат буквально в первые месяцы работы. Яндекс показал себя лучше всего с 77 заявками за месяц, при цене заявки в 180,85 руб.!",
                            "До этого ролики клиента «не заходили» в таргете – с новыми роликами и грамотной настройкой рекламного кабинета мы набрали большое количество просмотров, активных подписчиков и заявок прямо с Instagram, а с установленным Pixel в дальнейшем начали крутиться на «похожую» аудиторию, что сделало рекламу максимально эффективной."
                        ]}
                    />
                    <div className={`divider h-[50px]`}>

                    </div>
                    <CustomerChain
                        align={"horizontal"}
                        chainList={[
                            "100989 показов",
                            "3309 кликов",
                            "3% CTR",
                            "11.74 руб. цена клика",
                            "315.70 руб. цена цели",
                            [
                                "77 заявок Яндекс",
                                "27 заявок Google",
                                "19 заявок Instagram"
                            ]
                        ]}
                    />
                    <CustomerStats statsList={[
                        {
                            name: "Общий бюджет",
                            value: "39",
                            description: "тыс.",
                        },
                        {
                            name: "Всего конверсий",
                            value: "123",
                            description: "",
                        },
                        {
                            name: "Цена цели:",
                            value: "315.7",
                            description: "руб.",
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

export default ChixxInk;