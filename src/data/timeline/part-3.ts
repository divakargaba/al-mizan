import type { TimelineMilestone } from "@/data/types";

export const timelinePart3: TimelineMilestone[] = [
  {
    id: "t11",
    yearCE: 671,
    dateLabel: "before 671 CE (C-14, 99%)",
    hijriLabel: "before c. 51 AH",
    title: "The Sana'a Palimpsest",
    arabicTitle: "طِرس صنعاء",
    category: "manuscript",
    description:
      "Sana'a, Dar al-Makhtutat, DAM 01-27.1, found with other fragments in the Great Mosque in 1972, is a parchment codex whose original writing was erased and overwritten with a second Quran. A folio of it tested at the University of Arizona gave, in Sadeghi and Bergmann's publication, 614–656 CE at 68% and 578–669 CE at 95%, with a 75.1% probability that the parchment is older than 646 CE, 95.5% that it is older than 661 and 99% that it is older than 671. Coranica's samples from three folios gave a combined 606–649 CE.",
    significance:
      "The erased lower text is the only known manuscript text that is not of the Uthmanic type: it has the same surahs and passages but different wording in many verses and a different surah order, like the codices ascribed to Companions. It shows what existed alongside the standard text in the first decades and that the standard replaced it, since the upper text is Uthmanic. Sadeghi argues that both text types descend from a prophetic prototype; other scholars interpret the lower text differently.",
    sources: [
      {
        kind: "academic",
        citation:
          "B. Sadeghi & U. Bergmann, 'The Codex of a Companion of the Prophet and the Qurʾān of the Prophet', Arabica 57 (2010), 343–436",
        detail:
          "Publishes the Arizona radiocarbon result for the 'Stanford 2007' folio with its one-sided probabilities, and argues that the lower text is a Companion-type codex sharing a prototype with the Uthmanic text.",
        url: "https://doi.org/10.1163/157005810X504518",
      },
      {
        kind: "academic",
        citation: "B. Sadeghi & M. Goudarzi, 'Ṣanʿāʾ 1 and the Origins of the Qurʾān', Der Islam 87 (2012), 1–129",
        detail:
          "Edition of the legible lower text of the palimpsest with analysis of its variants and its relation to the Uthmanic text and reported Companion readings.",
        url: "https://doi.org/10.1515/islam-2011-0025",
      },
      {
        kind: "manuscript",
        citation: "Sana'a, Dar al-Makhtutat, DAM 01-27.1: survey of folios and radiocarbon measurements",
        detail:
          "Summarises the Arizona figures (614–656 CE at 68%, 578–669 CE at 95%, 75.1% before 646 CE) and the Coranica results for three folios with their combined range of 606–649 CE.",
        url: "https://www.islamic-awareness.org/quran/text/mss/soth",
      },
    ],
  },
  {
    id: "t12",
    yearCE: 692,
    dateLabel: "691–692 CE",
    hijriLabel: "72 AH",
    title: "The Dome of the Rock Inscriptions",
    arabicTitle: "نقوش قبّة الصخرة",
    category: "epigraphy",
    description:
      "The mosaic inscription that runs for about 240 metres around the inner and outer faces of the octagonal arcade of the Dome of the Rock in Jerusalem gives the date 72 AH and was commissioned by the caliph Abd al-Malik, whose name was later replaced by that of al-Maʾmun. It contains extensive Quranic wording, including Q 112, 33:56, 17:111, 4:171–172, 19:33–36 and 3:18–19. Some passages are adapted: Q 64:1 and 57:2 are combined, and Q 19:33 is put in the third person.",
    significance:
      "This is the earliest dated monumental use of long Quranic passages, sixty years after the Prophet's death. Estelle Whelan argued that the small departures from the canonical wording are deliberate adaptations to the purpose of the inscription, comparable to later practice, and presuppose a familiar text; a minority of scholars take them as signs that the wording was not yet fully settled. The inscription cannot show the state of the whole text, but it fixes these passages in public use by 72 AH.",
    sources: [
      {
        kind: "inscription",
        citation:
          "C. Kessler, 'ʿAbd al-Malik's Inscription in the Dome of the Rock: A Reconsideration', Journal of the Royal Asiatic Society (1970), 2–14",
        detail:
          "The standard reading of the mosaic inscriptions of 72 AH on both faces of the octagonal arcade.",
        url: "https://www.islamic-awareness.org/history/islam/inscriptions/dotr",
      },
      {
        kind: "academic",
        citation:
          "E. Whelan, 'Forgotten Witness: Evidence for the Early Codification of the Qurʾān', Journal of the American Oriental Society 118/1 (1998), 1–14",
        detail:
          "Identifies the Quranic passages, explains their variations as adaptations to fit the sense, and argues that the inscriptions support an early codification.",
        url: "https://doi.org/10.2307/606294",
      },
    ],
  },
  {
    id: "t13",
    yearCE: 700,
    dateLabel: "c. 696–705 CE",
    hijriLabel: "77–86 AH",
    title: "Coinage Reform and al-Hajjaj's Orthographic Project",
    arabicTitle: "تعريب السكّة وإعجام المصاحف",
    category: "epigraphy",
    description:
      "In 77 AH Abd al-Malik introduced gold dinars without images, followed by silver dirhams, inscribed with the declaration of God's oneness, wording from Q 9:33 on the mission of the Messenger, and Q 112 in slightly shortened form. In the same years his governor of Iraq, al-Hajjaj ibn Yusuf (in office 75–95 AH), is reported to have sponsored work on the written Quran: systematic marking of consonants, division of the text into parts, and the sending of copies to the cities. One report lists eleven places where he is said to have altered the spelling.",
    significance:
      "The coins put Quranic sentences in canonical wording into circulation across the caliphate. The project of al-Hajjaj is best understood, with Omar Hamdan, as a second effort to improve and standardise the writing of an existing text. The report of eleven changes comes through a narrator whom hadith critics rejected, and manuscripts with radiocarbon ranges ending before al-Hajjaj's governorship already carry the standard skeleton, which is why most specialists do not regard him as its author. Some historians still assign him and Abd al-Malik a larger role.",
    sources: [
      {
        kind: "academic",
        citation:
          "O. Hamdan, 'The Second Maṣāḥif Project: A Step Towards the Canonization of the Qurʾanic Text', in A. Neuwirth, N. Sinai & M. Marx (eds.), The Qurʾān in Context (Leiden: Brill, 2010), 795–835",
        detail:
          "Collects the reports on al-Hajjaj's commission and interprets it as a project of orthographic refinement, counting and distribution of codices under Abd al-Malik.",
      },
      {
        kind: "classical",
        citation: "Ibn Abi Dawud al-Sijistani (d. 316/929), Kitab al-Masahif, section on what al-Hajjaj changed in the codex",
        detail:
          "Preserves the report of eleven spelling changes attributed to al-Hajjaj, transmitted through ʿAbbad ibn Suhayb, a narrator classed as abandoned by hadith critics; the report is therefore weak.",
      },
      {
        kind: "academic",
        citation:
          "N. Sinai, 'When Did the Consonantal Skeleton of the Quran Reach Closure? Part I', Bulletin of the School of Oriental and African Studies 77/2 (2014), 273–292",
        detail:
          "Weighs the case for closure of the text around 650 CE against the hypothesis of closure under Abd al-Malik, including the evidence of the coins and inscriptions, and finds the earlier date defensible.",
        url: "https://doi.org/10.1017/S0041977X1400010X",
      },
    ],
  },
  {
    id: "t14",
    yearCE: 786,
    dateLabel: "d. c. 786 CE",
    hijriLabel: "d. c. 170 AH",
    title: "Al-Khalil ibn Ahmad's Vowel Signs",
    arabicTitle: "شكل الخليل بن أحمد",
    category: "scholarship",
    description:
      "The Basran grammarian and lexicographer al-Khalil ibn Ahmad al-Farahidi, who died around 170 AH (some sources say 175), is credited with devising the vowel signs still in use: small strokes and letter-shapes for a, i, u, and marks for doubling, absence of a vowel and hamza. They replaced, over the following centuries, the earlier system of coloured dots attributed to Abu al-Aswad al-Duʾali (d. 69/688), which is the system seen in red in many early Kufic Qurans.",
    significance:
      "Vowel signs made the recitation visible on the page without touching the consonantal skeleton, since they were written above and below it and at first in a different colour. They record on parchment what had been carried by teachers, and so tie the written and oral transmissions more closely together. The new signs were adopted in Quran copies only gradually, and scholars such as al-Dani still preferred the older dots for codices as closer to the practice of the first generations.",
    sources: [
      {
        kind: "classical",
        citation: "Abu ʿAmr al-Dani (d. 444/1053), al-Muhkam fi naqt al-masahif",
        detail:
          "The classical treatise on the pointing and vocalisation of codices, which describes the dot system of Abu al-Aswad, attributes the later signs to al-Khalil, and discusses which is appropriate for copies of the Quran.",
      },
      {
        kind: "academic",
        citation: "N. Abbott, The Rise of the North Arabic Script and Its Ḳurʾānic Development (Chicago: University of Chicago Press, 1939)",
        detail:
          "A foundational study of the development of Arabic script and of the diacritical and vowel systems in early Quran manuscripts, including the transition from coloured dots to al-Khalil's signs.",
      },
    ],
  },
  {
    id: "t15",
    yearCE: 936,
    dateLabel: "d. 936 CE",
    hijriLabel: "d. 324 AH",
    title: "Ibn Mujahid and the Seven Readings",
    arabicTitle: "ابن مجاهد والقراءات السبع",
    category: "scholarship",
    description:
      "Abu Bakr Ibn Mujahid of Baghdad (d. 324 AH) wrote Kitab al-Sabʿah fi l-qiraʾat, in which he selected seven readers as representing the established recitation of the five main centres: Nafiʿ of Medina, Ibn Kathir of Mecca, Abu ʿAmr of Basra, Ibn ʿAmir of Damascus, and ʿAsim, Hamzah and al-Kisaʾi of Kufa. With the support of the vizier Ibn Muqlah he also took part in the proceedings against Ibn Shanabudh in 323 AH for reciting readings contrary to the Uthmanic skeleton.",
    significance:
      "Ibn Mujahid's selection gave the variety of accepted recitation a fixed, teachable form and made conformity to the Uthmanic rasm and to received transmission the enforced conditions of a valid reading. In the traditional view he documented readings already transmitted by multitudes; academic scholars such as Nasser and Melchert describe his work as a decisive stage in a process of canonisation. Either way, the range of recitation was from this point explicitly bounded.",
    sources: [
      {
        kind: "classical",
        citation: "Ibn Mujahid (d. 324/936), Kitab al-Sabʿah fi l-qiraʾat, ed. Shawqi Dayf (Cairo: Dar al-Maʿarif, 1972)",
        detail:
          "The work that defined the Seven Readers and recorded their readings city by city, which became the foundation of the later science of qiraʾat.",
      },
      {
        kind: "academic",
        citation:
          "S. H. Nasser, The Transmission of the Variant Readings of the Qurʾān: The Problem of Tawātur and the Emergence of Shawādhdh (Leiden: Brill, 2013)",
        detail:
          "A historical study of how the canonical readings were selected and how the category of irregular readings arose, including the role of Ibn Mujahid and the question of mass transmission.",
      },
    ],
  },
];
