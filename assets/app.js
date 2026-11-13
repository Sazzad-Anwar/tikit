(function () {
  'use strict';

  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STATIONS = {
    dhaka: 'Dhaka, Kamalapur',
    chattogram: 'Chattogram',
    sylhet: 'Sylhet',
    rajshahi: 'Rajshahi',
    khulna: 'Khulna',
    coxsbazar: "Cox's Bazar"
  };

  var DATES = {
    '2026-11-12': { short: 'Thu, 12 Nov', long: 'Thursday, 12 November' },
    '2026-11-13': { short: 'Fri, 13 Nov', long: 'Friday, 13 November' },
    '2026-11-14': { short: 'Sat, 14 Nov', long: 'Saturday, 14 November' }
  };

  var CLASS_LABELS = { shovan: 'Shovan', snigdha: 'Snigdha', berth: 'AC Berth' };

  var ROUTES = [
    {
      id: 'dhaka-chattogram',
      from: 'dhaka',
      to: 'chattogram',
      title: 'Dhaka → Chattogram',
      bengali: 'ঢাকা থেকে চট্টগ্রাম',
      note: 'The coastal line, 7 intercity services',
      trains: [
        { no: '786', name: 'Sonar Bangla Express', dep: '07:00', arr: '12:35', duration: '5h 35m', depMins: 420, durMins: 335, stops: 7, tag: 'AC chair', classes: { snigdha: { fare: 855, seats: 16 } } },
        { no: '704', name: 'Mohanagar Provati', dep: '07:20', arr: '13:05', duration: '5h 45m', depMins: 440, durMins: 345, stops: 8, tag: 'chair and shovan', classes: { shovan: { fare: 345, seats: 68 }, snigdha: { fare: 855, seats: 12 } } },
        { no: '816', name: 'Parjotak Express', dep: '08:15', arr: '14:10', duration: '5h 55m', depMins: 495, durMins: 355, stops: 7, tag: 'scenic morning run', classes: { snigdha: { fare: 855, seats: 4 }, berth: { fare: 1325, seats: 9 } } },
        { no: '706', name: 'Mohanagar Godhuli', dep: '15:30', arr: '21:00', duration: '5h 30m', depMins: 930, durMins: 330, stops: 6, tag: 'golden hour', classes: { snigdha: { fare: 855, seats: 8 } } },
        { no: '742', name: 'Turna Nishita', dep: '21:30', arr: '04:40', duration: '7h 10m', depMins: 1290, durMins: 430, stops: 9, tag: 'overnight', classes: { snigdha: { fare: 855, seats: 16 }, berth: { fare: 1325, seats: 4 } } },
        { no: '802', name: 'Chattala Express', dep: '23:10', arr: '05:20', duration: '6h 10m', depMins: 1390, durMins: 370, stops: 7, tag: 'overnight', classes: {} }
      ]
    },
    {
      id: 'dhaka-sylhet',
      from: 'dhaka',
      to: 'sylhet',
      title: 'Dhaka → Sylhet',
      bengali: 'ঢাকা থেকে সিলেট',
      note: 'Tea country, 3 intercity services',
      trains: [
        { no: '710', name: 'Parabat Express', dep: '06:40', arr: '12:55', duration: '6h 15m', depMins: 400, durMins: 375, stops: 8, tag: 'morning', classes: { shovan: { fare: 315, seats: 44 }, snigdha: { fare: 780, seats: 18 } } },
        { no: '718', name: 'Jayantika Express', dep: '11:15', arr: '18:05', duration: '6h 50m', depMins: 675, durMins: 410, stops: 9, tag: 'daily', classes: { shovan: { fare: 315, seats: 7 }, snigdha: { fare: 780, seats: 5 }, berth: { fare: 1180, seats: 10 } } },
        { no: '740', name: 'Upaban Express', dep: '21:50', arr: '04:45', duration: '6h 55m', depMins: 1310, durMins: 415, stops: 8, tag: 'overnight', classes: { snigdha: { fare: 780, seats: 22 }, berth: { fare: 1180, seats: 12 } } }
      ]
    },
    {
      id: 'dhaka-rajshahi',
      from: 'dhaka',
      to: 'rajshahi',
      title: 'Dhaka → Rajshahi',
      bengali: 'ঢাকা থেকে রাজশাহী',
      note: 'The padma line, 3 intercity services',
      trains: [
        { no: '754', name: 'Silk City Express', dep: '07:40', arr: '13:15', duration: '5h 35m', depMins: 460, durMins: 335, stops: 7, tag: 'morning', classes: { shovan: { fare: 305, seats: 52 }, snigdha: { fare: 760, seats: 20 } } },
        { no: '760', name: 'Padma Express', dep: '09:10', arr: '14:50', duration: '5h 40m', depMins: 550, durMins: 340, stops: 8, tag: 'daily', classes: { shovan: { fare: 305, seats: 9 }, snigdha: { fare: 760, seats: 7 }, berth: { fare: 1150, seats: 6 } } },
        { no: '791', name: 'Banalata Express', dep: '13:40', arr: '19:30', duration: '5h 50m', depMins: 820, durMins: 350, stops: 7, tag: 'afternoon', classes: { snigdha: { fare: 760, seats: 14 }, berth: { fare: 1150, seats: 8 } } }
      ]
    },
    {
      id: 'dhaka-coxsbazar',
      from: 'dhaka',
      to: 'coxsbazar',
      title: "Dhaka → Cox's Bazar",
      bengali: 'ঢাকা থেকে কক্সবাজার',
      note: 'The long coast, 2 intercity services',
      trains: [
        { no: '816', name: 'Parjotak Express', dep: '08:15', arr: '17:20', duration: '9h 05m', depMins: 495, durMins: 545, stops: 11, tag: 'day train', classes: { snigdha: { fare: 1050, seats: 11 }, berth: { fare: 1650, seats: 6 } } },
        { no: '801', name: 'Tourist Express', dep: '22:30', arr: '07:40', duration: '9h 10m', depMins: 1350, durMins: 550, stops: 10, tag: 'overnight', classes: { shovan: { fare: 395, seats: 30 }, snigdha: { fare: 1050, seats: 18 }, berth: { fare: 1650, seats: 9 } } }
      ]
    }
  ];

  var TRAIN_INDEX = {};
  ROUTES.forEach(function (route) {
    route.trains.forEach(function (train) {
      TRAIN_INDEX[train.no] = Object.assign({}, train, { route: route });
    });
  });

  function tr(text) {
    var lang = document.documentElement.getAttribute('data-lang');
    if (lang !== 'bn') return text;
    if (window.tikitI18n && typeof window.tikitI18n.translate === 'function') {
      return window.tikitI18n.translate(text);
    }
    return text;
  }

  document.addEventListener('tikit:lang', function () {
    var summary = document.getElementById('formErrorSummary');
    if (!summary) return;
    var items = summary.querySelectorAll('li a');
    if (items.length) {
      var heading = summary.querySelector('h2');
      if (heading) heading.textContent = items.length + ' ' + tr(items.length === 1 ? 'field needs attention' : 'fields need attention');
    }
  });

  function taka(n) { return '\u09F3' + Number(n || 0).toLocaleString('en-US'); }
  function plural(n) { return n === 1 ? 'seat' : 'seats'; }

  var COACH = { en: 'KA', bn: '\u0995' };
  var SEAT_COUNT = 60;
  function isBangla() { return document.documentElement.getAttribute('data-lang') === 'bn'; }
  function banglaDigits(value) {
    return String(value).replace(/[0-9]/g, function (d) { return '\u09E6\u09E7\u09E8\u09E9\u09EA\u09EB\u09EC\u09ED\u09EE\u09EF'[Number(d)]; });
  }
  function coachCode() { return isBangla() ? COACH.bn : COACH.en; }
  function seatLabel(n) { return coachCode() + '-' + (isBangla() ? banglaDigits(n) : n); }
  function coachLabel() { return isBangla() ? '\u0995\u09CB\u099A ' + COACH.bn : 'Coach ' + COACH.en; }
  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function depWindow(mins) { return mins < 720 ? 'morning' : mins < 1080 ? 'afternoon' : 'evening'; }
  function dateInfo(key) { return DATES[key] || DATES['2026-11-12']; }
  function lower(str) { return String(str || '').toLowerCase(); }

  var toastEl = null;
  var toastTimer = null;
  function toast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('is-open');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.classList.remove('is-open'); }, 4400);
  }

  function announce(el, message) {
    if (!el) return;
    el.textContent = '';
    window.setTimeout(function () { el.textContent = message; }, 50);
  }

  function savePassengers(names) {
    try { sessionStorage.setItem('tikit:passengers', JSON.stringify(names)); } catch (e) {}
  }
  function getPassengers(pax) {
    try {
      var stored = JSON.parse(sessionStorage.getItem('tikit:passengers') || 'null');
      if (Array.isArray(stored) && stored.length) return stored.slice(0, pax);
    } catch (e) {}
    return ['Nusrat Rahman', 'Rahim Uddin', 'Ayesha Siddika', 'Tanvir Hasan'].slice(0, pax);
  }

  function bookingFromQuery() {
    var q = new URLSearchParams(window.location.search);
    var trainNo = q.get('train');
    if (!trainNo || !TRAIN_INDEX[trainNo]) trainNo = '786';
    var train = TRAIN_INDEX[trainNo];
    var classKey = q.get('class');
    if (!classKey || !train.classes[classKey]) classKey = Object.keys(train.classes)[0] || 'snigdha';
    var classInfo = train.classes[classKey] || { fare: 855, seats: 0 };
    var dateKey = q.get('date');
    if (!dateKey || !DATES[dateKey]) dateKey = '2026-11-12';
    var pax = clamp(parseInt(q.get('pax') || '1', 10) || 1, 1, 4);
    var seats = (q.get('seats') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean).slice(0, pax);
    return {
      q: q,
      train: train,
      trainNo: trainNo,
      cls: classKey,
      clsLabel: CLASS_LABELS[classKey] || 'Snigdha',
      fare: classInfo.fare,
      pax: pax,
      seats: seats,
      dateKey: dateKey,
      date: dateInfo(dateKey).short,
      dateLong: dateInfo(dateKey).long,
      route: train.route
    };
  }

  function searchQuery(form) {
    var from = $('[name="from"]', form).value;
    var to = $('[name="to"]', form).value;
    var dateKey = form.dataset.date || '2026-11-12';
    var pax = parseInt(form.dataset.pax || '1', 10) || 1;
    var cls = $('[name="class"]', form).value || 'all';
    return { from: from, to: to, dateKey: dateKey, pax: pax, cls: cls };
  }

  function go(url) { window.location.href = url; }

  function initMenu() {
    var btn = $('#menuBtn');
    var menu = $('#mobileMenu');
    if (!btn || !menu) return;
    var menuIcon = $('.menu-icon', btn);
    var closeIcon = $('.close-icon', btn);
    function setMenu(open) {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (menuIcon) menuIcon.classList.toggle('hidden', open);
      if (closeIcon) closeIcon.classList.toggle('hidden', !open);
    }
    btn.addEventListener('click', function () { setMenu(menu.hidden); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', function (e) {
      if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) setMenu(false);
    });
    $$('a', menu).forEach(function (link) { link.addEventListener('click', function () { setMenu(false); }); });
  }

  function initSearchForm(form, onSearch) {
    if (!form) return;
    var dateChips = $$('.date-chip', form);
    var paxCount = $('[data-pax-count]', form);
    var paxMinus = $('[data-pax-minus]', form);
    var paxPlus = $('[data-pax-plus]', form);
    var swapBtn = $('[data-swap]', form);
    var from = $('[name="from"]', form);
    var to = $('[name="to"]', form);

    if (!form.dataset.date) form.dataset.date = '2026-11-12';
    if (!form.dataset.pax) form.dataset.pax = '1';

    function setPax(value) {
      var next = clamp(value, 1, 4);
      form.dataset.pax = String(next);
      if (paxCount) paxCount.textContent = next;
      if (paxMinus) paxMinus.disabled = next === 1;
      if (paxPlus) paxPlus.disabled = next === 4;
      var single = $('[data-pax-single]', form);
      if (single) {
        single.textContent = next === 1 ? 'adult' : (document.documentElement.getAttribute('data-lang') === 'bn' ? 'জন' : 'adults');
        single.setAttribute('data-i18n-live', '');
        single.removeAttribute('data-i18n-synced');
      }
      if (window.tikitLang) window.tikitLang.refresh();
    }

    dateChips.forEach(function (chip) {
      if (chip.dataset.date === form.dataset.date) chip.setAttribute('aria-pressed', 'true');
      chip.addEventListener('click', function () {
        dateChips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        form.dataset.date = chip.dataset.date;
      });
    });

    if (paxMinus) paxMinus.addEventListener('click', function () { setPax(parseInt(form.dataset.pax, 10) - 1); });
    if (paxPlus) paxPlus.addEventListener('click', function () { setPax(parseInt(form.dataset.pax, 10) + 1); });

    if (swapBtn) {
      swapBtn.addEventListener('click', function () {
        if (from.value === to.value) { toast('Pick two different stations to swap.'); return; }
        var temp = from.value;
        from.value = to.value;
        to.value = temp;
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (from.value === to.value) { toast('Pick two different stations to search.'); return; }
      onSearch(searchQuery(form));
    });

    setPax(parseInt(form.dataset.pax, 10) || 1);
  }

  function initHome() {
    initSearchForm($('#searchForm'), function (q) {
      go('trains.html?' + new URLSearchParams({
        from: q.from, to: q.to, date: q.dateKey, pax: String(q.pax), class: q.cls
      }).toString());
    });
  }

  function trainRow(train, route) {
    var keys = Object.keys(train.classes).filter(function (key) { return train.classes[key] && train.classes[key].seats > 0; });
    var soldOut = keys.length === 0;
    var minFare = soldOut ? 0 : Math.min.apply(null, keys.map(function (key) { return train.classes[key].fare; }));
    var fewSeats = keys.some(function (key) { return train.classes[key].seats <= 6; });
    var badge = soldOut ? '<span class="rounded-full bg-rust-soft px-2 py-0.5 text-[9px] font-semibold tracking-[0.1em] text-rust">' + tr('Sold out') + '</span>'
      : fewSeats ? '<span class="rounded-full bg-brass-soft px-2 py-0.5 text-[9px] font-semibold tracking-[0.1em] text-brass-ink">' + tr('Few seats') + '</span>'
      : '<span class="rounded-full bg-leaf-soft px-2 py-0.5 text-[9px] font-semibold tracking-[0.1em] text-leaf">' + tr('Daily') + '</span>';

    var classes = keys.map(function (key) {
      var info = train.classes[key];
      var dot = info.seats <= 6 ? 'dot-brass' : 'dot-leaf';
      return '<button type="button" class="class-chip" data-book-class="' + key + '" data-train="' + train.no + '" data-fare="' + info.fare + '" aria-pressed="false">' +
        '<span class="font-medium">' + tr(CLASS_LABELS[key]) + '</span>' +
        '<span class="font-mono text-[11px]">' + taka(info.fare) + '</span>' +
        '<span class="dot ' + dot + '"></span>' +
        '<span class="text-muted">' + info.seats + ' ' + tr('left') + '</span>' +
        '</button>';
    }).join('');

    var action = soldOut
      ? '<button type="button" class="btn-outline btn-sm" data-waitlist data-waitlist-train="' + train.name + '" data-waitlist-no="' + train.no + '">Join waitlist</button>'
      : '<button type="button" class="btn-outline btn-sm" data-book-class="' + keys[0] + '" data-train="' + train.no + '" data-fare="' + train.classes[keys[0]].fare + '">' + tr('Select seats') + '</button>';

    var arrival = train.arr.indexOf('04:40') === 0 || train.arr.indexOf('05:20') === 0 || train.arr.indexOf('04:45') === 0 || train.arr.indexOf('07:40') === 0
      ? train.arr + '<sup class="ml-0.5 align-super font-sans text-[8px] text-muted">+1</sup>'
      : train.arr;

    return '<article class="train-row grid gap-5 px-1 py-7 md:grid-cols-[215px_1fr_auto] md:items-center md:gap-8 md:px-3" ' +
      'data-classes="' + keys.join(' ') + '" data-dep="' + depWindow(train.depMins) + '" data-available="' + (!soldOut) + '" ' +
      'data-dep-mins="' + train.depMins + '" data-dur="' + train.durMins + '" data-fare="' + minFare + '">' +
      '<div>' +
        '<div class="flex items-center gap-3">' +
          '<span class="time">' + train.dep + '</span>' +
          '<span class="relative h-px flex-1 bg-[rgba(18,32,26,.22)]"><span class="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(18,32,26,.35)]"></span></span>' +
          '<span class="time">' + arrival + '</span>' +
        '</div>' +
        '<div class="mt-2.5 flex items-center justify-between font-mono text-[9px] tracking-[0.12em] text-muted">' +
          '<span>' + tr('Kamalapur') + '</span><span>' + train.duration + '</span><span>' + tr(STATIONS[route.to]) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="min-w-0">' +
        '<h3 class="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-display text-lg font-semibold tracking-tight">' + train.name +
          ' <span class="font-mono text-[11px] font-medium text-muted">' + train.no + '</span> ' + badge +
        '</h3>' +
        '<p class="mt-1 text-[13px] text-muted">' + tr('Kamalapur to') + ' ' + tr(STATIONS[route.to]) + ', ' + train.stops + ' ' + tr('stops') + ', ' + tr(train.tag) + '</p>' +
        '<div class="mt-3 flex flex-wrap gap-2">' + classes + '</div>' +
      '</div>' +
      '<div class="flex items-center justify-between gap-4 border-t border-edge-soft pt-4 md:flex-col md:items-end md:justify-center md:border-0 md:pt-0">' +
        '<div class="md:text-right">' +
          '<p class="font-mono text-[9px] tracking-[0.16em] text-muted">' + (soldOut ? tr('status') : tr('from')) + '</p>' +
          '<p class="font-mono text-lg font-medium leading-tight ' + (soldOut ? 'text-rust' : '') + '">' + (soldOut ? tr('No seats') : taka(minFare)) + '</p>' +
        '</div>' +
        action +
      '</div>' +
    '</article>';
  }

  function initTrains() {
    var q = new URLSearchParams(window.location.search);
    var from = q.get('from') || 'dhaka';
    var to = q.get('to') || 'chattogram';
    var pax = clamp(parseInt(q.get('pax') || '1', 10) || 1, 1, 4);
    var dateKey = q.get('date');
    if (!dateKey || !DATES[dateKey]) dateKey = '2026-11-12';
    var requestedClass = q.get('class') || 'all';
    if (['shovan', 'snigdha', 'berth'].indexOf(requestedClass) === -1) requestedClass = 'all';
    document.body.dataset.pax = String(pax);
    document.body.dataset.dateKey = dateKey;
    var route = ROUTES.filter(function (item) { return item.from === from && item.to === to; })[0];

    var list = $('#trainList');
    var emptyRoute = $('#routeEmpty');
    var emptyFilters = $('#resultsEmpty');
    var resultsWrap = $('#resultsWrap');
    var loaded = false;

    var form = $('#refineForm');
    if (form) {
      form.dataset.date = dateKey;
      form.dataset.pax = String(pax);
      $('[name="from"]', form).value = from;
      $('[name="to"]', form).value = to;
      if ($('[name="class"]', form)) $('[name="class"]', form).value = requestedClass;
      initSearchForm(form, function (next) {
        go('trains.html?' + new URLSearchParams({
          from: next.from, to: next.to, date: next.dateKey, pax: String(next.pax), class: next.cls
        }).toString());
      });
    }

    if (!route) {
      if (resultsWrap) resultsWrap.hidden = true;
      if (emptyRoute) {
        emptyRoute.hidden = false;
        var title = $('#emptyRouteTitle');
        var text = $('#emptyRouteText');
        if (title) title.textContent = 'No sample board for ' + (STATIONS[from] || from) + ' to ' + (STATIONS[to] || to);
        if (text) text.textContent = 'This concept is wired for four corridors: Dhaka to Chattogram, Sylhet, Rajshahi and Cox’s Bazar. Load the coastal board to explore the full flow.';
      }
      var emptyTitle = $('#routeTitle');
      if (emptyTitle) emptyTitle.textContent = (STATIONS[from] || from) + ' \u2192 ' + (STATIONS[to] || to);
      var emptyBengali = $('#routeBengali');
      if (emptyBengali) emptyBengali.textContent = '';
      var emptyCount = $('#resultCount');
      if (emptyCount) emptyCount.textContent = '0 services';
      var routeDate = $('#resultDate');
      if (routeDate) routeDate.textContent = dateInfo(dateKey).long;
      return;
    }

    if (resultsWrap) resultsWrap.hidden = false;
    if (emptyRoute) emptyRoute.hidden = true;
    var routeTitle = $('#routeTitle');
    var routeBengali = $('#routeBengali');
    var routeNote = $('#routeNote');
    var resultDate = $('#resultDate');
    var resultPax = $('#resultPax');
    if (routeTitle) routeTitle.textContent = route.title;
    if (routeBengali) routeBengali.textContent = route.bengali;
    if (routeNote) routeNote.textContent = 'Kamalapur to ' + STATIONS[route.to];
    if (resultDate) resultDate.textContent = dateInfo(dateKey).long;
    if (resultPax) resultPax.textContent = pax + ' ' + (pax === 1 ? 'passenger' : 'passengers');

    var depParam = q.get('dep') || 'all';
    if (['morning', 'afternoon', 'evening'].indexOf(depParam) === -1) depParam = 'all';
    var availParam = q.get('available') === '1';
    var sortParam = q.get('sort');
    if (['dep', 'fare', 'duration'].indexOf(sortParam) === -1) sortParam = 'dep';
    var state = { cls: requestedClass, dep: depParam, availableOnly: availParam, sort: sortParam };

    function syncUrl() {
      var params = new URLSearchParams(window.location.search);
      if (state.cls === 'all') params.delete('class'); else params.set('class', state.cls);
      if (state.dep === 'all') params.delete('dep'); else params.set('dep', state.dep);
      if (state.availableOnly) params.set('available', '1'); else params.delete('available');
      if (state.sort === 'dep') params.delete('sort'); else params.set('sort', state.sort);
      var next = window.location.pathname + '?' + params.toString();
      try { window.history.replaceState({}, '', next); } catch (e) {}
    }
    var rows = route.trains.map(function (train) { return trainRow(train, route); }).join('');
    if (list) list.innerHTML = rows;

    $$('.filter-class').forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.dataset.filterClass === state.cls ? 'true' : 'false');
      chip.addEventListener('click', function () {
        $$('.filter-class').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        state.cls = chip.dataset.filterClass;
        apply();
      });
    });

    $$('.filter-dep').forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.dataset.filterDep === state.dep ? 'true' : 'false');
      chip.addEventListener('click', function () {
        $$('.filter-dep').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        state.dep = chip.dataset.filterDep;
        apply();
      });
    });

    var availOnly = $('#availOnly');
    if (availOnly) {
      availOnly.checked = state.availableOnly;
      availOnly.addEventListener('change', function () { state.availableOnly = availOnly.checked; apply(); });
    }

    var sortSelect = $('#sortTrains');
    if (sortSelect) {
      sortSelect.value = state.sort;
      sortSelect.addEventListener('change', function () { state.sort = sortSelect.value; apply(); });
    }

    var clearFilters = $('#clearFilters');
    if (clearFilters) {
      clearFilters.addEventListener('click', function () {
        state.cls = 'all'; state.dep = 'all'; state.availableOnly = false;
        if (availOnly) availOnly.checked = false;
        $$('.filter-class').forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.filterClass === 'all' ? 'true' : 'false'); });
        $$('.filter-dep').forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.filterDep === 'all' ? 'true' : 'false'); });
        if (sortSelect) { sortSelect.value = 'dep'; state.sort = 'dep'; }
        apply();
      });
    }

    function apply() {
      if (!list) return;
      var rows = $$('.train-row', list);
      var shown = 0;
      rows.forEach(function (row) {
        var classOk = state.cls === 'all' || (row.dataset.classes || '').split(' ').indexOf(state.cls) !== -1;
        var depOk = state.dep === 'all' || row.dataset.dep === state.dep;
        var availOk = !state.availableOnly || row.dataset.available === 'true';
        var show = classOk && depOk && availOk;
        row.hidden = !show;
        if (show) shown += 1;
      });
      rows.sort(function (a, b) {
        if (state.sort === 'fare') return Number(a.dataset.fare) - Number(b.dataset.fare);
        if (state.sort === 'duration') return Number(a.dataset.dur) - Number(b.dataset.dur);
        return Number(a.dataset.depMins) - Number(b.dataset.depMins);
      }).forEach(function (row) { list.appendChild(row); });

      var count = $('#visibleCount');
      var countTop = $('#resultCount');
      var status = $('#resultsStatus');
      if (count) count.textContent = shown + ' of ' + rows.length + ' trains';
      if (countTop) countTop.textContent = shown + (shown === 1 ? ' service' : ' services');
      if (emptyFilters) emptyFilters.hidden = shown !== 0;
      list.hidden = shown === 0;
      syncUrl();
      if (status) announce(status, shown + ' trains shown.');
    }

    apply();

    var waitlistDialog = $('#waitlistDialog');
    $$('[data-waitlist]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!waitlistDialog) { toast('Waitlist opens when a seat frees.'); return; }
        var title = $('#waitlistTitle');
        var meta = $('#waitlistMeta');
        if (title) title.textContent = btn.dataset.waitlistTrain + ', ' + btn.dataset.waitlistNo;
        if (meta) meta.textContent = 'Shovan or Snigdha, ' + dateInfo(dateKey).short;
        var formWrap = $('#waitlistForm');
        var done = $('#waitlistDone');
        if (formWrap) formWrap.hidden = false;
        if (done) done.hidden = true;
        if (typeof waitlistDialog.showModal === 'function') waitlistDialog.showModal();
      });
    });
    initWaitlistDialog();
  }

  function initWaitlistDialog() {
    var dialog = $('#waitlistDialog');
    if (!dialog) return;
    var form = $('#waitlistForm');
    var phone = $('#phone');
    var error = $('#phoneError');
    var done = $('#waitlistDone');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var value = (phone.value || '').replace(/[\s-]/g, '');
        if (!/^01[3-9]\d{8}$/.test(value)) {
          if (error) error.hidden = false;
          phone.setAttribute('aria-invalid', 'true');
          phone.focus();
          return;
        }
        if (error) error.hidden = true;
        phone.removeAttribute('aria-invalid');
        var phoneOut = $('#waitlistPhone');
        if (phoneOut) phoneOut.textContent = value;
        form.hidden = true;
        if (done) { done.hidden = false; var h = $('#waitlistDoneTitle'); if (h) h.focus(); }
      });
    }
    $$('[data-waitlist-close]', dialog).forEach(function (btn) {
      btn.addEventListener('click', function () { dialog.close(); });
    });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  }

  function initGlobalClicks() {
    $$('[data-toast]').forEach(function (el) {
      el.addEventListener('click', function (event) {
        if (el.tagName === 'A') event.preventDefault();
        toast(el.dataset.toast);
      });
    });
    $$('[data-print]').forEach(function (el) {
      el.addEventListener('click', function () { window.print(); });
    });
    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-book-class]');
      if (!btn) return;
      var params = new URLSearchParams({
        train: btn.dataset.train,
        class: btn.dataset.bookClass,
        pax: btn.dataset.pax || document.body.dataset.pax || '1',
        date: btn.dataset.date || document.body.dataset.dateKey || '2026-11-12'
      });
      go('booking.html?' + params.toString());
    });
  }

  function initBooking() {
    var data = bookingFromQuery();
    var pax = data.pax;
    var seats = [];
    var BOOKED = [19, 20, 24, 25, 35, 40];
    for (var b = 41; b <= 60; b += 1) BOOKED.push(b);
    var seatMap = $('#seatMap');
    var paxCount = $('#paxCount');
    var paxMinus = $('#paxMinus');
    var paxPlus = $('#paxPlus');
    var paxBlocks = $('#paxBlocks');
    var sumSeats = $('#sumSeats');
    var sumHint = $('#sumHint');
    var fareLabel = $('#fareLabel');
    var fareAmount = $('#fareAmount');
    var fareUnit = $('#fareUnit');
    var totalAmount = $('#totalAmount');
    var continueBtn = $('#continueBtn');
    var mobileBar = $('#mobileBar');
    var mobileMeta = $('#mobileMeta');
    var mobileTotal = $('#mobileTotal');
    var bookingStatus = $('#bookingStatus');
    var seatPanel = $('#seatPanel');
    var formSeats = $('#formSeats');
    var stepTitle = $('#stepTitle');
    var changeSeatsBtn = $('#changeSeats');
    var seatEditing = false;
    var HOLD_SECONDS = 600;
    var holdLeft = HOLD_SECONDS;
    var holdTimer = null;
    var holdWarned = false;

    if (!seatMap) return;

    $('#bookingTrain').textContent = data.train.name + ', ' + data.trainNo;
    $('#bookingMeta').textContent = data.clsLabel + ', ' + data.date + ', Kamalapur to ' + STATIONS[data.route.to];
    $('#sumTrain').textContent = data.train.name;
    $('#sumMeta').textContent = data.clsLabel + ', ' + data.date + ', Kamalapur to ' + STATIONS[data.route.to];
    function renderCoachChrome() {
      var coach = $('#coachBadge');
      if (coach) coach.textContent = coachCode();
      var mini = $('#coachBadgeMini');
      if (mini) mini.textContent = coachCode();
      var coachTitle = $('#coachTitle');
      if (coachTitle) coachTitle.textContent = coachLabel();
      var free = SEAT_COUNT - BOOKED.length;
      $('#coachMeta').textContent = tr((data.cls === 'berth' ? 'Air-conditioned berth' : data.cls === 'shovan' ? 'Shovan chair' : 'Air-conditioned chair')) +
        ', ' + (isBangla() ? banglaDigits(free) + ' / ' + banglaDigits(SEAT_COUNT) + ' \u0986\u09B8\u09A8 \u0996\u09BE\u09B2\u09BF' : free + ' of ' + SEAT_COUNT + ' seats free');
      var heroCoach = $('#bookingCoach');
      if (heroCoach) heroCoach.textContent = coachLabel();
    }
    var changeLink = $('#changeTrain');
    if (changeLink) {
      changeLink.href = 'trains.html?' + new URLSearchParams({
        from: data.route.from, to: data.route.to, date: data.dateKey, pax: String(pax), class: data.cls
      }).toString();
    }

    function updateClock() {
      var minutes = String(Math.floor(holdLeft / 60)).padStart(2, '0');
      var seconds = String(holdLeft % 60).padStart(2, '0');
      $$('[data-hold-clock]').forEach(function (el) {
        el.textContent = minutes + ':' + seconds;
        el.classList.toggle('is-urgent', holdLeft <= 120);
      });
    }
    function resetHold() {
      window.clearInterval(holdTimer);
      holdTimer = null;
      holdLeft = HOLD_SECONDS;
      holdWarned = false;
      updateClock();
    }
    function startHold() {
      if (holdTimer) return;
      holdLeft = HOLD_SECONDS;
      holdWarned = false;
      updateClock();
      holdTimer = window.setInterval(function () {
        holdLeft -= 1;
        updateClock();
        if (holdLeft === 120 && !holdWarned) {
          holdWarned = true;
          announce(bookingStatus, tr('Two minutes left on your seat hold.'));
        }
        if (holdLeft <= 0) {
          window.clearInterval(holdTimer);
          seats = [];
          renderSeats();
          resetHold();
          renderSummary();
          toast(tr('The 10 minute hold expired. Pick your seats again.'));
        }
      }, 1000);
    }

    function syncStep(details) {
      var items = $$('.stepper-item');
      if (items.length > 1) {
        items[0].classList.toggle('is-done', details);
        items[0].classList.toggle('is-current', !details);
        items[1].classList.toggle('is-current', details);
        if (details) {
          items[0].removeAttribute('aria-current');
          items[1].setAttribute('aria-current', 'step');
        } else {
          items[0].setAttribute('aria-current', 'step');
          items[1].removeAttribute('aria-current');
        }
      }
      if (stepTitle) stepTitle.textContent = tr(details ? 'Booking, step 2 of 4' : 'Booking, step 1 of 4');
    }

    function showPanel(details) {
      if (!seatPanel || !detailsForm) return;
      if ((!detailsForm.hidden) === details) return;
      var from = details ? seatPanel : detailsForm;
      var hadFocus = from.contains(document.activeElement);
      detailsForm.hidden = !details;
      seatPanel.hidden = details;
      syncStep(details);
      if (details) {
        announce(bookingStatus, tr('All seats selected. Add passenger details to continue.'));
        if (hadFocus) {
          var first = $('#pax1Name');
          if (first) first.focus();
        } else if (detailsForm.getBoundingClientRect().top < 0) {
          detailsForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (hadFocus) {
        var seat = $('.seat[tabindex="0"]', seatMap);
        if (seat) seat.focus();
      } else if (seatPanel.getBoundingClientRect().top < 0) {
        seatPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function seatButton(n) {
      var isSold = BOOKED.indexOf(n) !== -1;
      var label = seatLabel(n);
      return '<button type="button" class="seat" data-seat="' + n + '" aria-pressed="false" aria-label="' +
        label + ', ' + tr(isSold ? 'Taken' : 'Open') + '"' + (isSold ? ' disabled' : '') + '>' + label + '</button>';
    }

    function seatButtons() { return $$('.seat', seatMap); }

    function setRoving(target) {
      seatButtons().forEach(function (btn) { btn.tabIndex = btn === target ? 0 : -1; });
    }

    function stepSeat(from, step) {
      var list = seatButtons();
      for (var i = from + step; i >= 0 && i < list.length; i += step) {
        if (!list[i].disabled) return list[i];
      }
      return null;
    }

    function seekSeat(number, step) {
      var list = seatButtons();
      for (var n = number + step; n >= 1 && n <= SEAT_COUNT; n += step) {
        for (var i = 0; i < list.length; i += 1) {
          if (Number(list[i].dataset.seat) === n && !list[i].disabled) return list[i];
        }
      }
      return null;
    }

    function buildSeats() {
      var html = '';
      for (var n = 1; n <= SEAT_COUNT; n += 1) {
        if ((n - 1) % 5 === 3) html += '<span class="seat-aisle" aria-hidden="true"></span>';
        html += seatButton(n);
        if (n === 40) html += '<span class="seat-gap" aria-hidden="true"></span>';
      }
      seatMap.innerHTML = html;
      setRoving(stepSeat(-1, 1));
    }

    function renderSeats() {
      $$('.seat', seatMap).forEach(function (btn) {
        btn.setAttribute('aria-pressed', seats.indexOf(Number(btn.dataset.seat)) !== -1 ? 'true' : 'false');
      });
    }

    function passengerBlock(index) {
      return '<fieldset class="panel-flat p-4 sm:p-5" data-pax-block="' + index + '">' +
        '<legend class="px-1 font-mono text-[10px] tracking-[0.16em] text-muted">' + tr('Passenger') + ' ' + index + '</legend>' +
        '<div class="mt-4 grid gap-4 sm:grid-cols-2">' +
          '<div class="sm:col-span-2">' +
            '<label class="field-label" for="pax' + index + 'Name">' + tr('Full name') + '</label>' +
            '<input class="input mt-2" id="pax' + index + 'Name" name="pax' + index + 'Name" autocomplete="name" placeholder="' + tr('As printed on the ID') + '">' +
            '<p class="error-text" data-error-for="pax' + index + 'Name" hidden></p>' +
          '</div>' +
          '<div>' +
            '<label class="field-label" for="pax' + index + 'Age">' + tr('Age') + '</label>' +
            '<input class="input mt-2" id="pax' + index + 'Age" name="pax' + index + 'Age" type="number" min="1" max="120" inputmode="numeric" placeholder="34">' +
          '</div>' +
          '<div>' +
            '<label class="field-label" for="pax' + index + 'Gender">' + tr('Gender') + '</label>' +
            '<div class="select-wrap mt-2"><select class="select-input" id="pax' + index + 'Gender" name="pax' + index + 'Gender">' +
              '<option>' + tr('Female') + '</option><option>' + tr('Male') + '</option><option>' + tr('Other') + '</option>' +
            '</select><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m5 8 5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
          '</div>' +
          '<div class="sm:col-span-2">' +
            '<label class="field-label" for="pax' + index + 'Berth">' + tr('Berth preference') + '</label>' +
            '<div class="select-wrap mt-2"><select class="select-input" id="pax' + index + 'Berth" name="pax' + index + 'Berth">' +
              '<option>' + tr('No preference') + '</option><option>' + tr('Lower') + '</option><option>' + tr('Middle') + '</option><option>' + tr('Upper') + '</option><option>' + tr('Side lower') + '</option><option>' + tr('Side upper') + '</option>' +
            '</select><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m5 8 5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
          '</div>' +
        '</div>' +
      '</fieldset>';
    }

    function renderPassengers() {
      if (!paxBlocks) return;
      var blocks = $$('[data-pax-block]', paxBlocks);
      if (blocks.length > pax) {
        for (var i = blocks.length; i > pax; i -= 1) blocks[i - 1].remove();
      } else if (blocks.length < pax) {
        var html = '';
        for (var j = blocks.length + 1; j <= pax; j += 1) html += passengerBlock(j);
        paxBlocks.insertAdjacentHTML('beforeend', html);
      }
      var inline = $('#paxInline');
      if (inline) inline.textContent = pax;
    }

    function renderSummary() {
      var total = data.fare * seats.length;
      if (paxCount) paxCount.textContent = pax;
      if (paxMinus) paxMinus.disabled = pax === 1;
      if (paxPlus) paxPlus.disabled = pax === 4;
      var inline = $('#paxInline');
      if (inline) inline.textContent = pax;

      if (seats.length) {
        sumSeats.innerHTML = seats.map(function (seat) { return '<span class="seat-pill">' + seatLabel(seat) + '</span>'; }).join('');
      } else {
        sumSeats.innerHTML = '<span class="text-xs text-muted">No seats selected yet</span>';
      }
      var remaining = pax - seats.length;
      if (remaining > 0) {
        sumHint.textContent = seats.length
          ? (isBangla() ? 'চালিয়ে যেতে আরও ' + banglaDigits(remaining) + 'টি আসন বাছাই করুন।' : 'Select ' + remaining + ' more ' + plural(remaining) + ' to continue.')
          : tr('Tap an open seat on the map to begin.');
        continueBtn.disabled = true;
        continueBtn.textContent = isBangla()
          ? 'চালিয়ে যেতে ' + banglaDigits(pax) + 'টি আসন বাছাই করুন'
          : 'Select ' + pax + ' ' + plural(pax) + ' to continue';
      } else {
        sumHint.textContent = isBangla()
          ? 'সব আসন বাছাই হয়েছে। যাত্রীর তথ্য দিন।'
          : 'All seats selected. Add passenger details to continue.';
        continueBtn.disabled = false;
        continueBtn.textContent = tr('Continue to payment');
      }
      fareLabel.textContent = tr('Fare');
      fareAmount.textContent = taka(total);
      totalAmount.textContent = taka(total);
      if (fareUnit) {
        fareUnit.hidden = seats.length === 0;
        fareUnit.textContent = taka(data.fare) + ' × ' + seats.length;
      }

      var open = seats.length > 0;
      if (open) startHold(); else resetHold();
      if (formSeats) formSeats.textContent = seats.map(seatLabel).join(', ');

      if (seats.length && seats.length >= pax) {
        if (!seatEditing) showPanel(true);
      } else {
        seatEditing = false;
        showPanel(false);
      }
      if (mobileBar) {
        mobileBar.classList.toggle('is-open', open);
        mobileBar.inert = !open;
        if (open) {
          mobileMeta.textContent = isBangla()
            ? banglaDigits(seats.length) + ' / ' + banglaDigits(pax) + ' আসন, ' + data.clsLabel
            : seats.length + ' of ' + pax + ' ' + plural(pax) + ', ' + data.clsLabel;
          mobileTotal.textContent = taka(total);
        }
      }
    }

    function toggleSeat(id) {
      seatEditing = false;
      var index = seats.indexOf(Number(id));
      if (index !== -1) {
        seats.splice(index, 1);
        renderSeats(); renderSummary();
        announce(bookingStatus, seatLabel(id) + ' released.');
        return;
      }
      if (seats.length >= pax) {
        toast('That is ' + pax + ' ' + plural(pax) + ' for this booking. Add a passenger to pick more.');
        return;
      }
      seats.push(Number(id));
      renderSeats(); renderSummary();
      announce(bookingStatus, seatLabel(id) + ' selected. ' + seats.length + ' of ' + pax + ' chosen.');
    }

    seatMap.addEventListener('click', function (event) {
      var btn = event.target.closest('.seat');
      if (!btn || btn.disabled) return;
      setRoving(btn);
      toggleSeat(btn.dataset.seat);
    });

    seatMap.addEventListener('keydown', function (event) {
      var btn = event.target.closest('.seat');
      if (!btn) return;
      var list = seatButtons();
      var target = null;
      if (event.key === 'ArrowRight') target = stepSeat(list.indexOf(btn), 1);
      else if (event.key === 'ArrowLeft') target = stepSeat(list.indexOf(btn), -1);
      else if (event.key === 'ArrowDown') target = seekSeat(Number(btn.dataset.seat), 5);
      else if (event.key === 'ArrowUp') target = seekSeat(Number(btn.dataset.seat), -5);
      else if (event.key === 'Home') target = stepSeat(-1, 1);
      else if (event.key === 'End') target = stepSeat(list.length, -1);
      else return;
      if (!target) return;
      event.preventDefault();
      setRoving(target);
      target.focus();
    });

    if (paxMinus) paxMinus.addEventListener('click', function () {
      seatEditing = false;
      pax = clamp(pax - 1, 1, 4);
      if (seats.length > pax) seats = seats.slice(0, pax);
      renderPassengers(); renderSeats(); renderSummary();
    });
    if (paxPlus) paxPlus.addEventListener('click', function () {
      seatEditing = false;
      pax = clamp(pax + 1, 1, 4);
      renderPassengers(); renderSummary();
    });

    if (changeSeatsBtn) changeSeatsBtn.addEventListener('click', function () {
      seatEditing = true;
      showPanel(false);
    });

    var useSaved = $('#useSavedPassenger');
    if (useSaved) {
      useSaved.addEventListener('click', function () {
        var name = $('#pax1Name');
        var age = $('#pax1Age');
        var gender = $('#pax1Gender');
        if (name) name.value = 'Nusrat Rahman';
        if (age) age.value = '34';
        if (gender) gender.value = 'Female';
        toast('Saved passenger added.');
      });
    }

    function errorIdFor(input) {
      if (!input.id) input.id = 'field-' + Math.random().toString(36).slice(2, 8);
      return input.id + '-error';
    }

    function setError(input, message) {
      var group = input.closest('div');
      var err = group ? $('.error-text', group) : null;
      input.setAttribute('aria-invalid', 'true');
      if (err) {
        err.textContent = tr(message);
        err.hidden = false;
        err.id = errorIdFor(input);
        input.setAttribute('aria-describedby', err.id);
      }
      return { input: input, message: message, label: input.labels && input.labels[0] ? input.labels[0].textContent.trim() : message };
    }

    function clearError(input) {
      input.removeAttribute('aria-invalid');
      var group = input.closest('div');
      var err = group ? $('.error-text', group) : null;
      if (err) {
        err.hidden = true;
        if (err.id) input.removeAttribute('aria-describedby');
      }
    }

    function showErrorSummary(form, errors) {
      var existing = $('#formErrorSummary');
      if (existing) existing.remove();
      if (!errors.length) return;
      var box = document.createElement('div');
      box.id = 'formErrorSummary';
      box.className = 'error-summary mt-4';
      box.tabIndex = -1;
      box.setAttribute('role', 'alert');
      var items = errors.map(function (e, i) {
        if (!e.input.id) e.input.id = 'invalid-' + i;
        var fieldset = e.input.closest('fieldset');
        var legend = fieldset ? fieldset.querySelector('legend') : null;
        var name = legend ? legend.textContent.trim() + ': ' + (e.label || e.message) : (e.label || e.message);
        return '<li><a href="#' + e.input.id + '">' + name + '</a></li>';
      }).join('');
      box.innerHTML = '<h2>' + errors.length + ' ' + tr(errors.length === 1 ? 'field needs attention' : 'fields need attention') + '</h2><ul>' + items + '</ul>';
      var host = form.querySelector('.js-error-host');
      if (host) host.appendChild(box);
      else form.prepend(box);
      box.focus();
      Array.prototype.forEach.call(box.querySelectorAll('a'), function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var target = document.getElementById(link.getAttribute('href').slice(1));
          if (target) target.focus();
        });
      });
    }

    function validate() {
      var errors = [];
      var names = [];
      for (var i = 1; i <= pax; i += 1) {
        var nameInput = $('#pax' + i + 'Name');
        if (nameInput) {
          clearError(nameInput);
          if (!nameInput.value.trim()) errors.push(setError(nameInput, 'Enter the passenger name.'));
          else names.push(nameInput.value.trim());
        }
      }
      var phone = $('#contactPhone');
      if (phone) {
        clearError(phone);
        if (!/^01[3-9]\d{8}$/.test(phone.value.replace(/[\s-]/g, ''))) errors.push(setError(phone, 'Enter an 11 digit mobile number starting 01.'));
      }
      var email = $('#contactEmail');
      if (email) {
        clearError(email);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errors.push(setError(email, 'Enter a valid email address.'));
      }
      var form = $('#detailsForm');
      if (errors.length && form) showErrorSummary(form, errors);
      else {
        var old = $('#formErrorSummary');
        if (old) old.remove();
      }
      return { valid: errors.length === 0, names: names };
    }

    function continueToPayment() {
      if (seats.length !== pax) return;
      var result = validate();
      if (!result.valid) return;
      savePassengers(result.names);
      go('payment.html?' + new URLSearchParams({
        train: data.trainNo,
        class: data.cls,
        pax: String(pax),
        date: data.dateKey,
        seats: seats.join(',')
      }).toString());
    }

    if (continueBtn) continueBtn.addEventListener('click', continueToPayment);
    var mobileContinue = $('#mobileContinue');
    if (mobileContinue) mobileContinue.addEventListener('click', continueToPayment);
    var detailsForm = $('#detailsForm');
    if (detailsForm) detailsForm.addEventListener('submit', function (event) { event.preventDefault(); continueToPayment(); });

    buildSeats();
    renderPassengers();
    renderSeats();
    renderSummary();
    renderCoachChrome();
    resetHold();

    document.addEventListener('tikit:lang', function () {
      buildSeats();
      renderSeats();
      renderSummary();
      renderCoachChrome();
      syncStep(!detailsForm.hidden);
    });
  }

  function initPayment() {
    var data = bookingFromQuery();
    if (!data.seats.length) data.seats = ['1'];
    data.pax = Math.max(data.pax, data.seats.length);
    var total = data.fare * data.seats.length;

    var pnr = 'TJ' + Math.random().toString(36).slice(2, 8).toUpperCase();
    function setText(selector, text) { var el = $(selector); if (el) el.textContent = text; }
    setText('#payTrain', data.train.name + ', ' + data.trainNo);
    setText('#payMeta', data.clsLabel + ', ' + data.date + ', Kamalapur to ' + STATIONS[data.route.to]);
    setText('#paySeats', data.seats.map(function (n) { return seatLabel(Number(n)); }).join(', '));
    setText('#payFare', taka(data.fare) + ' × ' + data.seats.length);
    setText('#payTotal', taka(total));
    setText('#payButtonAmount', taka(total));
    setText('#mobilePayTotal', taka(total).replace('\u09F3', ''));
    setText('#sumFare', taka(total));
    setText('#sumTotal', taka(total));
    setText('#sumSeats', data.seats.map(function (n) { return seatLabel(Number(n)); }).join(', '));
    setText('#sumClass', data.clsLabel);
    setText('#sumDate', data.date);

    var holdLeft = 600;
    window.setInterval(function () {
      holdLeft -= 1;
      if (holdLeft < 0) holdLeft = 0;
      if (holdClock) holdClock.textContent = String(Math.floor(holdLeft / 60)).padStart(2, '0') + ':' + String(holdLeft % 60).padStart(2, '0');
    }, 1000);

    var methods = $$('[data-method]');
    var panels = $$('[data-method-panel]');
    function setMethod(method) {
      methods.forEach(function (btn) { btn.setAttribute('aria-pressed', btn.dataset.method === method ? 'true' : 'false'); });
      panels.forEach(function (panel) { panel.hidden = panel.dataset.methodPanel !== method; });
      var label = $('#payMethodLabel');
      var methodName = method === 'card' ? 'card' : method === 'bank' ? 'bank transfer' : method === 'nagad' ? 'Nagad' : 'bKash';
      if (label) label.textContent = methodName;
    }
    methods.forEach(function (btn) { btn.addEventListener('click', function () { setMethod(btn.dataset.method); }); });
    if (methods.length) setMethod(methods[0].dataset.method);

    var form = $('#paymentForm');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var active = $('[data-method][aria-pressed="true"]');
        var method = active ? active.dataset.method : 'bkash';
        var valid = true;
        var firstInvalid = null;
        function check(input, ok, message) {
          if (!input) return;
          var err = input.parentElement ? $('.error-text', input.parentElement) : null;
          if (!ok) {
            input.setAttribute('aria-invalid', 'true');
            if (err) { err.textContent = tr(message); err.hidden = false; }
            valid = false;
            firstInvalid = firstInvalid || input;
          } else {
            input.removeAttribute('aria-invalid');
            if (err) err.hidden = true;
          }
        }
        if (method === 'bkash' || method === 'nagad') {
          var activePanel = $('[data-method-panel]:not([hidden])');
          var mobile = activePanel ? activePanel.querySelector('[data-wallet-input]') : $('#walletNumber');
          check(mobile, mobile && /^01[3-9]\d{8}$/.test(mobile.value.replace(/[\s-]/g, '')), 'Enter an 11 digit wallet number.');
        }
        if (method === 'card') {
          var number = $('#cardNumber');
          var name = $('#cardName');
          var expiry = $('#cardExpiry');
          var cvv = $('#cardCvv');
          check(number, number && number.value.replace(/\s/g, '').length >= 15, 'Enter a valid card number.');
          check(name, name && name.value.trim().length > 2, 'Enter the name on the card.');
          check(expiry, expiry && /^\d{2}\/\d{2}$/.test(expiry.value.trim()), 'Use MM/YY.');
          check(cvv, cvv && /^\d{3,4}$/.test(cvv.value.trim()), 'Enter the 3 or 4 digit code.');
        }
        if (method === 'bank') {
          var bank = $('#bankSelect');
          var account = $('#bankAccount');
          check(bank, bank && bank.value, 'Choose a bank.');
          check(account, account && account.value.trim().length >= 6, 'Enter the account number.');
        }
        if (!valid) {
          if (firstInvalid) firstInvalid.focus();
          toast('Check the highlighted payment details.');
          return;
        }
        var btn = $('#payNowBtn');
        if (btn) {
          btn.disabled = true;
          btn.setAttribute('aria-busy', 'true');
          btn.innerHTML = '<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper"></span><span>Confirming payment</span>';
        }
        window.setTimeout(function () {
          savePassengers(getPassengers(data.pax));
          go('confirmation.html?' + new URLSearchParams({
            train: data.trainNo,
            class: data.cls,
            pax: String(data.pax),
            date: data.dateKey,
            seats: data.seats.join(','),
            pnr: pnr,
            method: method
          }).toString());
        }, 1300);
      });
    }
  }

  function initConfirmation() {
    var data = bookingFromQuery();
    if (!data.seats.length) data.seats = ['1'];
    data.pax = Math.max(data.pax, data.seats.length);
    var pnr = data.q.get('pnr') || ('TJ' + Math.random().toString(36).slice(2, 8).toUpperCase());
    var passengers = getPassengers(data.pax);
    var total = data.fare * data.seats.length;

    $('#ticketTrain').textContent = data.train.name + ', ' + data.trainNo;
    $('#ticketRoute').textContent = 'Kamalapur → ' + STATIONS[data.route.to];
    $('#ticketDep').textContent = data.train.dep;
    $('#ticketArr').textContent = data.train.arr;
    $('#ticketDuration').textContent = data.train.duration;
    $('#ticketDate').textContent = data.date;
    $('#ticketClass').textContent = data.clsLabel;
    function seatText() {
      return data.seats.map(function (n) { return seatLabel(Number(n)); }).join(', ');
    }
    function paintTicketSeats() {
      $('#ticketCoach').textContent = coachCode();
      $('#ticketSeats').textContent = seatText();
    }
    paintTicketSeats();
    $('#ticketPnr').textContent = pnr;
    $('#ticketTotal').textContent = taka(total);
    $('#ticketFare').textContent = taka(data.fare) + ' × ' + data.seats.length;
    var methodValue = data.q.get('method') || 'bkash';
    var methodLabel = methodValue === 'card' ? 'Card' : methodValue === 'bank' ? 'Bank transfer' : methodValue === 'nagad' ? 'Nagad' : 'bKash';
    $('#ticketMethod').textContent = methodLabel;
    $('#pnrHero').textContent = pnr;
    function paintConfirmationMeta() {
      var el = $('#confirmationMeta');
      if (!el) return;
      el.textContent = data.date + ', ' + data.clsLabel + ', ' + (isBangla()
        ? banglaDigits(data.seats.length) + ' \u0986\u09B8\u09A8'
        : data.seats.length + ' ' + plural(data.seats.length));
    }
    paintConfirmationMeta();

    function paintPassengers() {
      var list = $('#passengerList');
      if (!list) return;
      list.innerHTML = passengers.map(function (name, index) {
        var seat = data.seats[index] ? seatLabel(Number(data.seats[index])) : '\u2014';
        return '<div class="flex items-baseline justify-between gap-4 border-b border-edge-soft py-3 last:border-0">' +
          '<div><p class="text-sm font-medium">' + name + '</p><p class="mt-0.5 text-xs text-muted">' + tr('Passenger') + ' ' + (isBangla() ? banglaDigits(index + 1) : index + 1) + ', ' + tr('Seat') + ' ' + seat + '</p></div>' +
          '<span class="font-mono text-[10px] tracking-[0.12em] text-muted">' + tr('Adult') + '</span>' +
          '</div>';
      }).join('');
    }
    paintPassengers();

    document.addEventListener('tikit:lang', function () {
      paintTicketSeats();
      paintPassengers();
      paintConfirmationMeta();
    });

    var qr = $('#qrCode');
    if (qr) {
      var size = 13;
      var cells = [];
      for (var r = 0; r < size; r += 1) {
        for (var c = 0; c < size; c += 1) {
          var finder = (r < 3 && c < 3) || (r < 3 && c > size - 4) || (r > size - 4 && c < 3);
          var on = finder ? ((r + c) % 2 === 0) : ((r * 7 + c * 11 + 3) % 5 < 2);
          cells.push('<span' + (on ? '' : ' class="is-off"') + '></span>');
        }
      }
      qr.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
      qr.innerHTML = cells.join('');
    }

    var share = $('#shareTicket');
    if (share) {
      share.addEventListener('click', function () {
        var text = 'tikit ticket ' + pnr + ', ' + data.train.name + ', ' + data.date + ', seats ' + seatText();
        if (navigator.share) {
          navigator.share({ title: 'tikit ticket', text: text }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () { toast('Ticket details copied.'); }).catch(function () { toast(text); });
        } else {
          toast(text);
        }
      });
    }

    initCancelFlow();
  }

  function initCancelFlow() {
    var triggers = $$('[data-cancel-trip]');
    if (!triggers.length) return;
    var dialog = document.createElement('dialog');
    dialog.className = 'dialog';
    dialog.setAttribute('aria-labelledby', 'cancelTitle');
    dialog.innerHTML = '<div class="dialog-card">' +
      '<button type="button" class="dialog-x" data-cancel-close aria-label="Close">' +
      '<svg class="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke-linecap="round"/></svg></button>' +
      '<p class="eyebrow">Cancellation</p>' +
      '<h2 id="cancelTitle" tabindex="-1" class="mt-2 font-display text-2xl font-semibold tracking-tight">Cancel this trip?</h2>' +
      '<p class="mt-2 text-sm leading-relaxed text-muted">More than 24 hours before departure, 90% of the fare comes back to bKash or card in three working days. The seat is released immediately.</p>' +
      '<div class="mt-5 rounded-2xl border border-edge bg-paper-2/40 p-4 text-sm">' +
        '<div class="flex items-baseline justify-between gap-3"><span class="text-muted">Estimated refund</span><span id="refundEstimate" class="font-mono text-lg font-medium">৳0</span></div>' +
        '<p class="mt-1 text-[11px] text-muted">Sample policy for this concept. Nothing is charged.</p>' +
      '</div>' +
      '<div class="mt-5 grid gap-2 sm:grid-cols-2">' +
        '<button type="button" class="btn-outline" data-cancel-close>Keep trip</button>' +
        '<button type="button" class="btn-danger" data-cancel-confirm>Cancel and refund</button>' +
      '</div>' +
    '</div>';
    document.body.appendChild(dialog);

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fare = Number(btn.dataset.fare || 855);
        var seats = Number(btn.dataset.seats || 1);
        var estimate = Math.round(fare * seats * 0.9);
        $('#refundEstimate', dialog).textContent = taka(estimate);
        if (typeof dialog.showModal === 'function') dialog.showModal();
        window.setTimeout(function () { $('#cancelTitle', dialog).focus(); }, 60);
      });
    });
    $$('[data-cancel-close]', dialog).forEach(function (btn) { btn.addEventListener('click', function () { dialog.close(); }); });
    $('[data-cancel-confirm]', dialog).addEventListener('click', function () {
      dialog.close();
      toast('Cancellation started. The refund is on its way.');
    });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  }

  function initLogin() {
    var tabs = $$('[data-auth-tab]');
    var panels = $$('[data-auth-panel]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); t.tabIndex = -1; });
        tab.setAttribute('aria-selected', 'true'); tab.tabIndex = 0;
        panels.forEach(function (panel) { panel.hidden = panel.dataset.authPanel !== tab.dataset.authTab; });
      });
    });

    var password = $('#loginPassword');
    var toggle = $('#togglePassword');
    if (toggle && password) {
      toggle.addEventListener('click', function () {
        var hidden = password.type === 'password';
        password.type = hidden ? 'text' : 'password';
        toggle.setAttribute('aria-pressed', hidden ? 'true' : 'false');
        toggle.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password');
      });
    }

    var form = $('#loginForm');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var id = $('#loginId');
        var ok = true;
        if (!id.value.trim()) { id.setAttribute('aria-invalid', 'true'); var err = $('[data-error-for="loginId"]'); if (err) err.hidden = false; ok = false; }
        else { id.removeAttribute('aria-invalid'); var err2 = $('[data-error-for="loginId"]'); if (err2) err2.hidden = true; }
        if (password.value.length < 4) { password.setAttribute('aria-invalid', 'true'); var perr = $('[data-error-for="loginPassword"]'); if (perr) perr.hidden = false; ok = false; }
        else { password.removeAttribute('aria-invalid'); var perr2 = $('[data-error-for="loginPassword"]'); if (perr2) perr2.hidden = true; }
        if (!ok) return;
        var btn = $('#loginSubmit');
        btn.disabled = true;
        btn.textContent = 'Signing in';
        window.setTimeout(function () { go('dashboard.html'); }, 700);
      });
    }

    var sendOtp = $('#sendOtp');
    if (sendOtp) {
      sendOtp.addEventListener('click', function () {
        var mobile = $('#otpMobile');
        if (!/^01[3-9]\d{8}$/.test(mobile.value.replace(/[\s-]/g, ''))) {
          mobile.setAttribute('aria-invalid', 'true');
          toast('Enter an 11 digit mobile number starting 01.');
          mobile.focus();
          return;
        }
        mobile.removeAttribute('aria-invalid');
        $('#otpStep').hidden = false;
        $('#otpHint').hidden = false;
        sendOtp.textContent = 'Code sent';
        var first = $('#otp1');
        if (first) first.focus();
      });
    }

    var otpForm = $('#otpForm');
    if (otpForm) {
      otpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var inputs = $$('.otp-input', otpForm);
        var code = inputs.map(function (input) { return input.value; }).join('');
        if (code.length !== 6) { toast('Enter the six digit code.'); return; }
        go('dashboard.html');
      });
      $$('.otp-input', otpForm).forEach(function (input, index, all) {
        input.addEventListener('input', function () {
          input.value = input.value.replace(/\D/g, '').slice(0, 1);
          if (input.value && index < all.length - 1) all[index + 1].focus();
        });
        input.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace' && !input.value && index > 0) all[index - 1].focus();
        });
      });
    }

    var forgot = $('#forgotPassword');
    if (forgot) {
      var dialog = $('#resetDialog');
      forgot.addEventListener('click', function (event) {
        event.preventDefault();
        if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
      });
      var resetForm = $('#resetForm');
      if (resetForm) {
        resetForm.addEventListener('submit', function (event) {
          event.preventDefault();
          dialog.close();
          toast('Reset link sent. Check your messages.');
        });
      }
      $$('[data-reset-close]').forEach(function (btn) { btn.addEventListener('click', function () { dialog.close(); }); });
    }
  }

  function initRegister() {
    var step = 1;
    var stepEls = $$('[data-register-step]');
    var indicators = $$('[data-register-indicator]');
    function showStep(next) {
      step = next;
      stepEls.forEach(function (el) { el.hidden = Number(el.dataset.registerStep) !== step; });
      indicators.forEach(function (el) {
        var num = Number(el.dataset.registerIndicator);
        el.classList.toggle('is-current', num === step);
        el.classList.toggle('is-done', num < step);
      });
      var progress = $('#registerProgress');
      if (progress) progress.style.width = ((step - 1) / 2 * 100) + '%';
      var focusTarget = step === 2 ? $('#regOtp1') : step === 3 ? $('#registerDoneTitle') : $('#regName');
      if (focusTarget) window.setTimeout(function () { focusTarget.focus(); }, 60);
    }

    var form = $('#registerForm');
    if (form) {
      var password = $('#regPassword');
      var strength = $('#passwordStrength');
      var strengthLabel = $('#passwordStrengthLabel');
      function scorePassword(value) {
        var score = 0;
        if (value.length >= 8) score += 1;
        if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
        if (/\d/.test(value)) score += 1;
        if (/[^A-Za-z0-9]/.test(value)) score += 1;
        return score;
      }
      if (password) {
        password.addEventListener('input', function () {
          var score = scorePassword(password.value);
          var pct = password.value ? Math.max(15, score * 25) : 0;
          if (strength) { strength.style.width = pct + '%'; strength.style.background = score >= 3 ? 'var(--color-leaf)' : score === 2 ? 'var(--color-brass)' : 'var(--color-rust)'; }
          if (strengthLabel) strengthLabel.textContent = !password.value ? 'Use 8+ characters' : score >= 3 ? 'Strong' : score === 2 ? 'Fair' : 'Weak';
        });
      }

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var terms = $('#regTerms');
        var name = $('#regName');
        var mobile = $('#regMobile');
        var email = $('#regEmail');
        var confirm = $('#regConfirm');
        var ok = true;
        function flag(input, condition, message) {
          if (!input) return;
          var container = input.closest('div');
          var err = container ? $('.error-text', container) : null;
          if (!condition) {
            input.setAttribute('aria-invalid', 'true');
            if (err) { err.textContent = tr(message); err.hidden = false; }
            ok = false;
          } else {
            input.removeAttribute('aria-invalid');
            if (err) err.hidden = true;
          }
        }
        flag(name, name.value.trim().length > 2, 'Enter your full name.');
        flag(mobile, /^01[3-9]\d{8}$/.test(mobile.value.replace(/[\s-]/g, '')), 'Enter an 11 digit mobile number.');
        flag(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), 'Enter a valid email.');
        flag(password, password.value.length >= 8, 'Use at least 8 characters.');
        flag(confirm, confirm.value === password.value && confirm.value.length > 0, 'Passwords do not match.');
        if (terms && !terms.checked) { toast('Accept the terms to create an account.'); ok = false; }
        if (!ok) {
          toast('Check the highlighted details.');
          var first = form.querySelector('[aria-invalid="true"]');
          if (first) first.focus();
          return;
        }
        showStep(2);
      });
    }

    var otpForm = $('#registerOtpForm');
    if (otpForm) {
      $$('.otp-input', otpForm).forEach(function (input, index, all) {
        input.addEventListener('input', function () {
          input.value = input.value.replace(/\D/g, '').slice(0, 1);
          if (input.value && index < all.length - 1) all[index + 1].focus();
        });
        input.addEventListener('keydown', function (event) {
          if (event.key === 'Backspace' && !input.value && index > 0) all[index - 1].focus();
        });
      });
      otpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var code = $$('.otp-input', otpForm).map(function (input) { return input.value; }).join('');
        if (code.length !== 6) { toast('Enter the six digit code.'); return; }
        showStep(3);
      });
    }

    var back = $('#registerBack');
    if (back) back.addEventListener('click', function () { showStep(1); });

    var resend = $('#resendCode');
    if (resend) {
      resend.addEventListener('click', function () {
        toast('A new code is on its way.');
        resend.textContent = 'Sent';
        window.setTimeout(function () { resend.textContent = 'Resend code'; }, 20000);
      });
    }

    showStep(1);
  }

  function initDashboard() {
    var addPassenger = $('#addPassengerBtn');
    var dialog = $('#passengerDialog');
    var form = $('#passengerForm');
    var list = $('#passengerList');
    if (addPassenger && dialog) {
      addPassenger.addEventListener('click', function () {
        if (form) form.reset();
        if (typeof dialog.showModal === 'function') dialog.showModal();
      });
      $$('[data-passenger-close]').forEach(function (btn) { btn.addEventListener('click', function () { dialog.close(); }); });
      dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    }
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = $('#newPassengerName');
        var age = $('#newPassengerAge');
        var gender = $('#newPassengerGender');
        if (!name.value.trim()) { name.setAttribute('aria-invalid', 'true'); name.focus(); return; }
        name.removeAttribute('aria-invalid');
        var initials = name.value.trim().split(/\s+/).slice(0, 2).map(function (part) { return part[0].toUpperCase(); }).join('');
        if (list) {
          var row = document.createElement('div');
          row.className = 'flex items-center justify-between gap-4 py-4';
          row.innerHTML = '<div class="flex min-w-0 items-center gap-3">' +
            '<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-soft font-mono text-[11px] font-medium text-leaf">' + initials + '</span>' +
            '<div class="min-w-0"><p class="truncate text-sm font-medium">' + name.value.trim() + '</p>' +
            '<p class="mt-0.5 text-xs text-muted">' + (age.value || '—') + ' yrs, ' + gender.value + '</p></div></div>' +
            '<span class="rounded-full bg-paper-2 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-muted">Saved</span>';
          list.prepend(row);
        }
        dialog.close();
        toast('Passenger saved.');
      });
    }

    var settings = $('#settingsForm');
    if (settings) {
      settings.addEventListener('submit', function (event) {
        event.preventDefault();
        toast('Account details saved.');
      });
    }

    $$('[data-dash-refresh]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var stamp = $('#liveStatusTime');
        if (stamp) stamp.textContent = 'Updated just now';
        toast('Live status refreshed.');
      });
    });
  }

  function initHelp() {
    var search = $('#faqSearch');
    var details = $$('.faq details');
    var chips = $$('[data-faq-filter]');
    function filterFaq(term, category) {
      var needle = lower(term).trim();
      var visible = 0;
      details.forEach(function (item) {
        var text = lower(item.textContent);
        var cat = item.dataset.category || 'all';
        var catOk = !category || category === 'all' || cat === category;
        var textOk = !needle || text.indexOf(needle) !== -1;
        var show = catOk && textOk;
        item.hidden = !show;
        if (show) visible += 1;
      });
      var empty = $('#faqEmpty');
      if (empty) empty.hidden = visible > 0;
    }
    if (search) search.addEventListener('input', function () {
      var activeChip = $('[data-faq-filter][aria-pressed="true"]');
      filterFaq(search.value, activeChip ? activeChip.dataset.faqFilter : 'all');
    });
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        filterFaq(search ? search.value : '', chip.dataset.faqFilter);
      });
    });

    var refundForm = $('#refundForm');
    if (refundForm) {
      refundForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var fare = Math.max(0, Number($('#refundFare').value || 0));
        var timing = Number($('#refundTiming').value);
        var pct = timing >= 72 ? 0.9 : timing >= 48 ? 0.75 : timing >= 24 ? 0.5 : timing >= 12 ? 0.25 : 0;
        var amount = Math.round(fare * pct);
        $('#refundAmount').textContent = taka(amount);
        $('#refundNote').textContent = pct === 0
          ? 'No refund after departure. Talk to the station desk for exceptional cases.'
          : Math.round(pct * 100) + '% of the fare comes back to the original payment method in three working days.';
      });
    }

    var statusForm = $('#statusForm');
    if (statusForm) {
      statusForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var no = $('#statusTrain').value;
        var train = TRAIN_INDEX[no];
        var result = $('#statusResult');
        if (!result) return;
        if (!train) { result.hidden = true; toast('No live sample for that service.'); return; }
        result.hidden = false;
        $('#statusName').textContent = train.name + ', ' + train.no;
        $('#statusRoute').textContent = train.route.title;
        $('#statusTime').textContent = train.dep + ' → ' + train.arr;
        $('#statusPlatform').textContent = 'Platform ' + (no === '786' ? '4' : no === '704' ? '2' : '6');
        var late = no === '704';
        var chip = $('#statusChip');
        chip.textContent = late ? '10 min late' : 'On time';
        chip.className = 'rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] ' + (late ? 'bg-brass-soft text-brass-ink' : 'bg-leaf-soft text-leaf');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initGlobalClicks();
    var page = document.body.dataset.page;
    if (page === 'home') initHome();
    if (page === 'trains') initTrains();
    if (page === 'booking') initBooking();
    if (page === 'payment') initPayment();
    if (page === 'confirmation') initConfirmation();
    if (page === 'login') initLogin();
    if (page === 'register') initRegister();
    if (page === 'dashboard') initDashboard();
    if (page === 'help') initHelp();
  });
})();
