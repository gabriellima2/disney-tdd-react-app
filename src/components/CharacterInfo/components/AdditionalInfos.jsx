export const AdditionalInfos = (props) => {
  const { title, infos } = props;
  const hasInfos = infos.length > 0;
  return (
    <section>
      <h2>{title}</h2>
      {hasInfos ? (
        <ul>
          {infos.map((info) => <li key={info}>{info}</li>)}
        </ul>
      ) : (
        <small>Sem informações!</small>
      )}
    </section>
  );
}
