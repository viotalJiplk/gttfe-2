export enum headingTypes {
    'h1' = 'h1',
    'h2' = 'h2',
    'h3' = 'h3',
    'main' = 'main'
}

export enum GAMETYPES {
    'MINECRAFT' = 'MINECRAFT',
    'COUNTER_STRIKE' = 'COUNTER_STRIKE',
    'LOL' = 'LOL',
    'ROCKET_LEAGUE' = 'ROCKET_LEAGUE',
    'VALORANT' = 'VALORANT',
    'R6' = 'R6',
}

export enum ROLES {
    'CAPTAIN' = 'CAPTAIN',
    'MEMBER' = 'MEMBER',
    'RESERVIST' = 'RESERVIST'
}

export enum REGISTRATIONVARIANTS {
    'TEAM' = 'TEAM',
    'ALONE' = 'ALONE'
}

export interface Contestant {
    name: string,
    surname: string
    email: string
    discord: string,
    nickname: string,
    csRank?: string,
    faceitLevel?: string,
    maxCsRank?: string,
    maxFaceitLevel?: string,
    epicId?: string,
    adult: boolean
    schoolId?: any,
    role?: ROLES,
    externist?: boolean

}

export interface Error {
    kind: string,
    msg: string
}

export interface School {
    schoolId: Number,
    name: string
}

export interface Game {
    name: string,
    registrationStart: string,
    registrationEnd: string,
    maxTeams: Number,
    gameId: Number
}
  
export interface GeneratedRole{
    roleName: String,
    discordRoleId: Number,
    discordRoleIdEligible: Number,
    gameId: Number,
    default: Boolean,
    minimal: Number,
    maximal: Number,
    generatedRoleId: Number
  }