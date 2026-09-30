const COPY = {
  en: {
    signIn: "Sign in", welcome: "Welcome back", partnerId: "Partner ID", password: "Password",
    forgot: "Forgot password?", newPartner: "New partner?", register: "Register to join",
    home: "Home", jobs: "Jobs", map: "Map", ledger: "Ledger", profile: "Profile",
    documents: "Documents", vehicle: "My vehicle", availability: "Availability", support: "Help & support",
    signOut: "Sign out", today: "Today at a glance", next: "Your next job",
  },
  si: {
    signIn: "ඇතුළු වන්න", welcome: "නැවත සාදරයෙන් පිළිගනිමු", partnerId: "සහකරු අංකය", password: "මුරපදය",
    forgot: "මුරපදය අමතකද?", newPartner: "නව සහකරුද?", register: "ලියාපදිංචි වන්න",
    home: "මුල් පිටුව", jobs: "රැකියා", map: "සිතියම", ledger: "ලෙජරය", profile: "පැතිකඩ",
    documents: "ලේඛන", vehicle: "වාහනය", availability: "ලබා ගත හැකි", support: "උදව්",
    signOut: "ඉවත් වන්න", today: "අද එක බැල්මකින්", next: "ඊළඟ රැකියාව",
  },
  ta: {
    signIn: "உள்நுழை", welcome: "மீண்டும் வரவேற்கிறோம்", partnerId: "கூட்டாளர் எண்", password: "கடவுச்சொல்",
    forgot: "கடவுச்சொல் மறந்துவிட்டதா?", newPartner: "புதிய கூட்டாளரா?", register: "பதிவு செய்யுங்கள்",
    home: "முகப்பு", jobs: "பணிகள்", map: "வரைபடம்", ledger: "பேரேடு", profile: "சுயவிவரம்",
    documents: "ஆவணங்கள்", vehicle: "வாகனம்", availability: "கிடைக்கும்", support: "உதவி",
    signOut: "வெளியேறு", today: "இன்றைய பார்வை", next: "அடுத்த பணி",
  },
};

const ACCOUNT_TYPES = [
  { id: "driver", title: "Individual Driver", detail: "Single Vehicle Driver" },
  { id: "driver-guide", title: "Driver + Guide (SLTDA)", detail: "Chauffeur Driver(SLTDA Licensed)" },
  { id: "guide", title: "Licensed Guide", detail: "SLTDA-licensed guide, with or without a vehicle. Vehicles are linked later, at trip stage." },
  { id: "chauffeur", title: "Chauffeur Driver(SLTDA Licensed)", detail: "Tourist Guide licence plus your own vehicle." },
  { id: "company", title: "Registered Company", detail: "Fleet / Company" },
];

const REGIONS = ["Colombo", "Negombo", "Bentota", "Galle", "Unawatuna", "Hikkaduwa", "Kandy", "Tangalle", "Pasikuda", "Yala"];
const DECLINE = ["Route conflicts with another job", "Outside my vehicle capacity", "Vehicle unavailable at this time", "My flight pickup is delayed", "Guest cancelled on arrival", "Guest unreachable by phone", "Not at the pickup point after 15 min", "Wrong pickup location given", "A guest isn't at the pickup point"];
const EXPENSE_TYPES = ["Fuel", "Parking", "Toll", "Meals", "Entrance", "Other"];
const LADDER = ["Offered", "Accepted", "On the way", "Arrived", "Started", "Completed"];

const state = {
  route: "/login",
  lang: "en",
  theme: "light",
  signedIn: false,
  error: "",
  toast: "",
  otp: ["", "", "", "", "", ""],
  otpPurpose: "login",
  jobsTab: "Today",
  jobFilter: "All",
  fleetFilter: "All",
  jobQuery: "",
  jobsFrom: "2026-09-28",
  jobsTo: "2026-10-02",
  jobsAnchor: "",
  jobsMonth: "2026-09",
  ticketTab: "upload",
  walletTab: "today",
  handoverId: "",
  ledgerTab: "Earnings",
  earnFrom: "2026-09-01",
  earnTo: "2026-09-30",
  earnAnchor: "",
  earnMonth: "2026-09",
  sheet: "",
  declineReason: DECLINE[0],
  selectedJob: "EHI-24091",
  regStep: 0,
  reference: "",
  statusHit: false,
  reg: {
    type: "driver-guide",
    nameWithInitials: "", fullName: "", nicNumber: "", phone: "", whatsappNumber: "", email: "",
    preferredCommunication: "WhatsApp", addressLine1: "", town: "", district: "", province: "Southern", country: "Sri Lanka",
    businessName: "", brNumber: "", businessType: "Transport Company", businessEmail: "",
    officeAddress: "", officeTown: "", officeRegion: "Southern", officeCountry: "Sri Lanka", ownerName: "",
    registrationNumber: "", vehicleClass: "Passenger Van (KDH / HighAce)", vehicleType: "Passenger Van (KDH / HighAce)",
    make: "", model: "", colour: "", manufactureYear: "", fuelType: "Diesel",
    totalSeats: "", maxPassengers: "", guestSeats: "", airConditioning: "Yes, A/C Working", conditionNotes: "",
    sltdaNumber: "", licenceCategory: "Chauffeur Guide", yearsGuiding: "", licenceValidUntil: "",
    languages: ["English"], specializations: [], regions: [],
    availabilityType: "Full Time", startDate: "", endDate: "", baseRegion: "",
    temporaryLicence: false, helperName: "", helperNic: "", relationship: "", helpers: [], confirmed: false,
  },
  availability: "Available",
  leavePick: "Available",
  leaves: [],
  leaveFrom: "",
  leaveTo: "",
  leaveNote: "",
  regions: ["Western", "Central", "Southern", "Sabaragamuwa"],
  partner: {
    id: "1528",
    name: "Oshada Pabasara Galappaththi",
    first: "Oshada",
    role: "Driver",
    phone: "+94761891321",
    email: "oshada4apex@gmail.com",
    plate: "ND-9012",
    vehicle: "Toyota Prius · Semi luxury car",
    model: "Toyota Prius",
    category: "Car · Semi luxury",
    baseRegion: "Western",
    baggageSize: "Medium",
    baggageCapacity: "2 large bags",
    vehiclePhoto: "",
    address: "42/5 Temple Road, Moratuwa",
    region: "Western",
    driverStatus: "Active",
    driverCategory: "Individual Driver",
    supplierOwner: "Nimal Perera",
    supplier: "Apex Transport",
    joined: "2024-03-12",
    photo: "",
    seats: 3,
    luggage: "2 large bags",
    ac: "Yes",
  },
  spoken: [
    { name: "English", level: "Fluent", dots: 5 },
    { name: "Sinhala", level: "Native", dots: 5 },
    { name: "Tamil", level: "Conversational", dots: 3 },
    { name: "German", level: "Basic", dots: 1 },
  ],
  jobs: [
    Object.assign(job("44212", "Arrival", "AVERIANOV SERGEI", 3, "Arrival", "30 September 2026", "02:38", "Bandaranaike Airport", "Eden Beruwala", "Western", "Assigned", 0, 0, "QR 662", [], []), {
      service: "Arrival",
      trf: "A-H",
      pair: "Airport → Hotel",
      fleet: "Car",
      group: "Individual",
      combined: "44216",
      km: 98,
      fromDate: "30 Sep 2026",
      toDate: "30 Sep 2026",
      rep: { name: "Dushan Fonseka – Airport Rep", phone: "0703464346" },
      guide: "",
      booking: "1238935",
      clients: ["AVERIANOV SERGEI", "AVERIANOVA NADEZHDA", "CHIVILDEEVA SOFIIA"],
      clientStatus: "Client Transfer Complete",
      agent: "Paks Moscow",
      hotel: "The Eden Beruwala (ex. Occidental Eden Beruwala)",
      pickupAt: "2026 Sep 30 at 2.38AM",
      flightKind: "Arrival",
      flightTime: "02:05",
      flightDate: "Sep 30",
      contact: "",
      room: "",
      notes: [],
      tickets: [],
      media: [],
      parkingKm: 0,
      payMeta: { status: "Pending", date: "30 Sep 2026", method: "Bank", reference: "TR-44212" },
    }),
    Object.assign(job("44216", "Departure", "Guest", 2, "Departure", "30 September 2026", "—", "Eden Beruwala", "Bandaranaike Airport", "Western", "Assigned", 0, 0, "", [], []), {
      service: "Departure",
      trf: "H-A",
      pair: "Hotel → Airport",
      fleet: "Car",
      group: "Individual",
      combined: "44212",
      km: 98,
      fromDate: "30 Sep 2026",
      toDate: "30 Sep 2026",
      rep: null,
      guide: "",
      booking: "1238936",
      clients: ["Guest 1", "Guest 2"],
      clientStatus: "Client Picked",
      agent: "Paks Moscow",
      hotel: "Eden Beruwala",
      pickupAt: "2026 Sep 30",
      flightKind: "Departure",
      flightTime: "—",
      flightDate: "Sep 30",
      contact: "",
      room: "",
      notes: [],
      tickets: [],
      media: [],
      parkingKm: 0,
      payMeta: { status: "Pending", date: "30 Sep 2026", method: "Bank", reference: "TR-44216" },
    }),
    Object.assign(job("44218", "Internal", "Hotel guest", 2, "Transfer", "30 September 2026", "11:00", "Cinnamon Grand", "Galle Face Hotel", "Western", "Assigned", 0, 0, "", [], []), {
      service: "Transfer",
      trf: "H-H",
      pair: "Hotel → Hotel",
      combined: "—",
      fleet: "Van",
      group: "Group",
      km: 18,
      fromDate: "30 Sep 2026",
      toDate: "30 Sep 2026",
      rep: null,
      guide: "",
      booking: "1239001",
      clients: ["Hotel guest"],
      clientStatus: "Client Picked",
      agent: "Walk-in",
      hotel: "Cinnamon Grand",
      pickupAt: "2026 Sep 30 at 11.00AM",
      flightKind: "Internal",
      flightTime: "—",
      flightDate: "Sep 30",
      contact: "",
      room: "",
      notes: [],
      tickets: [],
      media: [],
      parkingKm: 0,
      payMeta: { status: "Pending", date: "30 Sep 2026", method: "Bank", reference: "TR-44218" },
    }),
    Object.assign(job("44224", "Round Tour", "N. Fernando", 2, "Round Tour", "30 September 2026", "15:40", "Bandaranaike Airport", "Galle Face Hotel", "Western", "Assigned", 0, 0, "UL 141", [], []), {
      service: "Round Tour",
      trf: "A-T",
      pair: "Round Tour",
      combined: "—",
      fleet: "Car",
      group: "Individual",
      km: 58,
      fromDate: "30 Sep 2026",
      toDate: "30 Sep 2026",
      rep: { name: "Dushan Fonseka – Airport Rep", phone: "0703464346" },
      guide: "",
      booking: "1239010",
      clients: ["N. Fernando", "A. Fernando"],
      clientStatus: "Client Picked",
      agent: "Exotic Holidays",
      hotel: "Galle Face Hotel",
      pickupAt: "2026 Sep 30 at 3.40PM",
      flightKind: "Arrival",
      flightTime: "15:40",
      flightDate: "Sep 30",
      contact: "",
      room: "",
      notes: [],
      tickets: [],
      media: [],
      parkingKm: 0,
      payMeta: { status: "Pending", date: "30 Sep 2026", method: "Bank", reference: "TR-44224" },
    }),
    Object.assign(job("EHI-24091", "Colombo round", "N. Fernando", 2, "Round Tour", "30 September 2026", "15:40", "Bandaranaike International Airport", "Galle Face Hotel", "Western", "Started", 4, 18500, "UL 141", [[7.1808, 79.8842], [7.09, 79.88], [6.95, 79.86], [6.927, 79.845]], [{ seat: "1", name: "N. Fernando", note: "Lead guest" }, { seat: "2", name: "A. Fernando", note: "Child seat" }]), {
      legs: [
        { label: "Arrival", from: "Bandaranaike Airport", to: "Galle Face Hotel" },
        { label: "Departure", from: "Galle Face Hotel", to: "Bandaranaike Airport" },
      ],
      places: ["Bandaranaike Airport", "Katunayake", "Peliyagoda", "Galle Face Hotel", "Colombo", "Katunayake", "Bandaranaike Airport"],
      returnRoute: [[6.927, 79.845], [6.95, 79.87], [7.09, 79.89], [7.1808, 79.8842]],
      pickedUp: true,
    }),
    Object.assign(job("EHI-24102", "Airport arrival", "K. Jayasuriya", 2, "Arrival", "30 September 2026", "18:10", "Bandaranaike Airport", "Cinnamon Grand", "Western", "Pending", 0, 0, "UL 308", [], [{ seat: "1", name: "K. Jayasuriya", note: "Lead guest" }]), {
      legs: [{ label: "Arrival", from: "Bandaranaike Airport", to: "Cinnamon Grand" }],
      offerUntil: Date.now() + 15 * 60 * 1000,
    }),
    Object.assign(job("EHI-24118", "Silk Route city", "M. Rossi", 3, "Excursion", "2 October 2026", "09:00", "Galle Face Hotel", "Gangaramaya", "Western", "Pending", 0, 220, "", [], [{ seat: "1", name: "M. Rossi", note: "Silk Route guest" }]), {
      legs: [
        { label: "Departure", from: "Galle Face Hotel", to: "Gangaramaya" },
        { label: "Arrival", from: "Gangaramaya", to: "Galle Face Hotel" },
      ],
      offerUntil: Date.now() + 6 * 60 * 60 * 1000,
      offerHold: "office",
      specialPrice: true,
      currency: "USD",
      service: "Excursion",
      trf: "A-T",
      pair: "Excursion",
      fleet: "Car",
      group: "Individual",
      combined: "—",
      km: 42,
      fromDate: "2 Oct 2026",
      toDate: "2 Oct 2026",
      guide: { name: "Dinesh Rathnayake" },
      rep: null,
    }),
    Object.assign(job("EHI-24070", "Negombo drop", "A. Perera", 1, "Transfer", "28 September 2026", "11:00", "Colombo Fort", "Negombo Beach", "Western", "Completed", 5, 0, "", [], [{ seat: "1", name: "A. Perera", note: "" }]), {
      service: "Transfer",
      trf: "H-H",
      pair: "Hotel → Hotel",
      fleet: "Car",
      group: "Individual",
      combined: "—",
      km: 38,
      fromDate: "28 Sep 2026",
      toDate: "28 Sep 2026",
      rep: null,
    }),
    Object.assign(job("EHI-24081", "Morning drop", "S. Fernando", 2, "Departure", "30 September 2026", "06:20", "Galle Face Hotel", "Bandaranaike Airport", "Western", "Completed", 5, 0, "UL 102", [], []), {
      service: "Departure",
      trf: "H-A",
      pair: "Hotel → Airport",
      fleet: "Car",
      group: "Individual",
      combined: "—",
      km: 34,
      fromDate: "30 Sep 2026",
      toDate: "30 Sep 2026",
      rep: null,
    }),
    Object.assign(job("EHI-24074", "Kandy run", "R. Silva", 3, "Round Tour", "29 September 2026", "07:00", "Cinnamon Grand", "Temple of the Tooth", "Central", "Completed", 5, 0, "", [], []), {
      service: "Round Tour",
      trf: "A-T",
      pair: "Round tour",
      fleet: "Car",
      group: "Individual",
      combined: "—",
      km: 116,
      fromDate: "29 Sep 2026",
      toDate: "29 Sep 2026",
      rep: null,
    }),
    Object.assign(job("EHI-24066", "Galle drop", "L. Perera", 2, "Transfer", "28 September 2026", "14:30", "Mount Lavinia Hotel", "Galle Fort", "Southern", "Completed", 5, 0, "", [], []), {
      service: "Transfer",
      trf: "H-H",
      pair: "Hotel → Hotel",
      fleet: "Car",
      group: "Individual",
      combined: "—",
      km: 122,
      fromDate: "28 Sep 2026",
      toDate: "28 Sep 2026",
      rep: null,
    }),
  ],
  cash: [
    { id: "C-1", jobId: "EHI-24091", title: "Transfer fare", amount: 18500, currency: "LKR", status: "With you", fromName: "N. Fernando", forCompany: true },
    { id: "C-2", jobId: "EHI-24091", title: "Parking", amount: 1500, currency: "LKR", status: "To collect", fromName: "N. Fernando", forCompany: true },
    { id: "C-3", jobId: "EHI-24080", title: "City tour fare", amount: 12000, currency: "LKR", status: "Handed over", date: "2026-09-29", fromName: "A. Perera", officeName: "Nadeesha Silva", officeDept: "Transport Department", forCompany: true },
    { id: "C-4", jobId: "EHI-24118", title: "Silk Route fare", amount: 50, currency: "USD", status: "To collect", fromName: "M. Rossi", forCompany: true },
  ],
  expenses: [
    { id: "X-1", jobId: "EHI-24091", type: "Toll", amount: 800, currency: "LKR", note: "Airport expressway" },
    { id: "X-2", jobId: "EHI-24091", type: "Parking", amount: 400, currency: "LKR", note: "Galle Face" },
  ],
  advances: [
    { id: "A-1", jobId: "EHI-24091", title: "Fuel advance", amount: 5000, currency: "LKR", date: "2026-09-30" },
  ],
  payouts: [
    { id: "P-1", title: "Week 39 trips", date: "2026-10-03", amount: 42500, currency: "LKR", status: "Upcoming" },
    { id: "P-2", title: "Week 38 trips", date: "2026-09-26", amount: 38600, currency: "LKR", status: "Paid" },
  ],
  pay: {
    month: "September 2026",
    year: 2026,
    mileage: 32400,
    bata: 18600,
    highway: 9200,
    km: { transfer: 1240, excursion: 860, round: 1105, refusal: 480 },
    hours: "186h 40m",
    refused: 4,
    yearly: 548600,
    score: 4.6,
    trips: 38,
    onTime: 96,
    reviews: [
      { from: "N. Fernando", role: "Tourist", text: "Smooth drive and the child seat was ready at the airport.", score: 5, date: "2026-09-30", kind: "praise", tags: ["Clean car", "On time", "Child seat ready"] },
      { from: "Nadeesha Silva", role: "Transport Department", text: "Highway ticket and mileage sheet matched the round tour.", score: 5, date: "2026-09-26", kind: "praise", tags: ["Clean car", "Safe driving"] },
      { from: "Ops desk", role: "Transport Department", text: "Pickup was late at Galle Face. The car was fine.", score: 3, date: "2026-09-18", kind: "complaint", tags: ["Late pickup"] },
      { from: "M. Rossi", role: "Tourist", text: "The car smelled of smoke and the route was longer than agreed.", score: 2, date: "2026-09-12", kind: "complaint", tags: ["Dirty vehicle", "Wrong route"] },
    ],
  },
  documents: [
    { name: "Registration book", side: "Owner and plate pages", status: "Not uploaded", group: "attention" },
    { name: "Police clearance", side: "Issued within the last 6 months", status: "Not uploaded", group: "attention" },
    { name: "Emission certificate", side: "Issued within the last 12 months", status: "Not uploaded", group: "attention" },
    { name: "Driving licence · front", side: "Clear photo, all text legible", status: "Not uploaded", group: "attention" },
    { name: "Driving licence · back", side: "Clear photo of the vehicle class page", status: "Not uploaded", group: "attention" },
    { name: "Vehicle insurance", side: "Must include passenger cover", status: "Under review", group: "all" },
    { name: "Revenue licence", side: "Current year, matching the plate", status: "Under review", group: "all" },
    { name: "Driving License Temporary", side: "", status: "Approved", group: "all" },
  ],
  licences: [
    { name: "Driving licence", expires: "2026-10-12" },
    { name: "Revenue licence", expires: "2026-10-08" },
  ],
  specialNotes: [
    { text: "Child seat needed. Meet at arrivals door 2.", jobId: "EHI-24091" },
  ],
  specialServices: [
    { name: "Silk Route", text: "Welcome kit at arrivals door 2. Confirm with the guest before you leave the airport.", jobId: "EHI-24091" },
  ],
  bank: {
    name: "Bank of Ceylon",
    branch: "Moratuwa",
    holder: "Oshada Pabasara Galappaththi",
    account: "81234567",
    rate: "LKR 85 per km · bata LKR 2,500 a day",
  },
  equipment: [
    { name: "Bus board", code: "BB-1528", status: "With you" },
    { name: "Uniform", code: "Navy set · size M", status: "With you" },
    { name: "Radio", code: "Not issued", status: "At office" },
  ],
  guidelines: [
    { title: "Attire", text: "Navy shirt, closed shoes, and your name badge on before the guest boards." },
    { title: "Safety toolkit", text: "First aid, warning triangle, extinguisher, and a child seat when the job asks for one." },
  ],
  toolkit: [
    { name: "First aid kit", ok: true },
    { name: "Warning triangle", ok: true },
    { name: "Fire extinguisher", ok: false },
    { name: "Child seat", ok: true },
    { name: "High-visibility vest", ok: false },
  ],
  calendar: { "2026-09-30": "Booked", "2026-10-02": "Offered" },
  messageTab: "client",
  scripts: [
    "I have arrived at the pickup point.",
    "I am on the way to you.",
    "Please meet me at arrivals door 2.",
    "The vehicle is a Toyota Prius, plate ND-9012.",
  ],
  messages: {
    client: [{ from: "guest", text: "We are at arrivals door 2.", time: "15:20" }],
    office: [{ from: "office", text: "Child seat is confirmed for EHI-24091.", time: "14:02" }],
  },
  officeFeed: [{ title: "Transport Department", text: "Child seat is confirmed for EHI-24091.", time: "14:02" }],
  incidents: [],
  fleet: [
    { plate: "WP-4421", model: "Toyota HiAce", category: "Van", seats: 8, region: "Western", status: "Available" },
    { plate: "ND-1180", model: "Toyota Prius", category: "Car · Semi luxury", seats: 3, region: "Western", status: "On a job" },
    { plate: "CP-2204", model: "Toyota KDH", category: "Van", seats: 10, region: "Central", status: "Available" },
  ],
};

function job(id, title, client, pax, type, date, time, from, to, region, status, ladder, cash, flight, route, manifest) {
  return { id, title, client, pax, type, date, time, from, to, region, status, ladder, cash, currency: "LKR", flight, route, manifest, note: "" };
}

const t = (key) => (COPY[state.lang] && COPY[state.lang][key]) || COPY.en[key] || key;
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const money = (amount, currency) => `${currency} ${Number(amount).toLocaleString()}`;
function cashTaken(item) {
  if (item.parts) {
    const bits = ["LKR", "USD"].filter((code) => Number(item.parts[code]) > 0).map((code) => money(item.parts[code], code));
    if (bits.length) return bits.join(" + ");
  }
  return money(item.amount, item.currency || "LKR");
}
function heldAmount(item, code) {
  if (item.parts) return Number(item.parts[code]) || 0;
  return (item.currency || "LKR") === code ? Number(item.amount) || 0 : 0;
}
const findJob = (id) => state.jobs.find((item) => item.id === (id || state.selectedJob)) || state.jobs[0];
function go(path) {
  state.error = "";
  state.sheet = "";
  location.hash = path;
}

function toast(message) {
  state.toast = message;
  render();
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { state.toast = ""; render(); }, 2200);
}

function notifyOffice(title, text) {
  const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  state.officeFeed.unshift({ title, text, time });
}

function jobDay(item) {
  const parsed = Date.parse(item.date);
  if (Number.isNaN(parsed)) return "";
  const date = new Date(parsed);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function offerLeft(item) {
  if (!item.offerUntil) return "";
  const sec = Math.max(0, Math.round((item.offerUntil - Date.now()) / 1000));
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  if (hours) return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  return `${minutes}:${String(sec % 60).padStart(2, "0")}`;
}

function livePlace() {
  const trip = activeTrip();
  if (!trip) return "Colombo";
  const path = tripPath(trip);
  return (path[0] && path[0].place) || trip.from;
}

function shareText() {
  const p = state.partner;
  const langs = state.spoken.map((item) => item.name).join(", ");
  return `${p.name}\nDriver · Exotic Holidays International\n${p.phone}\nLanguages: ${langs}\nRating: ${state.pay.score} / 5\nLive location: ${livePlace()}`;
}

function requireSession() {
  return ["/home", "/jobs", "/map", "/wallet", "/ledger", "/profile", "/documents", "/vehicle", "/languages", "/personal", "/notifications", "/support", "/manifest", "/complete", "/share", "/calendar", "/messages", "/safety", "/incident"].some((path) => state.route === path || state.route.startsWith(path + "?"));
}

function regSteps() {
  const type = state.reg.type;
  const steps = ["Account Type"];
  if (type === "company") steps.push("Business & Contact");
  else steps.push("Personal Details");
  if (type !== "guide") steps.push("Vehicle Details");
  if (type === "guide" || type === "driver-guide" || type === "chauffeur") steps.push("Guide Licence & Skills");
  if (type === "company") steps.push("Helper / Assistant Details", "Company & Fleet Docs");
  else steps.push("Documents & Photos");
  steps.push("Availability & Service Coverage", "Review & Submit");
  return steps;
}

function pill(status) {
  const tone = status === "Completed" || status === "Verified" || status === "Paid" || status === "Available" ? "green" : status === "Offered" || status === "Expiring" || status === "Waiting on ops" || status === "Waiting for review" ? "amber" : status === "Declined" ? "red" : "";
  return `<span class="pill ${tone}">${esc(status)}</span>`;
}

function field(label, id, value, type = "text", extra = "") {
  return `<label class="field"><span>${label}</span><input id="${id}" type="${type}" value="${esc(value)}" ${extra}></label>`;
}
function f(key, label, placeholder = "", type = "text") {
  return `<label class="field"><span>${esc(label)}</span><input data-reg="${key}" type="${type}" value="${esc(state.reg[key] || "")}" placeholder="${esc(placeholder)}"></label>`;
}
function s(key, label, options) {
  return `<label class="field"><span>${esc(label)}</span><select data-reg="${key}">${options.map((item) => `<option ${state.reg[key] === item ? "selected" : ""}>${esc(item)}</option>`).join("")}</select></label>`;
}
function uploadTile(title, detail) {
  return `<div class="card" style="margin-bottom:8px"><b>${esc(title)}</b><div class="meta">${esc(detail)}</div><button class="btn small ghost" type="button" data-act="upload" data-doc="${esc(title)}">Upload</button></div>`;
}

function jobCard(item) {
  const legs = (item.legs || []).map((leg) => `<small class="leg-line">${esc(leg.label)} · ${esc(leg.from)} → ${esc(leg.to)}</small>`).join("");
  const timer = item.status === "Pending" && item.offerUntil ? `<small class="offer-left" data-offer="${esc(item.id)}">${offerLeft(item)}</small>` : "";
  const price = item.specialPrice ? `<small class="special-price">Special price · also with other drivers</small>` : "";
  return `<button class="card job" data-go="/jobs?id=${encodeURIComponent(item.id)}">
    <div class="when">${esc(item.time)}<div class="meta">${esc(item.date.replace(" 2026", ""))}</div>${timer}</div>
    <div><strong>${esc(item.title)}</strong><div class="meta">${esc(item.id)} · ${item.pax} pax</div>${legs}${price}</div>
    <div>${pill(item.status)}</div>
  </button>`;
}

function helloLine() {
  const now = new Date();
  const hour = now.getHours();
  const hello = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const date = now.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const jobsToday = state.jobs.filter((item) => item.status !== "Completed" && item.status !== "Declined").length;
  return { hello, date, time, jobsToday };
}
function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
function prettyDate(iso) {
  const [year, month, day] = String(iso || "").split("-").map(Number);
  if (!year || !month || !day) return iso || "";
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
function leaveSpan(item) {
  return item.from === item.to ? prettyDate(item.from) : `${prettyDate(item.from)} – ${prettyDate(item.to)}`;
}
function activeLeave() {
  const today = todayKey();
  return state.leaves.find((item) => item.from && item.to && item.from <= today && today <= item.to) || null;
}
function leavePhase(item) {
  const today = todayKey();
  if (today < item.from) return "Upcoming";
  if (today > item.to) return "Ended";
  return "On leave now";
}
function liveStatus() {
  if (activeLeave()) return "On leave";
  return state.availability === "Offline" ? "Offline" : "Available";
}
function statusText() {
  const leave = activeLeave();
  return leave ? `On leave · ${leaveSpan(leave)}` : liveStatus();
}
function availClass() {
  const status = liveStatus();
  if (status === "On leave") return "avail leave";
  if (status === "Offline") return "avail off";
  return "avail";
}
function dots(count) {
  return `<span class="dots">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= count ? "on" : ""}"></i>`).join("")}</span>`;
}
function rowLink(path, title, sub, badge) {
  return `<button class="list-row" data-go="${path}"><span><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ""}</span>${badge || ""}<em>›</em></button>`;
}
function tabBar(active) {
  const item = (path, label, icon) => `<button class="${active === path ? "on" : ""}" data-go="${path}"><i>${icon}</i><span>${label}</span></button>`;
  return `<nav class="tabbar">
    ${item("/home", "Home", `<svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>`)}
    ${item("/jobs", "Jobs", `<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`)}
    <button class="map-tab ${active === "/map" ? "on" : ""}" data-go="/map" aria-label="Map"><svg viewBox="0 0 24 24"><path d="M12 3 5 6.5v12L12 22l7-3.5v-12z"/><path d="m12 3 7 3.5M12 22V8"/></svg></button>
    ${item("/wallet", "Wallet", `<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16.5" cy="14.5" r="1" fill="currentColor" stroke="none"/></svg>`)}
    ${item("/ledger", "Earnings", `<svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="13" rx="2"/><path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/></svg>`)}
    ${item("/profile", "Profile", `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M5 19c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5"/></svg>`)}
  </nav>`;
}
function shell(title, subtitle, body) {
  const path = state.route.split("?")[0];
  const jobDetail = path === "/jobs" && state.route.includes("?");
  const main = !jobDetail && ["/home", "/jobs", "/map", "/wallet", "/ledger", "/profile"].includes(path);
  const back = path === "/notifications" ? "/home" : path.startsWith("/jobs") || path === "/manifest" || path === "/complete" ? "/jobs" : "/profile";
  return `<div class="phone">
    ${main ? "" : `<header class="subhead"><button data-go="${back}" aria-label="Back">‹</button><h1>${esc(title)}</h1></header>`}
    <div class="phone-body">${body}</div>
    ${main ? tabBar(path) : ""}
  </div>`;
}

function pageLogin() {
  return authWrap(`<p class="kicker">EHI Partner</p><h2>${t("welcome")}</h2>
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}
    ${field("Partner ID", "partner-id", state.partner.id)}
    ${field("Password", "password", "", "password", 'placeholder="Enter your password."')}
    <p class="hint">WhatsApp OTP sign-in is not available yet. Please use your password.</p>
    <div class="row-between" style="margin:8px 0 14px"><span></span><button class="link" data-go="/forgot-password">Forgot password?</button></div>
    <button class="btn block" data-act="login">Sign in</button>
    <button class="btn block ghost" data-act="demo" style="margin-top:8px">Open demo workspace</button>
    <p class="hint" style="margin-top:14px">New partner? <button class="link" data-go="/register">Register to join</button></p>
    <p class="hint">Demo OTP <b>482913</b>.</p>`);
}

function pageOtp() {
  const sentTo = state.otpPurpose === "contact" ? (state.reg.phone || state.reg.whatsappNumber) : state.partner.phone;
  return authWrap(`<button class="link" data-go="${state.otpPurpose === "reset" ? "/forgot-password" : state.otpPurpose === "contact" ? "/register" : "/login"}">Back</button>
    <h2>${state.otpPurpose === "email" ? "Verify your email" : "Enter the code"}</h2>
    <p class="sub">We sent a 6-digit code over WhatsApp to ${esc(sentTo)}. Enter it below to confirm the number.</p>
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}
    <div class="otp">${state.otp.map((digit, index) => `<input maxlength="1" inputmode="numeric" data-otp="${index}" value="${esc(digit)}">`).join("")}</div>
    <button class="btn block" data-act="verify-otp">Verify & continue</button>
    <p class="hint" style="margin-top:12px">Demo code 482913. <button class="link" data-act="resend">Send again</button></p>`);
}

function pageForgot() {
  return authWrap(`<button class="link" data-go="/login">Back to sign in</button>
    <h2>Forgot password?</h2><p class="sub">Enter your mobile number.</p>
    ${field("Mobile number", "reset-phone", state.partner.phone, "tel", 'placeholder="e.g. 0771234567"')}
    <button class="btn block" data-act="send-reset">Send code</button>
    <p class="hint" style="margin-top:12px">If that number is registered, a reset code is on its way over WhatsApp.</p>`);
}

function pageSetPassword() {
  return authWrap(`<h2>Set your password</h2><p class="sub">Enter the temporary password the office gave you, then choose a new one.</p>
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}
    ${field("Temporary password", "temp-pass", "", "password")}
    ${field("New password", "new-pass", "", "password")}
    ${field("Confirm new password", "new-pass-2", "", "password")}
    <button class="btn block" data-act="set-password">Set password and continue</button>`);
}

const VEHICLE_TYPES = ["Car / Sedan", "Luxury Sedan", "Passenger Van (KDH / HighAce)", "Mini Coach", "Large Coach / Bus", "SUV / 4WD", "Other Special Vehicle"];
const PROVINCES = ["Western", "Central", "Southern", "Northern", "Eastern", "North Western", "North Central", "Uva", "Sabaragamuwa"];
const LANGUAGES = ["English", "Sinhala", "Tamil", "German", "French", "Russian", "Italian", "Chinese"];
const TOUR_FOCUS = ["Wildlife & Safari", "Cultural & Heritage Sites", "Ayurveda & Wellness", "Surfing & Water Sports", "Trekking & Hiking", "Culinary & Food Tours", "Archaeology & History", "Botanical & Flora", "Photography Tours"];

function pageRegister() {
  const steps = regSteps();
  const step = steps[Math.min(state.regStep, steps.length - 1)];
  const bars = steps.map((_, index) => `<i class="${index <= state.regStep ? "on" : ""}"></i>`).join("");
  const r = state.reg;
  let body = "";
  if (step === "Account Type") {
    body = ACCOUNT_TYPES.map((item) => `<button class="option ${r.type === item.id ? "on" : ""}" data-act="reg-type" data-type="${item.id}"><b>${item.title}</b><span class="meta">${item.detail}</span></button>`).join("");
  } else if (step === "Personal Details") {
    body = `${f("nameWithInitials", "Name With Initials", "e.g. A.B.C. Perera")}<p class="hint">As appeared in NIC or passport</p>
      ${f("fullName", "Full Name", "e.g. John Doe")}${f("nicNumber", "NIC / National ID Number", "e.g. 199012345678")}
      ${f("phone", "Phone Number", "e.g. 0771234567", "tel")}${f("whatsappNumber", "WhatsApp Number", "e.g. 0771234567", "tel")}${f("email", "Email", "name@email.com", "email")}
      ${s("preferredCommunication", "Preferred communication", ["WhatsApp", "Phone", "Email"])}
      ${f("addressLine1", "Residential Address", "Address line 1")}${f("town", "Town", "Select town...")}${f("district", "District")}
      ${s("province", "Base State / Province", PROVINCES)}${f("country", "Country")}
      <div class="actions"><button class="btn ghost" type="button" data-act="verify-contact">Verify your number</button><button class="btn ghost" type="button" data-act="verify-email">Verify your email</button></div>
      ${uploadTile("Profile photo", "Profile photo is required")}`;
  } else if (step === "Business & Contact") {
    body = `${f("businessName", "Business Name", "e.g. Island Tours & Transport Pvt Ltd")}${f("brNumber", "Business Registration (BR) Number", "e.g. PV-12345")}
      ${s("businessType", "Business Type", ["Transport Company", "Fleet / Company", "Registered Company"])}
      ${f("businessEmail", "Business Email Address", "", "email")}${f("phone", "Phone Number", "e.g. 0771234567", "tel")}${f("whatsappNumber", "WhatsApp Number", "e.g. 0771234567", "tel")}
      ${f("ownerName", "Owner Name", "Fleet manager or owner")}${f("officeAddress", "Head Office Address")}
      ${f("officeTown", "Head Office Town")}${s("officeRegion", "Head Office Region", PROVINCES)}${f("officeCountry", "Head Office Country")}`;
  } else if (step === "Vehicle Details") {
    body = `${f("registrationNumber", "Registration Number", "e.g. WP CAB-1234")}${s("vehicleClass", "Select Vehicle Class", VEHICLE_TYPES)}${s("vehicleType", "Select Vehicle Type", VEHICLE_TYPES)}
      ${f("make", "Make (Brand)", "e.g. Toyota / Nissan / Mercedes")}${f("model", "Model", "e.g. Prius / KDH Super GL")}${f("colour", "Vehicle Colour", "e.g. Pearl White / Silver")}
      ${f("manufactureYear", "Manufacture Year", "e.g. 2019")}${s("fuelType", "Fuel Type", ["Petrol", "Diesel", "Hybrid"])}
      ${f("totalSeats", "Total Seat Capacity", "", "number")}${f("maxPassengers", "Max Passenger Capacity", "", "number")}${f("guestSeats", "Guest seats", "", "number")}
      ${s("airConditioning", "Air Conditioning", ["Yes, A/C Working", "No A/C"])}${f("ownerName", "Owner Name")}
      ${f("conditionNotes", "Condition & interior notes")}${uploadTile("Vehicle Photo", "Clear view of front & number plate")}`;
  } else if (step === "Guide Licence & Skills") {
    body = `${f("sltdaNumber", "SLTDA Licence Number", "e.g. N-01234 or C-05678")}${s("licenceCategory", "Guide Licence Category", ["Chauffeur Guide", "Tourist Guide", "Licensed Guide"])}
      ${f("yearsGuiding", "Years Guiding Experience", "e.g. 5", "number")}${f("licenceValidUntil", "Valid until", "", "date")}
      <p class="meta">Languages I speak</p><div class="chip-row">${LANGUAGES.map((item) => `<button type="button" class="chip ${r.languages.includes(item) ? "on" : ""}" data-act="reg-lang" data-lang-name="${item}">${item}</button>`).join("")}</div>
      <p class="meta">Spoken Languages</p><p class="hint">Optional. Tap the tours you are strongest at.</p>
      <p class="meta">Specializations & Tour Focus</p><div class="chip-row">${TOUR_FOCUS.map((item) => `<button type="button" class="chip ${r.specializations.includes(item) ? "on" : ""}" data-act="reg-spec" data-spec="${item}">${item}</button>`).join("")}</div>
      ${uploadTile("Guide licence front", "Front side of SLTDA card. Front side showing licence number & expiry")}${uploadTile("Guide licence back", "Back side of SLTDA card")}`;
  } else if (step === "Helper / Assistant Details") {
    body = `<p class="hint">e.g. Employee / Conductor</p>
      ${f("helperName", "Helper Full Name")}${f("helperNic", "NIC Number", "The driver's NIC number")}${f("relationship", "Relationship", "e.g. Employee / Conductor")}
      <button class="btn ghost" type="button" data-act="add-helper">Add Helper</button>
      ${r.helpers.length ? `<div style="margin-top:12px">${r.helpers.map((item) => `<div class="row-between" style="padding:8px 0;border-bottom:1px solid var(--line)"><b>${esc(item.name)}</b><span class="meta">${esc(item.nic)} · ${esc(item.relationship)}</span></div>`).join("")}</div>` : `<p class="hint">Please add at least one helper to proceed.</p>`}`;
  } else if (step === "Documents & Photos" || step === "Company & Fleet Docs") {
    body = `<p class="hint">Hold the document flat inside the frame, in good light, with no glare over the text.</p>
      ${f("nicNumber", "NIC Number")}${uploadTile("National identity card", "Front and back, both legible")}
      ${f("drivingLicenceNumber", "Driving Licence Number")}
      <label class="check"><input data-reg="temporaryLicence" type="checkbox" ${r.temporaryLicence ? "checked" : ""}> I only have a Temporary Driving Licence</label>
      ${uploadTile("Driving licence front", "Front side showing licence number & expiry")}${uploadTile("Driving licence back", "Back side showing vehicle class endorsements")}
      ${uploadTile("Temporary Driving Licence", "Temporary licence document is required")}
      ${uploadTile("Revenue Licence", "Valid revenue licence for current year. Current year, matching the vehicle plate")}
      ${uploadTile("Vehicle insurance", "Passenger cover if separate. Must include passenger cover")}
      ${uploadTile("Vehicle registration book/certificate", "Registration book is required")}
      ${uploadTile("Police clearance", "Issued within the last 12 months")}
      ${uploadTile("Driver Profile Photo", "Upload it so ops can clear you for every kind of job.")}
      ${uploadTile("Guide Profile Photo", "Front side of SLTDA card")}`;
  } else if (step === "Availability & Service Coverage") {
    body = `${s("availabilityType", "Availability Type", ["Full Time", "Part Time"])}
      ${f("startDate", "Start Date", "", "date")}${f("endDate", "End Date", "", "date")}
      ${s("baseRegion", "Base Region", REGIONS)}${s("province", "Base State / Province", PROVINCES)}${f("town", "Town", "Select town...")}
      <p class="meta">Operating Regions</p><p class="hint">Regions I work in. Select at least one operating region.</p>
      <div class="chip-row">${REGIONS.map((item) => `<button type="button" class="chip ${r.regions.includes(item) ? "on" : ""}" data-act="reg-region" data-region="${item}">${item}</button>`).join("")}</div>`;
  } else {
    const account = ACCOUNT_TYPES.find((item) => item.id === r.type);
    body = `<p class="kicker">Review & Submit</p><dl class="kv">
      <dt>Account Type</dt><dd>${esc(account.title)}</dd>
      <dt>Name With Initials</dt><dd>${esc(r.nameWithInitials || r.ownerName || "—")}</dd>
      <dt>Full Name</dt><dd>${esc(r.fullName || r.businessName || "—")}</dd>
      <dt>NIC / National ID Number</dt><dd>${esc(r.nicNumber || "—")}</dd>
      <dt>Phone Number</dt><dd>${esc(r.phone || "—")}</dd>
      <dt>WhatsApp Number</dt><dd>${esc(r.whatsappNumber || "—")}</dd>
      <dt>Email</dt><dd>${esc(r.email || r.businessEmail || "—")}</dd>
      <dt>Registration Number</dt><dd>${esc(r.registrationNumber || "—")}</dd>
      <dt>SLTDA Licence Number</dt><dd>${esc(r.sltdaNumber || "—")}</dd>
      <dt>Operating Regions</dt><dd>${esc(r.regions.join(", ") || "—")}</dd>
    </dl>
      <p class="meta">Terms of Service & Partner Declaration</p>
      <label class="check"><input data-reg="confirmed" type="checkbox" ${r.confirmed ? "checked" : ""}> I confirm my licence is valid and unexpired, and that every document I upload is genuine.</label>`;
  }
  return authWrap(`<p class="kicker">Step ${state.regStep + 1} of ${steps.length}</p><h2>${esc(step)}</h2><div class="steps">${bars}</div>
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}${body}
    <div class="actions" style="margin-top:16px">${state.regStep ? `<button class="btn ghost" data-act="reg-back">Back</button>` : `<button class="btn ghost" data-go="/login">Back to sign in</button>`}<button class="btn ghost" data-act="save-exit">Save & exit</button><button class="btn" data-act="reg-next">${step === "Review & Submit" ? "Submit Application to EHI" : "Continue"}</button></div>
    <p class="hint" style="margin-top:12px"><button class="link" data-go="/register/status">Enter your reference number, NIC or the mobile you registered with.</button></p>`);
}

function pageStatus() {
  return authWrap(`<h2>Application status</h2><p class="sub">Enter your reference number, NIC or the mobile you registered with.</p>
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}
    ${field("YOUR REFERENCE", "status-ref", state.reference, "text", 'placeholder="Reference, NIC or mobile"')}
    <button class="btn block" data-act="check-status">Check status</button>
    ${state.statusHit ? `<div class="card" style="margin-top:14px"><b>YOUR REFERENCE</b><p>${esc(state.reference || "EHI-REF-20481")}</p>${pill("Waiting for review")}<p class="meta">The office reviews it and messages you on WhatsApp. Usually two working days.</p><button class="btn ghost small" data-act="copy-ref">Copy reference</button></div>` : ""}
    <div class="actions" style="margin-top:16px"><button class="btn ghost" data-go="/login">Back to sign in</button></div>`);
}

function pageSubmitted() {
  return authWrap(`<p class="kicker">Application sent</p><h2>Submitted</h2>
    <div class="card"><b>YOUR REFERENCE</b><p>${esc(state.reference)}</p><button class="btn ghost small" data-act="copy-ref">Copy reference</button></div>
    <p class="sub">The office reviews it and messages you on WhatsApp. Usually two working days.</p>
    <button class="btn block" data-go="/register/status">Application status</button>`);
}

function attentionItems() {
  const items = [];
  const expiring = state.licences
    .map((item) => ({ ...item, days: daysUntil(item.expires) }))
    .filter((item) => item.days <= 30)
    .sort((a, b) => a.days - b.days);
  if (expiring.length) {
    const next = expiring[0];
    items.push({
      title: "Licence expire",
      sub: next.days < 0 ? `${next.name} expired on ${prettyDate(next.expires)}` : `${next.name} expires ${prettyDate(next.expires)} · ${next.days} day${next.days === 1 ? "" : "s"} left`,
      go: "/documents",
      action: next.days < 0 ? "Expired" : `${next.days}d`,
    });
  }
  state.jobs.filter((item) => item.status !== "Completed" && item.status !== "Declined" && item.ladder > 0 && item.ladder < 5).forEach((item) => {
    items.push({
      title: "Ongoing trip",
      sub: `${item.id} · ${item.from} → ${item.to}`,
      go: `/jobs?id=${encodeURIComponent(item.id)}`,
      action: "Open",
    });
  });
  state.specialNotes.forEach((item) => {
    items.push({
      title: "Special notes",
      sub: item.text,
      go: item.jobId ? `/jobs?id=${encodeURIComponent(item.jobId)}` : "/notifications",
      action: "Read",
    });
  });
  state.specialServices.forEach((item) => {
    items.push({
      title: item.name,
      sub: item.text,
      go: item.jobId ? `/jobs?id=${encodeURIComponent(item.jobId)}` : "/notifications",
      action: "Open",
    });
  });
  const missingKit = state.toolkit.filter((item) => !item.ok);
  if (missingKit.length) {
    items.push({
      title: "Safety toolkit",
      sub: missingKit.map((item) => item.name).join(", "),
      go: "/safety",
      action: "Check",
    });
  }
  state.jobs.filter((item) => item.status === "Pending").forEach((item) => {
    items.push({
      title: "Transfer waiting",
      sub: `${item.id} · accept within ${offerLeft(item)} or ops reallocates it`,
      go: `/jobs?id=${encodeURIComponent(item.id)}`,
      action: "15 min",
    });
  });
  const toCollect = state.cash.filter((item) => item.status === "To collect");
  const holding = state.cash.filter((item) => item.status === "With you");
  if (toCollect.length || holding.length) {
    const held = holding.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const parts = [];
    if (toCollect.length) parts.push(`${toCollect.length} still to collect`);
    if (holding.length) parts.push(`${money(held, holding[0].currency || "LKR")} with you`);
    items.push({
      title: "Cash collections",
      sub: parts.join(" · "),
      go: "/wallet",
      action: "Wallet",
    });
  }
  return items;
}
function daysUntil(iso) {
  const [year, month, day] = String(iso || "").split("-").map(Number);
  if (!year || !month || !day) return 999;
  const target = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target - today) / 86400000);
}
function activeTrip() {
  return state.jobs.find((item) => item.status !== "Completed" && item.status !== "Declined" && item.ladder > 0 && item.ladder < 5);
}
function liveTransfer(trip) {
  const legs = trip.legs && trip.legs.length ? trip.legs : [{ label: trip.type, from: trip.from, to: trip.to }];
  const onReturn = legs.length > 1 && !!trip.droppedOff;
  const leg = onReturn ? legs[1] : legs[0];
  const points = onReturn ? (trip.returnRoute || []) : (trip.route || []);
  return { leg, points };
}
function tripPath(item) {
  if (!item) return HOME_TRACK.map((point) => ({ point, place: "Colombo" }));
  const { leg, points } = liveTransfer(item);
  const line = points.length ? points : (item.route || []);
  return line.map((point, index) => ({ point, place: index === line.length - 1 ? leg.to : leg.from }));
}
function pageHome() {
  const { hello, date, time, jobsToday } = helloLine();
  const p = state.partner;
  const alerts = attentionItems();
  return shell("Home", "", `
    <section class="smart-panel">
      <div class="smart-brand">
        <img src="assets/logo.png" alt="Exotic Holidays International">
        <div><strong>Exotic Holidays International</strong><span>${esc(p.role)} · ID ${esc(p.id)}</span></div>
        <button class="bell" data-go="/notifications" aria-label="Notifications"></button>
      </div>
      <div class="smart-main">
        <div>
          <p class="hello" id="home-hello">${hello}</p>
          <h1>${esc(p.first)}</h1>
          <div class="status-row">
            <button class="status-pill ${p.driverStatus === "Active" ? "on" : ""}" data-act="driver-status">${esc(p.driverStatus)}</button>
            <button class="duty-pill" data-act="open-leaves" aria-label="${esc(liveStatus())}"><span class="${availClass()}">${esc(liveStatus())}</span></button>
            <button class="leave-link" data-act="open-leaves">${activeLeave() ? esc(leaveSpan(activeLeave())) : "Leaves"}</button>
          </div>
          <p class="meta" id="home-clock">${date} · ${time}${jobsToday ? ` · ${jobsToday} jobs today` : ""}</p>
        </div>
        <button class="avatar" data-go="/profile" aria-label="Profile">${p.photo ? `<img src="${p.photo}" alt="">` : "OG"}</button>
      </div>
    </section>
    ${p.driverStatus === "Inactive" ? `<p class="inactive-note">You are inactive. New transfers stay with the office until you switch back to Active.</p>` : ""}
    <div class="key-row">
      <button class="key-box" data-go="/calendar"><span class="box-logo amber"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg></span><b>Calendar</b></button>
      <button class="key-box" data-go="/safety"><span class="box-logo green"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8 4.2-.8 7-3.8 7-8V6z"/></svg></span><b>Safety</b></button>
      <button class="key-box" data-go="/incident"><span class="box-logo rose"><svg viewBox="0 0 24 24"><path d="M12 4 3 20h18z"/><path d="M12 10v4M12 17h.01"/></svg></span><b>Report</b></button>
    </div>
    <h2 class="section">Today</h2>
    <section class="live-map">
      <div id="home-map"></div>
      <div class="live-chip"><i></i> Live</div>
      ${(() => {
        const trip = activeTrip();
        const vehicle = p.vehicle.split("·")[0].trim();
        if (!trip) return `<div class="live-foot"><div><b>${esc(vehicle)}</b><span>${esc(p.plate)} · waiting for a job</span></div><span class="${availClass()}">${esc(statusText())}</span></div>`;
        const { leg, points } = liveTransfer(trip);
        const km = routeKm(points);
        const minutes = km ? Math.max(12, Math.round(km / 45 * 60)) : 0;
        return `<button class="live-foot trip-card" data-go="/map">
          <div class="trip-top"><span class="trip-kind">${esc(leg.label)}</span><b>${esc(trip.time)}</b></div>
          <p class="trip-stats"><b>${km ? `${km} km` : "Route on the job"}</b><span>${minutes ? `about ${minutes} min` : esc(trip.region)}</span><span>${esc(p.plate)}</span></p>
          <div class="trip-leg"><em>Now</em><span>${esc(leg.from)} → ${esc(leg.to)}</span></div>
        </button>`;
      })()}
    </section>
    <aside class="attention attention-mini ${alerts.length ? "attention-hot" : "attention-clear"}">
      <div class="attention-head">
        <span class="left"><span class="warn">${alerts.length}</span> Needs attention</span>
        <button class="link-btn" data-go="/notifications">All alerts</button>
      </div>
      ${alerts.slice(0, 3).map((item) => `<button class="attn-item" data-go="${item.go}"><span class="attn-icon">!</span><span class="attn-copy"><strong>${esc(item.title)}</strong><span>${esc(item.sub)}</span></span><b class="attn-count">${esc(item.action)}</b></button>`).join("")}
      ${alerts.length > 3 ? `<button class="attn-more" data-go="/notifications">${alerts.length - 3} more · touch to see</button>` : ""}
    </aside>`);
}

function pageJobs() {
  const selected = new URLSearchParams(location.hash.split("?")[1] || "").get("id");
  if (selected) return pageJob(selected);
  const filters = [["All", "All"], ["A-H", "To hotel"], ["H-A", "To airport"], ["H-H", "Hotel to hotel"], ["A-T", "Round tour"], ["EX", "Excursion"]];
  const whenTabs = [["Today", "Today"], ["Upcoming", "Upcoming"], ["Completed", "History"]];
  const mine = state.partner.category.split("·")[0].trim();
  const today = todayKey();
  const real = state.jobs.filter((item) => item.trf && item.fleet === mine && jobDay(item) >= state.jobsFrom && jobDay(item) <= state.jobsTo);
  const taken = new Set(real.map((item) => jobDay(item)));
  const extra = demoJobList(state.jobsFrom, state.jobsTo).filter((item) => !taken.has(jobDay(item)));
  const owned = real.concat(extra);
  const inWhen = (item, when) => {
    const day = jobDay(item);
    const done = item.status === "Completed" || item.status === "Declined";
    if (when === "Completed") return done || (day && day < today);
    if (when === "Upcoming") return !done && day > today;
    return !done && day === today;
  };
  const bucket = owned.filter((item) => inWhen(item, state.jobsTab));
  const query = state.jobQuery.trim().toLowerCase();
  const list = bucket.filter((item) => {
    if (state.jobFilter === "EX" && item.service !== "Excursion") return false;
    if (state.jobFilter === "A-T" && (item.trf !== "A-T" || item.service === "Excursion")) return false;
    if (!["All", "EX", "A-T"].includes(state.jobFilter) && item.trf !== state.jobFilter) return false;
    if (!query) return true;
    return [item.id, item.from, item.to, item.trf, item.service, item.fleet, item.group].join(" ").toLowerCase().includes(query);
  });
  const [year, month] = state.jobsMonth.split("-").map(Number);
  const first = new Date(year, month - 1, 1).getDay();
  const days = new Date(year, month, 0).getDate();
  const monthLabel = new Date(year, month - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const names = ["S", "M", "T", "W", "T", "F", "S"];
  let cells = names.map((name) => `<i>${name}</i>`).join("");
  for (let i = 0; i < first; i += 1) cells += "<i></i>";
  for (let day = 1; day <= days; day += 1) {
    const key = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const inside = key >= state.jobsFrom && key <= state.jobsTo;
    const edge = key === state.jobsFrom || key === state.jobsTo;
    cells += `<button type="button" class="${inside ? "in" : ""} ${edge ? "edge" : ""}" data-act="jobs-day" data-day="${key}">${day}</button>`;
  }
  const hint = state.jobsAnchor ? "Now tap the end date" : `${prettyDate(state.jobsFrom)} – ${prettyDate(state.jobsTo)}`;
  return shell("Jobs", "", `
    <div class="ets-head">
      <div><b>ETS</b><span>EXOTIC TRANSPORT SYSTEM</span></div>
      <button class="bell green" data-go="/notifications" aria-label="Notifications"></button>
    </div>
    <section class="soft-card earn-cal">
      <div class="earn-cal-head">
        <button type="button" data-act="jobs-month" data-shift="-1" aria-label="Previous month">‹</button>
        <b>${monthLabel}</b>
        <button type="button" data-act="jobs-month" data-shift="1" aria-label="Next month">›</button>
      </div>
      <p class="earn-hint">${hint}</p>
      <div class="cal earn-grid">${cells}</div>
    </section>
    <label class="ets-search job-search"><span aria-hidden="true">⌕</span><input id="job-search" type="search" value="${esc(state.jobQuery)}" placeholder="Search"><b>${list.length} of ${bucket.length}</b></label>
    <div class="when-seg">${whenTabs.map(([id, label]) => `<button class="${state.jobsTab === id ? "on" : ""}" data-act="jobs-tab" data-tab="${id}">${label}<small>${owned.filter((item) => inWhen(item, id)).length}</small></button>`).join("")}</div>
    <p class="fleet-line">${esc(state.partner.driverCategory)} · ${esc(state.partner.supplier)} · ${esc(state.partner.plate)}</p>
    <div class="ets-filters">${filters.map(([id, label]) => `<button class="${state.jobFilter === id ? "on" : ""}" data-act="job-filter" data-tab="${id}">${label}</button>`).join("")}</div>
    <div class="ets-filters fleets"><button class="on" type="button">${esc(mine)} · ${esc(state.partner.plate)}</button></div>
    ${list.length ? list.map(transferCard).join("") : `<p class="wallet-empty">No ${esc(state.jobsTab.toLowerCase())} jobs</p>`}`);
}

function transferCard(item) {
  const driver = state.partner.name.split(" ").slice(0, 2).join(" ");
  const side = item.rep
    ? `<span class="who"><i class="who-photo">DF</i><b>${esc(item.rep.name)}</b></span>`
    : `<span class="who"><i class="who-photo mute">G</i><b>No Guide Assigned</b></span>`;
  const tone = item.trf === "H-A" ? "depart" : item.trf === "H-H" ? "internal" : item.trf === "A-T" ? "round" : "arrive";
  return `<article class="ets-card ${tone}">
    <div class="ets-card-top">
      <div><b>${esc(item.trf)}</b><small>${esc(item.pair)} · ${esc(item.group)} · ${esc(item.fleet)}</small></div>
      <div class="ets-no"><b>${esc(item.id)}</b><button data-act="open-rep" data-job="${esc(item.id)}" aria-label="Airport rep"></button><small>Combined: ${esc(item.combined)}</small></div>
    </div>
    <div class="ets-route"><b>${esc(item.from)}</b><i></i><b>${esc(item.to)}</b></div>
    <div class="ets-people"><span class="who"><i class="who-photo">OG</i><b>${esc(driver)}</b></span>${side}</div>
    <div class="ets-km"><span>✎ ${item.km} km</span><span>+ ${item.pax} PAX</span></div>
    <div class="ets-when"><span>FROM<small>${esc(item.fromDate)}</small></span><span>TO<small>${esc(item.toDate)}</small></span></div>
    <div class="ets-actions">
      <button data-go="/jobs?id=${esc(item.id)}&view=client">View</button>
      <button data-go="/jobs?id=${esc(item.id)}&view=payments">Payments</button>
      <button class="primary" data-go="/jobs?id=${esc(item.id)}&view=tickets">Tickets</button>
      <button data-go="/jobs?id=${esc(item.id)}&view=note">NOTE</button>
      <button class="media" data-go="/jobs?id=${esc(item.id)}&view=media">Media</button>
    </div>
    ${item.status === "Pending" ? `<p class="offer-banner">${item.offerHold === "office" ? `This stays with you. If you do not reply in <b data-offer="${esc(item.id)}">${offerLeft(item)}</b>, Transport is notified.` : `Same-day pickup. <b data-offer="${esc(item.id)}">${offerLeft(item)}</b> left, then it goes to the next driver.`}${item.specialPrice ? " Special price, also with other drivers." : ""}</p><div class="ets-decide"><button data-act="accept" data-job="${esc(item.id)}">Accept</button><button data-act="open-decline" data-job="${esc(item.id)}">Decline</button></div>` : ""}
  </article>`;
}

function pageTransfer(item) {
  const view = new URLSearchParams(location.hash.split("?")[1] || "").get("view") || "client";
  const back = `/jobs`;
  if (view === "payments") {
    const meta = item.payMeta || {};
    return shell("Payment Details", "", `
      <button class="link" data-go="${back}">Back</button>
      <p class="tr-kicker">TR-${esc(item.id)}</p>
      <h2>Payment Details</h2>
      <section class="soft-card"><b>Mileage Information</b><div class="pay-split"><div><span>Mileage</span><b>${item.km} km</b></div><div><span>P KM</span><b>Km. ${item.parkingKm || 0}</b></div></div></section>
      <section class="soft-card"><b>Payment Information</b><div class="id-row"><span>Status<small>${esc(meta.status || "—")}</small></span></div><div class="id-row"><span>Date<small>${esc(meta.date || "—")}</small></span></div><div class="id-row"><span>Method<small>${esc(meta.method || "—")}</small></span></div><div class="id-row"><span>Reference<small>${esc(meta.reference || "—")}</small></span></div></section>
      <section class="soft-card rows"><b>Payment Breakdown</b>
        ${[["Mileage Payment", "LKR 0"], ["Bata", "LKR 0"], ["Tickets", "LKR 0"], ["Other", "LKR 0"], ["Advance", "LKR 0"]].map(([name, amount]) => `<div class="id-row"><span>${name}</span><b>${amount}</b></div>`).join("")}
      </section>`);
  }
  if (view === "tickets") {
    const tab = state.ticketTab;
    return shell("Tickets", "", `
      <button class="link" data-go="${back}">Back</button>
      <h2>Tickets</h2><p class="tr-kicker">${esc(item.id)}</p>
      <div class="job-tabs"><button class="${tab === "upload" ? "on" : ""}" data-act="ticket-tab" data-tab="upload">Upload</button><button class="${tab === "submitted" ? "on" : ""}" data-act="ticket-tab" data-tab="submitted">Submitted</button></div>
      ${tab === "upload" ? `<label class="upload-tile">Add a ticket<input id="ticket-file" type="file" accept="image/*" hidden></label>` : `<div class="review-list">${(item.tickets || []).length ? item.tickets.map((file) => `<article class="review-card"><b>${esc(file.name)}</b><small>${esc(file.time)}</small></article>`).join("") : `<p class="wallet-empty">No tickets submitted</p>`}</div>`}`);
  }
  if (view === "note") {
    return shell("Driver Note", "", `
      <button class="link" data-go="${back}">Back</button>
      <p class="tr-kicker">TR-${esc(item.id)}</p>
      <h2>Driver Note</h2>
      <section class="soft-card"><b>Previous Notes</b>${(item.notes || []).length ? item.notes.map((note) => `<p class="map-meta"><b>${esc(note.text)}</b><br>${esc(note.time)}</p>`).join("") : `<p class="map-meta">No notes yet</p>`}</section>
      <section class="soft-card"><b>Add New Note</b><p class="map-meta">Add note (will be saved with date-time):</p><textarea id="driver-note" maxlength="500" placeholder="Type your note here"></textarea><p class="note-count"><span id="note-count">0</span>/500</p><button class="btn block" data-act="save-note" data-job="${esc(item.id)}">Submit</button></section>`);
  }
  if (view === "media") {
    return shell("Media", "", `
      <button class="link" data-go="${back}">Back</button>
      <h2>Media</h2><p class="tr-kicker">TR-${esc(item.id)}</p>
      <label class="upload-tile">Add a photo<input id="media-file" type="file" accept="image/*" hidden></label>
      <div class="review-list">${(item.media || []).map((file) => `<article class="review-card"><b>${esc(file.name)}</b><small>${esc(file.time)}</small></article>`).join("")}</div>`);
  }
  const names = (item.clients || []).map((name, index) => `<b>${index + 1}. ${esc(name)}</b>`).join("");
  const done = item.clientStatus === "Client Transfer Complete";
  return shell("Client Details", "", `
    <button class="link" data-go="${back}">Back</button>
    <p class="tr-kicker">TR-${esc(item.id)}</p>
    <h2>Client Details</h2>
    <section class="soft-card">
      <p class="booking">#${esc(item.booking)}</p>
      <p class="map-meta">Client Names</p>${names}
      <p class="map-meta">Client Status</p>
      <button class="status-banner ${done ? "done" : ""}" data-act="ask-status" data-job="${esc(item.id)}">${esc(item.clientStatus)}</button>
      <div class="ets-split"><div><span>Agent Information</span><b>${esc(item.agent)}</b></div><div><span>Hotel</span><b>${esc(item.hotel)}</b></div></div>
      <p class="pickup-time">Pick-up Time<br>${esc(item.pickupAt)}</p>
      <div class="flight-box"><div><b>${esc(item.flight || "—")}</b><small>${esc(item.flightKind || "")}</small></div><div><b>${esc(item.flightTime || "")}</b><small>${esc(item.flightDate || "")}</small></div></div>
      <label class="field"><span>Client Contact</span><input id="client-phone" placeholder="Enter phone number" value="${esc(item.contact || "")}"></label>
      <button class="btn block" data-act="save-contact" data-job="${esc(item.id)}">Submit Contact</button>
      <label class="field"><span>Guest Room Number</span><input id="guest-room" placeholder="Enter room number" value="${esc(item.room || "")}"></label>
      <button class="btn block room" data-act="save-room" data-job="${esc(item.id)}">Save Room Number</button>
    </section>`);
}

function pageJob(id) {
  const item = findJob(id);
  if (item && item.service) {
    state.selectedJob = item.id;
    return pageTransfer(item);
  }
  state.selectedJob = item.id;
  const ladder = LADDER.map((label, index) => `<span class="${index < item.ladder ? "done" : ""} ${index === item.ladder ? "now" : ""}">${label}</span>`).join("");
  const legs = (item.legs || [{ label: item.type, from: item.from, to: item.to }]).map((leg) => `<div class="trip-leg"><em>${esc(leg.label)}</em><span>${esc(leg.from)} → ${esc(leg.to)}</span></div>`).join("");
  const timer = item.status === "Pending" ? `<p class="offer-banner">${item.offerHold === "office"
    ? `Pickup is 24 hours or more away. This stays with you until you accept or decline. If there is no reply in <b data-offer="${esc(item.id)}">${offerLeft(item)}</b>, Transport is notified to follow up.`
    : `Same-day pickup. Respond in <b data-offer="${esc(item.id)}">${offerLeft(item)}</b>. After 15 minutes this goes to the next online driver.`}${item.specialPrice ? " Special price, also offered to other eligible drivers." : ""}</p>` : "";
  const actions = item.status === "Pending" || item.status === "Offered"
    ? `<button class="btn" data-act="accept" data-job="${item.id}">Accept</button><button class="btn ghost" data-act="open-decline" data-job="${item.id}">Decline</button><button class="btn ghost" disabled>Pending</button>`
    : item.status === "Completed" || item.status === "Reallocated"
      ? `<button class="btn" data-go="/ledger">View settlement</button>`
      : `<button class="btn" data-act="advance" data-job="${item.id}">${item.ladder === 1 ? "On the way" : item.ladder === 2 ? "Swipe when you arrive" : item.ladder === 3 ? "Swipe to start trip" : "Trip complete"}</button>
         <button class="btn ${item.pickedUp ? "ghost" : ""}" data-act="pickup" data-job="${item.id}">${item.pickedUp ? "Picked up" : "Pick up"}</button>
         <button class="btn ${item.droppedOff ? "ghost" : ""}" data-act="dropoff" data-job="${item.id}">${item.droppedOff ? "Dropped off" : "Drop off"}</button>
         <button class="btn ghost" data-go="/manifest?id=${encodeURIComponent(item.id)}">Manifest</button>
         <button class="btn ghost" data-act="open-cash" data-job="${item.id}">Record cash</button>
         <button class="btn ghost" data-act="open-expense" data-job="${item.id}">Add expense</button>
         <button class="btn ghost" data-go="/map">Today's route</button>`;
  return shell(item.id, `${item.type} · ${item.region}`, `
    <button class="link" data-go="/jobs">Back to jobs</button>
    ${timer}
    <div class="grid-2" style="margin-top:12px">
      <section class="card">
        <div class="row-between"><h2 style="margin:0">${esc(item.title)}</h2>${pill(item.status)}</div>
        <div class="ladder" style="margin:14px 0">${ladder}</div>
        ${legs}
        <dl class="kv">
          <dt>When</dt><dd>${esc(item.date)} · ${esc(item.time)}</dd>
          <dt>Client</dt><dd>${esc(item.client)} · ${item.pax} pax</dd>
          <dt>Pickup</dt><dd>${esc(item.from)}</dd>
          <dt>Drop-off</dt><dd>${esc(item.to)}</dd>
          <dt>Flight</dt><dd>${esc(item.flight || "—")}</dd>
          <dt>Vehicle</dt><dd>${esc(state.partner.vehicle)} · ${esc(state.partner.plate)}</dd>
          <dt>Cash job</dt><dd>${item.cash ? money(item.cash, item.currency) + " to collect" : "No cash on this job"}</dd>
        </dl>
        <div class="actions" style="margin-top:16px">${actions}</div>
      </section>
      <section class="card"><b>Passengers</b><div style="margin-top:8px">${item.manifest.map((person) => `<div class="row-between" style="padding:8px 0;border-bottom:1px solid var(--line)"><span>${esc(person.name)}</span><span class="meta">${esc(person.note)}</span></div>`).join("")}</div>
        <p class="meta">There's no direct guest number on this job yet. EHI operations can connect you.</p>
        <button class="btn small ghost" data-go="/messages">Message guest</button>
        <button class="btn small ghost" data-go="/support">Call operations</button>
      </section>
    </div>`);
}

function pageManifest() {
  const item = findJob(new URLSearchParams(location.hash.split("?")[1] || "").get("id"));
  return shell("Manifest", `${item.id} · ${item.pax} pax aboard`, `
    <button class="link" data-go="/jobs?id=${encodeURIComponent(item.id)}">Back to job</button>
    <div class="card" style="margin-top:12px"><table class="table"><thead><tr><th>Seat</th><th>Guest</th><th>Note</th></tr></thead><tbody>
      ${item.manifest.map((person) => `<tr><td>${esc(person.seat)}</td><td>${esc(person.name)}</td><td>${esc(person.note)}</td></tr>`).join("")}
    </tbody></table></div>`);
}

function tripKm(item) {
  const out = routeKm(item.route || []);
  const back = routeKm(item.returnRoute || []);
  const calculated = out + back;
  const total = Number(item.km) > 0 ? Number(item.km) : calculated;
  return { out, back, total };
}

function pageComplete() {
  const item = findJob(new URLSearchParams(location.hash.split("?")[1] || "").get("id"));
  const km = tripKm(item);
  const parts = [];
  if (km.out) parts.push(`out ${km.out} km`);
  if (km.back) parts.push(`return ${km.back} km`);
  const remark = `${item.client} dropped at ${item.to}. Mileage ${km.total} km${parts.length ? ` (${parts.join(" · ")})` : ""}.`;
  return shell("Trip complete", item.title, `
    ${state.error ? `<div class="error">${esc(state.error)}</div>` : ""}
    <div class="card">
      <div class="mile-set"><span>Mileage</span><b>${km.total} km</b><small>${parts.length ? parts.join(" · ") : "Predefined for this transfer"}</small></div>
      ${field("Remarks for ops", "remarks", remark)}
      <label class="check"><input id="dropped" type="checkbox" checked> Guests dropped at ${esc(item.to)}</label>
      <button class="btn" data-act="finish" data-job="${item.id}">Submit close-out</button>
    </div>`);
}

function routeKm(points) {
  if (!points || points.length < 2) return 0;
  let km = 0;
  for (let i = 1; i < points.length; i += 1) {
    const from = points[i - 1];
    const to = points[i];
    const dLat = (to[0] - from[0]) * Math.PI / 180;
    const dLng = (to[1] - from[1]) * Math.PI / 180;
    const lat1 = from[0] * Math.PI / 180;
    const lat2 = to[0] * Math.PI / 180;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    km += 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(h)));
  }
  return Math.round(km);
}

function pageMap() {
  const live = state.jobs.find((item) => item.ladder > 0 && item.ladder < 5 && item.status !== "Reallocated");
  if (!live) {
    return shell("Map", "", `<div class="empty-map"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#8d97a8" stroke-width="1.6"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20z"/><path d="M9 4v13.5M15 6.5V20"/></svg><h2>No active trip</h2><p>Accept and start a job to navigate it here.</p></div>`);
  }
  state.selectedJob = live.id;
  const steps = [
    { key: "arrived", label: "Arrived", sub: live.from, done: live.ladder >= 3 || live.arrived },
    { key: "picked", label: "Client picked", sub: live.client, done: !!live.pickedUp },
    { key: "departing", label: "Departing", sub: live.to, done: !!live.departing },
    { key: "drop", label: "Client drop", sub: live.to, done: !!live.droppedOff },
  ];
  const next = steps.find((step) => !step.done);
  const km = routeKm([...(live.route || []), ...((live.returnRoute || []).slice(1))]);
  const minutes = km ? Math.max(12, Math.round(km / 45 * 60)) : 0;
  const note = state.specialNotes.find((item) => item.jobId === live.id);
  const p = state.partner;
  const short = ["Arrived", "Picked", "Depart", "Drop"];
  const stops = [
    { kind: "Pickup", place: live.from },
    { kind: "Drop", place: live.to, drop: true },
  ];
  if (live.returnRoute) stops.push({ kind: "Return", place: live.from, drop: true });
  return shell("Map", "", `
    <div class="map-wrap">
      <div id="map"></div>
      <div class="live-chip"><i></i> ${esc(live.type)}</div>
    </div>
    <section class="map-sheet">
      <div class="sheet-head">
        <div>
          <h2>${esc(live.client)}</h2>
          <p class="sheet-guest">${esc(live.title)} · ${esc(live.time)}</p>
        </div>
        <span class="trip-kind">${esc(live.id)}</span>
      </div>
      <div class="fact-row">
        <span>${esc(live.flight || "No flight")}</span>
        <span>${live.pax} guests</span>
        <span>${esc(p.plate)}</span>
        <span>${km ? `${km} km · ${minutes} min` : esc(live.region)}</span>
      </div>
      <div class="route-rail">
        ${stops.map((stop) => `<div class="route-stop ${stop.drop ? "drop" : ""}"><i></i><div><small>${esc(stop.kind)}</small><b>${esc(stop.place)}</b></div></div>`).join("")}
      </div>
      ${note ? `<p class="map-note">${esc(note.text)}</p>` : ""}
      <div class="stepper">
        ${steps.map((step, index) => `<button class="${step.done ? "done" : ""} ${next && next.key === step.key ? "next" : ""}" data-act="map-step" data-step="${step.key}" data-job="${esc(live.id)}"><span>${step.done ? "✓" : index + 1}</span><small>${short[index]}</small></button>`).join("")}
      </div>
      ${next ? `<button class="go-next" data-act="map-step" data-step="${next.key}" data-job="${esc(live.id)}">Mark ${esc(next.label.toLowerCase())}</button>` : `<button class="go-next" data-go="/complete?id=${encodeURIComponent(live.id)}">Close trip</button>`}
      <div class="map-actions">
        <button class="primary" data-act="navigate" data-job="${esc(live.id)}">Navigate</button>
        <button data-go="/messages">Message</button>
        <button data-act="open-cash" data-job="${esc(live.id)}">Cash</button>
        <button data-go="/complete?id=${encodeURIComponent(live.id)}">Close</button>
      </div>
    </section>`);
}

function cashBits(item) {
  if (item.parts && item.parts.length) return item.parts.map((part) => money(part.amount, part.currency)).join(" + ");
  return money(item.amount, item.currency);
}
function cashJob(item) {
  return state.jobs.find((entry) => entry.id === item.jobId);
}
function isExcursionCash(item) {
  const job = cashJob(item);
  return !!(job && (job.service === "Excursion" || job.type === "Excursion"));
}
function cashGuide(item) {
  const job = cashJob(item);
  if (!isExcursionCash(item)) return "";
  return (job.guide && job.guide.name) || "";
}
function cashSub(item) {
  return `${isExcursionCash(item) ? "Excursion · " : ""}${item.title} · ${item.jobId}`;
}
function pageWallet() {
  const toCollect = state.cash.filter((item) => item.status === "To collect");
  const holding = state.cash.filter((item) => item.status === "With you");
  const handed = state.cash.filter((item) => item.status === "Handed over");
  const cashTotal = holding.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const advanceTotal = state.advances.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const expenseTotal = state.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const balance = advanceTotal + cashTotal - expenseTotal;
  const dueToOffice = balance >= 0;
  const upcoming = state.payouts.filter((item) => item.status !== "Paid");
  const paid = state.payouts.filter((item) => item.status === "Paid");
  const live = state.jobs.find((item) => item.ladder > 0 && item.ladder < 5);
  const row = (title, sub, amount, currency, tone) => `<div class="wallet-row"><span><b>${esc(title)}</b><small>${esc(sub)}</small></span><strong class="${tone}">${money(amount, currency || "LKR")}</strong></div>`;
  const empty = (text) => `<p class="wallet-empty">${text}</p>`;
  const tabs = `<div class="job-tabs">${[["today", "Today"], ["collection", "Cash"], ["bank", "Bank"], ["history", "History"]].map(([id, label]) => `<button class="${state.walletTab === id ? "on" : ""}" data-act="wallet-tab" data-tab="${id}">${label}</button>`).join("")}</div>`;
  const collectionCard = (item) => {
    const collected = item.status !== "To collect";
    const handed = item.status === "Handed over";
    const guide = item.guideName || cashGuide(item);
    const who = handed ? `${item.handWho || "Office"} · ${item.officeName}` : "Not yet";
    return `<article class="soft-card collect-card">
      <div class="wallet-row"><span><b>${esc(item.fromName || "Tourist")}</b><small>${esc(cashSub(item))}</small></span><strong class="${handed ? "paid" : "due"}">${cashBits(item)}</strong></div>
      <p class="collect-line"><span>Collected from</span><b>${collected ? esc(item.fromName || "Tourist") : "Not yet"}</b></p>
      ${collected ? `<p class="collect-line"><span>Collected by</span><b>${esc(item.collectedBy || state.partner.name)}</b></p>` : ""}
      ${guide ? `<p class="collect-line"><span>Excursion guide</span><b>${esc(guide)}<small>Sold this excursion</small></b></p>` : ""}
      <p class="collect-line"><span>Handed over to</span><b>${esc(who)}</b></p>
      <p class="collect-line"><span>Department</span><b>${handed && item.handWho !== "Client" ? esc(item.officeDept) : "—"}</b></p>
      <div class="collect-actions">
        <button type="button" class="mini-btn ${collected ? "done" : ""}" data-act="collect-cash" data-id="${esc(item.id)}" ${collected ? "disabled" : ""}>Collected</button>
        <button type="button" class="mini-btn ${handed ? "done" : collected ? "" : "wait"}" data-act="handover-cash" data-id="${esc(item.id)}" ${item.status === "With you" ? "" : "disabled"}>Hand over</button>
      </div>
    </article>`;
  };
  if (state.walletTab === "bank") {
    const bank = state.bank;
    return shell("Wallet", "", `
      <div class="earn-head"><div><h1>Wallet</h1><p>Bank details and payout rate</p></div></div>
      ${tabs}
      <section class="soft-card rows">
        <div class="id-row"><span>Bank<small>${esc(bank.name)}</small></span></div>
        <div class="id-row"><span>Branch<small>${esc(bank.branch)}</small></span></div>
        <div class="id-row"><span>Account name<small>${esc(bank.holder)}</small></span></div>
        <div class="id-row"><span>Account number<small>${esc(bank.account)}</small></span></div>
        <div class="id-row"><span>Payout rate<small>${esc(bank.rate)}</small></span></div>
      </section>
      <p class="footnote">The office pays this account. Guest cash you collect is not paid into it as salary.</p>`);
  }
  if (state.walletTab === "history") {
    return shell("Wallet", "", `
      <div class="earn-head"><div><h1>Wallet</h1><p>Payment history</p></div></div>
      ${tabs}
      <section class="soft-card rows">
        ${state.payouts.map((item) => `<div class="wallet-row"><span><b>${esc(item.title)}</b><small>${prettyDate(item.date)} · ${esc(item.status)}</small></span><strong class="${item.status === "Paid" ? "paid" : "due"}">${money(item.amount, item.currency)}</strong></div>`).join("")}
      </section>`);
  }
  if (state.walletTab === "collection") {
    return shell("Wallet", "", `
      <div class="earn-head"><div><h1>Wallet</h1><p>Who paid, and who at the office received it</p></div></div>
      ${tabs}
      <div class="collect-list">${state.cash.map(collectionCard).join("")}</div>`);
  }
  return shell("Wallet", "", `
    <div class="earn-head"><div><h1>Wallet</h1><p>Today's cash, spend, and what you return to the office</p></div></div>
    ${tabs}
    <section class="wallet-card">
      <div class="earn-k">${dueToOffice ? "To return to office" : "Due to you"}</div>
      <div class="earn-v">LKR ${Math.abs(balance).toLocaleString()}</div>
      <div class="earn-split">
        <div><b>LKR ${advanceTotal.toLocaleString()}</b><span>Advance</span></div>
        <div><b>LKR ${cashTotal.toLocaleString()}</b><span>Collected</span></div>
        <div><b>LKR ${expenseTotal.toLocaleString()}</b><span>Expenses</span></div>
      </div>
    </section>
    <h2 class="section">To collect</h2>
    <section class="soft-card rows">
      ${toCollect.length ? toCollect.map((item) => `<div class="wallet-row"><span><b>${esc(item.fromName || "Tourist")}</b><small>${esc(cashSub(item))}</small></span><span class="wallet-side"><strong class="due">${money(item.amount, item.currency)}</strong><button class="mini-btn" data-act="collect-cash" data-id="${esc(item.id)}">Collect</button></span></div>`).join("") : empty("Nothing left to collect")}
    </section>
    <h2 class="section">Cash with you</h2>
    <section class="soft-card rows">
      ${holding.length ? holding.map((item) => `<div class="wallet-row"><span><b>${esc(item.title)}</b><small>${esc(item.jobId)} · not handed over yet</small></span><span class="wallet-side"><strong class="due">${money(item.amount, item.currency)}</strong><button class="mini-btn" data-act="handover-cash" data-id="${esc(item.id)}">Hand over</button></span></div>`).join("") : empty("Nothing in your pocket")}
      <button class="record-btn" data-act="open-cash" ${live ? `data-job="${esc(live.id)}"` : ""}>+ Record cash from a guest</button>
      <p class="footnote">Company cash stays here. It is not added to your salary.</p>
    </section>
    <h2 class="section">Trip expenses</h2>
    <section class="soft-card rows">
      ${state.expenses.length ? state.expenses.map((item) => row(item.type, `${item.jobId}${item.note ? ` · ${item.note}` : ""}`, item.amount, item.currency, "due")).join("") : empty("No receipts yet")}
      <button class="record-btn" data-act="open-expense" ${live ? `data-job="${esc(live.id)}"` : ""}>+ Add an expense</button>
    </section>
    <h2 class="section">Company advance</h2>
    <section class="soft-card rows">
      ${state.advances.length ? state.advances.map((item) => row(item.title, `${item.jobId} · given ${prettyDate(item.date)}`, item.amount, item.currency, "")).join("") : empty("No advance for today")}
    </section>
    <h2 class="section">Handed over</h2>
    <section class="soft-card rows">
      ${handed.length ? handed.map((item) => row(item.title, `${item.jobId} · office has this${item.date ? ` · ${prettyDate(item.date)}` : ""}`, item.amount, item.currency, "paid")).join("") : empty("Nothing handed over yet")}
    </section>
    <h2 class="section">Driver payments</h2>
    <section class="soft-card rows">
      ${paid.length ? paid.map((item) => row(item.title, `Paid ${prettyDate(item.date)}`, item.amount, item.currency, "paid")).join("") : empty("No driver payments yet")}
    </section>
    <h2 class="section">Upcoming payments</h2>
    <section class="soft-card rows">
      ${upcoming.length ? upcoming.map((item) => row(item.title, `Due ${prettyDate(item.date)}`, item.amount, item.currency, "due")).join("") : empty("No upcoming payments")}
    </section>`);
}

function earnMonths() {
  const targets = [
    ["2026-01", 42000], ["2026-02", 40000], ["2026-03", 45000], ["2026-04", 43000],
    ["2026-05", 48000], ["2026-06", 44000], ["2026-07", 46000], ["2026-08", 47000],
    ["2026-09", 60200], ["2026-10", 42500], ["2026-11", 45000], ["2026-12", 45900],
  ];
  const base = { mileage: 32400, bata: 18600, highway: 9200, transfer: 1240, excursion: 860, round: 1105, refusal: 480, minutes: 11200, jobs: 38, refused: 4 };
  return targets.map(([key, salary]) => {
    if (key === "2026-09") return { key, salary, ...base };
    const factor = salary / 60200;
    const mileage = Math.round(base.mileage * factor);
    const bata = Math.round(base.bata * factor);
    return {
      key,
      salary,
      mileage,
      bata,
      highway: salary - mileage - bata,
      transfer: Math.round(base.transfer * factor),
      excursion: Math.round(base.excursion * factor),
      round: Math.round(base.round * factor),
      refusal: Math.round(base.refusal * factor),
      minutes: Math.round(base.minutes * factor),
      jobs: Math.max(1, Math.round(base.jobs * factor)),
      refused: Math.round(base.refused * factor),
    };
  });
}

function periodStats(from, to) {
  const totals = { salary: 0, mileage: 0, bata: 0, highway: 0, transfer: 0, excursion: 0, round: 0, refusal: 0, minutes: 0, jobs: 0, refused: 0 };
  earnMonths().forEach((month) => {
    const [year, monthNo] = month.key.split("-").map(Number);
    const start = new Date(year, monthNo - 1, 1);
    const end = new Date(year, monthNo, 0);
    const first = new Date(`${from}T00:00:00`);
    const last = new Date(`${to}T00:00:00`);
    const open = new Date(Math.max(start.getTime(), first.getTime()));
    const close = new Date(Math.min(end.getTime(), last.getTime()));
    if (close < open) return;
    const days = Math.round((close - open) / 86400000) + 1;
    const ratio = days / end.getDate();
    const take = (value) => (ratio === 1 ? value : Math.round(value * ratio));
    Object.keys(totals).forEach((key) => { totals[key] += take(month[key]); });
  });
  return totals;
}

function hoursLabel(minutes) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function splitTotal(total, count) {
  const size = Math.max(0, count);
  if (!size) return [];
  const base = Math.floor(total / size);
  let left = total - base * size;
  return Array.from({ length: size }, () => {
    const extra = left > 0 ? 1 : 0;
    left -= extra;
    return base + extra;
  });
}

function kindCounts(total) {
  if (total <= 0) return { transfer: 0, excursion: 0, round: 0 };
  if (total === 1) return { transfer: 1, excursion: 0, round: 0 };
  if (total === 2) return { transfer: 1, excursion: 1, round: 0 };
  let transfer = Math.max(1, Math.round(total * 16 / 38));
  let excursion = Math.max(1, Math.min(total - 2, Math.round(total * 11 / 38)));
  let round = total - transfer - excursion;
  if (round < 1) {
    transfer = Math.max(1, transfer + round - 1);
    round = 1;
  }
  return { transfer, excursion, round };
}

let mileCache;
function mileageLedger() {
  if (mileCache) return mileCache;
  const routes = {
    transfer: [["TR-44212", "Galle Road → Eden Beruwala"], ["TR-44216", "Eden Beruwala → BIA"], ["EHI-24070", "Colombo Fort → Negombo"], ["TR-2404", "Mount Lavinia → BIA"], ["TR-2411", "Cinnamon Grand → Galle Face"], ["TR-2418", "Negombo → Colombo Fort"]],
    excursion: [["EX-2418", "Galle Face → Gangaramaya"], ["EX-2408", "Colombo → Kandy viewpoint"], ["EX-2415", "Bentota → Galle Fort"], ["EX-2422", "Negombo lagoon loop"]],
    round: [["EHI-24091", "BIA → Galle Face → BIA"], ["RT-2406", "Colombo city round"], ["RT-2414", "Kandy temple round"], ["RT-2421", "Bentota beach round"]],
  };
  const reasons = ["Guest cancelled on arrival", "Vehicle not free", "Below the agreed rate", "Pickup time too tight"];
  const rows = [];
  earnMonths().forEach((month) => {
    const [year, monthNo] = month.key.split("-").map(Number);
    const dim = new Date(year, monthNo, 0).getDate();
    const counts = kindCounts(month.jobs);
    const minutes = splitTotal(month.minutes, month.jobs);
    let minuteAt = 0;
    ["transfer", "excursion", "round"].forEach((kind) => {
      splitTotal(month[kind], counts[kind]).forEach((km, index) => {
        const day = counts[kind] <= 1 ? 10 : 1 + Math.round(index * (dim - 1) / (counts[kind] - 1));
        const sample = routes[kind][index % routes[kind].length];
        rows.push({
          id: `${sample[0]}-${month.key}-${day}`,
          date: `${month.key}-${String(day).padStart(2, "0")}`,
          kind,
          title: sample[1],
          km,
          minutes: minutes[minuteAt] || 0,
          refused: false,
          reason: "",
        });
        minuteAt += 1;
      });
    });
    splitTotal(month.refusal, month.refused).forEach((km, index) => {
      const day = month.refused <= 1 ? 12 : 1 + Math.round(index * (dim - 1) / (month.refused - 1));
      rows.push({
        id: `RF-${month.key}-${day}`,
        date: `${month.key}-${String(day).padStart(2, "0")}`,
        kind: "refusal",
        title: "Refused job",
        km,
        minutes: 0,
        refused: true,
        reason: reasons[index % reasons.length],
      });
    });
  });
  mileCache = rows;
  return rows;
}

function periodJobs(from, to) {
  const rows = mileageLedger().filter((item) => item.date >= from && item.date <= to);
  if (rows.length) return rows;
  const made = [];
  const samples = [
    ["transfer", "TR-5101", "Airport → hotel"],
    ["excursion", "EX-5108", "City excursion"],
    ["round", "RT-5114", "Round tour"],
  ];
  let index = 0;
  eachDay(from, to, (key) => {
    if (index > 24) return;
    const sample = samples[index % samples.length];
    made.push({ id: `${sample[1]}-${key}`, date: key, kind: sample[0], title: sample[2], km: 28 + (index % 5) * 12, minutes: 40 + (index % 4) * 15, refused: false, reason: "" });
    if (index % 7 === 6) made.push({ id: `RF-${key}`, date: key, kind: "refusal", title: "Refused job", km: 18, minutes: 0, refused: true, reason: "Pickup time too tight" });
    index += 1;
  });
  return made;
}

function eachDay(from, to, visit) {
  const start = new Date(`${from}T12:00:00`);
  const end = new Date(`${to}T12:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return;
  for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
    visit(key, cursor);
  }
}

function demoJobList(from, to) {
  const samples = [
    { trf: "A-H", pair: "Airport → Hotel", service: "Arrival", from: "Bandaranaike Airport", to: "Galle Face Hotel", km: 32 },
    { trf: "H-A", pair: "Hotel → Airport", service: "Departure", from: "Galle Face Hotel", to: "Bandaranaike Airport", km: 34 },
    { trf: "H-H", pair: "Hotel → Hotel", service: "Transfer", from: "Cinnamon Grand", to: "Mount Lavinia", km: 18 },
    { trf: "A-T", pair: "Round Tour", service: "Round Tour", from: "Colombo", to: "Kandy", km: 116 },
    { trf: "A-T", pair: "Excursion", service: "Excursion", from: "Galle Face Hotel", to: "Gangaramaya", km: 22 },
  ];
  const out = [];
  let index = 0;
  eachDay(from, to, (key, date) => {
    if (out.length >= 12) return;
    if (date.getDate() % 2 === 0 && out.length > 2) return;
    const sample = samples[index % samples.length];
    const label = date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    out.push({
      id: `DM-${key.replace(/-/g, "")}`,
      ...sample,
      fleet: "Car",
      group: "Individual",
      combined: "—",
      client: "Tourist",
      pax: 2,
      date: date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
      time: "09:10",
      fromDate: label,
      toDate: label,
      status: key < todayKey() ? "Completed" : "Assigned",
      rep: sample.service === "Excursion" ? { name: "Dinesh Rathnayake – Guide" } : null,
      demo: true,
    });
    index += 1;
  });
  return out;
}

function jobsForBox(kind, from, to) {
  const rows = periodJobs(from, to);
  if (kind === "refusal" || kind === "refused") return rows.filter((item) => item.refused);
  if (kind === "total") return rows;
  if (kind === "transfer" || kind === "excursion" || kind === "round") return rows.filter((item) => item.kind === kind);
  return rows.filter((item) => !item.refused);
}

function earnCalendar() {
  const [year, month] = state.earnMonth.split("-").map(Number);
  const first = new Date(year, month - 1, 1).getDay();
  const days = new Date(year, month, 0).getDate();
  const label = new Date(year, month - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const names = ["S", "M", "T", "W", "T", "F", "S"];
  let cells = names.map((name) => `<i>${name}</i>`).join("");
  for (let i = 0; i < first; i += 1) cells += "<i></i>";
  for (let day = 1; day <= days; day += 1) {
    const key = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const inside = key >= state.earnFrom && key <= state.earnTo;
    const edge = key === state.earnFrom || key === state.earnTo;
    cells += `<button class="${inside ? "in" : ""} ${edge ? "edge" : ""}" data-act="earn-day" data-day="${key}">${day}</button>`;
  }
  const hint = state.earnAnchor ? "Now tap the end date" : `${prettyDate(state.earnFrom)} – ${prettyDate(state.earnTo)}`;
  return `<section class="soft-card earn-cal">
    <div class="earn-cal-head">
      <button type="button" data-act="earn-month" data-shift="-1" aria-label="Previous month">‹</button>
      <b>${label}</b>
      <button type="button" data-act="earn-month" data-shift="1" aria-label="Next month">›</button>
    </div>
    <p class="earn-hint">${hint}</p>
    <div class="cal earn-grid">${cells}</div>
  </section>`;
}

function pageLedger() {
  const pay = state.pay;
  const from = state.earnFrom;
  const to = state.earnTo;
  const stats = periodStats(from, to);
  const monthOn = from === "2026-09-01" && to === "2026-09-30";
  const yearOn = from === "2026-01-01" && to === "2026-12-31";
  const title = monthOn ? "This month" : yearOn ? "This year" : "Selected period";
  const driven = periodJobs(from, to).filter((item) => !item.refused);
  const refusedRows = periodJobs(from, to).filter((item) => item.refused);
  const kmOf = (kind) => driven.filter((item) => item.kind === kind).reduce((sum, item) => sum + item.km, 0);
  const transferKm = kmOf("transfer");
  const excursionKm = kmOf("excursion");
  const roundKm = kmOf("round");
  const actual = transferKm + excursionKm + roundKm;
  const refusalKm = refusedRows.reduce((sum, item) => sum + item.km, 0);
  const minutes = driven.reduce((sum, item) => sum + item.minutes, 0);
  const stars = "★★★★★".slice(0, Math.round(pay.score)) + "☆☆☆☆☆".slice(Math.round(pay.score));
  const reviews = pay.reviews.filter((item) => item.date >= from && item.date <= to);
  return shell("Earnings", "", `
    <div class="earn-head"><div><h1>Earnings</h1><p>Salary, trip pay, and reviews</p></div><span class="audited">Audited</span></div>
    <div class="ets-filters">
      <button class="${monthOn ? "on" : ""}" data-act="earn-period" data-from="2026-09-01" data-to="2026-09-30">This month</button>
      <button class="${yearOn ? "on" : ""}" data-act="earn-period" data-from="2026-01-01" data-to="2026-12-31">This year</button>
    </div>
    ${earnCalendar()}
    <article class="salary-box year period-total"><span>${title}</span><b>LKR ${stats.salary.toLocaleString()}</b><small>${prettyDate(from)} – ${prettyDate(to)}</small></article>
    <h2 class="section">Mileage</h2>
    <section class="soft-card fleet-chip"><span>ND-9012 · Car · 3 seats · Toyota Prius</span></section>
    <div class="mile-grid">
      ${[
        ["mint", "transfer", "Transfer mileage", `${transferKm.toLocaleString()} km`],
        ["peach", "excursion", "Excursion mileage", `${excursionKm.toLocaleString()} km`],
        ["sky", "round", "Round tour mileage", `${roundKm.toLocaleString()} km`],
        ["sky", "actual", "Actual mileage", `${actual.toLocaleString()} km`],
        ["rose", "refusal", "Refusal mileage", `${refusalKm.toLocaleString()} km`],
        ["lilac", "total", "Total mileage", `${(actual + refusalKm).toLocaleString()} km`],
        ["ice", "hours", "Hours", hoursLabel(minutes)],
        ["mint", "jobs", "Jobs", String(driven.length)],
        ["rose", "refused", "Jobs refused", String(refusedRows.length)],
      ].map(([tone, kind, label, value]) => `<button type="button" class="mile-box ${tone}" data-act="mile-sheet" data-kind="${kind}"><span>${label}</span><b>${value}</b></button>`).join("")}
    </div>
    <h2 class="section">TR</h2>
    <section class="soft-card rows">
      <div class="wallet-row"><span><b>Mileage</b><small>Kilometres in this period</small></span><strong>LKR ${stats.mileage.toLocaleString()}</strong></div>
      <div class="wallet-row"><span><b>Bata</b><small>Daily allowance for days you drove</small></span><strong>LKR ${stats.bata.toLocaleString()}</strong></div>
      <div class="wallet-row"><span><b>Highway tickets</b><small>Expressway slips handed to Transport</small></span><strong>LKR ${stats.highway.toLocaleString()}</strong></div>
      <div class="wallet-row tr-total"><span><b>Period total</b><small>Mileage + bata + highway tickets</small></span><strong>LKR ${stats.salary.toLocaleString()}</strong></div>
    </section>
    <h2 class="section">Performance</h2>
    <button type="button" class="soft-card perf" data-act="perf-sheet">
      <div class="perf-score"><b>${pay.score}</b><span>${stars}</span></div>
      <div class="perf-stats"><div><b>${driven.length}</b><span>Trips</span></div><div><b>${pay.onTime}%</b><span>On time</span></div><div><b>${reviews.length}</b><span>Reviews</span></div></div>
    </button>
    <p class="footnote">Guest cash is recorded in Wallet and is not part of this salary.</p>`);
}

function pageProfile() {
  const p = state.partner;
  const fix = state.documents.filter((item) => item.group === "attention").length;
  return shell("Profile", "", `
    <h1 class="page-title">Profile</h1>
    <section class="soft-card person">
      ${p.photo ? `<img class="profile-photo" src="${p.photo}" alt="">` : `<div class="avatar">OG</div>`}
      <div>
        <b>${esc(p.name)}</b>
        <small>ID ${esc(p.id)} · ${esc(p.phone)}</small>
        <div class="tags"><span>${esc(p.role)}</span><span class="status-pill ${p.driverStatus === "Active" ? "on" : ""}">${esc(p.driverStatus)}</span><span>${state.pay.score} ★</span></div>
      </div>
    </section>
    <h2 class="section">My account</h2>
    <div class="account-grid">
      <button class="account-box" data-go="/personal"><span class="box-logo navy"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M5 19c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5"/></svg></span><b>Personal details</b><small>Address, status, password</small></button>
      <button class="account-box" data-go="/documents"><span class="box-logo amber"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg></span><b>Documents</b><span class="fix">${fix} to fix</span></button>
      <button class="account-box" data-go="/vehicle"><span class="box-logo blue"><svg viewBox="0 0 24 24"><path d="M4 14h16l-1.2-4.2A2 2 0 0 0 16.9 8H7.1a2 2 0 0 0-1.9 1.8L4 14z"/><path d="M6 14v3M18 14v3M7 17h.01M17 17h.01"/></svg></span><b>Vehicle & regions</b><small>${esc(p.plate)}</small></button>
      <button class="account-box" data-go="/languages"><span class="box-logo green"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.4 3.3 5.2 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.2-3.3-8S9.8 6.4 12 4z"/></svg></span><b>Languages I speak</b><small>${state.spoken.length} languages</small></button>
    </div>
    <h2 class="section">Driver tools</h2>
    <div class="account-grid">
      <button class="account-box" data-go="/share"><span class="box-logo navy"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="16" cy="7" r="2"/><circle cx="16" cy="17" r="2"/><path d="m8 11 6-3M8 13l6 3"/></svg></span><b>Share profile</b><small>Photo, name, rating</small></button>
      <button class="account-box" data-go="/calendar"><span class="box-logo amber"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg></span><b>Availability calendar</b><small>Days you can drive</small></button>
      <button class="account-box" data-go="/safety"><span class="box-logo green"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8 4.2-.8 7-3.8 7-8V6z"/></svg></span><b>Safety and toolkit</b><small>What is in the vehicle</small></button>
      <button class="account-box" data-go="/incident"><span class="box-logo rose"><svg viewBox="0 0 24 24"><path d="M12 4 3 20h18z"/><path d="M12 10v4M12 17h.01"/></svg></span><b>Accident or breakdown</b><small>Location and replacement</small></button>
    </div>
    <h2 class="section">Preferences</h2>
    <section class="soft-card rows">
      <div class="list-row static"><span><b>Night mode</b><small>Bright palette for daylight</small></span><button class="switch ${state.theme === "dark" ? "on" : ""}" data-act="theme" aria-label="Night mode"></button></div>
      <div class="list-row static"><span><b>App language</b></span></div>
      <div class="lang-pills">${[["en", "English"], ["si", "සිංහල"], ["ta", "தமிழ்"]].map(([code, label]) => `<button class="${state.lang === code ? "on" : ""}" data-lang="${code}">${label}</button>`).join("")}</div>
    </section>
    <h2 class="section">Support</h2>
    <section class="soft-card rows">
      ${rowLink("/support", "Call EHI operations", "For anything urgent on a trip")}
      ${rowLink("/support", "Help & FAQs")}
    </section>
    <button class="signout" data-act="sign-out">Sign out</button>`);
}

function pagePersonal() {
  const p = state.partner;
  const photo = p.photo
    ? `<img class="profile-photo" src="${p.photo}" alt="Profile image">`
    : `<span class="avatar lg">OG</span>`;
  const langs = state.spoken.map((item) => item.name).join(", ");
  return shell("Personal details", "", `
    <section class="soft-card photo-card">
      <label class="photo-hit">
        ${photo}
        <input id="profile-photo" type="file" accept="image/*" hidden>
      </label>
      <div>
        <b>Profile image</b>
        <small>${esc(p.name)}</small>
        <span>Tap the photo to change it</span>
      </div>
    </section>
    <h2 class="section">Profile</h2>
    <section class="soft-card rows">
      ${field("Driver name", "pd-name", p.name)}
      ${field("Mobile number", "pd-phone", p.phone, "tel")}
      ${rowLink("/languages", "Languages", langs)}
      ${rowLink("/earnings", "Driver review", `${state.pay.score} / 5 · ${state.pay.reviews.length} reviews`)}
      ${rowLink("/map", "Live location", livePlace())}
      <button class="list-row" data-act="share-profile"><span><b>Share this profile</b><small>Photo, name, mobile, languages, rating, location</small></span><em>›</em></button>
    </section>
    <h2 class="section">Account</h2>
    <section class="soft-card rows">
      ${field("Residential address", "pd-address", p.address)}
      <label class="field"><span>Region</span><select id="pd-region">${state.regions.map((name) => `<option ${name === p.region ? "selected" : ""}>${esc(name)}</option>`).join("")}</select></label>
      <div class="id-row"><span>Driver status<small>${esc(p.driverStatus)}</small></span><button class="status-pill ${p.driverStatus === "Active" ? "on" : ""}" data-act="driver-status">${esc(p.driverStatus)}</button></div>
      ${field("Driver category", "pd-category", p.driverCategory)}
      ${field("Supplier owner", "pd-owner", p.supplierOwner)}
      <div class="id-row"><span>Supplier<small>${esc(p.supplier)}</small></span></div>
      <div class="id-row"><span>Joined date<small>${prettyDate(p.joined)}</small></span></div>
    </section>
    <button class="btn block" data-act="save-personal">Save personal details</button>
    <button class="call-btn" data-act="open-password">Change password</button>
    <h2 class="section">From your review</h2>
    <section class="soft-card rows">
      ${rowLink("/wallet", "Wallet and payments", "Bank details, payout rate, payment history")}
      ${rowLink("/vehicle", "Vehicle", `${p.model} · ${p.plate} · ${p.category}`)}
      ${rowLink("/documents", "Documents, guidelines, equipment", "Licences, attire, bus board, uniform")}
      ${rowLink("/calendar", "Availability calendar", "Mark the days you can drive")}
      ${rowLink("/safety", "Safety and toolkit", "Check what is in the vehicle")}
      ${rowLink("/languages", "App language and status", "English, Sinhala, Tamil · Active or Inactive")}
      ${rowLink("/messages", "Messages", "Guest messages and the office")}
      ${rowLink("/notifications", "Attention", "Expiring documents, cash, Silk Route")}
      ${rowLink("/jobs", "Transfers", "Today, upcoming, completed · accept or decline")}
      <button class="list-row" data-act="open-cash-tab"><span><b>Cash collection</b><small>LKR, USD, and EUR · kept out of salary</small></span><em>›</em></button>
      ${rowLink("/incident", "Accident or breakdown", "Location and a replacement vehicle")}
    </section>`);
}

function pageDocuments() {
  const attention = state.documents.filter((item) => item.group === "attention");
  const rest = state.documents.filter((item) => item.group !== "attention");
  const tone = (status) => status === "Approved" ? "ok" : status === "Under review" ? "info" : "wait";
  const row = (item) => `<button class="doc-row" data-act="upload" data-doc="${esc(item.name)}"><span><b>${esc(item.name)}</b>${item.side ? `<small>${esc(item.side)}</small>` : ""}</span><i class="${tone(item.status)}">${esc(item.status)}</i></button>`;
  const licences = state.licences.map((item) => {
    const days = daysUntil(item.expires);
    const label = days < 0 ? "Expired" : `${days}d`;
    return `<div class="doc-row hot"><span><b>${esc(item.name)}</b><small>${days < 0 ? `Expired ${prettyDate(item.expires)}` : `Expires ${prettyDate(item.expires)}`}</small></span><i class="wait">${label}</i></div>`;
  }).join("");
  return shell("Documents", "", `
    <h2 class="section">Expiring</h2>
    <section class="soft-card rows">${licences}</section>
    <h2 class="section">Needs attention</h2>
    <section class="soft-card rows">${attention.map(row).join("")}</section>
    <h2 class="section">All documents</h2>
    <section class="soft-card rows">${rest.map(row).join("")}</section>
    <h2 class="section">Guidelines</h2>
    <section class="soft-card rows">
      ${state.guidelines.map((item) => `<div class="id-row"><span><b>${esc(item.title)}</b><small>${esc(item.text)}</small></span></div>`).join("")}
    </section>
    <h2 class="section">Office equipment</h2>
    <section class="soft-card rows">
      ${state.equipment.map((item) => `<div class="id-row"><span><b>${esc(item.name)}</b><small>${esc(item.code)}</small></span><em>${esc(item.status)}</em></div>`).join("")}
    </section>
    <p class="footnote">A document stays valid while its replacement is being checked — sending a new one never pauses your work.</p>`);
}

function pageVehicle() {
  const p = state.partner;
  const photo = p.vehiclePhoto
    ? `<img class="vehicle-photo" src="${p.vehiclePhoto}" alt="Vehicle photo">`
    : `<div class="car-ico"></div>`;
  return shell("Vehicle & regions", "", `
    <section class="soft-card vehicle-hero">
      <label class="photo-hit">${photo}<input id="vehicle-photo" type="file" accept="image/*" hidden></label>
      <div><b>${esc(p.plate)}</b><small>${esc(p.model)} · tap to add a photo</small></div>
    </section>
    <h2 class="section">Vehicle</h2>
    <section class="soft-card rows">
      <div class="id-row"><span>Model<small>${esc(p.model)}</small></span></div>
      <div class="id-row"><span>Category<small>${esc(p.category)}</small></span></div>
      <div class="id-row"><span>Vehicle number<small>${esc(p.plate)}</small></span></div>
      <div class="id-row"><span>Base region<small>${esc(p.baseRegion)}</small></span></div>
      <div class="id-row"><span>Seating capacity<small>${p.seats} guests</small></span></div>
      <div class="id-row"><span>Baggage size<small>${esc(p.baggageSize)}</small></span></div>
      <div class="id-row"><span>Baggage capacity<small>${esc(p.baggageCapacity)}</small></span></div>
    </section>
    <h2 class="section">Regions I work in</h2>
    <section class="soft-card"><div class="region-pills">${state.regions.map((item) => `<span>${esc(item)}</span>`).join("")}</div></section>
    <button class="call-btn" data-go="/documents">Vehicle documents</button>`);
}

function pageLanguages() {
  return shell("Languages I speak", "", `
    <section class="soft-card rows">
      ${state.spoken.map((item) => `<div class="lang-row"><span><b>${esc(item.name)}</b><small>${esc(item.level)}</small></span>${dots(item.dots)}</div>`).join("")}
    </section>
    <p class="footnote">Guests are matched to you by language. Proficiency is confirmed by EHI, so ask operations to add or change one.</p>`);
}

function pageNotifications() {
  const items = attentionItems();
  const office = state.officeFeed.map((item) => `<article class="note-card"><b>${esc(item.title)}</b><span>${esc(item.text)}</span><small>${esc(item.time)}</small></article>`).join("");
  const rows = items.map((item) => `<button class="attn-item" data-go="${item.go}"><span class="attn-icon">!</span><span class="attn-copy"><strong>${esc(item.title)}</strong><span>${esc(item.sub)}</span></span><b class="attn-count">${esc(item.action)}</b></button>`).join("");
  return shell("Alerts", "", `
    <h1 class="page-title">All attention</h1>
    <p class="map-meta">${items.length} waiting on you</p>
    <div class="attn-list">${rows || `<p class="wallet-empty">You're clear</p>`}</div>
    <h2 class="section">Back office</h2>
    ${office || `<p class="wallet-empty">No office notes yet</p>`}`);
}

function pageSupport() {
  return shell("Help & FAQs", "", `
    <section class="soft-card">
      <b>Call EHI operations</b>
      <p>For anything urgent on a trip</p>
      <p class="meta">+94 11 238 4400</p>
    </section>`);
}

function pageShare() {
  const p = state.partner;
  const photo = p.photo ? `<img class="profile-photo" src="${p.photo}" alt="">` : `<span class="avatar lg">OG</span>`;
  const langs = state.spoken.map((item) => item.name).join(" · ");
  return shell("Share profile", "", `
    <article class="soft-card share-card">
      ${photo}
      <b>${esc(p.name)}</b>
      <span>${esc(p.phone)}</span>
      <span>${esc(langs)}</span>
      <span>${state.pay.score} / 5</span>
      <span>Live · ${esc(livePlace())}</span>
    </article>
    <button class="call-btn" data-act="share-profile">Share this profile</button>`);
}

function pageCalendar() {
  if (!state.calMonth) state.calMonth = todayKey().slice(0, 7);
  if (!state.calPick) state.calPick = todayKey();
  const [year, month] = state.calMonth.split("-").map(Number);
  const first = new Date(year, month - 1, 1).getDay();
  const days = new Date(year, month, 0).getDate();
  const label = new Date(year, month - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const mine = state.partner.category.split("·")[0].trim();
  const jobsOn = (key) => state.jobs.filter((item) => jobDay(item) === key && (!item.fleet || item.fleet === mine));
  const markOf = (key) => {
    if (state.calendar[key]) return state.calendar[key];
    if (state.leaves.some((item) => item.from && item.to && item.from <= key && key <= item.to)) return "Leave";
    return "";
  };
  const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let cells = names.map((name) => `<i>${name}</i>`).join("");
  for (let i = 0; i < first; i += 1) cells += "<i></i>";
  const counts = { Booked: 0, Offered: 0, Leave: 0, Open: 0 };
  const agenda = [];
  for (let day = 1; day <= days; day += 1) {
    const key = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const mark = markOf(key);
    const jobs = jobsOn(key);
    counts[mark || "Open"] += 1;
    if (mark || jobs.length) agenda.push({ key, mark, jobs });
    const cls = [mark.toLowerCase(), key === todayKey() ? "today" : "", key === state.calPick ? "pick" : ""].filter(Boolean).join(" ");
    cells += `<button type="button" class="${cls}" data-act="cal-day" data-day="${key}"><b>${day}</b>${mark ? `<small>${esc(mark)}</small>` : ""}${jobs.length ? `<em>${jobs.length}</em>` : ""}</button>`;
  }
  const pick = state.calPick;
  const pickMark = markOf(pick);
  const pickJobs = jobsOn(pick);
  const pickLabel = new Date(`${pick}T12:00:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const locked = pickMark === "Booked" || pickMark === "Offered";
  const action = locked
    ? `<p class="day-lock">The office already has this day as ${pickMark.toLowerCase()}. Ask Transport if it needs to move.</p>`
    : `<button class="btn block" data-act="cal-leave" data-day="${esc(pick)}">${pickMark === "Leave" ? "Set this day as available" : "Mark this day as leave"}</button>`;
  const jobList = pickJobs.length
    ? pickJobs.map((item) => `<button class="day-job" data-go="/jobs?id=${esc(item.id)}"><b>${esc(item.pair || item.service || item.type)}</b><span>${esc(item.time)} · ${esc(item.from)} → ${esc(item.to)}</span><small>${esc(item.status)}</small></button>`).join("")
    : `<p class="wallet-empty">No transfers on this day</p>`;
  return shell("Availability", "", `
    <section class="soft-card avail-cal">
      <div class="earn-cal-head">
        <button type="button" data-act="cal-month" data-shift="-1" aria-label="Previous month">‹</button>
        <b>${label}</b>
        <button type="button" data-act="cal-month" data-shift="1" aria-label="Next month">›</button>
      </div>
      <div class="avail-stats">
        <div><b>${counts.Open}</b><span>Open</span></div>
        <div><b>${counts.Leave}</b><span>Leave</span></div>
        <div><b>${counts.Booked}</b><span>Booked</span></div>
        <div><b>${counts.Offered}</b><span>Offered</span></div>
      </div>
      <div class="avail-legend"><span class="open">Open</span><span class="leave">Leave</span><span class="booked">Booked</span><span class="offered">Offered</span></div>
      <div class="cal">${cells}</div>
    </section>
    <section class="soft-card day-panel">
      <div class="day-panel-top"><b>${pickLabel}</b><span class="day-chip ${pickMark.toLowerCase() || "open"}">${pickMark || "Open"}</span></div>
      <p class="day-count">${pickJobs.length ? `${pickJobs.length} transfer${pickJobs.length === 1 ? "" : "s"} on this day` : "You are free unless you mark leave"}</p>
      ${jobList}
      ${action}
    </section>
    <h2 class="section">This month</h2>
    <div class="agenda">${agenda.length ? agenda.map((item) => {
      const title = item.jobs[0] ? (item.jobs[0].pair || item.jobs[0].service || item.jobs[0].type) : item.mark;
      const extra = item.jobs.length > 1 ? ` · +${item.jobs.length - 1} more` : "";
      return `<button class="agenda-row" data-act="cal-day" data-day="${item.key}"><b>${prettyDate(item.key)}</b><span class="day-chip ${item.mark.toLowerCase() || "open"}">${esc(item.mark || "Transfer")}</span><small>${esc(title)}${extra}</small></button>`;
    }).join("") : `<p class="wallet-empty">Nothing marked this month</p>`}</div>`);
}

function pageMessages() {
  const tab = state.messageTab;
  const thread = state.messages[tab] || [];
  const guest = (activeTrip() && activeTrip().client) || "Guest";
  const face = (who) => {
    if (who === "me") {
      return state.partner.photo
        ? `<img class="chat-ava" src="${state.partner.photo}" alt="">`
        : `<i class="chat-ava me">${esc((state.partner.first || "O").slice(0, 1))}</i>`;
    }
    if (who === "office") return `<i class="chat-ava office">EH</i>`;
    return `<i class="chat-ava guest">${esc(String(guest).trim().slice(0, 1) || "G")}</i>`;
  };
  const tabs = `<div class="job-tabs">${[["client", "Client"], ["office", "Office"]].map(([id, label]) => `<button class="${tab === id ? "on" : ""}" data-act="msg-tab" data-tab="${id}">${label}</button>`).join("")}</div>`;
  const bubbles = thread.map((item) => {
    const mine = item.from === "me";
    const who = mine ? "me" : item.from;
    return `<article class="msg-row ${mine ? "me" : ""}">${mine ? "" : face(who)}<div class="bubble ${mine ? "me" : ""}"><p>${esc(item.text)}</p><small>${esc(item.time)}</small></div>${mine ? face("me") : ""}</article>`;
  }).join("");
  const quick = tab === "client"
    ? `<div class="scripts">${state.scripts.map((text, index) => `<button data-act="send-script" data-script="${index}">${esc(text)}</button>`).join("")}</div>`
    : "";
  return shell("Messages", "", `
    ${tabs}
    <div class="thread">${bubbles || `<p class="wallet-empty">No messages yet</p>`}</div>
    ${quick}
    <form class="typer">
      <input id="chat-msg" type="text" placeholder="${tab === "office" ? "Message Transport" : "Type a message"}" autocomplete="off">
      <button type="button" data-act="send-chat">Send</button>
    </form>`);
}

function pageSafety() {
  return shell("Safety & toolkit", "", `
    <p class="sub">Mark each item the vehicle has. The office sees the same list.</p>
    <section class="soft-card rows">
      ${state.toolkit.map((item, index) => `<div class="id-row"><span><b>${esc(item.name)}</b><small>${item.ok ? "In the vehicle" : "Missing"}</small></span><button class="status-pill ${item.ok ? "on" : ""}" data-act="kit-toggle" data-index="${index}">${item.ok ? "Verified" : "Mark in"}</button></div>`).join("")}
    </section>
    <h2 class="section">Attire</h2>
    <section class="soft-card rows">
      ${state.guidelines.map((item) => `<div class="id-row"><span><b>${esc(item.title)}</b><small>${esc(item.text)}</small></span></div>`).join("")}
    </section>`);
}

function pageIncident() {
  const place = livePlace();
  return shell("Report", "", `
    <p class="sub">Tell the office where you are. If you need another vehicle, the app suggests one that is free in your region.</p>
    <label class="field"><span>Type</span><select id="inc-kind"><option>Breakdown</option><option>Accident</option></select></label>
    ${field("Location", "inc-place", place)}
    ${field("What happened", "inc-note", "", "text", 'placeholder="Short note for Transport"')}
    <label class="check"><input id="inc-replace" type="checkbox" checked> I need a replacement vehicle</label>
    <button class="btn block" data-act="send-incident">Send to the office</button>
    ${state.incidents.length ? `<h2 class="section">Sent</h2>${state.incidents.map((item) => `<article class="note-card"><b>${esc(item.kind)} · ${esc(item.place)}</b><span>${esc(item.note || "No extra note")}${item.vehicle ? ` · Replacement ${esc(item.vehicle)}` : ""}</span></article>`).join("")}` : ""}`);
}

function authWrap(inner) {
  return `<div class="app-auth"><section class="brand-pane"><div><img src="assets/logo.png" alt="Exotic Holidays International"><h1>Partner workspace</h1><p>Jobs, navigation, cash, and documents for EHI drivers, guides, and fleet companies.</p><div class="brand-points"><span>Accept or decline a job</span><span>Run the route on the map</span><span>Record cash and weekly earnings</span></div></div><div>English · Sinhala · Tamil</div></section><section class="auth-pane"><div class="auth-card"><div class="lang-row" style="margin-bottom:12px">${["en", "si", "ta"].map((code) => `<button class="chip ${state.lang === code ? "on" : ""}" data-lang="${code}">${code.toUpperCase()}</button>`).join("")}</div>${inner}</div></section></div>`;
}

function sheet() {
  if (state.sheet === "leaves") {
    const statuses = ["Available", "On leave", "Offline"];
    return `<div class="sheet"><aside><div class="row-between"><h2>Leaves</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <p class="sub">On leave applies only on the dates you save. Every other day you stay ${esc(state.availability === "Offline" ? "Offline" : "Available")}.</p>
      ${statuses.map((status) => `<button class="option ${state.leavePick === status ? "on" : ""}" data-act="avail" data-avail="${status}"><b>${status}</b></button>`).join("")}
      ${state.leavePick === "On leave" ? `<label class="field"><span>Start date</span><input id="leave-from" type="date" value="${esc(state.leaveFrom)}"></label><label class="field"><span>End date</span><input id="leave-to" type="date" value="${esc(state.leaveTo)}"></label>${field("Remark", "leave-note", state.leaveNote, "text", 'placeholder="e.g. Vehicle breakdown"')}` : ""}
      ${state.leaves.length ? `<div class="leave-list">${state.leaves.map((item, index) => `<div class="leave-row"><div><b>${esc(item.from)} → ${esc(item.to)}</b><em class="${leavePhase(item) === "Ended" ? "ended" : leavePhase(item) === "Upcoming" ? "soon" : ""}">${leavePhase(item)}</em><span class="remark">${item.note ? esc(item.note) : "No remark"}</span></div><button type="button" class="leave-remove" data-act="remove-leave" data-index="${index}">Remove</button></div>`).join("")}</div>` : ""}
      <button class="btn block" data-act="save-leave">Save</button></aside></div>`;
  }
  if (state.sheet === "decline") {
    const item = findJob();
    return `<div class="sheet"><aside><div class="row-between"><h2>Decline</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div><p class="sub">${esc(item.id)} · ops will reassign it.</p>
      ${DECLINE.map((reason) => `<button class="option ${state.declineReason === reason ? "on" : ""}" data-act="decline-reason" data-reason="${esc(reason)}"><b>${esc(reason)}</b></button>`).join("")}
      <button class="btn crimson block" data-act="confirm-decline">Confirm decline</button></aside></div>`;
  }
  if (state.sheet === "collect") {
    const item = state.cash.find((entry) => entry.id === state.handoverId);
    if (!item) return "";
    const guide = cashGuide(item);
    const lkr = item.currency === "LKR" ? item.amount : "";
    const usd = item.currency === "USD" ? item.amount : "";
    return `<div class="sheet"><aside><div class="row-between"><h2>Collected</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <p class="sub">${esc(item.fromName || "Tourist")} · ${esc(item.title)}. Enter LKR, USD, or both.</p>
      <p class="collect-by"><i>OG</i><span>Collected by<b>${esc(state.partner.name)}</b><small>Driver · ${esc(state.partner.plate)}</small></span></p>
      ${guide ? `<p class="guide-note">Guide · ${esc(guide)}<small>Sold this excursion</small></p>` : ""}
      <div class="money-pair">
        ${field("LKR", "got-lkr", lkr, "number", 'inputmode="decimal" placeholder="0"')}
        ${field("USD", "got-usd", usd, "number", 'inputmode="decimal" placeholder="0"')}
      </div>
      <button class="btn block" data-act="save-collect">Save collected</button></aside></div>`;
  }
  if (state.sheet === "handover") {
    const item = state.cash.find((entry) => entry.id === state.handoverId);
    if (!item) return "";
    const who = state.handWho || "Office";
    const guide = item.guideName || cashGuide(item);
    const departments = ["Transport Department", "Operations", "Accounts"];
    return `<div class="sheet"><aside><div class="row-between"><h2>Hand over</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <p class="sub">${esc(item.fromName || "Tourist")} · ${cashBits(item)}</p>
      ${guide ? `<p class="guide-note">Guide · ${esc(guide)}<small>Sold this excursion</small></p>` : ""}
      <div class="who-picks">
        <button type="button" class="option ${who === "Office" ? "on" : ""}" data-act="hand-who" data-who="Office"><b>Office</b></button>
        <button type="button" class="option ${who === "Client" ? "on" : ""}" data-act="hand-who" data-who="Client"><b>Client</b></button>
      </div>
      ${who === "Client"
        ? `<p class="sub">This goes back to the tourist, ${esc(item.fromName || "the client")}.</p>`
        : `${field("Employee name", "office-name", "", "text", 'placeholder="Who at the office received it"')}<label class="field"><span>Department</span><select id="office-dept">${departments.map((name) => `<option>${name}</option>`).join("")}</select></label>`}
      <button class="btn block" data-act="save-handover">Confirm hand over</button></aside></div>`;
  }
  if (state.sheet === "cash") {
    return `<div class="sheet"><aside><div class="row-between"><h2>Record cash from a guest</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <p class="sub">Enter what you actually took from the guest.</p>
      ${field("Amount", "cash-amount", "")}<label class="field"><span>Currency</span><select id="cash-currency"><option>LKR</option><option>USD</option><option>EUR</option></select></label>
      ${field("Collected from", "cash-from", "", "text", 'placeholder="Guest name"')}
      ${field("Note (optional)", "cash-note", "", "text", 'placeholder="e.g. Collected at drop-off"')}
      <label class="check"><input id="cash-company" type="checkbox" checked> Company cash, kept out of my salary</label>
      <button class="btn ghost block" data-act="upload" data-doc="Photograph the receipt">Photograph the receipt</button>
      <button class="btn block" data-act="save-cash" style="margin-top:10px">Confirm cash collected</button></aside></div>`;
  }
  if (state.sheet === "password") {
    return `<div class="sheet"><aside><div class="row-between"><h2>Change password</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <p class="sub">Choose a new password for partner ID ${esc(state.partner.id)}.</p>
      ${field("Current password", "cur-pass", "", "password")}
      ${field("New password", "new-pass", "", "password")}
      ${field("Confirm new password", "new-pass-2", "", "password")}
      <button class="btn block" data-act="save-password">Update password</button></aside></div>`;
  }
  if (state.sheet === "rep") {
    const item = findJob(state.selectedJob);
    const rep = item && item.rep;
    if (!rep) return "";
    return `<div class="sheet"><aside><div class="row-between"><h2>Guide</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <div class="rep-card"><i>DF</i><b>${esc(rep.name)}</b><span>${esc(rep.phone)}</span></div></aside></div>`;
  }
  if (state.sheet === "status") {
    const item = findJob(state.selectedJob);
    const next = item && item.clientStatus === "Client Transfer Complete" ? "Client Picked" : "Client Transfer Complete";
    return `<div class="sheet"><aside><h2>Change Status?</h2><p class="sub">Change status back to "${esc(next)}"?</p>
      <button class="btn ghost block" data-act="close-sheet">Cancel</button>
      <button class="btn block" data-act="confirm-status" data-job="${esc(item.id)}">Confirm</button></aside></div>`;
  }
  if (state.sheet === "expense") {
    return `<div class="sheet"><aside><div class="row-between"><h2>Add an expense</h2><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <label class="field"><span>Type</span><select id="ex-type">${EXPENSE_TYPES.map((item) => `<option>${item}</option>`).join("")}</select></label>
      ${field("Amount", "ex-amount", "", "number")}${field("Note (optional)", "ex-note", "")}
      <button class="btn ghost block" data-act="upload" data-doc="Photograph the receipt">Photograph the receipt</button>
      <button class="btn block" data-act="save-expense" style="margin-top:10px">Add expense</button></aside></div>`;
  }
  if (state.sheet === "perf") {
    const from = state.earnFrom;
    const to = state.earnTo;
    const reviews = state.pay.reviews.filter((item) => item.date >= from && item.date <= to);
    const praise = ["Clean car", "On time", "Safe driving", "Polite", "Child seat ready"];
    const complaints = ["Late pickup", "Dirty vehicle", "Rude", "Wrong route", "Speeding"];
    const count = (name) => reviews.filter((item) => (item.tags || []).includes(name)).length;
    const stars = "★★★★★".slice(0, Math.round(state.pay.score)) + "☆☆☆☆☆".slice(Math.round(state.pay.score));
    const chips = (names, bad) => names.filter((name) => count(name)).map((name) => `<span class="pick-tag ${bad ? "bad" : ""}">${esc(name)}<i>${count(name)}</i></span>`).join("");
    const face = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    const cards = reviews.map((item) => `<article class="review-card ${item.kind === "complaint" ? "complaint" : ""}">
      <div class="review-top"><i class="rev-ava ${item.kind === "complaint" ? "bad" : ""}">${esc(face(item.from))}</i><div><b>${esc(item.from)}</b><small>${esc(item.role)} · ${prettyDate(item.date)}</small></div><em>${item.score}.0</em></div>
      <p>${esc(item.text)}</p>
      <div class="tag-row">${(item.tags || []).map((tag) => `<span class="pick-tag ${item.kind === "complaint" ? "bad" : ""}">${esc(tag)}</span>`).join("")}</div>
    </article>`).join("");
    return `<div class="sheet pop app"><button class="pop-dim" data-act="close-sheet" aria-label="Close"></button><aside class="perf-sheet">
      <button class="pop-grab" data-act="close-sheet" aria-label="Close"></button>
      <div class="perf-head"><div><h2>Performance</h2><small>${prettyDate(from)} – ${prettyDate(to)}</small></div><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <div class="score-hero"><b>${state.pay.score}</b><div><span>${stars}</span><small>${reviews.length} review${reviews.length === 1 ? "" : "s"} this period</small></div></div>
      <section class="chip-block"><p class="tag-label">What they picked</p><div class="tag-row">${chips(praise, false) || `<span class="pick-tag">No picks yet</span>`}</div></section>
      <section class="chip-block bad"><p class="tag-label">Complaints</p><div class="tag-row">${chips(complaints, true) || `<span class="pick-tag">No complaints</span>`}</div></section>
      <p class="tag-label">Reviews</p>
      <div class="review-list">${cards || `<p class="wallet-empty">No reviews in this period</p>`}</div>
    </aside></div>`;
  }
  if (state.sheet === "miles") {
    const names = {
      transfer: "Transfer jobs",
      excursion: "Excursion jobs",
      round: "Round tour jobs",
      actual: "Actual mileage jobs",
      refusal: "Refused jobs",
      total: "All mileage jobs",
      hours: "Hours on jobs",
      jobs: "Jobs",
      refused: "Jobs refused",
    };
    const rows = jobsForBox(state.mileKind, state.earnFrom, state.earnTo);
    const km = rows.reduce((sum, item) => sum + item.km, 0);
    const minutes = rows.reduce((sum, item) => sum + (item.minutes || 0), 0);
    const headline = state.mileKind === "hours" ? hoursLabel(minutes) : `${km.toLocaleString()} km`;
    const list = rows.length ? rows.map((item) => {
      const code = item.refused ? `RF-${item.date.slice(5)}` : item.id.split("-20")[0];
      const value = item.refused ? `${item.km} km` : state.mileKind === "hours" ? hoursLabel(item.minutes) : `${item.km} km`;
      return `<article class="mile-line ${item.refused ? "refused" : ""}"><i></i><div><b>${esc(code)}</b><span>${esc(item.title)}</span><small>${prettyDate(item.date)}</small>${item.refused ? `<em>${esc(item.reason)}</em>` : ""}</div><strong>${value}</strong></article>`;
    }).join("") : `<p class="wallet-empty">No jobs in this period</p>`;
    return `<div class="sheet pop app"><button class="pop-dim" data-act="close-sheet" aria-label="Close"></button><aside class="mile-sheet">
      <button class="pop-grab" data-act="close-sheet" aria-label="Close"></button>
      <div class="perf-head"><div><h2>${names[state.mileKind] || "Jobs"}</h2><small>${prettyDate(state.earnFrom)} – ${prettyDate(state.earnTo)}</small></div><button class="btn ghost small" data-act="close-sheet">Close</button></div>
      <div class="mile-hero"><div><b>${headline}</b><span>${rows.length} job${rows.length === 1 ? "" : "s"}</span></div><span>${km.toLocaleString()} km</span></div>
      <div class="mile-list">${list}</div></aside></div>`;
  }
  return "";
}

const pages = {
  "/login": pageLogin,
  "/login/otp": pageOtp,
  "/forgot-password": pageForgot,
  "/set-password": pageSetPassword,
  "/register": pageRegister,
  "/register/status": pageStatus,
  "/register/submitted": pageSubmitted,
  "/home": pageHome,
  "/jobs": pageJobs,
  "/manifest": pageManifest,
  "/complete": pageComplete,
  "/map": pageMap,
  "/wallet": pageWallet,
  "/ledger": pageLedger,
  "/profile": pageProfile,
  "/personal": pagePersonal,
  "/languages": pageLanguages,
  "/notifications": pageNotifications,
  "/documents": pageDocuments,
  "/vehicle": pageVehicle,
  "/support": pageSupport,
  "/share": pageShare,
  "/calendar": pageCalendar,
  "/messages": pageMessages,
  "/safety": pageSafety,
  "/incident": pageIncident,
};

function render() {
  document.body.classList.toggle("dark", state.theme === "dark");
  const path = state.route.split("?")[0];
  if (requireSession() && !state.signedIn) {
    state.route = "/login";
  }
  const page = pages[state.route.split("?")[0]] || pages["/login"];
  document.getElementById("app").innerHTML = page() + sheet() + (state.toast ? `<div class="toast">${esc(state.toast)}</div>` : "");
  document.title = `${path === "/login" ? "Sign in" : "EHI Partner"} · Exotic Holidays International`;
  localStorage.setItem("ehi-partner-session", state.signedIn ? "in" : "out");
  localStorage.setItem("ehi-partner-duty", JSON.stringify({
    availability: state.availability === "Offline" ? "Offline" : "Available",
    leaves: state.leaves,
    leaveFrom: state.leaveFrom,
    leaveTo: state.leaveTo,
    leaveNote: state.leaveNote,
  }));
  if (state.signedIn && state.route && !state.route.startsWith("/login")) localStorage.setItem("ehi-partner-route", state.route);
  if (path === "/map") requestAnimationFrame(drawMap);
  if (path === "/home") requestAnimationFrame(drawHomeMap);
}

const HOME_TRACK = [
  [6.9278, 79.842],
  [6.9246, 79.8464],
  [6.921, 79.8506],
  [6.9172, 79.8542],
  [6.9136, 79.8564],
  [6.9104, 79.8536],
  [6.9132, 79.8492],
  [6.9176, 79.8454],
  [6.9224, 79.8426],
  [6.9266, 79.8408],
];
let map;
let homeMap;
let homeMarker;
let homeHalo;
let homeTimer;
let trackIndex = 0;
function trackPoint(latlng) {
  return { type: "Feature", geometry: { type: "Point", coordinates: [latlng[1], latlng[0]] }, properties: {} };
}
function paintUber(target) {
  const fill = {
    background: "#f4f1ea",
    park: "#d5e6c4",
    water: "#a9d6ee",
    landuse_residential: "#efe8dc",
    landcover_wood: "#d3e4c4",
    building: "#e7e0d4",
  };
  const line = {
    waterway: "#a9d6ee",
    highway_path: "#ffffff",
    highway_minor: "#ffffff",
    highway_major_inner: "#ffffff",
    highway_major_casing: "#e3dbcf",
    highway_motorway_inner: "#ffffff",
    highway_motorway_casing: "#e3dbcf",
    highway_motorway_bridge_inner: "#ffffff",
    highway_motorway_bridge_casing: "#e3dbcf",
    tunnel_motorway_inner: "#f7f4ee",
    tunnel_motorway_casing: "#e3dbcf",
  };
  Object.entries(fill).forEach(([id, color]) => {
    if (!target.getLayer(id)) return;
    target.setPaintProperty(id, id === "background" ? "background-color" : "fill-color", color);
  });
  if (target.getLayer("building")) target.setPaintProperty("building", "fill-outline-color", "#ddd4c6");
  Object.entries(line).forEach(([id, color]) => {
    if (target.getLayer(id)) target.setPaintProperty(id, "line-color", color);
  });
}
function drawHomeMap() {
  const node = document.getElementById("home-map");
  if (!node) return;
  if (homeTimer) clearInterval(homeTimer);
  if (homeMarker) homeMarker.remove();
  homeMarker = null;
  if (homeMap) homeMap.remove();
  homeMap = null;
  const path = tripPath(activeTrip());
  const start = path[trackIndex % path.length].point;
  if (typeof maplibregl === "undefined") return;
  homeMap = new maplibregl.Map({
    container: node,
    style: "https://tiles.openfreemap.org/styles/positron",
    center: [start[1], start[0]],
    zoom: 11,
    attributionControl: false,
  });
  homeMap.on("load", () => {
    paintUber(homeMap);
    const line = (coords) => ({ type: "Feature", geometry: { type: "LineString", coordinates: coords.map(([lat, lng]) => [lng, lat]) }, properties: {} });
    const trip = activeTrip();
    const livePoints = trip ? liveTransfer(trip).points : [];
    if (livePoints.length > 1) {
      homeMap.addSource("live-route", { type: "geojson", data: line(livePoints) });
      homeMap.addLayer({ id: "live-route", type: "line", source: "live-route", paint: { "line-color": "#1e2a78", "line-width": 5 } });
    }
    const puck = document.createElement("div");
    puck.className = "uber-puck";
    puck.innerHTML = `<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 3l9 20-9-5.5L5 23z" fill="#161616" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
    homeMarker = new maplibregl.Marker({ element: puck, anchor: "center" }).setLngLat([start[1], start[0]]).addTo(homeMap);
    homeMap.addSource("accuracy", { type: "geojson", data: trackPoint(start) });
    homeMap.addLayer({
      id: "accuracy",
      type: "circle",
      source: "accuracy",
      paint: { "circle-radius": 18, "circle-color": "#3b82f6", "circle-opacity": 0.25 },
    });
    const bounds = new maplibregl.LngLatBounds();
    path.forEach((step) => bounds.extend([step.point[1], step.point[0]]));
    homeMap.fitBounds(bounds, { padding: { top: 28, bottom: 196, left: 28, right: 28 }, duration: 0 });
    homeMap.resize();
  });
  homeTimer = setInterval(() => {
    if (!homeMap || !homeMap.loaded()) return;
    const steps = tripPath(activeTrip());
    trackIndex = (trackIndex + 1) % steps.length;
    const next = steps[trackIndex];
    const lngLat = [next.point[1], next.point[0]];
    if (homeMarker) homeMarker.setLngLat(lngLat);
    const source = homeMap.getSource("accuracy");
    if (source) source.setData(trackPoint(next.point));
    const place = document.getElementById("live-place");
    if (place) place.textContent = next.place;
    homeMap.easeTo({ center: lngLat, duration: 800 });
  }, 2200);
}
function drawMap() {
  const node = document.getElementById("map");
  if (!node) return;
  if (typeof L === "undefined") {
    node.innerHTML = `<div class="empty">Map tiles need a network connection. The selected route is still saved on the job.</div>`;
    return;
  }
  if (map) {
    map.remove();
    map = null;
  }
  const item = findJob(state.selectedJob);
  map = L.map(node, { zoomControl: true });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap" }).addTo(map);
  const route = item.route || [];
  const back = item.returnRoute || [];
  const lines = [];
  if (route.length > 1) {
    lines.push(L.polyline(route, { color: "#1e2a78", weight: 5 }).addTo(map));
    L.circleMarker(route[0], { radius: 8, color: "#1e2a78", fillColor: "#1e2a78", fillOpacity: 1 }).bindTooltip("Pickup", { permanent: true, direction: "top" }).addTo(map);
    L.circleMarker(route[route.length - 1], { radius: 8, color: "#9d1c34", fillColor: "#9d1c34", fillOpacity: 1 }).bindTooltip("Drop", { permanent: true, direction: "top" }).addTo(map);
  }
  if (back.length > 1) lines.push(L.polyline(back, { color: "#2454d6", weight: 4, dashArray: "8 8" }).addTo(map));
  if (lines.length) {
    const bounds = lines[0].getBounds();
    lines.slice(1).forEach((line) => bounds.extend(line.getBounds()));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 12 });
  }
}

function read(id) {
  return document.getElementById(id)?.value?.trim() || "";
}

function captureReg() {
  document.querySelectorAll("[data-reg]").forEach((node) => {
    state.reg[node.dataset.reg] = node.type === "checkbox" ? node.checked : node.value.trim();
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-go],[data-act],[data-lang]");
  if (!target) return;
  if (target.dataset.lang) {
    state.lang = target.dataset.lang;
    render();
    return;
  }
  if (target.dataset.go) {
    if (target.dataset.go === "/jobs" && state.route.startsWith("/jobs?")) state.jobsTab = "Today";
    go(target.dataset.go);
    return;
  }
  const action = target.dataset.act;
  if (action === "theme") state.theme = state.theme === "dark" ? "light" : "dark";
  if (action === "demo") { state.signedIn = true; go("/home"); return; }
  if (action === "login") {
    const id = read("partner-id");
    const password = read("password");
    if (!id) { state.error = "Partner ID is required."; render(); return; }
    if (!password) { state.error = "Enter your password."; render(); return; }
    state.partner.id = id;
    state.otp = ["", "", "", "", "", ""];
    state.otpPurpose = "login";
    go("/login/otp");
    return;
  }
  if (action === "verify-otp") {
    const code = [...document.querySelectorAll("[data-otp]")].map((node) => node.value).join("");
    if (code !== "482913") { state.error = "That code does not match. Use 482913 on this demo."; render(); return; }
    if (state.otpPurpose === "reset") { go("/set-password"); return; }
    if (state.otpPurpose === "contact") { toast("Number verified"); go("/register"); return; }
    state.signedIn = true;
    go("/home");
    return;
  }
  if (action === "resend") toast("Code sent again");
  if (action === "send-reset") { state.otpPurpose = "reset"; state.otp = ["", "", "", "", "", ""]; go("/login/otp"); return; }
  if (action === "set-password") {
    const a = read("new-pass");
    const b = read("new-pass-2");
    if (a.length < 8) { state.error = "Your new password must be at least 8 characters."; render(); return; }
    if (a !== b) { state.error = "The two passwords do not match."; render(); return; }
    state.signedIn = true;
    toast("Password set. You are signed in.");
    go("/home");
    return;
  }
  if (action === "sign-out") { state.signedIn = false; go("/login"); return; }
  if (action === "reg-type") state.reg.type = target.dataset.type;
  if (action === "reg-lang") {
    const name = target.dataset.langName;
    state.reg.languages = state.reg.languages.includes(name) ? state.reg.languages.filter((item) => item !== name) : [...state.reg.languages, name];
  }
  if (action === "reg-spec") {
    const name = target.dataset.spec;
    state.reg.specializations = state.reg.specializations.includes(name) ? state.reg.specializations.filter((item) => item !== name) : [...state.reg.specializations, name];
  }
  if (action === "reg-region" || action === "toggle-region") {
    const region = target.dataset.region;
    const list = action === "reg-region" ? state.reg.regions : state.regions;
    const next = list.includes(region) ? list.filter((item) => item !== region) : [...list, region];
    if (action === "reg-region") state.reg.regions = next; else state.regions = next;
  }
  if (action === "reg-back") { captureReg(); state.regStep = Math.max(0, state.regStep - 1); state.error = ""; }
  if (action === "reg-next") {
    captureReg();
    const steps = regSteps();
    const name = steps[state.regStep];
    const form = state.reg;
    if (name === "Personal Details") {
      if (!form.nameWithInitials) { state.error = "Name with initials is required"; render(); return; }
      if ((form.fullName || "").length < 3) { state.error = "Full name must be at least 3 characters"; render(); return; }
      if (!form.nicNumber) { state.error = "Enter a valid Sri Lankan NIC number"; render(); return; }
      if (!form.phone) { state.error = "Phone number is required"; render(); return; }
      if (!/^0\d{9}$/.test(form.phone)) { state.error = "Enter a valid Sri Lankan mobile phone number"; render(); return; }
      if (form.email && !form.email.includes("@")) { state.error = "Enter a valid email address"; render(); return; }
      if (!form.addressLine1) { state.error = "Address line 1 is required"; render(); return; }
      if (!form.town) { state.error = "Town is required"; render(); return; }
    }
    if (name === "Business & Contact") {
      if (!form.businessName) { state.error = "Business name is required"; render(); return; }
      if (!form.brNumber) { state.error = "BR number is required"; render(); return; }
      if (!form.officeAddress) { state.error = "Head office address is required"; render(); return; }
      if (!form.officeTown) { state.error = "Head office town is required"; render(); return; }
    }
    if (name === "Vehicle Details") {
      if (!form.registrationNumber) { state.error = "Registration number is required (e.g. WP CAB-1234)"; render(); return; }
      if (!form.make) { state.error = "Make is required (e.g. Toyota)"; render(); return; }
      if (!form.model) { state.error = "Model is required (e.g. HiAce)"; render(); return; }
      if (!form.colour) { state.error = "Vehicle color is required"; render(); return; }
    }
    if (name === "Guide Licence & Skills") {
      if (!form.sltdaNumber) { state.error = "SLTDA Licence Number is required"; render(); return; }
      if (!form.yearsGuiding) { state.error = "Years of guiding experience is required"; render(); return; }
      if (!form.languages.length) { state.error = "Select at least one language"; render(); return; }
    }
    if (name === "Helper / Assistant Details" && !form.helpers.length) { state.error = "Please add at least one helper to proceed."; render(); return; }
    if (name === "Availability & Service Coverage" && !form.regions.length) { state.error = "Select at least one operating region"; render(); return; }
    if (name === "Review & Submit") {
      if (!form.confirmed) { state.error = "I confirm my licence is valid and unexpired, and that every document I upload is genuine."; render(); return; }
      state.reference = state.reference || "EHI-REF-20481";
      go("/register/submitted");
      return;
    }
    state.regStep += 1;
    state.error = "";
  }
  if (action === "verify-contact") { captureReg(); state.otpPurpose = "contact"; go("/login/otp"); return; }
  if (action === "upload") toast(`${target.dataset.doc} marked for upload`);
  if (action === "add-helper") {
    captureReg();
    if (!state.reg.helperName) { state.error = "Helper name is required"; render(); return; }
    if (!state.reg.helperNic) { state.error = "The driver's NIC number"; render(); return; }
    if (!state.reg.relationship) { state.error = "Relationship is required"; render(); return; }
    state.reg.helpers.push({ name: state.reg.helperName, nic: state.reg.helperNic, relationship: state.reg.relationship });
    state.reg.helperName = "";
    state.reg.helperNic = "";
    state.reg.relationship = "";
    state.error = "";
  }
  if (action === "save-exit") { captureReg(); toast("Saved on this browser"); go("/login"); return; }
  if (action === "check-status") {
    const ref = read("status-ref");
    if (!ref) { state.error = "No application found for those details. Check the reference number, NIC or mobile you registered with."; render(); return; }
    state.reference = ref;
    state.statusHit = true;
    state.error = "";
  }
  if (action === "copy-ref") toast("Reference number copied to clipboard");
  if (action === "verify-email") { captureReg(); state.otpPurpose = "email"; go("/login/otp"); return; }
  if (action === "jobs-tab") state.jobsTab = target.dataset.tab;
  if (action === "jobs-day") {
    const day = target.dataset.day;
    if (!state.jobsAnchor) {
      state.jobsAnchor = day;
      state.jobsFrom = day;
      state.jobsTo = day;
    } else {
      state.jobsFrom = state.jobsAnchor <= day ? state.jobsAnchor : day;
      state.jobsTo = state.jobsAnchor <= day ? day : state.jobsAnchor;
      state.jobsAnchor = "";
    }
  }
  if (action === "jobs-month") {
    const [year, month] = state.jobsMonth.split("-").map(Number);
    const next = new Date(year, month - 1 + Number(target.dataset.shift), 1);
    state.jobsMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  }
  if (action === "job-filter") state.jobFilter = target.dataset.tab;
  if (action === "fleet-filter") state.fleetFilter = target.dataset.tab;
  if (action === "ticket-tab") state.ticketTab = target.dataset.tab;
  if (action === "open-rep") {
    const item = findJob(target.dataset.job);
    state.selectedJob = item.id;
    if (!item.rep) { toast("No guide assigned"); return; }
    state.sheet = "rep";
  }
  if (action === "ask-status") { state.selectedJob = target.dataset.job; state.sheet = "status"; }
  if (action === "confirm-status") {
    const item = findJob(target.dataset.job);
    item.clientStatus = item.clientStatus === "Client Transfer Complete" ? "Client Picked" : "Client Transfer Complete";
    state.sheet = "";
    toast("Client dropoff status updated successfully");
  }
  if (action === "save-contact") {
    const item = findJob(target.dataset.job);
    const phone = read("client-phone");
    if (!phone) { toast("Enter a phone number"); return; }
    item.contact = phone;
    toast("Contact submitted");
  }
  if (action === "save-room") {
    const item = findJob(target.dataset.job);
    const room = read("guest-room");
    if (!room) { toast("Enter a room number"); return; }
    item.room = room;
    toast("Room number saved");
  }
  if (action === "save-note") {
    const item = findJob(target.dataset.job);
    const text = read("driver-note");
    if (!text) { toast("Type a note first"); return; }
    item.notes.unshift({ text, time: new Date().toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) });
    toast("Note saved");
  }
  if (action === "see-upcoming") { state.jobsTab = "Upcoming"; go("/jobs"); return; }
  if (action === "earn-period") {
    state.earnFrom = target.dataset.from;
    state.earnTo = target.dataset.to;
    state.earnAnchor = "";
    state.earnMonth = target.dataset.from.slice(0, 7);
  }
  if (action === "earn-day") {
    const day = target.dataset.day;
    if (!state.earnAnchor) {
      state.earnAnchor = day;
      state.earnFrom = day;
      state.earnTo = day;
    } else {
      state.earnFrom = state.earnAnchor <= day ? state.earnAnchor : day;
      state.earnTo = state.earnAnchor <= day ? day : state.earnAnchor;
      state.earnAnchor = "";
    }
  }
  if (action === "mile-sheet") {
    state.mileKind = target.dataset.kind;
    state.sheet = "miles";
  }
  if (action === "perf-sheet") state.sheet = "perf";
  if (action === "earn-month") {
    const [year, month] = state.earnMonth.split("-").map(Number);
    const next = new Date(year, month - 1 + Number(target.dataset.shift), 1);
    state.earnMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  }
  if (action === "accept") {
    if (state.partner.driverStatus !== "Active") { toast("Switch to Active before you accept a transfer"); return; }
    const item = findJob(target.dataset.job);
    item.status = "Accepted";
    item.ladder = 1;
    item.offerUntil = 0;
    notifyOffice("Transfer accepted", `${item.id} accepted by ${state.partner.name}`);
    toast(item.specialPrice ? "You took the special-price job. The other drivers are released." : "Job accepted");
    go(`/jobs?id=${encodeURIComponent(item.id)}`);
    return;
  }
  if (action === "open-decline") { state.selectedJob = target.dataset.job; state.sheet = "decline"; }
  if (action === "decline-reason") state.declineReason = target.dataset.reason;
  if (action === "confirm-decline") {
    const item = findJob();
    item.status = "Reallocated";
    item.note = state.declineReason;
    item.offerUntil = 0;
    state.sheet = "";
    notifyOffice("Transfer rejected", `${item.id} rejected. Allocated to the next suitable driver. ${state.declineReason}`);
    toast("Rejected. This transfer goes to the next driver.");
    go("/jobs");
    return;
  }
  if (action === "close-sheet") state.sheet = "";
  if (action === "advance") {
    const item = findJob(target.dataset.job);
    if (item.ladder >= 4) { go(`/complete?id=${encodeURIComponent(item.id)}`); return; }
    item.ladder += 1;
    item.status = LADDER[item.ladder];
    toast(item.status);
  }
  if (action === "finish") {
    if (!document.getElementById("dropped")?.checked) { state.error = "Confirm the guests were dropped off."; render(); return; }
    const item = findJob(target.dataset.job);
    const km = tripKm(item);
    item.km = km.total;
    item.remarks = read("remarks");
    item.ladder = 5;
    item.status = "Completed";
    notifyOffice("Trip closed", `${item.id} · ${km.total} km. ${item.remarks}`);
    toast("Trip completed");
    go("/home");
    return;
  }
  if (action === "open-cash") { state.selectedJob = target.dataset.job || state.selectedJob; state.sheet = "cash"; }
  if (action === "collect-cash") {
    state.handoverId = target.dataset.id;
    state.sheet = "collect";
  }
  if (action === "save-collect") {
    const item = state.cash.find((entry) => entry.id === state.handoverId);
    const lkr = Number(read("got-lkr"));
    const usd = Number(read("got-usd"));
    if (!item) return;
    if (!lkr && !usd) { toast("Enter the LKR or the USD"); return; }
    item.parts = [];
    if (lkr) item.parts.push({ amount: lkr, currency: "LKR" });
    if (usd) item.parts.push({ amount: usd, currency: "USD" });
    item.amount = item.parts[0].amount;
    item.currency = item.parts[0].currency;
    item.status = "With you";
    item.collectedBy = state.partner.name;
    item.guideName = cashGuide(item);
    state.sheet = "";
    state.walletTab = "collection";
    toast(`Collected ${cashBits(item)}`);
  }
  if (action === "wallet-tab") state.walletTab = target.dataset.tab;
  if (action === "handover-cash") { state.handoverId = target.dataset.id; state.handWho = "Office"; state.sheet = "handover"; }
  if (action === "hand-who") state.handWho = target.dataset.who;
  if (action === "save-handover") {
    const item = state.cash.find((entry) => entry.id === state.handoverId);
    if (!item) return;
    const who = state.handWho || "Office";
    if (who === "Client") {
      item.officeName = item.fromName || "Client";
      item.officeDept = "";
    } else {
      const name = read("office-name");
      if (!name) { toast("Add the employee name"); return; }
      item.officeName = name;
      item.officeDept = document.getElementById("office-dept").value;
    }
    item.handWho = who;
    item.status = "Handed over";
    item.date = todayKey();
    item.guideName = item.guideName || cashGuide(item);
    state.sheet = "";
    state.walletTab = "collection";
    toast(who === "Client" ? `Handed back to ${item.officeName}` : `Handed to ${item.officeName}, ${item.officeDept}`);
  }
  if (action === "save-cash") {
    const amount = Number(read("cash-amount"));
    if (!amount) { toast("Enter an amount"); return; }
    const item = state.jobs.find((jobItem) => jobItem.id === state.selectedJob);
    const fromName = read("cash-from") || (item ? item.client : "Guest");
    state.cash.unshift({ id: `C-${Date.now()}`, jobId: item ? item.id : "Cash", title: item ? item.title : "Collected from a guest", amount, currency: document.getElementById("cash-currency").value, status: "With you", fromName, forCompany: document.getElementById("cash-company").checked });
    state.sheet = "";
    toast("Cash recorded for this trip");
  }
  if (action === "open-password") state.sheet = "password";
  if (action === "save-personal") {
    const name = read("pd-name").trim();
    const phone = read("pd-phone").trim();
    const address = read("pd-address").trim();
    const category = read("pd-category").trim();
    const owner = read("pd-owner").trim();
    const region = document.getElementById("pd-region");
    if (!name || !phone || !address) { toast("Add your name, mobile, and address"); return; }
    state.partner.name = name;
    state.partner.first = name.split(" ")[0];
    state.partner.phone = phone;
    state.partner.address = address;
    state.partner.region = region ? region.value : state.partner.region;
    state.partner.driverCategory = category || state.partner.driverCategory;
    state.partner.supplierOwner = owner || state.partner.supplierOwner;
    notifyOffice("Personal details", `${name} updated the profile. ${phone} · ${state.partner.address}, ${state.partner.region}`);
    toast("Personal details saved");
  }
  if (action === "open-cash-tab") { state.walletTab = "collection"; go("/wallet"); return; }
  if (action === "save-password") {
    const current = read("cur-pass");
    const next = read("new-pass");
    const again = read("new-pass-2");
    if (!current) { toast("Enter your current password"); return; }
    if (next.length < 8) { toast("Your new password must be at least 8 characters"); return; }
    if (next !== again) { toast("The two passwords do not match"); return; }
    state.sheet = "";
    toast("Password updated");
    return;
  }
  if (action === "driver-status") {
    state.partner.driverStatus = state.partner.driverStatus === "Active" ? "Inactive" : "Active";
    notifyOffice("Driver status", `${state.partner.name} is ${state.partner.driverStatus}`);
    toast(state.partner.driverStatus === "Active" ? "You are active for trips" : "You are inactive. The office has this.");
  }
  if (action === "share-profile") {
    const text = shareText();
    const done = () => toast("Driver profile copied");
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(done);
    else done();
  }
  if (action === "cal-day") {
    state.calPick = target.dataset.day;
    state.calMonth = target.dataset.day.slice(0, 7);
  }
  if (action === "cal-month") {
    const [year, month] = (state.calMonth || todayKey().slice(0, 7)).split("-").map(Number);
    const next = new Date(year, month - 1 + Number(target.dataset.shift), 1);
    state.calMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  }
  if (action === "cal-leave") {
    const key = target.dataset.day;
    const mark = state.calendar[key];
    if (mark === "Booked" || mark === "Offered") { toast("That day already has a transfer. Ask the office to move it."); return; }
    state.calendar[key] = mark === "Leave" ? "" : "Leave";
    if (!state.calendar[key]) delete state.calendar[key];
    notifyOffice("Availability", `${state.partner.name} marked ${key} as ${state.calendar[key] || "Available"}`);
    toast(state.calendar[key] === "Leave" ? "Leave sent to the office" : "Day set back to available");
  }
  if (action === "msg-tab") state.messageTab = target.dataset.tab;
  if (action === "send-script") {
    const text = state.scripts[Number(target.dataset.script)];
    const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    state.messages.client.push({ from: "me", text, time });
    toast("Sent to the guest");
  }
  if (action === "send-chat") {
    const text = read("chat-msg");
    if (!text) { toast("Type a message first"); return; }
    const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    const box = state.messageTab === "office" ? state.messages.office : state.messages.client;
    box.push({ from: "me", text, time });
    if (state.messageTab === "office") notifyOffice("Driver message", text);
    toast(state.messageTab === "office" ? "Sent to Transport" : "Sent to the guest");
  }
  if (action === "send-office") {
    const text = read("office-msg");
    if (!text) { toast("Write a message first"); return; }
    const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    state.messages.office.push({ from: "me", text, time });
    notifyOffice("Driver message", text);
    toast("Sent to Transport");
  }
  if (action === "kit-toggle") {
    const item = state.toolkit[Number(target.dataset.index)];
    if (!item) return;
    item.ok = !item.ok;
    notifyOffice("Toolkit", `${item.name} is ${item.ok ? "in the vehicle" : "missing"}`);
    toast(item.ok ? `${item.name} verified` : `${item.name} marked missing`);
  }
  if (action === "send-incident") {
    const kind = document.getElementById("inc-kind").value;
    const place = read("inc-place");
    const note = read("inc-note");
    const need = document.getElementById("inc-replace").checked;
    if (!place) { toast("Add the location"); return; }
    const trip = activeTrip();
    const seats = trip ? trip.pax : 1;
    const pick = state.fleet.find((vehicle) => vehicle.status === "Available" && vehicle.region === state.partner.baseRegion && vehicle.seats >= seats);
    const report = { kind, place, note, vehicle: need && pick ? `${pick.plate} · ${pick.model}` : "" };
    state.incidents.unshift(report);
    notifyOffice(kind, `${place}. ${report.vehicle ? `Replacement suggested: ${report.vehicle}.` : need ? "No free vehicle in this region." : "No replacement requested."} ${note}`);
    toast(report.vehicle ? `Office notified. Suggested ${pick.plate}` : "Office notified");
  }
  if (action === "navigate") {
    const item = findJob(target.dataset.job);
    const point = (item.droppedOff || item.departing) && item.returnRoute && item.returnRoute.length
      ? item.returnRoute[item.returnRoute.length - 1]
      : (item.route && item.route.length ? item.route[item.route.length - 1] : null);
    if (!point) { toast("This job has no map point yet"); return; }
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${point[0]},${point[1]}`, "_blank", "noopener");
    toast(`Opening the route to ${item.departing && !item.droppedOff ? item.legs && item.legs[1] ? item.legs[1].to : item.from : item.to}`);
    return;
  }
  if (action === "map-step") {
    const item = findJob(target.dataset.job);
    const step = target.dataset.step;
    if (step === "arrived") {
      item.arrived = true;
      if (item.ladder < 3) { item.ladder = 3; item.status = "Arrived"; }
      notifyOffice("Arrived", `${item.id} arrived at ${item.from}`);
      toast(`Arrived at ${item.from}`);
    }
    if (step === "picked") {
      item.pickedUp = true;
      notifyOffice("Client picked", `${item.id} picked up ${item.client}`);
      toast(`Client picked · ${item.client}`);
    }
    if (step === "departing") {
      item.departing = true;
      if (item.ladder < 4) { item.ladder = 4; item.status = "Started"; }
      notifyOffice("Departing", `${item.id} departing for ${item.to}`);
      toast(`Departing for ${item.to}`);
    }
    if (step === "drop") {
      item.droppedOff = true;
      notifyOffice("Client drop", `${item.id} dropped at ${item.to}`);
      toast(`Client dropped at ${item.to}`);
    }
  }
  if (action === "pickup") {
    const item = findJob(target.dataset.job);
    item.pickedUp = true;
    notifyOffice("Pickup", `${item.id} picked up at ${item.from}`);
    toast(`Picked up at ${item.from}`);
  }
  if (action === "dropoff") {
    const item = findJob(target.dataset.job);
    item.droppedOff = true;
    notifyOffice("Drop-off", `${item.id} dropped at ${item.to}`);
    toast(`Dropped off at ${item.to}`);
  }
  if (action === "open-expense") { state.selectedJob = target.dataset.job; state.sheet = "expense"; }
  if (action === "save-expense") {
    const amount = Number(read("ex-amount"));
    if (!amount) { toast("Enter an amount"); return; }
    const item = state.jobs.find((jobItem) => jobItem.id === state.selectedJob);
    state.expenses.unshift({ id: `X-${Date.now()}`, jobId: item ? item.id : "Expense", type: document.getElementById("ex-type").value, amount, currency: "LKR", note: read("ex-note") });
    state.sheet = "";
    toast("Expense added");
  }
  if (action === "pick-map") state.selectedJob = target.dataset.job;
  if (action === "open-leaves") {
    state.leavePick = liveStatus();
    state.sheet = "leaves";
  }
  if (action === "avail") {
    state.leaveFrom = read("leave-from") || state.leaveFrom;
    state.leaveTo = read("leave-to") || state.leaveTo;
    state.leaveNote = document.getElementById("leave-note") ? read("leave-note") : state.leaveNote;
    state.leavePick = target.dataset.avail;
  }
  if (action === "save-leave") {
    if (state.leavePick === "On leave") {
      const from = read("leave-from");
      const to = read("leave-to");
      if (!from || !to) { toast("Add the leave dates"); return; }
      if (to < from) { toast("End date has to be on or after the start date"); return; }
      state.leaveFrom = from;
      state.leaveTo = to;
      state.leaveNote = read("leave-note");
      if (!state.leaveNote) { toast("Add a remark for this leave"); return; }
      const same = state.leaves.find((item) => item.from === from && item.to === to);
      if (same) same.note = state.leaveNote;
      else state.leaves.unshift({ from, to, note: state.leaveNote });
      if (state.availability === "On leave") state.availability = "Available";
      const live = activeLeave();
      state.sheet = "";
      toast(live ? `On leave ${leaveSpan(live)}` : `Leave saved for ${leaveSpan({ from, to })}. You are ${liveStatus()} today.`);
    } else {
      state.availability = state.leavePick;
      state.sheet = "";
      const live = activeLeave();
      toast(live ? `Still on leave ${leaveSpan(live)}` : `Status set to ${state.availability}`);
    }
  }
  if (action === "remove-leave") {
    const index = Number(target.dataset.index);
    const removed = state.leaves[index];
    if (!removed) return;
    state.leaves.splice(index, 1);
    toast(`Removed ${leaveSpan(removed)}`);
    return;
  }
  if (action === "save-avail") {
    if (!state.regions.length) { toast("Select at least one operating region"); return; }
    toast(`Availability: ${state.availability}`);
  }
  render();
});

document.addEventListener("input", (event) => {
  if (event.target.id === "job-search") {
    state.jobQuery = event.target.value;
    const pos = event.target.selectionStart;
    render();
    const node = document.getElementById("job-search");
    if (node) { node.focus(); node.setSelectionRange(pos, pos); }
    return;
  }
  if (event.target.id === "driver-note") {
    const count = document.getElementById("note-count");
    if (count) count.textContent = String(event.target.value.length);
    return;
  }
  const index = event.target.dataset.otp;
  if (index == null) return;
  event.target.value = event.target.value.replace(/\D/g, "").slice(-1);
  const next = document.querySelector(`[data-otp="${Number(index) + 1}"]`);
  if (event.target.value && next) next.focus();
});

document.addEventListener("change", (event) => {
  if (event.target.id === "ticket-file" || event.target.id === "media-file") {
    const file = event.target.files && event.target.files[0];
    const item = findJob(state.selectedJob);
    if (!file || !item) return;
    const entry = { name: file.name, time: new Date().toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) };
    if (event.target.id === "ticket-file") { item.tickets.unshift(entry); state.ticketTab = "submitted"; toast("Ticket submitted"); }
    else { item.media.unshift(entry); toast("Photo added"); }
    return;
  }
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const key = event.target.id === "profile-photo" ? "photo" : "vehiclePhoto";
  const reader = new FileReader();
  reader.onload = () => {
    state.partner[key] = reader.result;
    render();
  };
  reader.readAsDataURL(file);
});

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace(/^#/, "");
  if (state.signedIn && (!hash || hash === "/login" || hash.startsWith("/login/"))) {
    state.route = "/home";
    if (hash !== "/home") location.hash = "/home";
    else render();
    return;
  }
  state.route = hash || (state.signedIn ? "/home" : "/login");
  render();
});

function boot() {
  const hash = location.hash.replace(/^#/, "");
  const session = localStorage.getItem("ehi-partner-session");
  if (session === "out") {
    state.signedIn = false;
    state.route = hash || "/login";
    return;
  }
  state.signedIn = true;
  try {
    const duty = JSON.parse(localStorage.getItem("ehi-partner-duty") || "null");
    if (duty) {
      state.leaves = Array.isArray(duty.leaves) ? duty.leaves : [];
      state.leaveFrom = duty.leaveFrom || "";
      state.leaveTo = duty.leaveTo || "";
      state.leaveNote = duty.leaveNote || "";
      state.availability = duty.availability === "Offline" ? "Offline" : "Available";
    }
  } catch (error) { /* keep the default duty */ }
  const saved = localStorage.getItem("ehi-partner-route") || "/home";
  const route = hash && hash !== "/login" && !hash.startsWith("/login/") ? hash : (saved.startsWith("/login") ? "/home" : saved);
  state.route = route || "/home";
  if (location.hash.replace(/^#/, "") !== state.route) location.hash = state.route;
}

setInterval(() => {
  const clock = document.getElementById("home-clock");
  const hello = document.getElementById("home-hello");
  if (!clock || !hello) return;
  const line = helloLine();
  hello.textContent = line.hello;
  clock.textContent = `${line.date} · ${line.time}${line.jobsToday ? ` · ${line.jobsToday} jobs today` : ""}`;
}, 1000);

setInterval(() => {
  document.querySelectorAll("[data-offer]").forEach((node) => {
    const item = state.jobs.find((job) => job.id === node.dataset.offer);
    if (item && item.status === "Pending") node.textContent = offerLeft(item);
  });
  let moved = false;
  state.jobs.forEach((item) => {
    if (item.status === "Pending" && item.offerUntil && Date.now() > item.offerUntil) {
      item.offerUntil = 0;
      if (item.offerHold === "office") {
        if (!item.officeChased) {
          item.officeChased = true;
          notifyOffice("Pending follow-up", `${item.id} has had no accept or decline for 6 hours.`);
          moved = "office";
        }
      } else {
        item.status = "Reallocated";
        item.note = "No accept within 15 minutes. Sent to the next online driver.";
        notifyOffice("Transfer reallocated", `${item.id} moved to the next online driver.`);
        moved = "driver";
      }
    }
  });
  if (moved === "office") toast("Transport was notified. This transfer is still with you.");
  if (moved === "driver") toast("A same-day transfer went to the next driver after 15 minutes");
}, 1000);

boot();
render();
