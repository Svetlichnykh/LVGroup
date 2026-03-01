import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";

const caseHref = "/ostro-sushi"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const technologiesList = [
    {
        logo: "Wordpress.png",
        name: "Wordpress",
    },
    {
        logo: "WooCommerce.png",
        name: "WooCommerce",
    },
    {
        logo: "robokassaLogo.png",
        name: "Robokassa",
    }
]

const OstroSushi = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`Сайт OSTRO SUSHI, который хочется показать каждому`}
                    logo={"ostroSushiLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Кафе OSTRO SUSHI — современное заведение японской кухни с суши, роллами, онигири и гунканами.",
                        "Нужно было создать сайт, который: выгодно и аппетитно позиционирует меню, цепляет внимание и вызывает желание заказать, выгодно выделяется среди конкурентов благодаря стильному и удобному дизайну, поддерживает фотографии высокого качества и удобную навигацию. Дополнительно нужно было настроить онлайн‑заказ, оплату и организовать фотосъёмку блюд."
                    ]}
                    technologies={technologiesList}
                    whiteBackground={true}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerVideo video={"OstroSushiWebsiteVideo"} />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Фуд-съёмка. Подобрали фуд-фотографа, организовали полноценную съёмочную фотосессию: красиво, аппетитно, проконтролировали процесс и качество каждого кадра.",
                            "Фирменный стиль. Разработали логотип, цветовую палитру и элементы дизайна с японскими акцентами — чтобы сайт сразу выглядел как бренд.",
                            "Дизайн в японском стиле. Создали визуальную концепцию и интерфейс, в которых гармонично сочетаются минимализм, иероглифы, яркие акценты и простая навигация.",
                            "Главная страница с меню. Разместили меню прямо на главной странице, чтобы пользователи могли сразу выбрать блюда и добавить их в корзину — без лишних кликов.",
                            "Онлайн-оплата и скидки. Интегрировали оплату онлайн и подключили партнёрскую скидку клиентам от LV Group, чтобы сэкономить на комиссии сервиса"
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Профессиональные фотографии блюд высокого разрешения создают «эффект вкуса на экране».",
                            "Удобная навигация — клиенты могут быстро найти нужное блюдо и оплатить его прямо на сайте. Весь процесс — от выбора до оплаты — занимает не больше 3–4 кликов.",
                            "Вся подача — от визуала до функционала — выглядит как целостный бренд, а не «просто сайт».",
                            "Интеграция оплаты и Telegram-модуль позволяют владельцу автоматизировать цепочку «Заказ → Уведомление → Выполнение».",
                            "Мобильный и адаптивный сайт — идеальный для взглядов на ПК и «тапов» на телефоне.",
                            "Соответствие требованиям 152-ФЗ — подключили нужные уведомления и оформили политику обработки персональных данных.",
                            "СЕО-оптимизация — прописаны метатеги, описания и ключевые слова, отражающие регион и кухню — для органического поиска.",
                        ]}
                    />
                    <CustomerReview
                        name={"Софья Остроумова"}
                        text={[
                            "Хочется выразить огромную благодарность команде профессионалов, создавшей наш сайт! Работа выполнена на высшем уровне — профессионально, качественно и оперативно. Особое внимание хочется уделить процессу разработки: каждый этап сопровождался подробным пояснением и согласованием всех деталей, что позволило избежать недопонимания и достичь наилучшего результата.",
                            "Отдельная признательность — Борису и Софье. Их компетентность, внимательность и готовность прийти на помощь сделали сотрудничество комфортным и приятным. Мы получили именно тот продукт, который ожидали, и даже больше!",
                            "Рекомендую LV Group всем, кому важен профессиональный подход, качественный результат и внимательное отношение к каждому клиенту.",
                            "Спасибо большое за вашу работу!"
                        ]}
                        photo={"OstroSushiPhoto.png"}
                        rank={"Владелец бизнеса"}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default OstroSushi