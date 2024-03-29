import { GAMETYPES } from '../../../types/types';
import React from 'react';
import classes from './GameLogo.module.scss';

import minecraftLogo from '../../../assets/minecraft-logo.svg';
import counterStrikeLogo from '../../../assets/counter-logo.svg';
import leagueOfLegendsLogo from '../../../assets/league-logo.png';
import rocketLeagueLogo from '../../../assets/rocket-logo.png';
import valorantLogo from '../../../assets/valorant-logo.png';
import r6Logo from '../../../assets/r6-logo.svg';

interface GameLogoProps {
    game: GAMETYPES,
    className?: string,
    onClick?: Function
}

const GameLogo: React.FC<GameLogoProps> = ({ game, className, onClick }) => {
    let imgSrc = '';
    let imgClass = '';
    let imgAlt = '';
    switch(game) {
        case GAMETYPES.COUNTER_STRIKE:
            imgSrc = counterStrikeLogo;
            imgAlt = 'Counter Strike: Global Offensive Logo'
            imgClass = classes.GameLogo__counter
            break;
        case GAMETYPES.ROCKET_LEAGUE:
            imgSrc = rocketLeagueLogo;
            imgAlt = 'Rocket League Logo'
            imgClass = classes.GameLogo__rocket
            break;
        case GAMETYPES.LOL:
            imgSrc = leagueOfLegendsLogo;
            imgAlt = 'League of Legends Logo'
            imgClass = classes.GameLogo__lol
            break;
        case GAMETYPES.MINECRAFT:
            imgSrc = minecraftLogo;
            imgClass = classes.GameLogo__minecraft
            imgAlt = 'Minecraft Logo'
            break;
        case GAMETYPES.VALORANT:
            imgSrc = valorantLogo;
            imgClass = classes.GameLogo__valorant
            imgAlt = 'Valorant Logo'
            break;
        case GAMETYPES.R6:
            imgSrc = r6Logo;
            imgClass = classes.GameLogo__r6
            imgAlt = 'R6 Logo'
            break;
        default:
            break;
    }
    imgClass += (" " + className + " " + classes.GameLogo)
    return <img onClick={() => {
        if (onClick) {
            onClick();
        }
    }}className={imgClass} alt={imgAlt} src={imgSrc}>
    </img>
};

export default GameLogo;