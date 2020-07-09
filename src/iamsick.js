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

  // Check if my symptoms are compatible with illness symptoms
  let compatibleMandatorySymptoms = 0;

  for (let symptom of mySymptoms) {
    console.log(symptom);

    if(mandatorySymptoms.includes( symptom )) {
      compatibleMandatorySymptoms += 1;
    }

  }

  if(compatibleMandatorySymptoms > 0) {
    return true;
  }

  return false;
};
  
export default {
    iAmSick
};
  