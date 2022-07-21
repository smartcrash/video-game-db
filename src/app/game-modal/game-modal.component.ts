import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { GameDetailsWithScreenhotsAndMovies } from '../models';
import { HttpService } from '../services/http.service';

const GAME = {
  "id": 3328,
  "slug": "the-witcher-3-wild-hunt",
  "name": "The Witcher 3: Wild Hunt",
  "name_original": "The Witcher 3: Wild Hunt",
  "description": "<p>The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.</p>\n<p>CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.</p>\n<p>Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>",
  "metacritic": 92,
  "metacritic_platforms": [
    {
      "metascore": 91,
      "url": "https://www.metacritic.com/game/xbox-one/the-witcher-3-wild-hunt",
      "platform": {
        "platform": 1,
        "name": "Xbox One",
        "slug": "xbox-one"
      }
    },
    {
      "metascore": 93,
      "url": "https://www.metacritic.com/game/pc/the-witcher-3-wild-hunt",
      "platform": {
        "platform": 4,
        "name": "PC",
        "slug": "pc"
      }
    },
    {
      "metascore": 92,
      "url": "https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt",
      "platform": {
        "platform": 18,
        "name": "PlayStation 4",
        "slug": "playstation4"
      }
    }
  ],
  "released": "2015-05-18",
  "tba": false,
  "updated": "2022-07-21T10:31:16",
  "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  "background_image_additional": "https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg",
  "website": "https://thewitcher.com/en/witcher3",
  "rating": 4.67,
  "rating_top": 5,
  "ratings": [
    {
      "id": 5,
      "title": "exceptional",
      "count": 4272,
      "percent": 78.03
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
  "reactions": {
    "1": 50,
    "2": 11,
    "3": 48,
    "4": 24,
    "5": 13,
    "6": 9,
    "7": 15,
    "10": 15,
    "11": 17,
    "12": 19,
    "14": 1,
    "15": 1,
    "16": 2,
    "21": 1
  },
  "added": 16516,
  "added_by_status": {
    "yet": 929,
    "owned": 9567,
    "beaten": 3877,
    "toplay": 656,
    "dropped": 721,
    "playing": 766
  },
  "playtime": 46,
  "screenshots_count": 107,
  "movies_count": 0,
  "creators_count": 34,
  "achievements_count": 684,
  "parent_achievements_count": 49,
  "reddit_url": "https://www.reddit.com/r/thewitcher3/",
  "reddit_name": "r/thewitcher3",
  "reddit_description": "A subreddit for veterans and new fans alike of The Witcher 3: Wild Hunt as well as for other Witcher games and the franchise in general. Everyone is welcome.",
  "reddit_logo": "",
  "reddit_count": 8520,
  "twitch_count": 151,
  "youtube_count": 1000000,
  "reviews_text_count": 78,
  "ratings_count": 5397,
  "suggestions_count": 656,
  "alternative_names": [],
  "metacritic_url": "https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt",
  "parents_count": 0,
  "additions_count": 3,
  "game_series_count": 7,
  "user_game": null,
  "reviews_count": 5475,
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
    },
    {
      "platform": {
        "id": 7,
        "name": "Nintendo",
        "slug": "nintendo"
      }
    }
  ],
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
      "released_at": "2015-05-18",
      "requirements": {}
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
      "released_at": "2015-05-18",
      "requirements": {}
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
      "released_at": "2015-05-18",
      "requirements": {}
    }
  ],
  "stores": [
    {
      "id": 354780,
      "url": "",
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
      "id": 305376,
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
      "id": 312313,
      "url": "",
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
      "url": "",
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
  "developers": [
    {
      "id": 9023,
      "name": "CD PROJEKT RED",
      "slug": "cd-projekt-red",
      "games_count": 19,
      "image_background": "https://media.rawg.io/media/games/c19/c193180583c34e5753a1aaf15a586761.jpg"
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
  "publishers": [
    {
      "id": 7411,
      "name": "CD PROJEKT RED",
      "slug": "cd-projekt-red",
      "games_count": 19,
      "image_background": "https://media.rawg.io/media/games/c19/c193180583c34e5753a1aaf15a586761.jpg"
    }
  ],
  "esrb_rating": {
    "id": 4,
    "name": "Mature",
    "slug": "mature"
  },
  "clip": null,
  "description_raw": "The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.",
  "screenshots": [
    {
      "id": 30336,
      "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    },
    {
      "id": 30337,
      "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    },
    {
      "id": 30338,
      "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    },
    {
      "id": 30339,
      "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    },
    {
      "id": 30340,
      "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    },
    {
      "id": 30342,
      "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
      "width": 1280,
      "height": 720,
      "is_deleted": false
    }
  ],
  "movies": []
}

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
})
export class GameModalComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  /** Current displayed game's ID */
  @Input() id: number = -1

  /** Whether or not the modal is visible */
  @Input() isOpen = false

  /** Is triggred when the modal is closed by the user */
  @Output() onClose = new EventEmitter<void>()

  /** Reference to the modal's <div> */
  @ViewChild('modal') private modalElement!: ElementRef<HTMLDivElement>

  /** Holds and instance of Boostrap's Modal */
  private modal!: Modal

  /** Game details */
  game?: GameDetailsWithScreenhotsAndMovies

  /** Stores the result of previously fetched games */
  private cache: Record<number, GameDetailsWithScreenhotsAndMovies> = {}

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* This open/closes the boostrap modal when `isOpen` changes */
    if (this.modal) {
      const { isOpen } = changes
      const { currentValue, previousValue } = isOpen

      // Do something if the value actualy changed
      if (currentValue !== previousValue) {
        if (currentValue) this.modal.show()
        else this.modal.hide()
      }
    }


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

  ngAfterViewInit(): void {
    const { nativeElement } = this.modalElement

    this.modal = new Modal(nativeElement, {})

    nativeElement.addEventListener('hide.bs.modal', () => this.onClose.emit())
  }

  ngOnDestroy(): void {
    this.modal.dispose()
  }
}
