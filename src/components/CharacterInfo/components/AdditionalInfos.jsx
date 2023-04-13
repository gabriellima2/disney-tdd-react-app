export const AdditionalInfos = (props) => {
  const { title, infos } = props;
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {infos.map((info) => <li key={info}>{info}</li>)}
      </ul>
    </section>
  );
}
