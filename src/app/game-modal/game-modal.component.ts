import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameDetailsWithScreenhotsAndMovies } from '../models';
import { HttpService } from '../services/http.service';

const GAME = {
  "id": 3498,
  "slug": "grand-theft-auto-v",
  "name": "Grand Theft Auto V",
  "name_original": "Grand Theft Auto V",
  "description": "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>",
  "metacritic": 91,
  "metacritic_platforms": [
    {
      "metascore": 79,
      "url": "https://www.metacritic.com/game/xbox-series-x/grand-theft-auto-v",
      "platform": {
        "platform": 186,
        "name": "Xbox Series S/X",
        "slug": "xbox-series-x"
      }
    },
    {
      "metascore": 81,
      "url": "https://www.metacritic.com/game/playstation-5/grand-theft-auto-v",
      "platform": {
        "platform": 187,
        "name": "PlayStation 5",
        "slug": "playstation5"
      }
    },
    {
      "metascore": 97,
      "url": "https://www.metacritic.com/game/playstation-3/grand-theft-auto-v",
      "platform": {
        "platform": 16,
        "name": "PlayStation 3",
        "slug": "playstation3"
      }
    },
    {
      "metascore": 96,
      "url": "https://www.metacritic.com/game/pc/grand-theft-auto-v",
      "platform": {
        "platform": 4,
        "name": "PC",
        "slug": "pc"
      }
    },
    {
      "metascore": 97,
      "url": "https://www.metacritic.com/game/xbox-360/grand-theft-auto-v",
      "platform": {
        "platform": 14,
        "name": "Xbox 360",
        "slug": "xbox360"
      }
    },
    {
      "metascore": 97,
      "url": "https://www.metacritic.com/game/xbox-one/grand-theft-auto-v",
      "platform": {
        "platform": 1,
        "name": "Xbox One",
        "slug": "xbox-one"
      }
    }
  ],
  "released": "2013-09-17",
  "tba": false,
  "updated": "2022-07-21T01:55:44",
  "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "background_image_additional": "https://media.rawg.io/media/screenshots/5f5/5f5a38a222252d996b18962806eed707.jpg",
  "website": "http://www.rockstargames.com/V/",
  "rating": 4.48,
  "rating_top": 5,
  "ratings": [
    {
      "id": 5,
      "title": "exceptional",
      "count": 3475,
      "percent": 59.28
    },
    {
      "id": 4,
      "title": "recommended",
      "count": 1909,
      "percent": 32.57
    },
    {
      "id": 3,
      "title": "meh",
      "count": 373,
      "percent": 6.36
    },
    {
      "id": 1,
      "title": "skip",
      "count": 105,
      "percent": 1.79
    }
  ],
  "reactions": {
    "1": 25,
    "2": 7,
    "3": 32,
    "4": 15,
    "5": 11,
    "6": 7,
    "7": 14,
    "8": 19,
    "9": 1,
    "10": 8,
    "11": 14,
    "12": 11,
    "14": 3,
    "15": 2,
    "16": 6,
    "18": 4,
    "20": 1,
    "21": 2
  },
  "added": 17738,
  "added_by_status": {
    "yet": 444,
    "owned": 10397,
    "beaten": 4844,
    "toplay": 518,
    "dropped": 892,
    "playing": 643
  },
  "playtime": 72,
  "screenshots_count": 57,
  "movies_count": 8,
  "creators_count": 11,
  "achievements_count": 539,
  "parent_achievements_count": 75,
  "reddit_url": "https://www.reddit.com/r/GrandTheftAutoV/",
  "reddit_name": "/r/GrandTheftAutoV",
  "reddit_description": "/r/GrandTheftAutoV - the subreddit for all GTA V related news, content, and discussions revolving around Rockstar's critically acclaimed single player release and the ongoing multiplayer expansion of Grand Theft Auto Online.",
  "reddit_logo": "",
  "reddit_count": 5059,
  "twitch_count": 186,
  "youtube_count": 1000000,
  "reviews_text_count": 75,
  "ratings_count": 5787,
  "suggestions_count": 410,
  "alternative_names": [
    "GTA 5",
    "GTA V",
    "GTA5",
    "GTAV"
  ],
  "metacritic_url": "https://www.metacritic.com/game/pc/grand-theft-auto-v",
  "parents_count": 0,
  "additions_count": 3,
  "game_series_count": 10,
  "user_game": null,
  "reviews_count": 5862,
  "saturated_color": "0f0f0f",
  "dominant_color": "0f0f0f",
  "parent_platforms": [
    {
      "platform": {
        "id": 1,
        "name": "PC",
        "slug": "pc"
      }
    },
    {
      "platform": {
        "id": 2,
        "name": "PlayStation",
        "slug": "playstation"
      }
    },
    {
      "platform": {
        "id": 3,
        "name": "Xbox",
        "slug": "xbox"
      }
    }
  ],
  "platforms": [
    {
      "platform": {
        "id": 4,
        "name": "PC",
        "slug": "pc",
        "image": null,
        "year_end": null,
        "year_start": null,
        "games_count": 460709,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {
        "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
        "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
      }
    },
    {
      "platform": {
        "id": 186,
        "name": "Xbox Series S/X",
        "slug": "xbox-series-x",
        "image": null,
        "year_end": null,
        "year_start": 2020,
        "games_count": 561,
        "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    },
    {
      "platform": {
        "id": 18,
        "name": "PlayStation 4",
        "slug": "playstation4",
        "image": null,
        "year_end": null,
        "year_start": null,
        "games_count": 6424,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    },
    {
      "platform": {
        "id": 16,
        "name": "PlayStation 3",
        "slug": "playstation3",
        "image": null,
        "year_end": null,
        "year_start": null,
        "games_count": 3610,
        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    },
    {
      "platform": {
        "id": 14,
        "name": "Xbox 360",
        "slug": "xbox360",
        "image": null,
        "year_end": null,
        "year_start": null,
        "games_count": 2770,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    },
    {
      "platform": {
        "id": 1,
        "name": "Xbox One",
        "slug": "xbox-one",
        "image": null,
        "year_end": null,
        "year_start": null,
        "games_count": 5337,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    },
    {
      "platform": {
        "id": 187,
        "name": "PlayStation 5",
        "slug": "playstation5",
        "image": null,
        "year_end": null,
        "year_start": 2020,
        "games_count": 627,
        "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
      },
      "released_at": "2013-09-17",
      "requirements": {}
    }
  ],
  "stores": [
    {
      "id": 290375,
      "url": "",
      "store": {
        "id": 3,
        "name": "PlayStation Store",
        "slug": "playstation-store",
        "domain": "store.playstation.com",
        "games_count": 7792,
        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
      }
    },
    {
      "id": 438095,
      "url": "",
      "store": {
        "id": 11,
        "name": "Epic Games",
        "slug": "epic-games",
        "domain": "epicgames.com",
        "games_count": 1032,
        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
      }
    },
    {
      "id": 290376,
      "url": "",
      "store": {
        "id": 1,
        "name": "Steam",
        "slug": "steam",
        "domain": "store.steampowered.com",
        "games_count": 64932,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      }
    },
    {
      "id": 290377,
      "url": "",
      "store": {
        "id": 7,
        "name": "Xbox 360 Store",
        "slug": "xbox360",
        "domain": "marketplace.xbox.com",
        "games_count": 1915,
        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
      }
    },
    {
      "id": 290378,
      "url": "",
      "store": {
        "id": 2,
        "name": "Xbox Store",
        "slug": "xbox-store",
        "domain": "microsoft.com",
        "games_count": 4720,
        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
      }
    }
  ],
  "developers": [
    {
      "id": 3524,
      "name": "Rockstar North",
      "slug": "rockstar-north",
      "games_count": 29,
      "image_background": "https://media.rawg.io/media/screenshots/b98/b98adb52b2123a14d1c88e828a6b49f3.jpg"
    },
    {
      "id": 10,
      "name": "Rockstar Games",
      "slug": "rockstar-games",
      "games_count": 25,
      "image_background": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg"
    }
  ],
  "genres": [
    {
      "id": 4,
      "name": "Action",
      "slug": "action",
      "games_count": 155362,
      "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
    },
    {
      "id": 3,
      "name": "Adventure",
      "slug": "adventure",
      "games_count": 117922,
      "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
    }
  ],
  "tags": [
    {
      "id": 31,
      "name": "Singleplayer",
      "slug": "singleplayer",
      "language": "eng",
      "games_count": 172174,
      "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
    },
    {
      "id": 40847,
      "name": "Steam Achievements",
      "slug": "steam-achievements",
      "language": "eng",
      "games_count": 26500,
      "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
    },
    {
      "id": 7,
      "name": "Multiplayer",
      "slug": "multiplayer",
      "language": "eng",
      "games_count": 31817,
      "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
    },
    {
      "id": 13,
      "name": "Atmospheric",
      "slug": "atmospheric",
      "language": "eng",
      "games_count": 23160,
      "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
    },
    {
      "id": 40836,
      "name": "Full controller support",
      "slug": "full-controller-support",
      "language": "eng",
      "games_count": 12330,
      "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
    },
    {
      "id": 42,
      "name": "Great Soundtrack",
      "slug": "great-soundtrack",
      "language": "eng",
      "games_count": 3206,
      "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
    },
    {
      "id": 24,
      "name": "RPG",
      "slug": "rpg",
      "language": "eng",
      "games_count": 14843,
      "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
    },
    {
      "id": 18,
      "name": "Co-op",
      "slug": "co-op",
      "language": "eng",
      "games_count": 8582,
      "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
    },
    {
      "id": 36,
      "name": "Open World",
      "slug": "open-world",
      "language": "eng",
      "games_count": 5286,
      "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
    },
    {
      "id": 411,
      "name": "cooperative",
      "slug": "cooperative",
      "language": "eng",
      "games_count": 3483,
      "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
    },
    {
      "id": 8,
      "name": "First-Person",
      "slug": "first-person",
      "language": "eng",
      "games_count": 22688,
      "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
    },
    {
      "id": 149,
      "name": "Third Person",
      "slug": "third-person",
      "language": "eng",
      "games_count": 7425,
      "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
    },
    {
      "id": 4,
      "name": "Funny",
      "slug": "funny",
      "language": "eng",
      "games_count": 19354,
      "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
    },
    {
      "id": 37,
      "name": "Sandbox",
      "slug": "sandbox",
      "language": "eng",
      "games_count": 5039,
      "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
    },
    {
      "id": 123,
      "name": "Comedy",
      "slug": "comedy",
      "language": "eng",
      "games_count": 9218,
      "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
    },
    {
      "id": 150,
      "name": "Third-Person Shooter",
      "slug": "third-person-shooter",
      "language": "eng",
      "games_count": 2411,
      "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
    },
    {
      "id": 62,
      "name": "Moddable",
      "slug": "moddable",
      "language": "eng",
      "games_count": 701,
      "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
    },
    {
      "id": 144,
      "name": "Crime",
      "slug": "crime",
      "language": "eng",
      "games_count": 2274,
      "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
    },
    {
      "id": 62349,
      "name": "vr mod",
      "slug": "vr-mod",
      "language": "eng",
      "games_count": 17,
      "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
    }
  ],
  "publishers": [
    {
      "id": 2155,
      "name": "Rockstar Games",
      "slug": "rockstar-games",
      "games_count": 74,
      "image_background": "https://media.rawg.io/media/games/bcd/bcdadb5dd2be66dd4dd1f657275b3f8e.jpg"
    }
  ],
  "esrb_rating": {
    "id": 4,
    "name": "Mature",
    "slug": "mature"
  },
  "clip": null,
  "description_raw": "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.",
  "screenshots": [
    {
      "id": 1827221,
      "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    },
    {
      "id": 1827222,
      "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    },
    {
      "id": 1827223,
      "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    },
    {
      "id": 1827225,
      "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    },
    {
      "id": 1827226,
      "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    },
    {
      "id": 1827227,
      "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
      "width": 1920,
      "height": 1080,
      "is_deleted": false
    }
  ],
  "movies": [
    {
      "id": 16228,
      "name": "GTA Online: Smuggler's Run Trailer",
      "preview": "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
      }
    },
    {
      "id": 16227,
      "name": "GTA Online: Gunrunning Trailer",
      "preview": "https://media.rawg.io/media/movies/80c/80c2eeb2478d31291dfb5a5fd5a45f2e.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie_max.mp4"
      }
    },
    {
      "id": 16226,
      "name": "GTA Online: Tiny Racers Trailer",
      "preview": "https://media.rawg.io/media/movies/7c9/7c9f84f3ec31106944a04128287fdd6a.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4"
      }
    },
    {
      "id": 16225,
      "name": "GTA Online Cunning Stunts: Special Vehicle Circuit Trailer",
      "preview": "https://media.rawg.io/media/movies/d6e/d6e1deb16c4275e8f5769528780e03ac.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie_max.mp4"
      }
    },
    {
      "id": 16224,
      "name": "GTA Online: Import/Export",
      "preview": "https://media.rawg.io/media/movies/1c1/1c1429a6557185326c1d8c03a6f325c0.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie_max.mp4"
      }
    },
    {
      "id": 16223,
      "name": "GTA Online: Deadline",
      "preview": "https://media.rawg.io/media/movies/f80/f8051b0eb479fa1785c1e04c8e54e322.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie_max.mp4"
      }
    },
    {
      "id": 16222,
      "name": "GTA Online: Bikers Trailer",
      "preview": "https://media.rawg.io/media/movies/955/9556607dec02bf324c87aa33bba2ed8e.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie_max.mp4"
      }
    },
    {
      "id": 16221,
      "name": "GTA Online: Cunning Stunts Trailer",
      "preview": "https://media.rawg.io/media/movies/66e/66e78864cf57faa2a52cfab4eb6830a4.jpg",
      "data": {
        "480": "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie480.mp4",
        "max": "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie_max.mp4"
      }
    }
  ]
}

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
})
export class GameModalComponent implements OnInit, OnChanges {
  /** Current displayed game's ID */
  @Input() id: number = -1

  @Input() isOpen = false
  @Output() onClose = new EventEmitter<void>()

  /** Game details */
  game?: GameDetailsWithScreenhotsAndMovies

  /** Stores the result of previously fetched games */
  private cache: Record<number, GameDetailsWithScreenhotsAndMovies> = {}

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { id } = changes
    const { currentValue } = id || {}

    /** Update subcription when `id` changes */
    if (typeof currentValue === 'number') {
      if (currentValue > -1) this.getDetailsOfGame(currentValue)
      else this.game = undefined
    }
  }

  private getDetailsOfGame(id: number) {
    // TODO: Remove
    this.game = GAME as any
    return

    if (!this.cache[id]) {
      const sub = this.httpService
        .getDetailsOfGame(id)
        .subscribe(game => {
          this.cache[id] = game
          this.game = this.cache[id]
          sub.unsubscribe()
        })
    } else this.game = this.cache[id]
  }
}
