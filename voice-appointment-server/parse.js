export function extractDetails(transcript) {
  // match following script format:
  // e.g.: "patient name Swapnil Verma symptoms fever and weakness preferred doctor Dr Alex"

  const patientNameMatch = transcript.match(/patient name ([\w\s]+?) symptoms/);
  const symptomsMatch = transcript.match(/symptoms ([\w\s,]+?) preferred doctor/);
  const doctorMatch = transcript.match(/preferred doctor ([\w\s]+)$/);

  return {
    patientName: patientNameMatch ? patientNameMatch[1].trim() : '',
    symptoms: symptomsMatch ? symptomsMatch[1].trim() : '',
    preferredDoctor: doctorMatch ? doctorMatch[1].trim() : '',
  };
}