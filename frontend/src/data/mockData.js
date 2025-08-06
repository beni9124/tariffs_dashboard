// Mock data for Netflix clone - will be replaced with TMDB API later
export const mockMovies = {
  trending: [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      rating: 8.7,
      year: 2016,
      genre: "Sci-Fi, Drama",
      trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU"
    },
    {
      id: 2,
      title: "The Witcher",
      image: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/7d5YltWlqjgrNnpwmFaNbZGCfD8.jpg",
      overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      rating: 8.2,
      year: 2019,
      genre: "Fantasy, Action",
      trailerUrl: "https://www.youtube.com/embed/ndl1W4ltcmg"
    },
    {
      id: 3,
      title: "Wednesday",
      image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
      overview: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
      rating: 8.1,
      year: 2022,
      genre: "Comedy, Horror",
      trailerUrl: "https://www.youtube.com/embed/Di310WS8zLk"
    },
    {
      id: 4,
      title: "Money Heist",
      image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
      overview: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.",
      rating: 8.3,
      year: 2017,
      genre: "Crime, Drama",
      trailerUrl: "https://www.youtube.com/embed/htqXL94Rza4"
    },
    {
      id: 5,
      title: "The Crown",
      image: "https://image.tmdb.org/t/p/w500/1M876KQUEYQmVkbM5VddYtdSZlR.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      rating: 8.6,
      year: 2016,
      genre: "Drama, History",
      trailerUrl: "https://www.youtube.com/embed/JWtnJjn6ng0"
    }
  ],
  popular: [
    {
      id: 6,
      title: "Breaking Bad",
      image: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
      overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      rating: 9.5,
      year: 2008,
      genre: "Crime, Drama",
      trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY"
    },
    {
      id: 7,
      title: "Dark",
      image: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/bGSqaHZOb7qQWlUDHeqtGGR7Bz8.jpg",
      overview: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
      rating: 8.8,
      year: 2017,
      genre: "Crime, Drama, Mystery",
      trailerUrl: "https://www.youtube.com/embed/rrwycJ08PSA"
    },
    {
      id: 8,
      title: "Squid Game",
      image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
      overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
      rating: 8.0,
      year: 2021,
      genre: "Action, Drama, Mystery",
      trailerUrl: "https://www.youtube.com/embed/oqxAJKy0ii4"
    },
    {
      id: 9,
      title: "House of Cards",
      image: "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/aZ4SUT9Rf6pTx6MicGq6XRaW4oH.jpg",
      overview: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
      rating: 8.7,
      year: 2013,
      genre: "Drama",
      trailerUrl: "https://www.youtube.com/embed/ULwUzF1q5w4"
    },
    {
      id: 10,
      title: "Ozark",
      image: "https://image.tmdb.org/t/p/w500/m73QkI7CbIUcVhSuLBnX5oguHv0.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/mYNWeKhGUmkXnKgPcd0z6zXfSlm.jpg",
      overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
      rating: 8.5,
      year: 2017,
      genre: "Crime, Drama",
      trailerUrl: "https://www.youtube.com/embed/5hAXVqrljbs"
    }
  ],
  action: [
    {
      id: 11,
      title: "John Wick",
      image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
      overview: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
      rating: 7.4,
      year: 2014,
      genre: "Action, Thriller",
      trailerUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
    },
    {
      id: 12,
      title: "Extraction",
      image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/xYvIz4UbwvMRGMtJF8KfQ8xnRXL.jpg",
      overview: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.",
      rating: 6.8,
      year: 2020,
      genre: "Action, Thriller",
      trailerUrl: "https://www.youtube.com/embed/L6P3nI6VnlY"
    },
    {
      id: 13,
      title: "The Gray Man",
      image: "https://image.tmdb.org/t/p/w500/q0nOBRvVqFNKLsAikJQovqmkmqf.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      overview: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
      rating: 6.5,
      year: 2022,
      genre: "Action, Thriller",
      trailerUrl: "https://www.youtube.com/embed/BmllggGO4pM"
    },
    {
      id: 14,
      title: "Red Notice",
      image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
      overview: "An Interpol agent tracks the world's most wanted art thief.",
      rating: 6.3,
      year: 2021,
      genre: "Action, Comedy, Thriller",
      trailerUrl: "https://www.youtube.com/embed/Pj0wz7zu3Ms"
    },
    {
      id: 15,
      title: "6 Underground",
      image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrDEKHlRAGJOdtxr.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/4SYTH5FdB0dAORV98Nq4UlxMlvn.jpg",
      overview: "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
      rating: 6.1,
      year: 2019,
      genre: "Action, Thriller",
      trailerUrl: "https://www.youtube.com/embed/YLE85olJjp8"
    }
  ]
};

export const featuredMovie = mockMovies.trending[0];