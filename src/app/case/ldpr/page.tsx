import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'

const caseHref = "/ldpr"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const LDPR = () => {
    return (
            <main className="w-full">
                <div className="flex flex-col">
                    <CustomerInfo
                        title={"Обзвон-информирование граждан для партии \"ЛДПР\""}
                        logo={"LDPR.jpg"}
                        tags={tagsList}
                        descriptions={[
                            "Политическая партия \"ЛДПР\" – Либерально-демократическая партия России. К нам обратилось Хабаровское региональное отделение партии",
                            "К нам клиент обратился со следующей задачей:",
                            "В кратчайшие сроки организовать удаленный обзвон базы потенциальных избирателей в размере 3-5 тысяч человек. От обзвонов \"роботом\" клиент отказался, т.к. было важно качественная проработка базы и \"живое\" общение."
                        ]}
                        technologies={[
                            {
                                logo: "GoogleDocs.png",
                                name: "GoogleDocs",
                            }
                        ]}
                    />
                    <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                        <CustomerText
                            title={"Подробнее о задаче"}
                            defaultText={[
                                "Кратчайшие сроки означали – 2 дня на обзвон и 2 дня для организации и брифинга сотрудников, которые должны были предоставляться с нашей стороны.",
                                "Сценарий разговора у заказчика был уже готов и включал всего 2 вопроса, со своей стороны мы собрали всю первичную информацию о кандидатах и партии, предвосхищая возможные вопросы потенциальных избирателей.",
                                "Для удобства взаимодействия с заказчиком и менеджерами колл-центра была создана отчетная таблица в GoogleDocs – клиент сразу мог отслеживать работу в реальном времени и при необходимости оперативно подключаться."
                            ]}
                        />
                        <CustomerPhoto
                            photo={"LDPRPicture.jpg"}
                            full={false}
                        />
                        <CustomerText
                            title={"Результаты"}
                            numberText={[
                                "Качественный обзвон получилось достичь за счет 2 компонентов - сотрудники были с большим опытом продаж и обзвонов, а также были погружены в специфику. Это позволило оставить максимально лояльное впечатление о заказчике – колл-центр мог ответить на вопросы о кандидатах партии, ее программе и целях, если вопросы были еще \"глубже\", то людей оперативно и корректно передавали заказчику.",
                                "Помимо переданных отчетов мы также предоставили заказчику несколько наших \"эталонных\" записей разговоров и свои коррективы скрипта для дальнейшего и еще более эффективного обзвона баз избирателей собственными силами партии.",
                                "Хотелось бы также отметить, что мы абсолютно нейтрально относимся к вопросам политики и работаем с любой партией, если конечно их действия не противоречат нашему законодательству :)",
                                "Полностью решили все задачи клиента, которые были поставлены на старте проекта."
                            ]}
                        />
                        <CustomerStats
                            statsList={[
                                {
                                    name: "Продолжительность",
                                    value: "2",
                                    description: "дня",
                                },
                                {
                                    name: "Обзвон вели",
                                    value: "4",
                                    description: "эксперта",
                                },
                                {
                                    name: "Обработали людей",
                                    value: "3105",
                                    description: "людей",
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

export default LDPR;