import happy from './sprites/emotions/happy-sheet´';
import content from './sprites/emotions/content-sheet'
import okay from './sprites/emotions/okay-sheet';
import sad from './sprites/emotions/sad-sheet';
import angry from './sprites/emotions/angry-sheet';




export function getEmotionSprite (emotion) {
    //create a switch/case for emotions
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
    }

}