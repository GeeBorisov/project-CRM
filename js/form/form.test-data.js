class ExampleItem {
    constructor (name, phone, email, product) {
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product

    }
}

const testData = [
    new ExampleItem('Иван Фролов', parseInt('+79233334321'), 'frolov@mail.ru', 'course-js'),
    new ExampleItem('Елена Иванова', parseInt('+79231111234'), 'ivanov@gmail.com', 'course-js'),
    new ExampleItem('Иван Васильевич', parseInt('+9139876543'), 'vasil@gmail.com', 'course-vue'),
    new ExampleItem('Дмитрий Безруков', parseInt('+79039479009'), 'bezruk@mail.ru', 'course-wordpress'),
    new ExampleItem('Ярослава Сова', parseInt('+79034561221'), 'sova@gmail.com', 'course-php'),
    new ExampleItem('Светлана Шевченко', parseInt('+79059990990'), 'shevch@gmail.com', 'course-vue'),
    new ExampleItem('Дмитрий Нагиев', parseInt('+79432323123'), 'nagiev@mail.ru', 'course-html'),
    new ExampleItem('Роман Зенкин', parseInt('+78901234567'), 'zenkin@gmail.com', 'course-php'),
]

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export default function getRandomData () {
    const index = getRandomIndex(testData.length)
    return testData[index]
}