export const Error = (props) => {
  const { message } = props;
  return <h1 data-testid="error">{message}</h1>;
}
