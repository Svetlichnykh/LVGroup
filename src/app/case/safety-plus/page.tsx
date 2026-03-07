import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";

const caseHref = "/safety-plus"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const technologiesList = [
    {
        logo: "Wordpress.png",
        name: "Wordpress",
    }
]

const SafetyPlus = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`БЕЗОПАСНОСТЬ+ : одностраничный сайт под контекстную рекламу`}
                    logo={"SafetyPlusLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Компания БЕЗОПАСНОСТЬ+ — эксперт в области промышленной, транспортной и антитеррористической безопасности. Основное направление компании — обучение, консалтинг и сопровождение организаций по требованиям законодательства РФ.",
                        "У компании уже был основной сайт на Bitrix — transcom-khv.ru, ориентированный на обучение и широкий перечень услуг.",
                        "Однако для продвижения узкой и востребованной услуги «паспорт безопасности (антитеррор)» — такой сайт было сложно, дорого и долго дорабатывать."
                    ]}
                    technologies={technologiesList}
                    whiteBackground={true}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerVideo video={"SafetyPlusVideo"} />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Отдельный сайт под одну задачу. Разработали лендинг tc27.ru, полностью сфокусированный на услуге паспортов безопасности. Никаких лишних разделов, обучения и второстепенных услуг — только то, за чем приходит клиент с рекламы.",
                            "Структура под конверсию. Продумали логику страницы: проблема → требования законодательства → решение → этапы работы → доверие → форма заявки.",
                            "Современный и строгий визуал. Сделали сдержанный дизайн, соответствующий сфере промышленной и антитеррористической безопасности: аккуратно, официально, без перегруза и «кричащих» элементов.",
                            "CMS WordPress. Использовали WordPress, чтобы клиент мог легко вносить правки, сайт быстро масштабировался в будущем, не было зависимости от сложной и дорогой разработки.",
                            "Подготовка под контекстную рекламу. Чёткие офферы, понятные заголовки, простые формы, высокая скорость загрузки."
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Быстрый запуск рекламы. Отдельный сайт позволил запустить контекстную рекламу без ожидания доработок основного сайта на Bitrix.",
                            "Рост конверсии. За счёт узкой специализации страницы и понятной структуры сайт показывает хорошие показатели конверсии с контекстной рекламы.",
                            "Экономия времени и бюджета. Бюджетный одностраничник оказался эффективнее, чем сложная переработка большого корпоративного сайта.",
                            "Современный внешний вид. Даже компактный лендинг может выглядеть профессионально, современно и вызывать доверие у B2B/B2G-аудитории.",
                            "Удобство для клиента. WordPress дал клиенту гибкость — сайт легко поддерживать, обновлять и развивать без привлечения разработчиков."
                        ]}
                    />
                    <CustomerText
                        title={"Вывод"}
                        defaultText={[
                            "Кейс компании БЕЗОПАСНОСТЬ+ наглядный пример того, что не всегда нужен большой и сложный сайт. Для контекстной рекламы такой подход часто даёт быстрый и измеримый результат — без лишних затрат и долгих согласований."
                        ]}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default SafetyPlus