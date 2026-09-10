# Content source ledger

Reviewed September 9, 2026. This ledger is for the portfolio owner and is not linked as a visitor-facing page. No private source document is copied into the website or its public assets. The one published document is a sanitized résumé derivative.

## Library search and source selection

The session had no Library search connector. After an initial browser-access failure, the working Chrome installation exposed ChatGPT Library. Searched IBM, Bobathon, wxO, MDP, Intramural, Agent, Walbridge, and Wenbin. Library showed recent résumé PDFs and TeX files, MDP meeting notes, and Walbridge documents. No standalone wxO or Bobathon file was returned by those searches. The Intramural result was a rules document, not employment evidence.

The newest visible résumé was `qrt_quantitative_research_intern_2027_resume.pdf`, followed by `kensho_spglobal_software_engineer_summer_2027_resume.pdf`, both modified September 9. Matching PDFs already existed in Downloads; their complete text was extracted and reviewed. The QRT TeX file was opened in Library, but no source code from it is hosted. The latest QRT PDF is the source of `public/wenbin-liao-resume.pdf`; the software engineering variant provides complementary portfolio details. Modification time establishes the latest visible version, not a claim that it is the user's definitive master résumé.

## Library files used

1. **qrt_quantitative_research_intern_2027_resume.pdf** — latest visible Library résumé, September 9, 2026. Supports name, email, education, skills, IBM dates and evaluation pipeline, MDP role, IT internship, and additional projects. A sanitized derivative is embedded/downloadable.
2. **kensho_spglobal_software_engineer_summer_2027_resume.pdf** — September 9, 2026. Supports IBM full-stack scope, React, FastAPI, live progress, history/export, concurrency, fuzzy search/caching, QA automation; MDP modular retrieval work; Quincy IT work; Search Engine and MapReduce; coursework and skills.
3. **Wenbin_Liao_Resume.pdf** — modified August 22, 2026, Drive ID `1sIOPeGvlLS88z-8wqHFHUjAki4U6kQ3-`. Supports recursive graph traversal, two-pass LLM evaluation, health scores, streaming, run history/export, caching; MDP; Copilot Studio, Dataverse and SharePoint; Search Engine and MapReduce.
4. **Wenbin_Liao_Resume.pdf** — older July 24, 2026 source, Drive ID `1ZbOJoKD7Hy8F0KQz3QlIYDvtu6sGLUX9`. Cross-checks actionable recommendations, IBM Bob QA/debugging, and Search Engine implementation. Its old graduation year and open-ended internship date were not carried forward.
5. **TC497_Wenbin_Liao_Resume** — September 4, 2026, Drive ID `1_1IR6RqjAwFSSGJuZm5sSN4ul3IfaA7B`. Cross-checks current IBM and MDP dates, QA work, pipeline details, coursework, IT internship, Search Engine and MapReduce.
6. **MDP meeting notes** — January 16, 2026, Drive ID `1U5wddRoohIVTDoJcnHRBE5dAd6p7fMGuSgi4CgUBei8`. Corroborates Copilot agent evaluation and SharePoint lessons-learned context. Private names, assignments, and raw notes were not included.

`Walbridge_DR1 Requirements` was found and fetched but returned empty readable content; it was not used to establish any claim. Other Walbridge search results, including agreements and older presentations, were not reproduced or treated as current implementation evidence.

## GitHub repositories used

Both repositories were verified as public through the connected GitHub APIs.

### DormDash

- https://github.com/Wizice325/DormDash
- https://github.com/Wizice325/DormDash/blob/main/src/main.cpp
- https://github.com/Wizice325/DormDash/blob/main/platformio.ini
- Reviewed tree: `31ab1195be232fe2e8d31871fff6ab3a24dcb4c0`
- Firmware blob: `720784c7eb9cbca0759fb6317827c7bf9b2f5423`

The code supports C++, Arduino Leonardo, PlatformIO, PPM interrupt input, atomic snapshots, deadband/exponential shaping, differential motor mixing, TB6612FNG motor output, arming/disarm handling, status LEDs, and serial debug output. The portfolio describes source behavior, not tested hardware performance or individual authorship. No reliable signal-loss protection claim is made: code inspection alone does not validate the freshness logic.

## Local coursework used

At the user's request, the project folders in Documents were reviewed read-only. No class source, datasets, assignment documents, or binaries are included in the portfolio bundle. `LOCAL_PROJECT_REVIEW.md` records the scope and unreviewed areas.

- **EECS485Project / p5-485:** indexing pipeline, `index_server/index/searcher.py`, and `search_server/search/services.py`. Corroborates TF-IDF, normalized cosine scoring, in-memory indices, concurrent segment requests, and score merging. The web description was corrected to say the implementation **uses supplied PageRank scores**, rather than claiming it computes them.
- **EECS485Project / p4-485-main:** Manager and Worker modules. Corroborates TCP control messages, UDP heartbeats, concurrent workers, map/reduce coordination, and rescheduling interrupted tasks.
- **EECS485Project / p3-insta485-clientside:** React feed/post components, Flask API, SQLite model, and package configuration. Supports asynchronous likes/comments, infinite-scroll pagination, authentication, and ownership checks. No optimistic-update, live-deployment, or passing-test claim is made.
- **EECS370 / p3 and p4:** pipeline `simulator.c` and `cache.c`. Supports explicit pipeline stages, forwarding, load-use stalls, branch flushing, configurable cache layout, LRU, write-back/write-allocate, and counters.
- **EECS445 / P2:** `model/target.py`, `model/vit.py`, `train_cnn.py`, and `train_vit.py`. Supports PyTorch CNN/ViT components, attention and residual structure, training, validation, and early stopping. Course scaffold attribution is retained. No model accuracy or other result is inferred from saved filenames.
- **EECS281Project / p4:** `market.h`, `order.cpp`, and `orderBook.cpp`. Supports C++ heap ordering by price and arrival ID, partial fills, expiration, and a two-heap running median. No live trading, throughput, or latency claim is made.

Course project dates were not inferred from file timestamps or copyright/scaffold headers. The user's statement establishes these as their class projects; the site does not claim sole authorship of all supplied course code.

## Direct user facts and conflicts

- Wenbin Liao; University of Michigan Computer Science; interests in software engineering, systems, AI engineering, and full-stack developer tools.
- IBM Software Developer Intern, San Jose, Summer 2026; Agent Evaluator association with Bobathon.
- LinkedIn and GitHub URLs were provided directly and retained exactly.
- `wenbinl@umich.edu` is verified in multiple résumés and used as the professional contact email.
- **Graduation conflict:** the prompt says May 2028; the August and September résumés say April 2028. An older July file says May 2027. The older year was superseded by the user and recent documents. The site currently uses May 2028 with an explicit month-confirmation label, and the public PDF says `2028 (month pending)`. The user has been asked to choose April or May; do not silently resolve this conflict.
- **Current employment:** “January 2026–Present” for MDP is supported by September 9 résumé variants. IBM’s May–August 2026 end date is supported by current documents and takes precedence over the older “Present” version.
- Coursework titles follow the current software engineering and TC497 variants. No grades, GPA, enrollment completion status, or course performance is claimed.

## Every remaining placeholder or omitted item

1. **Graduation month:** confirm April or May 2028. Update `profile.graduation`, clear `profile.graduationPending`, and update the public PDF accordingly. The site marks this conflict on Home, About, and Resume.
2. **Agent Evaluator:** provide any public-safe source/demo URL, exact project-specific dates, and verified Bobathon results if desired. Technical implementation is now supported; no stack/capability placeholders remain. Internal source links and documents are not exposed.
3. **Search Engine:** project dates and a verified public repository/demo URL are pending.
4. **Distributed MapReduce:** project dates and a verified public repository/demo URL are pending.
5. **Lessons-Learned Retrieval Agent:** a verified public-safe source/demo URL is pending. MDP role dates and the documented implementation are included.
6. **DormDash:** project dates, team context, Wenbin's individual contribution, hardware testing, and a verified demo are pending; the repository link and source-grounded technical overview are included.
7. **Professional photo:** provide a portrait you want published. The About page reserves a labeled photo area and does not use a substitute image.
8. **Intramural Supervisor:** omitted because none of the reviewed résumés establish this role. Provide résumé or other role evidence with organization, dates, and responsibilities to include it.
9. **Full-Stack Social App:** project dates and a verified public repository/demo URL are pending.
10. **Pipeline & Cache Simulators:** project dates and a verified public repository/demo URL are pending.
11. **CNN & Vision Transformer:** project dates, verified model results if desired, and a public repository/demo URL are pending.
12. **Electronic Trading Simulator:** project dates and a verified public repository/demo URL are pending.

The résumé, professional email, coursework, skill list, IBM work, and MDP are no longer missing. No numeric metrics were added to the web pages. Metrics that already exist in the latest source résumé are preserved in the sanitized PDF, without embellishment.

## Public résumé privacy

`public/wenbin-liao-resume.pdf` is derived from the latest QRT PDF. True PDF redaction removes the phone/header location/citizenship row and awards/scholarship row. Original metadata is cleared, unapproved link destinations are removed, and the conflicting graduation month is replaced by an explicit pending label. Text extraction and rendering are used to verify the result. The unmodified original remains in Downloads and is not committed. No home address, phone, grades, financial information, private documents, or secrets are in the published site.
