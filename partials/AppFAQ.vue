<template>
  <div class="FAQ" id="faq">
    <div class="container">
      <shared-animation>
        <div class="FAQ__inner">
          <div class="FAQ__text">
            <SharedTitle>FAQ</SharedTitle>
            <SharedText>
              Ответы на часто задаваемые вопросы о нашей платформе. <br> Узнайте, как начать
              размещать рекламу в телеграмм каналах и какие возможности предоставляет наш
              сервис.
            </SharedText>
          </div>
          <SharedAccordion>
            <template #title>
              <div>Что означает уведомительный и автоматический порядок?</div>
            </template>
            <template #text>
              <div class="accordion__text">
                При регистрации пользователь выбирает <span class="weight">уведомительный</span> или <span class=weight>автоматический порядок</span>.
              </div>
              <div class="accordion__text">
                Если Вы выбрали <span class="weight">уведомительный порядок</span>, то при каждой заявке на&nbsp;рекламную интеграцию ТГ-бот платформы будет отправлять сообщение с&nbsp;информацией
                о&nbsp;потенциальной интеграции и Вам предстоит подтвердить или отклонить сделку исходя из&nbsp;критериев контента. В&nbsp;случае положительного ответа ТГ-бот опубликует рекламу.
              </div>
              <div class="accordion__text">
                Если Вы выбрали <span class="weight">автоматический порядок</span>, то заявки на рекламные интеграции, которую будут поступать с нашей платформы будут модерироваться нашей командой исходя 
                из&nbsp;ваших критериев, которые вы прописали при размещении ТГ-канала на&nbsp;платформу. В&nbsp;этом <span class="weight">случае Вы должны проставить даты и всегда оставлять указанный/-е временной/-е 
                слот/-ы и интервал для рекламных интеграций, поступающих с&nbsp;ON-Developer в календаре рекламных интеграций Вашего канала</span>. <br>
                ТГ-бот опубликует, удалит пост, а средства автоматически поступят на&nbsp;карту, которую вы привязали в личном кабинете.
              </div>
              <div class="accrodion__text">
                <span class="weight">Обратите внимание, что вы не сможете разместить ТГ-канал на нашу платформу, пока вы не привязали карту</span>. Мы заботимся о&nbsp;своей репутации и обеспечиваем гарантию, 
                что средства от&nbsp;рекламодателя поступят паблишеру в&nbsp;случае положительной сделки. Также Вы не сможете разместить ТГ-канал на&nbsp;платформе, если его контент не соответствует 
                действующему российскому законодательству или проблемы с законом у лица, которое его&nbsp;регистрирует.
              </div>
            </template>
          </SharedAccordion>
          <SharedAccordion>
            <template #title>
              <div>
                Что означает уникальный ID при&nbsp;регистрации и где его получить?
              </div>
            </template>
            <template #text>
              <div>
                Мы заботимся о безопасности Ваших данных и упорядоченной системе работы платформы с&nbsp;пользователями. 
                Уникальный идентификационный номер можно получить в ТГ-боте, ссылка на&nbsp;него размещена в&nbsp;значке уведомления «?» соответствующей строки в&nbsp;блоке регистрации. 
                Достаточно нажать «start», получить токен, скопировать его и добавить в&nbsp;строку.
              </div>
            </template>
          </SharedAccordion>
          <SharedAccordion>
            <template #title>
              <div>
                Какой порядок оплаты и выплат?
              </div>
            </template>
            <template #text>
              <div> 
                <span class="weight">Средства поступят паблишеру <span class="underline">в течение 3 рабочих дней</span> и только при&nbsp;выполнении всех условий рекламной интеграции c&nbsp;учетом сервисного сбора в&nbsp;размере 2%:</span> 
                рекламный пост опубликован вовремя и соблюден интервал, например, 1/24 (1 час в&nbsp;топе, 24 часа в&nbsp;ленте). До этого момента они удерживаются на счету платформы и в случае несостоявшейся сделки или 
                нарушения условий возвращаются рекламодателю. 
              </div>
            </template>
          </SharedAccordion>
          <SharedAccordion>
            <template #title>
              <div>
                Как удалить канал с платформы?
              </div>
            </template>
            <template #text>
              <div>
                Удалите наш ТГ-бот из&nbsp;админов канала и карточка канала автоматически исчезнет из&nbsp;рекламного 
                пула платформы. Однако канал может быть удален и&nbsp;администрацией платформы. 
                Подробности в следующем пункте.  
              </div>
            </template>
          </SharedAccordion>
          <SharedAccordion>
            <template #title>
              <div>
                Какие недостатки уведомительного порядка? 
              </div>
            </template>
            <template #text>
              <div>
                <div class="accordion__text">
                  Мы все занятые люди и уверены Вы не исключение. Мы также знакомы с&nbsp;гиперлентой в ТГ-канале, где можно пропустить и 
                  несколько дней не&nbsp;отвечать сообщения самых близких. Но&nbsp;мы занимаемся с Вами бизнесом и здесь время - деньги. Вам 
                  предоставляется 6 часов на&nbsp;подтверждение/отклонение сделки. <span class="weight">Если Вы более трех раз проигнорировали верификацию разных сделок, то, 
                  к&nbsp;сожалению, мы будем вынуждены удалить Ваш канал с&nbsp;платформы. ТГ-канал – актив и он должен быть реальным</span>.
                </div>   
                <span class="weight">Также ТГ-канал может быть удален в случае нарушения российского законодательства.</span>
              </div>
            </template>
          </SharedAccordion>
          <SharedAccordion>
            <template #title>
              <div>
                Что означает автоматическая маркировка рекламы? 
              </div>
            </template>
            <template #text>
              <div>
                Согласно новым поправкам в&nbsp;законодательство о рекламе каждая рекламная интеграция должна быть промаркирована,
                помечена erid и предоставлены статистические данные по&nbsp;результатам публикации. Именно за этим мы просим у&nbsp;Вас 
                ИНН при&nbsp;регистрации. Мы все сделаем за Вас. 
              </div>
            </template>
          </SharedAccordion>
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  @use 'assets/styles/mixins';
  .FAQ {
    @include mixins.indent;
    margin-bottom: var(--indent-5xl);

    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: var(--indent-4xl);

      @include media.media-breakpoint-down(sm) {
        text-align: center;
        padding: 0 var(--indent-l);
      }
    }
  }
  .weight {
    font-weight: var(--font-weight-bold);
  }
  .underline {
    text-decoration: underline;
    font-style: italic;
  }
  .accordion__text {
    margin-bottom: var(--indent-l);
  }
</style>