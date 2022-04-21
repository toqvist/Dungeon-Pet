import happy from './sprites/emotions/happy-sheet.svg';
import content from './sprites/emotions/content-sheet.svg'
import okay from './sprites/emotions/okay-sheet.svg';
import sad from './sprites/emotions/sad-sheet.svg';
import angry from './sprites/emotions/angry-sheet.svg';
import bored from './sprites/emotions/bored-sheet.svg'



export function getEmotionSprite (emotion) {
    switch (emotion) {
        case 'happy':
            return happy;
        case 'content':
            return content
        case 'okay':
            return okay
        case 'sad':
            return sad
        case 'angry':
            return angry
        case 'bored':
            return bored
    }
}