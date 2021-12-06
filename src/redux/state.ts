import {renderTree} from '../render';


export let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi! How are you?', numberLike: 5},
            {id: 2, message: 'It\'s my first post', numberLike: 45},
            {id: 3, message: 'Welcome to hell', numberLike: 12},
            {id: 4, message: 'My beautiful daughter', numberLike: 457},
            {id: 5, message: 'My wife loves me', numberLike: 913}
        ],
        addNewPost : (text: string) => {
            let newPost: NewPostType = {
                id: new Date().getDate(),
                message: text,
                numberLike: 0
            };
            state.profilePage.postData.push(newPost);
            renderTree(state)
        }
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Brat'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Kisa'},
            {id: 4, name: 'Vlad'},
            {id: 5, name: 'Gnedko'},
            {id: 6, name: 'Malysh'},
            {id: 7, name: 'Artem'}
        ],
        messagesData: [
            {id: 1, message: 'Ho!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What about one cup of coffe?'},
            {id: 4, message: 'Great!'},
            {id: 5, message: 'My name Jora Smolenski'},
            {id: 6, message: 'It\'s joke'}
        ]
    },
    sidebar: {
        friendsData: [
            {name: 'Vasia', logo: 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'},
            {
                name: 'Slava',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb7SOxwRvIFEmASzSMODt5uyBrC1IF11vNl9hA4LQ5XeSIKX-J0fqhRruNH4Q4VP0HJA&usqp=CAU'
            },
            {
                name: 'Victor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICcLEiVZAd8p9NH7V2-xhJg_mrCvzIUswvyfZlnu1DuYspqNltDOUXtkzskIain1gJmI&usqp=CAU'
            }

        ]
    }
}

type NewPostType = {
    id: number
    message: string
    numberLike: number
}








