const barbers = [
    {
        id: 0,
        email: 'john-doe@email.com',
        name: 'john',
        address: 'georgia',
        phone: '555696969',
        price: '50',
        reviews: []
    },
    {
        id: 1,
        email: 'lasha-doe@email.com',
        name: 'lasha',
        address: 'georgia',
        phone: '55555555',
        price: '2000',
        reviews: [
            {
                id: 1,
                rate: 3,
                text: 'asd'
            }
        ]
    },
]

export const getBarbers = () => {
    return [...barbers];
}

const users = [
    {
        email: "john@gmail.com",
        password: "123"
    }
]

export const loginUser = (user) => {
    return users.findIndex(u => u.email === user.email && u.password === user.password);
}

export const registerUser = (user) => {
    const { email, password } = user;
    users.push({ email, password });
}

export const registerBarber = (barber) => {
    const { email, name, surname, phone, price } = barber;
    barbers.push({ email, name, surname, phone, price, id: new Date().getTime(), reviews: [] });
}

export const addBarberReview = (id, review) => {
    const barber = barbers.find(barber => barber.id === id);

    if(barber) {
        barber.reviews.push({...review, id: new Date().getTime()});
    }
}