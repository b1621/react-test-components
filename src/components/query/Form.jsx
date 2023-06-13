import { useState } from "react";
const Form = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  //   console.log(post);
  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const renderField = (label) => (
    <div className=' m-3'>
      <label>{label}</label>
      <input
        className='border outline-none mx-10 '
        onChange={handleChangeInput}
        type='text'
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    setPost({
      title: "",
      body: "",
    });
  };
  return (
    <div>
      <div className=' '>
        <form onSubmit={handleSubmit}>
          <div>{renderField("Title")}</div>
          <div>{renderField("Body")}</div>
          <button
            type='submit'
            className='border px-4 ml-24 bg-slate-100 hover:bg-slate-200'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
