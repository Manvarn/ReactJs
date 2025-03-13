const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks For hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Nikhil")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log(`Hey User , Welcome`);
    props.onClick();
  };

  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
export default EventProps;
