type PokemonList = {
    count: number
    next: string
    previous: any
    results: Result[]
}
  
type Result = {
    name: string
    url: string
}


// Response Single Pokemon

type GetPokemonById = {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
}
  
type Ability = {
    ability: Ability2
    is_hidden: boolean
    slot: number
}
  
type Ability2 = {
    name: string
    url: string
}
  
type Cries = {
    latest: string
    legacy: string
}
  
type Form = {
    name: string
    url: string
}
  
type Index = {
    game_index: number
    version: Version
}
  
type Version = {
    name: string
    url: string
}
  
type Mfe = {
    move: Move
    version_group_details: VersionGroupDetail[]
}
  
type Move = {
    name: string
    url: string
}
  
type VersionGroupDetail = {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
}
  
type MoveLearnMethod = {
    name: string
    url: string
}
  
type VersionGroup = {
    name: string
    url: string
}
  
type Species = {
    name: string
    url: string
}
  
type Sprites = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
}
  
type Other = {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
}
  
type DreamWorld = {
    front_default: string
    front_female: any
}
  
type Home = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type OfficialArtwork = {
    front_default: string
    front_shiny: string
}
  
type Showdown = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type Versions = {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
}
  
type GenerationI = {
    "red-blue": RedBlue
    yellow: Yellow
}
  
type RedBlue = {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}
  
type Yellow = {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}
  
type GenerationIi = {
    crystal: Crystal
    gold: Gold
    silver: Silver
}
  
type Crystal = {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
}
  
type Gold = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}
  
type Silver = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}
  
type GenerationIii = {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
}
  
type Emerald = {
    front_default: string
    front_shiny: string
}
  
type FireredLeafgreen = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}
  
type RubySapphire = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}
  
type GenerationIv = {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
}
  
type DiamondPearl = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type HeartgoldSoulsilver = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type Platinum = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type GenerationV = {
    "black-white": BlackWhite
}
  
type BlackWhite = {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type Animated = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type GenerationVi = {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
}
  
type OmegarubyAlphasapphire = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type XY = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type GenerationVii = {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
}
  
type Icons = {
    front_default: string
    front_female: any
}
  
type UltraSunUltraMoon = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}
  
type GenerationViii = {
    icons: Icons2
}
  
type Icons2 = {
    front_default: string
    front_female: any
}
  
type Stat = {
    base_stat: number
    effort: number
    stat: Stat2
}
  
type Stat2 = {
    name: string
    url: string
}
  
type Type = {
    slot: number
    type: Type2
}
  
type Type2 = {
    name: string
    url: string
}

// species pokemon response

type ResponseSpeciesPokemon = {
    base_happiness: number
    capture_rate: number
    color: Color
    egg_groups: EggGroup[]
    evolution_chain: EvolutionChain
    evolves_from_species: any
    flavor_text_entries: FlavorTextEntry[]
    form_descriptions: any[]
    forms_switchable: boolean
    gender_rate: number
    genera: Genera[]
    generation: Generation
    growth_rate: GrowthRate
    habitat: Habitat
    has_gender_differences: boolean
    hatch_counter: number
    id: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    name: string
    names: Name[]
    order: number
    pal_park_encounters: PalParkEncounter[]
    pokedex_numbers: PokedexNumber[]
    shape: Shape
    varieties: Variety[]
  }
  
  type Color = {
    name: string
    url: string
  }
  
  type EggGroup = {
    name: string
    url: string
  }
  
  type EvolutionChain = {
    url: string
  }
  
  type FlavorTextEntry = {
    flavor_text: string
    language: Language
    version: Version
  }
  
  type Language = {
    name: string
    url: string
  }
  
  type Version = {
    name: string
    url: string
  }
  
  type Genera = {
    genus: string
    language: Language2
  }
  
  type Language2 = {
    name: string
    url: string
  }
  
  type Generation = {
    name: string
    url: string
  }
  
  type GrowthRate = {
    name: string
    url: string
  }
  
  type Habitat = {
    name: string
    url: string
  }
  
  type Name = {
    language: Language3
    name: string
  }
  
  type Language3 = {
    name: string
    url: string
  }
  
  type PalParkEncounter = {
    area: Area
    base_score: number
    rate: number
  }
  
  type Area = {
    name: string
    url: string
  }
  
  type PokedexNumber = {
    entry_number: number
    pokedex: Pokedex
  }
  
  type Pokedex = {
    name: string
    url: string
  }
  
  type Shape = {
    name: string
    url: string
  }
  
  type Variety = {
    is_default: boolean
    pokemon: Pokemon
  }
  
  type Pokemon = {
    name: string
    url: string
  }
  
  
  // mypokemon

type PokemonCollection = {
    pokemonList: MyPokemon[];
};

type MyPokemon = {
    id: string;
    name: string;
    weight: string;
    height: string;
};