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

const caseHref = "/life-clinic"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const LifeClinic = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={`Лайф Клиник: Лид в косметологии за 520₽`}
                    logo={`LifeClinicLogo.svg`}
                    tags={tagsList}
                    descriptions={[
                        "Лайф Клиник — современная косметологическая клиника в Хабаровске, оказывающая услуги диагностики и лечения по различным направлениям. Клиника работает в высоко конкурентной медицинской нише, где стоимость лида и качество заявок напрямую влияют на рентабельность рекламы.",
                        "К нам клиент пришёл по рекомендации разработчиков сайта, как к команде, способной выстроить контекстную рекламу с реальными результатами, а не «красивыми отчётами».",
                        "Задача - с нуля запустить контекстную рекламу и обеспечить стабильный поток качественных заявок с понятной аналитикой и прогнозируемой окупаемостью."
                    ]}
                    whiteBackground={true}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={`LifeClinicPicture1.jpg`}
                    />
                    <CustomerText
                        title={`Подготовка к рекламной компании`}
                        defaultText={[
                            "В отличие от других кейсов, у Лайф Клиник не было негативного опыта с предыдущими подрядчиками — мы выстраивали рекламу сразу правильно, без «лечения ошибок»."
                        ]}
                        dottedText={[
                            "Проанализировали сайт клиники и пользовательские сценарии.",
                            "Совместно с заказчиком проработали приоритетные направления услуг.",
                            "Настроили корректные цели и аналитику — только реальные действия: заявки, звонки, колбэк и коллтрекинг.",
                            "Подготовили рекламную структуру под высоко конкурентную медицинскую нишу.",
                        ]}
                        lastText={[
                            "Наша цель — не просто трафик, а стабильные заявки от реальных пациентов по разумной стоимости."
                        ]}
                    />
                    <CustomerPhoto
                        full={true}
                        photo={`LifeClinicPicture2.jpg`}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Стабильные заявки из контекстной рекламы. Средняя стоимость конверсии — около 520 рублей (крайне низкий показатель для данной тематики в Хабаровске).",
                            "Высокая доля звонков и целевых обращений. Реклама показывает устойчивую окупаемость даже в конкурентной нише.",
                            "Клиент работает с нами с октября 2024 года, реклама масштабируется и остаётся рентабельной."
                        ]}
                    />
                    <CustomerChain
                        align={`horizontal`}
                        chainList={[
                            "151 516 показов",
                            "3 241 кликов",
                            "30 556 руб. расход",
                            "9.43 руб. цена клика",
                            "517.9 руб. цена цели"
                        ]}
                    />
                    <CustomerStats statsList={[
                            {
                                name: "CTR",
                                value: "2.14",
                                description: "%",
                            },
                            {
                                name: "Всего конверсий",
                                value: "59",
                                description: "",
                            },
                            {
                                name: "Цена лида",
                                value: "518",
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

export default LifeClinic;