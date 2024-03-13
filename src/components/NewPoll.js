import { useState, useEffect, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {handleAddQuestion} from '../actions/questions';
import { useDispatch } from "react-redux";

const NewPoll = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
      const value = e.target.value;
      setFirstOption(value);
      checkInput();
    };

    const handleSecondOptionChange = (e) => {
      const value = e.target.value;
      setSecondOption(value);
      checkInput();
    };

    const [disabled, setDisabled] = useState(true)

	const checkInput = useCallback(() => {
		if (firstOption !== '' && secondOption !== '') {
			setDisabled(false)
		}
	}, [firstOption, secondOption])

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleAddQuestion(firstOption, secondOption));
      navigate("/");
    }

	useEffect(() => {
	    checkInput()
	}, [checkInput])

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
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
                        disabled={disabled}
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default NewPoll;
