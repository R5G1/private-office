import styles from '../style/HandleRowClick.module.scss';

function HandleRowClick(params) {
  const array = [
    {
      userId: 4.29329113838709,
      IDLeads: '2f3a4b5c6d7e8f9a0b1c2d3e4',
      dateRegistration: '06.08.2023',
      updateDate: '26.08.2023',
      firstName: 'Екатерина',
      lastname: 'Макаров',
      phoneNumber: '79767839585',
      town: '-',
      status: 'Активный 5',
      reward: '-',
      reasonNotLeading: '-',
      user: 'FVfQkqBcni@example.com',
      vacancy: 'Курьер Лавка',
      challengeStatus: '-',
      UTMcontent: 'blank',
      UTMsource: '-',
      tariff: 'junior',
      visitDatetime: '20.08.2023',
    },
  ];
  if (params) {
    return (
      <div className={styles.HandleRowClickConteiner}>
        <h4>
          {params.firstName} {params.lastname}
        </h4>
        <h4>{params.vacancy}</h4>
        <div className={styles.HandleRowClickContent}>
          <p>ID лида</p>
          <p>{params.IDLeads}</p>
        </div>
        <div className={styles.HandleRowClickContent}>
          <p>Номер телефона</p>
          <p>{params.phoneNumber}</p>
        </div>
        <h4>Основная информация</h4>
        <div className={styles.HandleRowClickContent}>
          <p>Город</p>
          <p>{params.town}</p>
        </div>
        <div className={styles.HandleRowClickContent}>
          <p>Дата регистрации</p>
          <p>{params.dateRegistration}</p>
        </div>
        <div className={styles.HandleRowClickContent}>
          <p>Дата обновления</p>
          <p>{params.updateDate}</p>
        </div>
        <div className={styles.HandleRowClickContent}>
          <p>Статус</p>
          <p>{params.status}</p>
        </div>
        <h4>Оспаривание</h4>
        <input type="date" id="dateInputFrom" />
        <textarea placeholder="Напишите причину обращения"></textarea>
        <button>Оспорить</button>
      </div>
    );
  }
}
export default HandleRowClick;
