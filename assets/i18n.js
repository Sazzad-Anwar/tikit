(function () {
  'use strict';

  var STORAGE_KEY = 'tikit:lang';
  var DEFAULT_LANG = 'bn';

  var bn = {
    'Home': 'হোম',
    'Book': 'বুকিং',
    'My trips': 'আমার যাত্রা',
    'Help': 'সহায়তা',
    'Sign in': 'সাইন ইন',
    'Sign out': 'সাইন আউট',
    'Create account': 'অ্যাকাউন্ট খুলুন',
    'Create an account': 'অ্যাকাউন্ট খুলুন',
    'Book a seat': 'আসন বুক করুন',
    'Book another': 'আরেকটি বুক করুন',
    'Help and refunds': 'সহায়তা ও ফেরত',
    'Back to home': 'হোমে ফিরুন',
    'Helpline': 'হেল্পলাইন',
    'helpline': 'হেল্পলাইন',
    'Journey': 'যাত্রা',
    'Stations': 'স্টেশন',
    'Support': 'সহায়তা',
    'Search trains': 'ট্রেন খুঁজুন',
    'Seat map': 'সিট ম্যাপ',
    'Refunds and help': 'ফেরত ও সহায়তা',
    'Every day, 7am to 11pm': 'প্রতিদিন, সকাল ৭টা থেকে রাত ১১টা',
    'Account settings': 'অ্যাকাউন্ট সেটিংস',
    'Overview': 'সারসংক্ষেপ',
    'Trips': 'যাত্রা',
    'Passengers': 'যাত্রী',
    'Payment': 'পেমেন্ট',
    'Settings': 'সেটিংস',
    'Need a hand?': 'সাহায্য দরকার?',
    'Refunds, seat holds and wheelchair berths. The station desk is one call away.':
      'ফেরত, আসন হোল্ড আর হুইলচেয়ার বার্থ। স্টেশন ডেস্ক এক কল দূরে।',
    'Skip to content': 'মূল অংশে যান',
    // Home hero
    'Bangladesh Railway, intercity booking': 'বাংলাদেশ রেলওয়ে, আন্তঃনগর বুকিং',
    'The country looks better from a': 'দেশটাকে দেখতে ভালো লাগে',
    'window seat': 'জানালার আসন',
    'Search every intercity service, hold a seat for ten minutes, and pay in one screen. Bring only your phone.':
      'সব আন্তঃনগর ট্রেন খুঁজুন, দশ মিনিটের জন্য আসন ধরে রাখুন, আর এক স্ক্রিনেই টাকা দিন। সাথে শুধু ফোন।',
    'Find my train': 'ট্রেন খুঁজুন',
    "See today's board": 'আজকের সময়সূচি',
    'Seat hold': 'আসন হোল্ড',
    '10 minutes': '১০ মিনিট',
    'Pay with': 'পেমেন্ট',
    'bKash, Nagad or card': 'বিকাশ, নগদ বা কার্ড',
    'Confirmation': 'নিশ্চিতকরণ',
    'Instant PNR': 'সঙ্গে সঙ্গে PNR',
    'e-ticket, sample': 'ই-টিকিট, নমুনা',
    'Train': 'ট্রেন',
    'Dhaka': 'ঢাকা',
    'Chattogram': 'চট্টগ্রাম',
    'Date': 'তারিখ',
    'Class': 'শ্রেণি',
    'Coach': 'কোচ',
    'Seat': 'আসন',
    'Continue to payment': 'পেমেন্টে যান',
    'Air-conditioned chair': 'শীতাতপ নিয়ন্ত্রিত চেয়ার',
    'Air-conditioned berth': 'শীতাতপ নিয়ন্ত্রিত বার্থ',
    'Shovan chair': 'শোভন চেয়ার',
    'Booked': 'বুকড',
    'Middle': 'মাঝের',
    'Window': 'জানালা',
    'Aisle': 'আইল',
    'On time': 'সময়মতো',
    'Demo fare, ৳855': 'নমুনা ভাড়া, ৳৮৫৫',
    'Boarding closes 5 min before': 'ছাড়ার ৫ মিনিট আগে বন্ধ',
    'One way, intercity': 'একমুখী, আন্তঃনগর',
    'Fares from ৳345': 'ভাড়া শুরু ৳৩৪৫',
    'From': 'যেখান থেকে',
    'To': 'গন্তব্য',
    'Travel date': 'যাত্রার তারিখ',
    'adult': 'প্রাপ্তবয়স্ক',
    'Any class': 'সব শ্রেণি',
    'Concept build. Sample timetables for four corridors, live inventory would connect at launch. Fares include VAT.':
      'কনসেপ্ট ডিজাইন। চারটি করিডোরের নমুনা সময়সূচি; লঞ্চে লাইভ ইনভেন্টরি যুক্ত হবে। ভাড়ায় ভ্যাট অন্তর্ভুক্ত।',
    'Today at Kamalapur': 'আজ কমলাপুরে',
    '07:00, on time': '০৭:০০, সময়মতো',
    '16:00, 10 min late': '১৬:০০, ১০ মিনিট দেরি',
    '21:30, platform 4': '২১:৩০, প্লাটফর্ম ৪',
    'All departures': 'সব ছাড়ার সময়',
    'Popular corridors': 'জনপ্রিয় করিডোর',
    'Four ways out of the city.': 'শহর ছাড়ার চারটি পথ।',
    "Coastal, tea country, the Padma line and the long road to Cox's Bazar. Every route below opens a real sample board.":
      'উপকূল, চা বাগান, পদ্মা লাইন আর কক্সবাজারের দীর্ঘ পথ। প্রতিটি রুটে আসল নমুনা বোর্ড খুলবে।',
    'Dhaka → Chattogram': 'ঢাকা → চট্টগ্রাম',
    'ঢাকা থেকে চট্টগ্রাম': 'ঢাকা থেকে চট্টগ্রাম',
    '7 services, coastal line, from ৳345': '৭টি ট্রেন, উপকূল লাইন, ৳৩৪৫ থেকে',
    'Dhaka → Sylhet': 'ঢাকা → সিলেট',
    'ঢাকা থেকে সিলেট': 'ঢাকা থেকে সিলেট',
    '3 services, tea country, from ৳315': '৩টি ট্রেন, চা দেশ, ৳৩১৫ থেকে',
    'Dhaka → Rajshahi': 'ঢাকা → রাজশাহী',
    'ঢাকা থেকে রাজশাহী': 'ঢাকা থেকে রাজশাহী',
    '3 services, Padma line, from ৳305': '৩টি ট্রেন, পদ্মা লাইন, ৳৩০৫ থেকে',
    "Dhaka → Cox's Bazar": 'ঢাকা → কক্সবাজার',
    'ঢাকা থেকে কক্সবাজার': 'ঢাকা থেকে কক্সবাজার',
    '2 services, the long coast, from ৳395': '২টি ট্রেন, দীর্ঘ উপকূল, ৳৩৯৫ থেকে',
    'Choose your carriage': 'আপনার কামরা বেছে নিন',
    'A class for every kind of journey.': 'প্রতিটি যাত্রার জন্য এক শ্রেণি।',
    'Budget mornings, air-conditioned afternoons, and curtains for the overnight run. Fares shown for Dhaka to Chattogram.':
      'সস্তা সকাল, শীতাতপ নিয়ন্ত্রিত দুপুর, আর রাতের যাত্রায় পর্দা। ভাড়া ঢাকা–চট্টগ্রামের।',
    'See the full fare chart': 'পুরো ভাড়ার তালিকা দেখুন',
    'Shovan': 'শোভন',
    'Snigdha': 'স্নিগ্ধা',
    'AC Berth': 'এসি বার্থ',
    'Open windows, wide bench seats, the most social carriage on the train.':
      'খোলা জানালা, চওড়া বেঞ্চ, ট্রেনের সবচেয়ে মেলামেশার কামরা।',
    'Air-conditioned chair car with reclining seats and a quiet reading light.':
      'শীতাতপ নিয়ন্ত্রিত চেয়ার, হেলান দেওয়ার সুবিধা আর নিঃশব্দ পড়ার আলো।',
    'A curtained berth for overnight services. Lower, middle and upper options.':
      'রাতের ট্রেনে পর্দা দেওয়া বার্থ। নিচ, মাঝ ও উপর তলার সুবিধা।',
    'First class cabin with a locking door, for families and long night runs.':
      'তালা দেওয়া প্রথম শ্রেণির কেবিন, পরিবার ও দীর্ঘ রাতের যাত্রার জন্য।',
    'Non-AC, 92 seats': 'নন-এসি, ৯২টি আসন',
    'AC chair, 48 seats': 'এসি চেয়ার, ৪৮টি আসন',
    'AC sleeper, 24 berths': 'এসি স্লিপার, ২৪টি বার্থ',
    'First class, 6 cabins': 'প্রথম শ্রেণি, ৬টি কেবিন',
    "Sample fares. F-Berth inventory is not part of this concept's seat map.":
      'নমুনা ভাড়া। এফ-বার্থ এই কনসেপ্টের সিট ম্যাপে নেই।',
    'How it works': 'যেভাবে কাজ করে',
    'Three quiet steps.': 'তিনটি সহজ ধাপ।',
    'No account needed to search. No printout needed to board. The queue ends here.':
      'খুঁজতে অ্যাকাউন্ট লাগে না, উঠতে প্রিন্ট লাগে না। লাইন এখানেই শেষ।',
    'Search the board': 'সময়সূচি দেখুন',
    'Pick a corridor and a date. Every class, fare and open seat is on one timetable.':
      'রুট আর তারিখ বাছুন। সব শ্রেণি, ভাড়া আর খালি আসন এক সময়সূচিতেই।',
    'Hold your seat': 'আসন ধরে রাখুন',
    'Tap a seat on the coach map. It is held for ten minutes while you add passengers.':
      'কোচ ম্যাপে আসনে চাপ দিন। যাত্রী যোগ করার সময় দশ মিনিট ধরে রাখা হবে।',
    'Pay and go': 'দিন টাকা, উঠুন গাড়িতে',
    'bKash, Nagad, card or bank. The PNR lands by text before you close the tab.':
      'বিকাশ, নগদ, কার্ড বা ব্যাংক। ট্যাব বন্ধ করার আগেই SMS-এ PNR চলে আসবে।',
    'Why it feels different': 'কেন আলাদা লাগে',
    'The quiet details.': 'নীরব খুঁটিনাটি।',
    'Booking a train should feel like the journey: unhurried, legible, and a little bit romantic.':
      'ট্রেন বুকিংও যাত্রার মতো হোক: ধীর, স্পষ্ট আর একটু রোমান্টিক।',
    '“A ticket is a small promise.”': '“টিকিট একটি ছোট প্রতিশ্রুতি।”',
    'tikit design notes': 'tikit ডিজাইন নোট',
    "Hold, don't hover": 'ধরে রাখুন, ঝুলে থাকবেন না',
    'Selecting a seat holds it for ten minutes. No countdown panic while you find your card.':
      'আসন বাছলেই দশ মিনিট ধরে রাখা হয়। কার্ড খুঁজতে গিয়ে তাড়াহুড়ো নেই।',
    "The women's coach, marked": 'মহিলা কামরা, চিহ্নিত',
    'Every intercity carries a Mahila compartment. Filter for it and the map shows only those berths.':
      'প্রতিটি আন্তঃনগরে মহিলা কামরা থাকে। ফিল্টার করলে ম্যাপে শুধু সেই আসনগুলো দেখাবে।',
    'Refunds that move': 'ফেরত যেটা চলে',
    'Cancel up to 24 hours out and the refund starts itself, back to bKash or card in three working days.':
      '২৪ ঘণ্টা আগে বাতিল করলে ফেরত নিজেই শুরু হয়, তিন কর্মদিবসে বিকাশ বা কার্ডে।',
    'Paper is optional': 'কাগজ লাগবে না',
    'Your PNR arrives by text. The conductor scans the QR. Nothing to print, nothing to lose.':
      'PNR SMS-এ আসবে, কন্ডাক্টর QR স্ক্যান করবেন। প্রিন্ট করতে হবে না, হারানোর ভয় নেই।',
    'Where to next?': 'এরপর কোথায়?',
    "Four intercity corridors leave Dhaka today. Pick a window, we'll do the rest.":
      'আজ ঢাকা থেকে চারটি আন্তঃনগর করিডোর ছাড়ছে। জানালার আসন বাছুন, বাকিটা আমরা দেখছি।',
    'Search seats': 'আসন খুঁজুন',
    'View the board': 'বোর্ড দেখুন',

    // Stations and dynamic labels
    'Dhaka, Kamalapur': 'ঢাকা, কমলাপুর',
    'Sylhet': 'সিলেট',
    'Rajshahi': 'রাজশাহী',
    'Khulna': 'খুলনা',
    "Cox's Bazar": 'কক্সবাজার',
    'adult': 'প্রাপ্তবয়স্ক',
    'adults': 'জন',
    'Thu': 'বৃহস্পতি',
    'Fri': 'শুক্র',
    'Sat': 'শনি',
    '12 Nov': '১২ নভে',
    '13 Nov': '১৩ নভে',
    '14 Nov': '১৪ নভে',
    'Select seats': 'আসন বাছুন',
    'Join waitlist': 'অপেক্ষমাণ তালিকায়',
    'Find trains': 'ট্রেন খুঁজুন',
    'Search trains': 'ট্রেন খুঁজুন'
  };



  var bnExtra = {
    'As printed on the ID': 'পরিচয়পত্রে যেভাবে লেখা',
    'As printed on your ID': 'পরিচয়পত্রে যেভাবে লেখা',
    'Female': 'মহিলা',
    'Male': 'পুরুষ',
    'Other': 'অন্য',
    'Lower': 'নিচ',
    'Middle': 'মাঝ',
    'Upper': 'উপর',
    'Side lower': 'পাশের নিচ',
    'Side upper': 'পাশের উপর',
    'Save passenger': 'যাত্রী সেভ করুন',
    'field needs attention': 'টি ঘর ঠিক করুন',
    'fields need attention': 'টি ঘর ঠিক করুন',
    'Enter the passenger name.': 'যাত্রীর নাম লিখুন।',
    'Enter the passenger name.': 'যাত্রীর নাম লিখুন।',
    'Enter an 11 digit mobile number starting 01.': '০১ দিয়ে শুরু ১১ সংখ্যার মোবাইল নম্বর দিন।',
    'Enter a valid email address.': 'সঠিক ইমেইল ঠিকানা দিন।',
    'Enter your full name.': 'পুরো নাম লিখুন।',
    'Enter an 11 digit mobile number.': '১১ সংখ্যার মোবাইল নম্বর দিন।',
    'Use at least 8 characters.': 'অন্তত ৮ অক্ষর ব্যবহার করুন।',
    'Passwords do not match.': 'পাসওয়ার্ড মিলছে না।',
    'Enter the mobile number or email on your account.': 'অ্যাকাউন্টের মোবাইল বা ইমেইল দিন।',
    'Enter your password.': 'পাসওয়ার্ড দিন।',
    'Enter an 11 digit wallet number.': '১১ সংখ্যার ওয়ালেট নম্বর দিন।',
    'Enter a valid card number.': 'সঠিক কার্ড নম্বর দিন।',
    'Enter the name on the card.': 'কার্ডে লেখা নাম দিন।',
    'Use MM/YY.': 'মাস/বছর লিখুন।',
    'Enter the 3 or 4 digit code.': '৩ বা ৪ সংখ্যার কোড দিন।',
    'Choose a bank.': 'ব্যাংক বাছুন।',
    'Enter the account number.': 'অ্যাকাউন্ট নম্বর দিন।',
    'Check the highlighted fields.': 'চিহ্নিত ঘরগুলো দেখুন।',
    'Check the highlighted payment details.': 'চিহ্নিত পেমেন্ট তথ্য দেখুন।',
    'Passenger 1': 'যাত্রী ১',
    'Passenger 2': 'যাত্রী ২',
    'Passenger 3': 'যাত্রী ৩',
    'Passenger 4': 'যাত্রী ৪',
    'Kamalapur': 'কমলাপুর',
    'Kamalapur to': 'কমলাপুর থেকে',
    'stops': 'স্টপ',
    'left': 'বাকি',
    'status': 'অবস্থা',
    'from': 'শুরু',
    'Sold out': 'শেষ',
    'Few seats': 'কম আসন',
    'Daily': 'প্রতিদিন',
    'No seats': 'আসন নেই',
    'Select seats': 'আসন বাছুন',
    'Join waitlist': 'অপেক্ষমাণ তালিকায়',
    'AC chair': 'এসি চেয়ার',
    'chair and shovan': 'চেয়ার ও শোভন',
    'scenic morning run': 'সুন্দর সকালের যাত্রা',
    'golden hour': 'সোনালি বিকেল',
    'overnight': 'রাতের যাত্রা',
    'morning': 'সকাল',
    'daily': 'প্রতিদিন',
    'day train': 'দিনের ট্রেন',
    'afternoon': 'দুপুর',
    'Search': 'খুঁজুন',
    '1 passenger': '১ জন যাত্রী',
    'Seats release 10 days ahead': 'আসন ছাড়ে ১০ দিন আগে',
    'Update search': 'সার্চ আপডেট করুন',
    'All classes': 'সব শ্রেণি',
    'Any time': 'যেকোনো সময়',
    'Morning': 'সকাল',
    'Afternoon': 'দুপুর',
    'Evening': 'সন্ধ্যা',
    'Available only': 'শুধু খালি আসন',
    'Sort': 'সাজান',
    'Departure': 'ছাড়ার সময়',
    'Lowest fare': 'কম ভাড়া',
    'Shortest': 'কম সময়',
    'Fares include VAT, sample data': 'ভাড়ায় ভ্যাট অন্তর্ভুক্ত, নমুনা তথ্য',
    'No trains match those filters': 'এই ফিল্টারে কোনো ট্রেন নেই',
    'Try clearing the class filter, or widening the departure window. Sold-out seats can be filtered back in.': 'শ্রেণির ফিল্টার মুছে দেখুন, বা ছাড়ার সময়ের পরিধি বাড়ান।',
    'Clear filters': 'ফিল্টার মুছুন',
    'No sample board for this route yet': 'এই রুটের নমুনা বোর্ড এখনো নেই',
    'Load the coastal board': 'উপকূলের বোর্ড খুলুন',
    'Booking, step 1 of 4': 'বুকিং, ধাপ ১/৪',
    'Booking, step 2 of 4': 'বুকিং, ধাপ ২/৪',
    'Change seats': 'আসন বদলান',
    'Seats are held while you finish the details.': 'তথ্য দেওয়ার সময় আসন ধরে রাখা আছে।',
    'Seats': 'আসন',
    'Pick a seat you can look out of.': 'জানালার পাশের আসন বেছে নিন।',
    'Window seats sit on the outer rails, bay seats face each other. Choose': 'জানালার আসন বাইরের দিকে, বে আসন মুখোমুখি। বেছে নিন',
    'seat, then add the passenger names.': 'টি আসন, তারপর যাত্রীর নাম দিন।',
    'Now booking': 'এখন বুকিং হচ্ছে',
    'Ticket': 'টিকিট',
    'Step 3 of 4': 'ধাপ ৩/৪',
    'Hold': 'হোল্ড',
    'Change': 'বদলান',
    'Towards Chattogram →': 'চট্টগ্রামের দিকে →',
    'Window': 'জানালা',
    'Aisle': 'আইল',
    'Open': 'খালি',
    'Selected': 'বাছাই করা',
    'Taken': 'নেওয়া',
    'Women\'s coach available on this service': 'এই ট্রেনে মহিলা কামরা আছে',
    'Your selection': 'আপনার বাছাই',
    'Seats held': 'আসন ধরে রাখা',
    'No seats selected yet': 'এখনো কোনো আসন বাছা হয়নি',
    'Tap an open seat on the map to begin.': 'শুরু করতে ম্যাপে খালি আসনে চাপ দিন।',
    'Arrow keys move between seats. Enter picks one.': 'তীর চিহ্নের কী দিয়ে আসন বদলান, এন্টার দিয়ে বাছাই করুন।',
    'Two minutes left on your seat hold.': 'আসন হোল্ড শেষ হতে আর দুই মিনিট বাকি।',
    'The 10 minute hold expired. Pick your seats again.': '১০ মিনিটের হোল্ড শেষ। আবার আসন বাছাই করুন।',
    'VAT': 'ভ্যাট',
    'Included': 'অন্তর্ভুক্ত',
    'Service fee': 'সার্ভিস ফি',
    'Total': 'মোট',
    'Seats are held for 10 minutes. Cancel up to 24 hours before departure for an automatic refund.': 'আসন ১০ মিনিট ধরে রাখা হয়। ছাড়ার ২৪ ঘণ্টা আগে বাতিলে স্বয়ংক্রিয় ফেরত।',
    'Read the fare and refund rules': 'ভাড়া ও ফেরতের নিয়ম পড়ুন',
    'Travelling with someone?': 'কারো সাথে যাচ্ছেন?',
    'Add up to four passengers on one booking. Seats beside each other are highlighted on the map.': 'এক বুকিংয়ে সর্বোচ্চ চার যাত্রী। পাশের আসনগুলো ম্যাপে চিহ্নিত।',
    'Who is travelling?': 'কে যাচ্ছেন?',
    'Names should match the photo ID shown at the gate.': 'গেটে দেখানো ছবিসহ পরিচয়পত্রের সাথে নাম মিলতে হবে।',
    'Use saved details': 'সেভ করা তথ্য ব্যবহার করুন',
    'Contact': 'যোগাযোগ',
    'We text the PNR and any platform changes to this number.': 'এই নম্বরে PNR ও প্লাটফর্ম পরিবর্তনের SMS যাবে।',
    'Mobile number': 'মোবাইল নম্বর',
    'Email': 'ইমেইল',
    'Send trip updates by SMS. One message on booking, one before departure.': 'SMS-এ যাত্রার আপডেট পাঠান। বুকিংয়ে একটি, ছাড়ার আগে একটি।',
    'Continue': 'চালিয়ে যান',
    'Full name': 'পুরো নাম',
    'As printed on the ID': 'পরিচয়পত্রে যেভাবে লেখা',
    'Age': 'বয়স',
    'Gender': 'লিঙ্গ',
    'Berth preference': 'বার্থ পছন্দ',
    'No preference': 'পছন্দ নেই',
    'Passenger': 'যাত্রী',
    'Adult': 'প্রাপ্তবয়স্ক',
    'Payment, step 3 of 4': 'পেমেন্ট, ধাপ ৩/৪',
    'Your seats are held while you pay.': 'টাকা দেওয়ার সময় আসন ধরে রাখা আছে।',
    'Pay for the journey.': 'যাত্রার টাকা দিন।',
    'Choose a wallet, card or bank transfer. This is a design prototype: no money moves.': 'ওয়ালেট, কার্ড বা ব্যাংক বেছে নিন। এটি ডিজাইন প্রোটোটাইপ, টাকা কাটবে না।',
    'Encrypted, card details never stored': 'এনক্রিপ্টেড, কার্ডের তথ্য সংরক্ষণ হয় না',
    'Payment method': 'পেমেন্ট মাধ্যম',
    'How would you like to pay?': 'কীভাবে টাকা দিতে চান?',
    'bKash': 'বিকাশ',
    'Nagad': 'নগদ',
    'Wallet, instant': 'ওয়ালেট, সাথে সাথে',
    'Card': 'কার্ড',
    'Bank transfer': 'ব্যাংক ট্রান্সফার',
    'Pay with bKash': 'বিকাশে দিন',
    'bKash number': 'বিকাশ নম্বর',
    'Nagad number': 'নগদ নম্বর',
    'Pay with Nagad': 'নগদে দিন',
    'Pay by card': 'কার্ডে দিন',
    'Name on card': 'কার্ডে লেখা নাম',
    'Card number': 'কার্ড নম্বর',
    'Expiry': 'মেয়াদ',
    'CVV': 'সিভিভি',
    'Pay by bank transfer': 'ব্যাংক ট্রান্সফারে দিন',
    'Bank': 'ব্যাংক',
    'Account number': 'অ্যাকাউন্ট নম্বর',
    'Trip summary': 'যাত্রার সারসংক্ষেপ',
    'Your journey': 'আপনার যাত্রা',
    'Fare': 'ভাড়া',
    'Subtotal': 'সাবটোটাল',
    'Pay': 'টাকা দিন',
    'You\'re booked.': 'বুকিং নিশ্চিত হয়েছে।',
    'Confirmed': 'নিশ্চিত',
    'A text with the PNR is on its way. Show the gate code below when the conductor comes around.': 'PNR সহ SMS আসছে। কন্ডাক্টর এলে নিচের গেট কোড দেখান।',
    'e-ticket': 'ই-টিকিট',
    'Depart': 'ছাড়বে',
    'Arrive': 'পৌঁছাবে',
    'Paid, confirmed': 'পরিশোধিত, নিশ্চিত',
    'Gate code': 'গেট কোড',
    'Show this with a photo ID. The conductor scans it at the gate.': 'ছবিসহ পরিচয়পত্রসহ এটি দেখান। গেটে কন্ডাক্টর স্ক্যান করবেন।',
    'Demo ticket, not valid for travel': 'নমুনা টিকিট, যাত্রার জন্য বৈধ নয়',
    'Print ticket': 'টিকিট প্রিন্ট করুন',
    'Share': 'শেয়ার',
    'Add to wallet': 'ওয়ালেটে রাখুন',
    'Go to my trips': 'আমার যাত্রায় যান',
    'Before you go': 'যাওয়ার আগে',
    'Three small things.': 'তিনটি ছোট কথা।',
    'Arrive at Kamalapur 30 minutes before departure. Platforms are announced 20 minutes ahead.': 'ছাড়ার ৩০ মিনিট আগে কমলাপুরে পৌঁছান। প্লাটফর্ম ২০ মিনিট আগে জানানো হয়।',
    'Bring the photo ID used for the booking. The name on the ticket must match.': 'বুকিংয়ে ব্যবহৃত ছবিসহ পরিচয়পত্র আনুন। টিকিটের নাম মিলতে হবে।',
    'Show the PNR or gate code when the conductor reaches your coach. No printout required.': 'কন্ডাক্টর কামরায় এলে PNR বা গেট কোড দেখান। প্রিন্ট লাগবে না।',
    'Wheelchair or extra help?': 'হুইলচেয়ার বা বাড়তি সহায়তা?',
    'Manage': 'ব্যবস্থাপনা',
    'View in my trips': 'আমার যাত্রায় দেখুন',
    'Cancel this trip': 'এই যাত্রা বাতিল করুন',
    'Trip updates': 'যাত্রার আপডেট',
    'SMS on': 'SMS চালু',
    'Sign in to your journeys.': 'আপনার যাত্রায় সাইন ইন করুন।',
    'Your tickets, passenger details and refunds, in one quiet place.': 'টিকিট, যাত্রীর তথ্য আর ফেরত, এক জায়গায়।',
    'Mobile or email': 'মোবাইল বা ইমেইল',
    'One-time code': 'ওয়ান-টাইম কোড',
    'Password': 'পাসওয়ার্ড',
    'Forgot password?': 'পাসওয়ার্ড ভুলে গেছেন?',
    'Show': 'দেখান',
    'Keep me signed in on this device': 'এই ডিভাইসে সাইন ইন রাখুন',
    'New to tikit?': 'tikit-এ নতুন?',
    'Send code': 'কোড পাঠান',
    'Six digit code': 'ছয় সংখ্যার কোড',
    'Verify and sign in': 'যাচাই করে সাইন ইন',
    'Password reset': 'পাসওয়ার্ড রিসেট',
    'Send a fresh link.': 'নতুন লিংক পাঠান।',
    'Send reset link': 'রিসেট লিংক পাঠান',
    'Cancel': 'বাতিল',
    'Start with a seat.': 'একটি আসন দিয়ে শুরু।',
    'One account for tickets, saved passengers, and refunds that move on their own.': 'টিকিট, সেভ করা যাত্রী আর নিজে থেকে চলা ফেরত, এক অ্যাকাউন্টে।',
    'Details': 'তথ্য',
    'Verify': 'যাচাই',
    'Ready': 'প্রস্তুত',
    'Confirm password': 'পাসওয়ার্ড নিশ্চিত করুন',
    'I agree to the': 'আমি সম্মত',
    'terms': 'শর্তাবলি',
    'and the': 'এবং',
    'refund policy': 'ফেরত নীতির',
    'Continue to verify': 'যাচাইয়ে যান',
    'Check your phone': 'ফোনে দেখুন',
    'Verification code': 'যাচাই কোড',
    'Verify and create account': 'যাচাই করে অ্যাকাউন্ট খুলুন',
    'Back to details': 'তথ্যে ফিরুন',
    'Resend code': 'আবার কোড পাঠান',
    'Account ready': 'অ্যাকাউন্ট প্রস্তুত',
    'Welcome aboard.': 'স্বাগতম।',
    'Open my dashboard': 'আমার ড্যাশবোর্ড খুলুন',
    'Track a train': 'ট্রেন দেখুন',
    'Verified': 'যাচাইকৃত',
    'Since 2024': '২০২৪ থেকে',
    'Platform change for tomorrow\'s trip': 'কালকের যাত্রায় প্লাটফর্ম পরিবর্তন',
    'Upcoming': 'আসন্ন',
    'This year': 'এই বছর',
    'Saved': 'সেভ করা',
    'trips this week': 'যাত্রা এই সপ্তাহে',
    'journeys taken': 'যাত্রা সম্পন্ন',
    'passengers': 'যাত্রী',
    'View ticket': 'টিকিট দেখুন',
    'Cancel trip': 'যাত্রা বাতিল',
    'Live status': 'লাইভ অবস্থা',
    'Platform': 'প্লাটফর্ম',
    'Updated': 'আপডেট',
    'Refresh status': 'অবস্থা রিফ্রেশ',
    'Track another train': 'অন্য ট্রেন দেখুন',
    'Recent and upcoming.': 'সাম্প্রতিক ও আসন্ন।',
    'Book another': 'আরেকটি বুক করুন',
    'People you travel with.': 'যাদের সাথে যান।',
    'Add passenger': 'যাত্রী যোগ করুন',
    'Ready at checkout.': 'চেকআউটে প্রস্তুত।',
    'Add method': 'মাধ্যম যোগ করুন',
    'Your details.': 'আপনার তথ্য।',
    'Save changes': 'পরিবর্তন সেভ করুন',
    'Verified user': 'যাচাইকৃত ব্যবহারকারী',
    'Help, without the hold music.': 'হোল্ড মিউজিক ছাড়াই সহায়তা।',
    'Search the common questions, check a train, or work out a refund. The station desk is still one call away.': 'সাধারণ প্রশ্ন খুঁজুন, ট্রেন দেখুন, বা ফেরত হিসাব করুন। স্টেশন ডেস্ক এক কল দূরে।',
    'All topics': 'সব বিষয়',
    'Booking': 'বুকিং',
    'Refunds': 'ফেরত',
    'Travel': 'যাত্রা',
    'Access': 'প্রবেশাধিকার',
    'Common questions': 'সাধারণ প্রশ্ন',
    'The short answers.': 'সংক্ষিপ্ত উত্তর।',
    'Filtered live as you type': 'লেখার সাথে সাথে ফিল্টার',
    'How long is a seat held?': 'আসন কতক্ষণ ধরে রাখা হয়?',
    'Ten minutes from the moment you continue from the seat map. The timer is visible on the booking and payment screens. If it runs out, the seats are released and you choose again.': 'সিট ম্যাপ থেকে এগোনোর পর দশ মিনিট। বুকিং ও পেমেন্ট স্ক্রিনে সময় দেখা যায়। শেষ হলে আসন ছেড়ে দেওয়া হয়, আবার বাছতে হবে।',
    'Can I book without creating an account?': 'অ্যাকাউন্ট ছাড়া বুক করা যায়?',
    'Yes. Search, choose a seat and pay as a guest. An account only adds convenience: saved passengers, payment methods, and a single place for every PNR.': 'হ্যাঁ। গেস্ট হিসেবে খুঁজুন, আসন বাছুন আর টাকা দিন। অ্যাকাউন্ট শুধু সুবিধা যোগ করে।',
    'When do seats release for a date?': 'কোনো তারিখের আসন কবে ছাড়ে?',
    'How do I cancel and get a refund?': 'বাতিল করে ফেরত কীভাবে পাব?',
    'Open the trip from': 'যাত্রাটি খুলুন',
    'and choose cancel. More than 24 hours before departure, 90% of the fare starts back to the original payment method. Three working days is the usual arrival time.': 'থেকে, তারপর বাতিল বাছুন। ছাড়ার ২৪ ঘণ্টা আগে ভাড়ার ৯০% মূল মাধ্যমে ফেরত শুরু হয়।',
    'Can I change the passenger name?': 'যাত্রীর নাম বদলানো যায়?',
    'Name changes are not part of this concept. In a live product, they would depend on the railway\'s rules and the time left before departure. For now, cancel and rebook.': 'এই কনসেপ্টে নাম পরিবর্তন নেই। বাতিল করে আবার বুক করুন।',
    'Which wallets and cards do you accept?': 'কোন ওয়ালেট ও কার্ড নেন?',
    'What if the train is late?': 'ট্রেন দেরি হলে?',
    'Is the ticket valid on my phone?': 'ফোনে টিকিট বৈধ?',
    'Can I book a women\'s coach seat?': 'মহিলা কামরার আসন বুক করা যায়?',
    'Wheelchair or extra help at the station?': 'স্টেশনে হুইলচেয়ার বা সহায়তা?',
    'No questions match that search. Try another word, or call 13107.': 'এই সার্চে কিছু মেলেনি। অন্য শব্দে খুঁজুন, বা ১৩১০৭-এ কল করুন।',
    'Live running status': 'লাইভ চলাচলের অবস্থা',
    'Where is my train?': 'আমার ট্রেন কোথায়?',
    'Check': 'দেখুন',
    'Sample feed. Live railway data would connect at launch.': 'নমুনা ফিড। লঞ্চে লাইভ রেল তথ্য যুক্ত হবে।',
    'Refund calculator': 'ফেরত ক্যালকুলেটর',
    'Work out the return.': 'ফেরত হিসাব করুন।',
    'Fare paid': 'পরিশোধিত ভাড়া',
    'Cancellation window': 'বাতিলের সময়',
    'Calculate refund': 'ফেরত হিসাব করুন',
    'Estimated back': 'আনুমানিক ফেরত',
    'Talk to a person': 'মানুষের সাথে কথা বলুন',
    'Fare chart': 'ভাড়ার তালিকা',
    'What a seat costs.': 'আসনের দাম।',
    'The fine print': 'সূক্ষ্ম শর্ত',
    'Small terms, plainly.': 'সহজ ভাষায় শর্ত।',
    'Running': 'চলছে',
    'Route': 'রুট',
  };

  Object.keys(bnExtra).forEach(function (key) {
    if (!bn[key]) bn[key] = bnExtra[key];
  });

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'bn' || saved === 'en') return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, SVG: 1, PATH: 1, TEXTAREA: 1, CODE: 1 };
  var store = new WeakMap();
  var attrStore = new WeakMap();

  function translate(text) {
    var trimmed = text.trim();
    if (!trimmed) return text;
    var hit = bn[trimmed];
    if (!hit) return text;
    return text.replace(trimmed, hit);
  }

  function walk(node, lang) {
    if (node.nodeType === 3) {
      var parent = node.parentNode;
      if (!parent || SKIP_TAGS[parent.tagName]) return;
      if (!store.has(node)) store.set(node, node.nodeValue);
      node.nodeValue = lang === 'bn' ? translate(store.get(node)) : store.get(node);
      return;
    }
    if (node.nodeType !== 1 || SKIP_TAGS[node.tagName]) return;
    for (var i = 0; i < node.childNodes.length; i += 1) walk(node.childNodes[i], lang);
  }

  var optionSources = null;

  function captureOptionSources() {
    optionSources = [];
    Array.prototype.forEach.call(document.querySelectorAll('option'), function (el) {
      optionSources.push({ el: el, text: el.textContent });
    });
  }

  function translateOptions(lang) {
    if (!optionSources) return;
    optionSources.forEach(function (entry) {
      if (!entry.el.isConnected) return;
      entry.el.textContent = lang === 'bn' ? translate(entry.text) : entry.text;
    });
  }

  function translateDynamic(lang) {
    var dynamic = document.querySelectorAll('[data-i18n-live]');
    Array.prototype.forEach.call(dynamic, function (el) {
      if (!attrStore.has(el)) attrStore.set(el, {});
      var cache = attrStore.get(el);
      if (cache.live === undefined) cache.live = el.textContent;
      var source = cache.live;
      if (lang === 'bn') {
        el.textContent = source === 'adult' ? 'প্রাপ্তবয়স্ক'
          : source === 'adults' ? 'জন'
          : translate(source);
      } else {
        el.textContent = source;
      }
    });
    var paxSuffix = document.querySelector('[data-pax-single]');
    if (paxSuffix) {
      var count = document.querySelector('[data-pax-count]');
      var amount = count ? Number(count.textContent) : 1;
      paxSuffix.textContent = lang === 'bn'
        ? (amount === 1 ? 'প্রাপ্তবয়স্ক' : 'জন')
        : (amount === 1 ? 'adult' : 'adults');
    }
  }

  function translateAttributes(lang) {
    var inputs = document.querySelectorAll('[placeholder]');
    Array.prototype.forEach.call(inputs, function (el) {
      if (!attrStore.has(el)) attrStore.set(el, {});
      var cache = attrStore.get(el);
      if (cache.placeholder === undefined) cache.placeholder = el.getAttribute('placeholder');
      var value = cache.placeholder;
      if (!value) return;
      el.setAttribute('placeholder', lang === 'bn' ? translate(value) : value);
    });
  }

  function updateToggles(lang) {
    var toggles = document.querySelectorAll('[data-lang-toggle]');
    Array.prototype.forEach.call(toggles, function (btn) {
      var isBn = lang === 'bn';
      btn.setAttribute('aria-pressed', isBn ? 'true' : 'false');
      btn.setAttribute('aria-label', isBn ? 'Switch to English' : 'বাংলায় দেখুন');
      btn.setAttribute('title', isBn ? 'Switch to English' : 'বাংলায় দেখুন');
      var label = btn.querySelector('[data-lang-label]');
      if (label) label.textContent = isBn ? 'English' : 'বাংলা';
      var shortLabel = btn.querySelector('[data-lang-short]');
      if (shortLabel) shortLabel.textContent = isBn ? 'EN' : 'বাং';
    });
    var live = document.getElementById('langStatus');
    if (live) live.textContent = lang === 'bn' ? 'ভাষা: বাংলা' : 'Language: English';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    if (document.body) {
      document.body.classList.toggle('lang-bn', lang === 'bn');
      document.body.classList.toggle('lang-en', lang === 'en');
    }
    applying = true;
    walk(document.body, lang);
    translateOptions(lang);
    translateDynamic(lang);
    translateAttributes(lang);
    updateToggles(lang);
    applying = false;
    document.dispatchEvent(new CustomEvent('tikit:lang', { detail: { lang: lang } }));
    if (observing) {
      observer.disconnect();
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      watch();
    }
  }

  var observer = null;
  var applying = false;
  var pending = false;
  var observing = false;

  function bodyPass(lang) {
    captureOptionSources();
    walk(document.body, lang);
    translateOptions(lang);
    translateDynamic(lang);
    translateAttributes(lang);
    applying = false;
  }

  function schedulePass() {
    if (pending) return;
    pending = true;
    var run = function () {
      pending = false;
      if (!observer) return;
      var lang = document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
      observer.disconnect();
      applying = true;
      bodyPass(lang);
      observer.observe(document.body, { childList: true, subtree: true });
    };
    if (window.requestAnimationFrame) window.requestAnimationFrame(run);
    else window.setTimeout(run, 16);
  }

  function watch() {
    if (observer || !window.MutationObserver) return;
    observer = new MutationObserver(function (records) {
      if (applying) return;
      var relevant = records.some(function (r) {
        return r.type === 'childList' && r.addedNodes && r.addedNodes.length;
      });
      if (relevant) schedulePass();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    observing = true;
  }

  function init() {
    captureOptionSources();
    var lang = readLang();
    apply(lang);

    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-lang-toggle]');
      if (!btn) return;
      var next = document.documentElement.getAttribute('data-lang') === 'bn' ? 'en' : 'bn';
      storeLang(next);
      apply(next);
    });

    window.tikitI18n = { translate: translate };

  window.tikitLang = {
      get: function () { return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG; },
      set: function (next) { storeLang(next); apply(next); },
      refresh: function () { captureOptionSources(); apply(readLang()); },
      t: function (en) { return this.get() === 'bn' ? (bn[en] || en) : en; }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
