import React from 'react';
import Order from "@/components/order/Order";
import Comment from "@/widgets/comment/Comment";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import CustomerComments from "@/components/for-cases/customer-comments/Customer-comments";
import CustomerHistories from "@/components/for-cases/customer-histories/Customer-histories";
import casesList from '../../../app/cases.json'

const caseHref = "/brat-buryat"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const BratBuryat = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"СММ для кафе \"Брат Бурят\": с 200 до 12 000 подписчиков"}
                    logo={"BratBuryatLogo.jpg"}
                    tags={tagsList}
                    descriptions={[
                        "Кафе \"Брат Бурят\" – это кафе бурятской кухни в современном исполнении. Здесь можно встретить как традиционные бурятские блюда, так и давно полюбившуюся классику, вроде салата цезарь или греческого",
                        "Клиент только открылся, столкнулся с некачественным исполнителем продвижения в социальных сетях, который за 2 месяца выложил 2 поста. Перед нами стояла задача рассказать о бурятской кухне, культуре, познакомить многих потенциальных гостей с ней, так как большинство никогда о ней не слышали. Для тех, кто знаком с этой кухней – донести, что в кафе вся рецептура соответствует традициям, что можно поесть здесь прямо как на родине."
                    ]}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={"BratBuryatPicture1.jpg"}
                    />
                    <CustomerText
                        title={"Стратегия"}
                        defaultText={[
                            "К продвижению в социальных сетях наша команда всегда подходит комплексно, поэтому помимо регулярной выкладки постов и сторис были задействованы таргетированная реклама, работа с лидерами мнений, участие в мероприятиях города, регулярная съемка reels и реклама в популярных пабликах.",
                            "Мы с клиентом решили вести статистику каждого канала – усиливать самые эффективные инструменты - это позволит качественно распределять рекламные бюджеты и получать отличный результат."
                        ]}
                    />
                    <CustomerVideo
                        video={"Brat-buryat-mockup"}
                    />
                    <CustomerText
                        title={"Контент"}
                        defaultText={[
                            "Ключевые тематики контента:",
                            "-Блюда бурятской кухни в современном исполнении.",
                            "-Традиции народа Бурятии.",
                            "-Элементы интерьера кафе и как в них отражена культура Бурятии.",
                            "-Внутренняя кухня кафе, смешные ситуации, корпоративная культура.",
                        ]}
                    />
                    <CustomerHistories
                        photoList={[
                            ["1-1.JPG", "1-2.JPG", "1-3.JPG"],
                            ["2-1.JPG", "2-2.JPG", "2-3.JPG"],
                            ["3-1.JPG", "3-2.JPG", "3-3.JPG"]
                        ]}
                    />
                    <CustomerText
                        title={"Instagram без \"таргета\""}
                        defaultText={[
                            "Таргетированная реклама давала очень хорошие результаты, когда ее отключили мы сделали максимальный упор на регулярную съемку reels – 5 в месяц, также дополнительно мы выкладывали каждый ролик на Youtube и Tik-Tok.",
                            "В итоге это дало отличные результаты – с постоянной периодичностью ролики набирали большие охваты, самый лучший результат – это 915 000 просмотров на одном ролике!",
                            "Помимо этого, мы проводили коллаборации с партнерами, в рамках конкурсов, видеороликов и совместных предложениях для гостей."
                        ]}
                    />
                    <CustomerText
                        title={"Фирменный стиль"}
                        defaultText={[
                            "Работая с клиентом, мы столкнулись с тем, что все рекламные материалы – будь то вывеска, меню или тейбл-тенты выполнены в разном стиле без единой общей концепции, поэтому был также разработан фирменный стиль и переработан существующий логотип в угоду современным тенденциям и интерьеру нового места."
                        ]}
                        bonusName={"Смотрите услугу"}
                        bonusTexts={[
                            {
                                text: "Фирменный стиль кафе \"Брат Бурят\"",
                                link: "#"
                            },
                        ]}
                    />
                    <CustomerVideo
                        video={"BratBuryatMenu"}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "С 2019 года мы работаем с кафе «Брат Бурят» - за это время аккаунт вырос до 12000 подписчиков.",
                            "Повысилась узнаваемость бренда и главного блюда бурятской кухни – бууз. Количество отзывов о кафе на площадке 2ГИС – более 1200.",
                            "Помимо СММ направления был создан сайт и запущена контекстная реклама, с результатом более 250 заказов в месяц."
                        ]}
                    />
                    <CustomerStats
                        statsList={[
                            {
                                name: "Подписчиков ДО",
                                value: "200",
                                description: ""
                            }, {
                            name: "Подписчиков ПОСЛЕ",
                                value: "12",
                                description: "тыс."
                            },
                            {
                                name: "Охваты Instagram в месяц",
                                value: "264",
                                description: "тыс."
                            },
                        ]}
                    />
                    <CustomerText
                        title={"Общие выводы"}
                        numberText={[
                            "Комплексный подход к продвижению клиента, включающий СММ, контекстную рекламу, маркетинговое сопровождение привели к качественным результатам, несмотря на отключение таргетированной рекламы в Instagram.",
                            "Разработанный фирменный стиль значительно упростил работу клиента – любые рекламные материалы стали быстрее разрабатываться, соответствовать общей концепции и стоить дешевле, т.к. не исполнителям не приходится ничего выдумывать \"с нуля\"."
                        ]}
                    />
                    <CustomerComments>
                        <Comment image={`vlada.antonovaa.jpg`}
                                 Xcoord={`22%`}
                                 Ycoord={`10%`}
                                 name={`vlada.antonovaa`}
                                 text={`Да мы все такие повара 😂 ахахахх 😂`}
                                 liked={false}
                                 layer={2}
                                 direction={`diagonal`}
                        />
                        <Comment image={`valensia20.06.84.jpg`}
                                 Xcoord={`50%`}
                                 Ycoord={`18%`}
                                 name={`valensia20.06.84`}
                                 text={`Аж слюньки потекли 😂`}
                                 liked={true} layer={2}
                                 direction={`right`}
                        />
                        <Comment image={`o_l_ushka.jpg`}
                                 Xcoord={`25%`}
                                 Ycoord={`63%`}
                                 name={`o_l_ushka`}
                                 text={`Почему бузы такие вкусные? Потому что они сделаны с любовью и МЯСОМ 😍`}
                                 liked={true}
                                 layer={2}
                                 direction={`right`}
                        />
                        <Comment image={`kateridskaya.jpg`}
                                 Xcoord={`60%`}
                                 Ycoord={`73%`}
                                 name={`kateridskaya`}
                                 text={`Выглядит сильно аппетитно 😍🥹`}
                                 liked={false}
                                 layer={2}
                                 direction={`up`}
                        />
                        <Comment image={`elena_plushka_khv.jpg`}
                                 Xcoord={`64%`}
                                 Ycoord={`40%`}
                                 name={`elena_plushka_khv`}
                                 text={`Я тоже очень хочу буузотрянку 😍`}
                                 liked={true}
                                 layer={4}
                                 direction={`diagonal`}
                        />
                        <Comment image={`alexmerkuloff.jpg`}
                                 Xcoord={`23%`}
                                 Ycoord={`40%`}
                                 name={`alexmerkuloff`}
                                 text={`Приеду, все бузы у вас сожру`}
                                 liked={false}
                                 layer={2}
                                 direction={`down`}
                        />
                    </CustomerComments>
                    <FooterTags
                        tags={tagsList}
                    />
                </div>
                <Order/>
            </div>
        </main>
    );
};

export default BratBuryat;