import { UserDataTypesAnotation } from "../types/type"

export const userData: UserDataTypesAnotation[] = [
    {
        id: 1, 
        name: 'Mark Webber',
        case: {
            type: 'reacted to your recent post',
            post: 'My first tournament today!',
            group: '',
            message: '',
            picture: ''
        },
        seen: false,
        dateOfAction: '1m ago',
    },
    {
        id: 2, 
        name: 'Angela Gray',
        case: {
            type: 'followed you',
            post: '',
            group: '',
            message: '',
            picture: ''
        },
        seen: false,
        dateOfAction: '5m ago',
    },
    {
        id: 3, 
        name: 'Jacob Thompson',
        case: {
            type: 'has joined your group',
            post: '',
            group: 'Chess Club',
            message: '',
            picture: ''
        },
        seen: false,
        dateOfAction: '1 day ago',
    },
    {
        id: 4, 
        name: 'Rizky Hasanuddin',
        case: {
            type: 'sent you a private message',
            post: '',
            group: '',
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            picture: ''
        },
        seen: true,
        dateOfAction: '5 days ago',
    },
    {
        id: 5, 
        name: 'Kimberly Smith',
        case: {
            type: 'commented on your picture',
            post: '',
            group: '',
            message: '',
            picture: '/images/image-chess.webp'
        },
        seen: true,
        dateOfAction: '1 week ago',
    },
    {
        id: 6, 
        name: 'Nathan Peterson',
        case: {
            type: 'reacted to your recent post',
            post: '5 end-game strategies to increase your win rate',
            group: '',
            message: '',
            picture: ''
        },
        seen: true,
        dateOfAction: '2 weeks ago',
    },
    {
        id: 7, 
        name: 'Anna Kim',
        case: {
            type: 'left the group',
            post: '',
            group: 'Chess Club',
            message: '',
            picture: ''
        },
        seen: true,
        dateOfAction: '2 weeks ago',
    },
]