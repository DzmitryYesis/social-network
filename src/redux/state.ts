export type PostDataPropsType = {
    id?: number
    message: string
    numberLike: number
}

export type ProfilePagePropsType = {
    postData: Array<PostDataPropsType>
}

export type MessageDataPropsType = {
    id: number
    message: string
}

export type DialogsDataPropsType = {
    id: number
    name: string
}

export type DialogsPagePropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessageDataPropsType>
}

export type StateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}
export type AppType=StateType

export let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi! How are you?', numberLike: 5},
            {id: 2, message: 'It\'s my first post', numberLike: 45},
            {id: 3, message: 'Welcome to hell', numberLike: 12},
            {id: 4, message: 'My beautiful daughter', numberLike: 457},
            {id: 5, message: 'My wife loves me', numberLike: 913}
        ]
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
    }
}








