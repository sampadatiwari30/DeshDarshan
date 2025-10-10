const express = require('express');
const path = require('path');
const router = express.Router();

// Main navigation routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

router.get('/explore', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'explore.html'));
});

router.get('/festival-calendar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'festival-calendar.html'));
});

router.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'feedback.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'about-us.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'contact-us.html'));
});

// Authentication routes
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'signup.html'));
});

// Content category routes
router.get('/heritage', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'heritage.html'));
});

router.get('/arts', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts.html'));
});

router.get('/festivals', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'festivals.html'));
});

router.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'food.html'));
});

router.get('/dance', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'dance.html'));
});

router.get('/destination', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'destination.html'));
});

router.get('/yoga', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'yoga.html'));
});

router.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'quiz.html'));
});

router.get('/learn-lang', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'learn_lang.html'));
});

// Individual heritage site routes
router.get('/taj-mahal', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'tajmahal.html'));
});

router.get('/charminar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'charminar.html'));
});

router.get('/gateway-of-india', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'gateway.html'));
});

router.get('/qutub-minar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'qutub.html'));
});

router.get('/red-fort', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'fort.html'));
});

// Dance form routes
router.get('/bharatanatyam', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'bharatanatyam.html'));
});

router.get('/kathak', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'kathak.html'));
});

router.get('/kuchipudi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'kuchipudi.html'));
});

router.get('/manipuri', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'manipuri.html'));
});

router.get('/mohiniyattam', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'mohiniyattam.html'));
});

router.get('/odissi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'odissi.html'));
});

// Temple routes
router.get('/temples/akshardham', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'akshardham.html'));
});

router.get('/temples/brihadeeswarar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'bridheshwar.html'));
});

router.get('/temples/jagannath', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'jagannath.html'));
});

router.get('/temples/kashi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'kashi.html'));
});

router.get('/temples/kedarnath', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'kedarnath.html'));
});

router.get('/temples/meenakshi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'minakshi.html'));
});

router.get('/temples/somnath', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'somnath.html'));
});

router.get('/temples/sun-temple', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'sun.html'));
});

router.get('/temples/vaishno-devi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'temples', 'vaishno.html'));
});

// Arts & Handicraft routes
router.get('/arts/banarasi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'banaras.html'));
});

router.get('/arts/bidriware', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'Bidriware.html'));
});

router.get('/arts/blue-pottery', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'blue.html'));
});

router.get('/arts/brass-work', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'brass.html'));
});

router.get('/arts/chikankari', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'chikankari.html'));
});

router.get('/arts/dhokra', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'dhokra.html'));
});

router.get('/arts/marble-inlay', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'inlay.html'));
});

router.get('/arts/kanjivaram', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'kanjivaram.html'));
});

router.get('/arts/kantha', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'kantha.html'));
});

router.get('/arts/kashmiri-work', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'kashmiri.html'));
});

router.get('/arts/kavad', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'kavda.html'));
});

router.get('/arts/kolhapuri-chappals', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'kolhapuri.html'));
});

router.get('/arts/phulkari', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'pulkari.html'));
});

router.get('/arts/terracotta', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'terracotta.html'));
});

router.get('/arts/zardozi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'arts-handicraft', 'zardozi.html'));
});

// Festival routes
router.get('/festivals/diwali', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Diwali.html'));
});

router.get('/festivals/holi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Holi.html'));
});

router.get('/festivals/ganesh-chaturthi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Ganesh Chaturthi.html'));
});

router.get('/festivals/dussehra', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Navratri.html'));
});

router.get('/festivals/eid', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Eid.html'));
});

router.get('/festivals/christmas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Christmas.html'));
});

router.get('/festivals/janmashtami', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Janmashtami.html'));
});

router.get('/festivals/makar-sankranti', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Makar Sankranti.html'));
});

router.get('/festivals/pongal', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Pongal.html'));
});

router.get('/festivals/lohri', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Lohri.html'));
});

router.get('/festivals/maha-shivratri', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Maha Shivratri.html'));
});

router.get('/festivals/gudi-padwa', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'festivals', 'Gudi Padwa.html'));
});

// Personality routes
router.get('/personalities/gandhi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'gandhi.html'));
});

router.get('/personalities/nehru', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'Nehru.html'));
});

router.get('/personalities/ambedkar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'ambedkar.html'));
});

router.get('/personalities/kalam', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'kalam.html'));
});

router.get('/personalities/kalpana-chawla', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'kalpana.html'));
});

router.get('/personalities/vikram-sarabhai', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'personality-pages', 'sarabhai.html'));
});

// Sports routes
router.get('/sports/chess', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'chess.html'));
});

router.get('/sports/cricket', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'cricket.html'));
});

router.get('/sports/kabaddi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'kabaddi.html'));
});

router.get('/sports/hockey', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'hocky.html'));
});

router.get('/sports/wrestling', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'wrestling.html'));
});

router.get('/sports/polo', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'polo.html'));
});

router.get('/sports/kho-kho', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'kho.html'));
});

router.get('/sports/mallakhamb', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'mallakhamb.html'));
});

router.get('/sports/kalaripayattu', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'kalari.html'));
});

router.get('/sports/pachisi', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'lodu.html'));
});

router.get('/sports/ganjifa', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'ganjhifa.html'));
});

router.get('/sports/moksha-patam', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'sports-pages', 'moksha.html'));
});

// Yoga routes
router.get('/yoga/hatha', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'hatha.html'));
});

router.get('/yoga/raja', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'raja.html'));
});

router.get('/yoga/bhakti', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'bhakti.html'));
});

router.get('/yoga/iyengar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'ichiyangar.html'));
});

router.get('/yoga/surya', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'surya.html'));
});

router.get('/yoga/tantra', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'Yoga', 'tantra.html'));
});

// Itinerary routes
router.get('/itinerary/taj-mahal', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-tajmahal.html'));
});

router.get('/itinerary/charminar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-charminar.html'));
});

router.get('/itinerary/gateway-of-india', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-gateway.html'));
});

router.get('/itinerary/qutub-minar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-qutubminar.html'));
});

router.get('/itinerary/red-fort', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-redfort.html'));
});

router.get('/itinerary/mysore-palace', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'places', 'itinerary-mysorepalace.html'));
});

module.exports = router;
