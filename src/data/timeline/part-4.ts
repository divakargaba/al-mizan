import type { TimelineMilestone } from "@/data/types";

export const timelinePart4: TimelineMilestone[] = [
  {
    id: "t16",
    yearCE: 1053,
    dateLabel: "d. 1053 CE",
    hijriLabel: "d. 444 AH",
    title: "Al-Dani Documents the Uthmanic Rasm",
    arabicTitle: "أبو عمرو الداني وعلم الرسم",
    category: "scholarship",
    description:
      "Abu ʿAmr ʿUthman ibn Saʿid al-Dani of Cordoba and Denia (d. 444 AH) compiled al-Muqniʿ fi maʿrifat marsum masahif ahl al-amsar, a systematic record of how words are spelled in the Uthmanic codices and of the places where the codices of Medina, Mecca, Syria, Basra and Kufa were reported to differ. He also wrote al-Taysir on the Seven Readings and al-Muhkam on pointing. His pupil Abu Dawud Sulayman ibn Najah continued the work on the rasm.",
    significance:
      "Al-Dani's catalogue is the data on which the modern stemmatic studies rest. Michael Cook showed that the regional variants he reports form a family tree that medieval scholars could not have invented, and Sidky and Dutton found the same variants in manuscripts written three or four centuries before al-Dani. His works, with those of Ibn Najah, were also the authorities used by the editors of the 1924 Cairo edition to restore the Uthmanic spelling.",
    sources: [
      {
        kind: "classical",
        citation: "Abu ʿAmr al-Dani (d. 444/1053), al-Muqniʿ fi maʿrifat marsum masahif ahl al-amsar",
        detail:
          "The classical reference for the orthography of the Uthmanic codices and for the list of differences between the regional exemplars.",
      },
      {
        kind: "academic",
        citation: "M. Cook, 'The Stemma of the Regional Codices of the Koran', Graeco-Arabica 9–10 (2004), 89–104",
        detail:
          "Demonstrates that the variants al-Dani reports between the regional codices are stemmatically coherent and therefore reflect genuine early copies.",
      },
    ],
  },
  {
    id: "t17",
    yearCE: 1429,
    dateLabel: "d. 1429 CE",
    hijriLabel: "d. 833 AH",
    title: "Ibn al-Jazari and the Ten Readings",
    arabicTitle: "ابن الجزري والقراءات العشر",
    category: "scholarship",
    description:
      "Shams al-Din Muhammad Ibn al-Jazari, born in Damascus and died in Shiraz in 833 AH, composed al-Nashr fi l-qiraʾat al-ʿashr and its versified summary Tayyibat al-Nashr. He argued that the readings of three further readers, Abu Jaʿfar of Medina, Yaʿqub of Basra and Khalaf of Kufa, are as soundly transmitted as the Seven, and he documented the chains of transmission for all ten through their transmitters. He also gave the classic formulation of the three conditions of a valid reading.",
    significance:
      "With Ibn al-Jazari the canon of recitation reached the form taught today: ten readers, each with two principal transmitters, and a stated test of agreement with an Uthmanic codex, correct Arabic and sound transmission. His chains are the ones through which living reciters still trace their licences. The work shows the oral tradition documenting itself in writing with named links, eight centuries after the Prophet, and tying every accepted reading to the Uthmanic skeleton.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn al-Jazari (d. 833/1429), al-Nashr fi l-qiraʾat al-ʿashr",
        detail:
          "Establishes the Ten Readings with their chains of transmission and states the three conditions (rasm, Arabic, chain) for accepting a reading.",
      },
      {
        kind: "academic",
        citation: "S. H. Nasser, The Second Canonization of the Qurʾān (324/936): Ibn Mujāhid and the Founding of the Seven Readings (Leiden: Brill, 2020)",
        detail:
          "Studies the formation of the canonical reading systems after Ibn Mujahid and the later tradition, including Ibn al-Jazari, through which they were transmitted and systematised.",
      },
    ],
  },
  {
    id: "t18",
    yearCE: 1924,
    dateLabel: "1924 CE",
    hijriLabel: "1342 AH",
    title: "The Cairo Edition",
    arabicTitle: "مصحف الملك فؤاد (طبعة القاهرة)",
    category: "modern",
    description:
      "A committee of Egyptian scholars led by Muhammad ibn ʿAli ibn Khalaf al-Husayni al-Haddad, working under the patronage of King Fuʾad, produced a printed Quran issued in Cairo in 1342 AH (1924 CE). It gives the reading of Hafs from ʿAsim, with the Kufan verse count. Its spelling was not taken from any old manuscript but reconstructed from the classical rasm literature, chiefly al-Dani and Abu Dawud ibn Najah, replacing the modernised spellings common in Ottoman copies.",
    significance:
      "The Cairo edition became the standard printed text of the Muslim world and the reference text of academic study. Van Putten describes it as an intentional and largely successful return to the Uthmanic orthography, and his collations show that early manuscripts agree with it closely, with a few places where the manuscripts preserve an older spelling. It is an edition of one canonical reading and not a critical edition of manuscripts, and other readings such as Warsh and Qalun remain in print and in use.",
    sources: [
      {
        kind: "academic",
        citation: "G. Bergsträsser, 'Koranlesung in Kairo', Der Islam 20 (1932), 1–42",
        detail:
          "A contemporary description by a leading Quran scholar of the Cairo edition, its editors, its sources in the rasm and qiraʾat literature, and Egyptian recitation practice.",
      },
      {
        kind: "academic",
        citation:
          "M. van Putten, '‘The Grace of God’ as Evidence for a Written Uthmanic Archetype', Bulletin of the School of Oriental and African Studies 82/2 (2019), 271–288",
        detail:
          "Compares the spellings of the Cairo edition with early manuscripts, finding close agreement and characterising the edition as a deliberate return to Uthmanic orthography, with some later innovations noted.",
        url: "https://doi.org/10.1017/S0041977X19000338",
      },
    ],
  },
  {
    id: "t19",
    yearCE: 2015,
    dateLabel: "2010–2015 CE",
    hijriLabel: "1431–1436 AH",
    title: "Sana'a Publications and the Birmingham Announcement",
    arabicTitle: "نشر طِرس صنعاء وإعلان برمنغهام",
    category: "modern",
    description:
      "In 2010 Behnam Sadeghi and Uwe Bergmann published the first detailed study of the Sana'a palimpsest with a radiocarbon date, and in 2012 Sadeghi and Mohsen Goudarzi issued an edition of its lower text; Asma Hilali's edition followed in 2017. In 2014 the University of Tübingen announced the dating of Ma VI 165, and on 22 July 2015 the University of Birmingham announced that the parchment of Mingana 1572a had been dated to 568–645 CE. In the same years the Corpus Coranicum and Coranica projects put images and radiocarbon data for many early codices online.",
    significance:
      "Within five years the study of the Quran's early text moved from a field with almost no securely dated manuscripts to one with several from the seventh century. The findings made very late datings of the Quran untenable and, through the Sana'a lower text, gave the first direct view of a non-standard codex. They also drew public attention to the distinction between the date of a parchment and the date of its writing, which careful presentation must keep in view.",
    sources: [
      {
        kind: "academic",
        citation:
          "B. Sadeghi & U. Bergmann, 'The Codex of a Companion of the Prophet and the Qurʾān of the Prophet', Arabica 57 (2010), 343–436",
        detail:
          "The first full scholarly study of the Sana'a palimpsest, with radiocarbon dating of a folio and a stemmatic argument about the relation of its lower text to the Uthmanic text.",
        url: "https://doi.org/10.1163/157005810X504518",
      },
      {
        kind: "academic",
        citation: "B. Sadeghi & M. Goudarzi, 'Ṣanʿāʾ 1 and the Origins of the Qurʾān', Der Islam 87 (2012), 1–129",
        detail: "The edition of the lower text of the palimpsest, which made its readings available for study and comparison.",
        url: "https://doi.org/10.1515/islam-2011-0025",
      },
      {
        kind: "manuscript",
        citation: "University of Birmingham, Cadbury Research Library, Mingana Islamic Arabic 1572a: radiocarbon result announced 22 July 2015",
        detail:
          "The holding library's account of the Oxford measurement (568–645 CE at 95.4%) and of what the result does and does not show.",
        url: "https://www.birmingham.ac.uk/facilities/cadbury/birmingham-quran-mingana-collection/birmingham-quran/faqs.aspx",
      },
    ],
  },
  {
    id: "t20",
    yearCE: 2019,
    dateLabel: "2019–2020 CE",
    hijriLabel: "1440–1442 AH",
    title: "Van Putten and Sidky: Stemmatics of the Uthmanic Text",
    arabicTitle: "دراسات فان بوتن وصدقي في شجرة النص",
    category: "modern",
    description:
      "In 2019 Marijn van Putten published in the Bulletin of the School of Oriental and African Studies a collation of 14 early manuscripts showing that an arbitrary spelling, niʿmat with open or closed final letter, recurs in the same places in all of them. In the 2020 volume of the Journal of the International Qur'anic Studies Association Hythem Sidky published a philological and phylogenetic study showing that early manuscripts descend from four regional ancestral codices matching those described in the classical rasm literature.",
    significance:
      "These studies turned the question of the Uthmanic codification from one decided by trust or distrust of reports into one that can be tested on manuscripts. Their combined result is that the standard text goes back to a single written archetype of about the mid-seventh century, copied in writing and distributed regionally, as the tradition says. Both authors are also clear about what they do not show: the method does not reach behind the archetype, and neither presents the regional variants or the canonical readings in the tradition's theological terms.",
    sources: [
      {
        kind: "academic",
        citation:
          "M. van Putten, '‘The Grace of God’ as Evidence for a Written Uthmanic Archetype: The Importance of Shared Orthographic Idiosyncrasies', Bulletin of the School of Oriental and African Studies 82/2 (2019), 271–288",
        detail:
          "Demonstrates from shared orthographic idiosyncrasies that all manuscripts of the Uthmanic text type descend by written copying from one archetype of the first Islamic century.",
        url: "https://doi.org/10.1017/S0041977X19000338",
      },
      {
        kind: "academic",
        citation:
          "H. Sidky, 'On the Regionality of Qurʾānic Codices', Journal of the International Qur'anic Studies Association 5 (2020), 133–210",
        detail:
          "Reconstructs a stemma of early manuscripts, identifies four ancestral regional codices, a neo-Basran subgroup, and Hims as the destination of the Syrian exemplar.",
        url: "https://doi.org/10.5913/jiqsa.5.2020.a005",
      },
    ],
  },
];
