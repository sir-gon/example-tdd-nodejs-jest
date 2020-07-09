import { SickException } from './iamsick.error';

export const iAmSick = ( mandatorySymptoms, optionaSymptoms, mySymptoms ) => {
  
  if ( !Array.isArray(mySymptoms) || mandatorySymptoms.length === 0)
  {
    throw new SickException("NO mandatory symptoms defined");
  }

  if ( !Array.isArray(mySymptoms) )
  {
    throw new SickException("My symptoms is not fined");
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
  