import { useState } from "react";

const PopupForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [notification, setNotification] = useState(null);

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };
  return (
    <>
      <div className=' border border-cyan-900'>
        <div className='static my-14 border border-red-800'>
          <div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>job</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>jon</td>
                    <td>23</td>
                    <td>developer</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>jon</td>
                    <td>23</td>
                    <td>developer</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>jon</td>
                    <td>23</td>
                    <td>developer</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>jon</td>
                    <td>23</td>
                    <td>developer</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <button onClick={handleAddButtonClick}> Add </button>
              </div>
            </div>
          </div>
          {isFormVisible && (
            <div className=' absolute top-0 left-0 w-screen h-screen   bg-opacity-5 backdrop-blur-[2px]'>
              <div className='mx-[50%] my-20 w-60 h-80 bg-amber-600'>
                form
                <div className='border my-6'>
                  <button
                    onClick={() => {
                      setIsFormVisible(false);
                    }}
                    className='mx-4'
                  >
                    cancel
                  </button>
                  <button type='submit'>submit</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PopupForm;
