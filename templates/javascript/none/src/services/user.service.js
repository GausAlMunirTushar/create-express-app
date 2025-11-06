// Mock service
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export const userService = {
    fetchUsers: async () => users,
    fetchUserById: async (id) => users.find((u) => u.id === Number(id)),
};
