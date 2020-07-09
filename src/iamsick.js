import { SickException } from './iamsick.error';

export const iAmSick = ( mandatorySymptoms, optionaSymptoms, mySymptoms ) => {
  
  if ( !mandatorySymptoms || mandatorySymptoms.length === 0)
  {
    throw new SickException("NO mandatory symptoms defined");
  }

  if(mySymptoms.length > 0)
  {
    return true
  }

  return false;
};
  
export default {
    iAmSick
};
  