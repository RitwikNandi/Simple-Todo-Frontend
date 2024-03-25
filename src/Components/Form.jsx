import { useGlobalContext } from "../helpers/context";

const Form = () => {
  const {handleForm } = useGlobalContext();

  return (
    <form
      className='row'
      onSubmit={(e) => {
        {
          e.preventDefault();
          console.log(e.currentTarget.elements.task.value);
          handleForm(e.currentTarget.elements.task.value);
        }
      }}
    >
      <input
        type='text'
        id='task'
        placeholder='be a super saiyan 💪'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Form;
