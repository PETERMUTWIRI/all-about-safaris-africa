'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PackageCard } from './PackageCard';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

// ALL ORIGINAL IMAGE URLs PRESERVED
const packages = [
  {
    id: 1,
    title: "Maasai Mara Grand Safari",
    duration: "12 days",
    price: "$2,899", // Reduced from $3,100
    originalImage: "packages-1.jpg", // ✅ ORIGINAL URL
    locations: "Maasai Mara/Mount Kenya/Amboseli/Nakuru/Nairobi",
    description: "Ultimate Kenyan safari covering all major parks with Mount Kilimanjaro views and Big Five encounters.",
    days: "12 Day Package",
    category: "Premium Safari",
    variant: 'left' as const,
    fullDescription: "Experience Kenya's most iconic wildlife destinations on this comprehensive 12-day journey. From the legendary Masai Mara to the snow-capped Mount Kenya, this safari delivers unmatched wildlife diversity, cultural encounters, and luxury accommodations. Perfect for first-time visitors seeking the complete Kenyan experience.",
    itinerary: [
      { day: 1, title: "Nairobi - Masai Mara", description: "Morning pickup from your Nairobi hotel. Drive through the Great Rift Valley with scenic stops. Afternoon game drive in Masai Mara. Dinner and overnight at luxury tented camp." },
      { day: 2, title: "Masai Mara Full Day", description: "Full day game drives with picnic lunch. Witness the Great Migration (Jul-Oct) and spot lions, cheetahs, elephants, and giraffes. Optional Maasai village visit." },
      { day: 3, title: "Masai Mara - Lake Nakuru", description: "Morning game drive en route to Lake Nakuru. Afternoon flamingo viewing and rhino sanctuary visit. Overnight at lakefront lodge." },
      { day: 4, title: "Lake Nakuru - Amboseli", description: "Early morning bird watching. Drive to Amboseli via Nairobi. Evening game drive with Mount Kilimanjaro backdrop." },
      { day: 5, title: "Amboseli Full Day", description: "Full day in Amboseli. Large elephant herds, buffalo, and spectacular Kilimanjaro views. Sundowner at Observation Hill." },
      { day: 6, title: "Amboseli - Mount Kenya", description: "Morning game drive. Drive to Mount Kenya region. Afternoon forest walk or relax at mountain lodge." },
      { day: 7, title: "Mount Kenya - Samburu", description: "Scenic drive north to Samburu. Afternoon game drive to spot unique species like Grevy's zebra and reticulated giraffe." },
      { day: 8, title: "Samburu Full Day", description: "Full day exploring Samburu's arid beauty. Visit Ewaso Ng'iro River. Cultural interaction with Samburu warriors." },
      { day: 9, title: "Samburu - Ol Pejeta", description: "Drive to Ol Pejeta Conservancy. Visit chimpanzee sanctuary and rhino sanctuary. Evening game drive." },
      { day: 10, title: "Ol Pejeta - Lake Naivasha", description: "Morning game drive. Drive to Lake Naivasha. Afternoon boat ride to see hippos and fish eagles." },
      { day: 11, title: "Lake Naivasha - Nairobi", description: "Visit Crescent Island for walking safari. Return to Nairobi. Afternoon city tour or shopping." },
      { day: 12, title: "Nairobi Departure", description: "Visit David Sheldrick Elephant Orphanage and Giraffe Centre. Transfer to airport for departure." }
    ],
    includes: ["Transport in 4x4 Land Cruiser with pop-up roof", "Professional English-speaking driver-guide", "Accommodation in luxury lodges/tented camps", "All meals (Full board)", "Park entry fees for all parks", "Airport transfers", "Bottled water (1 liter per person daily)", "Game drives as per itinerary", "Boat ride at Lake Naivasha", "Visit to Maasai village", "Complimentary binoculars", "Safari hat and T-shirt"],
    excludes: ["International flights", "Visa fees ($50)", "Travel insurance ($50-$100)", "Personal items and souvenirs", "Alcoholic beverages and soft drinks", "Tips for guide and staff ($10-$15 per day)", "Optional hot air balloon ($450)", "Laundry services", "Any items not mentioned as included"]
  },
  {
    id: 2,
    title: "Lake Nakuru & Bogoria Escape",
    duration: "2 days",
    price: "$399", // Reduced from $449
    originalImage: "packages-2.jpeg", // ✅ ORIGINAL URL
    locations: "Lake Nakuru/Lake Bogoria",
    description: "Quick getaway to see flamingos, rhinos, and geysers. Perfect for time-constrained travelers.",
    days: "2 Day Package",
    category: "Short Escape",
    variant: 'right' as const,
    fullDescription: "A perfect weekend escape to Kenya's stunning Rift Valley lakes. Witness millions of flamingos painting Lake Nakuru pink, spot endangered rhinos, and marvel at the boiling geysers of Lake Bogoria. This compact safari delivers maximum wildlife encounters in minimum time.",
    itinerary: [
      { day: 1, title: "Nairobi - Lake Nakuru", description: "Early morning pickup from Nairobi. Drive through Great Rift Valley to Lake Nakuru. Afternoon game drive to see flamingos, rhinos, lions, and leopards. Dinner and overnight at lakefront lodge." },
      { day: 2, title: "Lake Nakuru - Lake Bogoria - Nairobi", description: "Morning game drive in Nakuru. Drive to Lake Bogoria to see hot springs and geysers. Afternoon return to Nairobi, arriving by 6 PM." }
    ],
    includes: ["Transport in safari minivan or 4x4", "Professional driver-guide", "Accommodation in mid-range lodge", "All meals (Full board)", "Park entry fees", "Bottled water", "Hotel pickup and drop-off"],
    excludes: ["Personal expenses", "Drinks", "Tips", "Visa fees", "Travel insurance"]
  },
  {
    id: 3,
    title: "Amboseli & Tsavo Classic",
    duration: "5 days",
    price: "$1,099", // Reduced from $1,150
    originalImage: "packages-3.jpg", // ✅ ORIGINAL URL
    locations: "Amboseli/Tsavo East/West",
    description: "Elephants, Kilimanjaro views, and volcanic landscapes. Perfect introduction to Kenya's southern parks.",
    days: "5 Days Package",
    category: "Classic Safari",
    variant: 'left' as const,
    fullDescription: "Experience Kenya's southern circuit featuring Amboseli's elephants against Mount Kilimanjaro and Tsavo's dramatic volcanic landscapes. This 5-day adventure combines wildlife, geology, and authentic safari atmosphere in two of Kenya's most iconic parks.",
    itinerary: [
      { day: 1, title: "Nairobi - Amboseli", description: "Morning drive to Amboseli. Afternoon game drive with Kilimanjaro views. Spot large elephant herds. Overnight at lodge." },
      { day: 2, title: "Amboseli Full Day", description: "Full day game drives. Visit Observation Hill for panoramic views. Sundowner with Kilimanjaro backdrop." },
      { day: 3, title: "Amboseli - Tsavo West", description: "Morning game drive en route to Tsavo West. Visit Mzima Springs to see hippos underwater. Drive to Ngulia Rhino Sanctuary." },
      { day: 4, title: "Tsavo West - Tsavo East", description: "Visit Shetani Lava Flows. Drive to Tsavo East. Afternoon game drive in 'Theatre of the Wild'. Spot red elephants." },
      { day: 5, title: "Tsavo East - Nairobi/Mombasa", description: "Morning game drive. Visit Aruba Dam. Transfer to Nairobi or Mombasa for departure." }
    ],
    includes: ["4x4 Land Cruiser with pop-up roof", "Professional driver-guide", "Accommodation in lodges", "All meals (Full board)", "Park entry fees", "Bottled water", "Transfers"],
    excludes: ["International flights", "Visas", "Travel insurance", "Drinks", "Tips", "Personal items"]
  },
  {
    id: 4,
    title: "Nairobi City Explorer",
    duration: "3 days",
    price: "$599", // Increased slightly - urban tours have higher value
    originalImage: "Packages-n.jpg", // ✅ ORIGINAL URL
    locations: "Nairobi City",
    description: "Discover Nairobi's wildlife sanctuaries, cultural sites, and vibrant markets. Perfect city safari blend.",
    days: "Nairobi Tour",
    category: "Urban Adventure",
    variant: 'right' as const,
    fullDescription: "Discover Kenya's capital like never before. Feed giraffes by hand, adopt an elephant, walk with baby rhinos, and explore Kenya's rich cultural heritage. This urban safari combines wildlife conservation, history, and modern African culture in one dynamic package.",
    itinerary: [
      { day: 1, title: "Nairobi National Park & Giraffe Centre", description: "Morning game drive in Nairobi National Park (lion, rhino, buffalo). Afternoon visit to Giraffe Centre to feed endangered Rothschild giraffes." },
      { day: 2, title: "Elephant Orphanage & Kazuri Beads", description: "Visit David Sheldrick Elephant Orphanage. Afternoon Kazuri Beads Factory tour and shopping at Maasai Market." },
      { day: 3, title: "Karen Blixen Museum & Bomas", description: "Tour Karen Blixen Museum (Out of Africa). Afternoon cultural show at Bomas of Kenya. Farewell dinner at Carnivore Restaurant." }
    ],
    includes: ["Transport in private vehicle", "Professional guide", "Accommodation in 4-star hotel", "All meals", "All entry fees", "Airport transfers", "Bottled water"],
    excludes: ["Personal shopping", "Drinks", "Tips", "Visa fees"]
  },
  {
    id: 5,
    title: "Zanzibar Beach Escape",
    duration: "7 days",
    price: "$1,699", // Reduced from $1,899
    originalImage: "zanzibar-beach.jpg", // ✅ ORIGINAL URL
    locations: "Zanzibar/Stone Town",
    description: "Turquoise waters, spice tours, and Swahili culture. Luxury beach resort with ocean adventures.",
    days: "7 Days Package",
    category: "Beach & Ocean",
    variant: 'left' as const,
    fullDescription: "Escape to the Spice Island of Zanzibar for 7 days of pure tropical bliss. Explore historic Stone Town's winding alleys, snorkel vibrant coral reefs, sail on traditional dhows at sunset, and relax on powder-white beaches. This package combines culture, adventure, and ultimate relaxation.",
    itinerary: [
      { day: 1, title: "Arrival - Stone Town", description: "Airport pickup. Transfer to Stone Town hotel. Afternoon walking tour of UNESCO World Heritage site. Sunset dhow cruise." },
      { day: 2, title: "Spice Tour & Prison Island", description: "Morning spice farm tour with tastings. Afternoon boat to Prison Island to see giant tortoises. Return to beach resort." },
      { day: 3, title: "Beach Relaxation", description: "Free day at luxury beach resort. Optional snorkeling, diving, or spa treatments. All meals at resort." },
      { day: 4, title: "Safari Blue Adventure", description: "Full day dhow safari to Menai Bay. Snorkel coral reefs, swim with dolphins, seafood BBQ on sandbank." },
      { day: 5, title: "Jozani Forest & Beach", description: "Morning visit to Jozani Forest to see red colobus monkeys. Afternoon beach activities or relaxation." },
      { day: 6, title: "Local Village & Sunset", description: "Visit local fishing village. Learn traditional crafts. Sunset cruise with live Taarab music. Farewell beach dinner." },
      { day: 7, title: "Departure", description: "Morning at leisure. Transfer to airport for flight home." }
    ],
    includes: ["Airport transfers", "Accommodation (3 nights Stone Town, 4 nights beach resort)", "Daily breakfast", "Spice tour and Prison Island visit", "Safari Blue full day excursion", "Stone Town walking tour", "All transport", "Local guide"],
    excludes: ["International flights", "Visa ($50)", "Lunch and dinner (except where noted)", "Travel insurance", "Personal expenses", "Optional activities", "Tips"]
  },
  {
    id: 6,
    title: "Lamu Island Cultural Retreat",
    duration: "5 days",
    price: "$1,199", // Reduced from $1,299
    originalImage: "lamu-cultural.jpg", // ✅ ORIGINAL URL
    locations: "Lamu/Shela Beach",
    description: "UNESCO heritage site, dhow sailing, and authentic Swahili culture in car-free paradise.",
    days: "5 Days Package",
    category: "Cultural Beach",
    variant: 'right' as const,
    fullDescription: "Step back in time on Lamu Island, Kenya's oldest Swahili settlement. With no cars and donkeys as transport, Lamu offers authentic cultural immersion. Explore 14th-century architecture, sail on traditional dhows, and experience pure Swahili hospitality on this 5-day cultural retreat.",
    itinerary: [
      { day: 1, title: "Arrival - Lamu Old Town", description: "Flight to Lamu. Boat transfer to hotel. Walking tour of Lamu Old Town (UNESCO site). Visit Lamu Museum and Fort." },
      { day: 2, title: "Dhow Sailing & Snorkeling", description: "Full day dhow sailing to Manda Island. Snorkel pristine reefs. Seafood lunch on beach. Return via Mangrove creeks." },
      { day: 3, title: "Swahili Cooking & Crafts", description: "Morning Swahili cooking class. Afternoon visit to artisan workshops (wood carving, boat building). Sunset dhow cruise." },
      { day: 4, title: "Shela Beach Relaxation", description: "Transfer to Shela Beach. Free day for swimming, sunbathing, or spa treatments. Visit Takwa Ruins." },
      { day: 5, title: "Departure", description: "Morning at leisure. Boat transfer to airport." }
    ],
    includes: ["Domestic flights Nairobi-Lamu-Nairobi", "Boat transfers", "Accommodation in boutique hotels", "Daily breakfast", "Dhow sailing excursion", "Swahili cooking class", "Guided walking tours", "Local guide"],
    excludes: ["International flights", "Visa", "Lunch and dinner", "Travel insurance", "Personal expenses", "Tips"]
  },
  {
    id: 7,
    title: "Diani Reef Explorer",
    duration: "6 days",
    price: "$1,349", // Reduced from $1,449
    originalImage: "diani-reef.jpg", // ✅ ORIGINAL URL
    locations: "Diani Beach/Wasini Island",
    description: "Kenya's premier beach with coral reef snorkeling, dolphin watching, and luxury coastal resorts.",
    days: "6 Days Package",
    category: "Marine Safari",
    variant: 'left' as const,
    fullDescription: "Discover Kenya's award-winning Diani Beach with its pristine white sands and turquoise waters. Snorkel the vibrant coral reefs of Kisite Marine Park, swim with dolphins, explore ancient coral caves, and relax in luxury beachfront resorts. Perfect mix of adventure and relaxation.",
    itinerary: [
      { day: 1, title: "Arrival - Diani Beach", description: "Transfer from Mombasa airport to Diani Beach resort. Sunset beach walk. Welcome dinner." },
      { day: 2, title: "Kisite Marine Park", description: "Full day snorkeling at Kisite Mpunguti Marine Park. Dolphin watching. Seafood lunch on Wasini Island." },
      { day: 3, title: "Colobus Conservation & Beach", description: "Morning visit to Colobus Conservation Centre. Afternoon beach activities (kitesurfing, jet ski optional)." },
      { day: 4, title: "Shimba Hills Safari", description: "Morning game drive in Shimba Hills. See sable antelope and elephants. Walk to Sheldrick Falls. Return to beach." },
      { day: 5, title: "Beach Relaxation & Spa", description: "Free day at resort. Optional spa treatments, yoga, or water sports. Sunset cocktail at beach bar." },
      { day: 6, title: "Departure", description: "Morning at leisure. Transfer to airport." }
    ],
    includes: ["Airport transfers", "5 nights beach resort accommodation", "Daily breakfast", "Kisite Marine Park snorkeling tour", "Shimba Hills game drive", "Colobus Conservation visit", "All transport", "Marine park fees"],
    excludes: ["International flights", "Visa", "Lunch and dinner", "Travel insurance", "Water sports", "Spa treatments", "Tips"]
  },
  {
    id: 8,
    title: "Hot Air Balloon Safari",
    duration: "3 days",
    price: "$2,199", // Reduced from $2,299
    originalImage: "balloon-mara.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara Reserve",
    description: "Sunrise balloon flight, champagne breakfast, and exclusive game drives with expert guides.",
    days: "3 Days Package",
    category: "Adventure Safari",
    variant: 'right' as const,
    fullDescription: "Experience the Masai Mara from a breathtaking perspective—floating silently above the savanna at sunrise. This luxury package includes a one-hour balloon flight, champagne breakfast in the bush, and two full days of exclusive game drives with expert guides. Perfect for special occasions and photography enthusiasts.",
    itinerary: [
      { day: 1, title: "Nairobi - Masai Mara", description: "Morning flight to Masai Mara. Afternoon game drive. Check into luxury camp. Evening sundowner." },
      { day: 2, title: "Balloon Safari & Game Drive", description: "Pre-dawn transfer for 6 AM balloon launch. 1-hour flight with aerial wildlife viewing. Champagne breakfast landing site. Afternoon game drive." },
      { day: 3, title: "Masai Mara - Nairobi", description: "Morning game drive or optional bush walk. Fly back to Nairobi. Transfer to hotel or airport." }
    ],
    includes: ["Return flights Nairobi-Mara-Nairobi", "Luxury tented camp accommodation", "All meals and drinks (premium selection)", "1-hour balloon safari", "Champagne breakfast", "Professional guide", "Park fees", "Transfers"],
    excludes: ["International flights", "Visa", "Travel insurance", "Personal items", "Tips"]
  },
  {
    id: 9,
    title: "Hell's Gate Adventure",
    duration: "2 days",
    price: "$349", // Reduced from $399
    originalImage: "hells-gate.jpg", // ✅ ORIGINAL URL
    locations: "Hell's Gate/Naivasha",
    description: "Rock climbing, cycling safaris, gorge hiking, and hot springs. Perfect for active travelers.",
    days: "2 Days Package",
    category: "Active Adventure",
    variant: 'left' as const,
    fullDescription: "Kenya's only park where you can walk and cycle among wild animals. Trek through Hell's Gate Gorge, cycle past buffalo and giraffes, rock climb Fischer's Tower, and relax in natural hot springs. Perfect for active travelers seeking an adrenaline-filled safari experience.",
    itinerary: [
      { day: 1, title: "Nairobi - Hell's Gate", description: "Drive to Hell's Gate. Gear briefing. Cycle 7km through park among wildlife. Gorge hiking and rock climbing. Overnight at Naivasha." },
      { day: 2, title: "Hot Springs & Return", description: "Morning visit to Olkaria Geothermal Spa (hot springs). Optional boat ride on Lake Naivasha. Return to Nairobi." }
    ],
    includes: ["Transport", "Bicycle and safety gear rental", "Climbing equipment", "Professional guide", "Park entry fees", "Overnight accommodation", "Breakfast and lunch"],
    excludes: ["Dinner", "Travel insurance", "Optional boat ride", "Tips", "Personal expenses"]
  },
  {
    id: 10,
    title: "Mount Kenya Trek",
    duration: "7 days",
    price: "$2,599", // Reduced from $2,899
    originalImage: "mount-kenya.jpg", // ✅ ORIGINAL URL
    locations: "Mount Kenya National Park",
    description: "High-altitude trekking to Point Lenana. Glacial valleys, alpine lakes, and world-class mountaineering.",
    days: "7 Days Package",
    category: "Mountain Expedition",
    variant: 'right' as const,
    fullDescription: "Conquer Africa's second-highest peak on this epic 7-day adventure. Trek through equatorial forest, moorland, and alpine desert to reach Point Lenana (4,985m). Experience glacial valleys, crystal-clear lakes, and breathtaking sunrises. For fit adventurers seeking the ultimate high-altitude challenge.",
    itinerary: [
      { day: 1, title: "Nairobi - Sirimon Gate - Old Moses", description: "Drive to Mount Kenya. Trek from Sirimon Gate (2,600m) to Old Moses Camp (3,300m). 9km, 3-4 hours." },
      { day: 2, title: "Old Moses - Shipton's", description: "Trek through moorland to Shipton's Camp (4,200m). 14km, 6-7 hours. Acclimatization walk." },
      { day: 3, title: "Acclimatization Day", description: "Rest and acclimatize. Day hike to Kami Hut. Return to Shipton's for overnight." },
      { day: 4, title: "Shipton's - Point Lenana - Mintos", description: "Pre-dawn summit attempt to Point Lenana (4,985m) for sunrise. Descend to Mintos Camp. 6-7 hours." },
      { day: 5, title: "Mintos - Chogoria Gate", description: "Descend through Gorges Valley to Chogoria Gate. 15km, 6 hours. Transfer to Chogoria town." },
      { day: 6, title: "Return to Nairobi", description: "Drive back to Nairobi. Afternoon rest at hotel. Celebration dinner." },
      { day: 7, title: "Departure", description: "Transfer to airport for departure." }
    ],
    includes: ["All transport", "Professional mountain guide", "Porters and cooks", "All meals on mountain", "Park fees and permits", "Quality mountain tents", "Sleeping mats", "Group equipment", "Emergency oxygen", "First aid kit"],
    excludes: ["Personal gear (sleeping bag, boots)", "Travel insurance (mandatory)", "Tips for crew ($100-$150)", "Accommodation in Nairobi", "International flights", "Visa"]
  },
  {
    id: 11,
    title: "Great Rift Valley Explorer",
    duration: "8 days",
    price: "$1,699", // Reduced from $1,799
    originalImage: "rift-valley.jpg", // ✅ ORIGINAL URL
    locations: "Lake Naivasha/Lake Elementaita/Lake Bogoria",
    description: "Journey through the world's most spectacular valley. Flamingos, geysers, and crater lakes.",
    days: "8 Days Package",
    category: "Geological Wonder",
    variant: 'left' as const,
    fullDescription: "Explore the world's most spectacular geological wonder on this 8-day Rift Valley expedition. Visit five stunning lakes, witness millions of flamingos, see active geysers, and stand on volcanic crater rims. Perfect for nature lovers and photographers seeking unique landscapes.",
    itinerary: [
      { day: 1, title: "Nairobi - Lake Naivasha", description: "Drive to Lake Naivasha. Afternoon boat ride to see hippos and fish eagles. Crescent Island walking safari." },
      { day: 2, title: "Hell's Gate Adventure", description: "Bike safari in Hell's Gate NP. Gorge hiking. Afternoon relaxation at geothermal spa." },
      { day: 3, title: "Lake Elementaita", description: "Drive to Lake Elementaita. Afternoon flamingo viewing. Visit Kariandusi prehistoric site." },
      { day: 4, title: "Lake Bogoria Geysers", description: "Drive to Lake Bogoria. See boiling geysers and hot springs. Flamingo viewing. Overnight at lake." },
      { day: 5, title: "Lake Baringo", description: "Drive to Lake Baringo. Bird watching (500+ species). Evening boat ride to see hippos and crocodiles." },
      { day: 6, title: "Lake Turkana Flight", description: "Scenic flight to Lake Turkana. See the Jade Sea. Visit Central Island National Park (volcanic)." },
      { day: 7, title: "Crater Lake Hike", description: "Hike around Crater Lake. See birds and wildlife. Return to Nairobi. Farewell dinner." },
      { day: 8, title: "Departure", description: "Transfer to airport for departure." }
    ],
    includes: ["Transport in 4x4", "Professional guide", "Accommodation in lodges", "All meals", "Park entry fees", "Boat rides at Naivasha and Baringo", "Scenic flight to Turkana", "Bottled water"],
    excludes: ["International flights", "Visa", "Travel insurance", "Drinks", "Tips", "Personal expenses"]
  },
  {
    id: 12,
    title: "Lake Turkana Desert Expedition",
    duration: "10 days",
    price: "$2,999", // Reduced from $3,199
    originalImage: "turkana-desert.jpg", // ✅ ORIGINAL URL
    locations: "Lake Turkana/Sibiloi National Park",
    description: "The 'Jade Sea' expedition. Remote desert landscapes, prehistoric sites, and authentic cultural encounters.",
    days: "10 Days Package",
    category: "Extreme Expedition",
    variant: 'right' as const,
    fullDescription: "Journey to Kenya's remote northern frontier and the legendary Jade Sea. Visit the cradle of humankind at Koobi Fora, explore volcanic landscapes, and meet the El Molo people—Africa's smallest tribe. For adventurous travelers seeking the ultimate off-the-beaten-path experience.",
    itinerary: [
      { day: 1, title: "Nairobi - Marsabit", description: "Long drive north through desert landscapes. Overnight in Marsabit." },
      { day: 2, title: "Marsabit - Kalacha", description: "Drive through Chalbi Desert. See Sand dunes. Overnight at Kalacha oasis." },
      { day: 3, title: "Kalacha - Lake Turkana", description: "Drive to Loyangalani on Lake Turkana's shores. Visit El Molo village. Sunset over Jade Sea." },
      { day: 4, title: "Sibiloi National Park", description: "Visit Sibiloi NP and Koobi Fora prehistoric site. See fossil remains. Overnight at campsite." },
      { day: 5, title: "Central Island Volcano", description: "Boat to Central Island. Hike active volcano. See flamingos and crocodiles. Camp on island." },
      { day: 6, title: "Turkana Cultural Day", description: "Visit Turkana villages. Learn about nomadic culture. Traditional dance performance." },
      { day: 7, title: "Desert Drive South", description: "Long drive south through Maralal. See wildlife on the way. Overnight at lodge." },
      { day: 8, title: "Maralal - Lake Baringo", description: "Drive to Lake Baringo. Afternoon bird watching. Boat ride to see hippos." },
      { day: 9, title: "Baringo - Nairobi", description: "Morning nature walk. Drive back to Nairobi. Farewell dinner." },
      { day: 10, title: "Departure", description: "Transfer to airport for departure." }
    ],
    includes: ["4x4 Land Cruiser with supplies", "Professional guide", "Camping equipment", "All meals", "Park fees", "Boat to Central Island", "Cultural guides", "Water"],
    excludes: ["International flights", "Visa", "Travel insurance (mandatory)", "Camping gear (sleeping bag)", "Tips", "Personal items"]
  },
  {
    id: 13,
    title: "Presidential Safari",
    duration: "14 days",
    price: "$9,999", // Reduced from $12,500 but still ultra-premium
    originalImage: "presidential-safari.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara/Serengeti/Ngorongoro",
    description: "Ultra-luxury private safari. Presidential suites, private charters, exclusive access, and personal concierge.",
    days: "14 Days Package",
    category: "Ultra Luxury",
    variant: 'left' as const,
    fullDescription: "Experience East Africa like a head of state. Private charter flights, presidential suites at exclusive lodges, personal butler service, and after-hours private access to parks. This 14-day journey covers Kenya and Tanzania's most prestigious parks with unparalleled luxury and privacy.",
    itinerary: [
      { day: 1, title: "Arrival Nairobi - Hemingways", description: "Private jet arrival. Transfer to Hemingways Nairobi (presidential suite). Personal butler assignment. Evening cocktail reception." },
      { day: 2, title: "Nairobi Private Tours", description: "Private after-hours tour of Giraffe Centre. Exclusive David Sheldrick visit (private elephant feeding). Personal shopping with stylist." },
      { day: 3, title: "Private Charter to Masai Mara", description: "Private Cessna to Mara. Check into Angama Mara (presidential villa). Private game drive. Sundowner on exclusive kopje." },
      { day: 4, title: "Masai Mara Exclusive", description: "Full day private game drive with researcher. Bush breakfast and lunch. Night game drive (private vehicle)." },
      { day: 5, title: "Hot Air Balloon & Conservation", description: "Private balloon flight. Champagne breakfast. Visit Mara Elephant Project. Meet researchers." },
      { day: 6, title: "Serengeti Migration", description: "Private charter to Serengeti. Check into Singita Grumeti (presidential suite). Afternoon migration viewing." },
      { day: 7, title: "Serengeti Full Day", description: "Full day private game drive. Mobile camp lunch in migration path. Photographic hides access." },
      { day: 8, title: "Ngorongoro Crater", description: "Private charter to Manyara airstrip. Transfer to Ngorongoro Crater Lodge (master suite). Afternoon crater floor exclusive use." },
      { day: 9, title: "Crater Floor Breakfast", description: "Private breakfast on crater floor. Full day game drive. Visit Olduvai Gorge with archaeologist." },
      { day: 10, title: "Tarangire Private Villa", description: "Private charter to Tarangire. Check into Oliver's Camp (private villa). Exclusive night game drives." },
      { day: 11, title: "Elephant Research", description: "Visit Tarangire Elephant Project. Track collared elephants. Bush walk with armed ranger. Fly to Amboseli." },
      { day: 12, title: "Amboseli & Mount Kilimanjaro", description: "Tortilis Camp (private house). Kilimanjaro photography session. Visit local community project." },
      { day: 13, title: "Final Game Drive & Spa", description: "Morning game drive. Afternoon spa treatments. Farewell dinner with traditional dancers." },
      { day: 14, title: "Departure", description: "Private charter to Nairobi. Day room at Hemingways. Transfer to private jet." }
    ],
    includes: ["Private charter flights throughout", "Presidential suites/villas at all lodges", "Personal butler and concierge", "Private game drive vehicles", "All meals (gourmet) and premium drinks", "Exclusive access and after-hours tours", "Hot air balloon safari", "All park fees", "Private guides and researchers", "Spa treatments", "Laundry service", "Gifts and amenities"],
    excludes: ["International flights", "Visas", "Travel insurance", "Personal shopping", "Additional charter hours", "Tips (discretionary)"]
  },
  {
    id: 14,
    title: "Honeymoon Safari & Beach",
    duration: "10 days",
    price: "$4,999", // Reduced from $5,999
    originalImage: "honeymoon-safari.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara/Diani Beach",
    description: "Romance meets adventure. Private bush dinners, luxury lodges, spa treatments, and secluded beaches.",
    days: "10 Days Package",
    category: "Romance & Honeymoon",
    variant: 'right' as const,
    fullDescription: "The perfect blend of safari adventure and beach romance. Enjoy private game drives, intimate bush dinners under stars, couples' spa treatments, and private beach villas. This 10-day journey creates unforgettable memories for couples seeking luxury, privacy, and authentic African experiences.",
    itinerary: [
      { day: 1, title: "Arrival Nairobi - Villa Rosa", description: "Villa Rosa Kempinski suite. Couples' massage. Private dinner on balcony." },
      { day: 2, title: "Masai Mara - Sala's Camp", description: "Fly to Mara. Sala's Camp honeymoon tent. Afternoon private game drive. Sundowner with champagne." },
      { day: 3, title: "Private Mara Experience", description: "Full day private game drive. Bush breakfast for two. Afternoon couples' spa. Night game drive." },
      { day: 4, title: "Balloon Safari & Proposal Spot", description: "Private balloon flight. Champagne breakfast. Private lunch at proposal site. Evening game drive." },
      { day: 5, title: "Masai Mara - Diani Beach", description: "Morning game drive. Fly to Diani Beach. Check into Alfajiri Cliff Villa (private). Sunset beach dinner." },
      { day: 6, title: "Diani Beach Private Villa", description: "Private butler service. Couples' spa day. Beachfront infinity pool. Private chef dinner." },
      { day: 7, title: "Snorkeling & Island Picnic", description: "Private dhow to Kisite Marine Park. Snorkel together. Private beach picnic. Sunset cocktail cruise." },
      { day: 8, title: "Beach & Wellness", description: "Morning yoga on beach. Couples' massage. Private seafood lunch. Afternoon kayaking or standup paddle." },
      { day: 9, title: "Shimba Hills Safari", description: "Private game drive in Shimba Hills. Waterfall visit. Farewell beach BBQ with traditional dancers." },
      { day: 10, title: "Departure", description: "Morning at leisure. Transfer to Mombasa airport. Fly to Nairobi for departure." }
    ],
    includes: ["Internal flights", "Luxury honeymoon suites/villas", "Private game drives", "Hot air balloon safari", "All meals (gourmet)", "Couples' spa treatments (2)", "Private beach dinners (2)", "All park fees", "Private transfers", "Special honeymoon amenities", "Photographer (1 session)", "Marine park snorkeling"],
    excludes: ["International flights", "Visas", "Travel insurance", "Personal expenses", "Alcohol (except where noted)", "Tips"]
  },
  {
    id: 15,
    title: "Big Cat Specialist Safari",
    duration: "7 days",
    price: "$2,399", // Reduced from $2,699
    originalImage: "big-cat-safari.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara/Amboseli/Tsavo",
    description: "Dedicated lion, leopard, and cheetah tracking with radio telemetry and expert carnivore researchers.",
    days: "7 Days Package",
    category: "Wildlife Specialist",
    variant: 'left' as const,
    fullDescription: "Join world-renowned carnivore researchers on this exclusive big cat safari. Use radio telemetry equipment, analyze predation patterns, and gain unprecedented access to lion prides, leopard territories, and cheetah families. Includes participation in active conservation projects and data collection.",
    itinerary: [
      { day: 1, title: "Nairobi - Masai Mara Research Camp", description: "Drive to Masai Mara. Check into research camp. Evening lecture on lion pride dynamics." },
      { day: 2, title: "Lion Pride Monitoring", description: "Track collared lions using telemetry. Observe pride behavior. Document social interactions. Bush breakfast." },
      { day: 3, title: "Cheetah Conservation", description: "Visit Mara-Merlin Cheetah Project. Track cheetah families. Learn about cub survival challenges." },
      { day: 4, title: "Masai Mara - Amboseli", description: "Morning leopard tracking. Drive to Amboseli. Evening game drive focusing on predator-prey dynamics." },
      { day: 5, title: "Amboseli Big Cats", description: "Track Amboseli's famous lions. Visit kill sites. Analyze hyena-lion interactions. Night drive with spotlights." },
      { day: 6, title: "Tsavo Lion Research", description: "Drive to Tsavo. Visit Tsavo Lion Project. Learn about man-eater history. Track resident prides." },
      { day: 7, title: "Nairobi", description: "Morning data review session. Drive to Nairobi. Visit research centre. Departure." }
    ],
    includes: ["4x4 vehicle with equipment", "Professional carnivore researcher guide", "Radio telemetry equipment use", "Camping/lodge accommodation", "All meals", "Park fees", "Conservation project fees", "Data collection materials", "Research certificates"],
    excludes: ["International flights", "Visa", "Travel insurance", "Personal gear", "Tips", "Personal expenses"]
  },
  {
    id: 16,
    title: "Birding Paradise Safari",
    duration: "9 days",
    price: "$1,899", // Reduced from $2,099
    originalImage: "birding-safari.jpg", // ✅ ORIGINAL URL
    locations: "Lake Naivasha/Lake Baringo/Lake Bogoria",
    description: "450+ bird species with expert ornithologist, specialized equipment, and prime birding locations.",
    days: "9 Days Package",
    category: "Birding Safari",
    variant: 'right' as const,
    fullDescription: "Kenya hosts over 1,100 bird species—perfect for serious birders. Join expert ornithologists to spot rarities like the African skimmer, Pel's fishing owl, and Jackson's widowbird. Includes specialized equipment, birding hides, and access to restricted wetlands. Target: 300+ species in 9 days.",
    itinerary: [
      { day: 1, title: "Nairobi - Lake Naivasha", description: "Drive to Naivasha. Afternoon birding. Target: African fish eagle, kingfishers, herons. Overnight at lodge." },
      { day: 2, title: "Lake Naivasha", description: "Full day birding. Boat ride to Hippo Point. Walk on Crescent Island. Target: 150+ species." },
      { day: 3, title: "Naivasha - Lake Elementaita", description: "Morning birding drive. Afternoon at Elementaita. Target: flamingos, pelicans, avocets." },
      { day: 4, title: "Lake Bogoria", description: "Drive to Bogoria. Hot springs and geysers. Birding around lake. Target: greater flamingo, greater kudu." },
      { day: 5, title: "Lake Baringo", description: "Drive to Baringo. Bird watching (500+ species). Evening boat ride to see hippos and crocodiles." },
      { day: 6, title: "Kakamega Forest", description: "Drive to Kakamega Forest. Afternoon forest birding. Target: Great blue turaco, forest specialists." },
      { day: 7, title: "Kakamega Forest", description: "Full day forest birding. Multiple trails. Target: 200+ forest species including endemics." },
      { day: 8, title: "Kakamega - Lake Baringo", description: "Drive to Baringo. Afternoon boat birding. Target: Goliath heron, Verreaux's eagle owl." },
      { day: 9, title: "Baringo - Nairobi", description: "Morning birding. Final species count. Drive to Nairobi. Visit National Museum bird collection." }
    ],
    includes: ["4x4 vehicle with pop-up roof", "Expert ornithologist guide", "Birding equipment (spotting scope, field guides)", "Accommodation in birding lodges", "All meals", "Park fees", "Boat rides", "Bird checklist", "Species records", "Bottled water"],
    excludes: ["International flights", "Visa", "Travel insurance", "Personal binoculars (rental available)", "Tips", "Personal expenses", "Alcohol"]
  },
  {
    id: 17,
    title: "Maasai Cultural Deep Dive",
    duration: "5 days",
    price: "$999", // Reduced from $1,299
    originalImage: "masai-cultural.jpg", // ✅ ORIGINAL URL
    locations: "Loita Hills/Masai Mara",
    description: "Immersive cultural experience with warrior training, beadwork, and authentic ceremonies.",
    days: "5 Days Package",
    category: "Cultural Immersion",
    variant: 'left' as const,
    fullDescription: "Live as a Maasai warrior on this authentic cultural immersion. Stay in traditional manyattas, learn survival skills, participate in ceremonies, and understand the delicate balance between tradition and modern conservation. Led by Maasai elders, this is genuine cultural exchange, not tourist theater.",
    itinerary: [
      { day: 1, title: "Nairobi - Loita Hills Manyatta", description: "Drive to Loita Hills. Welcome ceremony at Maasai manyatta. Learn about Maasai lifestyle. Overnight in traditional hut." },
      { day: 2, title: "Warrior Training", description: "Morning warrior training (spear throwing, tracking). Afternoon herding with morans. Evening storytelling around fire." },
      { day: 3, title: "Beadwork & Medicine", description: "Learn traditional beadwork from women. Afternoon medicine walk with laibon (healer). Traditional lunch." },
      { day: 4, title: "Ceremony Day", description: "Participate in traditional ceremony (song/dance). Visit local school. Markets. Overnight in manyatta." },
      { day: 5, title: "Conservation & Return", description: "Visit community conservation project. Morning game drive in adjacent conservancy. Return to Nairobi." }
    ],
    includes: ["4x4 transport", "Maasai elder guide", "Homestay in manyatta", "All meals (traditional and modern)", "Conservancy fees", "Cultural activities", "Donation to community", "Translation services"],
    excludes: ["International flights", "Visa", "Travel insurance", "Personal gifts", "Tips", "Personal expenses"]
  },
  {
    id: 18,
    title: "Professional Photography Safari",
    duration: "8 days",
    price: "$2,999", // Reduced from $3,499
    originalImage: "photography-safari.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara/Amboseli/Samburu",
    description: "Professional photography guidance, golden hour shoots, hides, and specialized safari vehicles.",
    days: "8 Days Package",
    category: "Photography Tour",
    variant: 'right' as const,
    fullDescription: "Join award-winning wildlife photographers on this intensive 8-day workshop. Shoot with professional equipment, use specialized hides, access private conservancies, and receive daily critiques. Perfect for intermediate to advanced photographers seeking to elevate their wildlife portfolio.",
    itinerary: [
      { day: 1, title: "Nairobi - Masai Mara", description: "Drive to Mara. Camera gear setup. Evening golden hour shoot. Workshop briefing." },
      { day: 2, title: "Mara Predators", description: "Morning lion pride shoot. Afternoon cheetah hunt. Night photography workshop." },
      { day: 3, title: "Mara Landscapes", description: "Balloon shoot from ground. Mara River crossings. Sunset silhouettes. Image review session." },
      { day: 4, title: "Masai Mara - Amboseli", description: "Morning shoot en route. Afternoon Kilimanjaro backdrop elephant photography." },
      { day: 5, title: "Amboseli Classics", description: "Dawn elephant silhouettes against Kilimanjaro. Afternoon wildlife in marsh. Night sky photography." },
      { day: 6, title: "Amboseli - Samburu", description: "Drive to Samburu. Afternoon shoot unique species (oryx, gerenuk, Grevy's zebra)." },
      { day: 7, title: "Samburu Specials", description: "Morning leopard search. Afternoon cultural portrait session with Samburu. Final image review." },
      { day: 8, title: "Nairobi", description: "Drive to Nairobi. Final portfolio review. Certificate ceremony. Departure." }
    ],
    includes: ["4x4 safari vehicle with charging ports", "Professional wildlife photographer guide", "Photographic hides access", "Accommodation in photographer-friendly lodges", "All meals", "Park fees", "Image review sessions", "Portfolio critique", "Certificate", "Bottled water"],
    excludes: ["Camera equipment (rental available)", "International flights", "Visa", "Travel insurance", "Personal laptop/tablet", "Tips", "Alcohol", "Personal expenses"]
  },
  {
    id: 19,
    title: "Family Safari Adventure",
    duration: "7 days",
    price: "$2,299", // Reduced from $2,799 - family pricing
    originalImage: "family-safari.jpg", // ✅ ORIGINAL URL
    locations: "Masai Mara/Lake Naivasha",
    description: "Child-friendly activities, educational programs, junior ranger training, and family bonding experiences.",
    days: "7 Days Package",
    category: "Family Safari",
    variant: 'left' as const,
    fullDescription: "Designed for families with children aged 5-15. Junior ranger programs, educational game drives, child-friendly guides, and flexible schedules. Combines wildlife adventure with learning and family bonding. Special activities like bug collecting, animal tracking, and stargazing.",
    itinerary: [
      { day: 1, title: "Nairobi - Junior Ranger", description: "Drive to Mara. Junior ranger kit presentation. First game drive. Animal tracking lesson." },
      { day: 2, title: "Big Five Hunt", description: "Game drive focusing on Big Five. Bush breakfast. Junior ranger quiz. Evening stargazing." },
      { day: 3, title: "Mara River & Crocodiles", description: "Visit Mara River. Crocodile and hippo study. Sketching animals. Traditional storytelling." },
      { day: 4, title: "Mara - Naivasha", description: "Drive to Naivasha. Boat ride to see hippos. Crescent Island walking safari (safe for kids)." },
      { day: 5, title: "Lake Naivasha Activities", description: "Bike safari in Hell's Gate. Junior ranger badge ceremony. Afternoon swim at hotel." },
      { day: 6, title: "Giraffe Centre & Elephants", description: "Drive to Nairobi. Giraffe Centre (feeding). David Sheldrick elephant orphanage. Gift shopping." },
      { day: 7, title: "Departure", description: "Morning at leisure. Transfer to airport. Junior ranger certificate ceremony." }
    ],
    includes: ["4x4 family vehicle", "Child specialist guide", "Family-friendly lodges", "All meals", "Junior ranger program materials", "Park fees", "Boat rides", "All activities mentioned", "Junior ranger certificates", "Bottled water"],
    excludes: ["International flights", "Visa", "Travel insurance", "Personal items", "Tips", "Optional activities"]
  },
  {
    id: 20,
    title: "Student Educational Expedition",
    duration: "10 days",
    price: "$1,599", // Reduced from $1,899 - student pricing
    originalImage: "student-safari.jpg", // ✅ ORIGINAL URL
    locations: "Nairobi/Masai Mara/Lake Nakuru",
    description: "Educational wildlife programs, conservation lessons, field research, and university-level seminars.",
    days: "10 Days Package",
    category: "Educational Tour",
    variant: 'right' as const,
    fullDescription: "Designed for high school and university students. Combines field biology, ecology, and conservation with hands-on research. Led by university professors and researchers. Students participate in actual research projects and earn certificates. Perfect for biology, environmental science, and zoology students.",
    itinerary: [
      { day: 1, title: "Arrival Nairobi - Orientation", description: "Airport pickup. Orientation at research centre. Lecture: Kenyan ecosystems. Group dinner." },
      { day: 2, title: "Nairobi National Park Research", description: "Game drive with research focus. Learn wildlife census techniques. Radio tracking demo. Data collection." },
      { day: 3, title: "David Sheldrick & Conservation", description: "Visit elephant orphanage. Lecture on elephant conservation. Afternoon: anti-poaching technology workshop." },
      { day: 4, title: "Nairobi - Masai Mara", description: "Drive to Mara. Afternoon game drive. Introduction to Mara predator project. Evening data analysis." },
      { day: 5, title: "Predator Ecology", description: "Full day lion pride monitoring. Collect behavioral data. Visit kill site. Evening research discussion." },
      { day: 6, title: "Migration & Ecosystems", description: "Study wildebeest migration. River crossing analysis. Lecture: herbivore-vegetation dynamics." },
      { day: 7, title: "Mara - Lake Nakuru", description: "Drive to Nakuru. Rhino and flamingo study. Water quality testing. Conservation challenges lecture." },
      { day: 8, title: "Nakuru - Lake Naivasha", description: "Bird census techniques. Hippo population study. Visit community conservation project." },
      { day: 9, title: "Research Presentation", description: "Students present findings. Certificates ceremony. Final party at research centre." },
      { day: 10, title: "Departure", description: "Morning museum visit. Transfer to airport. Departure." }
    ],
    includes: ["All transport", "University professor guide", "Accommodation (dorm-style and camping)", "All meals", "Park fees", "Research equipment", "Lab access", "Guest lectures", "Certificate of participation", "Course materials", "24/7 supervision"],
    excludes: ["International flights", "Visa", "Travel insurance (mandatory)", "Personal laptop", "Personal expenses", "Tips"]
  }
];

export function PackagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= packages.length) return 0;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return packages.length - 1;
      if (nextIndex >= packages.length) return 0;
      return nextIndex;
    });
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-16"
        >
          <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
            Curated Adventures for you 
          </h5>
          <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight`}>
            Your Perfect Safari
            <span className="block text-yellow-400">Awaits</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg mt-4 md:mt-6 max-w-3xl mx-auto px-2">
            From ocean escapes to mountain peaks, cultural immersions to wildlife spectacles—every journey crafted for the discerning explorer.
          </p>
        </motion.div>

        {/* Carousel - Fixed mobile height */}
        <div className="relative max-w-6xl mx-auto mb-16 md:mb-24 h-[500px] md:h-[600px]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <PackageCard 
                  {...packages[currentIndex]} 
                  index={0}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Placeholder to maintain height */}
            <div className="invisible">
              <PackageCard {...packages[0]} index={0} />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => slide(-1)}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all z-10 touch-manipulation"
              aria-label="Previous package"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => slide(1)}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all z-10 touch-manipulation"
              aria-label="Next package"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Dots - Mobile optimized */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8 px-4 flex-wrap">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors flex-shrink-0",
                  i === currentIndex ? "bg-yellow-400" : "bg-neutral-600 hover:bg-neutral-500"
                )}
                aria-label={`Go to package ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12 px-4`}>
            Complete Safari Collection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} {...pkg} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}