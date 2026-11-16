import type { InteractiveVerse } from "@/data/types";

export const versesPart3: InteractiveVerse[] = [
  {
    id: "v-43-19",
    surah: 43,
    ayah: 19,
    reference: "Q 43:19",
    surahName: "al-Zukhruf",
    dottedSkeleton: "عبد",
    contextArabic:
      "وَجَعَلُوا۟ ٱلْمَلَٰٓئِكَةَ ٱلَّذِينَ هُمْ عِبَٰدُ ٱلرَّحْمَٰنِ إِنَٰثًا",
    contextTranslation:
      "And they have made the angels, who are servants of the All-Merciful, females",
    kind: "vowels-and-dotting",
    variants: [
      {
        id: "v-43-19-a",
        arabic: "عِبَٰدُ",
        transliteration: "ʿibādu",
        meaning: "servants of (the All-Merciful)",
        readers: ["Abu 'Amr", "'Asim", "Hamzah", "al-Kisa'i", "Khalaf"],
      },
      {
        id: "v-43-19-b",
        arabic: "عِندَ",
        transliteration: "ʿinda",
        meaning: "with, in the presence of (the All-Merciful)",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Ibn 'Amir",
          "Abu Ja'far",
          "Ya'qub",
        ],
      },
    ],
    riwayat: {
      hafs: "v-43-19-a",
      warsh: "v-43-19-b",
      qalun: "v-43-19-b",
      "duri-abu-amr": "v-43-19-a",
    },
    invalidReadings: [
      {
        arabic: "عِبَادَ",
        transliteration: "ʿibāda",
        violates: "isnad",
        whyInvalid:
          "The accusative fits the skeleton, and Ibn Khalawayh records it in his collection of anomalous readings from al-A'mash and the codex of Ibn Mas'ud. It did not reach the level of sound, widely accepted transmission and is not part of any of the ten readings.",
      },
      {
        arabic: "عَبِيدُ",
        transliteration: "ʿabīdu",
        violates: "rasm",
        whyInvalid:
          "The alternative plural ʿabīd ('slaves') is good Arabic and occurs elsewhere in the Quran, but here it would need a yā' between the bā' and the dāl. The 'Uthmanic skeleton has a single tooth at that point, so the form cannot be read from it.",
      },
    ],
    explanation:
      "The skeleton is ʿayn, one tooth, dāl. Dotted as bā' and read with an unwritten long vowel it gives ʿibādu, 'servants'; dotted as nūn it gives ʿinda, 'in the presence of'. Ibn al-Jazari assigns ʿinda to the two Madinans, Ibn Kathir, Ibn 'Amir and Ya'qub, and ʿibādu to the rest. The verse refutes the pagan claim that angels are God's daughters. One reading does so by status: they are servants, not offspring, as in Q 21:26. The other does so by rank: they are those near to God, as in Q 7:206 and Q 21:19. Both descriptions of the angels are stated elsewhere in the Quran in words on which all readers agree.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Zukhruf (on ʿibādu r-raḥmān)",
        detail:
          "States that the two Madinans (Nafi' and Abu Ja'far), Ibn Kathir, Ibn 'Amir and Ya'qub read ʿinda as an adverb, and the remaining readers ʿibādu as the plural of ʿabd.",
      },
      {
        kind: "classical",
        citation: "Ibn al-Jazari, Tahbir al-Taysir fi al-Qira'at al-'Ashr, Surat al-Zukhruf",
        detail:
          "Gives the same list for ʿinda (the two Harami readers, Abu Ja'far, Ibn 'Amir and Ya'qub) and describes the vocalisation of each reading.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 43:19",
        detail:
          "Collates al-Dani's attributions, al-Tabari's regional reports, and the anomalous accusative ʿibāda recorded by Ibn Khalawayh.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/43/verse/19/variants",
      },
    ],
  },
  {
    id: "v-6-57",
    surah: 6,
    ayah: 57,
    reference: "Q 6:57",
    surahName: "al-An'am",
    dottedSkeleton: "يقص",
    contextArabic:
      "إِنِ ٱلْحُكْمُ إِلَّا لِلَّهِ ۖ يَقُصُّ ٱلْحَقَّ ۖ وَهُوَ خَيْرُ ٱلْفَٰصِلِينَ",
    contextTranslation:
      "Judgement belongs to God alone; He relates the truth, and He is the best of deciders",
    kind: "vowels-and-dotting",
    variants: [
      {
        id: "v-6-57-a",
        arabic: "يَقُصُّ",
        transliteration: "yaquṣṣu",
        meaning: "He relates, He tells (the truth)",
        readers: ["Nafi'", "Ibn Kathir", "'Asim", "Abu Ja'far"],
      },
      {
        id: "v-6-57-b",
        arabic: "يَقْضِ",
        transliteration: "yaqḍi",
        meaning: "He decrees, He judges (with the truth)",
        readers: [
          "Abu 'Amr",
          "Ibn 'Amir",
          "Hamzah",
          "al-Kisa'i",
          "Ya'qub",
          "Khalaf",
        ],
      },
    ],
    riwayat: {
      hafs: "v-6-57-a",
      warsh: "v-6-57-a",
      qalun: "v-6-57-a",
      "duri-abu-amr": "v-6-57-b",
    },
    invalidReadings: [
      {
        arabic: "يَقْضِى بِٱلْحَقِّ",
        transliteration: "yaqḍī bi-l-ḥaqqi",
        violates: "rasm",
        whyInvalid:
          "Abu 'Ubayd reports this wording, 'He judges by the truth', from Ibn Mas'ud. It adds the preposition bi- to the following word and so departs from the consonantal text of every 'Uthmanic codex. It is preserved as an early exegetical witness, not as a recited reading.",
      },
      {
        arabic: "يَقُضُّ",
        transliteration: "yaquḍḍu",
        violates: "isnad",
        whyInvalid:
          "A constructed example: taking the dot of one canonical reading and the vowels of the other yields a real verb meaning 'He breaks apart', which fits the skeleton but gives an unacceptable sense and has no transmission. Canonical readings cannot be blended letter by letter.",
      },
    ],
    explanation:
      "Without dots ṣād and ḍād are one shape, and the final yā' of yaqḍī is not written in the codices because it is not pronounced before the following word. Ibn al-Jazari assigns yaquṣṣu to the two Madinans, Ibn Kathir and 'Asim, and yaqḍi to the rest. 'He relates the truth' echoes Q 12:3, 'We relate to you the best of narratives': what God tells is true. 'He decrees the truth' fits the close of the verse, 'He is the best of deciders'. Classical grammarians debated which suits the context better, and each reading had early advocates. The tradition retains both because both are soundly transmitted and both attribute to God something the Quran affirms elsewhere.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-An'am (on yaquṣṣu l-ḥaqqa)",
        detail:
          "States that the two Madinans, Ibn Kathir and 'Asim read with an undotted doubled ṣād from qaṣaṣ, and the remaining readers with a dotted ḍād from qaḍā'.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-An'am",
        detail:
          "Among the Seven assigns yaqḍi to Abu 'Amr, Ibn 'Amir, Hamzah and al-Kisa'i, leaving yaquṣṣu to Nafi', Ibn Kathir and 'Asim.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 6:57",
        detail:
          "Collates al-Dani's attribution with reports from Abu 'Ubayd, al-Farra' and al-Tabari, including the non-'Uthmanic wording attributed to Ibn Mas'ud.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/6/verse/57/variants",
      },
    ],
  },
  {
    id: "v-2-132",
    surah: 2,
    ayah: 132,
    reference: "Q 2:132",
    surahName: "al-Baqarah",
    dottedSkeleton: "ووصى",
    alternateSkeleton: "واوصى",
    contextArabic: "وَوَصَّىٰ بِهَآ إِبْرَٰهِۦمُ بَنِيهِ وَيَعْقُوبُ",
    contextTranslation:
      "And Abraham enjoined it upon his sons, and so did Jacob",
    kind: "skeletal",
    variants: [
      {
        id: "v-2-132-a",
        arabic: "وَوَصَّىٰ",
        transliteration: "wa-waṣṣā",
        meaning: "and he enjoined (form II: repeatedly, emphatically)",
        readers: [
          "Ibn Kathir",
          "Abu 'Amr",
          "'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Ya'qub",
          "Khalaf",
        ],
      },
      {
        id: "v-2-132-b",
        arabic: "وَأَوْصَىٰ",
        transliteration: "wa-awṣā",
        meaning: "and he enjoined (form IV: gave as a charge)",
        readers: ["Nafi'", "Ibn 'Amir", "Abu Ja'far"],
      },
    ],
    riwayat: {
      hafs: "v-2-132-a",
      warsh: "v-2-132-b",
      qalun: "v-2-132-b",
      "duri-abu-amr": "v-2-132-a",
    },
    invalidReadings: [
      {
        arabic: "وَوُصِّىَ",
        transliteration: "wa-wuṣṣiya",
        violates: "nahw",
        whyInvalid:
          "A constructed example: the passive 'and he was enjoined' fits the skeleton of the Iraqi and Makkan codices, but it leaves 'his sons' without anything to govern it, so the sentence no longer parses. No reader transmits it.",
      },
      {
        arabic: "وَصَّىٰ",
        transliteration: "waṣṣā",
        violates: "rasm",
        whyInvalid:
          "A constructed example: reading the verb without the conjunction drops a wāw that every 'Uthmanic codex has at this place, in both regional spellings. A reading may follow any one of the regional codices, but it may not follow none of them.",
      },
    ],
    explanation:
      "Here the difference is in the consonantal text itself. Ibn al-Jazari states that the two Madinans and Ibn 'Amir read wa-awṣā with an alif between the two wāws, 'and thus it is in the codices of the people of Madinah and Syria', while the rest read wa-waṣṣā, 'and thus it is in their codices'. Each reader follows the codex of his city. Both verbs derive from the same root and mean to charge someone with something; grammarians note that the doubled form can suggest repetition. Michael Cook and Hythem Sidky have shown that this variant, with about forty others, patterns consistently across the regional codices and their surviving manuscript descendants, which confirms that the reports describe real early copies.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Baqarah (on wa-waṣṣā bihā Ibrāhīm)",
        detail:
          "States that the two Madinans and Ibn 'Amir read wa-awṣā, as written in the codices of Madinah and Syria, and the remaining readers wa-waṣṣā, as written in their own codices.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Muqni' fi Ma'rifat Marsum Masahif Ahl al-Amsar (chapter on the differences between the codices of the regions), Surat al-Baqarah",
        detail:
          "Lists Q 2:132 among the places where the codices of Madinah and Syria have an additional alif and those of Makkah and Iraq do not; Abu 'Ubayd reports the same in Fada'il al-Qur'an.",
      },
      {
        kind: "academic",
        citation: "Hythem Sidky, 'On the Regionality of Qur'anic Codices', Journal of the International Qur'anic Studies Association 5 (2020), 133–210",
        detail:
          "Tests the reported regional variants, including wa-waṣṣā and wa-awṣā, against early manuscripts and finds that they sort the manuscripts into regional families descending from one archetype.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:132",
        detail:
          "Collates Ibn Mujahid, al-Dani and al-Banna' on the readers and Abu 'Ubayd and al-Farra' on the codices of Madinah and Iraq.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/132/variants",
      },
    ],
  },
  {
    id: "v-57-24",
    surah: 57,
    ayah: 24,
    reference: "Q 57:24",
    surahName: "al-Hadid",
    dottedSkeleton: "هو الغني",
    alternateSkeleton: "الغني",
    contextArabic:
      "وَمَن يَتَوَلَّ فَإِنَّ ٱللَّهَ هُوَ ٱلْغَنِىُّ ٱلْحَمِيدُ",
    contextTranslation:
      "And whoever turns away, God is indeed the Self-Sufficient, the Praiseworthy",
    kind: "skeletal",
    variants: [
      {
        id: "v-57-24-a",
        arabic: "فَإِنَّ ٱللَّهَ هُوَ ٱلْغَنِىُّ",
        transliteration: "fa-inna llāha huwa l-ghaniyyu",
        meaning:
          "God, He is the Self-Sufficient (with the emphatic pronoun huwa)",
        readers: [
          "Ibn Kathir",
          "Abu 'Amr",
          "'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Ya'qub",
          "Khalaf",
        ],
      },
      {
        id: "v-57-24-b",
        arabic: "فَإِنَّ ٱللَّهَ ٱلْغَنِىُّ",
        transliteration: "fa-inna llāha l-ghaniyyu",
        meaning: "God is the Self-Sufficient (without the pronoun)",
        readers: ["Nafi'", "Ibn 'Amir", "Abu Ja'far"],
      },
    ],
    riwayat: {
      hafs: "v-57-24-a",
      warsh: "v-57-24-b",
      qalun: "v-57-24-b",
      "duri-abu-amr": "v-57-24-a",
    },
    invalidReadings: [
      {
        arabic: "فَإِنَّ ٱللَّهَ لَهُوَ ٱلْغَنِىُّ",
        transliteration: "fa-inna llāha la-huwa l-ghaniyyu",
        violates: "rasm",
        whyInvalid:
          "A constructed example of a memoriser's slip: the emphatic la-huwa belongs to the similar verse Q 22:64. Here it would add a lām that neither regional spelling of this verse contains, so it fails the rasm condition even though it is perfectly good Quranic Arabic in its own place.",
      },
      {
        arabic: "هُوَ ٱلْغَنِىَّ",
        transliteration: "huwa l-ghaniyya",
        violates: "nahw",
        whyInvalid:
          "A constructed example: the predicate of inna is nominative, and the separating pronoun huwa does not change that. Putting 'the Self-Sufficient' in the accusative fits the skeleton but breaks the rule of inflection, and no reader transmits it.",
      },
    ],
    explanation:
      "A whole word is present in some codices and absent in others. Ibn al-Jazari states that the two Madinans and Ibn 'Amir read without huwa, 'and thus it is in the codices of Madinah and Syria', and that the rest read with it, 'and thus it is in their codices'. The pronoun is what Arabic grammar calls a pronoun of separation: it adds emphasis and restriction, 'God, He alone is the Self-Sufficient', without adding a new statement. The parallel verses Q 31:26 and Q 60:6 have the pronoun in all codices. The variant is one of the clearest illustrations that the regional copies of the 'Uthmanic text differed in a small number of fixed places and that each reading tradition tracks its own regional copy.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Hadid (on fa-inna llāha huwa l-ghaniyy)",
        detail:
          "States that the two Madinans and Ibn 'Amir read without huwa, as in the codices of Madinah and Syria, and the remaining readers with huwa, as in their codices.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Muqni' fi Ma'rifat Marsum Masahif Ahl al-Amsar (chapter on the differences between the codices of the regions), Surat al-Hadid",
        detail:
          "Lists Q 57:24 among the differences between the codices of Madinah and Syria (without huwa) and those of the other regions (with huwa); Abu 'Ubayd reports the same.",
      },
      {
        kind: "academic",
        citation: "Michael Cook, 'The Stemma of the Regional Codices of the Koran', Graeco-Arabica 9–10 (2004), 89–104",
        detail:
          "Analyses the reported variants between the regional codices, of which this is one, and shows that their distribution forms a consistent stemma.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 57:24",
        detail:
          "Collates Ibn Mujahid, al-Dani and al-Banna' on the readers and Abu 'Ubayd and al-Farra' on the codices of Madinah, Syria and Iraq.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/57/verse/24/variants",
      },
    ],
  },
  {
    id: "v-3-133",
    surah: 3,
    ayah: 133,
    reference: "Q 3:133",
    surahName: "Al 'Imran",
    dottedSkeleton: "وسارعوا",
    alternateSkeleton: "سارعوا",
    contextArabic: "وَسَارِعُوٓا۟ إِلَىٰ مَغْفِرَةٍۢ مِّن رَّبِّكُمْ",
    contextTranslation: "And hasten to forgiveness from your Lord",
    kind: "skeletal",
    variants: [
      {
        id: "v-3-133-a",
        arabic: "وَسَارِعُوٓا۟",
        transliteration: "wa-sāriʿū",
        meaning: "And hasten (joined to the preceding commands by 'and')",
        readers: [
          "Ibn Kathir",
          "Abu 'Amr",
          "'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Ya'qub",
          "Khalaf",
        ],
      },
      {
        id: "v-3-133-b",
        arabic: "سَارِعُوٓا۟",
        transliteration: "sāriʿū",
        meaning: "Hasten (a fresh sentence without the conjunction)",
        readers: ["Nafi'", "Ibn 'Amir", "Abu Ja'far"],
      },
    ],
    riwayat: {
      hafs: "v-3-133-a",
      warsh: "v-3-133-b",
      qalun: "v-3-133-b",
      "duri-abu-amr": "v-3-133-a",
    },
    invalidReadings: [
      {
        arabic: "وَسَابِقُوٓا۟",
        transliteration: "wa-sābiqū",
        violates: "rasm",
        whyInvalid:
          "A constructed example of a memoriser's slip: 'race to forgiveness from your Lord' is the wording of the parallel verse Q 57:21. Here it would replace two letters of the skeleton with different shapes, so it cannot be read from any codex at this place.",
      },
      {
        arabic: "وَسَارَعُوا۟",
        transliteration: "wa-sāraʿū",
        violates: "isnad",
        whyInvalid:
          "A constructed example: with fatḥah on the rā' the word becomes a past tense, 'and they hastened', which fits the skeleton and is grammatical in isolation. It is not transmitted by any reader, and the surrounding commands show that an imperative is intended.",
      },
    ],
    explanation:
      "The codices differ by a single wāw. Ibn al-Jazari states that the two Madinans and Ibn 'Amir read sāriʿū without the wāw, 'and thus it is in the codex of Madinah and Syria', and that the rest read with it, 'and thus it is in their codices'. With the conjunction the command is linked to the preceding ones, 'fear the Fire' and 'obey God and the Messenger'; without it the sentence opens afresh, a construction Arabic rhetoricians call resumption. The instruction is identical. This is the pattern of nearly all the regional codex variants: a conjunction, a pronoun or a single letter, with no change in what the verse teaches.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat Al 'Imran (on wa-sāriʿū)",
        detail:
          "States that the two Madinans and Ibn 'Amir read without a wāw before the sīn, as in the codices of Madinah and Syria, and the remaining readers with the wāw, as in their codices.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Muqni' fi Ma'rifat Marsum Masahif Ahl al-Amsar (chapter on the differences between the codices of the regions), Surat Al 'Imran",
        detail:
          "Lists Q 3:133 among the places where the codices of Madinah and Syria lack a wāw that the codices of the other regions have; Abu 'Ubayd reports the same.",
      },
      {
        kind: "academic",
        citation: "Hythem Sidky, 'On the Regionality of Qur'anic Codices', Journal of the International Qur'anic Studies Association 5 (2020), 133–210",
        detail:
          "Uses the reported regional variants to classify early manuscripts and reconstructs four ancestral codices; the study confirms the reality of the regional differences without making claims about their origin in prophetic teaching.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 3:133",
        detail:
          "Collates Ibn Mujahid, al-Dani and al-Banna' on the readers and Abu 'Ubayd and al-Nahhas on the codices of Madinah, Syria and Iraq.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/3/verse/133/variants",
      },
    ],
  },
];
