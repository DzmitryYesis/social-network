import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

type StoreType = {
    _state: StatePropsType
    _renderTree: () => void
    subscribe: (observe: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}

type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostStateAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof changeMessagePostStateAC>


const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi! How are you?', numberLike: 5},
                {id: 2, message: 'It\'s my first post', numberLike: 45},
                {id: 3, message: 'Welcome to hell', numberLike: 12},
                {id: 4, message: 'My beautiful daughter', numberLike: 457},
                {id: 5, message: 'My wife loves me', numberLike: 913}
            ],
            newPost: '',
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
            ],
            newMessage: '',
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
    },
    _renderTree() {
        console.log('State changed')
    },
    subscribe(observe: () => void) {
        this._renderTree = observe
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._renderTree()
    }
}

const addPostAC = (newPost: string) =>
    ({type: 'ADD-NEW-POST', text: newPost} as const)

const changeNewPostStateAC = (newPost: string) =>
    ({type: 'CHANGE-POST-STATE', newPost: newPost} as const)

const addNewMessageAC = (newMessage: string) =>
    ({type: 'ADD-NEW-MESSAGE', text: newMessage} as const)

const changeMessagePostStateAC = (newMessage: string) =>
    ({type: 'CHANGE-MESSAGE-POST', newMessage: newMessage} as const)

type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    sidebar: FriendsDataPropsType
}

type ProfilePagePropsType = {
    postData: Array<PostDataPropsType>
    newPost: string
}

type PostDataPropsType = {
    id: number
    message: string
    numberLike: number
}

type DialogsPagePropsType = {
    dialogsData: Array<DialogsDataPropsType>
    messagesData: Array<MessageDataPropsType>
    newMessage: string
}

type DialogsDataPropsType = {
    id: number
    name: string
}

type MessageDataPropsType = {
    id: number
    message: string
}

type FriendsDataPropsType = {
    friendsData: Array<FriendsPropsType>
}

type FriendsPropsType = {
    name: string
    logo: string
}

type NewPostType = {
    id: number
    message: string
    numberLike: number
}

type NewMessageType = {
    id: number
    message: string
}



