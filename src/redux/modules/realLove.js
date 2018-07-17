let heartId = 0;

const CHANGE = 'realLove/CHANGE';
const GO_LEFT = 'realLove/GO_LEFT';
const GO_RIGHT = 'realLove/GO_RIGHT';
const GO_TOP = 'realLove/GO_TOP';
const GO_BOTTOM = 'realLove/GO_BOTTOM';
const FIRE = 'realLove/FIRE';
const INIT = 'realLove/INIT';
const INIT_HEART = 'realLove/INIT_HEART';

const initialState = {
    readyPhotos: ['aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg', 'aa.jpg', 'aa.jpg', 'aa.jpg',
        'aa.jpg'].map((i, index) => ({ id: index, url: i })),
    hearts: [],
    currentPhoto: null,
    backgroundPhoto: null,
    flyPhotos: [],
    floorPhotos: [],
    cupidStyle: {
        position: 'fixed',
        width: '40px',
        height: '40px',
        left: 0,
        top: 0
    },
    cupidSpeed: 5,
    heartSpeed: 10,
    cupidReady: false,

    preSelectedPhotoId: -1,
    currentSelectedPhotoId: -1,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                ...action.arg
            };
        case INIT: {
            return {
                ...state,
                cupidReady: true,
                cupidStyle: {
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    left: window.document.body.clientWidth / 2 - 20,
                    top: window.document.body.clientHeight - 40,
                    transform: 'rotateZ(-90deg)',
                    zIndex: 100
                }
            };
        }
        case GO_LEFT: {
            return {
                ...state,
                cupidStyle: {
                    ...state.cupidStyle,
                    left: state.cupidStyle.left - state.cupidSpeed
                }
            };
        }
        case GO_RIGHT: {
            return {
                ...state,
                cupidStyle: {
                    ...state.cupidStyle,
                    left: state.cupidStyle.left + state.cupidSpeed
                }
            };
        }
        case GO_TOP: {
            return {
                ...state,
                cupidStyle: {
                    ...state.cupidStyle,
                    top: state.cupidStyle.top - state.cupidSpeed
                }
            };
        }
        case GO_BOTTOM: {
            return {
                ...state,
                cupidStyle: {
                    ...state.cupidStyle,
                    top: state.cupidStyle.top + state.cupidSpeed
                }
            };
        }
        case FIRE: {
            return {
                ...state,
                hearts: [...state.hearts, {
                    id: ++heartId,
                    width: '50px',
                    height: '50px',
                    position: 'fixed',
                    left: action.arg.left - 14,
                    top: action.arg.top - 50,
                    zIndex: 101
                }]
            };
        }
        case INIT_HEART: {
            let hearts = [...state.hearts];
            hearts = hearts.map(i => {
                if (i.top <= 0) {
                    return null;
                }

                return {
                    ...i,
                    top: i.top - state.heartSpeed
                };
            }).filter(i => i);

            return {
                ...state,
                hearts
            };
        }
        default:
            return state;
    }
}

export const init = () => ({ type: INIT });
export const change = arg => ({ type: CHANGE, arg });
export const goLeft = () => ({ type: GO_LEFT });
export const goRight = () => ({ type: GO_RIGHT });
export const goTop = () => ({ type: GO_TOP });
export const goBottom = () => ({ type: GO_BOTTOM });
export const fire = arg => ({ type: FIRE, arg });
export const heartMoveCheck = () => ({ type: INIT_HEART });
