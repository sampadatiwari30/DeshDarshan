// js/statesData.js

const indianStatesAndUTs = [
    // --- States ---
    {
        id: 'ap',
        name: 'Andhra Pradesh',
        capital: 'Amaravati',
        image: 'andhrapradesh.jpeg', // Corrected path
        shortDescription: 'Known as the "Rice Bowl of India," famous for its rich cultural heritage and historical sites.',
        detailsLink: 'pages/state-info.html?id=ap'

    },
    {
        id: 'ar',
        name: 'Arunachal Pradesh',
        capital: 'Itanagar',
        image: 'arunachalpradesh.jpeg', // Corrected path
        shortDescription: 'The "Land of the Dawn-Lit Mountains" in Northeast India, offering stunning landscapes and diverse tribal cultures.',
        detailsLink: 'exploreindia.html#arunachal-pradesh'
    },
    {
        id: 'as',
        name: 'Assam',
        capital: 'Dispur',
        image: 'assam.jpeg', // Corrected path
        shortDescription: 'Famous for its tea plantations, mighty Brahmaputra river, and the unique one-horned rhinoceros.',
        detailsLink: 'exploreindia.html#assam'
    },
    {
        id: 'br',
        name: 'Bihar',
        capital: 'Patna',
        image: 'bihar.jpeg', // Corrected path
        shortDescription: 'A historically rich state, the birthplace of Buddhism and Jainism, with ancient universities like Nalanda.',
        detailsLink: 'exploreindia.html#bihar'
    },
    {
        id: 'cg',
        name: 'Chhattisgarh',
        capital: 'Raipur',
        image: 'chhattisgarh.jpeg', // Corrected path
        shortDescription: 'Known for its ancient temples, waterfalls, and rich tribal heritage, often called the "Rice Bowl of Central India."',
        detailsLink: 'exploreindia.html#chhattisgarh'
    },
    {
        id: 'ga',
        name: 'Goa',
        capital: 'Panaji',
        image: 'goa.jpeg', // Corrected path
        shortDescription: 'India\'s smallest state, globally renowned for its beautiful beaches, vibrant nightlife, and Portuguese architecture.',
        detailsLink: 'exploreindia.html#goa'
    },
    {
        id: 'gj',
        name: 'Gujarat',
        capital: 'Gandhinagar',
        image: 'gujarat.jpeg', // Corrected path
        shortDescription: 'The "Jewel of Western India," known for its rich history, diverse culture, and Mahatma Gandhi\'s birthplace.',
        detailsLink: 'exploreindia.html#gujarat'
    },
    {
        id: 'hr',
        name: 'Haryana',
        capital: 'Chandigarh',
        image: 'haryana.jpeg', // Corrected path
        shortDescription: 'A prosperous agricultural state surrounding the national capital Delhi, with a strong cultural identity.',
        detailsLink: 'exploreindia.html#haryana'
    },
    {
        id: 'hp',
        name: 'Himachal Pradesh',
        capital: 'Shimla',
        image: 'himachal.jpeg', // Corrected path, assuming 'himachal.jpeg' from screenshot
        shortDescription: 'A serene Himalayan state, popular for its stunning hill stations, adventure sports, and spiritual retreats.',
        detailsLink: 'exploreindia.html#himachal-pradesh'
    },
    {
        id: 'jh',
        name: 'Jharkhand',
        capital: 'Ranchi',
        image: 'jharkhand.jpeg', // Corrected path
        shortDescription: 'Known for its dense forests, waterfalls, rich mineral resources, and tribal culture.',
        detailsLink: 'exploreindia.html#jharkhand'
    },
    {
        id: 'ka',
        name: 'Karnataka',
        capital: 'Bengaluru',
        image: 'karnataka.jpeg', // Corrected path
        shortDescription: 'The "Silicon Valley of India," famous for its technology hub, historical sites, and diverse landscapes.',
        detailsLink: 'exploreindia.html#karnataka'
    },
    {
        id: 'kl',
        name: 'Kerala',
        capital: 'Thiruvananthapuram',
        image: 'kerala.jpeg', // Corrected path
        shortDescription: 'God\'s Own Country," renowned for its tranquil backwaters, pristine beaches, and lush greenery.',
        detailsLink: 'exploreindia.html#kerala'
    },
    {
        id: 'mp',
        name: 'Madhya Pradesh',
        capital: 'Bhopal',
        image: 'mp.jpeg', // Corrected path, assuming 'mp.jpeg' from screenshot
        shortDescription: 'The "Heart of India," known for its wildlife sanctuaries, ancient temples, and historical sites.',
        detailsLink: 'exploreindia.html#madhya-pradesh'
    },
    {
        id: 'mh',
        name: 'Maharashtra',
        capital: 'Mumbai',
        image: 'mah.jpeg', // Corrected path, assuming 'mah.jpeg' from screenshot
        shortDescription: 'A vibrant state with India\'s financial capital, known for its Bollywood industry, historical forts, and diverse culture.',
        detailsLink: 'exploreindia.html#maharashtra'
    },
    {
        id: 'mn',
        name: 'Manipur',
        capital: 'Imphal',
        image: 'mani.jpeg', // Corrected path, assuming 'mani.jpeg' from screenshot
        shortDescription: 'A beautiful jewel of Northeast India, known for its classical dance, rich culture, and Loktak Lake.',
        detailsLink: 'exploreindia.html#manipur'
    },
    {
        id: 'ml',
        name: 'Meghalaya',
        capital: 'Shillong',
        image: 'megh.jpeg', // Corrected path, assuming 'megh.jpeg' from screenshot
        shortDescription: 'The "Abode of Clouds," famous for its heavy rainfall, living root bridges, and picturesque landscapes.',
        detailsLink: 'exploreindia.html#meghalaya'
    },
    {
        id: 'mz',
        name: 'Mizoram',
        capital: 'Aizawl',
        image: 'mizo.jpeg', // Corrected path, assuming 'mizo.jpeg' from screenshot
        shortDescription: 'Known as the "Land of the Hill People," with lush green landscapes, rich tribal culture, and vibrant festivals.',
        detailsLink: 'exploreindia.html#mizoram'
    },
    {
        id: 'nl',
        name: 'Nagaland',
        capital: 'Kohima',
        image: 'naga.jpeg', // Corrected path, assuming 'naga.jpeg' from screenshot
        shortDescription: 'Known for its rich cultural heritage, diverse tribes, and the Hornbill Festival.',
        detailsLink: 'exploreindia.html#nagaland'
    },
    {
        id: 'od',
        name: 'Odisha',
        capital: 'Bhubaneswar',
        image: 'odisha.jpeg', // Corrected path
        shortDescription: 'Famous for its ancient temples, tribal cultures, and pristine beaches along the Bay of Bengal.',
        detailsLink: 'exploreindia.html#odisha'
    },
    {
        id: 'pb',
        name: 'Punjab',
        capital: 'Chandigarh',
        image: 'pun.jpeg', // Corrected path, assuming 'pun.jpeg' from screenshot
        shortDescription: 'The "Land of Five Rivers," known for its vibrant culture, rich history, and the Golden Temple.',
        detailsLink: 'exploreindia.html#punjab'
    },
    {
        id: 'rj',
        name: 'Rajasthan',
        capital: 'Jaipur',
        image: 'raj.jpeg', // Corrected path, assuming 'raj.jpeg' from screenshot
        shortDescription: 'The "Land of Kings," famous for its majestic forts, palaces, vibrant culture, and vast deserts.',
        detailsLink: 'exploreindia.html#rajasthan'
    },
    {
        id: 'sk',
        name: 'Sikkim',
        capital: 'Gangtok',
        image: 'sikkim.jpeg', // Corrected path
        shortDescription: 'A beautiful Himalayan state known for its pristine natural beauty, monasteries, and trekking routes.',
        detailsLink: 'exploreindia.html#sikkim'
    },
    {
        id: 'tn',
        name: 'Tamil Nadu',
        capital: 'Chennai',
        image: 'tamil.jpeg', // Corrected path, assuming 'tamil.jpeg' from screenshot
        shortDescription: 'A state rich in ancient Dravidian culture, classical arts, and magnificent temples.',
        detailsLink: 'exploreindia.html#tamilnadu'
    },
    {
        id: 'ts',
        name: 'Telangana',
        capital: 'Hyderabad',
        image: 'tel.jpeg', // Corrected path, assuming 'tel.jpeg' from screenshot
        shortDescription: 'Known for its historical landmarks, rich cultural heritage, and growing IT industry.',
        detailsLink: 'exploreindia.html#telangana'
    },
    {
        id: 'tr',
        name: 'Tripura',
        capital: 'tri.jpeg', // Corrected path, assuming 'tri.jpeg' from screenshot
        shortDescription: 'A small state in Northeast India known for its historical palaces, temples, and rich tribal heritage.',
        detailsLink: 'exploreindia.html#tripura'
    },
    {
        id: 'up',
        name: 'Uttar Pradesh',
        capital: 'Lucknow',
        image: 'up.jpeg', // Corrected path, assuming 'up.jpeg' from screenshot
        shortDescription: 'The most populous state, home to iconic landmarks like the Taj Mahal and significant religious sites.',
        detailsLink: 'exploreindia.html#uttar-pradesh'
    },
    {
        id: 'uk',
        name: 'Uttarakhand',
        capital: 'Dehradun',
        image: 'utari.jpeg', // Corrected path, assuming 'utari.jpeg' from screenshot
        shortDescription: 'A Himalayan state known for its pilgrimage sites, stunning natural beauty, and adventure sports.',
        detailsLink: 'exploreindia.html#uttarakhand'
    },
    {
        id: 'wb',
        name: 'West Bengal',
        capital: 'Kolkata',
        image: 'wb.jpeg', // Corrected path, assuming 'wb.jpeg' from screenshot
        shortDescription: 'Known for its rich cultural and literary heritage, delicious cuisine, and the Sundarbans mangroves.',
        detailsLink: 'exploreindia.html#west-bengal'
    },

    // --- Union Territories ---
    {
        id: 'an',
        name: 'Andaman and Nicobar Islands',
        capital: 'Port Blair',
        image: 'A&N.jpeg', // Corrected path, assuming 'A&N.jpeg' from screenshot
        shortDescription: 'A tropical paradise in the Bay of Bengal, known for its pristine beaches, coral reefs, and historical sites.',
        detailsLink: 'exploreindia.html#andaman-nicobar'
    },
    {
        id: 'ch',
        name: 'Chandigarh',
        capital: 'Chandigarh',
        image: 'chandi.jpeg', // Corrected path, assuming 'chandi.jpeg' from screenshot
        shortDescription: 'A city and union territory, renowned for its modern architecture, urban planning, and serene gardens.',
        detailsLink: 'exploreindia.html#chandigarh'
    },
    {
        id: 'dn',
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        capital: 'Daman',
        image: 'dadra.jpeg', // Corrected path, assuming 'dadra.jpeg' from screenshot
        shortDescription: 'A union territory in Western India, known for its industrial development, historical forts, and natural beauty.',
        detailsLink: 'exploreindia.html#dadra-nagar-haveli-daman-diu'
    },
    {
        id: 'dl',
        name: 'Delhi',
        capital: 'New Delhi',
        image: 'delhi.jpeg', // Corrected path
        shortDescription: 'The vibrant capital city of India, a blend of ancient history, diverse cultures, and modern urban life.',
        detailsLink: 'exploreindia.html#delhi'
    },
    {
        id: 'jk',
        name: 'Jammu and Kashmir',
        capital: 'Srinagar (Summer), Jammu (Winter)',
        image: 'j&k.jpeg', // Corrected path, assuming 'j&k.jpeg' from screenshot
        shortDescription: 'A beautiful Himalayan region known for its stunning landscapes, serene lakes, and rich cultural heritage.',
        detailsLink: 'exploreindia.html#jammu-kashmir'
    },
    {
        id: 'ld',
        name: 'Lakshadweep',
        capital: 'Kavaratti',
        image: 'lak.jpeg', // Corrected path, assuming 'lak.jpeg' from screenshot
        shortDescription: 'A group of pristine coral islands in the Arabian Sea, famous for its turquoise waters and marine life.',
        detailsLink: 'exploreindia.html#lakshadweep'
    },
    {
        id: 'la',
        name: 'Ladakh',
        capital: 'Leh',
        image: 'ladakh.jpeg', // Corrected path
        shortDescription: 'The "Land of High Passes," known for its breathtaking mountainous landscapes, Buddhist monasteries, and unique culture.',
        detailsLink: 'exploreindia.html#ladakh'
    },
    {
        id: 'py',
        name: 'Puducherry',
        capital: 'Puducherry',
        image: 'puddu.jpeg', // Corrected path, assuming 'puddu.jpeg' from screenshot
        shortDescription: 'A former French colony, known for its unique blend of French and Indian cultures, beautiful beaches, and spiritual aura.',
        detailsLink: 'exploreindia.html#puducherry'
    }
];