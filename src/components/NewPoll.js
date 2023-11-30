import { useState } from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleAddQuestion} from '../actions/questions';

const NewPoll = ({dispatch}) => {
  const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
      const value = e.target.value;
      setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
      const value = e.target.value;
      setSecondOption(value);
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('add new poll');
      dispatch(handleAddQuestion(firstOption, secondOption));
      navigate("/");
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl mb-4">New Poll</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label htmlFor="firstOption" className="block text-sm font-medium text-gray-600">
                        First Option
                    </label>
                    <div className="mt-1">
                        <input
                            value={firstOption}
                            onChange={handleFirstOptionChange}
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            className="p-2 border rounded-md w-full"
                            data-testid="firstOption"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="secondOption" className="block text-sm font-medium text-gray-600">
                        Second Option
                    </label>
                    <div className="mt-1">
                        <input
                            value={secondOption}
                            onChange={handleSecondOptionChange}
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            className="p-2 border rounded-md w-full"
                            data-testid="secondOption"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 text-white rounded-md"
                        data-testid="submit-poll"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default connect()(NewPoll);
