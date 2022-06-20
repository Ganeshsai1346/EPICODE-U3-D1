/** @format */

const ButtonComponent = ({ name, color, font }) => {
  return (
    <div>
      <button style={{ backgroundColor: color, fontWeight: font }}>
        {" "}
        {name}
      </button>
    </div>
  );
};

export default ButtonComponent;
