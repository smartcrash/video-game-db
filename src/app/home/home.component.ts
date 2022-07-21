import { Component, OnInit } from '@angular/core';
import { Game } from '../models';
import { HttpService } from '../services/http.service';

const GAMES = [
  {
    "id": 3498,
    "slug": "grand-theft-auto-v",
    "name": "Grand Theft Auto V",
    "released": "2013-09-17",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "rating": 4.48,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3474,
        "percent": 59.27
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
    "ratings_count": 5786,
    "reviews_text_count": 43,
    "added": 17728,
    "added_by_status": {
      "yet": 443,
      "owned": 10393,
      "beaten": 4840,
      "toplay": 518,
      "dropped": 891,
      "playing": 643
    },
    "metacritic": 91,
    "playtime": 72,
    "suggestions_count": 410,
    "updated": "2022-07-20T15:16:49",
    "user_game": null,
    "reviews_count": 5861,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
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
        "requirements_en": {
          "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
          "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
        },
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
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
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
    "stores": [
      {
        "id": 290375,
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
    "clip": null,
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
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
      },
      {
        "id": 1827221,
        "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
      },
      {
        "id": 1827222,
        "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
      },
      {
        "id": 1827223,
        "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
      },
      {
        "id": 1827225,
        "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
      },
      {
        "id": 1827226,
        "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
      },
      {
        "id": 1827227,
        "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
      }
    ]
  },
  {
    "id": 3328,
    "slug": "the-witcher-3-wild-hunt",
    "name": "The Witcher 3: Wild Hunt",
    "released": "2015-05-18",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "rating": 4.67,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 4270,
        "percent": 78.02
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 850,
        "percent": 15.53
      },
      {
        "id": 3,
        "title": "meh",
        "count": 220,
        "percent": 4.02
      },
      {
        "id": 1,
        "title": "skip",
        "count": 133,
        "percent": 2.43
      }
    ],
    "ratings_count": 5395,
    "reviews_text_count": 56,
    "added": 16510,
    "added_by_status": {
      "yet": 929,
      "owned": 9566,
      "beaten": 3874,
      "toplay": 656,
      "dropped": 720,
      "playing": 765
    },
    "metacritic": 92,
    "playtime": 46,
    "suggestions_count": 656,
    "updated": "2022-07-20T15:15:40",
    "user_game": null,
    "reviews_count": 5473,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 4879,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
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
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
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
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 47464,
        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
      }
    ],
    "stores": [
      {
        "id": 354780,
        "store": {
          "id": 5,
          "name": "GOG",
          "slug": "gog",
          "domain": "gog.com",
          "games_count": 4279,
          "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
        }
      },
      {
        "id": 3565,
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
        "id": 305376,
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
        "id": 312313,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4720,
          "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        }
      },
      {
        "id": 676022,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8834,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 7425,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 20330,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 4889,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 11313,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 44,
        "name": "Nudity",
        "slug": "nudity",
        "language": "eng",
        "games_count": 3853,
        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
      },
      {
        "id": 336,
        "name": "controller support",
        "slug": "controller-support",
        "language": "eng",
        "games_count": 293,
        "image_background": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg"
      },
      {
        "id": 192,
        "name": "Mature",
        "slug": "mature",
        "language": "eng",
        "games_count": 1505,
        "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
      },
      {
        "id": 145,
        "name": "Choices Matter",
        "slug": "choices-matter",
        "language": "eng",
        "games_count": 2372,
        "image_background": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg"
      },
      {
        "id": 40,
        "name": "Dark Fantasy",
        "slug": "dark-fantasy",
        "language": "eng",
        "games_count": 2552,
        "image_background": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg"
      },
      {
        "id": 66,
        "name": "Medieval",
        "slug": "medieval",
        "language": "eng",
        "games_count": 4319,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 82,
        "name": "Magic",
        "slug": "magic",
        "language": "eng",
        "games_count": 6859,
        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
      },
      {
        "id": 218,
        "name": "Multiple Endings",
        "slug": "multiple-endings",
        "language": "eng",
        "games_count": 5504,
        "image_background": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 30336,
        "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
      },
      {
        "id": 30337,
        "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
      },
      {
        "id": 30338,
        "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
      },
      {
        "id": 30339,
        "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
      },
      {
        "id": 30340,
        "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
      },
      {
        "id": 30342,
        "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
      }
    ]
  },
  {
    "id": 4200,
    "slug": "portal-2",
    "name": "Portal 2",
    "released": "2011-04-18",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    "rating": 4.61,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3387,
        "percent": 70.28
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1198,
        "percent": 24.86
      },
      {
        "id": 3,
        "title": "meh",
        "count": 133,
        "percent": 2.76
      },
      {
        "id": 1,
        "title": "skip",
        "count": 101,
        "percent": 2.1
      }
    ],
    "ratings_count": 4778,
    "reviews_text_count": 28,
    "added": 15523,
    "added_by_status": {
      "yet": 520,
      "owned": 9572,
      "beaten": 4545,
      "toplay": 301,
      "dropped": 459,
      "playing": 126
    },
    "metacritic": 95,
    "playtime": 11,
    "suggestions_count": 545,
    "updated": "2022-07-20T05:56:38",
    "user_game": null,
    "reviews_count": 4819,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
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
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 68948,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 94778,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        "released_at": null,
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2011-04-19",
        "requirements_en": null,
        "requirements_ru": null
      },
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
        "released_at": null,
        "requirements_en": null,
        "requirements_ru": {
          "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
          "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
        }
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
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 53883,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle",
        "games_count": 87502,
        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
      }
    ],
    "stores": [
      {
        "id": 465889,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4720,
          "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        }
      },
      {
        "id": 13134,
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
        "id": 4526,
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
        "id": 33916,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1915,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 12057,
        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 14811,
        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 10801,
        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 3616,
        "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
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
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 8643,
        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
        "id": 75,
        "name": "Local Co-Op",
        "slug": "local-co-op",
        "language": "eng",
        "games_count": 4554,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4154,
        "image_background": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1208,
        "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
      },
      {
        "id": 25,
        "name": "Space",
        "slug": "space",
        "language": "eng",
        "games_count": 37538,
        "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
      },
      {
        "id": 40838,
        "name": "Includes level editor",
        "slug": "includes-level-editor",
        "language": "eng",
        "games_count": 1514,
        "image_background": "https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1169,
        "image_background": "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 244,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 87,
        "name": "Science",
        "slug": "science",
        "language": "eng",
        "games_count": 1346,
        "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
      }
    ],
    "esrb_rating": {
      "id": 2,
      "name": "Everyone 10+",
      "slug": "everyone-10-plus"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
      },
      {
        "id": 99018,
        "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
      },
      {
        "id": 99019,
        "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
      },
      {
        "id": 99020,
        "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
      },
      {
        "id": 99021,
        "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
      },
      {
        "id": 99022,
        "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
      },
      {
        "id": 99023,
        "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
      }
    ]
  },
  {
    "id": 5286,
    "slug": "tomb-raider",
    "name": "Tomb Raider (2013)",
    "released": "2013-03-05",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "rating": 4.05,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 2038,
        "percent": 60.24
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 862,
        "percent": 25.48
      },
      {
        "id": 3,
        "title": "meh",
        "count": 385,
        "percent": 11.38
      },
      {
        "id": 1,
        "title": "skip",
        "count": 98,
        "percent": 2.9
      }
    ],
    "ratings_count": 3361,
    "reviews_text_count": 10,
    "added": 13882,
    "added_by_status": {
      "yet": 555,
      "owned": 9066,
      "beaten": 3534,
      "toplay": 207,
      "dropped": 423,
      "playing": 97
    },
    "metacritic": 86,
    "playtime": 11,
    "suggestions_count": 621,
    "updated": "2022-07-18T13:24:13",
    "user_game": null,
    "reviews_count": 3383,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
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
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 94778,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": {
          "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
        },
        "requirements_ru": null
      },
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
        "released_at": "2013-03-05",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
        },
        "requirements_ru": {
          "minimum": "i486-100, 8 Мб",
          "recommended": "Pentium 166, 16 Мб"
        }
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
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
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
    "stores": [
      {
        "id": 33824,
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
        "id": 13151,
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
        "id": 5640,
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
        "id": 218233,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 16836,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        }
      },
      {
        "id": 79036,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 73001,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 713685,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1032,
          "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 14843,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1692,
        "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 8643,
        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 16024,
        "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      },
      {
        "id": 15,
        "name": "Stealth",
        "slug": "stealth",
        "language": "eng",
        "games_count": 5032,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
        "id": 74,
        "name": "Retro",
        "slug": "retro",
        "language": "eng",
        "games_count": 32792,
        "image_background": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg"
      },
      {
        "id": 69,
        "name": "Action-Adventure",
        "slug": "action-adventure",
        "language": "eng",
        "games_count": 11417,
        "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
      },
      {
        "id": 110,
        "name": "Cinematic",
        "slug": "cinematic",
        "language": "eng",
        "games_count": 980,
        "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
      },
      {
        "id": 269,
        "name": "Quick-Time Events",
        "slug": "quick-time-events",
        "language": "eng",
        "games_count": 273,
        "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
      },
      {
        "id": 126,
        "name": "Dinosaurs",
        "slug": "dinosaurs",
        "language": "eng",
        "games_count": 1479,
        "image_background": "https://media.rawg.io/media/games/17b/17bcf0d95af7f341adbfa5eaab2841a5.jpg"
      },
      {
        "id": 306,
        "name": "Lara Croft",
        "slug": "lara-croft",
        "language": "eng",
        "games_count": 14,
        "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      },
      {
        "id": 99160,
        "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
      },
      {
        "id": 99161,
        "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
      },
      {
        "id": 99162,
        "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
      },
      {
        "id": 99163,
        "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
      },
      {
        "id": 99164,
        "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
      },
      {
        "id": 99165,
        "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
      }
    ]
  },
  {
    "id": 5679,
    "slug": "the-elder-scrolls-v-skyrim",
    "name": "The Elder Scrolls V: Skyrim",
    "released": "2011-11-11",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "rating": 4.42,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2286,
        "percent": 57.15
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1272,
        "percent": 31.8
      },
      {
        "id": 3,
        "title": "meh",
        "count": 357,
        "percent": 8.93
      },
      {
        "id": 1,
        "title": "skip",
        "count": 85,
        "percent": 2.12
      }
    ],
    "ratings_count": 3966,
    "reviews_text_count": 23,
    "added": 13434,
    "added_by_status": {
      "yet": 429,
      "owned": 8144,
      "beaten": 3122,
      "toplay": 326,
      "dropped": 1075,
      "playing": 338
    },
    "metacritic": 94,
    "playtime": 46,
    "suggestions_count": 582,
    "updated": "2022-07-20T15:17:12",
    "user_game": null,
    "reviews_count": 4000,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
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
        "released_at": "2011-11-11",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
          "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
          "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 4879,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
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
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 47464,
        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
      }
    ],
    "stores": [
      {
        "id": 6037,
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
        "id": 15144,
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
        "id": 32919,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8834,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        }
      },
      {
        "id": 49792,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1915,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 23160,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 12057,
        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 8583,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 20330,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 4889,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1208,
        "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
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
        "id": 468,
        "name": "role-playing",
        "slug": "role-playing",
        "language": "eng",
        "games_count": 1351,
        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
      },
      {
        "id": 121,
        "name": "Character Customization",
        "slug": "character-customization",
        "language": "eng",
        "games_count": 2648,
        "image_background": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg"
      },
      {
        "id": 40,
        "name": "Dark Fantasy",
        "slug": "dark-fantasy",
        "language": "eng",
        "games_count": 2552,
        "image_background": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg"
      },
      {
        "id": 66,
        "name": "Medieval",
        "slug": "medieval",
        "language": "eng",
        "games_count": 4319,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 82,
        "name": "Magic",
        "slug": "magic",
        "language": "eng",
        "games_count": 6859,
        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
      },
      {
        "id": 205,
        "name": "Lore-Rich",
        "slug": "lore-rich",
        "language": "eng",
        "games_count": 506,
        "image_background": "https://media.rawg.io/media/screenshots/525/525b5da62342fa726bfe2820e8f93c09.jpg"
      },
      {
        "id": 215,
        "name": "Dragons",
        "slug": "dragons",
        "language": "eng",
        "games_count": 2187,
        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
      },
      {
        "id": 118307,
        "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
      },
      {
        "id": 118308,
        "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
      },
      {
        "id": 118309,
        "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
      },
      {
        "id": 118310,
        "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
      },
      {
        "id": 118311,
        "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
      },
      {
        "id": 118312,
        "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
      }
    ]
  },
  {
    "id": 4291,
    "slug": "counter-strike-global-offensive",
    "name": "Counter-Strike: Global Offensive",
    "released": "2012-08-21",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "rating": 3.57,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1376,
        "percent": 46.99
      },
      {
        "id": 3,
        "title": "meh",
        "count": 772,
        "percent": 26.37
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 461,
        "percent": 15.74
      },
      {
        "id": 1,
        "title": "skip",
        "count": 319,
        "percent": 10.89
      }
    ],
    "ratings_count": 2902,
    "reviews_text_count": 20,
    "added": 13432,
    "added_by_status": {
      "yet": 214,
      "owned": 10238,
      "beaten": 791,
      "toplay": 64,
      "dropped": 1566,
      "playing": 559
    },
    "metacritic": 81,
    "playtime": 65,
    "suggestions_count": 579,
    "updated": "2022-07-18T12:48:47",
    "user_game": null,
    "reviews_count": 2928,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
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
        "released_at": "2012-08-21",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
          "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
        }
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
        "released_at": "2012-08-21",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2012-08-21",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 155362,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 53883,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      }
    ],
    "stores": [
      {
        "id": 4619,
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
        "id": 11489,
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
        "id": 49169,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1915,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
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
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 8582,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
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
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 10801,
        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 3616,
        "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
      },
      {
        "id": 80,
        "name": "Tactical",
        "slug": "tactical",
        "language": "eng",
        "games_count": 3346,
        "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4154,
        "image_background": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1208,
        "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
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
        "id": 157,
        "name": "PvP",
        "slug": "pvp",
        "language": "eng",
        "games_count": 5781,
        "image_background": "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg"
      },
      {
        "id": 70,
        "name": "War",
        "slug": "war",
        "language": "eng",
        "games_count": 7961,
        "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
      },
      {
        "id": 40837,
        "name": "In-App Purchases",
        "slug": "in-app-purchases",
        "language": "eng",
        "games_count": 1740,
        "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
      },
      {
        "id": 11,
        "name": "Team-Based",
        "slug": "team-based",
        "language": "eng",
        "games_count": 1077,
        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
      },
      {
        "id": 131,
        "name": "Fast-Paced",
        "slug": "fast-paced",
        "language": "eng",
        "games_count": 9358,
        "image_background": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg"
      },
      {
        "id": 77,
        "name": "Realistic",
        "slug": "realistic",
        "language": "eng",
        "games_count": 2684,
        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
      },
      {
        "id": 81,
        "name": "Military",
        "slug": "military",
        "language": "eng",
        "games_count": 1052,
        "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
      },
      {
        "id": 170,
        "name": "Competitive",
        "slug": "competitive",
        "language": "eng",
        "games_count": 921,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 40856,
        "name": "Valve Anti-Cheat enabled",
        "slug": "valve-anti-cheat-enabled",
        "language": "eng",
        "games_count": 104,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 73,
        "name": "e-sports",
        "slug": "e-sports",
        "language": "eng",
        "games_count": 80,
        "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
      },
      {
        "id": 245,
        "name": "Trading",
        "slug": "trading",
        "language": "eng",
        "games_count": 871,
        "image_background": "https://media.rawg.io/media/screenshots/2af/2aff127d5caa7985bfdb5106f75052fe.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 81644,
        "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
      },
      {
        "id": 81645,
        "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
      },
      {
        "id": 81646,
        "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
      },
      {
        "id": 81647,
        "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
      },
      {
        "id": 81648,
        "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
      },
      {
        "id": 81649,
        "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
      }
    ]
  },
  {
    "id": 12020,
    "slug": "left-4-dead-2",
    "name": "Left 4 Dead 2",
    "released": "2009-11-17",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "rating": 4.09,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1496,
        "percent": 53.33
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 878,
        "percent": 31.3
      },
      {
        "id": 3,
        "title": "meh",
        "count": 328,
        "percent": 11.69
      },
      {
        "id": 1,
        "title": "skip",
        "count": 103,
        "percent": 3.67
      }
    ],
    "ratings_count": 2790,
    "reviews_text_count": 8,
    "added": 13245,
    "added_by_status": {
      "yet": 332,
      "owned": 9703,
      "beaten": 2076,
      "toplay": 84,
      "dropped": 925,
      "playing": 125
    },
    "metacritic": 89,
    "playtime": 9,
    "suggestions_count": 577,
    "updated": "2022-07-20T05:57:23",
    "user_game": null,
    "reviews_count": 2805,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 94778,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 68948,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 460708,
          "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
          "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
        }
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
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
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
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 53883,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      }
    ],
    "stores": [
      {
        "id": 13208,
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
        "id": 34000,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1915,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 12057,
        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 34555,
        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 10801,
        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 3616,
        "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 4535,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 1,
        "name": "Survival",
        "slug": "survival",
        "language": "eng",
        "games_count": 6144,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 75,
        "name": "Local Co-Op",
        "slug": "local-co-op",
        "language": "eng",
        "games_count": 4554,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 80,
        "name": "Tactical",
        "slug": "tactical",
        "language": "eng",
        "games_count": 3346,
        "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4154,
        "image_background": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1208,
        "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
      },
      {
        "id": 63,
        "name": "Zombies",
        "slug": "zombies",
        "language": "eng",
        "games_count": 8770,
        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
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
        "id": 43,
        "name": "Post-apocalyptic",
        "slug": "post-apocalyptic",
        "language": "eng",
        "games_count": 2727,
        "image_background": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1169,
        "image_background": "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg"
      },
      {
        "id": 5,
        "name": "Replay Value",
        "slug": "replay-value",
        "language": "eng",
        "games_count": 1105,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 17,
        "name": "Survival Horror",
        "slug": "survival-horror",
        "language": "eng",
        "games_count": 6493,
        "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        "id": 11,
        "name": "Team-Based",
        "slug": "team-based",
        "language": "eng",
        "games_count": 1077,
        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
      },
      {
        "id": 40856,
        "name": "Valve Anti-Cheat enabled",
        "slug": "valve-anti-cheat-enabled",
        "language": "eng",
        "games_count": 104,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 244,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 40839,
        "name": "Includes Source SDK",
        "slug": "includes-source-sdk",
        "language": "eng",
        "games_count": 56,
        "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 99748,
        "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
      },
      {
        "id": 99749,
        "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
      },
      {
        "id": 99750,
        "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
      },
      {
        "id": 99751,
        "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
      },
      {
        "id": 99752,
        "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
      },
      {
        "id": 99753,
        "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
      }
    ]
  },
  {
    "id": 13536,
    "slug": "portal",
    "name": "Portal",
    "released": "2007-10-09",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "rating": 4.51,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2436,
        "percent": 60.84
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1328,
        "percent": 33.17
      },
      {
        "id": 3,
        "title": "meh",
        "count": 158,
        "percent": 3.95
      },
      {
        "id": 1,
        "title": "skip",
        "count": 82,
        "percent": 2.05
      }
    ],
    "ratings_count": 3974,
    "reviews_text_count": 21,
    "added": 13151,
    "added_by_status": {
      "yet": 367,
      "owned": 8125,
      "beaten": 4094,
      "toplay": 200,
      "dropped": 298,
      "playing": 67
    },
    "metacritic": 90,
    "playtime": 4,
    "suggestions_count": 289,
    "updated": "2022-07-20T05:56:49",
    "user_game": null,
    "reviews_count": 4004,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 460708,
          "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
          "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 94778,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 68948,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 49103,
          "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "4.4 and up"
        },
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 117922,
        "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle",
        "games_count": 87502,
        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
      }
    ],
    "stores": [
      {
        "id": 14890,
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
        "id": 40973,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 16836,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 23160,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 14811,
        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 8583,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 10801,
        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1692,
        "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 8643,
        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
        "id": 40838,
        "name": "Includes level editor",
        "slug": "includes-level-editor",
        "language": "eng",
        "games_count": 1514,
        "image_background": "https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg"
      },
      {
        "id": 111,
        "name": "Short",
        "slug": "short",
        "language": "eng",
        "games_count": 45597,
        "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1169,
        "image_background": "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg"
      },
      {
        "id": 114,
        "name": "Physics",
        "slug": "physics",
        "language": "eng",
        "games_count": 16125,
        "image_background": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
      },
      {
        "id": 148,
        "name": "Dark Humor",
        "slug": "dark-humor",
        "language": "eng",
        "games_count": 2119,
        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 244,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 40839,
        "name": "Includes Source SDK",
        "slug": "includes-source-sdk",
        "language": "eng",
        "games_count": 56,
        "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
      },
      {
        "id": 87,
        "name": "Science",
        "slug": "science",
        "language": "eng",
        "games_count": 1346,
        "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
      }
    ],
    "esrb_rating": {
      "id": 3,
      "name": "Teen",
      "slug": "teen"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
      },
      {
        "id": 115793,
        "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
      },
      {
        "id": 115794,
        "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
      },
      {
        "id": 115795,
        "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
      },
      {
        "id": 115796,
        "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
      },
      {
        "id": 115797,
        "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
      },
      {
        "id": 115798,
        "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
      }
    ]
  },
  {
    "id": 4062,
    "slug": "bioshock-infinite",
    "name": "BioShock Infinite",
    "released": "2013-03-26",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "rating": 4.39,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 1950,
        "percent": 55.12
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1188,
        "percent": 33.58
      },
      {
        "id": 3,
        "title": "meh",
        "count": 309,
        "percent": 8.73
      },
      {
        "id": 1,
        "title": "skip",
        "count": 91,
        "percent": 2.57
      }
    ],
    "ratings_count": 3507,
    "reviews_text_count": 20,
    "added": 12896,
    "added_by_status": {
      "yet": 694,
      "owned": 7724,
      "beaten": 3679,
      "toplay": 320,
      "dropped": 393,
      "playing": 86
    },
    "metacritic": 94,
    "playtime": 12,
    "suggestions_count": 603,
    "updated": "2022-07-18T02:28:37",
    "user_game": null,
    "reviews_count": 3538,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
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
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 4879,
          "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
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
        "released_at": "2013-03-26",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
          "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 68948,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
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
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 53883,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      }
    ],
    "stores": [
      {
        "id": 71727,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 73001,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 440409,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4720,
          "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        }
      },
      {
        "id": 461035,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8834,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        }
      },
      {
        "id": 4382,
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
        "id": 13084,
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
        "id": 33810,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1915,
          "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 23160,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 12057,
        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 14811,
        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 10801,
        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 20330,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 4535,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 115,
        "name": "Controller",
        "slug": "controller",
        "language": "eng",
        "games_count": 7693,
        "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
      },
      {
        "id": 119,
        "name": "Dystopian",
        "slug": "dystopian",
        "language": "eng",
        "games_count": 1509,
        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
      },
      {
        "id": 154,
        "name": "Steampunk",
        "slug": "steampunk",
        "language": "eng",
        "games_count": 958,
        "image_background": "https://media.rawg.io/media/games/c32/c323f9c17ac95c363772bb9ff3693dc6.jpg"
      },
      {
        "id": 305,
        "name": "Linear",
        "slug": "linear",
        "language": "eng",
        "games_count": 2559,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 208,
        "name": "Alternate History",
        "slug": "alternate-history",
        "language": "eng",
        "games_count": 1256,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 317,
        "name": "Time Travel",
        "slug": "time-travel",
        "language": "eng",
        "games_count": 1471,
        "image_background": "https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg"
      },
      {
        "id": 287,
        "name": "Political",
        "slug": "political",
        "language": "eng",
        "games_count": 439,
        "image_background": "https://media.rawg.io/media/screenshots/f9f/f9fd255f048e899da8486ee9bb846978.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
      },
      {
        "id": 98549,
        "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
      },
      {
        "id": 98550,
        "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
      },
      {
        "id": 98551,
        "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
      },
      {
        "id": 98552,
        "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
      },
      {
        "id": 98553,
        "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
      },
      {
        "id": 98554,
        "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
      }
    ]
  },
  {
    "id": 3439,
    "slug": "life-is-strange-episode-1-2",
    "name": "Life is Strange",
    "released": "2015-01-29",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "rating": 4.11,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 1411,
        "percent": 43.81
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1168,
        "percent": 36.26
      },
      {
        "id": 3,
        "title": "meh",
        "count": 434,
        "percent": 13.47
      },
      {
        "id": 1,
        "title": "skip",
        "count": 208,
        "percent": 6.46
      }
    ],
    "ratings_count": 3186,
    "reviews_text_count": 22,
    "added": 12799,
    "added_by_status": {
      "yet": 686,
      "owned": 8269,
      "beaten": 2886,
      "toplay": 293,
      "dropped": 524,
      "playing": 141
    },
    "metacritic": 83,
    "playtime": 7,
    "suggestions_count": 519,
    "updated": "2022-07-20T15:14:26",
    "user_game": null,
    "reviews_count": 3221,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
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
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 68948,
          "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 94778,
          "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 3,
          "name": "iOS",
          "slug": "ios",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 74681,
          "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": {
          "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
        },
        "requirements_ru": null
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
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 49103,
          "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": {
          "minimum": "6.0 and up"
        },
        "requirements_ru": null
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
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
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
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
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
      },
      {
        "platform": {
          "id": 4,
          "name": "iOS",
          "slug": "ios"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 117922,
        "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
      }
    ],
    "stores": [
      {
        "id": 451321,
        "store": {
          "id": 5,
          "name": "GOG",
          "slug": "gog",
          "domain": "gog.com",
          "games_count": 4279,
          "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
        }
      },
      {
        "id": 3702,
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
        "id": 35603,
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
        "id": 35602,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4720,
          "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
        }
      },
      {
        "id": 217695,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 16836,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        }
      },
      {
        "id": 245823,
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
        "id": 44714,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 73001,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      }
    ],
    "clip": null,
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
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 23160,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7582,
        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 15204,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 8643,
        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 11313,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 141,
        "name": "Point & Click",
        "slug": "point-click",
        "language": "eng",
        "games_count": 10094,
        "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
      },
      {
        "id": 111,
        "name": "Short",
        "slug": "short",
        "language": "eng",
        "games_count": 45597,
        "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
      },
      {
        "id": 117,
        "name": "Mystery",
        "slug": "mystery",
        "language": "eng",
        "games_count": 9988,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 145,
        "name": "Choices Matter",
        "slug": "choices-matter",
        "language": "eng",
        "games_count": 2372,
        "image_background": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg"
      },
      {
        "id": 120,
        "name": "Memes",
        "slug": "memes",
        "language": "eng",
        "games_count": 1417,
        "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
      },
      {
        "id": 91,
        "name": "Walking Simulator",
        "slug": "walking-simulator",
        "language": "eng",
        "games_count": 5455,
        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
      },
      {
        "id": 406,
        "name": "Story",
        "slug": "story",
        "language": "eng",
        "games_count": 10512,
        "image_background": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg"
      },
      {
        "id": 218,
        "name": "Multiple Endings",
        "slug": "multiple-endings",
        "language": "eng",
        "games_count": 5504,
        "image_background": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg"
      },
      {
        "id": 232,
        "name": "Episodic",
        "slug": "episodic",
        "language": "eng",
        "games_count": 415,
        "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
      },
      {
        "id": 317,
        "name": "Time Travel",
        "slug": "time-travel",
        "language": "eng",
        "games_count": 1471,
        "image_background": "https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg"
      },
      {
        "id": 295,
        "name": "Soundtrack",
        "slug": "soundtrack",
        "language": "eng",
        "games_count": 2547,
        "image_background": "https://media.rawg.io/media/games/dec/decdfa154a72265cd2914097666a99d5.jpg"
      },
      {
        "id": 302,
        "name": "Time Manipulation",
        "slug": "time-manipulation",
        "language": "eng",
        "games_count": 294,
        "image_background": "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg"
      },
      {
        "id": 992,
        "name": "student",
        "slug": "student",
        "language": "eng",
        "games_count": 1366,
        "image_background": "https://media.rawg.io/media/screenshots/d05/d052da38d4b082cb250f0ac86158117e.jpg"
      },
      {
        "id": 2682,
        "name": "strange",
        "slug": "strange",
        "language": "eng",
        "games_count": 334,
        "image_background": "https://media.rawg.io/media/screenshots/cd8/cd87f13df436ca4df58028522836048d.jpg"
      },
      {
        "id": 3197,
        "name": "photography",
        "slug": "photography",
        "language": "eng",
        "games_count": 185,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 1826487,
        "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
      },
      {
        "id": 1826488,
        "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
      },
      {
        "id": 1826489,
        "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
      },
      {
        "id": 1826490,
        "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
      },
      {
        "id": 1826491,
        "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
      },
      {
        "id": 1826492,
        "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
      }
    ]
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: ReadonlyArray<Game> = GAMES as any;
  isOpen = false
  currentGameId: number = -1

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    // TODO: Destroy sub on componet's destroy
    // this.httpService.getListOfGames().subscribe(({ results }) => this.games = results)
  }

  showGameDetails(id: number) {
    this.currentGameId = id
    this.isOpen = true
  }

  hideGameDetails() {
    this.currentGameId = -1
    this.isOpen = false
  }
}


