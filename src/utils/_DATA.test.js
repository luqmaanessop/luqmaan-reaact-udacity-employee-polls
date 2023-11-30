import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
} from './_Data';

describe('_Data.js Tests', () => {
  let originalQuestions;
  let originalUsers;

  beforeAll(async () => {
    originalQuestions = await _getQuestions();
    originalUsers = await _getUsers();
  });

  afterAll(() => {
    // Reset data after all tests
    jest.restoreAllMocks();
    jest.resetModules();
    // _Data.questions = { ...originalQuestions };
    // _Data.users = { ...originalUsers };
  });

  let questions;
  let users;

  beforeAll(async () => {
    questions = await _getQuestions();
    users = await _getUsers();
  });

  describe('_saveQuestion', () => {
    it('should save a new question and return the formatted question', async () => {
      const newQuestion = {
        optionOneText: 'Test Option One',
        optionTwoText: 'Test Option Two',
        author: users.sarahedo,
      };

      const response = await _saveQuestion(newQuestion);

      expect(response).toBeTruthy();
    });

    it('should reject with an error message when incorrect data is passed to _saveQuestion', async () => {
      const newErrorQuestion = {
        optionOneText: 'Test Option One',
        optionTwoText: undefined,
        author: users.sarahedo,
      };

        const response = await _saveQuestion(newErrorQuestion).catch(e => e);

      expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
  });

  describe("_saveQuestionAnswer", () => {
    it("should return true for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });

    it("should return error for false parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionOne"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
  });
});
