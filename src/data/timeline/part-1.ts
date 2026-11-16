import type { TimelineMilestone } from "@/data/types";

export const timelinePart1: TimelineMilestone[] = [
  {
    id: "t01",
    yearCE: 610,
    dateLabel: "c. 610 CE",
    hijriLabel: "c. 13 BH",
    title: "First Revelation at the Cave of Hira",
    arabicTitle: "بدء الوحي في غار حراء",
    category: "revelation",
    description:
      "According to the report of Aishah preserved by al-Bukhari, the Prophet Muhammad, then about forty years old, was in retreat in the cave of Hira outside Mecca when the angel came to him and commanded him to recite. The words then delivered are the opening verses of Surah 96 (al-ʿAlaq), beginning 'Recite in the name of your Lord who created'. The conventional date of 610 CE is derived from the tradition's chronology rather than from a contemporary document.",
    significance:
      "This is the starting point of the text whose transmission the rest of the timeline follows. From the first moment the Quran is presented as something recited aloud and learned by heart, which is why oral transmission is primary in the Muslim account. For the historian this event is known through the tradition's reports; documentary and manuscript evidence begins some decades later.",
    sources: [
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 3",
        detail:
          "The narration of Aishah describing the beginning of revelation in the cave of Hira and the recitation of the first verses of Surah 96.",
        url: "https://sunnah.com/bukhari:3",
      },
      {
        kind: "quran",
        citation: "Q 96:1–5",
        detail:
          "The verses identified by the tradition as the first to be revealed, opening with the command to recite.",
        url: "https://quran.com/96/1-5",
      },
    ],
  },
  {
    id: "t02",
    yearCE: 618,
    dateLabel: "c. 613–622 CE",
    hijriLabel: "c. 10–1 BH",
    title: "Public Recitation in Mecca",
    arabicTitle: "الجهر بالقرآن في مكة",
    category: "revelation",
    description:
      "After an initial period of private preaching, the Prophet was commanded to proclaim the message openly (Q 15:94), and the Quran began to be recited in public in Mecca. The early biography by Ibn Ishaq names Abdullah ibn Masʿud as the first after the Prophet to recite the Quran aloud at the Kaaba. Believers memorised the short, rhythmic Meccan surahs and recited them in prayer, and the tradition also reports written pieces in private hands, as in the story of the conversion of Umar.",
    significance:
      "In these years a community of memorisers formed around the recitation, among them Companions who later became the chief teachers of the Quran in the provinces. The public and liturgical use of the text from the outset meant that it was known to many people simultaneously, which is the basis of the tradition's claim of mass transmission. The evidence for this period is literary, not documentary.",
    sources: [
      {
        kind: "quran",
        citation: "Q 15:94",
        detail:
          "The command to proclaim openly what the Prophet had been ordered to convey, which the tradition links to the beginning of public preaching.",
        url: "https://quran.com/15/94",
      },
      {
        kind: "classical",
        citation: "Ibn Ishaq (d. c. 150/767), Sirat Rasul Allah, in the recension of Ibn Hisham; trans. A. Guillaume, The Life of Muhammad (Oxford, 1955)",
        detail:
          "The earliest extant biography, which reports that Ibn Masʿud was the first to recite the Quran aloud in Mecca and describes written Quranic material in the house of Umar's sister.",
      },
    ],
  },
  {
    id: "t03",
    yearCE: 622,
    dateLabel: "622 CE",
    hijriLabel: "1 AH",
    title: "The Hijrah and the Scribes of Revelation at Madinah",
    arabicTitle: "الهجرة وكُتّاب الوحي",
    category: "revelation",
    description:
      "The Prophet's emigration from Mecca to Madinah, from which the Islamic calendar is counted, created a settled community with a mosque and literate helpers. The tradition names a number of Companions who wrote down revelation at his dictation, most prominently Zayd ibn Thabit, with Ubayy ibn Kaʿb and others. A report in al-Bukhari describes the Prophet calling for Zayd to bring writing materials and record a newly revealed verse (Q 4:95). The materials mentioned include parchment, shoulder-blades, palm stalks and thin stones.",
    significance:
      "The Madinan period is when, according to the tradition, the Quran was systematically written under the Prophet's supervision although not yet gathered into one volume. This is the origin of the written channel that accompanied memorisation. It also explains why Zayd ibn Thabit was later chosen for the collections under Abu Bakr and Uthman. These reports come from the hadith literature; no writing from the Prophet's lifetime has been securely identified.",
    sources: [
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 4990",
        detail:
          "Al-Baraʾ reports that when Q 4:95 was revealed the Prophet said to call Zayd and have him bring the tablet and inkpot, and dictated the verse to him.",
        url: "https://sunnah.com/bukhari:4990",
      },
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 4986",
        detail:
          "In the account of the first collection Abu Bakr describes Zayd as a young man who used to write the revelation for the Messenger of God.",
        url: "https://sunnah.com/bukhari:4986",
      },
    ],
  },
  {
    id: "t04",
    yearCE: 625,
    dateLabel: "625 CE",
    hijriLabel: "4 AH",
    title: "The Reciters Killed at Biʾr Maʿunah",
    arabicTitle: "شهداء القرّاء في بئر معونة",
    category: "revelation",
    description:
      "In Safar of the fourth year after the Hijrah a party of Companions sent to teach among the tribes of Najd was ambushed and killed at the well of Maʿunah. Anas ibn Malik, in reports preserved by al-Bukhari, puts their number at seventy and says they were men of the Ansar known as al-qurraʾ, the reciters, who gathered firewood by day and spent the night in prayer and study. The Prophet is reported to have invoked God against the tribes responsible for a month.",
    significance:
      "The incident is early testimony, within the tradition, that a recognised class of Quran reciters already existed in the fourth year of the Hijrah and was numerous enough for seventy to be sent on one mission. It shows memorisation as an organised communal activity and not the possession of a few individuals. The number seventy is given by the narrator and, as often in early Arabic reports, may be a round figure.",
    sources: [
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 4090",
        detail:
          "Anas reports the killing of seventy men of the Ansar called the reciters at Biʾr Maʿunah and the Prophet's month-long supplication.",
        url: "https://sunnah.com/bukhari:4090",
      },
    ],
  },
  {
    id: "t05",
    yearCE: 632,
    dateLabel: "632 CE",
    hijriLabel: "10–11 AH",
    title: "The Final Double Review and the Death of the Prophet",
    arabicTitle: "العرضة الأخيرة ووفاة النبي ﷺ",
    category: "revelation",
    description:
      "The hadith literature reports that the angel Gabriel used to review the Quran with the Prophet once each year in Ramadan, and that in the last year of his life the review took place twice. The Prophet told his daughter Fatimah that he took this as a sign that his death was near. He died in Madinah in Rabiʿ al-Awwal of the year 11 (June 632 CE), at which point the revelation was complete, memorised by many Companions and written on separate materials.",
    significance:
      "The final review (al-ʿarḍah al-akhirah) is central to the traditional understanding of preservation: the text as it stood at the Prophet's death is held to be what Zayd ibn Thabit and others had heard in that last review and what the later collections reproduced. It is a report within the tradition and cannot be tested from manuscripts, which begin later. Sadeghi's argument for a prophetic prototype behind the Uthmanic and Sana'a text types is the nearest academic counterpart.",
    sources: [
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 4998",
        detail:
          "Abu Hurayrah reports that Gabriel used to review the Quran with the Prophet once a year and did so twice in the year in which he died.",
        url: "https://sunnah.com/bukhari:4998",
      },
      {
        kind: "hadith",
        citation: "Sahih al-Bukhari 3624",
        detail:
          "Aishah relates from Fatimah that the Prophet confided to her that Gabriel had reviewed the Quran with him twice that year and that he saw in this the approach of his death.",
        url: "https://sunnah.com/bukhari:3624",
      },
    ],
  },
];
