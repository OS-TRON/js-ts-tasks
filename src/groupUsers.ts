/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  // replace Array<unknown> with your own types
  type User = {
    name: string;
    login: string;
    surname?: string;
    type: 'EMPLOYEE' | 'CONTRACTOR';
    address?: {
      officeId: number;
      placeId: number;
    };
    contractorCompanyName?: string;
  };

  type GroupedUsers = {
    employees: User[];
    contractors: User[];
  };

  export function segregateUsers(users: User[]): GroupedUsers {
    return users.reduce<GroupedUsers>(
      (accumulator, currentUser) => {
        if (currentUser.type === 'EMPLOYEE') {
          accumulator.employees.push(currentUser);
        } else if (currentUser.type === 'CONTRACTOR') {
          accumulator.contractors.push(currentUser);
        }
        return accumulator;
      },
      { employees: [], contractors: [] }
    );
  }
};
