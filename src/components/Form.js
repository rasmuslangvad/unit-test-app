const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" required />

      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age" placeholder="20" required />

      <button type="submig">Submit</button>
    </form>
  );
};

export default Form;
