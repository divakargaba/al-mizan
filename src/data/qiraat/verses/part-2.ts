import type { InteractiveVerse } from "@/data/types";

export const versesPart2: InteractiveVerse[] = [
  {
    id: "v-2-184",
    surah: 2,
    ayah: 184,
    reference: "Q 2:184",
    surahName: "al-Baqarah",
    dottedSkeleton: "مسكين",
    contextArabic:
      "وَعَلَى ٱلَّذِينَ يُطِيقُونَهُۥ فِدْيَةٌۭ طَعَامُ مِسْكِينٍۢ",
    contextTranslation:
      "And upon those who are able to do it (with hardship) there is a ransom: the feeding of a poor person",
    kind: "long-vowel",
    variants: [
      {
        id: "v-2-184-a",
        arabic: "فِدْيَةٌ طَعَامُ مِسْكِينٍ",
        transliteration: "fidyatun ṭaʿāmu miskīnin",
        meaning: "a ransom, namely the feeding of one poor person",
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
        id: "v-2-184-b",
        arabic: "فِدْيَةُ طَعَامِ مَسَٰكِينَ",
        transliteration: "fidyatu ṭaʿāmi masākīna",
        meaning: "the ransom of feeding poor people (construct phrase, plural)",
        readers: ["Nafi'", "Ibn Dhakwan 'an Ibn 'Amir", "Abu Ja'far"],
      },
      {
        id: "v-2-184-c",
        arabic: "فِدْيَةٌ طَعَامُ مَسَٰكِينَ",
        transliteration: "fidyatun ṭaʿāmu masākīna",
        meaning: "a ransom, namely the feeding of poor people (plural)",
        readers: ["Hisham 'an Ibn 'Amir"],
      },
    ],
    riwayat: {
      hafs: "v-2-184-a",
      warsh: "v-2-184-b",
      qalun: "v-2-184-b",
      "duri-abu-amr": "v-2-184-a",
    },
    invalidReadings: [
      {
        arabic: "مَسَاكِينٍ",
        transliteration: "masākīnin",
        violates: "nahw",
        whyInvalid:
          "A constructed example: the plural masākīn is a diptote, a noun pattern that takes neither tanwīn nor kasrah when indefinite, so the genitive is masākīna. The form with tanwīn fits the skeleton but breaks a firm rule of Arabic inflection, and no reader transmits it.",
      },
      {
        arabic: "مِسْكِينًا",
        transliteration: "miskīnan",
        violates: "rasm",
        whyInvalid:
          "A constructed example: an indefinite accusative is written with a final alif, which the 'Uthmanic skeleton does not have here, and nothing in the sentence governs an accusative. The form therefore fails the rasm condition and the grammar condition together.",
      },
    ],
    explanation:
      "The codices write the last word without an alif, so the skeleton carries both the singular miskīn and the plural masākīn. Three combinations are canonical. Most readers have the singular: each missed day is redeemed by feeding one poor person. Nafi', Ibn Dhakwan and Abu Ja'far read a construct phrase with the plural, and Hisham keeps the tanwīn but reads the plural. The classical commentators explain that the plural matches the plural 'those who', since many people fasting many days will feed many poor, while the singular states the rate per day. The legal ruling is the same under all three; only the grammatical point of view changes.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, Tahbir al-Taysir fi al-Qira'at al-'Ashr, Surat al-Baqarah (on fidyatun ṭaʿāmu miskīn)",
        detail:
          "States that Nafi', Ibn Dhakwan and Abu Ja'far read with the construct and the plural, that the rest read with tanwīn, nominative and the singular, and that Hisham alone combines tanwīn with the plural.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Baqarah",
        detail:
          "Gives the same three-way split among the Seven, assigning fidyatu ṭaʿāmi masākīna to Nafi' and Ibn Dhakwan and the plural with tanwīn to Hisham.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:184",
        detail:
          "Collates al-Dani's attributions with early reports from al-Tabari, Ibn Wahb and al-Akhfash on the singular and plural readings.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/184/variants",
      },
    ],
  },
  {
    id: "v-2-85",
    surah: 2,
    ayah: 85,
    reference: "Q 2:85",
    surahName: "al-Baqarah",
    dottedSkeleton: "تعملون",
    contextArabic: "وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ",
    contextTranslation: "And God is not unaware of what you do",
    kind: "dotting",
    variants: [
      {
        id: "v-2-85-a",
        arabic: "تَعْمَلُونَ",
        transliteration: "taʿmalūna",
        meaning: "what you do (second person: direct address)",
        readers: [
          "Abu 'Amr",
          "Ibn 'Amir",
          "Hafs 'an 'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Abu Ja'far",
        ],
      },
      {
        id: "v-2-85-b",
        arabic: "يَعْمَلُونَ",
        transliteration: "yaʿmalūna",
        meaning: "what they do (third person: spoken about them)",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Shu'bah 'an 'Asim",
          "Ya'qub",
          "Khalaf",
        ],
      },
    ],
    riwayat: {
      hafs: "v-2-85-a",
      warsh: "v-2-85-b",
      qalun: "v-2-85-b",
      "duri-abu-amr": "v-2-85-a",
    },
    invalidReadings: [
      {
        arabic: "نَعْمَلُونَ",
        transliteration: "naʿmalūna",
        violates: "nahw",
        whyInvalid:
          "A constructed example: dotting the first letter as nūn fits the undotted skeleton, but Arabic has no such verb form. The prefix na- marks 'we' and takes no plural ending (naʿmalu), while the ending -ūna belongs to 'you' or 'they'. The combination is ungrammatical, and no reader transmits it.",
      },
    ],
    explanation:
      "In the undotted script the prefixes tā' and yā' are identical, so every imperfect verb is open to both, and this pair is the commonest type of variant in the Quran. Here Ibn al-Jazari records that Nafi', Ibn Kathir, Ya'qub, Khalaf and Shu'bah read the third person and the rest the second person. The verse rebukes the Children of Israel directly for keeping part of the Scripture and breaking part. With 'you do' the warning continues the address; with 'they do' the speaker turns aside and speaks about them, a shift of person (iltifāt) that is a regular feature of Quranic style. Both readings assert the same thing: nothing done escapes God's knowledge.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, Tahbir al-Taysir fi al-Qira'at al-'Ashr, Surat al-Baqarah (on ʿammā yaʿmalūna followed by ulā'ika lladhīna)",
        detail:
          "States that the two Harami readers (Nafi' and Ibn Kathir), Ya'qub, Abu Bakr Shu'bah and Khalaf read with yā', and the rest with tā'.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Baqarah",
        detail:
          "Among the Seven assigns yaʿmalūna at this place to Nafi', Ibn Kathir and Shu'bah from 'Asim, and taʿmalūna to the others.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:85",
        detail:
          "Lists al-Dani's entries for Nafi', Ibn Kathir and Shu'bah reading yaʿmalūna, alongside al-Tabari's discussion of both readings.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/85/variants",
      },
    ],
  },
  {
    id: "v-2-10",
    surah: 2,
    ayah: 10,
    reference: "Q 2:10",
    surahName: "al-Baqarah",
    dottedSkeleton: "يكذبون",
    contextArabic: "وَلَهُمْ عَذَابٌ أَلِيمٌۢ بِمَا كَانُوا۟ يَكْذِبُونَ",
    contextTranslation:
      "And for them is a painful punishment because they used to lie",
    kind: "vowels",
    variants: [
      {
        id: "v-2-10-a",
        arabic: "يَكْذِبُونَ",
        transliteration: "yakdhibūna",
        meaning: "they used to lie (in claiming to believe)",
        readers: ["'Asim", "Hamzah", "al-Kisa'i", "Khalaf"],
      },
      {
        id: "v-2-10-b",
        arabic: "يُكَذِّبُونَ",
        transliteration: "yukadhdhibūna",
        meaning: "they used to deny (the Messenger and the revelation)",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Abu 'Amr",
          "Ibn 'Amir",
          "Abu Ja'far",
          "Ya'qub",
        ],
      },
    ],
    riwayat: {
      hafs: "v-2-10-a",
      warsh: "v-2-10-b",
      qalun: "v-2-10-b",
      "duri-abu-amr": "v-2-10-b",
    },
    invalidReadings: [
      {
        arabic: "يُكَذَّبُونَ",
        transliteration: "yukadhdhabūna",
        violates: "isnad",
        whyInvalid:
          "A constructed example: the passive ('because they used to be called liars') fits the skeleton and is a well-formed verb, but it reverses the sense of the verse and is not transmitted in any of the ten readings. A vocalisation that the script permits is not thereby a reading.",
      },
    ],
    explanation:
      "The skeleton is identical; the readings differ only in vowels and in the doubling of the middle consonant. Ibn al-Jazari records that the Kufans ('Asim, Hamzah, al-Kisa'i and Khalaf) read yakdhibūna and the rest yukadhdhibūna. The passage describes the hypocrites of Madinah, who said 'we believe' while they did not (Q 2:8). The Kufan reading names their lie; the other names the inner denial that the lie concealed. Al-Tabari and later commentators point out that each description is true of the same people and is supported by the context, which is why exegetes regularly cite this verse to show that two readings can function like two verses.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Baqarah (on yakdhibūna)",
        detail:
          "States that the Kufans read with fatḥah on the yā' and a light dhāl, and the remaining readers with ḍammah and a doubled dhāl.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Baqarah",
        detail:
          "Assigns yukadhdhibūna to Nafi', Ibn Kathir, Abu 'Amr and Ibn 'Amir, leaving yakdhibūna to the three Kufans among the Seven.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:10",
        detail:
          "Collates al-Dani's attribution with al-Tabari's report that yakdhibūna was the reading of Kufah and yukadhdhibūna that of the Hijaz, Madinah and Basrah.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/10/variants",
      },
    ],
  },
  {
    id: "v-2-125",
    surah: 2,
    ayah: 125,
    reference: "Q 2:125",
    surahName: "al-Baqarah",
    dottedSkeleton: "واتخذوا",
    contextArabic: "وَٱتَّخِذُوا۟ مِن مَّقَامِ إِبْرَٰهِۦمَ مُصَلًّۭى",
    contextTranslation:
      "And take the standing-place of Abraham as a place of prayer",
    kind: "vowels",
    variants: [
      {
        id: "v-2-125-a",
        arabic: "وَٱتَّخِذُوا۟",
        transliteration: "wa-ttakhidhū",
        meaning: "and take (imperative: a command to the believers)",
        readers: [
          "Ibn Kathir",
          "Abu 'Amr",
          "'Asim",
          "Hamzah",
          "al-Kisa'i",
          "Abu Ja'far",
          "Ya'qub",
          "Khalaf",
        ],
      },
      {
        id: "v-2-125-b",
        arabic: "وَٱتَّخَذُوا۟",
        transliteration: "wa-ttakhadhū",
        meaning: "and they took (past tense: a report about earlier people)",
        readers: ["Nafi'", "Ibn 'Amir"],
      },
    ],
    riwayat: {
      hafs: "v-2-125-a",
      warsh: "v-2-125-b",
      qalun: "v-2-125-b",
      "duri-abu-amr": "v-2-125-a",
    },
    invalidReadings: [
      {
        arabic: "وَٱتُّخِذُوا۟",
        transliteration: "wa-ttukhidhū",
        violates: "isnad",
        whyInvalid:
          "A constructed example: the passive ('and they were taken') is a real form of the verb and fits the skeleton exactly, but it leaves the phrase 'a place of prayer' without a sensible role and is not transmitted by any canonical reader. Fitting the script is necessary for a reading but never sufficient.",
      },
    ],
    explanation:
      "A single vowel on the khā' turns a command into a narrative. Ibn al-Jazari records that Nafi' and Ibn 'Amir read the past tense, 'and they took', and all the others the imperative. As an imperative the clause addresses the Muslim community and is the scriptural basis for the two units of prayer performed behind the Station of Abraham after circling the Ka'bah; a report from 'Umar (Sahih al-Bukhari 4483) connects the revelation of the verse with his suggestion to the Prophet. As a past tense it continues the preceding sentence, 'We made the House a place of return for people', and reports that people did take it as a place of prayer. The practice is established under both readings; one commands it and the other records it.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Baqarah (on wa-ttakhidhū)",
        detail:
          "States that Nafi' and Ibn 'Amir read with fatḥah on the khā' as a report, and the remaining readers with kasrah as a command.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Taysir fi al-Qira'at al-Sab', Surat al-Baqarah",
        detail:
          "Assigns wa-ttakhadhū to Nafi' and to both transmitters of Ibn 'Amir (Hisham and Ibn Dhakwan), with the other five of the Seven reading the imperative.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 2:125",
        detail:
          "Collates al-Dani's attribution with al-Tabari's report that the past tense was a reading of Madinah and Syria and the imperative that of Kufah, Basrah and Makkah.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/2/verse/125/variants",
      },
    ],
  },
  {
    id: "v-21-4",
    surah: 21,
    ayah: 4,
    reference: "Q 21:4",
    surahName: "al-Anbiya'",
    dottedSkeleton: "قال",
    alternateSkeleton: "قل",
    contextArabic:
      "قَالَ رَبِّى يَعْلَمُ ٱلْقَوْلَ فِى ٱلسَّمَآءِ وَٱلْأَرْضِ",
    contextTranslation:
      "He said: My Lord knows whatever is spoken in the heaven and the earth",
    kind: "skeletal",
    variants: [
      {
        id: "v-21-4-a",
        arabic: "قَالَ",
        transliteration: "qāla",
        meaning: "He said (a report of the Prophet's reply)",
        readers: ["Hafs 'an 'Asim", "Hamzah", "al-Kisa'i", "Khalaf"],
      },
      {
        id: "v-21-4-b",
        arabic: "قُل",
        transliteration: "qul",
        meaning: "Say (a command to the Prophet to reply)",
        readers: [
          "Nafi'",
          "Ibn Kathir",
          "Abu 'Amr",
          "Ibn 'Amir",
          "Shu'bah 'an 'Asim",
          "Abu Ja'far",
          "Ya'qub",
        ],
      },
    ],
    riwayat: {
      hafs: "v-21-4-a",
      warsh: "v-21-4-b",
      qalun: "v-21-4-b",
      "duri-abu-amr": "v-21-4-b",
    },
    invalidReadings: [
      {
        arabic: "قِيلَ",
        transliteration: "qīla",
        violates: "rasm",
        whyInvalid:
          "A constructed example: the passive 'it was said' would need a yā' between the qāf and the lām. Neither spelling found in the 'Uthmanic codices at this place has that letter, and 'My Lord knows' requires a first-person speaker, which an impersonal passive does not supply.",
      },
      {
        arabic: "قَالُوا",
        transliteration: "qālū",
        violates: "rasm",
        whyInvalid:
          "A constructed example: the plural 'they said' adds a wāw and an alif that no codex has here, and it clashes with the singular 'my Lord' that follows. It fails both the rasm condition and the requirement of grammatical coherence.",
      },
    ],
    explanation:
      "This is one of the places where the regional codices themselves differ. Abu 'Ubayd and al-Dani report that the codices of Kufah wrote the word with an alif and the other codices without it. Ibn al-Jazari records that Hafs, Hamzah, al-Kisa'i and Khalaf read qāla, 'he said', and the rest qul, 'say'. Shu'bah, though a Kufan, reads qul; the spelling without alif can carry either reading, because early orthography often omitted medial ā, whereas the spelling with alif fixes qāla. In meaning the two are a command and its fulfilment: God tells the Prophet to answer those who whisper against him, and the Prophet gives that answer.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari, al-Nashr fi al-Qira'at al-'Ashr, Farsh al-Huruf, Surat al-Anbiya' (on qāla rabbī yaʿlamu)",
        detail:
          "States that Hamzah, al-Kisa'i, Khalaf and Hafs read qāla with alif as a report and the remaining readers qul without alif as a command.",
      },
      {
        kind: "classical",
        citation: "Abu 'Amr al-Dani, al-Muqni' fi Ma'rifat Marsum Masahif Ahl al-Amsar (chapter on the differences between the codices of the regions), Surat al-Anbiya'",
        detail:
          "Reports that the codices of the people of Kufah have the word with alif at Q 21:4 and the remaining codices without it; Abu 'Ubayd gives the same report in Fada'il al-Qur'an.",
      },
      {
        kind: "academic",
        citation: "Corpus Coranicum, Lesarten (variant readings database), Q 21:4",
        detail:
          "Collates Ibn Mujahid, al-Dani and Ibn al-Jazari on the readers, and Abu 'Ubayd's report that the Kufan codex read qāla and the Basran codex qul.",
        url: "https://corpuscoranicum.de/en/verse-navigator/sura/21/verse/4/variants",
      },
    ],
  },
];
