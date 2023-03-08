const cars = [
    {
        "productName": "G-Class",
        "category": "Mercedes",
        "price": 17200000,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/G-ClassModelImage.jpg&w=730&h=484&q=75&c=1",
    },
    {
        "productName": "GLS",
        "category": "Mercedes",
        "price": 11600000,
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45390/gls-exterior-right-front-three-quarter-2.jpeg?q=75",
    },
    {
        "productName": "Innova Crysta",
        "category": "Toyota",
        "price": 1745000,
        "image": "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/51435/innova-crysta-exterior-left-front-three-quarter.jpeg?q=75",
    },
    {
        "productName": "Fortuner",
        "category": "Toyota",
        "price": 3240000,
        "image": "https://images.tv9hindi.com/wp-content/uploads/2021/03/toyota-fortuner-2.jpg",
    },
    {
        "productName": "Mercedes-Maybach-GLS",
        "category": "Mercedes",
        "price": 24723270,
        "image": "https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2021MBS99_640/2021MBS990001_640_01.png",
    },
    {
        "productName": "Legender",
        "category": "Toyota",
        "price": 4205000,
        "image": "https://img.indianautosblog.com/crop/1200x675/2020/06/04/toyota-fortuner-legender-black-front-quarters-0295.jpg",
    },
    {
        "productName": "Swift",
        "category": "Maruti",
        "price": 691900,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/swift/car-color-varient/midnight-blue.ashx?modified=20220425080434",
    },
    {
        "productName": "Celerio",
        "category": "Maruti",
        "price": 625000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/celerio/car-color-varient/06.ashx?modified=20220425080426",
    },
    {
        "productName": "Dzire",
        "category": "Maruti",
        "price": 725000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/dzire/car-color-varient/primegallantred.ashx?modified=20220425080434",
    },
    {
        "productName": "Ertiga",
        "category": "Maruti",
        "price": 935000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/ertiga/car-color-varient/ertiga_prime_oxford_blue.ashx?modified=20220414133659",
    },
    {
        "productName": "Santro",
        "category": "Hyundai",
        "price": 489700,
        "image": "https://media.zigcdn.com/media/content/2019/Oct/santroanititle_720x540.png",
    },
    {
        "productName": "Grand i10 Nios",
        "category": "Hyundai",
        "price": 539000,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Nios.jpg&w=730&h=484&q=75&c=1",
    },
    {
        "productName": "i20",
        "category": "Hyundai",
        "price": 703000,
        "image": "https://images.91wheels.com//assets/b_images/main/models/profile/profile1652948651.jpg",
    },
    {
        "productName": "Aura",
        "category": "Hyundai",
        "price": 608900,
        "image": "https://files.prokerala.com/automobile/images/thumbnail/large/hyundai-aura-1461/hyundai-aura-1461.jpg",
    },
    {
        "productName": "Verna",
        "category": "Hyundai",
        "price": 940600,
        "image": "https://www.indiacarnews.com/wp-content/uploads/2018/07/New-Hyundai-Verna.jpg",
    },
    {
        "productName": "Creta",
        "category": "Hyundai",
        "price": 1044000,
        "image": "https://auto.economictimes.indiatimes.com/files/retail_files/creta-1504179556-prod-var.jpg",
    },
    {
        "productName": "Venue",
        "category": "Hyundai",
        "price": 753100,
        "image": "https://imgd.aeplcdn.com/0x0/n/m7ktr3a_1586563.jpg",
    },
    {
        "productName": "Alcazar",
        "category": "Hyundai",
        "price": 1589400,
        "image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/46812/alcazar-exterior-right-front-three-quarter.jpeg",
    },

    {
        "productName": "Glanza",
        "category": "Toyota",
        "price": 653400,
        "image": "https://static3.toyotabharat.com/images/showroom/glanza/new/colors/car-blue.png",
    },
    {
        "productName": "Brezza",
        "category": "Maruti",
        "price": 900000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/brezza/car-color-varient/granite-grey.ashx?modified=20220628113346",
    },
    {
        "productName": "Eeco",
        "category": "Maruti",
        "price": 500000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/eeco/car-color-varient/metallic-red.ashx?modified=20220425080430",
    },
    {
        "productName": "Urban Cruiser",
        "category": "Toyota",
        "price": 920500,
        "image": "https://www.toyotamauritius.com/sites/default/files/models/colors/URBAN_CRUISER_1%2C5XR_Bi_TONE_DNT_RGB.png",
    },
    {
        "productName": "A8l",
        "category": "Audi",
        "price": 15600000,
        "image": "https://imgd.aeplcdn.com/1056x594/n/b78issa_1479911.jpg?q=75",
    },

    {
        "productName": "A-Class",
        "category": "Mercedes",
        "price": 4400000,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-A-Class-Limousine-100420211633.jpg&w=730&h=484&q=75&c=1",
    },
    {
        "productName": "Camry",
        "category": "Toyota",
        "price": 4435000,
        "image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/110233/2022-camry-exterior-right-front-three-quarter.jpeg?isig=0",
    },
    {
        "productName": "A4 Sedan",
        "category": "Audi",
        "price": 4899000,
        "image": "https://imgd.aeplcdn.com/0x0/cw/ec/22613/Audi-A4-Right-Front-Three-Quarter-165483.jpg?wm=0",
    },
    {
        "productName": "A5 S5 Sportback",
        "category": "Audi",
        "price": 5544000,
        "image": "https://images.carandbike.com/car-images/colors/audi/s5/audi-s5-mythos-black.png?v=1616581226",
    },
    {
        "productName": "Vellfire",
        "category": "Toyota",
        "price": 9260000,
        "image": "https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/04/20200424055627_2020-Toyota-Velfire-Golden-Eye-01.jpg?fit=872%2C578&ssl=1",
    },
    {
        "productName": "Alto",
        "category": "Maruti",
        "price": 400000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/alto-800/home-slider-image/alto800.ashx?modified=20220103060823",
    },
    {
        "productName": "Wagonr",
        "category": "Maruti",
        "price": 600000,
        "image": "https://hyperlocalcd3.azureedge.net/-/media/images/feature/arena/channel-specific-global-content/car-brands/wagon-r/car-color-varient/poolside-blue.ashx?modified=20220425080434",
    },
    {
        "productName": "Audi E-torn GT",
        "category": "Audi",
        "price": 17960000,
        "image": "https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2022AUC40_640/2022AUC400001_640_01.png",
    },
    {
        "productName": "Audi E-torn",
        "category": "Audi",
        "price": 8072000,
        "image": "https://www.motortrend.com/uploads/izmo/audi/e_tron_sportback/2021/e_tron_sportback.png",
    },
    {
        "productName": "Audi E-torn Sportback",
        "category": "Audi",
        "price": 11960000,
        "image": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/39045/e-tron-sportback-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
    },
    {
        "productName": "C-Class",
        "category": "Mercedes",
        "price": 5500000,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/C-ClassModelImage.jpg&w=872&h=578&q=75&c=1",
    },
    {
        "productName": "S-Class",
        "category": "Mercedes",
        "price": 16000000,
        "image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg",
    },
    {
        "productName": "EQC",
        "category": "Mercedes",
        "price": 4400000,
        "image": "https://www.recharge.gr/wp-content/uploads/eqc-1000x500-1.png",
    },
    {
        "productName": "A6 Sedan",
        "category": "Audi",
        "price": 6000000,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Audi-A6-251020191920.jpg&w=872&h=578&q=75&c=1",
    },
    {
        "productName": "Urban Cruiser Hyryder",
        "category": "Toyota",
        "price": 1600000,
        "image": "https://www.motorbeam.com/wp-content/uploads/Toyota-Urban-Cruiser-Colours.jpg",
    },
    {
        "productName": "GLS Coupe",
        "category": "Mercedes",
        "price": 15900000,
        "image": "https://cdn-dkmkh.nitrocdn.com/jqoCqDcznEkTSPCMFaRVTTZBtetglaUZ/assets/static/optimized/rev-7785ba3/wp-content/uploads/2021/12/gle-amg-coupe-front-site-basic.png",
    },
    {
        "productName": "Audi Q2",
        "category": "Audi",
        "price": 6200000,
        "image": "https://cdn.autoportal.com/img/new-cars-gallery/audi/q2/photo34/audi-q2-1a8e6b3f.png",
    },
]



window.onload = () => {
    arrange_array(cars);

}
function arrange_array(filtercars) {
    document.getElementById("car").innerHTML = '';
    for (let i of filtercars) {
        document.getElementById("car").innerHTML +=
            '<div class="col-md-8 card" style="width:250px; margin:40px; border-radius:20px;margin-right:60px;padding-right="20%""><div class="image-container"><img class="img-fluid" src="' + i.image + '" style="height="40px""></div><div class="container"><h5 class="product-name">' + i.productName.toUpperCase() + '</h5><h4>$ ' + i.price + '</h4></div></div>';
    }

}


function filtercar(value) {

    if (value != 'Alll') {
        var car_sort = cars.filter(cars => cars.category == value);
        arrange_array(car_sort);

    }
    else {
        arrange_array(cars);
    }
}

function acar() {
    let asCars = cars.sort((c1, c2) => (c1.price < c2.price) ? 1 : (c1.price > c2.price) ? -1 : 0);
    arrange_array(asCars);
}

function dcar() {
    let deCars = cars.sort((c1, c2) => (c1.price < c2.price) ? -1 : (c1.price > c2.price) ? 1 : 0);
    arrange_array(deCars);
}
