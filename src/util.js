import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sunny in Saint Petersburg",
            artist: "Saib",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16076",
            active: true,
        },
        {
            name:"Perspective",
            artist: "fantompower",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22794",
            active: false,
        },
        {
            name:"Waybackwhen",
            artist: "Philanthrope, Parkbench Epiphany",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27502",
            active: false,
        },
        {
            name:"Murmuration",
            artist: "Blue Wednesday, Shopany",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            id: uuidv4(),
            color: ["#008781", "#6D8E8F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
            active: false,
        },
        {
            name:"Clocks Forward",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451-1024x1024.jpg",
            id: uuidv4(),
            color: ["#FDFBDF", "#845648"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8094",
            active: false,
        },
    ];
}

export default chillHop;


