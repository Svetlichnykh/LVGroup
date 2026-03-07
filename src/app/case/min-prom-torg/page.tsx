import React from 'react';
import Order from "@/components/order/Order";
import BeforeAfter from "@/components/for-cases/before-after/Before-after";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/min-prom-torg"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const firstImage = {
    imageUrl: '/MinPromTorgAfter.png',
    alt: 'Сайт после',
};

const secondImage = {
    imageUrl: '/MinPromTorgBefore.png',
    alt: 'Сайт до',
};

const Lamark = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`МинПромТорг: презентация для губернатора`}
                    logo={`MinPromTorgLogo.png`}
                    tags={tagsList}
                    descriptions={[
                        "Министерство промышленности и торговли Хабаровского края отвечает за формирование и реализацию государственной политики в сферах промышленности, торговли, общественного питания и потребительского рынка. В зоне ответственности — ключевые отрасли экономики региона: машиностроение, судо- и авиастроение, металлургия, высокие технологии, а также развитие торговой инфраструктуры.",
                        "Задача: В сжатые сроки подготовить презентацию для исполняющего обязанности министра промышленности и торговли Хабаровского края, предназначенную для доклада на высоком уровне, включая представление материалов губернатору края.",
                        "Вся презентация составила 34 страницы, публикуем первых 3."
                    ]}
                    whiteBackground={true}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <BeforeAfter firstImage={firstImage} secondImage={secondImage} delimiterColor={`black`}/>
                    <CustomerChain
                        align={"vertical"}
                        name={"Решение"}
                        chainList={[
                            "Полностью переработали структуру презентации. Ушли от перегруженных, слабо структурированных слайдов к логичной, последовательной подаче: от текущей ситуации → к ключевым показателям → реализуемым проектам → перспективам и точкам роста.",
                            "Упростили восприятие сложной информации. Большие массивы цифр, показателей и аналитики были переработаны в визуально понятные блоки: акценты на ключевых цифрах и читаемости с первого взгляда.",
                            "Привели дизайн к уровню официальных презентаций федерального масштаба. Выстроили строгий, современный визуальный стиль, соответствующий статусу Министерства и формату доклада для руководства региона.",
                            "Сфокусировали внимание на результатах и управленческих выводах. Каждый слайд стал не просто «информационным», а отвечающим на вопрос: что это даёт региону и какие управленческие решения за этим стоят.",
                            "Адаптировали презентацию под живое выступление. Материалы стали удобны для устного доклада: логичные акценты, отсутствие визуального шума и понятная навигация."
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Подготовлена презентация, полностью соответствующая уровню исполнительной власти и формату доклада для первых лиц региона.",
                            "Сложная аналитическая информация и отраслевые данные были переведены в понятный, структурированный и визуально сильный формат.",
                            "Презентация была использована при докладе губернатору Хабаровского края и получила высокую оценку с его стороны.",
                            "Заказчик отдельно отметил профессиональный подход, скорость работы и умение «говорить на языке управленческих решений», а не просто оформлять слайды."
                        ]}
                    />
                    <CustomerText
                        title={"Итог"}
                        defaultText={[
                            "Мы не просто «оформили презентацию», а помогли донести стратегически важную информацию на самом высоком уровне — чётко, убедительно и профессионально."
                        ]}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default Lamark