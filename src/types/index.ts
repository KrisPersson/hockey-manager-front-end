export interface MyGameData {
    userName: string;
    gameStarted: Date;
    coach: Coach,
}

export interface Coach {
    firstname: string;
    lastname: string;
    birthdate: Date;
    previousJobs: [{team: string; joined: Date, left: Date}];
    currentContract: RegularContract;
    isUser: boolean;
}

export interface Arena {
    name: string;
    location: string;
    capacity: number;
    constructionYear: number;
}

export interface Team {
    currentLeague: string;
    colors: string[];
    town: string;
    foundedYear: number;
    currentRoster: PlayerId[];
    currentCaptain: PlayerId;
    currentFirstAssCaptain: PlayerId;
    currentSecondAssCaptain: PlayerId;
    staff: StaffId;
    isUserControlled: boolean;
    coach: Coach;
}

type PlayerId = string
type StaffId = string

type PlayerPosition = 'GK' | 'LD' | 'RD' | 'LW' | 'C' | 'RW'

export interface Player {
    id: PlayerId;
    name: {
        first: string;
        last: string;
        nickname?: string;
    },
    position: PlayerPosition[];
    birthdate: Date;
    nationality: string;
    youthTeam: string;
    currentContract: RegularContract;
    loanStatus: LoanContract | null;
    inGameSkills: InGameSkills;
    jerseyNum: number;
}

export interface InGameSkills {
    static: {
        heightCm: number;
        weightKg: number;
        shoots: 'R' | 'L';
    },
    dynamic: InGameSkillsDynamicPlayer | InGameSkillsDynamicGK
}

interface InGameSkillsDynamicPlayer {
    acceleration: SkillRangeZeroToTwenty;
    aggression: SkillRangeZeroToTwenty;
    defensiveRead: SkillRangeZeroToTwenty;
    deking: SkillRangeZeroToTwenty;
    hitting: SkillRangeZeroToTwenty;
    leadership: SkillRangeZeroToTwenty;
    offensiveRead: SkillRangeZeroToTwenty;
    passing: SkillRangeZeroToTwenty;
    puckHandling: SkillRangeZeroToTwenty;
    shootingAccuracy: SkillRangeZeroToTwenty;
    shotBlocking: SkillRangeZeroToTwenty;
    shotPower: SkillRangeZeroToTwenty;
    speed: SkillRangeZeroToTwenty;
    stamina: SkillRangeZeroToTwenty;
    strength: SkillRangeZeroToTwenty;
    teamPlayer: SkillRangeZeroToTwenty;
}

interface InGameSkillsDynamicGK {
    aggression: SkillRangeZeroToTwenty;
    blocker: SkillRangeZeroToTwenty;
    glove: SkillRangeZeroToTwenty;
    highShots: SkillRangeZeroToTwenty;
    leadership: SkillRangeZeroToTwenty;
    lowShots: SkillRangeZeroToTwenty;
    passing: SkillRangeZeroToTwenty;
    puckHandling: SkillRangeZeroToTwenty;
    rebound: SkillRangeZeroToTwenty;
    recovery: SkillRangeZeroToTwenty;
    reflexes: SkillRangeZeroToTwenty;
    stamina: SkillRangeZeroToTwenty;
    strength: SkillRangeZeroToTwenty;
    teamPlayer: SkillRangeZeroToTwenty;
}

type SkillRangeZeroToTwenty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

interface RegularContract {
    expires: string;
    team: string;
    cameFrom: string;
}

interface LoanContract {
    expires: string;
    team: string;
}
type EPEndorsementsGK = 
    'Positioning' |
    'Glove' |
    'Rebound' |
    'Recovery' |
    'Low Shots' |
    'Aggression' |
    'Reflexes' |
    'Blocker' |
    'Stamina'

type EPEndorsements = 
    'Aggression' |
    'Acceleration' |
    'Defensive Read' | 
    'Deking' |
    'Hitting' |
    'Leadership' |
    'Offensive Read' | 
    'Passing' |
    'Puck handling' |
    'Shooting Accuracy' |
    'Shot Blocking' |
    'Shot Power' |
    'Speed' |
    'Stamina' |
    'Strength' | 
    'Team Player' 





