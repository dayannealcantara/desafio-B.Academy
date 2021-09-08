function Title({ children, size }) {
  const Titleh = `h${size}`;

  return (
    <>{size && size <= 6 ? <Titleh>{children}</Titleh> : <h1>{children}</h1>}</>
  );
}

export default Title;
