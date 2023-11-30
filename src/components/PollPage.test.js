import { calculateVotes } from './PollPage';

describe('calculateVotes', () => {
  it('should calculate votes percentage correctly', () => {
    const question = {
      optionOne: {
        votes: ['user1', 'user2'],
        text: 'Option One Text',
      },
      optionTwo: {
        votes: ['user3'],
        text: 'Option Two Text',
      },
    };

    expect(calculateVotes('1', question)).toBeCloseTo(66.67, 2); // Adjust the expected value based on your data
    expect(calculateVotes('2', question)).toBeCloseTo(33.33, 2); // Adjust the expected value based on your data
  });

  it('should return an empty string for an invalid option', () => {
    const question = {
      optionOne: {
        votes: ['user1', 'user2'],
        text: 'Option One Text',
      },
      optionTwo: {
        votes: ['user3'],
        text: 'Option Two Text',
      },
    };

    expect(calculateVotes('invalidOption', question)).toBe('');
  });
});
