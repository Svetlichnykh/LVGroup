import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/grin-qzin"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const GrinQzin = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={"Корм Green Qzin: Холодный обзвон - 52 клиента за 1 неделю"}
                    logo={"GreenQzinLogo.jpg"}
                    tags={tagsList}
                    descriptions={[
                        "Green Qzin — производитель полезных и натуральных лакомств для собак и кошек. Продукция бренда представлена в магазинах по всей России, компания активно расширяет сеть партнёров в регионах.",
                        "К нам клиент обратился со следующей задачей:",
                        "Для масштабирования продаж клиенту потребовалось провести холодный обзвон магазинов в 11 регионах Дальнего Востока и Восточной Сибири.",
                        "Цели обзвона:",
                        "-Выйти на лиц, принимающих решения;",
                        "-Актуализировать статус торговых точек (работают / не работают);",
                        "-Передать коммерческое предложение потенциальным партнёрам.",
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerChain
                        name={"Решение"}
                        align={"vertical"}
                        chainList={[
                            "Провели ревизию базы клиента - Удалённый менеджер клиента сообщал, что большинство магазинов «закрылись». Мы перепроверили базу вручную и выявили десятки активных торговых точек, готовых к сотрудничеству прямо сейчас.",
                            "Подготовили список клиентов по регионам - Охватили Владивосток, Благовещенск, Читу, Магадан, Якутск, Камчатку, Южно-Сахалинск, Иркутск, Биробиджан и другие города.",
                            "Настроили процесс и контроль - Все итоги звонков фиксировались в онлайн-таблице с пометками, статусами, комментариями и контактами. Клиент мог следить за прогрессом в режиме реального времени.",
                            "Построили качественный диалог с каждым клиентом - Скрипт был живым, с фокусом на выявление интереса. Задача — не зачитывать текст, а услышать собеседника и грамотно презентовать ценности бренда."
                        ]}
                    />цццццццццц
                    <CustomerPhoto
                        photo={"GreenQzinPicture.jpg"}
                        full={false}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Провели обзвон по 11 регионам России. ",
                            "52 заинтересованных клиента, переданных в работу: 20 Владивосток, 7 Благовещенск и Амурская область, 2 Чита, 3 Магадан, 4 Камчатка, 1 Биробиджан, 15 Южно-Сахалинск.",
                            "Разоблачили миф о “закрытых магазинах”. Удалённый менеджер ошибался — мы нашли живых, активных партнёров, которые давно ждали предложения, но были в базе клиента со статусом «магазин закрыт».",
                            "Передали дополнительно более 50 коммерческих предложений напрямую ЛПРам и передали для дальнейшей проработки заказчику.",
                            "Полная отчётность — в Google-таблице, с комментариями, статусами и дедлайнами."
                        ]}
                    />
                    <CustomerStats
                        statsList={[
                            {
                                name: "Продолжительность",
                                value: "5",
                                description: "дней",
                            },
                            {
                                name: "Обработано клиентов",
                                value: "132",
                            },
                            {
                                name: "Передано",
                                value: "52",
                                description: "лида",
                            }
                        ]}
                    />
                    <CustomerText title={"Вывод"} defaultText={[
                        "Системный прозвон от LV GROUP — это не просто «обзвонить список», а выстроить живое общение с потенциальными клиентами. Мы не только нашли 52 заинтересованных клиента, но и помогли Green Qzin восстановить контроль над региональной воронкой продаж.",
                        "Результат — новые партнёры, живой интерес и реальная картина на местах — всего за 1 неделю работы.",
                        ""
                    ]} />
                    <FooterTags
                        tags={tagsList}
                    />
                </div>
                <Order/>
            </div>
        </main>
    );
};

export default GrinQzin;