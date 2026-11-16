import type { InteractiveVerse } from "@/data/types";

export const versesPart1: InteractiveVerse[] = [
  {
    id: "v-1-4",
    surah: 1,
    ayah: 4,
    reference: "Q 1:4",
    surahName: "al-Fatihah",
    dottedSkeleton: "ملك",
    contextArabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
    contextTranslation: "Master of the Day of Recompense",
    kind: "long-vowel",
    variants: [
      {
        id: "v-1-4-a",
        arabic: "مَٰلِكِ",
        transliteration: "māliki",
        meaning: "Owner, Master (active participle: the one who possesses)",
        readers: ["'Asim", "al-Kisa'i", "Ya'qub", "Khalaf"],
      },
      {
        id: "v-1-4-b",
        arabic: "مَلِكِ",
        transliteration: "maliki",
        meaning: "King, Sovereign (the one who rules)",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Abu 'Amr",
          "Ibn 'Amir",
          "Hamzah",
          "Abu Ja'far",
        ],
      },
    ],
    riwayat: {
      hafs: "v-1-4-a",
      warsh: "v-1-4-b",
      qalun: "v-1-4-b",
      "duri-abu-amr": "v-1-4-b",
    },
    invalidReadings: [
      {
        arabic: "مَلَكَ يَوْمَ ٱلدِّينِ",
        transliteration: "malaka yawma d-dīn",
        violates: "isnad",
        whyInvalid:
          "As a past-tense verb ('He possessed the Day of Recompense') this fits the three-letter skeleton and is grammatical. It is recorded in the shawadhdh literature from Abu Haywah and others, but it lacks the widely accepted, sound transmission required of a canonical reading, so it is not recited as Quran.",
      },
      {
        arabic: "مَلِيكِ",
        transliteration: "malīki",
        violates: "rasm",
        whyInvalid:
          "The form malīk ('sovereign') is good Arabic and is reported by Abu Hayyan from Ubayy ibn Ka'b and Abu Hurayrah, but it requires a written yā' that none of the 'Uthmanic codices contains. A reading that adds a consonant to the skeleton fails the rasm condition.",
      },
    ],
    explanation:
      "The 'Uthmanic codices write the word with three letters and no alif. Early Arabic orthography often left a medial long ā unwritten, so the same skeleton carries both maliki ('King') and māliki ('Owner'). Ibn al-Jazari reports in al-Nashr that 'Asim, al-Kisa'i, Ya'qub and Khalaf read with the long vowel and the remaining six without it. Classical exegetes treat the two as complementary attributes: a king rules but may not own, an owner possesses but may not rule, and God is described by both. Q 114:2 (maliki n-nās) and Q 3:26 (mālika l-mulk) show each word used of God elsewhere without disagreement.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat Umm al-Qur'an",
        detail:
          "States that 'Asim, al-Kisa'i, Ya'qub and Khalaf read with alif (māliki) and the remaining readers without it (maliki).",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat Umm al-Qur'an",
        detail:
          "Gives the distribution among the Seven: 'Asim and al-Kisa'i read māliki; Nafi', Ibn Kathir, Abu 'Amr, Ibn 'Amir and Hamzah read maliki.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 1:4, Berlin-Brandenburg Academy of Sciences",
        detail:
          "Collates the canonical and non-canonical readings of the word from al-Dani, Ibn Mujahid, Ibn Khalawayh, Abu Hayyan and al-Banna', including the anomalous malaka and malīki.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/1/verse/4/variants",
      },
    ],
  },
  {
    id: "v-2-259",
    surah: 2,
    ayah: 259,
    reference: "Q 2:259",
    surahName: "al-Baqarah",
    dottedSkeleton: "ننشزها",
    contextArabic: "وَٱنظُرْ إِلَى ٱلْعِظَامِ كَيْفَ نُنشِزُهَا ثُمَّ نَكْسُوهَا لَحْمًۭا",
    contextTranslation:
      "And look at the bones, how We raise them up and then clothe them with flesh",
    kind: "dotting",
    variants: [
      {
        id: "v-2-259-a",
        arabic: "نُنشِزُهَا",
        transliteration: "nunshizuhā",
        meaning: "We raise them up, lifting and fitting them one upon another",
        readers: ["Ibn 'Amir", "'Asim", "Hamzah", "al-Kisa'i", "Khalaf"],
      },
      {
        id: "v-2-259-b",
        arabic: "نُنشِرُهَا",
        transliteration: "nunshiruhā",
        meaning: "We bring them back to life",
        readers: ["Nafi'", "Ibn Kathir", "Abu 'Amr", "Abu Ja'far", "Ya'qub"],
      },
    ],
    riwayat: {
      hafs: "v-2-259-a",
      warsh: "v-2-259-b",
      qalun: "v-2-259-b",
      "duri-abu-amr": "v-2-259-b",
    },
    invalidReadings: [
      {
        arabic: "نَنشُرُهَا",
        transliteration: "nanshuruhā",
        violates: "isnad",
        whyInvalid:
          "With fatḥah on the first nūn and ḍammah on the shīn ('We spread them out') the word fits the skeleton and is sound Arabic. It is reported from Ibn 'Abbas and al-Hasan al-Basri in early tafsir and shawadhdh works, and al-Tabari already declines to recite it; it is not transmitted in any of the ten canonical readings.",
      },
      {
        arabic: "نُنشِيهَا",
        transliteration: "nunshīhā",
        violates: "rasm",
        whyInvalid:
          "This form ('We originate them') is attributed to Ubayy ibn Ka'b in reading-variant compilations. It replaces the fourth letter with a yā', a different letter shape from the rā'/zāy of the 'Uthmanic skeleton, so it cannot be read from the codex.",
      },
    ],
    explanation:
      "In an undotted script rā' and zāy are the same shape, so the skeleton admits both readings and each has a sound transmission. Ibn al-Jazari assigns the zāy to Ibn 'Amir and the Kufans and the rā' to the rest. Nunshizuhā, from nashz (raised ground), pictures the bones being lifted and set in place; nunshiruhā, from anshara, says that God gives them life, the same verb used for resurrection in Q 80:22. The two describe one event from two angles: the assembling of the skeleton and its revival. The verse is a standard illustration in the classical works of how two readings can each add a detail that the other leaves unstated.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Baqarah (on nunshizuhā)",
        detail:
          "States that Ibn 'Amir and the Kufans ('Asim, Hamzah, al-Kisa'i, Khalaf) read with the dotted zāy and the remaining readers with the undotted rā'.",
      },
      {
        kind: "classical",
        citation: "Ibn al-Jazari, Tahbir al-Taysir fi al-Qira'at al-'Ashr, Surat al-Baqarah",
        detail:
          "Gives the same distribution in the form 'the Kufans and Ibn 'Amir: nunshizuhā with zāy, and the rest with rā''.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:259",
        detail:
          "Collates reports from al-Dani, al-Tabari, Sufyan al-Thawri and Ibn Khalawayh, including the non-canonical nanshuruhā attributed to Ibn 'Abbas.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/259/variants",
      },
    ],
  },
  {
    id: "v-49-6",
    surah: 49,
    ayah: 6,
    reference: "Q 49:6",
    surahName: "al-Hujurat",
    dottedSkeleton: "فتبينوا",
    contextArabic: "إِن جَآءَكُمْ فَاسِقٌۢ بِنَبَإٍۢ فَتَبَيَّنُوٓا۟",
    contextTranslation:
      "If a sinful person brings you a report, then verify it",
    kind: "dotting",
    variants: [
      {
        id: "v-49-6-a",
        arabic: "فَتَبَيَّنُوٓا۟",
        transliteration: "fa-tabayyanū",
        meaning: "then seek clarity, investigate until the matter is plain",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Abu 'Amr",
          "Ibn 'Amir",
          "'Asim",
          "Abu Ja'far",
          "Ya'qub",
        ],
      },
      {
        id: "v-49-6-b",
        arabic: "فَتَثَبَّتُوٓا۟",
        transliteration: "fa-tathabbatū",
        meaning: "then hold firm, do not act in haste until you are sure",
        readers: ["Hamzah", "al-Kisa'i", "Khalaf"],
      },
    ],
    riwayat: {
      hafs: "v-49-6-a",
      warsh: "v-49-6-a",
      qalun: "v-49-6-a",
      "duri-abu-amr": "v-49-6-a",
    },
    invalidReadings: [
      {
        arabic: "فَتَبَيَّتُوا",
        transliteration: "fa-tabayyatū",
        violates: "isnad",
        whyInvalid:
          "A constructed example: dotting the fourth tooth as tā' gives a real Arabic verb ('then plot by night') that fits the undotted skeleton letter for letter. It is not transmitted in any of the ten readings, and a pointing produced by guessing at the script without a chain is exactly what the isnad condition rules out.",
      },
      {
        arabic: "فَتَبَيَّنُونَ",
        transliteration: "fa-tabayyanūna",
        violates: "nahw",
        whyInvalid:
          "A constructed example: an imperative addressed to a group ends in -ū and cannot keep the indicative ending -ūna, so the form is ungrammatical here. It also replaces the final alif of the skeleton with a nūn, so it fails the rasm condition as well.",
      },
    ],
    explanation:
      "The skeleton has four identical 'teeth' between the fā' and the wāw. Dotted bā'-yā'-nūn it gives tabayyanū; dotted thā'-bā'-tā' it gives tathabbatū. Ibn al-Jazari records that Hamzah, al-Kisa'i and Khalaf read tathabbatū here and in both occurrences in Q 4:94, and the rest read tabayyanū; all four riwayat shown in this app therefore agree. Seeking clarity and refraining from haste are two halves of the same instruction about unverified news, and exegetes note that one cannot be done without the other. The pair is a clear case of a difference in dots that changes the root but not the ruling.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Nisa' (on fa-tabayyanū, Q 4:94 and Q 49:6)",
        detail:
          "States that Hamzah, al-Kisa'i and Khalaf read fa-tathabbatū in all three places (twice in al-Nisa' and once in al-Hujurat) and the rest read fa-tabayyanū.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Nisa'",
        detail:
          "Assigns fa-tathabbatū to Hamzah and al-Kisa'i among the Seven, with the remaining five reading fa-tabayyanū.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 49:6",
        detail:
          "Records al-Dani's attribution and al-Tabari's report that fa-tathabbatū was the reading of the Kufans and of the codex of Ibn Mas'ud.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/49/verse/6/variants",
      },
    ],
  },
  {
    id: "v-5-6",
    surah: 5,
    ayah: 6,
    reference: "Q 5:6",
    surahName: "al-Ma'idah",
    dottedSkeleton: "وارجلكم",
    contextArabic:
      "وَٱمْسَحُوا۟ بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى ٱلْكَعْبَيْنِ",
    contextTranslation:
      "and wipe over your heads, and your feet up to the ankles",
    kind: "vowels",
    variants: [
      {
        id: "v-5-6-a",
        arabic: "وَأَرْجُلَكُمْ",
        transliteration: "wa-arjulakum",
        meaning:
          "and your feet (accusative): most naturally joined to 'wash your faces and your hands'",
        readers: [
          "Nafi'",
          "Ibn 'Amir",
          "Hafs 'an 'Asim",
          "al-Kisa'i",
          "Ya'qub",
        ],
      },
      {
        id: "v-5-6-b",
        arabic: "وَأَرْجُلِكُمْ",
        transliteration: "wa-arjulikum",
        meaning:
          "and your feet (genitive): most naturally joined to 'wipe over your heads'",
        readers: [
          "Ibn Kathir",
          "Abu 'Amr",
          "Shu'bah 'an 'Asim",
          "Hamzah",
          "Abu Ja'far",
          "Khalaf",
        ],
      },
    ],
    riwayat: {
      hafs: "v-5-6-a",
      warsh: "v-5-6-a",
      qalun: "v-5-6-a",
      "duri-abu-amr": "v-5-6-b",
    },
    invalidReadings: [
      {
        arabic: "وَأَرْجُلُكُمْ",
        transliteration: "wa-arjulukum",
        violates: "isnad",
        whyInvalid:
          "The nominative ('and your feet likewise', as the subject of an implied predicate) fits the skeleton and can be defended grammatically. Ibn Khalawayh and Ibn Jinni record it from al-Hasan al-Basri as an anomalous reading; it has no place in the ten canonical readings and is not recited.",
      },
    ],
    explanation:
      "One short vowel separates the two readings, and both are canonical; the two transmitters of 'Asim are themselves divided. The accusative links the feet to the limbs that are washed, the genitive to the head that is wiped. Sunni jurists hold that washing is required, relying on the accusative reading and the Prophet's reported practice, and explain the genitive as attraction to the neighbouring word, as light washing, or as referring to wiping over leather socks. Ja'fari jurists hold that wiping is required, relying on the genitive reading and arguing that the accusative can also be joined to the position of 'heads'. Both schools accept both readings as Quran; the disagreement is over law and grammar, not over the text.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Ma'idah (on wa-arjulakum)",
        detail:
          "States that Nafi', Ibn 'Amir, al-Kisa'i, Ya'qub and Hafs read with the accusative and the remaining readers with the genitive.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Ma'idah",
        detail:
          "Among the Seven assigns the genitive to Ibn Kathir, Abu 'Amr, Hamzah and Shu'bah (Abu Bakr) from 'Asim, and the accusative to the rest.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 5:6",
        detail:
          "Collates the canonical attributions together with the anomalous nominative recorded from al-Hasan al-Basri by Ibn Khalawayh and Ibn Jinni, and al-Tabari's reports of both readings from early authorities.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/5/verse/6/variants",
      },
    ],
  },
  {
    id: "v-3-146",
    surah: 3,
    ayah: 146,
    reference: "Q 3:146",
    surahName: "Al 'Imran",
    dottedSkeleton: "قتل",
    contextArabic:
      "وَكَأَيِّن مِّن نَّبِىٍّۢ قَٰتَلَ مَعَهُۥ رِبِّيُّونَ كَثِيرٌۭ",
    contextTranslation:
      "How many a prophet there was alongside whom many devoted men fought",
    kind: "long-vowel",
    variants: [
      {
        id: "v-3-146-a",
        arabic: "قَٰتَلَ",
        transliteration: "qātala",
        meaning: "fought: many devoted men fought alongside him",
        readers: [
          "Ibn 'Amir",
          "'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Abu Ja'far",
          "Khalaf",
        ],
      },
      {
        id: "v-3-146-b",
        arabic: "قُتِلَ",
        transliteration: "qutila",
        meaning:
          "was killed: many a prophet was killed, or many devoted men with him were killed",
        readers: ["Nafi'", "Ibn Kathir", "Abu 'Amr", "Ya'qub"],
      },
    ],
    riwayat: {
      hafs: "v-3-146-a",
      warsh: "v-3-146-b",
      qalun: "v-3-146-b",
      "duri-abu-amr": "v-3-146-b",
    },
    invalidReadings: [
      {
        arabic: "قُتِّلَ",
        transliteration: "quttila",
        violates: "isnad",
        whyInvalid:
          "The intensive passive ('were slaughtered in great numbers') fits the three-letter skeleton and is grammatical. Ibn Khalawayh and Ibn Jinni record it from Qatadah as an anomalous reading, and Ibn Jinni discusses its sense in al-Muhtasab; it is not transmitted among the Ten.",
      },
      {
        arabic: "قَتَلَ",
        transliteration: "qatala",
        violates: "isnad",
        whyInvalid:
          "A constructed example: the simple active 'he killed' fits the skeleton and is a real verb, but it would make the prophet or his followers the killers without an object and is not transmitted by any canonical reader. The skeleton alone does not license a vocalisation.",
      },
    ],
    explanation:
      "The codices write the verb with three consonants and no alif, which accommodates both the form with a long vowel, qātala, and the passive qutila. Ibn al-Jazari assigns qutila to Nafi', Ibn Kathir and the two Basrans (Abu 'Amr and Ya'qub) and qātala to the rest. The verse was revealed about the battle of Uhud, when a rumour spread that the Prophet had been killed. Qātala consoles by example: earlier believers fought beside their prophets and did not weaken. Qutila goes further: even when a prophet, or many of his companions, were killed, the survivors did not lose heart. The second half of the verse, 'they did not weaken', applies under either reading.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat Al 'Imran (on qātala ma'ahu)",
        detail:
          "States that Nafi', Ibn Kathir and the two Basrans read qutila without alif and the remaining readers qātala with alif.",
      },
      {
        kind: "classical",
        citation: "Ibn al-Jazari, Tahbir al-Taysir fi al-Qira'at al-'Ashr, Surat Al 'Imran",
        detail:
          "Gives the reverse list: the Kufans, Ibn 'Amir and Abu Ja'far read qātala; the rest read qutila.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 3:146",
        detail:
          "Collates al-Dani's and Ibn Mujahid's attributions and the anomalous quttila recorded from Qatadah by Ibn Khalawayh and Ibn Jinni.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/3/verse/146/variants",
      },
    ],
  },
];
