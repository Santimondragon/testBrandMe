import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        campaigns: [{
                id: 1,
                name: 'Campaña Heineken',
                logo: 'https://www.stickpng.com/assets/images/58480a5fcef1014c0b5e4919.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384005.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384015.svg'
                        ],
                cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                id: 2,
                name: 'Campaña Coca Cola',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384017.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384005.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384015.svg'
                        ],
                cover: 'https://wallpaperaccess.com/full/31121.jpg'
            },
            {
                id: 3,
                name: 'Campaña Corona',
                logo: 'https://www.stickpng.com/assets/images/585e5e3fcb11b227491c33ed.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384017.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384005.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384015.svg'
                        ],
                cover: 'https://carolinadesignerdragons.com/wp-content/uploads/2014/10/919Mz13VqHL._SL1500_.jpg'
            },
            {
                id: 4,
                name: 'Campaña Absolut',
                logo: 'https://www.stickpng.com/assets/images/589a41155aa6293a4aac48a8.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384017.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384015.svg'
                        ],
                cover: 'https://images-na.ssl-images-amazon.com/images/I/71bsGqRMljL._SX466_.jpg'
            },
            {
                id: 5,
                name: 'Campaña Nike',
                logo: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f3.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384017.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384005.svg',
                        ],
                cover: 'https://images.pexels.com/photos/777211/winter-sunset-purple-sky-777211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                id: 6,
                name: 'Campaña Brawl Stars',
                logo: 'https://upload.wikimedia.org/wikipedia/en/1/18/Brawl_Stars_logo.png',
                social: ['https://image.flaticon.com/icons/svg/1384/1384005.svg',
                         'https://image.flaticon.com/icons/svg/1384/1384015.svg'
                        ],
                cover: 'https://i.redd.it/iapqmzd3zu721.jpg'
            },
        ]
    }
});

export default store;