import rabindra from '../assets/R(1).jpg'
export default function HOME(){

    return(
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="./nav.css" />
  <link rel="stylesheet" href="main.css" />
  <main className="main">
    <h1 className="ml">
      <b>OUR MOST LIKED STORIES</b>
    </h1>
    <div className="top1">
      <div id="top1">
        <p id="top1p">
          A short story is a work of prose fiction that can be read in one
          sitting—usually between 20 minutes to an hour. There is no maximum
          length, but the average short story is 1,000 to 7,500 words, with some
          outliers reaching 10,000 or 15,000 words.A short story is a piece of
          writing ranging from 1,000 to 10,000 words. “The Tell-Tale Heart” by
          Edgar Allen Poe, “The Gift of the Magi” by O. Henry, and “A Christmas
          Carl
        </p>
        <img id="top1img"  alt="" />
      </div>
      <div id="top2">
        <p id="top2p">
          {" "}
          Game of Thrones attracted a record viewership on HBO and has a broad,
          active, and international fan base. Many Valar Morghulis (All men must
          die)! Game of Thrones is an epic struggle for power. Known world is
          divided into 4 continents. The continents of Westeros and Essos are
          where all action happens.the last descendant of the realm's deposed
          ruling dynasty, who has been exiled to Essos and is plotting to return
          and reclaim the throne
        </p>
        <img id="top2img" src="./../IMAGES/got.jpg" alt="" />
      </div>
      <div id="top3">
        <p id="top3p">
          Rabindranath Tagore is India's greatest poet.The SNLTR hosts the 1415
          BE edition of Tagore's complete Bengali works. Tagore Web also hosts
          an edition of Tagore's works, including annotated songs. Translations
          are found at Project Gutenberg and Wikisource. More sources are below.
          He is also one of the world's best poets.May 7, 1861, he was born into
          a wealthy and intellectual Kolkata family.{" "}
        </p>
        <img id="top3img" src={rabindra} alt="" />
      </div>
    </div>
    <h1 id="ols">OUR LATEST STORIES</h1>
    <div className="cards">
      <div className="card a">
        <h6 align="center">The Bowl Of Water</h6>
        <img src="./../IMAGES/tenalirama.png" alt="" />
        <a
          href="/DASHBOARD/dashboard.html"
          style={{ fontWeight: "bold", margin: 5 }}
        >
          <p>
            Once upon a time, king Krishnadevaraya visited Cuttack and was
            passing along the banks of the river Narmada. There, he saw a sage
            meditating intensely. The sage was in fact meditating above the
            ground....
          </p>
        </a>
      </div>
      <div className="card b">
        <h6 align="center">Waiting For The Mahatma</h6>
        <img src="./../IMAGES/mahatmagandhi.png" alt="" />
        <a
          href="/DASHBOARD/dashboard.html"
          style={{ fontWeight: "bold", margin: 5 }}
        >
          <p>
            In Waiting for the Mahatma, a young drifter meets the most beautiful
            girl he has ever seen an adherent of Mahatma Gandhi and commits
            himself to Gandhi's Quit India campaign.......
          </p>
        </a>
      </div>
      <div className="card c">
        <h6 align="center">The Lone Boy</h6>
        <img src="./../IMAGES/thiefstory.png" alt="" />
        <a
          href="/DASHBOARD/dashboard.html"
          style={{ fontWeight: "bold", margin: 5 }}
        >
          <p>
            The story is about a 15-year-old thief who changes his name every
            month to stay ahead of the police and old employers. This time he
            kept his name Hari Singh......
          </p>
        </a>
      </div>
      <div className="card d">
        <h6 align="center">Empty Hearts</h6>
        <img src="./../IMAGES/akbar&birbal.png" alt="" />
        <a
          href="/DASHBOARD/dashboard.html"
          style={{ fontWeight: "bold", margin: 5 }}
        >
          <p>
            Local folk tales emerged primarily in 19th century involving his
            interactions with Akbar, thus became even more of a semi-fictional
            legendary figure across the Indian subcontinent.....
          </p>
        </a>
      </div>
      <div className="card e">
        <h6 align="center">Flying L ike Clouds</h6>
        <img src="./../IMAGES/monkey.png" alt="" />
        <a
          href="/DASHBOARD/dashboard.html"
          style={{ fontWeight: "bold", margin: 5 }}
        >
          <p>
            This short story is by W.W. Jacobs, published in 1902 in the
            collection The Lady of the Barge. The story centres on a dried,
            shrunken monkey's paw that is said to have the power to grant its
            possessor three wishes.......
          </p>
        </a>
      </div>
    </div>
    <br />
    <div className="footer">
      <h3 align="center">WORD WEAVERS</h3>
    </div>
  </main>
</>

    )
}

