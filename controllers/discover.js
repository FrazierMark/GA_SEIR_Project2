const FurnitureObject = require('../models/furnitureObject');
const Note = require('../models/note');
const User = require('../models/user')
const axios = require('axios')



const wayfairRootURL = 'https://api.wayfair.com';
const wayfairURLS = [
    "https://api.wayfair.com/v1/3dapi/models?page=1",
    "https://api.wayfair.com/v1/3dapi/models?page=2",
    "https://api.wayfair.com/v1/3dapi/models?page=3"
];
const apiKey = process.env.WAYFAIR_TOKEN
const userLogin = process.env.WAYFAIR_LOGIN



const index = async (req, res) => {
    let wayfairData = {}
    const options = {
        method: 'GET',
        url: wayfairURLS[0],
        auth: {
            username: userLogin,
            password: apiKey
        }
    };

    // try {
    //     wayfairData = await axios.request(options)
    //     console.log(wayfairData.data)
    // } catch (error) {
    //     console.error(error);
    // }
    res.render("discover/index", { title: 'Discover', products: testData })
};



module.exports = {
    index
};




const testData = [
    {
      sku: 'FV50959',
      product_name: 'Willow 25Cm Wide Armchair',
      product_description: 'Crafted of gray rattan which is coveted for its natural soft gray color, this Armchair is easy and breezy year-round. With its artfully woven sculptural lines, this transitional chair is chic and comfortable in the family room or dining room.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/highland-dunes-willow-25cm-wide-armchair-w000539672.html',
      class_name: 'Accent Chairs',
      sale_price: 279.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/428/12618121/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LATR7704',
      product_name: 'Sidibe 74.93Cm Swivel Barrel Chair',
      product_description: "Pairing a swivel design with a silhouette, this distinctive Sidibe 74.93Cm Swivel Barrel Chair is sure to spark conversation in your favorite seating space. Its nailhead trim adds a timeless touch to your decor while its solid pattern blends effortlessly into monochromatic and vibrant palettes. Play into this piece's contemporary influence by adding it to a living room seating group comprised of a mid-century-inspired loveseat and streamlined sofa for a complementing look, then accent the arrangement with an embroidered patchwork pillow for a touch of texture. Build up the aesthetic by dotting nearby walls with beveled oval mirrors and black-and-white cityscape photographs for an eye-catching display, then pair it with hanging woven tapestry for an unexpected dash of drama. Whether you're seating guests at your next neighborhood get-together or enjoying weekend movie nights, this polyester-upholstered chair is a perfect addition to your favorite aesthetic.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/latitude-run-sidibe-7493cm-swivel-barrel-chair-w005933072.html',
      class_name: 'Accent Chairs',
      sale_price: 359.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/40128/35834628/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LATR8439',
      product_name: 'Dorset 29" Wide Polyester Barrel Chair',
      product_description: 'Understated with a rounded silhouette, this barrel chair works wonderfully in both classic and contemporary ensembles. Its frame is crafted of birch wood, featuring a four-leg foundation with a dark brown finish. Its seat is topped off by a single cushion stuffed with medium-firm polyester fill, while the upholstery wraps around the rest in a versatile solid hue. Assembly is easy with only the legs needing to be attached once it arrives.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/latitude-run-dorset-29-wide-polyester-barrel-chair-w005933054.html',
      class_name: 'Accent Chairs',
      sale_price: 149.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/40128/53776835/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LGLY3906',
      product_name: 'Ayyub 30" Wide Polyester Armchair',
      product_description: 'Be bold with your furniture choices and upgrade your home with a club chair that offers exquisite style. Made with a rich birch wood frame and upholstered seating, this chair brings a charming mid-century modern design to your interior space. This piece combines a classic look with a striking twist to create a chair that will complement any decor. Finished with a button tufted backrest and removable accent pillow, our chair brings you both comfort and a refreshing atmosphere for you to enjoy.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/george-oliver-ayyub-30-wide-polyester-armchair-lgly3906.html',
      class_name: 'Accent Chairs',
      sale_price: 193.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/36991/33501240/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MCRW1865',
      product_name: 'Vidette 25" W Polyester Slipper Chair',
      product_description: 'Add a splash of streamlined style to your seating group with this slipper chair. Crafted with a solid birch frame, this piece is filled with foam for a medium-firm feel. Its poly-blend upholstery is offered in a variety of tones to ensure it suits your color palette, while its single row of button-tufted details lends the solid-hued seat a touch of texture. Four amber-finished legs give it a bit of warmth and round out this design.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/wrought-studio-vidette-25-w-polyester-slipper-chair-w001340134.html',
      class_name: 'Accent Chairs',
      sale_price: 256.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/33808/37202761/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'VKGL1857',
      product_name: 'Tangier 30.5" Wide Barrel Chair',
      product_description: "Add high style to your living room or den with this classic barrel chair. It's made in the USA on a wooden frame, and it's built on top of four tapered legs in a rich brown finish that complements your current color palette. The back has a dramatically curved top silhouette, making it right at home in traditional settings. This chair also features rounded arms that are upholstered in faux leather in a neutral color, and stuffed with foam filling for a hint of support. Plus, it arrives ready to use, with no assembly needed.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/zipcode-design-tangier-305-wide-barrel-chair-w004143408.html',
      class_name: 'Accent Chairs',
      sale_price: 192.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36987/27237285/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WADL4889',
      product_name: 'Spindale 29.5" Wide Swivel Barrel Chair',
      product_description: 'This Papasan-inspired side chair is the perfect seating addition to your modern room! Add it to your restful retreat for a stylish added seat to relax with a good book or have it at the ready when guests are over. Quintessentially contemporary and designed with clean lines in mind, this design is crafted of a stainless-steel frame with a chrome finish, and upholstered with faux leather, while filled with foam. Assembly is required.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/wade-logan-spindale-295-wide-swivel-barrel-chair-w001699443.html',
      class_name: 'Accent Chairs',
      sale_price: 379.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/2664/59140456/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ZIPC4121',
      product_name: "Liam 30.5'' Wide Polyester Barrel Chair",
      product_description: 'A traditional design gets a contemporary update in this streamlined barrel chair. Founded on a manufactured wood frame, this barrel chair features a curved back, rolled arms, and plastic round tapered legs. Enveloped in polyester blend upholstery in a cowhide print, this chair’s high-density foam cushioning provides comfort and support. It has a 17" seat height.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/zipcode-design-liam-305-wide-polyester-barrel-chair-w005759417.html',
      class_name: 'Accent Chairs',
      sale_price: 185.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/30593/32073616/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ANDO4524',
      product_name: 'Nadell Floral Beige/Brown/Burgundy Red Rug',
      product_description: "Decorate your living space with the chic, modern designs of these area rugs. Featuring a stylish floral pattern with striking colors and luxe texture, these area rugs are ideal for updating any modern space. With mid-century modern and contemporary design influences, these rugs all feature eye-catching designs that are sure to wow your guests. Designed with an upscale blend of fashion and function, these area rugs will elevate your home’s décor while bringing a warm and welcoming feel to every room with their soft texture underfoot. Unique elements in each rug will complement your modern furniture and contemporary pieces of art for a cohesive design to your space you'll love. Made of soft, 100% heat-set polypropylene yarns, these durable and stylish area rugs make for a fashionable and long-lasting addition to your home. Place these area rugs in your bedroom, living room, dining room, guest room, or home office. These easy to maintain area rugs are stain and fade resistant, making them perfect for indoor use and use in high-traffic areas. To clean your rug, simply vacuum, shake, or spot clean as needed.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/andover-mills-nadell-floral-beigebrownburgundy-red-rug-w006420310.html',
      class_name: 'Area Rugs',
      sale_price: 13.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/30808/58055036/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'BGLS4809',
      product_name: 'Hackman Abstract Gray/Light Blue Area Rug',
      product_description: "Complement you boho-inspired decor with this eye-catching area rug. It features an abstract motif with pops of different shapes in hues of gray and light blue that adds a cool look wherever you roll it out. It's made in Turkey from polypropylene, and it has a latex and jute backing. Plus, it features a medium 0.45'' that provides a bit of padding underfoot in low-traffic rooms like the living room or bedroom. We also recommend pairing this area rug with a rug pad to prevent it from slipping and sliding.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/bungalow-rose-hackman-abstract-graylight-blue-area-rug-w007168270.html',
      class_name: 'Area Rugs',
      sale_price: 41.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/2664/94555836/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LATR7331',
      product_name: 'SantaCruz Floral Blue/Green/Gray Area Rug',
      product_description: 'A painterly abstract watercolor floral motif is artistically rendered in shades of blue, gray, green, and beige in the modern design of this area rug. Crafted from 100% wear-dated nylon, this resilient rug offers a soft touch and superior color clarity with the dependable durability needed for busy households. Available in scatters, runners, squares, and popular rectangle sizes such as 5x8, this area rug is a great choice for adding an artistic flair to any space in your home.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/andover-mills-santacruz-floral-bluegreengray-area-rug-w006961163.html',
      class_name: 'Area Rugs',
      sale_price: 41.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/40128/98251524/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MCRR7867',
      product_name: 'Portageville Geometric Handmade Tufted Wool Ivory/Black Area Rug',
      product_description: 'This simple area rug brings modern style to your living room, bedroom, or home office. It’s handmade in India using a tufted technique and constructed of 100% wool. It features a repeated pattern of concentric diamond shapes and has a medium pile. Easily vacuumed or spot cleaned for effortless upkeep, this rug performs best when paired with a rug pad for added comfort and stability. It completes the look in any mid-century modern or bohemian setting.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/wrought-studio-portageville-geometric-handmade-tufted-wool-ivoryblack-area-rug-w005061347.html',
      class_name: 'Area Rugs',
      sale_price: 67.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/73114909/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MCRW6632',
      product_name: 'Abbate Oriental Ivory/Pink Indoor Area Rug',
      product_description: 'Add a pop of pink to any ensemble in your home with this pink and ivory area rug. Blending vintage charm with a touch of modern flair, it showcases an Oriental-inspired motif with a medallion design in the center and a matching border. Made in Turkey from 100% polypropylene (a durable synthetic fiber), this rug is an ideal anchor for high-traffic rooms. We recommend you pair this piece with a rug pad for extra cushioning and traction underfoot.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/mercury-row-abbate-oriental-ivorypink-indoor-area-rug-w001583860.html',
      class_name: 'Area Rugs',
      sale_price: 28.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/33808/123051817/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MCRW7352',
      product_name: 'Gicu Area Rug',
      product_description: 'Taking cues from modern and minimalist designs, this understated area rug showcases a subtle striated pattern in neutral ivory and gray hues that blend easily with a variety of color palettes.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/17-stories-gicu-area-rug-w006114847.html',
      class_name: 'Area Rugs',
      sale_price: 39.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/94543719/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MTNA1015',
      product_name: 'Brandt Oriental Gray Area Rug',
      product_description: 'Bare floor giving you the blues? Rolling out an area rug fixes that! This design brings boho-chic charm to any space, displaying a Persian-inspired motif with a medallion in the center and an erased-weave look for a touch of antiqued appeal. This fade- and the stain-resistant piece is perfect for placing in high-traffic areas such as the living room or entryway. No matter where it ends up, we recommend using a rug pad to keep it in place.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/mistana-brandt-oriental-gray-area-rug-w006427943.html',
      class_name: 'Area Rugs',
      sale_price: 28.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/44356/126783982/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MTNA1398',
      product_name: 'Jenifer Damask Turquoise Area Rug',
      product_description: 'Not just a way to soften the step of a hardwood or tile floor, area rugs are artful accents all their own. This design showcases a damask medallion motif accented by weathered details for a look reminiscent of a triumphant flea market find. Crafted from polypropylene, it’s also stain- and fade-resistant as well as easy to clean with regular vacuuming, making it a great pick for rolling out in high-traffic areas such as the entryway or living room.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/mistana-jenifer-damask-turquoise-area-rug-w005930600.html',
      class_name: 'Area Rugs',
      sale_price: 29.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/44356/124634137/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MTNA1678',
      product_name: 'Amanuel Dark Gray Area Rug',
      product_description: "Anchor any arrangement with this area rug, offering a distressed geometric motif in gray hues to set a stylish foundation for your eclectic ensemble. Power-loomed in Turkey from polypropylene – a durable synthetic material that resists staining and fading – this piece is an ideal anchor for high-traffic rooms in your home. Though this design's medium pile height provides a bit of cushioning underfoot, we recommend you pair it with a rug pad for additional padding and traction. To clean, we suggest a simple spot treatment with mild soap.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/union-rustic-amanuel-dark-gray-area-rug-w006489380.html',
      class_name: 'Area Rugs',
      sale_price: 27.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/37700/39714169/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MTNA1789',
      product_name: 'McAlmont Pink/Fuchsia Area Rug',
      product_description: 'Ready to stand up to high foot traffic in the entryway and take on occasional spills under the kitchen table, polypropylene rugs are ideal anchors for any mess-prone area of your abode. Take this one for example: made in Turkey, it is power-loomed from that must-have material and features an eye-catching Persian-inspired motif that rounds out modern arrangements or completes bold boho-chic ensembles. To keep this piece safely in place, we recommend using a rug pad.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/bungalow-rose-mcalmont-pinkfuchsia-area-rug-mtna1789.html',
      class_name: 'Area Rugs',
      sale_price: 36.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/37700/33491588/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MTNA1822',
      product_name: 'Brandt Floral Dark Gray Area Rug',
      product_description: 'A traditional design gets a trendy update in this dark grey area rug, showcasing an overdyed oriental motif. Made in Turkey, this area rug is power-loomed from stain and fade-resistant polypropylene in a low 0.25" pile – perfect for rolling out in high-traffic living rooms and dining spaces prone to occasional spills and stains alike. Easily spot cleaned or vacuumed for fuss-free upkeep, this area rug performs best when paired with a rug pad to prevent shifting and sliding underfoot.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/mistana-brandt-floral-dark-gray-area-rug-w005759735.html',
      class_name: 'Area Rugs',
      sale_price: 23.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/37055/56367610/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WDLN3892',
      product_name: 'Cangelosi Geometric Gray/Ivory/Brown Area Rug',
      product_description: 'A bold, contemporary pinwheel pattern defines this alluring area rug, showcasing soft hues of gray, ivory, and brown. Made in China, this rug is machine woven from a stain and fade-resistant polypropylene and acrylic blend in a high-low 0.5" pile—perfect for laying out in the living room or digging your toes in right out of bed in the morning. This rug works best when paired with a rug pad to prevent shifting and sliding.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/wade-logan-cangelosi-geometric-grayivorybrown-area-rug-w005160681.html',
      class_name: 'Area Rugs',
      sale_price: 52.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36989/122883287/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WLAO3915',
      product_name: 'Juliemarie Oriental Pink Area Rug',
      product_description: "Artful allure doesn't have to be limited to your walls! Bring a bit of that gallery-worthy beauty down to the floors of your living room or foyer with this eye-catching area rug. Made in Turkey, it is machine-woven of 100% polypropylene with a low pile height for a design that can stand up to foot traffic and the occasional spill. Plus, it easily stands out in any space thanks to a traditional Persian-inspired motif in bright hues of blue and pink.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/bungalow-rose-juliemarie-oriental-pink-area-rug-w006633484.html',
      class_name: 'Area Rugs',
      sale_price: 34.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/94193249/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WNST3848',
      product_name: 'Brickhouse Floral Ivory/Red/Green Area Rug',
      product_description: "With summer rainstorms rolling through, UV rays beating down, and plenty of foot traffic at pool parties and BBQs, your alfresco ensemble's foundation needs to be a polypropylene rug. This rug is made in Turkey and power loomed from that must-have material with a high-low pile height for easy upkeep. Plus, it brings a pop of garden-inspired style to your patio or entryway with its scrolling floral motif in hues of ivory, red, green, yellow, and blue.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/sol-72-outdoor-brickhouse-floral-ivoryredgreen-area-rug-w005243477.html',
      class_name: 'Area Rugs',
      sale_price: 54.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/55775329/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ZPCD5905',
      product_name: 'Waterford Handmade Braided Cotton Multicolor Area Rug',
      product_description: 'Looks aside, area rugs help absorb and decrease noise as they soften the step of hardwood and tile flooring. Made in India, this one is constructed from cotton, a popular material in rug production due to its high resistance to stains, fading, and moisture. Its multicolored braided look gives your floors a bright pop of pattern. Plus, it features a medium 0.5" pile height, ideal for promoting a cozy and inviting feel to your space with the added benefit of being easy to clean.',
      product_page_url: 'https://www.wayfair.com/rugs/pdp/zipcode-design-waterford-handmade-braided-cotton-multicolor-area-rug-w005270617.html',
      class_name: 'Area Rugs',
      sale_price: 32.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/30593/55591222/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ZPCD6981',
      product_name: 'Abbie Abstract Light Blue Area Rug',
      product_description: "No matter which room you’re decorating, an area rug can help pull the ensemble together. This design, for example, sports an abstract geometric pattern that’s suited for modern and transitional spaces. Crafted from stain- and fade-resistant fibers, it features a 0.4'' pile height that encourages underfoot comfort while remaining easy to clean with regular vacuuming. Wherever you place it, we recommend pairing it with a rug pad to prevent it from shifting.",
      product_page_url: 'https://www.wayfair.com/rugs/pdp/winston-porter-abbie-abstract-light-blue-area-rug-w005060693.html',
      class_name: 'Area Rugs',
      sale_price: 34.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/44308/113422699/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'BCHH7421',
      product_name: 'Wrenshall Etagere Bookcase',
      product_description: 'A traditional silhouette gets a contemporary update in this etagere bookcase. Crafted of solid and manufactured wood in a classic painted finish, this bookcase features tasteful moldings, a slatted backing, and x-shaped panel sides. Each clean-lined shelf provides a perfect platform for displaying everything from rows of your favorite reads to framed photos and collected curios. Shipped flat-packed, this bookcase requires full assembly and should take a team of two about 60 minutes to complete.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/breakwater-bay-wrenshall-etagere-bookcase-w001974641.html',
      class_name: 'Bookcases',
      sale_price: 129.66,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/65344187/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'CLOP1021',
      product_name: '47.56" H x 35.91" W Cube Bookcase',
      product_description: 'Go ahead, show off your storage with the Cubeicals Cube Bookcase from ClosetMaid. Featuring a clean-lined silhouette with plenty of open compartments, this organizer is perfect for storing books, media, mementos, and decor.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/closetmaid-4756-h-x-3591-w-cube-bookcase-clop1021.html',
      class_name: 'Bookcases',
      sale_price: 123.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/36069/16377394/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LRFY1920',
      product_name: 'Arturs 56.75" H x 23.5" W Bookcase',
      product_description: "Blending the charm of farmhouse aesthetics with modern minimalism, this understated bookcase brings on-trend style to any space in your home. an ideal option for smaller spaces, while its clean lines and open design ensure it won't overwhelm an existing arrangement. Stack it, store it, and display it on this 4-shelf bookcase from this collection. This tall bookcase features four shelves that are perfect for displaying a variety of different items like your collection of knick-knacks, decorative plants, and framed photos of your family and friends. These roomy shelves on this wood and metal bookcase also make a great spot to stow items like binders, books, board games, and another home décor. With a simple design that flatters your current home aesthetics while showcasing the items you place on it; this open shelf bookcase has the multifunctional purpose you've been looking for without taking away from the items that you place on it. Finished on all sides, this 4-shelf bookcase will look polished from every angle. With a durable, black metal frame, this versatile library make will be the perfect finishing touch to any room.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/17-stories-arturs-5675-h-x-235-w-bookcase-w005061473.html',
      class_name: 'Bookcases',
      sale_price: 96.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/42526/41294446/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'MCRF5348',
      product_name: 'Trocadero 72" H x 40" W Steel Geometric Bookcase',
      product_description: 'Elevate your living space with the warm elegance, graceful flair, and deco-modern design of the Trocadero geometric bookcase. A wonderful focal point brimming with architectural charm, this handsome bookcase features a square tubular metal frame with a chic finish, two faux marble shelves placed in a geometric pattern, three sturdy tempered glass shelves, and a lower metal shelf. Stylish and compact, the Trocadero blends sleek sophistication with luxurious charm, giving you a wealth of space to exhibit your favorite books, collectibles, or accents. The Trocadero also works beautifully in your home office to store all your files and writing essentials. A pronounced example of strength and beauty, the open geometric design gives this luxe, modern unit considerable and creative storage and display solutions. The Trocadero geometric bookcase conveys a stylish and clean design that compliments any room, making it the perfect addition to your home.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/etta-avenue-trocadero-72-h-x-40-w-steel-geometric-bookcase-w006428198.html',
      class_name: 'Bookcases',
      sale_price: 259.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/2664/94703632/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'SEHO2183',
      product_name: 'Evanjames 47.5" H x 53.13" W Standard Bookcase',
      product_description: 'Stack, store and display. Create a versatile storage and display area in your home while adding beautiful style and design with this bookcase from the Barrister Lane® collection. This good-looking bookshelf features ten spacious cubbyholes that are ideal for storing items like stacks of books, school binders, baskets and organizing bins. These cubbyholes also make a great spot to display home décor items like decorative plants, collectables and framed photos of the family. This cubby bookcase accommodates ID label tags so you can keep track of all your stuff. The spacious top shelf with a gallery display is perfect for displaying other household items like sweet smelling potpourri and your array of knick-knacks. Style this storage bookcase how you like – its reversible back panel features both Cobblestone and a White Plank® finish. Finished in White Plank®, this one-of-a-kind cubbyhole bookcase will have your home feeling organized and clutter-free in no time.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/gracie-oaks-evanjames-475-h-x-5313-w-standard-bookcase-w005063933.html',
      class_name: 'Bookcases',
      sale_price: 255.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/37308/67362061/1/furniture%2Fpdp%2Fgracie-oaks-evanjames-475-h-x-5313-w-standard-bookcase.jpg',
      model: [Object]
    },
    {
      sku: 'ZPCD1459',
      product_name: 'Ricardo 70" H x 21.63" W Ladder Bookcase',
      product_description: 'Make your space your own with this ladder bookcase, perfect for putting framed photos, artful accents, or a collection of novels proudly on display. Assembly is required. The manufacturer backs this product with a one-year warranty.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/zipcode-design-ricardo-70-h-x-2163-w-ladder-bookcase-w003876428.html',
      class_name: 'Bookcases',
      sale_price: 89.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/82567585/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ZPCD6675',
      product_name: 'Jaie 60.125" H x 25.75" W Ladder Bookcase',
      product_description: 'Equally ideal for staging and storage space, this etagere-style bookcase is a must-have for your abode. Keep it centered against a blank wall in the entryway to put framed family photos on display atop its five open shelves, then add in woven wicker bins to keep out-the-door accessories on hand. Taking on a stylish leaning silhouette, this distinctive design is crafted from laminate wood with a gently weathered gray finish.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/gracie-oaks-jaie-60125-h-x-2575-w-ladder-bookcase-w006111097.html',
      class_name: 'Bookcases',
      sale_price: 235.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/2664/47459214/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'DBHC6310',
      product_name: 'Mathis Lift Top 4 Legs Coffee Table with Storage',
      product_description: 'You may think of a trunk as a simple place to rest movie night snacks and after-work snacks, but they can be much more! With both traditional style and versatile function, this lovely coffee table brings more to your ensemble. The simple silhouette and neutral oak-toned color palette give this table its classic look, while the antiqued hardware and rich oil-rubbed stain add a touch of vintage appeal that never goes out of style. More than just stylish, this table also features a spring-loaded rising tabletop, both front and side drawers, and caster feet. This lovely coffee table is at the center of your living room to anchor your space in classic style, then build on the traditional appeal by rolling out a blue Persian rug and adding a brown leather Chesterfield sofa.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/darby-home-co-mathis-lift-top-4-legs-coffee-table-with-storage-w000571260.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 399.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36984/27299479/1/Woolwich%2BTrunk%2BCoffee%2BTable%2Bwith%2BLift-Top.jpg',
      model: [Object]
    },
    {
      sku: 'IVBX2371',
      product_name: 'Sydnor 4 Legs Coffee Table',
      product_description: 'Is the seating ensemble feeling empty? Try a coffee table! Not only do they anchor your space, but they offer room to stage a display and serve up trays of treats when you find yourself entertaining. Take this one for example: Crafted from powder-coated steel, the frame showcases clean lines and boasts a solid color for a look that blends easily with your current color palette. Plus, it features two glass tiers for keeping books, beverages, and beyond.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/ivy-bronx-sydnor-4-legs-coffee-table-w004259109.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 189.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/1261/45106345/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'IVYB7137',
      product_name: 'Evadne Coffee Table',
      product_description: "A practical piece for any living room, this coffee tables offer a platform for seasonal decor and brings contemporary appeal to your home. Crafted from metal with a brushed nickel finish, the stylish frame features four angled legs connected to a square base. Set to the frame by suction cup hooks, its clear glass tabletop features beveled edges and measures 34.13'' W x 34.13'' D, leaving plenty of real estate available in your living room ensemble. Assembly is required, but no tools are needed.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/ivy-bronx-evadne-coffee-table-w007030319.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 219.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2668/51727997/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LFMF1830',
      product_name: 'Isakson Trestle Coffee Table with Storage',
      product_description: 'Bring a touch of charming style (and essential tablespace) to your side with these lovely tables. Perfect set beside or in front of your favorite armchair or sectional sofa, it has a clean-lined frame crafted from solid and manufactured wood. It takes inspiration from both modern and farmhouse aesthetics, showcases x-cross sides and a planked-style top. It features a convenient lower shelf to display your belongings.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/isakson-trestle-coffee-table-with-storage-w005270699.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 247.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/29633/41687288/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LGLY2659',
      product_name: 'Quince 4 Legs Coffee Table',
      product_description: 'A nice coffee table is almost as good as a nice cup of coffee. Almost. Whether using it as the perfect perch for your remote control or morning mug, coffee tables are a staple in the home. Take this one for example: Crafted from manufactured wood, this piece comes perched atop bent tapered legs, while its tabletop showcases a round silhouette that makes this table work well in any contemporary arrangement. Awash in a neutral hue, it even comes backed by a one-year warranty for your assurance.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/allmodern-quince-4-legs-coffee-table-w003530082.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 346.61,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36991/29241181/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LRFY7375',
      product_name: 'Kendralyn Frame Coffee Table with Storage',
      product_description: 'When movie marathons and cocktail parties come around, you’ll be happy to have this clean-lined coffee table at your side. Crafted with a finished frame, this budget-friendly piece features two tiers made from wood in a natural finish for a neutral and understated look.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/17-stories-kendralyn-frame-coffee-table-with-storage-w004778914.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 179.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/42526/43997462/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ORNE1883',
      product_name: 'Jordyan 4 Legs Coffee Table with Storage',
      product_description: 'Is the seating ensemble feeling empty? Try a Jordyan Coffee Table with Storage. Not only do they anchor your space, but they offer room to stage a display and serve up trays of treats when you find yourself entertaining. Take this one for example: crafted from iron, its base features four straight legs and strikes a circular silhouette. Its tempered glass tabletop rounds out the design, and a lower-tier provides a platform for books, magazines, and more!',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/ebern-designs-jordyan-4-legs-coffee-table-with-storage-w005483983.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 203.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/1261/40631058/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'RDBT4847',
      product_name: 'Revere Lift Top Coffee Table with Storage',
      product_description: 'This coffee table has got a secret; it loves a clutter-free home! Crafted from a manufactured wood frame, it strikes a clean-lined silhouette while the neutral dark brown finish complements nearly any design aesthetic or color palette. Plus, the hinged tabletop lifts to provide a heightened surface when enjoying a meal or working on your laptop. Down below, it sports two open shelves for keeping folded blankets, movies, and more!',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/red-barrel-studio-revere-lift-top-coffee-table-with-storage-w004436552.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 245.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/34591/55521045/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WADL4054',
      product_name: 'Gethin Floor Shelf Coffee Table with Storage',
      product_description: "This coffee table has a mid-century modern design that provides plenty of style and storage space. It measures 47.25'' long and is made of engineered wood with a glam glossy white finish. The top surface appears continuous and overlaps to create three shelves with sleek chrome supports. We love the look of this coffee table on a luxe rug that frames it with color – immediately adding some contrasting depth to your living room.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/etta-avenue-gethin-floor-shelf-coffee-table-with-storage-w005483460.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 469.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36989/84493095/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'WRLO2038',
      product_name: 'Dingman Coffee Table',
      product_description: "Sprinkle a touch of glamour into your living room layout with this chic coffee table. Crafted from manufactured ash wood, this rectangular design is finished in matte silver and lined with mirrored panels to reflect lots of light throughout your space. Use its smooth top to show off your favorite art books, magazines, or floral arrangements. This four-legged piece measures 18'' H x 42'' L x 23'' W. It requires assembly upon arrival.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/house-of-hampton-dingman-coffee-table-w002810649.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 309.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/37313/46836970/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'ZPCD1733',
      product_name: 'Appalachia Sled Coffee Table with Storage',
      product_description: "Center your well-appointed living room or den seating group in simple style with this essential coffee table, the perfect balance of clean-lined, loft-worthy looks, and effortless utility. It's made from engineered wood in a glossy black finish and is defined by a simple silhouette with classic wood grain details. This piece offers a neutral touch to your look, while its open side shelves and wide drawers are ideal for tucking away books, magazines, and remotes. Plus, its sleek metal bar pulls give this table a touch of accent.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/zipcode-design-appalachia-sled-coffee-table-with-storage-w003244349.html',
      class_name: 'Coffee & Cocktail Tables',
      sale_price: 264.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/36987/18351794/1/Lark%2BCoffee%2BTable.jpg',
      model: [Object]
    },
    {
      sku: 'ALTH6694',
      product_name: 'Lillian Upholstered Solid Back Skirted Side Chair',
      product_description: 'Equally suited to deck out the dining room or spruce up an unused corner of the living room, this versatile dining chair brings a touch of traditional style to any space. Proudly made in the USA, this piece is made with a wood frame, foam fill, sinuous spring support, and polyester-cotton fabric upholstery. When it comes to style, this design showcases a pleated skirt and a rolled back for plenty of classic character. And since it’s available in a variety of upholstery options, you’re bound to find the perfect color. Hand-curated by Kelly Clarkson.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/kelly-clarkson-home-lillian-upholstered-solid-back-skirted-side-chair-w002846364.html',
      class_name: 'Dining Chairs',
      sale_price: 245.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/40128/43552745/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'BCHH7332',
      product_name: 'Aulii Solid Wood Slat Back Dining Chair',
      product_description: 'This dining chair is great for use as extra seating during a family feast or when you’re short a seat during a hand of cards. It arrives in a set of two and is crafted from solid rubberwood in a variety of finishes to choose from that best fit your space. Each chair is perched on top of flared legs, and it showcases a slatted back for an open look. After assembly, these chairs can support up to 250 lbs.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/ebern-designs-aulii-solid-wood-slat-back-dining-chair-w005486207.html',
      class_name: 'Dining Chairs',
      sale_price: 172.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/37308/127214039/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'BL18281',
      product_name: 'Luqman Solid Wood Slat Back Side Chair',
      product_description: "Between dinner parties, festive family feasts, and casual meals alike – your dining room is often entertaining! Spruce up your ensemble for all sorts of events with this stylish side chair. Traditional with its angled legs and rounded spindle back, this solid rubberwood design is still versatile with a neutral solid finish. Measures 35.5'' H x 17.75'' W x 20.75'' D. Assembly for this product is required.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/highland-dunes-luqman-solid-wood-slat-back-side-chair-w004360378.html',
      class_name: 'Dining Chairs',
      sale_price: 149.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/25006/34139319/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LGLY2171',
      product_name: 'Argie Arm Chair',
      product_description: "Inspired by iconic mid-century modern design, this marvelous molded armchair makes an artful addition to any seating ensemble. Its molded-plastic seat features a sculpted, swooping back, gently turned arms, and a contoured seat. Four round, tapered, solid wood legs flare out for an architectural appearance, while metal cross braces offer extra support. Since this piece is made from plastic, it's water-resistant, making it a great choice for the kitchen table.",
      product_page_url: 'https://www.wayfair.com/furniture/pdp/wade-logan-argie-arm-chair-w004998755.html',
      class_name: 'Dining Chairs',
      sale_price: 98.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/36991/37202205/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LGLY5216',
      product_name: 'Siyana Side Chair',
      product_description: 'Inspired by mid-century designs, this lovely chair brings contemporary style and inviting appeal to your ensemble. Perfect in your dining room or pulled up to your desk, is showcasing a chic retro frame with rounded seats and flared legs. The seat is crafted from polypropylene, which is contoured to fit the body, and it is available in multiple solid, crisp finishes, so you can find the right hue for your home. The beech wood legs are connected with black crisscross accenting.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/george-oliver-siyana-side-chair-w005272617.html',
      class_name: 'Dining Chairs',
      sale_price: 93.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/2664/49117165/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LGLY6932',
      product_name: 'Stesha Upholstered Side Chair',
      product_description: 'Modern design gets an industrial update in this stylish side chair! Enveloped in a blend of faux leather upholstery, this chair showcases a full back and a gently contoured seat. Detail stitching lends a tailored touch, while foam padding provides added comfort and support. Sporting a clean black finish, four tapered metal legs complete the design. Arriving in a set of two, these chairs are sure to elevate your dining room game.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/wade-logan-stesha-upholstered-side-chair-w003529633.html',
      class_name: 'Dining Chairs',
      sale_price: 136.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/2664/89687320/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LOON2803',
      product_name: 'Tanan Slat Back Side Chair in Rustic Brown/Purple',
      product_description: 'Bring a versatile style to your dining arrangement with this chair. Crafted from solid wood, it sports a rustic brown finish designed to pair well with a variety of color schemes, while a slat-style back and slightly tapered feet lend this piece its classic charm. Polyester microfiber upholstery on the seat offers comfort as you and your guests kick back and relax.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/lark-manor-tanan-slat-back-side-chair-in-rustic-brownpurple-w003137718.html',
      class_name: 'Dining Chairs',
      sale_price: 64.99,
      thumbnail_image_url: 'https://secure.img.wfcdn.com/lf/43/hash/37311/27051074/1/custom_image.jpg',
      model: [Object]
    },
    {
      sku: 'LRFY6447',
      product_name: 'Rahate Cross Back Side Chair',
      product_description: 'This farmhouse-style dining chair brings a rustic feel to your dining space. It’s made from solid wood with synthetic fiber upholstery. This chair features a barn-inspired cross back and rounded-edge seat with a woven rattan upholstery design. Slightly splayed legs connected by arched details on each side round out this chair, creating a classic piece that works in any traditional home. An armless design allows this chair to slide easily under your dining table, or double as extra living room seating.',
      product_page_url: 'https://www.wayfair.com/furniture/pdp/august-grove-rahate-cross-back-side-chair-w005269545.html',
      class_name: 'Dining Chairs',
      sale_price: 179.99,
      thumbnail_image_url: 'https://secure.img1.wfcdn.com/lf/43/hash/42526/57485437/1/custom_image.jpg',
      model: [Object]
    }
]