'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Students', newData, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(
            'Students',
            { [Sequelize.Op.or]: [{ name: 'sampleseeder' }, { name: 'sampleseeder2' }] },
            {}
        )
    },
}

const newData = [
    {
        name: 'sampleseeder',
        class: 'fsw6',
        age: 12,
        GroupId: 1,
        password:
            '$2b$10$8tikwFvMxvvrINkRVm8I4.9PaX7ao8yE0KNlwtr3mhPgeXvqa4f16',
        email: 'sample@seed.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'sampleseeder2',
        class: 'fsw6',
        age: 12,
        GroupId: 1,
        password:
            '$2b$10$8tikwFvMxvvrINkRVm8I4.9PaX7ao8yE0KNlwtr3mhPgeXvqa4f16',
        email: 'sample2@seed.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]
