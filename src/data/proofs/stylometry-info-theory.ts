import type { Proof } from "@/data/types";

export const stylometryInfoTheoryProofs: Proof[] = [
  {
    id: "p5-sadeghi-stylometry",
    pillar: "stylometry-info-theory",
    title: "Sadeghi's Stylometric Research Programme",
    arabicTitle: "القياس الأسلوبي للقرآن",
    summary:
      "Behnam Sadeghi's 2011 study measured the frequencies of thousands of morphemes across the Quran and found that independent markers of style change together, smoothly, over seven successive phases. He infers from this continuity that the text has one author; the method has stated limits and cannot address the question of divine origin.",
    body: [
      "Stylometry is the statistical study of the unconscious habits of a writer or speaker: how often the commonest function words and grammatical elements are used, how long the sentences run, which rare items appear. Such habits are hard to imitate and vary measurably between authors, which is why the method is used in disputes over authorship. Behnam Sadeghi, then at Stanford, applied it to the Quran in 'The Chronology of the Qurʾān: A Stylometric Research Program', published in Arabica 58 (2011), 210–299. His aim was primarily chronological, namely to test whether a proposed relative order of the Quran's passages can be verified from style alone, and his conclusion about authorship is a consequence of the way that test turned out.",
      "His starting point was the work of the Iranian engineer and scholar Mehdi Bazargan, who in the 1970s divided the Quran into 194 blocks of text, most of them whole surahs or large sections of the long surahs, and arranged them in order of increasing average verse length, on the hypothesis that verses grew longer as the revelation progressed. Bazargan grouped the blocks into 22 groups. Sadeghi consolidated these into seven larger groups so that each would contain enough text for reliable statistics, and treated the seven as candidate phases. He then asked a question Bazargan had not: if the blocks are sorted by verse length, do other features of style, which were not used in the sorting, also change in an orderly way from one group to the next?",
      "He used three sets of such features in addition to verse length: the 28 most frequent morphemes in the Quran, a further 114 common morphemes, and a list of 3,693 relatively uncommon ones. For each group he computed the frequency profile and compared the profiles with multivariate techniques, including principal component analysis, which reduce many variables to a few dimensions so that the distance between texts can be seen. The result is that the four markers follow similar trajectories. Each phase is stylistically closest to its neighbours and progressively further from more distant phases, so that the seven groups lie along a single path. Sadeghi calls this concurrent smoothness and argues that the only plausible explanation for several independent markers lining up in this way is that the ordering reflects real development over time.",
      "From the same data he draws the inference about authorship. The style of the Quran changes greatly between the short, rhythmic early surahs and the long legislative passages, and this has sometimes been taken as a sign of different hands. Sadeghi argues that the change is gradual and continuous along one trajectory, which is what one expects from a single source whose style evolves and not what one expects from a compilation of texts by different authors or communities, which would produce discontinuities and clusters unrelated to the sequence. He also shows that many large passages are stylistically unified. The abstract of the article states the conclusion without qualification: the essay 'shows that the Qurʾān has one author'.",
      "Sadeghi is careful about the limits. The chronology is relative, not absolute, and coarse: it concerns seven phases of large blocks, and he does not claim to date individual verses or to exclude that a block contains material of more than one period. The analysis depends on Bazargan's division into blocks, which is itself a set of scholarly judgements. The method measures the style of the text as transmitted, so it presupposes a stable text and cannot detect very short insertions. And the finding of one author is a finding about the unity of the source of the wording. Whether that source is the Prophet's own composition, as most secular historians assume, or revelation delivered through him, as Muslims believe, is not something frequency counts can decide, and Sadeghi does not claim that they do.",
    ],
    arabicQuotes: [],
    keyFacts: [
      "B. Sadeghi, 'The Chronology of the Qurʾān: A Stylometric Research Program', Arabica 58 (2011), 210–299.",
      "The study builds on Mehdi Bazargan's division of the Quran into 194 blocks ordered by mean verse length, regrouped by Sadeghi into seven phases.",
      "Four markers are compared: mean verse length, the 28 most common morphemes, 114 further common morphemes, and 3,693 less common morphemes.",
      "The markers vary together and smoothly across the seven phases ('concurrent smoothness').",
      "Sadeghi concludes that the Quran has one author; the method cannot say whether that source is human or divine.",
    ],
    scholarlyNuance:
      "Sadeghi's study is the most rigorous quantitative work on the subject so far, but it is one research programme, by its author's own description, and it has been questioned. Gabriel Said Reynolds, in a response in the same volume of Arabica, challenged the premise that the Quran should be read against a chronology at all, arguing that the Meccan and Medinan framework derives from the later biographical tradition. A methodological concern is that ordering by verse length may partly track genre or liturgical function rather than time; Sadeghi's answer is that the other markers were not used for the ordering and still agree with it, which is a real argument but not a demonstration that time is the only variable. More recently Tommaso Tesei has argued from stylistic and thematic differences that the corpus reflects more than one context of composition, which runs against Sadeghi's inference of a single author. The conclusion is therefore best stated as follows: the measurable style of the Quran is continuous in a way that is well explained by a single source and poorly explained by a patchwork of authors. This supports the historical claim that the text goes back to one origin in the Prophet's lifetime. It is not evidence about the metaphysical nature of that origin, and presenting it as a scientific proof of revelation would attribute to Sadeghi a theological claim he does not make.",
    sources: [
      {
        kind: "academic",
        citation:
          "B. Sadeghi, 'The Chronology of the Qurʾān: A Stylometric Research Program', Arabica 58 (2011), 210–299",
        detail:
          "Sets out the method, verifies a relative chronology in seven phases by showing that four independent stylistic markers vary smoothly across them, demonstrates the stylistic unity of many large passages, and concludes that the Quran has one author.",
        url: "https://doi.org/10.1163/157005810X529692",
      },
      {
        kind: "academic",
        citation: "M. Bazargan, Sayr-i taḥawwul-i Qurʾān (Tehran, 1355 Sh./1976–77)",
        detail:
          "The Persian study that divided the Quran into 194 blocks and ordered them by mean verse length in 22 groups, providing the block structure and initial ordering that Sadeghi tests.",
      },
      {
        kind: "academic",
        citation: "G. S. Reynolds, 'Le problème de la chronologie du Coran', Arabica 58 (2011), 477–502",
        detail:
          "A critical response arguing that chronological readings of the Quran rest on assumptions drawn from the later biography of the Prophet, and that the text can be read without them.",
      },
      {
        kind: "academic",
        citation:
          "B. Sadeghi & U. Bergmann, 'The Codex of a Companion of the Prophet and the Qurʾān of the Prophet', Arabica 57 (2010), 343–436",
        detail:
          "The companion manuscript study in which Sadeghi argues, from the Sana'a lower text and the Uthmanic text, for a common prototype in the Prophet's lifetime; it supplies the textual stability his stylometry presupposes.",
        url: "https://doi.org/10.1163/157005810X504518",
      },
      {
        kind: "academic",
        citation: "T. Tesei, 'The Qurʾān(s) in Context(s)', Journal Asiatique 309/2 (2021), 185–202",
        detail:
          "Argues from differences of style and content that the Quranic corpus reflects more than one context of composition; cited here as a scholarly position opposed to the single-author inference.",
      },
    ],
    quiz: [
      {
        id: "p5-sadeghi-stylometry-q1",
        prompt: "Whose division of the Quran into blocks ordered by mean verse length did Sadeghi take as his starting point?",
        options: ["Theodor Nöldeke", "Mehdi Bazargan", "Richard Bell", "Ibn Mujahid"],
        answerIndex: 1,
        explanation:
          "Sadeghi regrouped Mehdi Bazargan's 194 blocks into seven phases and tested the ordering against other stylistic markers that Bazargan had not used, which is what gives the test its force.",
      },
      {
        id: "p5-sadeghi-stylometry-q2",
        prompt: "What does Sadeghi mean when he says the proposed chronology is 'verified'?",
        options: [
          "That each surah can be assigned to an exact calendar year",
          "That independent markers of style vary smoothly and together over the seven phases",
          "That the traditional lists of Meccan and Medinan surahs match the manuscripts",
          "That the vocabulary of the Quran never changes",
        ],
        answerIndex: 1,
        explanation:
          "His criterion is concurrent smoothness: verse length and three separate sets of morpheme frequencies follow similar gradual trajectories, which he argues is best explained by real development over time.",
      },
      {
        id: "p5-sadeghi-stylometry-q3",
        prompt: "Which of the following does Sadeghi's stylometry NOT establish?",
        options: [
          "That the Quran's style changes gradually rather than in unrelated clusters",
          "That many large passages are stylistically unified",
          "That the single source of the text is divine rather than human",
          "That a relative ordering in seven phases is statistically supported",
        ],
        answerIndex: 2,
        explanation:
          "Frequency statistics can indicate unity of authorship but cannot identify the nature of the author. The belief that the source is divine is a theological claim that lies outside what the method can test.",
      },
    ],
  },
  {
    id: "p5-stylometry-limits",
    pillar: "stylometry-info-theory",
    title: "What Quantitative Study of Style Rules Out, and What It Does Not",
    arabicTitle: "حدود الدليل الأسلوبي",
    summary:
      "Quantitative studies by Sadeghi, Sinai and Bannister make it difficult to maintain that the Quran is a late compilation of material by many hands, but they do not establish divine authorship, do not exclude small-scale editing, and rest on chronological assumptions that some scholars contest.",
    body: [
      "The scenario that stylometric evidence bears on most directly is the one proposed in different forms by John Wansbrough in 1977 and by later revisionist writers: that the Quran was assembled over several generations, perhaps outside Arabia, from independent bodies of preaching material produced by a community rather than by one person. A text formed in that way should behave statistically like an anthology. Its parts should cluster by origin, and features such as the rate of common particles and pronouns should differ between clusters without any regular relationship to one another. Sadeghi's finding is the opposite: the blocks of the Quran lie along one continuous path on which several independent markers move together. That pattern is difficult to produce by compilation and difficult to impose afterwards by editing, because editors do not control the frequencies of function morphemes.",
      "Other quantitative work points the same way while asking different questions. Nicolai Sinai, in The Qur'an: A Historical-Critical Introduction (2017), examines mean verse length as a criterion for relative dating and finds that surahs of similar verse length tend to share vocabulary, formulae, structure and themes, so that the criterion converges with the chronological groupings reached by Nöldeke on literary grounds. Sinai uses this cautiously, as evidence of a gradual development within one body of proclamations, and he allows that some surahs received later additions. Andrew Bannister's An Oral-Formulaic Study of the Qur'an (2014) used computerised searches to measure how much of the text consists of recurring formulaic sequences and found the density to be high throughout, which he interprets, on the model of Parry and Lord's work on oral poetry, as a sign of composition in live oral performance.",
      "These studies do not all support the same picture in detail, and they should not be merged into one. Bannister's interest is in the mode of composition and in the retelling of earlier narratives, not in the number of authors, and scholars have questioned whether high formulaic density implies improvised composition or simply a deliberately formulaic rhetoric. What his data do show for the present purpose is that the formulaic diction is spread across the whole corpus rather than confined to some strata, and that the Quran presents itself as something recited aloud. Both observations fit a text proclaimed orally by one voice over a period of years, and both sit uneasily with a model of written compilation from heterogeneous sources.",
      "The limits are as important as the results. First, unity of style identifies a single source for the wording; it is silent on whether that source is a human being or revelation. The Quran's own argument at Q 4:82, that a text from other than God would contain much inconsistency, is a theological argument about coherence of content which believers find confirmed by such studies, but no statistician can convert a frequency table into a statement about God. Secondly, the resolution of the method is coarse. It works on blocks of hundreds or thousands of words, so a short gloss, a single added verse, or the rearrangement of passages within a surah would not be detected, and questions about such details have to be answered from manuscripts and other evidence.",
      "Thirdly, the chronological use of style rests on assumptions. That verse length and vocabulary changed in one direction over time is a hypothesis which the convergence of markers makes probable but which cannot be checked against external dates for most passages. Reynolds and others object that the whole Meccan and Medinan scheme is borrowed from the biographical tradition, and Tesei has argued that stylistic differences in the corpus are better explained by more than one context of composition. A fair summary is that quantitative study has moved the burden of proof: anyone proposing multiple authors or a long period of anonymous redaction must now explain a measured continuity of style, and no detailed alternative explanation has yet been offered. It has not ended the discussion, and it was never capable of proving the claim of faith.",
    ],
    arabicQuotes: [
      {
        text: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ ٱللَّهِ لَوَجَدُوا۟ فِيهِ ٱخْتِلَٰفًۭا كَثِيرًۭا",
        reference: "Q 4:82",
        translation:
          "Do they not reflect on the Quran? Had it been from other than God, they would have found in it much inconsistency. (The Quran's own, theological, appeal to its coherence; statistical unity of style is compatible with this verse but does not prove it.)",
      },
    ],
    keyFacts: [
      "A compilation from many authors should show stylistic clusters; Sadeghi instead found one continuous trajectory across seven phases.",
      "Sinai (2017) treats mean verse length as a dating criterion that converges with other literary features, while allowing for later additions to some surahs.",
      "Bannister (2014) measured pervasive formulaic diction and interprets it as evidence of oral composition; his study does not address the number of authors.",
      "Stylometry operates on large blocks and cannot detect the insertion of a short phrase or single verse.",
      "No statistical method can distinguish a single human author from a single divine source; that question is theological.",
    ],
    scholarlyNuance:
      "It would misrepresent the field to say that stylometry has 'proved' single authorship to general satisfaction. Sadeghi's article has been widely cited but seldom replicated with independent block divisions, and replication is what would turn a strong result into a settled one. Critics of chronological reading (Reynolds), proponents of plural contexts (Tesei) and scholars who see Medinan insertions in Meccan surahs (among them Sinai and Neuwirth, on literary grounds) all accept that the Quran is early while differing on how uniform its composition was. Bannister's conclusions about oral-formulaic composition are also debated, and his book has a comparative focus on biblical and post-biblical narratives rather than on preservation. On the other side, the revisionist models that stylometry weighs against had already lost ground for independent reasons, chiefly the early manuscripts. The argument offered here is therefore cumulative and limited: style, manuscripts and stemmatics each make a multi-author, late-redaction origin improbable. The further step, from one early source to revelation, is made by faith and by the arguments of theology, and Muslim scholars such as al-Baqillani located the Quran's inimitability in qualities of meaning and eloquence that frequency counts do not measure.",
    sources: [
      {
        kind: "academic",
        citation:
          "B. Sadeghi, 'The Chronology of the Qurʾān: A Stylometric Research Program', Arabica 58 (2011), 210–299",
        detail:
          "Provides the central quantitative result discussed here: smooth, concurrent variation of four stylistic markers over seven phases, and the inference that the Quran has a single author.",
        url: "https://doi.org/10.1163/157005810X529692",
      },
      {
        kind: "academic",
        citation: "N. Sinai, The Qur'an: A Historical-Critical Introduction (Edinburgh: Edinburgh University Press, 2017), ch. 5",
        detail:
          "Discusses inner-Quranic chronology and argues that mean verse length, taken with other stylistic and thematic features, supports a gradual development of the Quranic proclamations, with allowance for secondary additions.",
      },
      {
        kind: "academic",
        citation: "A. G. Bannister, An Oral-Formulaic Study of the Qur'an (Lanham: Lexington Books, 2014)",
        detail:
          "Uses computer-assisted analysis to measure formulaic diction across the Quran and argues, on the Parry–Lord model, that the text bears the marks of oral composition in performance.",
      },
      {
        kind: "academic",
        citation: "J. Wansbrough, Quranic Studies: Sources and Methods of Scriptural Interpretation (Oxford: Oxford University Press, 1977)",
        detail:
          "The classic statement of the hypothesis that the Quran reached its canonical form through a long communal process, the scenario against which the stylometric and manuscript evidence is weighed.",
      },
      {
        kind: "academic",
        citation: "G. S. Reynolds, 'Le problème de la chronologie du Coran', Arabica 58 (2011), 477–502",
        detail:
          "Questions the assumption that the Quran can or should be arranged chronologically on the basis of the traditional biography, a premise on which chronological stylometry depends.",
      },
      {
        kind: "quran",
        citation: "Q 4:82",
        detail:
          "The Quran's own argument from the absence of inconsistency, cited to mark the difference between the theological claim and what statistical analysis of style can show.",
        url: "https://quran.com/4/82",
      },
    ],
    quiz: [
      {
        id: "p5-stylometry-limits-q1",
        prompt: "Why does a smooth stylistic trajectory weigh against the theory that the Quran was compiled from the work of many authors?",
        options: [
          "Because many authors would always write verses of identical length",
          "Because a compilation should show unrelated stylistic clusters rather than one continuous path of change",
          "Because stylometry can read the names of authors from the text",
          "Because the manuscripts name a single scribe",
        ],
        answerIndex: 1,
        explanation:
          "Texts from different hands differ in unconscious habits such as the rate of function morphemes. A single gradual trajectory on several independent markers is what one evolving source produces, not an anthology.",
      },
      {
        id: "p5-stylometry-limits-q2",
        prompt: "What is the main subject of Andrew Bannister's 2014 quantitative study?",
        options: [
          "Radiocarbon dating of Hijazi manuscripts",
          "The regional variants of the Uthmanic codices",
          "The density of formulaic diction in the Quran and what it suggests about oral composition",
          "The number of letters in each surah",
        ],
        answerIndex: 2,
        explanation:
          "Bannister measured recurring formulaic sequences across the text and argued for oral-formulaic composition. His study concerns the mode of composition; it is not an argument about authorship or preservation as such.",
      },
      {
        id: "p5-stylometry-limits-q3",
        prompt: "Which change to the text would stylometry on large blocks be least able to detect?",
        options: [
          "The addition of a short explanatory phrase to one verse",
          "The combination of two long texts by different authors",
          "A change of style between early and late surahs",
          "A whole surah written by a different author",
        ],
        answerIndex: 0,
        explanation:
          "The method compares frequency profiles over hundreds or thousands of words. A few added words do not move those statistics, so small-scale questions must be settled from manuscripts and other evidence.",
      },
    ],
  },
  {
    id: "p5-dual-channel",
    pillar: "stylometry-info-theory",
    title: "Two Channels: Written Rasm and Oral Recitation as Mutual Error Control",
    arabicTitle: "الرسم والتلاوة: قناتان للضبط",
    summary:
      "The Quran has been transmitted both as a written consonantal skeleton and as a taught recitation, and each has historically been used to check the other. Describing this with the vocabulary of redundancy from information theory is an explanatory model, not a theorem, and the two channels were never fully independent.",
    body: [
      "Information theory, founded by Claude Shannon in 1948, shows that a message survives a noisy channel when it carries redundancy, that is, more signal than the bare minimum, arranged so that errors can be noticed and repaired. The simplest illustrations are a parity bit added to a string of digits or the same message sent by two different routes and compared on arrival. What follows borrows that vocabulary as an analogy for a historical process. It is a model for understanding why certain kinds of error did not accumulate in the Quran's transmission. It is not a calculation, no error rate is being claimed, and the comparison is valid only to the extent that the historical illustrations support it.",
      "The written channel is the Uthmanic rasm, the consonantal skeleton. In its earliest form it had few dots, no vowel signs and fewer than twenty distinct letter shapes for twenty-eight consonants, so that one written word could in principle be read in several ways. It was strong where memory is weak: it fixed the sequence of surahs and verses, the presence or absence of each word, and even arbitrary spellings, and it could be compared letter by letter with another copy. The oral channel is recitation learned from a teacher, which carried exactly what the script lacked, namely vowels, doubling, pauses and the identity of ambiguous consonants. Oral transmission has its own typical errors, such as substituting a synonym, assimilating a verse to a similar verse elsewhere, or changing word order, and these are the kinds of variant which Sadeghi observed between the standard text and the lower text of the Sana'a palimpsest.",
      "Because the two channels fail in different ways, each can expose the errors of the other. Manuscripts show the written side being checked. Déroche's study of the Codex Parisino-Petropolitanus and Daniel Brubaker's survey of corrections in early Qurans document many places where a copyist omitted or miswrote something and he or a later reader erased and corrected it. Brubaker suggested that some corrections reflect a text still being adjusted, while reviewers including Hythem Sidky argued that the great majority are ordinary slips of the pen repaired toward the standard reading. On either reading the corrections show readers who knew the text testing the page against it. In the other direction, readers were held to the script: in 323 AH (935 CE) the Baghdad reciter Ibn Shanabudh was tried and made to recant for reciting transmitted Companion readings that departed from the Uthmanic skeleton.",
      "The classical rule for an acceptable reading, given its standard form by Ibn al-Jazari (d. 833/1429), states the cross-check explicitly: a reading must agree with one of the Uthmanic codices, even if only potentially, must be sound Arabic, and must have a sound chain of transmission. Each condition blocks a different failure. Ibn Miqsam (d. 354/965), a contemporary of Ibn Shanabudh, was censured for the opposite fault of reading whatever the skeleton and grammar allowed without any transmitted authority. The effect of the script on recitation is visible in the canonical readings themselves. Where the regional codices differed by a letter, the readers of each city follow their own codex: at Q 2:132 the Medinan and Syrian readers recite wa-awṣā and the others wa-waṣṣā, as their respective master copies were written.",
      "That last fact also marks the limit of the model, and Marijn van Putten has made the point forcefully. If readers follow their regional codex, then the oral channel is not independent of the written one. In a study of the Syrian reader Hisham's pronunciation Ibrāhām, he showed that it occurs exactly where early manuscripts spell the name without ya, and concluded that the reading was derived from the script rather than the script from the reading. In Quranic Arabic (2022) he argues more generally that the canonical readings are learned recitations shaped by the rasm and by the linguistic preferences of later readers, not purely oral recordings of the Prophet's pronunciation. The traditional view holds that the readings were transmitted orally from the Prophet and that the script was written to accommodate them. Both views agree on the point relevant here: after about 650 CE a reciter could not depart from the skeleton, and a copyist could not depart from the known recitation, without being noticed.",
    ],
    arabicQuotes: [
      {
        text: "بَلْ هُوَ ءَايَٰتٌۢ بَيِّنَٰتٌۭ فِى صُدُورِ ٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ",
        reference: "Q 29:49",
        translation:
          "Rather, it is clear signs in the breasts of those who have been given knowledge. (Cited in the Muslim tradition as a description of the Quran's preservation by memory alongside writing.)",
      },
    ],
    keyFacts: [
      "The early rasm fixed word sequence and spelling but left vowels and many consonant distinctions to recitation.",
      "Ibn al-Jazari's three conditions for a valid reading: agreement with an Uthmanic codex, sound Arabic, and a sound chain of transmission.",
      "Ibn Shanabudh was tried in Baghdad in 323 AH (935 CE) for reciting readings that departed from the Uthmanic rasm; Ibn Miqsam was censured for readings that fitted the rasm but lacked transmission.",
      "At Q 2:132 the Medinan and Syrian readers recite wa-awṣā and the others wa-waṣṣā, matching the spelling of their regional codices.",
      "Van Putten argues the reading traditions partly depend on the rasm, so the oral and written channels are not fully independent.",
      "The information-theory framing is an explanatory analogy; no numerical error rate is claimed.",
    ],
    scholarlyNuance:
      "The redundancy analogy should not be pressed. In engineering, error correction works because the redundant channels are independent and the code is designed; here the channels interacted constantly, the 'design' is a historical outcome, and the mutual control applies securely only from the Uthmanic standardisation onward. For the two decades between the Prophet's death and that standardisation, the evidence consists of the tradition's reports, the Sana'a lower text and reported Companion readings, which show a somewhat wider range of wording than the later tradition permits. Academic specialists also differ from the traditional account on what the oral channel preserves. Van Putten and Nasser hold that the canonical readings took shape through a process of selection and systematisation in the second to fourth centuries AH and that some readings arose from interpretation of the ambiguous script; the traditional position is that every canonical reading goes back to the Prophet by mass transmission. These positions should not be blurred. What both accept, and what the documented trials and manuscript corrections illustrate, is that written and oral transmission constrained one another, which is a sound historical explanation for why the consonantal text stayed fixed while the range of recitations remained within narrow and enumerated bounds.",
    sources: [
      {
        kind: "academic",
        citation:
          "C. E. Shannon, 'A Mathematical Theory of Communication', Bell System Technical Journal 27 (1948), 379–423, 623–656",
        detail:
          "The founding paper of information theory, which defines redundancy and shows how it permits reliable communication over a noisy channel; the source of the analogy used in this entry.",
        url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x",
      },
      {
        kind: "academic",
        citation:
          "M. van Putten, Quranic Arabic: From Its Hijazi Origins to Its Classical Reading Traditions (Leiden: Brill, 2022)",
        detail:
          "Argues from orthography and the reading traditions that the Uthmanic text reflects a Hijazi variety of Arabic and that the canonical readings are later, partly rasm-dependent recitation systems rather than purely oral transmissions.",
        url: "https://doi.org/10.1163/9789004506251",
      },
      {
        kind: "academic",
        citation:
          "M. van Putten, 'Hišām's ʾIbrāhām: Evidence for a Canonical Quranic Reading Based on the Rasm', Journal of the Royal Asiatic Society 30/2 (2020), 231–250",
        detail:
          "Shows that Hisham's reading Ibrāhām coincides with the defective spelling of the name in early manuscripts and concludes that this canonical reading was derived from the written text.",
      },
      {
        kind: "classical",
        citation: "Ibn al-Jazari (d. 833/1429), al-Nashr fi l-qiraʾat al-ʿashr, introduction",
        detail:
          "States the three conditions of an accepted reading (conformity to an Uthmanic codex, correct Arabic, sound transmission) and the principle that the Quran is transmitted by memory and by writing together.",
      },
      {
        kind: "academic",
        citation:
          "C. Melchert, 'Ibn Mujāhid and the Establishment of Seven Qurʾanic Readings', Studia Islamica 91 (2000), 5–22",
        detail:
          "Documents the proceedings against Ibn Shanabudh and Ibn Miqsam in fourth-century Baghdad and Ibn Mujahid's role, which illustrate the enforcement of both rasm and transmission as conditions of valid recitation.",
      },
      {
        kind: "academic",
        citation:
          "D. A. Brubaker, Corrections in Early Qurʾān Manuscripts: Twenty Examples (Lovettsville: Think and Tell Press, 2019), with the review by H. Sidky in Al-ʿUṣūr al-Wusṭā 27 (2019)",
        detail:
          "Presents physical corrections in early manuscripts; the review argues that most are routine scribal errors corrected toward the standard text. Together they document how written copies were checked and repaired.",
      },
    ],
    quiz: [
      {
        id: "p5-dual-channel-q1",
        prompt: "Why can written and oral transmission act as checks on each other?",
        options: [
          "Because they tend to make different kinds of error, so a slip in one is exposed by the other",
          "Because both record vowels equally well",
          "Because oral transmission never changes anything",
          "Because the early script was fully pointed and vocalised",
        ],
        answerIndex: 0,
        explanation:
          "Copying produces omissions and misspellings but fixes word order; memory preserves vowels but may swap synonyms or parallels. Comparing the two exposes errors that either alone would let through.",
      },
      {
        id: "p5-dual-channel-q2",
        prompt: "What does the trial of Ibn Shanabudh in 323 AH illustrate?",
        options: [
          "That any reading with a chain of transmission was accepted regardless of the script",
          "That recitation was required to conform to the Uthmanic consonantal skeleton",
          "That the Uthmanic codices had been lost by the fourth century",
          "That vowel signs were forbidden in copies of the Quran",
        ],
        answerIndex: 1,
        explanation:
          "He recited readings attributed to Companions that differed from the Uthmanic rasm and was made to recant, showing that the written skeleton served as a binding constraint on oral recitation.",
      },
      {
        id: "p5-dual-channel-q3",
        prompt: "What qualification does van Putten's research add to the 'two independent channels' picture?",
        options: [
          "That the rasm was invented after the canonical readings",
          "That no early manuscripts survive to test the claim",
          "That some canonical readings were derived from the written rasm, so the channels are not fully independent",
          "That oral recitation ceased after the time of Uthman",
        ],
        answerIndex: 2,
        explanation:
          "His study of Hisham's reading Ibrāhām and his book Quranic Arabic argue that readers depended in part on the script. The redundancy analogy is therefore a useful model with limits, not a strict proof.",
      },
    ],
  },
  {
    id: "p5-measured-stability",
    pillar: "stylometry-info-theory",
    title: "Measured Stability of the Consonantal Text",
    arabicTitle: "ثبات الرسم بالأرقام",
    summary:
      "Where the stability of the Uthmanic text has been counted, the figures are small: about forty single-letter or single-word differences among the regional master copies, and disagreement at two of twenty-three test spellings across fourteen early manuscripts. Spelling of long vowels varied freely, and the comparison with other scriptures needs careful qualification.",
    body: [
      "Claims about the stability of a text are only as good as the counts behind them, so this entry restricts itself to figures that specialists have published. The first concerns the differences between the regional exemplars of the Uthmanic text. The classical rasm literature, summarised by al-Dani, lists the places where the codices of Medina, Syria, Basra and Kufa were written differently. Michael Cook analysed these in 2004 and Hythem Sidky re-examined them against manuscripts in 2020; the list comes to about forty places in a text of some seventy-seven thousand words. Each difference involves a single letter or a short function word, for example a connective wa- or fa-, the pronoun huwa at Q 57:24, or wa-waṣṣā against wa-awṣā at Q 2:132. None adds or removes a verse or changes a ruling or narrative.",
      "The second figure concerns fidelity of copying below the level of wording. Van Putten's 2019 collation tested whether fourteen manuscripts of the first two Islamic centuries reproduce an arbitrary feature of the archetype's spelling, the choice between two ways of writing niʿmat in the construct state. Of the 23 occurrences, the manuscripts show any disagreement at only two, and at one of those the early manuscripts agree with each other against the modern printed text. He observes that the Uthmanic text type retains its word order, verse order and surah order perfectly and in addition consistently retains highly idiosyncratic spellings that must go back to the archetype. Agreement on features that carry no meaning is a stricter test of copying discipline than agreement on meaningful words, which a scribe might restore from memory.",
      "The same studies record where the text did vary, and the picture is not one of mechanical identity. The writing of long a with alif was, in van Putten's phrase, in fairly free variation in many word patterns, and Déroche showed that the five scribes of the Codex Parisino-Petropolitanus each spelled such words differently and tended to modernise. Marx and Jocham note archaic spellings such as dwʾd for Dawud and šʾy for shayʾ in the Tübingen and Berlin codices that later copies regularised. Van Putten also lists spellings of the 1924 Cairo edition that do not match the early manuscripts. Individual manuscripts contain copying errors, some corrected and some not. The stable element is the consonantal skeleton at the level of the word; the unstable element is orthographic convention, which affects how a word is spelled and not which word it is.",
      "A different kind of measurement comes from the one witness outside the Uthmanic tradition. The lower text of the Sana'a palimpsest, as edited by Sadeghi and Goudarzi, differs from the standard text far more often than any Uthmanic manuscript does: in the choice between synonyms, in the presence of small words and phrases, in word order, and in the sequence of surahs. Yet it contains the same surahs and the same passages, verse by verse. This sets a scale. Between the Uthmanic manuscripts, differences are counted in dozens of letters across the whole text; between the Uthmanic text and an independent Companion-type codex, differences appear in most verses but remain at the level of wording within a shared text. Sadeghi and Bergmann argue from the pattern that both descend from one prototype in the Prophet's lifetime.",
      "Comparison with other ancient scriptures is often made and should be made carefully. The Greek Jeremiah of the Septuagint is substantially shorter than the Hebrew Masoretic text and arranges its material differently, and Hebrew manuscripts from Qumran attest both forms; the Greek New Testament tradition includes whole passages, such as the longer ending of Mark and the story of the adulteress in John, that are absent from the earliest manuscripts. Differences of that size are not found among Uthmanic Quran manuscripts. The fair explanation is partly historical circumstance: the Quran was standardised within about two decades of its proclamation by a central authority which, according to the tradition, had other codices destroyed, whereas the biblical texts circulated for centuries without such control. Early uniformity is thus real and well measured, and it is the product of an early, deliberate standardisation.",
    ],
    arabicQuotes: [],
    keyFacts: [
      "About forty skeletal differences are recorded among the regional Uthmanic codices; each involves a single letter or short word (Cook 2004; Sidky 2020).",
      "Van Putten 2019: across 14 early manuscripts, the arbitrary spelling of niʿmat agrees at all but two of 23 locations.",
      "Word order, verse order and surah order are the same in all manuscripts of the Uthmanic text type.",
      "Spelling of long a with alif varied freely between scribes and was gradually modernised; this is orthographic, not a difference of wording.",
      "The Sana'a lower text is the only manuscript text outside the Uthmanic type; it differs in wording and surah order but contains the same passages.",
      "Passage-level variation of the kind found in the textual history of Jeremiah or the Gospels is not found among Uthmanic manuscripts.",
    ],
    scholarlyNuance:
      "Several cautions apply. The figure of about forty regional variants comes from Cook's analysis of the reports in al-Dani and is an approximate count that depends on which reports are admitted; Sidky's manuscript study confirms the pattern but also suggests that knowledge of the variants was built up by scholars over time rather than recorded at the moment of distribution. Van Putten's count concerns one family of spellings chosen because it is a good test; it should not be converted into a percentage 'accuracy' for the whole text. No complete critical edition of the early manuscripts yet exists, so statements about the corpus as a whole are extrapolations from the manuscripts so far collated, and scholars such as Déroche stress the corrections and orthographic fluidity in the earliest copies more than van Putten and Sidky do. Most importantly, stability after the archetype is not the same as identity between the archetype and what the Prophet recited. The Sana'a lower text and the reports about the codices of Ibn Masʿud and Ubayy show that somewhat different wordings circulated among Companions before the standardisation; the tradition explains these through the doctrine of the seven aḥruf and the final review, while academic scholars treat them as the ordinary variation of an early, partly oral transmission. The comparison with biblical texts is a comparison of transmission histories, not of the worth of scriptures, and is offered in that spirit.",
    sources: [
      {
        kind: "academic",
        citation:
          "M. van Putten, '‘The Grace of God’ as Evidence for a Written Uthmanic Archetype', Bulletin of the School of Oriental and African Studies 82/2 (2019), 271–288",
        detail:
          "Supplies the counts used here (23 occurrences, 14 manuscripts, disagreement at two locations), the observation that word, verse and surah order are retained throughout the Uthmanic text type, and the discussion of free variation in writing long a.",
        url: "https://doi.org/10.1017/S0041977X19000338",
      },
      {
        kind: "academic",
        citation: "M. Cook, 'The Stemma of the Regional Codices of the Koran', Graeco-Arabica 9–10 (2004), 89–104",
        detail:
          "Analyses the roughly forty skeletal variants reported between the codices of Medina, Syria, Basra and Kufa and shows that they are minor and stemmatically patterned.",
      },
      {
        kind: "academic",
        citation:
          "H. Sidky, 'On the Regionality of Qurʾānic Codices', Journal of the International Qur'anic Studies Association 5 (2020), 133–210",
        detail:
          "Compares the reported regional variants with early manuscripts and finds that the manuscripts descend from four regional ancestral codices, confirming the small scale and regular distribution of the variants.",
        url: "https://doi.org/10.5913/jiqsa.5.2020.a005",
      },
      {
        kind: "academic",
        citation: "B. Sadeghi & M. Goudarzi, 'Ṣanʿāʾ 1 and the Origins of the Qurʾān', Der Islam 87 (2012), 1–129",
        detail:
          "Edits the lower text of the Sana'a palimpsest and catalogues its differences from the standard text, providing the measure of how a non-Uthmanic codex differs from Uthmanic ones.",
        url: "https://doi.org/10.1515/islam-2011-0025",
      },
      {
        kind: "academic",
        citation:
          "M. van Putten, 'Textual Criticism of the Quran', in K. Finsterbusch et al. (eds.), The Comparative Textual Criticism of Religious Scriptures (Leiden: Brill, 2024), 152–172",
        detail:
          "A survey of the Quran's textual history written for a comparative volume, setting the Uthmanic archetype, the regional variants and the reading traditions beside the textual criticism of other scriptures.",
        url: "https://doi.org/10.1163/9789004693623_009",
      },
      {
        kind: "academic",
        citation: "E. Tov, Textual Criticism of the Hebrew Bible, 3rd ed. (Minneapolis: Fortress Press, 2012)",
        detail:
          "The standard handbook for the Hebrew Bible, describing among other cases the shorter and differently ordered edition of Jeremiah reflected in the Septuagint and in Qumran fragments; used here for the comparison of transmission histories.",
      },
    ],
    quiz: [
      {
        id: "p5-measured-stability-q1",
        prompt: "Roughly how many skeletal differences are recorded among the regional master copies of the Uthmanic text, and of what kind are they?",
        options: [
          "About forty, each a single letter or short word",
          "Several thousand, including whole verses",
          "None at all; the copies were identical in every letter",
          "About four hundred, mostly whole sentences",
        ],
        answerIndex: 0,
        explanation:
          "The rasm literature analysed by Cook and tested by Sidky records about forty places, such as wa-waṣṣā and wa-awṣā at Q 2:132, where the regional codices differed by a letter or a small word.",
      },
      {
        id: "p5-measured-stability-q2",
        prompt: "Which feature of the early manuscripts did vary freely from scribe to scribe?",
        options: [
          "The order of the surahs",
          "The order of verses within a surah",
          "The writing of long a with or without alif",
          "The presence of whole passages",
        ],
        answerIndex: 2,
        explanation:
          "Van Putten and Déroche both document that plene and defective spelling of long a varied and was modernised over time. This is a matter of orthographic convention and does not change which word is written.",
      },
      {
        id: "p5-measured-stability-q3",
        prompt: "Why is agreement on an arbitrary spelling a stricter test of copying fidelity than agreement on wording?",
        options: [
          "Because arbitrary spellings are easier to see on the page",
          "Because a scribe could restore a meaningful word from memory, but could only reproduce a meaningless spelling choice by copying it",
          "Because spelling was fixed by royal decree in every region",
          "Because wording was never memorised",
        ],
        answerIndex: 1,
        explanation:
          "A copyist who knew the Quran by heart could write the right word without looking. The choice between two equivalent spellings carries no sound or sense, so matching it shows faithful letter-by-letter copying from an exemplar.",
      },
    ],
  },
];
