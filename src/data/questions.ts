export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: 'General Knowledge' | 'Quantitative' | 'English' | 'GIS Knowledge' | 'Logical Reasoning' | 'Current Affairs' | 'Security Awareness' | 'Law & Policy' | 'Border Operations' | 'Scenario' | 'Ethics & Leadership' | 'International Affairs';
}

export const quizQuestions: Question[] = [
  // NEW OFFICER SCENARIOS & CURRENT AFFAIRS (271-320)
  {
    id: 271,
    category: 'Scenario',
    text: "An adult traveler arrives at the Aflao border with a 5-year-old child. The adult claims to be the uncle but has no legal guardianship documents. What is the correct protocol?",
    options: [
      "Allow entry if the child looks comfortable with the adult",
      "Detain the adult and refer to the Anti-Human Trafficking Unit for verification",
      "Ask the child if they know the adult and allow entry if they say yes",
      "Charge a standard 'family verification' fee and allow entry"
    ],
    correctAnswer: 1,
    explanation: "Standard GIS protocol requires immediate referral to specialized units when a minor is traveling with a non-parent without legal documentation to prevent child trafficking."
  },
  {
    id: 272,
    category: 'Current Affairs',
    text: "Who is the current Comptroller-General of the Ghana Immigration Service as of late 2024?",
    options: ["Mr. Kwame Asuah Takyi", "Mr. Isaac Owusu Mensah", "Mrs. Edith Peniel-Kwofie", "Mr. Laud Kwesi Ofori Affrifah"],
    correctAnswer: 0,
    explanation: "Mr. Kwame Asuah Takyi is the Comptroller-General of the GIS, leading the service through major modernizations."
  },
  {
    id: 273,
    category: 'Current Affairs',
    text: "Which Ghanaian region recently shared high-security alerts regarding the spillover of extremist activities from the Sahel?",
    options: ["Upper East Region", "Greater Accra Region", "Western Region", "Central Region"],
    correctAnswer: 0,
    explanation: "The Upper East and Upper West regions are on high alert due to their proximity to Burkina Faso and the threat of violent extremism."
  },
  {
    id: 274,
    category: 'Law & Policy',
    text: "Under the Immigration Act 2000 (Act 573), an immigration officer has the power to arrest without a warrant if they suspect a person of being a prohibited immigrant. Which section supports this?",
    options: ["Section 12", "Section 52", "Section 2", "Section 105"],
    correctAnswer: 1,
    explanation: "Section 52 of Act 573 grants officers the power of search and arrest without a warrant under specific reasonable suspicions."
  },
  {
    id: 275,
    category: 'Scenario',
    text: "While on duty at Terminal 3, KIA, a passenger offers you an expensive watch as a 'gift' for helping them navigate a visa issue. What is the most professional response?",
    options: [
      "Accept it but don't tell your colleagues",
      "Politely decline and explain that GIS officers are prohibited from accepting gifts",
      "Take it and donate the value to the Service",
      "Accept it only if it is after your shift"
    ],
    correctAnswer: 1,
    explanation: "The GIS Code of Conduct strictly prohibits the acceptance of any gifts or gratuities that could influence or appear to influence official duties."
  },
  {
    id: 276,
    category: 'Scenario',
    text: "You notice a senior officer allowing a group of travelers to bypass the biometric clearance. What should your primary action be?",
    options: [
      "Ignore it because they are your superior",
      "Confront the senior officer in front of the travelers",
      "Report the incident through the internal confidential reporting (Whistleblowing) channel",
      "Allow others to bypass as well to be fair"
    ],
    correctAnswer: 2,
    explanation: "Professional integrity requires reporting security breaches through the proper official channels, regardless of the rank of the individual involved."
  },
  {
    id: 277,
    category: 'Border Operations',
    text: "What does 'E-Gate' technology, recently being expanded at Ghana's airports, primarily aim to achieve?",
    options: [
      "To charge more fees",
      "To automate the immigration clearance for Ghanaian passport holders",
      "To replace all immigration officers",
      "To check for overweight luggage"
    ],
    correctAnswer: 1,
    explanation: "E-Gates allow for automated self-clearance, reducing congestion and allowing officers to focus on high-risk travelers."
  },
  {
    id: 278,
    category: 'Current Affairs',
    text: "Which country recently withdrew from ECOWAS, impacting the free movement of persons in the sub-region?",
    options: ["Nigeria", "Mali, Burkina Faso, and Niger", "Togo", "Ivory Coast"],
    correctAnswer: 1,
    explanation: "The withdrawal of the AES states (Mali, Burkina Faso, and Niger) from ECOWAS has significant implications for the 'Free Movement' protocol."
  },
  {
    id: 279,
    category: 'Scenario',
    text: "A foreign national presents a passport that looks genuine but is not being read by the MRZ (Machine Readable Zone) scanner. What is your next move?",
    options: [
      "Manually type in the details and allow entry",
      "Inform the traveler that their passport is fake and deport them",
      "Refer the document to the Forensic Unit for secondary inspection",
      "Tell them to go back and get a new passport"
    ],
    correctAnswer: 2,
    explanation: "Technical failure in scanning requires a secondary inspection by document specialists rather than immediate assumptions."
  },
  {
    id: 280,
    category: 'Ethics & Leadership',
    text: "A subordinate officer consistently arrives 15 minutes late to their shift at the border. As the Officer-in-Charge, what is the best first step?",
    options: [
      "Immediately recommend them for dismissal",
      "Shout at them in the presence of travelers to set an example",
      "Have a private counseling session to understand the cause and issue a verbal warning",
      "Ignore it as long as they work hard"
    ],
    correctAnswer: 2,
    explanation: "Leadership involves fair disciplinary progression, starting with private counseling before formal escalation."
  },
  {
    id: 281,
    category: 'Current Affairs',
    text: "Ghana's 'Integrated Border Management' strategy involves cooperation between which agencies?",
    options: [
      "GIS and GPS only",
      "GIS, GRA-Customs, and GAF",
      "GIS and Ministry of Education",
      "Only the GIS"
    ],
    correctAnswer: 1,
    explanation: "IBM requires the collaboration of Immigration, Customs, and the Armed Forces for comprehensive border security."
  },
  {
    id: 282,
    category: 'Scenario',
    text: "During a routine patrol, you find a group of 20 people crossing an 'unapproved route'. They claim they are only going to a nearby farm across the border. What is the correct action?",
    options: [
      "Let them go since it's just farming",
      "Arrest and escort them to the nearest border post for screening and documentation",
      "Collect a 'passage fee' from them",
      "Tell them to use the main road next time and let them go"
    ],
    correctAnswer: 1,
    explanation: "All cross-border movement must be through approved routes; undocumented movement must be officially processed regardless of the reason."
  },
  {
    id: 283,
    category: 'Law & Policy',
    text: "Which of the following ranks is directly above 'Assistant Superintendent' in the GIS?",
    options: ["Deputy Superintendent", "Superintendent", "Inspector", "Chief Superintendent"],
    correctAnswer: 0,
    explanation: "The rank structure of the GIS follows a specific hierarchy; Deputy Superintendent follows Assistant Superintendent."
  },
  {
    id: 284,
    category: 'Scenario',
    text: "A traveler's visa has expired by exactly one day due to a flight cancellation. How should an officer handle this at the departure desk?",
    options: [
      "Arrest them for overstaying",
      "Refer to the supervisor to assess the flight cancellation proof and potentially waive the fine",
      "Demand an immediate cash payment for the overstay",
      "Pretend you didn't see the date"
    ],
    correctAnswer: 1,
    explanation: "Extenuating circumstances like flight cancellations are handled via supervisory discretion and official documentation, not on-the-spot cash collections."
  },
  {
    id: 285,
    category: 'Current Affairs',
    text: "Who is the current Minister for the Interior of Ghana?",
    options: ["Hon. Ambrose Dery", "Hon. Henry Quartey", "Hon. Albert Kan-Dapaah", "Hon. Dominic Nitiwul"],
    correctAnswer: 1,
    explanation: "Hon. Henry Quartey is the current Minister for the Interior as of the latest cabinet reshuffle in 2024."
  },
  {
    id: 286,
    category: 'Scenario',
    text: "A traveler from a high-risk country for infectious diseases arrives at the border but has no Yellow Fever card. What is the protocol?",
    options: [
      "Refuse entry immediately",
      "Allow entry and ask them to visit a clinic later",
      "Refer to the Port Health officials on-site for isolation or vaccination",
      "Tell them to pay a fine and enter"
    ],
    correctAnswer: 2,
    explanation: "Immigration works closely with Port Health; medical requirements are strictly handled by health officials at the point of entry."
  },
  {
    id: 287,
    category: 'Border Operations',
    text: "What is the meaning of the 'Black Star' on the Ghana Immigration Service logo?",
    options: [
      "The darkness of the night",
      "The hope and honor of Africa",
      "The mining industry",
      "The number of regions"
    ],
    correctAnswer: 1,
    explanation: "The Black Star is the Lodestar of African Freedom and represents the hope and honor of the continent."
  },
  {
    id: 288,
    category: 'Ethics & Leadership',
    text: "Which of these is the MOST critical quality of an Immigration Officer at a lone border post?",
    options: ["Physical speed", "Self-discipline and integrity", "Handwriting", "Loudness"],
    correctAnswer: 1,
    explanation: "Officers at remote posts work with less supervision, making self-discipline and integrity the most critical traits."
  },
  {
    id: 289,
    category: 'Scenario',
    text: "A diplomatic passport holder refuses to have their bags searched, citing diplomatic immunity. What is the correct legal stance?",
    options: [
      "Search the bags anyway",
      "Diplomatic bags are inviolable and cannot be searched or detained if properly marked",
      "Arrest the diplomat",
      "Only search if you think they have food"
    ],
    correctAnswer: 1,
    explanation: "Under the Vienna Convention, properly identified diplomatic bags are protected from search or seizure."
  },
  {
    id: 290,
    category: 'Current Affairs',
    text: "Ghana is currently implementing a 'Visa on Arrival' policy for which group of people during the 'December in GH' period?",
    options: ["Only Europeans", "Only Nigerians", "Global African Diaspora and African nationals", "Only Americans"],
    correctAnswer: 2,
    explanation: "Ghana often implements simplified visa policies for the African Diaspora to promote tourism and the 'Beyond the Return' initiative."
  },
  {
    id: 291,
    category: 'Law & Policy',
    text: "What is the primary function of the 'Enforcement Unit' of the GIS?",
    options: [
      "To issue visas",
      "To track and apprehend illegal immigrants and law violators",
      "To cook for the officers",
      "To build new border posts"
    ],
    correctAnswer: 1,
    explanation: "The Enforcement Unit is responsible for the internal monitoring and removal of persons who violate immigration laws."
  },
  {
    id: 292,
    category: 'Scenario',
    text: "You find a traveler with a passport from a country that Ghana does not have diplomatic relations with. What do you do?",
    options: [
      "Confiscate the passport",
      "Follow the specific directives from the Ministry of Foreign Affairs regarding 'non-recognized' travel documents",
      "Let them in if they have money",
      "Tell them they don't exist"
    ],
    correctAnswer: 1,
    explanation: "Entry on unrecognized documents is a complex legal area requiring adherence to high-level Ministry directives."
  },
  {
    id: 293,
    category: 'Current Affairs',
    text: "Which border post is the main gateway between Ghana and Burkina Faso?",
    options: ["Aflao", "Elubo", "Paga", "Seme"],
    correctAnswer: 2,
    explanation: "Paga is the primary northern gateway between Ghana and Burkina Faso."
  },
  {
    id: 294,
    category: 'Border Operations',
    text: "What is 'Secondary Inspection' in immigration?",
    options: [
      "Checking the traveler's luggage twice",
      "A more detailed interview and document check in a private office",
      "Checking the officer's uniform",
      "The second time a traveler visits Ghana"
    ],
    correctAnswer: 1,
    explanation: "Secondary inspection is used when the primary officer has doubts that require deeper investigation."
  },
  {
    id: 295,
    category: 'Scenario',
    text: "A traveler claims to be a Ghanaian citizen but has no passport, only a Ghana Card and a local birth certificate. Can they be cleared?",
    options: [
      "No, they need a passport",
      "Yes, the Ghana Card is now a valid travel document for entry into Ghana for citizens",
      "Only if they pay a fine",
      "Only if they can speak Twi"
    ],
    correctAnswer: 1,
    explanation: "The Ghana Card is officially recognized for the entry of citizens into Ghana at major ports."
  },
  {
    id: 296,
    category: 'Ethics & Leadership',
    text: "What is the motto of the Ghana Immigration Service?",
    options: ["Service with Integrity", "Friendship and Vigilance", "Discipline and Hardwork", "Security and Peace"],
    correctAnswer: 1,
    explanation: "The GIS motto 'Friendship and Vigilance' reflects the balance between welcoming travelers and staying alert for threats."
  },
  {
    id: 297,
    category: 'Current Affairs',
    text: "Which GIS training school is located in the Central Region?",
    options: [
      "Immigration Service Academy and Training School (ISATS)",
      "Police College",
      "Asutsuare Military Camp",
      "GIMPA"
    ],
    correctAnswer: 0,
    explanation: "ISATS is located in Assin Fosu, Central Region, where recruits and officers undergo training."
  },
  {
    id: 298,
    category: 'Scenario',
    text: "You find a 'Refugee Identity Card' in a traveler's bag that they didn't declare. They are traveling on a standard passport. What is the implication?",
    options: [
      "It means they are a spy",
      "It suggests they may have been granted asylum elsewhere and are now 'refugee-in-orbit', requiring careful status check",
      "It has no implication",
      "Give them a prize for surviving"
    ],
    correctAnswer: 1,
    explanation: "Hidden refugee status can affect the legality of travel and requires verification of their current legal residence."
  },
  {
    id: 299,
    category: 'Law & Policy',
    text: "What is the maximum validity of a standard Ghanaian tourist visa?",
    options: ["1 month", "3 months", "6 months", "1 year"],
    correctAnswer: 1,
    explanation: "Standard tourist visas are typically issued for an initial stay of up to 3 months (90 days)."
  },
  {
    id: 300,
    category: 'Current Affairs',
    text: "Ghana recently launched the 'e-Visa' portal. What is its primary benefit?",
    options: [
      "To make visas cheaper",
      "To allow travelers to apply and receive visas online before arrival",
      "To stop people from traveling",
      "To increase the number of physical embassies"
    ],
    correctAnswer: 1,
    explanation: "e-Visas modernize the process, allowing for remote application and faster processing."
  },
  {
    id: 301,
    category: 'Scenario',
    text: "An airline brings a passenger who is refused entry (Inadmissible). Who is responsible for the cost of their return flight?",
    options: ["The passenger", "The Ghana Government", "The Airline", "The Officer"],
    correctAnswer: 2,
    explanation: "Under international aviation law (IATA/ICAO), the carrier that brings an inadmissible passenger is responsible for their removal."
  },
  {
    id: 302,
    category: 'Border Operations',
    text: "Which of these is a 'Biometric' identifier used by the GIS?",
    options: ["Favorite color", "Fingerprints and Facial features", "Handwriting style", "Height in cm"],
    correctAnswer: 1,
    explanation: "GIS uses fingerprints and facial recognition as primary biometric identifiers."
  },
  {
    id: 303,
    category: 'Current Affairs',
    text: "What is the name of the operation aimed at securing Ghana's borders against terrorism in the north?",
    options: ["Operation Halt", "Operation Koudanlgou", "Operation Cowleg", "Operation Clean Front"],
    correctAnswer: 1,
    explanation: "Operation Koudanlgou is a joint regional operation (including Ghana) to fight cross-border terrorism."
  },
  {
    id: 304,
    category: 'Scenario',
    text: "A passenger's name appears on a 'Stop List' (Watchlist). What is your first priority?",
    options: [
      "Shout 'Arrest him!'",
      "Discreetly alert your supervisor and the security agencies without alerting the passenger",
      "Ask the passenger why they are on the list",
      "Delete the name to avoid trouble"
    ],
    correctAnswer: 1,
    explanation: "Watchlist hits must be handled with extreme discretion to prevent the suspect from fleeing or causing a scene."
  },
  {
    id: 305,
    category: 'Ethics & Leadership',
    text: "What does the 'Sword' on the GIS officer's cap badge symbolize?",
    options: ["War", "Justice and Authority", "Farming", "Wealth"],
    correctAnswer: 1,
    explanation: "The sword symbolizes the authority of the state and the pursuit of justice in enforcing laws."
  },
  {
    id: 306,
    category: 'Current Affairs',
    text: "How many regions does Ghana currently have?",
    options: ["10", "12", "16", "20"],
    correctAnswer: 2,
    explanation: "Ghana has 16 administrative regions following the 2018 referendum."
  },
  {
    id: 307,
    category: 'Scenario',
    text: "A traveler is found with a large sum of undeclared cash ($50,000) at the border. What is the immigration officer's role?",
    options: [
      "Keep the money",
      "Detain the passenger and hand over to the GRA-Customs and Financial Intelligence Centre",
      "Allow them to pass if they give you $100",
      "Tell them to hide it better"
    ],
    correctAnswer: 1,
    explanation: "Immigration officers work with Customs to enforce currency declaration laws; suspicious large sums must be reported."
  },
  {
    id: 308,
    category: 'Border Operations',
    text: "What is an 'Interpol Red Notice'?",
    options: [
      "A request to arrest a wanted person pending extradition",
      "A warning about a missing person",
      "A notice for a new job",
      "A traffic light signal"
    ],
    correctAnswer: 0,
    explanation: "Red Notices are for wanted fugitives and are critical for border officers to monitor."
  },
  {
    id: 309,
    category: 'Law & Policy',
    text: "Which GIS rank wears 'Three Stars' on their shoulder?",
    options: ["Assistant Superintendent", "Deputy Superintendent", "Superintendent", "Inspector"],
    correctAnswer: 2,
    explanation: "In the GIS rank structure, a Superintendent (Supt.) wears three stars."
  },
  {
    id: 310,
    category: 'Current Affairs',
    text: "Which country is to the West of Ghana?",
    options: ["Togo", "Burkina Faso", "Ivory Coast", "Nigeria"],
    correctAnswer: 2,
    explanation: "Ivory Coast (Côte d'Ivoire) is Ghana's neighbor to the West."
  },
  {
    id: 311,
    category: 'Scenario',
    text: "You notice a traveler who is sweating profusely, avoiding eye contact, and has no luggage for a 2-week trip. What does this profile suggest?",
    options: [
      "They are just hot",
      "High-risk indicator for smuggling or trafficking; require secondary search",
      "They are a very efficient traveler",
      "They forgot their bags at home"
    ],
    correctAnswer: 1,
    explanation: "Behavioral indicators combined with illogical travel patterns (no bags for a long stay) are key risk markers."
  },
  {
    id: 312,
    category: 'Ethics & Leadership',
    text: "What is the 'Chain of Command'?",
    options: [
      "A literal chain used for prisoners",
      "The line of authority and responsibility along which orders are passed",
      "A type of jewelry for officers",
      "The name of a GIS operation"
    ],
    correctAnswer: 1,
    explanation: "The chain of command is essential for discipline and effective communication in a paramilitary organization."
  },
  {
    id: 313,
    category: 'Current Affairs',
    text: "Which town is the administrative capital of the Oti Region?",
    options: ["Ho", "Dambai", "Goaso", "Sefwi Wiawso"],
    correctAnswer: 1,
    explanation: "Dambai is the capital of the Oti Region."
  },
  {
    id: 314,
    category: 'Border Operations',
    text: "What is 'Transnational Organized Crime'?",
    options: [
      "Crime that happens in one town",
      "Crime that crosses national borders and involves multiple countries",
      "A type of political party",
      "Legal international business"
    ],
    correctAnswer: 1,
    explanation: "Immigration officers are the first line of defense against transnational crimes like human and drug trafficking."
  },
  {
    id: 315,
    category: 'Scenario',
    text: "An elderly traveler collapses in the arrivals hall. What is your first priority?",
    options: [
      "Check their passport",
      "Call for medical assistance/emergency services and secure the immediate area",
      "Ask them for their visa",
      "Take a photo for the news"
    ],
    correctAnswer: 1,
    explanation: "Life and safety take priority over administrative checks in a medical emergency."
  },
  {
    id: 316,
    category: 'Current Affairs',
    text: "Which sea is to the South of Ghana?",
    options: ["The Red Sea", "The Mediterranean Sea", "The Gulf of Guinea (Atlantic Ocean)", "The Dead Sea"],
    correctAnswer: 2,
    explanation: "Ghana's southern coast is bordered by the Gulf of Guinea."
  },
  {
    id: 317,
    category: 'Law & Policy',
    text: "A 'Residence Permit' in Ghana allows a foreigner to:",
    options: [
      "Vote in elections",
      "Live in Ghana for a specified period for work, school, or retirement",
      "Become a Chief",
      "Travel without a passport"
    ],
    correctAnswer: 1,
    explanation: "Residence permits are for long-term stays but do not grant political rights like voting."
  },
  {
    id: 318,
    category: 'Scenario',
    text: "A traveler presents a passport where the photo looks slightly raised or 'pasted over'. What is this a sign of?",
    options: [
      "A new passport design",
      "Photo substitution (a type of forgery)",
      "The traveler has gained weight",
      "Good passport protection"
    ],
    correctAnswer: 1,
    explanation: "Photo substitution is one of the most common methods of altering a genuine passport."
  },
  {
    id: 319,
    category: 'Ethics & Leadership',
    text: "Why is 'Punctuality' emphasized in the GIS?",
    options: [
      "To annoy the officers",
      "To ensure border posts are never unmanned and security is constant",
      "To show off the watches",
      "Because the CG likes it"
    ],
    correctAnswer: 1,
    explanation: "Border security is 24/7; lateness creates gaps in national security."
  },
  {
    id: 320,
    category: 'Current Affairs',
    text: "Which Ghanaian region is famous for the 'Mole National Park'?",
    options: ["Northern Region", "Savannah Region", "Upper West Region", "North East Region"],
    correctAnswer: 1,
    explanation: "Mole National Park is now located in the Savannah Region following the regional reorganization."
  },

  // OFFICER CADRE QUESTIONS (201-270)
  {
    id: 201,
    category: 'Quantitative',
    text: "If migration flow rises 20% yearly, growth after 3 years is approximately?",
    options: ["60%", "72.8%", "80%", "90%"],
    correctAnswer: 1
  },
  {
    id: 202,
    category: 'Quantitative',
    text: "Ratio of officers to travelers is 1:80. For 2,400 travelers, how many officers are needed?",
    options: ["25", "28", "30", "32"],
    correctAnswer: 2
  },
  {
    id: 203,
    category: 'General Knowledge',
    text: "Which term best describes “due diligence”?",
    options: ["Speed", "Careful verification", "Delay", "Authority"],
    correctAnswer: 1
  },
  {
    id: 204,
    category: 'Logical Reasoning',
    text: "Complete the series: 5, 15, 45, 135, ?",
    options: ["180", "225", "405", "675"],
    correctAnswer: 2
  },
  {
    id: 205,
    category: 'Logical Reasoning',
    text: "Which logical fallacy is present in: 'All smugglers use roads. He used a road, so he is a smuggler.'?",
    options: ["Circular reasoning", "Faulty generalization", "Ad hominem", "Slippery slope"],
    correctAnswer: 1
  },
  {
    id: 206,
    category: 'Quantitative',
    text: "A 30% rise followed by a 30% fall results in a net change of:",
    options: ["0%", "9% increase", "9% decrease", "6% decrease"],
    correctAnswer: 2
  },
  {
    id: 207,
    category: 'English',
    text: "The best synonym for “scrutinize” is:",
    options: ["Glance", "Examine", "Ignore", "Approve"],
    correctAnswer: 1
  },
  {
    id: 208,
    category: 'Security Awareness',
    text: "A data inconsistency in a manifest is primarily a:",
    options: ["Clerical error", "Risk indicator", "Routine occurrence", "System bug"],
    correctAnswer: 1
  },
  {
    id: 209,
    category: 'Quantitative',
    text: "If 10% of 8,000 travelers are flagged, how many travelers is that?",
    options: ["8", "80", "800", "8000"],
    correctAnswer: 2
  },
  {
    id: 210,
    category: 'Security Awareness',
    text: "Which of these improves decision accuracy in immigration?",
    options: ["Gut feeling", "Speed of processing", "Evidence-based assessment", "Rank of the officer"],
    correctAnswer: 2
  },
  {
    id: 211,
    category: 'Logical Reasoning',
    text: "Identify the odd one out:",
    options: ["Visa", "Passport", "Permit", "Invoice"],
    correctAnswer: 3
  },
  {
    id: 212,
    category: 'Security Awareness',
    text: "An “operational lapse” usually means:",
    options: ["System upgrade", "Failure in procedure", "Legal reform", "Officer promotion"],
    correctAnswer: 1
  },
  {
    id: 213,
    category: 'Security Awareness',
    text: "Time-series analysis in border control helps with:",
    options: ["Budgeting", "Trend prediction", "Officer training", "Public relations"],
    correctAnswer: 1
  },
  {
    id: 214,
    category: 'Quantitative',
    text: "If 5 officers take 6 hours to complete a task (30 work hrs), how many hours will 10 officers take?",
    options: ["1 hr", "2 hrs", "3 hrs", "12 hrs"],
    correctAnswer: 2
  },
  {
    id: 215,
    category: 'Security Awareness',
    text: "What is most important for an officer in a crisis situation?",
    options: ["Physical strength", "Calm judgment", "Loud voice", "Speed of running"],
    correctAnswer: 1
  },
  {
    id: 216,
    category: 'Logical Reasoning',
    text: "Deduction: All deportees violated law. Some violators are tourists. Conclusion: Some tourists may be deportees.",
    options: ["True", "False", "Cannot determine", "Only on holidays"],
    correctAnswer: 0
  },
  {
    id: 217,
    category: 'Quantitative',
    text: "If the detection rate is 80% of 50 cases, how many cases were detected?",
    options: ["30", "40", "45", "50"],
    correctAnswer: 1
  },
  {
    id: 218,
    category: 'Ethics & Leadership',
    text: "Conflict resolution in a team should begin with:",
    options: ["Suspension", "Communication", "Reporting to Minister", "Ignoring the issue"],
    correctAnswer: 1
  },
  {
    id: 219,
    category: 'Security Awareness',
    text: "A risk matrix measures:",
    options: ["Officer height", "Probability & impact", "Traveler age", "Number of visas"],
    correctAnswer: 1
  },
  {
    id: 220,
    category: 'Security Awareness',
    text: "Which of the following is a key indicator of deception during an interview?",
    options: ["Looking at the floor", "Inconsistent narrative", "Wearing a suit", "Speaking a foreign language"],
    correctAnswer: 1
  },
  {
    id: 221,
    category: 'Law & Policy',
    text: "What is the primary immigration law of Ghana?",
    options: ["Act 573", "Act 908", "Act 101", "Constitution 1992"],
    correctAnswer: 0
  },
  {
    id: 222,
    category: 'Law & Policy',
    text: "Who has the authority to grant a visa extension in Ghana?",
    options: ["Ghana Police", "Ghana Immigration Service", "Ministry of Health", "District Assembly"],
    correctAnswer: 1
  },
  {
    id: 223,
    category: 'Law & Policy',
    text: "A 'prohibited immigrant' in Ghana includes anyone who is a:",
    options: ["Doctor", "Security threat", "Student", "Tourist"],
    correctAnswer: 1
  },
  {
    id: 224,
    category: 'Law & Policy',
    text: "A deportation order in Ghana is officially issued by the:",
    options: ["Comptroller-General", "Minister of Interior", "Chief Justice", "Speaker of Parliament"],
    correctAnswer: 1
  },
  {
    id: 225,
    category: 'Law & Policy',
    text: "Under ECOWAS protocols, how many days can a citizen stay in another member state without a permit?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctAnswer: 2
  },
  {
    id: 226,
    category: 'Law & Policy',
    text: "What is the likely penalty for overstaying a visa in Ghana?",
    options: ["Promotion", "Fine or deportation", "Citizenship", "Award"],
    correctAnswer: 1
  },
  {
    id: 227,
    category: 'Law & Policy',
    text: "A work permit is specifically required for:",
    options: ["Short visits", "Foreign employment", "Religious worship", "Studying local history"],
    correctAnswer: 1
  },
  {
    id: 228,
    category: 'Law & Policy',
    text: "Diplomatic immunity is governed globally by the:",
    options: ["Geneva Convention", "Vienna Convention", "Accra Accord", "UN Charter"],
    correctAnswer: 1
  },
  {
    id: 229,
    category: 'Law & Policy',
    text: "To be granted asylum, a seeker must primarily show:",
    options: ["Lack of money", "Fear of persecution", "Desire for education", "Love for Ghana"],
    correctAnswer: 1
  },
  {
    id: 230,
    category: 'Law & Policy',
    text: "Human trafficking laws are designed primarily to protect:",
    options: ["Smugglers", "Victims", "Travel agents", "Hotels"],
    correctAnswer: 1
  },
  {
    id: 231,
    category: 'Border Operations',
    text: "The primary aim of border control is:",
    options: ["Collecting taxes", "National security", "Promoting tourism", "Improving infrastructure"],
    correctAnswer: 1
  },
  {
    id: 232,
    category: 'Border Operations',
    text: "A 'red flag' in luggage screening would be a:",
    options: ["Bottle of water", "False compartment", "Spare tire", "Heavy jacket"],
    correctAnswer: 1
  },
  {
    id: 233,
    category: 'Border Operations',
    text: "What does 'Advance Passenger Information' (API) help with?",
    options: ["Ticket pricing", "Pre-screening", "In-flight meals", "Baggage weight"],
    correctAnswer: 1
  },
  {
    id: 234,
    category: 'Border Operations',
    text: "Biometric systems are used in immigration for:",
    options: ["Weight tracking", "Identity verification", "Temperature checks", "Blood tests"],
    correctAnswer: 1
  },
  {
    id: 235,
    category: 'Border Operations',
    text: "Risk profiling of travelers considers:",
    options: ["Clothing brand", "Travel history", "Height", "Eye color"],
    correctAnswer: 1
  },
  {
    id: 236,
    category: 'Border Operations',
    text: "Forged document detection involves using:",
    options: ["Magnifying glass only", "UV & biometric checks", "Smell tests", "Guesswork"],
    correctAnswer: 1
  },
  {
    id: 237,
    category: 'Border Operations',
    text: "The first action an officer should take during a security alert is to:",
    options: ["Run home", "Contain the situation", "Call the media", "Hide the files"],
    correctAnswer: 1
  },
  {
    id: 238,
    category: 'Border Operations',
    text: "How should a stowaway found on a vessel be handled?",
    options: ["Give them a job", "Detain and investigate", "Let them go", "Charge them for a ticket"],
    correctAnswer: 1
  },
  {
    id: 239,
    category: 'Border Operations',
    text: "Which of these is a cargo smuggling indicator?",
    options: ["Clean container", "Manifest mismatch", "Proper labeling", "Correct weight"],
    correctAnswer: 1
  },
  {
    id: 240,
    category: 'Border Operations',
    text: "The 'Chain of Custody' ensures:",
    options: ["Speed of travel", "Evidence integrity", "Officer comfort", "Publicity"],
    correctAnswer: 1
  },
  {
    id: 241,
    category: 'Scenario',
    text: "If a traveler refuses a fingerprint scan at the border, the officer should:",
    options: ["Waive the requirement", "Deny entry pending compliance", "Force the scan", "Offer a bribe"],
    correctAnswer: 1
  },
  {
    id: 242,
    category: 'Scenario',
    text: "If a VIP pressures an officer to waive immigration law, the officer should:",
    options: ["Comply immediately", "Follow the law", "Ask for a promotion", "Quit the job"],
    correctAnswer: 1
  },
  {
    id: 243,
    category: 'Scenario',
    text: "If an officer suspects a forged passport, they should:",
    options: ["Return it quietly", "Seize and investigate", "Tear it up", "Ask for money"],
    correctAnswer: 1
  },
  {
    id: 244,
    category: 'Scenario',
    text: "If a child is found alone at the border, the officer should follow:",
    options: ["Deportation protocol", "Protection protocol", "Detention protocol", "Ignoring protocol"],
    correctAnswer: 1
  },
  {
    id: 245,
    category: 'Ethics & Leadership',
    text: "If an officer is offered a bribe, they should:",
    options: ["Accept it privately", "Reject and report", "Negotiate for more", "Share it with the team"],
    correctAnswer: 1
  },
  {
    id: 246,
    category: 'Scenario',
    text: "If an officer receives an intelligence tip but has no hard evidence yet, they should:",
    options: ["Arrest immediately", "Discreet surveillance", "Publicize the tip", "Do nothing"],
    correctAnswer: 1
  },
  {
    id: 247,
    category: 'Scenario',
    text: "During a riot at the border, the primary protocol is:",
    options: ["Running away", "Crowd control protocol", "Opening the gates", "Argue with the crowd"],
    correctAnswer: 1
  },
  {
    id: 248,
    category: 'Ethics & Leadership',
    text: "To manage officer fatigue risk, the service uses a:",
    options: ["24-hour shift", "Rotation system", "No-sleep policy", "Coffee-only diet"],
    correctAnswer: 1
  },
  {
    id: 249,
    category: 'Scenario',
    text: "If media arrives at a sensitive security scene, the officer should:",
    options: ["Give an interview", "Refer to the PRO (Public Relations Officer)", "Chase them away", "Tell them secrets"],
    correctAnswer: 1
  },
  {
    id: 250,
    category: 'Scenario',
    text: "If a cyber breach is detected in the immigration database, the first step is to:",
    options: ["Shut down the building", "Report and isolate the system", "Delete all data", "Keep it secret"],
    correctAnswer: 1
  },
  {
    id: 251,
    category: 'Ethics & Leadership',
    text: "Integrity in immigration service means:",
    options: ["Being fast", "Honesty under pressure", "Knowing the law", "Physical fitness"],
    correctAnswer: 1
  },
  {
    id: 252,
    category: 'Ethics & Leadership',
    text: "Accountability ensures that officers are ______ for their actions.",
    options: ["Rewarded", "Responsible", "Hidden", "Exempt"],
    correctAnswer: 1
  },
  {
    id: 253,
    category: 'Ethics & Leadership',
    text: "Abuse of authority is considered:",
    options: ["Leadership", "Misconduct", "Bravery", "Efficiency"],
    correctAnswer: 1
  },
  {
    id: 254,
    category: 'Ethics & Leadership',
    text: "Transparency in operations builds:",
    options: ["Corruption", "Public trust", "Confusion", "Delay"],
    correctAnswer: 1
  },
  {
    id: 255,
    category: 'Ethics & Leadership',
    text: "Good leadership in GIS inspires:",
    options: ["Fear", "Team performance", "Laziness", "Rebellion"],
    correctAnswer: 1
  },
  {
    id: 256,
    category: 'Ethics & Leadership',
    text: "Confidential data handling requires:",
    options: ["Open access", "Restricted access", "Public posting", "No recording"],
    correctAnswer: 1
  },
  {
    id: 257,
    category: 'Ethics & Leadership',
    text: "Professional discipline is maintained through the:",
    options: ["Internet", "Chain of command", "Market", "Media"],
    correctAnswer: 1
  },
  {
    id: 258,
    category: 'Ethics & Leadership',
    text: "Whistleblower protection is a tool for:",
    options: ["Promoting crime", "Anti-corruption", "Increasing taxes", "Reducing staff"],
    correctAnswer: 1
  },
  {
    id: 259,
    category: 'Ethics & Leadership',
    text: "Bias in decision-making undermines:",
    options: ["Speed", "Fair enforcement", "Uniformity", "Officer salary"],
    correctAnswer: 1
  },
  {
    id: 260,
    category: 'Ethics & Leadership',
    text: "Performance evaluation primarily measures:",
    options: ["Popularity", "Efficiency", "Height", "Wealth"],
    correctAnswer: 1
  },
  {
    id: 261,
    category: 'International Affairs',
    text: "ECOWAS stands for:",
    options: ["Economic Community of West African States", "East Coast West African Society", "Energy Commission of West Africa", "Economic Council for West Africa"],
    correctAnswer: 0
  },
  {
    id: 262,
    category: 'International Affairs',
    text: "The African Union (AU) primarily promotes:",
    options: ["Division", "Continental unity", "Trade with Mars", "Local sports"],
    correctAnswer: 1
  },
  {
    id: 263,
    category: 'International Affairs',
    text: "Which of these is an INTERPOL notice type?",
    options: ["Blue Notice", "Red Notice", "Green Notice", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 264,
    category: 'International Affairs',
    text: "Terror financing is often linked to:",
    options: ["Charity", "Transnational crime", "Tourism", "Farming"],
    correctAnswer: 1
  },
  {
    id: 265,
    category: 'International Affairs',
    text: "Border diplomacy is a tool to:",
    options: ["Increase conflict", "Reduce conflict", "Close all borders", "Tax travelers more"],
    correctAnswer: 1
  },
  {
    id: 266,
    category: 'International Affairs',
    text: "A 'push factor' for migration is:",
    options: ["Good jobs", "Poverty/conflict", "Safety", "Better education"],
    correctAnswer: 1
  },
  {
    id: 267,
    category: 'International Affairs',
    text: "A 'pull factor' for migration is:",
    options: ["War", "Jobs/safety", "Natural disasters", "High taxes"],
    correctAnswer: 1
  },
  {
    id: 268,
    category: 'International Affairs',
    text: "Bilateral agreements between countries improve:",
    options: ["Conflict", "Border cooperation", "Language barriers", "Smuggling"],
    correctAnswer: 1
  },
  {
    id: 269,
    category: 'International Affairs',
    text: "Global migration is governed by:",
    options: ["Local laws only", "International law frameworks", "No laws", "Google Maps"],
    correctAnswer: 1
  },
  {
    id: 270,
    category: 'International Affairs',
    text: "Strong borders contribute to a nation's:",
    options: ["Weakness", "National sovereignty", "Isolation", "Poverty"],
    correctAnswer: 1
  },

  // SECTION A: ENGLISH LANGUAGE (1–50)
  {
    id: 1,
    category: 'English',
    text: "The officer spoke ______ to the applicant.",
    options: ["polite", "politely", "politeness", "politenessly"],
    correctAnswer: 1
  },
  {
    id: 2,
    category: 'English',
    text: "Neither the officers nor the director ______ present.",
    options: ["was", "were", "is", "be"],
    correctAnswer: 0
  },
  {
    id: 3,
    category: 'English',
    text: "The synonym of vital is:",
    options: ["weak", "important", "small", "risky"],
    correctAnswer: 1
  },
  {
    id: 4,
    category: 'English',
    text: "Choose the correct spelling:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accomadation"],
    correctAnswer: 1
  },
  {
    id: 5,
    category: 'English',
    text: "She has lived here ______ 2015.",
    options: ["since", "for", "by", "from"],
    correctAnswer: 0
  },
  {
    id: 6,
    category: 'English',
    text: "The antonym of permit is:",
    options: ["allow", "approve", "deny", "accept"],
    correctAnswer: 2
  },
  {
    id: 7,
    category: 'English',
    text: "If I ______ you, I would apply early.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2
  },
  {
    id: 8,
    category: 'English',
    text: "The plural of analysis is:",
    options: ["analysises", "analysis", "analyses", "analys"],
    correctAnswer: 2
  },
  {
    id: 9,
    category: 'English',
    text: "“He is good ______ English.”",
    options: ["in", "at", "on", "with"],
    correctAnswer: 1
  },
  {
    id: 10,
    category: 'English',
    text: "The correct tense: “They ______ the report yesterday.”",
    options: ["write", "wrote", "written", "writing"],
    correctAnswer: 1
  },
  {
    id: 11,
    category: 'English',
    text: "A person who travels from one country to another to live is an:",
    options: ["emigrant", "tourist", "visitor", "passenger"],
    correctAnswer: 0
  },
  {
    id: 12,
    category: 'English',
    text: "Opposite of legal:",
    options: ["lawful", "rightful", "illegal", "moral"],
    correctAnswer: 2
  },
  {
    id: 13,
    category: 'English',
    text: "Which sentence is correct?",
    options: ["She don’t know", "She doesn’t knows", "She doesn’t know", "She not know"],
    correctAnswer: 2
  },
  {
    id: 14,
    category: 'English',
    text: "Choose the correct word: “The form must be filled ______.”",
    options: ["correct", "correctly", "correction", "correcting"],
    correctAnswer: 1
  },
  {
    id: 15,
    category: 'English',
    text: "He was accused ______ fraud.",
    options: ["of", "for", "by", "with"],
    correctAnswer: 0
  },
  {
    id: 16,
    category: 'English',
    text: "A short official trip is a:",
    options: ["journey", "voyage", "tour", "visit"],
    correctAnswer: 3
  },
  {
    id: 17,
    category: 'English',
    text: "“Despite the rain, they continued.” This means:",
    options: ["Because of rain", "After rain", "In spite of rain", "Before rain"],
    correctAnswer: 2
  },
  {
    id: 18,
    category: 'English',
    text: "Choose the indirect speech: “She said, ‘I am ready.’”",
    options: ["She said she is ready", "She said she was ready", "She says she was ready", "She said she ready"],
    correctAnswer: 1
  },
  {
    id: 19,
    category: 'English',
    text: "A sentence that gives a command is:",
    options: ["Interrogative", "Declarative", "Imperative", "Exclamatory"],
    correctAnswer: 2
  },
  {
    id: 20,
    category: 'English',
    text: "The correct article: “He is ______ honest man.”",
    options: ["a", "an", "the", "no article"],
    correctAnswer: 1
  },
  {
    id: 21,
    category: 'English',
    text: "What is the opposite of temporary?",
    options: ["Permanent", "Short", "Brief", "Momentary"],
    correctAnswer: 0
  },
  {
    id: 22,
    category: 'English',
    text: "Synonym of assist:",
    options: ["Help", "Hinder", "Stop", "Ignore"],
    correctAnswer: 0
  },
  {
    id: 23,
    category: 'English',
    text: "Past tense of seek:",
    options: ["Seeked", "Sought", "Seeking", "Soughten"],
    correctAnswer: 1
  },
  {
    id: 24,
    category: 'English',
    text: "In the sentence 'I am going too', what does 'too' mean?",
    options: ["very", "also", "excessive", "two"],
    correctAnswer: 1
  },
  {
    id: 25,
    category: 'English',
    text: "A word that modifies a verb is an:",
    options: ["Adjective", "Noun", "Adverb", "Pronoun"],
    correctAnswer: 2
  },
  {
    id: 26,
    category: 'English',
    text: "What is the plural of child?",
    options: ["Childs", "Children", "Childrens", "Childes"],
    correctAnswer: 1
  },
  {
    id: 27,
    category: 'English',
    text: "“Break down” often means:",
    options: ["to fail", "to start", "to build", "to fix"],
    correctAnswer: 0
  },
  {
    id: 28,
    category: 'English',
    text: "If someone is “on time”, they are:",
    options: ["late", "punctual", "early", "delayed"],
    correctAnswer: 1
  },
  {
    id: 29,
    category: 'English',
    text: "“Under arrest” means the person is:",
    options: ["free", "detained", "escaped", "working"],
    correctAnswer: 1
  },
  {
    id: 30,
    category: 'English',
    text: "Which prefix means “against”?",
    options: ["pre-", "anti-", "pro-", "post-"],
    correctAnswer: 1
  },
  {
    id: 31,
    category: 'English',
    text: "“He arrived late, ______ he apologized.”",
    options: ["but", "so", "because", "yet"],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'English',
    text: "Opposite of entry:",
    options: ["exit", "way", "door", "gate"],
    correctAnswer: 0
  },
  {
    id: 33,
    category: 'English',
    text: "“She prefers tea ______ coffee.”",
    options: ["than", "to", "over", "more"],
    correctAnswer: 1
  },
  {
    id: 34,
    category: 'English',
    text: "Noun form of “decide”:",
    options: ["deciding", "decision", "decided", "decisive"],
    correctAnswer: 1
  },
  {
    id: 35,
    category: 'English',
    text: "The term “Many people” is considered:",
    options: ["singular", "plural", "uncountable", "neutral"],
    correctAnswer: 1
  },
  {
    id: 36,
    category: 'English',
    text: "“A number of students” usually takes a ______ verb.",
    options: ["singular", "plural", "past", "future"],
    correctAnswer: 1
  },
  {
    id: 37,
    category: 'English',
    text: "The police ______ investigating the matter.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1
  },
  {
    id: 38,
    category: 'English',
    text: "“Between you and ______”",
    options: ["I", "me", "myself", "we"],
    correctAnswer: 1
  },
  {
    id: 39,
    category: 'English',
    text: "Past participle of 'go':",
    options: ["went", "gone", "going", "goes"],
    correctAnswer: 1
  },
  {
    id: 40,
    category: 'English',
    text: "Word meaning “careful use of money or resources”:",
    options: ["extravagance", "economy", "luxury", "waste"],
    correctAnswer: 1
  },
  {
    id: 41,
    category: 'English',
    text: "“Look after” means:",
    options: ["search for", "take care of", "ignore", "watch from afar"],
    correctAnswer: 1
  },
  {
    id: 42,
    category: 'English',
    text: "Opposite of increase:",
    options: ["add", "decrease", "expand", "grow"],
    correctAnswer: 1
  },
  {
    id: 43,
    category: 'English',
    text: "“He has finished” is in which tense?",
    options: ["simple past", "present perfect", "past perfect", "present simple"],
    correctAnswer: 1
  },
  {
    id: 44,
    category: 'English',
    text: "The capital letter is typically used for:",
    options: ["common nouns", "proper nouns", "verbs", "adjectives"],
    correctAnswer: 1
  },
  {
    id: 45,
    category: 'English',
    text: "“Very tired” can be expressed as:",
    options: ["energetic", "exhausted", "sleepy", "awake"],
    correctAnswer: 1
  },
  {
    id: 46,
    category: 'English',
    text: "“A person who writes books” is called an:",
    options: ["editor", "author", "publisher", "reader"],
    correctAnswer: 1
  },
  {
    id: 47,
    category: 'English',
    text: "“He can swim, ______?”",
    options: ["can he", "can't he", "could he", "doesn't he"],
    correctAnswer: 1
  },
  {
    id: 48,
    category: 'English',
    text: "The word “Less” is typically used with ______ nouns.",
    options: ["countable", "uncountable", "proper", "plural"],
    correctAnswer: 1
  },
  {
    id: 49,
    category: 'English',
    text: "The word “Many” is used with ______ nouns.",
    options: ["countable", "uncountable", "singular", "abstract"],
    correctAnswer: 0
  },
  {
    id: 50,
    category: 'English',
    text: "In “He works hard”, the word 'hard' is an:",
    options: ["adjective", "adverb", "noun", "verb"],
    correctAnswer: 1
  },

  // SECTION B: MATHEMATICS / QUANTITATIVE (51–100)
  {
    id: 51,
    category: 'Quantitative',
    text: "25% of 200 is:",
    options: ["25", "50", "75", "100"],
    correctAnswer: 1
  },
  {
    id: 52,
    category: 'Quantitative',
    text: "¾ of 120 is:",
    options: ["30", "60", "90", "100"],
    correctAnswer: 2
  },
  {
    id: 53,
    category: 'Quantitative',
    text: "15 + 27 =",
    options: ["32", "42", "52", "45"],
    correctAnswer: 1
  },
  {
    id: 54,
    category: 'Quantitative',
    text: "100 ÷ 4 =",
    options: ["20", "25", "30", "40"],
    correctAnswer: 1
  },
  {
    id: 55,
    category: 'Quantitative',
    text: "7 × 8 =",
    options: ["49", "56", "64", "63"],
    correctAnswer: 1
  },
  {
    id: 56,
    category: 'Quantitative',
    text: "144 ÷ 12 =",
    options: ["10", "11", "12", "14"],
    correctAnswer: 2
  },
  {
    id: 57,
    category: 'Quantitative',
    text: "2² (2 squared) is:",
    options: ["2", "4", "8", "6"],
    correctAnswer: 1
  },
  {
    id: 58,
    category: 'Quantitative',
    text: "10% of 350 is:",
    options: ["3.5", "35", "350", "0.35"],
    correctAnswer: 1
  },
  {
    id: 59,
    category: 'Quantitative',
    text: "1/5 as a decimal is:",
    options: ["0.1", "0.2", "0.5", "0.02"],
    correctAnswer: 1
  },
  {
    id: 60,
    category: 'Quantitative',
    text: "Perimeter of a square with side 6cm:",
    options: ["12 cm", "24 cm", "36 cm", "18 cm"],
    correctAnswer: 1
  },
  {
    id: 61,
    category: 'Quantitative',
    text: "5³ (5 cubed) is:",
    options: ["15", "25", "125", "75"],
    correctAnswer: 2
  },
  {
    id: 62,
    category: 'Quantitative',
    text: "60% of 500 is:",
    options: ["250", "300", "350", "400"],
    correctAnswer: 1
  },
  {
    id: 63,
    category: 'Quantitative',
    text: "8 + 12 × 2 =",
    options: ["40", "32", "24", "28"],
    correctAnswer: 1
  },
  {
    id: 64,
    category: 'Quantitative',
    text: "90 – 45 =",
    options: ["45", "55", "35", "50"],
    correctAnswer: 0
  },
  {
    id: 65,
    category: 'Quantitative',
    text: "Simple interest on 1000 at 10% for 1 year is:",
    options: ["10", "100", "1000", "50"],
    correctAnswer: 1
  },
  {
    id: 66,
    category: 'Quantitative',
    text: "How many grams make 1kg?",
    options: ["10", "100", "1000", "10000"],
    correctAnswer: 2
  },
  {
    id: 67,
    category: 'Quantitative',
    text: "A ratio of 3:5, with a total of 40. The first part is:",
    options: ["15", "25", "20", "10"],
    correctAnswer: 0
  },
  {
    id: 68,
    category: 'Quantitative',
    text: "An angle of 180° is called a:",
    options: ["right angle", "acute angle", "straight angle", "reflex angle"],
    correctAnswer: 2
  },
  {
    id: 69,
    category: 'Quantitative',
    text: "½ + ¼ =",
    options: ["1/6", "2/6", "3/4", "1/2"],
    correctAnswer: 2
  },
  {
    id: 70,
    category: 'Quantitative',
    text: "0.75 as a fraction is:",
    options: ["1/4", "1/2", "3/4", "3/5"],
    correctAnswer: 2
  },
  {
    id: 71,
    category: 'Quantitative',
    text: "25 × 4 =",
    options: ["75", "100", "125", "50"],
    correctAnswer: 1
  },
  {
    id: 72,
    category: 'Quantitative',
    text: "16 ÷ 2 =",
    options: ["4", "8", "6", "12"],
    correctAnswer: 1
  },
  {
    id: 73,
    category: 'Quantitative',
    text: "10² is:",
    options: ["20", "100", "1000", "50"],
    correctAnswer: 1
  },
  {
    id: 74,
    category: 'Quantitative',
    text: "LCM of 4 and 6 is:",
    options: ["2", "12", "24", "10"],
    correctAnswer: 1
  },
  {
    id: 75,
    category: 'Quantitative',
    text: "HCF of 12 and 18 is:",
    options: ["2", "3", "6", "36"],
    correctAnswer: 2
  },
  {
    id: 76,
    category: 'Quantitative',
    text: "9 × 9 =",
    options: ["72", "81", "90", "100"],
    correctAnswer: 1
  },
  {
    id: 77,
    category: 'Quantitative',
    text: "72 ÷ 8 =",
    options: ["7", "8", "9", "6"],
    correctAnswer: 2
  },
  {
    id: 78,
    category: 'Quantitative',
    text: "11 × 11 =",
    options: ["111", "121", "131", "141"],
    correctAnswer: 1
  },
  {
    id: 79,
    category: 'Quantitative',
    text: "40% of 250 is:",
    options: ["80", "100", "120", "150"],
    correctAnswer: 1
  },
  {
    id: 80,
    category: 'Quantitative',
    text: "1000 – 456 =",
    options: ["544", "644", "444", "554"],
    correctAnswer: 0
  },
  {
    id: 81,
    category: 'Quantitative',
    text: "Mean (average) of 2, 4, and 6 is:",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 82,
    category: 'Quantitative',
    text: "1 kilometer is equal to how many meters?",
    options: ["100", "1000", "10000", "500"],
    correctAnswer: 1
  },
  {
    id: 83,
    category: 'Quantitative',
    text: "1 hour is equal to how many minutes?",
    options: ["30", "60", "100", "120"],
    correctAnswer: 1
  },
  {
    id: 84,
    category: 'Quantitative',
    text: "5/8 as a decimal is:",
    options: ["0.5", "0.625", "0.75", "0.8"],
    correctAnswer: 1
  },
  {
    id: 85,
    category: 'Quantitative',
    text: "20% of 150 is:",
    options: ["20", "30", "40", "50"],
    correctAnswer: 1
  },
  {
    id: 86,
    category: 'Quantitative',
    text: "100 ÷ 0.5 =",
    options: ["50", "200", "150", "100"],
    correctAnswer: 1
  },
  {
    id: 87,
    category: 'Quantitative',
    text: "3² + 4² =",
    options: ["7", "12", "25", "49"],
    correctAnswer: 2
  },
  {
    id: 88,
    category: 'Quantitative',
    text: "A full circle has how many degrees?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 3
  },
  {
    id: 89,
    category: 'Quantitative',
    text: "¼ of 80 is:",
    options: ["10", "20", "40", "15"],
    correctAnswer: 1
  },
  {
    id: 90,
    category: 'Quantitative',
    text: "200 ÷ 25 =",
    options: ["4", "8", "10", "12"],
    correctAnswer: 1
  },
  {
    id: 91,
    category: 'Quantitative',
    text: "7% of 700 is:",
    options: ["7", "49", "70", "14"],
    correctAnswer: 1
  },
  {
    id: 92,
    category: 'Quantitative',
    text: "30 × 30 =",
    options: ["60", "600", "900", "300"],
    correctAnswer: 2
  },
  {
    id: 93,
    category: 'Quantitative',
    text: "150% as a decimal is:",
    options: ["0.15", "1.5", "15", "150"],
    correctAnswer: 1
  },
  {
    id: 94,
    category: 'Quantitative',
    text: "0.05 as a percentage is:",
    options: ["0.5%", "5%", "50%", "0.05%"],
    correctAnswer: 1
  },
  {
    id: 95,
    category: 'Quantitative',
    text: "1 dozen is equal to:",
    options: ["10", "12", "14", "20"],
    correctAnswer: 1
  },
  {
    id: 96,
    category: 'Quantitative',
    text: "2 kilometers is how many meters?",
    options: ["200", "2000", "20000", "20"],
    correctAnswer: 1
  },
  {
    id: 97,
    category: 'Quantitative',
    text: "18 ÷ 3 =",
    options: ["3", "6", "9", "4"],
    correctAnswer: 1
  },
  {
    id: 98,
    category: 'Quantitative',
    text: "50² is:",
    options: ["100", "500", "2500", "1000"],
    correctAnswer: 2
  },
  {
    id: 99,
    category: 'Quantitative',
    text: "120 ÷ 10 =",
    options: ["10", "12", "15", "20"],
    correctAnswer: 1
  },
  {
    id: 100,
    category: 'Quantitative',
    text: "3/10 as a decimal is:",
    options: ["0.03", "0.3", "3.0", "0.33"],
    correctAnswer: 1
  },

  // SECTION C: GENERAL KNOWLEDGE (GHANA & WORLD) (101–150)
  {
    id: 101,
    category: 'General Knowledge',
    text: "What is the capital city of Ghana?",
    options: ["Kumasi", "Accra", "Tamale", "Takoradi"],
    correctAnswer: 1
  },
  {
    id: 102,
    category: 'General Knowledge',
    text: "In which year did Ghana gain independence?",
    options: ["1951", "1957", "1960", "1966"],
    correctAnswer: 1
  },
  {
    id: 103,
    category: 'General Knowledge',
    text: "Who was the first President of Ghana?",
    options: ["J.B. Danquah", "Kwame Nkrumah", "K.A. Busia", "Jerry Rawlings"],
    correctAnswer: 1
  },
  {
    id: 104,
    category: 'General Knowledge',
    text: "What is the official currency of Ghana?",
    options: ["Dollar", "Naira", "Cedi", "Pounds"],
    correctAnswer: 2
  },
  {
    id: 105,
    category: 'General Knowledge',
    text: "The head of the Parliament of Ghana is called the:",
    options: ["President", "Speaker", "Chief Justice", "Prime Minister"],
    correctAnswer: 1
  },
  {
    id: 106,
    category: 'General Knowledge',
    text: "The highest court in Ghana is the:",
    options: ["High Court", "Appeal Court", "Supreme Court", "District Court"],
    correctAnswer: 2
  },
  {
    id: 107,
    category: 'General Knowledge',
    text: "What are the colors of the Ghana national flag?",
    options: ["Red, Blue, Green", "Red, Gold, Green, Black star", "Green, White, Green", "Red, White, Blue"],
    correctAnswer: 1
  },
  {
    id: 108,
    category: 'General Knowledge',
    text: "Ghana celebrates Independence Day on:",
    options: ["1st January", "6th March", "1st July", "25th May"],
    correctAnswer: 1
  },
  {
    id: 109,
    category: 'General Knowledge',
    text: "The Volta Lake in Ghana is a ______ lake.",
    options: ["natural", "man-made", "saltwater", "glacier"],
    correctAnswer: 1
  },
  {
    id: 110,
    category: 'General Knowledge',
    text: "Which city is the largest in Ghana by population?",
    options: ["Kumasi", "Accra", "Tamale", "Tema"],
    correctAnswer: 1
  },
  {
    id: 111,
    category: 'General Knowledge',
    text: "The current system of government in Ghana is:",
    options: ["Monarchy", "Democracy", "Dictatorship", "Military"],
    correctAnswer: 1
  },
  {
    id: 112,
    category: 'General Knowledge',
    text: "Where is the ECOWAS headquarters located?",
    options: ["Accra, Ghana", "Abuja, Nigeria", "Lome, Togo", "Dakar, Senegal"],
    correctAnswer: 1
  },
  {
    id: 113,
    category: 'General Knowledge',
    text: "The African Union (AU) headquarters is in:",
    options: ["Cairo", "Addis Ababa", "Johannesburg", "Nairobi"],
    correctAnswer: 1
  },
  {
    id: 114,
    category: 'General Knowledge',
    text: "The United Nations (UN) headquarters is located in:",
    options: ["London", "Paris", "New York", "Geneva"],
    correctAnswer: 2
  },
  {
    id: 115,
    category: 'General Knowledge',
    text: "Who composed the Ghana national anthem?",
    options: ["Ephraim Amu", "Philip Gbeho", "Theodosia Okoh", "Kwame Nkrumah"],
    correctAnswer: 1
  },
  {
    id: 116,
    category: 'General Knowledge',
    text: "What is Ghana's major cash crop?",
    options: ["Coffee", "Cocoa", "Rubber", "Cotton"],
    correctAnswer: 1
  },
  {
    id: 117,
    category: 'General Knowledge',
    text: "Which authority is responsible for issuing passports in Ghana?",
    options: ["Immigration Service", "Ministry of Foreign Affairs", "Police Service", "Ministry of Interior"],
    correctAnswer: 1
  },
  {
    id: 118,
    category: 'GIS Knowledge',
    text: "The Ghana Immigration Service falls under which Ministry?",
    options: ["Ministry of Foreign Affairs", "Ministry of Interior", "Ministry of Defence", "Ministry of Justice"],
    correctAnswer: 1
  },
  {
    id: 119,
    category: 'General Knowledge',
    text: "The Ghana coat of arms features two:",
    options: ["lions", "eagles", "elephants", "stars"],
    correctAnswer: 1
  },
  {
    id: 120,
    category: 'General Knowledge',
    text: "Lake Bosomtwe is located in which region?",
    options: ["Central", "Ashanti", "Eastern", "Volta"],
    correctAnswer: 1
  },
  {
    id: 121,
    category: 'General Knowledge',
    text: "The longest river entirely within Ghana is the:",
    options: ["Pra", "Volta", "Tano", "Ankobra"],
    correctAnswer: 1
  },
  {
    id: 122,
    category: 'General Knowledge',
    text: "What is the currency code for the Ghanaian Cedi?",
    options: ["GHC", "GHS", "GHA", "CED"],
    correctAnswer: 1
  },
  {
    id: 123,
    category: 'General Knowledge',
    text: "The arm of government responsible for making laws is the:",
    options: ["Executive", "Judiciary", "Parliament (Legislature)", "Police"],
    correctAnswer: 2
  },
  {
    id: 124,
    category: 'General Knowledge',
    text: "The executive head of state in Ghana is the:",
    options: ["Prime Minister", "President", "Chief Justice", "Speaker"],
    correctAnswer: 1
  },
  {
    id: 125,
    category: 'General Knowledge',
    text: "The judicial arm of government consists of the:",
    options: ["Parliament", "Courts", "Ministers", "Police"],
    correctAnswer: 1
  },
  {
    id: 126,
    category: 'General Knowledge',
    text: "The head of the Ghana Police Service is the:",
    options: ["Comptroller-General", "IGP (Inspector General of Police)", "Chief of Defence Staff", "Commissioner"],
    correctAnswer: 1
  },
  {
    id: 127,
    category: 'General Knowledge',
    text: "What is Ghana's primary emergency number?",
    options: ["911", "112 / 191", "100", "419"],
    correctAnswer: 1
  },
  {
    id: 128,
    category: 'General Knowledge',
    text: "The Ghana national pledge begins with the words:",
    options: ["I promise on my honour...", "I love my country...", "Arise Ghana...", "God bless our homeland..."],
    correctAnswer: 0
  },
  {
    id: 129,
    category: 'General Knowledge',
    text: "Ghana borders which of these countries?",
    options: ["Nigeria", "Togo, Ivory Coast, Burkina Faso", "Benin", "Cameroon"],
    correctAnswer: 1
  },
  {
    id: 130,
    category: 'General Knowledge',
    text: "The official language of Ghana is:",
    options: ["Twi", "English", "Ga", "French"],
    correctAnswer: 1
  },
  {
    id: 131,
    category: 'General Knowledge',
    text: "FIFA is the governing body for which sport?",
    options: ["Basketball", "Football", "Tennis", "Boxing"],
    correctAnswer: 1
  },
  {
    id: 132,
    category: 'General Knowledge',
    text: "WHO stands for:",
    options: ["World Health Organization", "World Housing Office", "Women Health Organization", "World Hope Office"],
    correctAnswer: 0
  },
  {
    id: 133,
    category: 'General Knowledge',
    text: "NATO is a:",
    options: ["trade agreement", "defence alliance", "health body", "sporting club"],
    correctAnswer: 1
  },
  {
    id: 134,
    category: 'General Knowledge',
    text: "The Red Cross is primarily involved in:",
    options: ["banking", "humanitarian aid", "space exploration", "mining"],
    correctAnswer: 1
  },
  {
    id: 135,
    category: 'General Knowledge',
    text: "UNESCO focuses on:",
    options: ["trade", "education, science & culture", "military", "agriculture"],
    correctAnswer: 1
  },
  {
    id: 136,
    category: 'General Knowledge',
    text: "Interpol deals with ______ crime.",
    options: ["local", "international", "domestic", "minor"],
    correctAnswer: 1
  },
  {
    id: 137,
    category: 'General Knowledge',
    text: "A passport is primarily a:",
    options: ["work permit", "travel document", "identity card only", "visa"],
    correctAnswer: 1
  },
  {
    id: 138,
    category: 'General Knowledge',
    text: "A visa allows a person to:",
    options: ["leave a country", "enter a country", "vote", "buy land"],
    correctAnswer: 1
  },
  {
    id: 139,
    category: 'GIS Knowledge',
    text: "Deportation means:",
    options: ["legal entry", "removal from a country", "granting citizenship", "giving a job"],
    correctAnswer: 1
  },
  {
    id: 140,
    category: 'Security Awareness',
    text: "Border security is intended to prevent:",
    options: ["tourism", "illegal entry", "trade", "travel"],
    correctAnswer: 1
  },
  {
    id: 141,
    category: 'Security Awareness',
    text: "Human trafficking is considered a:",
    options: ["legal business", "crime", "sport", "hobby"],
    correctAnswer: 1
  },
  {
    id: 142,
    category: 'Security Awareness',
    text: "Smuggling means:",
    options: ["legal trade", "illegal movement of goods", "paying taxes", "donating goods"],
    correctAnswer: 1
  },
  {
    id: 143,
    category: 'GIS Knowledge',
    text: "A refugee is a person who:",
    options: ["travels for fun", "flees danger or persecution", "seeks a new job", "is a diplomat"],
    correctAnswer: 1
  },
  {
    id: 144,
    category: 'GIS Knowledge',
    text: "Asylum refers to ______ provided by a country.",
    options: ["money", "protection", "punishment", "education"],
    correctAnswer: 1
  },
  {
    id: 145,
    category: 'Security Awareness',
    text: "Terrorism is a major threat to:",
    options: ["sports", "national security", "fashion", "weather"],
    correctAnswer: 1
  },
  {
    id: 146,
    category: 'General Knowledge',
    text: "Ebola is a:",
    options: ["country", "disease", "mountain", "computer"],
    correctAnswer: 1
  },
  {
    id: 147,
    category: 'General Knowledge',
    text: "How many countries are in ECOWAS?",
    options: ["10", "15", "20", "55"],
    correctAnswer: 1
  },
  {
    id: 148,
    category: 'General Knowledge',
    text: "How many member states are in the African Union?",
    options: ["15", "30", "55", "100"],
    correctAnswer: 2
  },
  {
    id: 149,
    category: 'General Knowledge',
    text: "GPS is used primarily for:",
    options: ["cooking", "navigation", "painting", "singing"],
    correctAnswer: 1
  },
  {
    id: 150,
    category: 'Security Awareness',
    text: "Cybercrime involves crimes committed using:",
    options: ["cars", "computers/internet", "knives", "heavy machinery"],
    correctAnswer: 1
  },

  // SECTION D: LOGICAL REASONING (151–200)
  {
    id: 151,
    category: 'Logical Reasoning',
    text: "Complete the sequence: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 1
  },
  {
    id: 152,
    category: 'Logical Reasoning',
    text: "A is taller than B; B is taller than C. Who is the tallest?",
    options: ["A", "B", "C", "Cannot tell"],
    correctAnswer: 0
  },
  {
    id: 153,
    category: 'Logical Reasoning',
    text: "Identify the odd one out:",
    options: ["Dog", "Cat", "Cow", "Car"],
    correctAnswer: 3
  },
  {
    id: 154,
    category: 'Logical Reasoning',
    text: "Book is to Read as Food is to:",
    options: ["Drink", "Eat", "Cook", "Buy"],
    correctAnswer: 1
  },
  {
    id: 155,
    category: 'Logical Reasoning',
    text: "Complete: 5, 10, 20, 40, ?",
    options: ["50", "60", "80", "100"],
    correctAnswer: 2
  },
  {
    id: 156,
    category: 'Logical Reasoning',
    text: "All officers are trained. Kofi is an officer. Therefore, Kofi is:",
    options: ["Lazy", "Trained", "Old", "Rich"],
    correctAnswer: 1
  },
  {
    id: 157,
    category: 'Logical Reasoning',
    text: "If today is Monday, what will tomorrow be?",
    options: ["Sunday", "Tuesday", "Wednesday", "Saturday"],
    correctAnswer: 1
  },
  {
    id: 158,
    category: 'Logical Reasoning',
    text: "Complete: 100, 90, 80, ?",
    options: ["70", "75", "60", "90"],
    correctAnswer: 0
  },
  {
    id: 159,
    category: 'Logical Reasoning',
    text: "Pen is to write as knife is to:",
    options: ["Eat", "Cut", "Draw", "Hit"],
    correctAnswer: 1
  },
  {
    id: 160,
    category: 'General Knowledge',
    text: "The sun rises in the:",
    options: ["North", "South", "East", "West"],
    correctAnswer: 2
  },
  {
    id: 161,
    category: 'Logical Reasoning',
    text: "Complete: 1, 1, 2, 2, 3, 3, ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 162,
    category: 'Logical Reasoning',
    text: "Doctor is to Hospital as Teacher is to:",
    options: ["Farm", "School", "Market", "Office"],
    correctAnswer: 1
  },
  {
    id: 163,
    category: 'General Knowledge',
    text: "Fish live in:",
    options: ["Trees", "Water", "Deserts", "Nests"],
    correctAnswer: 1
  },
  {
    id: 164,
    category: 'General Knowledge',
    text: "The opposite of North is:",
    options: ["East", "West", "South", "Up"],
    correctAnswer: 2
  },
  {
    id: 165,
    category: 'Logical Reasoning',
    text: "Complete: 12, 24, 36, ?",
    options: ["40", "48", "60", "50"],
    correctAnswer: 1
  },
  {
    id: 166,
    category: 'Quantitative',
    text: "If 3x = 15, then x is:",
    options: ["3", "5", "12", "45"],
    correctAnswer: 1
  },
  {
    id: 167,
    category: 'Quantitative',
    text: "Which is largest?",
    options: ["½", "¾", "0.6", "0.2"],
    correctAnswer: 1
  },
  {
    id: 168,
    category: 'Logical Reasoning',
    text: "Complete: 9, 7, 5, 3, ?",
    options: ["0", "1", "2", "4"],
    correctAnswer: 1
  },
  {
    id: 169,
    category: 'Quantitative',
    text: "A circle has how many sides?",
    options: ["0", "1", "4", "Infinite"],
    correctAnswer: 0
  },
  {
    id: 170,
    category: 'Quantitative',
    text: "A square has how many sides?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    id: 171,
    category: 'Logical Reasoning',
    text: "If A > B and B > C, is A > C?",
    options: ["Yes", "No", "Maybe", "Depends"],
    correctAnswer: 0
  },
  {
    id: 172,
    category: 'Logical Reasoning',
    text: "Bird is to Fly as Fish is to:",
    options: ["Walk", "Run", "Swim", "Jump"],
    correctAnswer: 2
  },
  {
    id: 173,
    category: 'General Knowledge',
    text: "Ice melts when it is:",
    options: ["Cold", "Frozen", "Heated", "Dark"],
    correctAnswer: 2
  },
  {
    id: 174,
    category: 'Quantitative',
    text: "How many hours are in 5 days?",
    options: ["24", "100", "120", "200"],
    correctAnswer: 2
  },
  {
    id: 175,
    category: 'General Knowledge',
    text: "The month of January has how many days?",
    options: ["28", "29", "30", "31"],
    correctAnswer: 3
  },
  {
    id: 176,
    category: 'General Knowledge',
    text: "The opposite of Up is:",
    options: ["Side", "Down", "Left", "Right"],
    correctAnswer: 1
  },
  {
    id: 177,
    category: 'Quantitative',
    text: "If 8 × ? = 64, what is '?'?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2
  },
  {
    id: 178,
    category: 'Quantitative',
    text: "Half of 50 is:",
    options: ["15", "20", "25", "30"],
    correctAnswer: 2
  },
  {
    id: 179,
    category: 'Logical Reasoning',
    text: "Complete: 14, 21, 28, ?",
    options: ["30", "35", "40", "42"],
    correctAnswer: 1
  },
  {
    id: 180,
    category: 'Quantitative',
    text: "Even numbers end with:",
    options: ["1,3,5", "0,2,4,6,8", "7,9", "Any number"],
    correctAnswer: 1
  },
  {
    id: 181,
    category: 'Logical Reasoning',
    text: "Complete: 3, 6, 9, 12, ?",
    options: ["13", "14", "15", "18"],
    correctAnswer: 2
  },
  {
    id: 182,
    category: 'Logical Reasoning',
    text: "All cars have wheels. A bus has wheels. Is a bus a car?",
    options: ["Yes", "No", "Sometimes", "Only in the morning"],
    correctAnswer: 1
  },
  {
    id: 183,
    category: 'General Knowledge',
    text: "Fire is hot, ice is:",
    options: ["Hot", "Warm", "Cold", "Dry"],
    correctAnswer: 2
  },
  {
    id: 184,
    category: 'General Knowledge',
    text: "A soldier primarily protects the:",
    options: ["Market", "Nation", "Hospital", "School"],
    correctAnswer: 1
  },
  {
    id: 185,
    category: 'General Knowledge',
    text: "How many days are in 1 week?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 186,
    category: 'Quantitative',
    text: "The hour hand on a clock moves once around every:",
    options: ["1 hour", "12 hours", "24 hours", "60 minutes"],
    correctAnswer: 1
  },
  {
    id: 187,
    category: 'Quantitative',
    text: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1
  },
  {
    id: 188,
    category: 'Quantitative',
    text: "1000m is equal to:",
    options: ["1 km", "10 km", "100 km", "0.1 km"],
    correctAnswer: 0
  },
  {
    id: 189,
    category: 'General Knowledge',
    text: "A finger is a part of the:",
    options: ["Leg", "Hand", "Face", "Back"],
    correctAnswer: 1
  },
  {
    id: 190,
    category: 'GIS Knowledge',
    text: "A passport is usually needed for:",
    options: ["local travel", "international travel", "buying food", "going to school"],
    correctAnswer: 1
  },
  {
    id: 191,
    category: 'Logical Reasoning',
    text: "The opposite of True is:",
    options: ["Right", "Wrong", "False", "Correct"],
    correctAnswer: 2
  },
  {
    id: 192,
    category: 'Quantitative',
    text: "50 ÷ 5 =",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1
  },
  {
    id: 193,
    category: 'Logical Reasoning',
    text: "Complete: 11, 13, 15, ?",
    options: ["16", "17", "18", "20"],
    correctAnswer: 1
  },
  {
    id: 194,
    category: 'General Knowledge',
    text: "What is the day after Friday?",
    options: ["Thursday", "Saturday", "Sunday", "Monday"],
    correctAnswer: 1
  },
  {
    id: 195,
    category: 'General Knowledge',
    text: "The opposite of Rich is:",
    options: ["Wealthy", "Poor", "Happy", "Strong"],
    correctAnswer: 1
  },
  {
    id: 196,
    category: 'General Knowledge',
    text: "A judge works in a:",
    options: ["Farm", "Court", "Hospital", "School"],
    correctAnswer: 1
  },
  {
    id: 197,
    category: 'General Knowledge',
    text: "An airport is for:",
    options: ["Ships", "Airplanes", "Trains", "Buses"],
    correctAnswer: 1
  },
  {
    id: 198,
    category: 'General Knowledge',
    text: "A hospital treats:",
    options: ["Cars", "Patients", "Animals", "Plants"],
    correctAnswer: 1
  },
  {
    id: 199,
    category: 'General Knowledge',
    text: "A farmer grows:",
    options: ["Crops", "Furniture", "Books", "Clothes"],
    correctAnswer: 0
  },
  {
    id: 200,
    category: 'GIS Knowledge',
    text: "An immigration officer primarily protects the nation's:",
    options: ["Farms", "Borders", "Schools", "Forests"],
    correctAnswer: 1
  }
];
