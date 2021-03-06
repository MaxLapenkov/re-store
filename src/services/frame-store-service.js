export default class FrameStoreService {
    data = [
        {key: 1, id: 1, name: 'Белоснежка Flora', color: 'Белый', price: 50, width:20, height:20, image: "https://cdn1.regmarkets.ru/r1200/a665ca0d8f5f6319a69359dc91434019.jpg"},
        {key: 2, id: 2, name: 'Белоснежка Ester', color: 'Серый', price: 100, width:20, height:20, image: "https://cdn1.regmarkets.ru/r1200/a665ca0d8f5f6319a69359dc91434019.jpg"},
        {key: 3, id: 3, name: 'Мосфа Тоскана', color: 'Коричневый', price: 150, width:20, height:20, image: "https://static.regmarkets.ru/detail/images/87/db/87dbeeab523e2992376eada899585b4d.jpg"},
        {key: 4, id: 4, name: 'Gamma', color: 'Коричневый', price: 200, width:20, height:20, image: "https://static.regmarkets.ru/detail/images/b7/7c/b77c17a97669dc799e5877ce9d310693.jpg"},
    ]
    getFrames() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error('Server error'))
            }, 700)
        })
    }
}