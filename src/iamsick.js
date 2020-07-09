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

  // Check if my symptoms are compatible with illness MANDATORY symptoms
  let compatibleMandatorySymptoms = 0;

  for (let symptom of mySymptoms) {
    console.log(symptom);

    if(mandatorySymptoms.includes( symptom )) {
      compatibleMandatorySymptoms += 1;
    }
  }

  let probabilityMandatorySymptoms = 
    (compatibleMandatorySymptoms / mandatorySymptoms.length);

  console.log('Mandatory Symptoms probability', probabilityMandatorySymptoms);

  // Check if my symptoms are compatible with illness OPTIONAL symptoms
  let compatibleOptionalSymptoms = 0;

  for (let symptom of mySymptoms) {
    console.log(symptom);

    if(optionaSymptoms.includes( symptom )) {
      compatibleOptionalSymptoms += 1;
    }
  }

  let probabilityOptionalSymptoms = 
  (compatibleOptionalSymptoms / optionaSymptoms.length);

  console.log('Optional Symptoms probability', probabilityOptionalSymptoms);

  // Return final probability
  return (probabilityMandatorySymptoms * 0.7) + (probabilityOptionalSymptoms * 0.3);
};
  
export default {
    iAmSick
};
  