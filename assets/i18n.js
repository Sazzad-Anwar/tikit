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
    'Thu, 12 Nov': 'বৃহস্পতি, ১২ নভে',
    'Fri, 13 Nov': 'শুক্র, ১৩ নভে',
    'Sat, 14 Nov': 'শনি, ১৪ নভে',
    'Thursday, 12 November': 'বৃহস্পতিবার, ১২ নভেম্বর',
    'Friday, 13 November': 'শুক্রবার, ১৩ নভেম্বর',
    'Saturday, 14 November': 'শনিবার, ১৪ নভেম্বর',
    'passenger': 'যাত্রী',
    'trains': 'ট্রেন',
    'service': 'ট্রেন',
    'services': 'ট্রেন',
    'shown': 'দেখানো হচ্ছে',
    'Shovan or Snigdha': 'শোভন বা স্নিগ্ধা',
    'Signing in': 'সাইন ইন হচ্ছে',
    'Code sent': 'কোড পাঠানো হয়েছে',
    'Sent': 'পাঠানো হয়েছে',
    'Updated just now': 'এইমাত্র হালনাগাদ',
    'No sample board for': 'নমুনা বোর্ড নেই',
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

  var bnFill = {
    "My account, Friday, 13 November": "আমার অ্যাকাউন্ট, শুক্রবার, ১৩ নভেম্বর",
    "Good evening, Nusrat.": "শুভ সন্ধ্যা, নুসরাত।",
    "Two trips this week, one platform change. Everything else is on time.": "এই সপ্তাহে দুটি যাত্রা, একটি প্লাটফর্ম পরিবর্তন। বাকি সব সময়মতো।",
    "Sonar Bangla Express 786 now leaves Kamalapur from platform 4, not platform 2. The departure time is unchanged.": "সোনার বাংলা এক্সপ্রেস ৭৮৬ এখন কমলাপুরের ২ নম্বর নয়, ৪ নম্বর প্লাটফর্ম থেকে ছাড়বে। ছাড়ার সময় অপরিবর্তিত।",
    "See live status": "লাইভ অবস্থা দেখুন",
    "Upcoming, tomorrow": "আসন্ন, আগামীকাল",
    "Kamalapur → Chattogram, Friday, 13 November": "কমলাপুর → চট্টগ্রাম, শুক্রবার, ১৩ নভেম্বর",
    "Departs": "ছাড়ে",
    "Platform 4": "প্লাটফর্ম ৪",
    "Arrives": "পৌঁছায়",
    "Dhaka → Chattogram, 07:00": "ঢাকা → চট্টগ্রাম, 07:00",
    "2 min ago": "২ মিনিট আগে",
    "View": "দেখুন",
    "Completed": "সম্পন্ন",
    "Receipt": "রসিদ",
    "Book again": "আবার বুক করুন",
    "Status": "অবস্থা",
    "Action": "কার্য",
    "34 yrs, Female": "৩৪ বছর, মহিলা",
    "Self": "নিজে",
    "41 yrs, Male": "৪১ বছর, পুরুষ",
    "28 yrs, Female": "২৮ বছর, মহিলা",
    "Passenger details are used only for ticketing and are never shared.": "যাত্রীর তথ্য শুধু টিকিটের জন্য ব্যবহৃত হয়, কোথাও শেয়ার করা হয় না।",
    "Default": "ডিফল্ট",
    "Visa": "ভিসা",
    "•••• 4242, expires 12/29": "•••• ৪২৪২, মেয়াদ ১২/২৯",
    "Make default": "ডিফল্ট করুন",
    "Saved methods are tokenised. Card numbers are never stored on our side.": "সেভ করা মাধ্যম টোকেনাইজড। কার্ড নম্বর আমাদের কাছে রাখা হয় না।",
    "Language": "ভাষা",
    "SMS updates for trips and platform changes": "যাত্রা ও প্লাটফর্ম পরিবর্তনের এসএমএস আপডেট",
    "Email receipts after every journey": "প্রতিটি যাত্রার পরে ইমেইলে রসিদ",
    "Occasional notes about new routes and fares": "নতুন রুট ও ভাড়া নিয়ে মাঝে মাঝে খবর",
    "Saved passengers": "সেভ করা যাত্রী",
    "Add a passenger.": "যাত্রী যোগ করুন।",
    "Names should match the photo ID shown at the station.": "নাম স্টেশনে দেখানো ছবিসহ পরিচয়পত্রের সাথে মিলতে হবে।",
    "Demo form. Nothing leaves your browser.": "ডেমো ফর্ম। কিছুই আপনার ব্রাউজার ছাড়ে না।",
    "Intercity rail, booked without the queue. A design concept for Bangladesh Railway travellers.": "লাইন ছাড়াই আন্তঃনগর ট্রেন। বাংলাদেশ রেলের যাত্রীদের জন্য একটি ডিজাইন ধারণা।",
    "Independent concept. Not affiliated with Bangladesh Railway. Fares and timings are sample data.": "স্বতন্ত্র ধারণা। বাংলাদেশ রেলের সাথে সম্পৃক্ত নয়। ভাড়া ও সময়সূচি নমুনা তথ্য।",
    "Kamalapur, Dhaka": "কমলাপুর, ঢাকা",
    "Seat holds, refunds, and wheelchair berths. Ask for the station desk.": "আসন হোল্ড, ফেরত আর হুইলচেয়ার বার্থ। স্টেশন ডেস্কে জিজ্ঞাসা করুন।",
    "Concept design, Dhaka, 2026": "ধারণা ডিজাইন, ঢাকা, ২০২৬",
    "from ৳345": "৳৩৪৫ থেকে",
    "from ৳855": "৳৮৫৫ থেকে",
    "from ৳1,325": "৳১,৩২৫ থেকে",
    "F-Berth": "এফ-বার্থ",
    "from ৳1,580": "৳১,৫৮০ থেকে",
    "Where to": "পরবর্তী",
    "next": "গন্তব্য",
    "Train results": "ট্রেনের ফলাফল",
    "Try clearing the class filter, or widening the departure window. Sold-out services can be filtered back in.": "ক্লাস ফিল্টার সরান, বা ছাড়ার সময়ের সীমা বাড়ান। সোল্ড-আউট ট্রেনও ফিল্টারে ফিরিয়ে আনা যায়।",
    "Timetables, fares and seat counts are sample data for this design concept. Live inventory, real-time availability and railway fare rules would connect at launch.": "সময়সূচি, ভাড়া ও আসনসংখ্যা এই ডিজাইন ধারণার নমুনা তথ্য। লঞ্চে লাইভ ইনভেন্টরি, রিয়েল-টাইম আসন ও রেলের ভাড়ার নিয়ম যুক্ত হবে।",
    "This concept is wired for four corridors: Dhaka to Chattogram, Sylhet, Rajshahi and Cox’s Bazar.": "এই ধারণাটি চারটি করিডোরের জন্য তৈরি: ঢাকা থেকে চট্টগ্রাম, সিলেট, রাজশাহী ও কক্সবাজার।",
    "Waitlist": "অপেক্ষমাণ তালিকা",
    "Shovan or Snigdha, Thu, 12 Nov": "শোভন বা স্নিগ্ধা, বৃহস্পতি, ১২ নভে",
    "Enter an 11 digit number starting 01.": "০১ দিয়ে শুরু হওয়া ১১ সংখ্যার নম্বর দিন।",
    "Join the waitlist": "অপেক্ষমাণ তালিকায় যোগ দিন",
    "One text when a seat frees. Nothing else.": "আসন খালি হলে একটি এসএমএস। এর বেশি কিছু নয়।",
    "You're on the list.": "আপনি তালিকায় আছেন।",
    "We'll text": "আমরা এসএমএস করব",
    "if a seat opens on this train.": "এই ট্রেনে আসন খালি হলে।",
    "Close": "বন্ধ করুন",
    "One account, every journey": "একটি অ্যাকাউন্ট, সব যাত্রা",
    "The best part of the trip starts before the platform.": "যাত্রার সেরা অংশটা প্লাটফর্মের আগেই শুরু।",
    "Keep every PNR in one place, save the people you travel with, and start a refund without a phone call.": "সব PNR এক জায়গায় রাখুন, সঙ্গের যাত্রীদের সেভ করুন, ফোন ছাড়াই ফেরত শুরু করুন।",
    "upcoming": "আসন্ন",
    "Thu, 12 Nov, Snigdha": "বৃহস্পতি, ১২ নভে, স্নিগ্ধা",
    "Hold 10:00": "হোল্ড ১০:০০",
    "Automatic": "স্বয়ংক্রিয়",
    "Mobile number or email": "মোবাইল নম্বর বা ইমেইল",
    "Design prototype. Use any mobile number and a password of four or more characters.": "ডিজাইন প্রোটোটাইপ। যেকোনো মোবাইল নম্বর আর চার অক্ষরের বেশি পাসওয়ার্ড দিন।",
    "We'll text a six digit code to this number.": "এই নম্বরে ছয় সংখ্যার কোড পাঠাব।",
    "Demo code: any six digits.": "ডেমো কোড: যেকোনো ছয় সংখ্যা।",
    "Independent concept, not affiliated with Bangladesh Railway.": "স্বতন্ত্র ধারণা, বাংলাদেশ রেলের সাথে সম্পৃক্ত নয়।",
    "Enter the mobile number or email on your account. A reset link will arrive with a ten minute life.": "অ্যাকাউন্টের মোবাইল নম্বর বা ইমেইল দিন। দশ মিনিটের জন্য বৈধ রিসেট লিংক আসবে।",
    "Demo only. No message is sent.": "শুধু ডেমো। কোনো বার্তা পাঠানো হয় না।",
    "Search help": "সহায়তা খুঁজুন",
    "This concept shows seats releasing ten days ahead. A live build would follow the railway's own advance booking window, including Eid and holiday rules.": "এই ধারণায় আসন দশ দিন আগে ছাড়া হয়। লাইভ সংস্করণে রেলের নিজস্ব অগ্রিম বুকিং সময়, ঈদ ও ছুটির নিয়ম মানা হবে।",
    "bKash, Nagad, Visa, Mastercard, American Express, and bank transfer from Sonali, BRAC, City, Dutch-Bangla and Islami Bank. The checkout is a design prototype, so nothing is charged.": "বিকাশ, নগদ, ভিসা, মাস্টারকার্ড, আমেরিকান এক্সপ্রেস, আর সোনালী, ব্র্যাক, সিটি, ডাচ-বাংলা ও ইসলামী ব্যাংকের ট্রান্সফার। চেকআউট ডিজাইন প্রোটোটাইপ, কোনো টাকা কাটা হয় না।",
    "Check the live status card on this page or in your dashboard. Platform changes are sent by SMS when you opt in. If the railway cancels a service, a full refund would start automatically.": "এই পাতার লাইভ অবস্থা কার্ড বা ড্যাশবোর্ড দেখুন। সম্মতি দিলে প্লাটফর্ম পরিবর্তনের এসএমএস যাবে। রেল ট্রেন বাতিল করলে পুরো ভাড়া স্বয়ংক্রিয়ভাবে ফেরত শুরু হবে।",
    "Yes. The PNR and gate code are enough. Keep a screenshot offline for peace of mind, and carry the photo ID used in the booking.": "হ্যাঁ। PNR আর গেট কোডই যথেষ্ট। নিশ্চিন্ত থাকতে স্ক্রিনশট অফলাইনে রাখুন, আর বুকিংয়ের ছবিসহ পরিচয়পত্র সাথে রাখুন।",
    "Every intercity carries a Mahila compartment. In a live build, the seat map would switch to that coach when the filter is on. This concept shows the control and marks the feature on the map.": "প্রতিটি আন্তঃনগর ট্রেনে মহিলা কামরা থাকে। লাইভ সংস্করণে ফিল্টার চালু করলে সিট ম্যাপ ওই কামরায় বদলে যাবে। এই ধারণায় নিয়ন্ত্রণটি দেখানো হয়েছে এবং ম্যাপে চিহ্নিত।",
    "Call": "কল করুন",
    "at least four hours before departure. The station desk can arrange a wheelchair, boarding help, and a lower berth where available.": "ছাড়ার অন্তত চার ঘণ্টা আগে। স্টেশন ডেস্ক হুইলচেয়ার, ওঠার সহায়তা আর সুযোগ থাকলে নিচের বার্থের ব্যবস্থা করতে পারে।",
    "Sample feed": "নমুনা ফিড",
    "More than 48 hours before": "৪৮ ঘণ্টার বেশি আগে",
    "24 to 48 hours before": "২৪ থেকে ৪৮ ঘণ্টা আগে",
    "12 to 24 hours before": "১২ থেকে ২৪ ঘণ্টা আগে",
    "Less than 12 hours before": "১২ ঘণ্টার কম আগে",
    "After departure": "ছাড়ার পরে",
    "Choose a window and calculate. Sample policy for this concept.": "সময় বেছে নিয়ে হিসাব করুন। এই ধারণার নমুনা নীতি।",
    "Station": "স্টেশন",
    "Kamalapur ticket desk, platform 1": "কমলাপুর টিকিট ডেস্ক, প্লাটফর্ম ১",
    "Ask for the station manager": "স্টেশন ম্যানেজারকে জিজ্ঞাসা করুন",
    "Sample one-way fares, VAT included. Children under five travel free. The full railway fare table would replace this at launch.": "একমুখী ভাড়ার নমুনা, ভ্যাটসহ। পাঁচ বছরের কম শিশুরা বিনা টিকিটে। লঞ্চে রেলের পূর্ণ ভাড়ার তালিকা এটার জায়গা নেবে।",
    "Fares are illustrative. Real railway pricing, discounts and holiday surcharges would apply.": "ভাড়া কেবল উদাহরণ। বাস্তবে রেলের মূল্য, ছাড় ও ছুটির সারচার্জ প্রযোজ্য হবে।",
    "This is a design concept, not a railway service. Nothing here books a real seat or charges money.": "এটি একটি ডিজাইন ধারণা, রেল সেবা নয়। এখানে সত্যিকারের আসন বুক বা টাকা কাটা হয় না।",
    "Tickets and fares are sample data for four corridors. They do not represent Bangladesh Railway inventory or pricing.": "টিকিট ও ভাড়া চারটি করিডোরের নমুনা তথ্য। এগুলো বাংলাদেশ রেলের ইনভেন্টরি বা মূল্য নয়।",
    "A live booking would follow the railway's advance booking window, passenger ID rules and cancellation policy. The numbers here are illustrative.": "লাইভ বুকিংয়ে রেলের অগ্রিম বুকিং সময়, যাত্রীর পরিচয়ের নিয়ম ও বাতিল নীতি মানা হবে। এখানকার সংখ্যাগুলো কেবল উদাহরণ।",
    "Payments, refunds and PNRs are simulated in the browser. No card, wallet or bank details are transmitted or stored.": "পেমেন্ট, ফেরত ও PNR ব্রাউজারেই অনুকরণ করা হয়। কোনো কার্ড, ওয়ালেট বা ব্যাংকের তথ্য পাঠানো বা সংরক্ষণ করা হয় না।",
    "Independent concept, not affiliated with Bangladesh Railway. “tikit” is a working name for this design.": "স্বতন্ত্র ধারণা, বাংলাদেশ রেলের সাথে সম্পৃক্ত নয়। “tikit” এই ডিজাইনের একটি কাজের নাম।",
    "Questions about the concept? The helpline number in this design is the railway's public number, shown for realism only.": "ধারণা নিয়ে প্রশ্ন? এই ডিজাইনের হেল্পলাইন নম্বরটি রেলের প্রকাশ্য নম্বর, কেবল বাস্তবতা বোঝাতে দেখানো।",
    "Coach KA, Snigdha": "কোচ ক, স্নিগ্ধা",
    "1 of 1 seat, Snigdha": "১টির মধ্যে ১টি আসন, স্নিগ্ধা",
    "Visa, Mastercard, Amex": "ভিসা, মাস্টারকার্ড, অ্যামেক্স",
    "Sonali, BRAC, City": "সোনালী, ব্র্যাক, সিটি",
    "A payment prompt appears in your bKash app. Approve it within two minutes.": "আপনার বিকাশ অ্যাপে পেমেন্টের অনুরোধ আসবে। দুই মিনিটের মধ্যে অনুমোদন দিন।",
    "Use the number registered with bKash. The wallet prompt is simulated in this concept.": "বিকাশে নিবন্ধিত নম্বর ব্যবহার করুন। এই ধারণায় ওয়ালেটের অনুরোধ অনুকরণ করা হয়।",
    "Open Nagad and approve the prompt. You will return here automatically.": "নগদ খুলে অনুরোধটি অনুমোদন করুন। আপনি নিজেই এখানে ফিরে আসবেন।",
    "Visa, Mastercard and American Express are accepted. 3-D Secure may ask for an OTP.": "ভিসা, মাস্টারকার্ড ও আমেরিকান এক্সপ্রেস নেওয়া হয়। ৩-ডি সিকিউর ওটিপি চাইতে পারে।",
    "You will be sent to your bank's secure page to approve the transfer.": "ট্রান্সফার অনুমোদনের জন্য আপনার ব্যাংকের নিরাপদ পাতায় পাঠানো হবে।",
    "Choose a bank": "ব্যাংক বেছে নিন",
    "Sonali Bank": "সোনালী ব্যাংক",
    "BRAC Bank": "ব্র্যাক ব্যাংক",
    "City Bank": "সিটি ব্যাংক",
    "Dutch-Bangla Bank": "ডাচ-বাংলা ব্যাংক",
    "Islami Bank": "ইসলামী ব্যাংক",
    "Save this payment method for next time. You can remove it from your account.": "পরের বারের জন্য এই পেমেন্ট মাধ্যম সেভ করুন। অ্যাকাউন্ট থেকে সরিয়ে নিতে পারবেন।",
    "Demo details are prefilled so the flow can be completed. No payment is taken and no details are stored.": "প্রবাহ শেষ করতে ডেমো তথ্য আগেই ভরা। কোনো পেমেন্ট হয় না, তথ্যও সংরক্ষণ হয় না।",
    "Paying at the station?": "স্টেশনে টাকা দেবেন?",
    "Counter payment is not part of this concept. A live build would hold the seat for 30 minutes and release it if the counter does not confirm.": "কাউন্টারে পেমেন্ট এই ধারণায় নেই। লাইভ সংস্করণে ৩০ মিনিট আসন ধরে রাখা হবে, কাউন্টার নিশ্চিত না করলে ছেড়ে দেওয়া হবে।",
    ", Coach KA": ", কোচ ক",
    "Paying with": "পেমেন্ট মাধ্যম",
    ". By continuing you accept the fare and refund rules.": "। এগিয়ে গেলে ভাড়া ও ফেরতের নিয়ম মেনে নিচ্ছেন।",
    "Fare rules": "ভাড়ার নিয়ম",
    "Need help? 13107": "সাহায্য দরকার? ১৩১০৭",
    "Secure concept checkout, nothing is charged": "নিরাপদ ধারণা চেকআউট, কোনো টাকা কাটা হয় না",
    "Total to pay": "মোট দিতে হবে",
    "Pay now": "এখনই দিন",
    "Enter a valid email.": "সঠিক ইমেইল দিন।",
    "Use 8+ characters": "৮+ অক্ষর ব্যবহার করুন",
    "Demo signup. Use any valid-looking details, no message is sent.": "ডেমো সাইনআপ। যেকোনো বৈধ দেখতে তথ্য দিন, কোনো বার্তা পাঠানো হয় না।",
    "Already have an account?": "আগেই অ্যাকাউন্ট আছে?",
    "We sent a six digit code to the mobile number you entered. It expires in ten minutes.": "আপনার দেওয়া নম্বরে ছয় সংখ্যার কোড পাঠানো হয়েছে। দশ মিনিটে মেয়াদ শেষ।",
    "Your account is ready. Saved passengers and payment methods can be added from your dashboard.": "আপনার অ্যাকাউন্ট তৈরি। ড্যাশবোর্ড থেকে সেভ করা যাত্রী ও পেমেন্ট মাধ্যম যোগ করতে পারবেন।",
    "You can sign in again with your mobile number and password.": "মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে আবার সাইন ইন করতে পারবেন।",
    "The tikit account": "tikit অ্যাকাউন্ট",
    "One small account. A lighter journey.": "একটি ছোট অ্যাকাউন্ট। হালকা যাত্রা।",
    "Seats that wait for you": "আপনার জন্য অপেক্ষা করা আসন",
    "Ten minute holds across every booking. No timer anxiety while you find your card.": "প্রতিটি বুকিংয়ে দশ মিনিটের হোল্ড। কার্ড বের করার সময় ঘড়ি নিয়ে দুশ্চিন্তা নেই।",
    "The people you travel with": "যাদের সাথে যাত্রা",
    "Save passengers once and skip the same six fields on every Eid trip.": "একবার যাত্রী সেভ করুন, প্রতিটি ঈদের যাত্রায় একই ছয় ঘর আর লাগবে না।",
    "Refunds without a queue": "লাইন ছাড়াই ফেরত",
    "Cancel from your dashboard and the money starts moving on its own.": "ড্যাশবোর্ড থেকে বাতিল করুন, টাকা নিজেই ফেরত শুরু করবে।",
    "Safe travels, wherever the line goes.": "শুভ যাত্রা, লাইন যেখানেই যাক।",
    "Terms": "শর্তাবলি",
    "Booking confirmed,": "বুকিং নিশ্চিত,",
    "Paid with": "পেমেন্ট",
    "Ask the station desk or call": "স্টেশন ডেস্কে জিজ্ঞাসা করুন বা কল করুন",
    "at least four hours before departure.": "ছাড়ার অন্তত চার ঘণ্টা আগে।",
    "Cancelling more than 24 hours before departure returns 90% of the fare.": "ছাড়ার ২৪ ঘণ্টার বেশি আগে বাতিল করলে ভাড়ার ৯০% ফেরত আসে।",
    "Read the policy": "নীতি পড়ুন",
    "Cancellation": "বাতিল",
    "Cancel this trip?": "এই যাত্রা বাতিল করবেন?",
    "More than 24 hours before departure, 90% of the fare comes back to bKash or card in three working days. The seat is released immediately.": "ছাড়ার ২৪ ঘণ্টার বেশি আগে বাতিল করলে ভাড়ার ৯০% তিন কর্মদিবসে বিকাশ বা কার্ডে ফেরত আসে। আসন সঙ্গে সঙ্গেই ছেড়ে দেওয়া হয়।",
    "Estimated refund": "আনুমানিক ফেরত",
    "Sample policy for this concept. Nothing is charged.": "এই ধারণার নমুনা নীতি। কোনো টাকা কাটা হয় না।",
    "Keep trip": "যাত্রা রাখুন",
    "Cancel and refund": "বাতিল ও ফেরত"
  };

  Object.keys(bnFill).forEach(function (key) {
    if (!bn[key]) bn[key] = bnFill[key];
  });

Object.assign(bn, {
    "A new code is on its way.": "নতুন কোড আসছে।",
    "Accept the terms to create an account.": "অ্যাকাউন্ট খুলতে শর্তাবলি মেনে নিন।",
    "Account details saved.": "অ্যাকাউন্টের তথ্য সেভ হয়েছে।",
    "Cancellation started. The refund is on its way.": "বাতিল শুরু হয়েছে। ফেরত আসছে।",
    "Check the highlighted details.": "চিহ্নিত ঘরগুলো দেখুন।",
    "Check the highlighted payment details.": "চিহ্নিত পেমেন্ট তথ্য দেখুন।",
    "Enter an 11 digit mobile number starting 01.": "০১ দিয়ে শুরু হওয়া ১১ সংখ্যার মোবাইল নম্বর দিন।",
    "Enter the six digit code.": "ছয় সংখ্যার কোড দিন।",
    "Live status refreshed.": "লাইভ অবস্থা হালনাগাদ হয়েছে।",
    "No live sample for that service.": "এই ট্রেনের লাইভ নমুনা নেই।",
    "Passenger saved.": "যাত্রী সেভ হয়েছে।",
    "Pick two different stations to search.": "খুঁজতে দুটি আলাদা স্টেশন বাছুন।",
    "Pick two different stations to swap.": "বদলাতে দুটি আলাদা স্টেশন বাছুন।",
    "Reset link sent. Check your messages.": "রিসেট লিংক পাঠানো হয়েছে। বার্তা দেখুন।",
    "Saved passenger added.": "সেভ করা যাত্রী যোগ হয়েছে।",
    "Ticket details copied.": "টিকিটের তথ্য কপি হয়েছে।",
    "Waitlist opens when a seat frees.": "আসন খালি হলে অপেক্ষমাণ তালিকা খোলে।",
    "Your seat hold ended. Pick a seat again.": "আসন হোল্ড শেষ। আবার আসন বাছুন।"
  });

  var bnReverse = {};
  Object.keys(bn).forEach(function (key) {
    if (!bnReverse[bn[key]]) bnReverse[bn[key]] = key;
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

  function untranslate(text) {
    var trimmed = text.trim();
    if (!trimmed) return text;
    var hit = bnReverse[trimmed];
    if (!hit) return text;
    return text.replace(trimmed, hit);
  }

  function walk(node, lang) {
    if (node.nodeType === 3) {
      var parent = node.parentNode;
      if (!parent || SKIP_TAGS[parent.tagName]) return;
      if (!store.has(node)) store.set(node, node.nodeValue);
      var source = store.has(node) ? store.get(node) : node.nodeValue;
      node.nodeValue = lang === 'bn' ? translate(source) : untranslate(source);
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
        el.textContent = untranslate(source);
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

  function switchLang(next) {
    if (next !== 'bn' && next !== 'en') return;
    storeLang(next);
    if (document.documentElement.getAttribute('data-lang') === next) return;
    window.location.reload();
  }

  function init() {
    captureOptionSources();
    var lang = readLang();
    apply(lang);

    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-lang-toggle]');
      if (!btn) return;
      switchLang(document.documentElement.getAttribute('data-lang') === 'bn' ? 'en' : 'bn');
    });

    window.tikitI18n = { translate: translate };

  window.tikitLang = {
      get: function () { return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG; },
      set: function (next) { switchLang(next); },
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
